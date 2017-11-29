import { UserService } from './../../services/user.service';
import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  cart: any;

  constructor(private userAPI: UserService, private designAPI: DesignService) {}

  ngOnInit() {
        //check if current User are in service loaded
        if (!this.userAPI._currentUser) {
          this.userAPI._currentUser= this.currentUser;
        }

/*           //check if products are in service loaded
    if (this.userAPI._userCart) {
      this.cart = this.userAPI._userCart;
    } else {
      console.log("HACE SUBSCRIBE getCart");
      this.userAPI.getCart(this.currentUser._id).subscribe((res) => {
        this.cart = res.products;
        this.userAPI._userCart = res.products;
      });
    } */
  }
}
