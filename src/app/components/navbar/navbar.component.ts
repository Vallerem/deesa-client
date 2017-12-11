import { UserService } from './../../services/user.service';
import { SessionService } from './../../services/session/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));

  cart: any = {};

  constructor(
  	public session: SessionService,
    private router:  Router,
    private userAPI: UserService
  ) { }

  ngOnInit() {
    this.userAPI._currentUser = this.currentUser;
    console.log("HOLAAAA");
    console.log("this.userAPI._currentUser");
    console.log(this.userAPI._currentUser);
    if(this.userAPI._currentUser){this.cart = this.userAPI._currentUser.shoppingCart;}
    console.log("this.cart");
    console.log(this.cart);


  }

  logout() {
  	this.session.logout();
  }

  // method to chek if a user is logged in
  checkUser() {
    return this.session.checkUser();
  }
}
