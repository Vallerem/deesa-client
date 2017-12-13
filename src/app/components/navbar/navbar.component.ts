import { UserService } from './../../services/user.service';
import { SessionService } from './../../services/session/session.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  cart: any = {};
  flag: any = false;

  constructor(
    public session: SessionService,
    public router: Router,
    public userAPI: UserService
  ) {}

  ngOnInit() {
    //USER LOGGED

    if (this.currentUser) {
      if (!this.userAPI._currentUser) {
        this.userAPI.getCart(this.currentUser._id).subscribe((res) => {
          this.userAPI._currentUser = this.currentUser;
          this.userAPI._currentUser.shoppingCart = res.products;
          this.cart = this.userAPI._currentUser.shoppingCart;
          this.flag = true;
        });
      } else {
        this.cart = this.userAPI._currentUser.shoppingCart;
        this.flag = true;
      }
    }
  }

  logout() {
    this.session.logout();
  }

  // method to check if a user is logged in
  checkUser() {
    return this.session.checkUser();
  }
}


