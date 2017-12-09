import { ProductService } from './../../../services/product.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.css']
})
export class CartWrapperComponent implements OnInit {

  constructor(private userAPI: UserService, private productAPI: ProductService) {}

  cart: any;

  ngOnInit() {

    this.userAPI.getCart(this.userAPI._currentUser._id).subscribe((res) => {
      this.cart = res.products;
      /*           console.log("[ACCOUNT-INFO] - this.accountInfo");
            console.log(this.accountInfo);
            console.log("[ACCOUNT-INFO] - this.userAPI._currentUser");
            console.log(this.userAPI._currentUser); */
    });
  }
}

