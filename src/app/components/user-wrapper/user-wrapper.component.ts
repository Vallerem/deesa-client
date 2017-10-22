import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  accountInfo: any;
  designsList: any;

  routerUser = {
    username: ''
  }

  constructor(private userAPI: UserService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params
    .subscribe((params) => this.routerUser.username = String(params['username']));

    this.userAPI.getAccount(this.currentUser).subscribe((res) => {
      this.accountInfo = res;
      this.designsList = res.user.designerInfo.designs;
      console.log(`designsList   -->${JSON.stringify(this.designsList)}`);
    });

  }
}
