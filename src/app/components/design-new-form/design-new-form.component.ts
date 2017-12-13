import { DesignService } from './../../services/design.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { FileSelectDirective } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'design-new-form',
  templateUrl: './design-new-form.component.html',
  styleUrls: ['./design-new-form.component.css']
})
export class DesignNewFormComponent implements OnInit {

  @Output() submittedForm = new EventEmitter < boolean > ();
  BASE_URL: string = environment.baseAPI; //http://localhost:3000

  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/designs/new`
  });
  designInfo: any = {
    designGallery: []
  };

  designImage: "";
  localImageUrl: "";
  message: any;

  // //designInfo: any = {};
  // img : any;
  // @Output() submittedForm = new EventEmitter < boolean > ();

  constructor(public userAPI: UserService, public designAPI: DesignService, public sanitizer:DomSanitizer) {

  this.uploader.onAfterAddingFile = (fileItem) => {
    let url = (window.URL) ? window.URL.createObjectURL(fileItem._file) : (window as any).webkitURL.createObjectURL(fileItem._file);
    this.localImageUrl = url
}
  }

  ngOnInit() {}

  submitForm() {

/*         this.uploader.onBuildItemForm = (item, form) => {
          item.withCredentials = false;
          form.append('creator', this.userAPI._currentUser._id );
          form.append('title', this.designInfo.title);
          form.append('description', this.designInfo.description );
        };
        this.uploader.uploadAll(); */

        if (this.uploader.queue[0].file) {

          this.designInfo.creator = this.userAPI._currentUser._id;
          this.designInfo.username = this.userAPI._currentUser.username;
          this.designInfo.designMainImg = `assets/images/designs/${this.uploader.queue[0].file.name}`;
          this.uploader.queue =[];
          this.submittedForm.emit(this.designInfo); //Output - Send to parent

/*           this.designAPI.newDesign(this.designInfo)
            .subscribe((res) => {
              console.log("diseño siubido a la bbdd");

            }); */
        }
        else{
          this.message="Error al subir imagen";
        }
  }


  // console.log("event:");
  // console.log(event);
  // console.log("SUBMITFORM!");
  // console.log(`this.designInfo-->${JSON.stringify(this.designInfo)}`);
  //   try
  //   {if( (typeof(event.designInfo.title) != "undefined")){console.log("TITLE UNDEFINED");
  //   }}
  //   catch(e){console.log(e)}

  //       this.submittedForm.emit(this.designInfo); //Output - Send to parent




      // addImg() {
      //   this.designInfo.designGallery.push(this.img)
      //   this.img = ''
      // }

}
