import { UserService } from './../../services/user.service';
import { SessionService } from './../../services/session/session.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  cart: any = {};
  flag: any = false;

  constructor(
  	public session: SessionService,
    private router:  Router,
    private userAPI: UserService
  ) { }

  ngOnInit() {
    console.log("****** [onInit NAVBAR] ******");

    console.log("this.userAPI._currentUser");
    console.log(this.userAPI._currentUser);

    //USER LOGGED
    if(this.currentUser){
      // IF userAPI._currentUser doesnt exist yet
      console.log("this.currentUser EXISTS");
      if(!this.userAPI._currentUser){
        console.log("this.userAPI._currentUser DOESNT EXISTS");
        this.userAPI.getCart(this.currentUser._id).subscribe((res) => {
          console.log("this.userAPI._currentUser = this.currentUser;");
          this.userAPI._currentUser = this.currentUser;
          this.userAPI._currentUser.shoppingCart =res.products;
          this.cart = this.userAPI._currentUser.shoppingCart;
          console.log(" subscribe getCart :::::::[NAVBAR.COMPONENT] this.cart = this.userAPI._currentUser.shoppingCart;");
          console.log("subscribe getCart :::::::[NAVBAR.COMPONENT] this.userAPI._currentUser");
          console.log(this.userAPI._currentUser);
          console.log(this.cart);
          this.flag = true;
        });
      }
      else{
        console.log("this.userAPI._currentUser EXISTS");
        console.log(this.userAPI._currentUser);
        this.cart = this.userAPI._currentUser.shoppingCart;
        console.log("cart");
        console.log(this.cart);
      }

    } else{
      console.log("this.currentUser DOESNT EXISTS");
    }
    console.log("**************************************");

  }

    //USER NOT LOGGED

/*     if(!this.userAPI._currentUser){
      console.log("NAVBAR*************NOT EXIST*****this.userAPI._currentUser");

      if(this.currentUser){
        this.userAPI.getCart(this.currentUser._id).subscribe((res) => {
          console.log("this.userAPI._currentUser = this.currentUser;");
          this.userAPI._currentUser = this.currentUser;
          this.userAPI._currentUser.shoppingCart =res.products;
          this.cart = this.userAPI._currentUser.shoppingCart;
          console.log("getCart :::::::[NAVBAR.COMPONENT] this.currentUser = res.products;");
          console.log(this.currentUser);
          this.flag = true;
        });
      }


    }else{
      console.log("NAVBAR******************");
      this.cart = this.userAPI._currentUser.shoppingCart;
      console.log("cart");
      console.log(this.cart);
    }
 */

  ngOnChanges(changes: SimpleChanges){
    console.log("***************************************************SE METE EN EL ONCHANGES LOCOO");
    console.log("changes");
    console.log(changes);
    //this.cart = this.userAPI._currentUser.shoppingCart;
  }

  logout() {
  	this.session.logout();
  }

  // method to check if a user is logged in
  checkUser() {
    return this.session.checkUser();
  }
}
