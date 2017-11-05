import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FileSelectDirective } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  BASE_URL: string = environment.baseAPI; //http://localhost:3000

  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/avatar`
  });

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  currentView: string = "Account";
  accountInfo: any; //JSON
  userAvatar: any = JSON.parse(localStorage.getItem('user'));
  innerWidth = (window.screen.width) + "px";
  arr = [];
  feedback = undefined;
  message:any;


  constructor(private userAPI: UserService) {}

  ngOnInit() {

    this.userAPI.getAccount(this.userAPI._currentUser)
      .subscribe((res) => {
        this.accountInfo = res;
        this.userAvatar = res.avatarUrl;
      });
    // console.log("********************");
    // console.log(this.userAPI._currentUser);
    
    this.userAPI.getAccount(this.userAPI._currentUser)
      .subscribe((res) => {
        // console.log(`ngOnInit[PARENT] subscribe response-->${JSON.stringify(res)}`);
        this.accountInfo = res;
        this.userAvatar = res.avatarUrl;
      });
      this.arr.push(this.accountInfo);
      this.arr.forEach((e)=>{
        // console.log(e);
      })

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  submitImage() {

    this.uploader.onBuildItemForm = (item, form) => {
          item.withCredentials = false;
          form.append('_id', this.userAPI._currentUser._id );
          form.append('old_imgUrl', this.accountInfo.user.avatarUrl );       
        };

    this.uploader.uploadAll();
  }

  editAccount(accountInfo) {

    if (accountInfo.currentView === 'Account') {
      this.message="Cuenta mofificada";
      this.userAPI.editAccount(accountInfo.user)
        .subscribe((res) => {
          this.accountInfo.user.userInfo = res.user.userInfo;
          console.log(`response editAccount:`);
          console.log(this.accountInfo);

        });
    }

    if (accountInfo.currentView === 'Password') {
      //this.message="Contraseña modificada";
      this.userAPI.editPasswordAccount(accountInfo.user)
        .subscribe((res) => {
          //this.accountInfo = res;
          this.message = res.message;
          console.log(`response password: ${this.accountInfo}`);

        });
    }

    if (accountInfo.currentView === 'Address') {
      this.message = "Direccion mofificada";
      this.userAPI.editAddressAccount(accountInfo.user)
        .subscribe((res) => {
          this.accountInfo.user.addressInfo = res.user.addressInfo;
          console.log(`response editAccount: ${this.accountInfo}`);
        });
    }
  }

  clicked(event) {
    console.log("CLICK");
    console.log("this.accountInfo");
    console.log(this.accountInfo);
    console.log("message:");

    console.log(this.message);
    this.message="";

    //this.message = (function () { return; })(); // set message undefined
    event.preventDefault();
    this.currentView = event.target.innerHTML;
  }
}

