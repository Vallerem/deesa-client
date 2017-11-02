import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  //currentUser: any = JSON.parse(localStorage.getItem('user'));
  currentView: string = "Account";
  accountInfo; //JSON

  arr = [];


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
