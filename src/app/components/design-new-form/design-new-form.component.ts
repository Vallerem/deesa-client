import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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


  BASE_URL: string = environment.baseAPI; //http://localhost:3000

  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/designs/new`
  });

  designInfo: any = {
    designGallery: []
  };

  // //designInfo: any = {};

  // img : any;
  // @Output() submittedForm = new EventEmitter < boolean > ();

  constructor(private userAPI: UserService) { }

  ngOnInit() {}

  submitForm() {
    
        this.uploader.onBuildItemForm = (item, form) => {
          item.withCredentials = false;
          form.append('creator', this.userAPI._currentUser._id );
          form.append('title', this.designInfo.title);
          form.append('description', this.designInfo.description );   
        };

        this.uploader.uploadAll();
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
