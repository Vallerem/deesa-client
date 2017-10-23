import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() accountInfo;

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  createDesignFlag: boolean = false;
  private routerUser = {
    username: ''
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
    if(this.routerUser.username === this.currentUser.username) this.createDesignFlag=true;
  }

}
