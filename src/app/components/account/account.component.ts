import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FileSelectDirective } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/account/avatar`
  });

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  currentView: string = "Account";
  accountInfo; //JSON
  innerWidth = (window.screen.width) + "px";
  arr = [];
  feedback;


  constructor(private userAPI: UserService) {}

  ngOnInit() {
    this.userAPI.getAccount(this.userAPI._currentUser)
      .subscribe((res) => {
        console.log(`ngOnInit[PARENT] subscribe response-->${JSON.stringify(res)}`);
        this.accountInfo = res;
      });
      this.arr.push(this.accountInfo);
      this.arr.forEach((e)=>{
        console.log(e);
      })

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  submitImage() {
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
