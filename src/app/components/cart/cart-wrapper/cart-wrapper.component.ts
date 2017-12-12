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
  currentUser: any = JSON.parse(localStorage.getItem('user'));
  cart: any;

  ngOnInit() {
    this.userAPI.getCart(this.currentUser._id).subscribe((res) => {
      this.cart = res.products;
    });
  }
}

