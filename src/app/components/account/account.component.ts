import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  accountInfo;


  constructor( private userAPI: UserService ) { }

  ngOnInit() {

    this.userAPI.getAccount(this.currentUser)
      .subscribe((res) => {
        console.log(`:::::::::::::::::account.component.ts user -->${JSON.stringify(res)}`);
        this.accountInfo = res;
      });

  }

  editAccount() {
    this.userAPI.editAccount(this.currentUser)
      .subscribe((res) => {
        this.accountInfo = res;
      });
  }




}
