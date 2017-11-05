import { UserService } from './../../services/user.service';
import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

import { FileSelectDirective } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'design-new-wrapper',
  templateUrl: './design-new-wrapper.component.html',
  styleUrls: ['./design-new-wrapper.component.css']
})
export class DesignNewWrapperComponent implements OnInit {

  BASE_URL: string = environment.baseAPI; //http://localhost:3000
  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/new`
  });

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  designInfo: any = {};
  arr = [];

  constructor(private userAPI: UserService, private designService: DesignService) { }

  ngOnInit() {
    this.userAPI.getAccount(this.currentUser).subscribe((res) => {
      this.currentUser.idCreator = res.user._id;
      console.log(`designsList -->${JSON.stringify(this.currentUser)}`);
    });
  }

  newDesign(designForm) {

        console.log("desgin-new-wrapper.component.");
        designForm.creator = this.currentUser.idCreator; // add id creator
        console.log(`designForm--> ${JSON.stringify(designForm)}`);

          this.designService.newDesign(designForm)
          .subscribe((res) => {
            this.designInfo = res;
            console.log(`response newDesign designInfo: ${this.designInfo}`);

            this.arr.push(this.designInfo);
            this.arr.forEach((e)=>{
              console.log(e);
            });

          });
      }
}
