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


  constructor(private userAPI: UserService) {}

  ngOnInit() {
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

    console.log("account.component");

    if (accountInfo.currentView === 'Account') {
      this.userAPI.editAccount(accountInfo.user)
      .subscribe((res) => {
        this.accountInfo = res;
        console.log(`response editAccount: ${this.accountInfo}`);

      });
    }

    if (accountInfo.currentView === 'Password') {
      this.userAPI.editPasswordAccount(accountInfo.user)
      .subscribe((res) => {
        this.accountInfo = res;
        console.log(`response password: ${this.accountInfo}`);

      });
    }

    if (accountInfo.currentView === 'Address') {
      this.userAPI.editAddressAccount(accountInfo.user)
      .subscribe((res) => {
        this.accountInfo = res;
        console.log(`response editAccount: ${this.accountInfo}`);
      });
    }


  }

  clicked(event) {
    event.preventDefault();
    this.currentView = event.target.innerHTML;
    console.log(this.currentView);

  }
}
