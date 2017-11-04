import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartInfo;

  cartTotal: Number = 0;

  constructor(private userAPI: UserService, private productAPI: ProductService) { }

  ngOnInit() {
    console.log(this.cartInfo);

    this.calculateTotal();

  }

  processOrder(){
    console.log("PROCESS");
  }

  calculateTotal(){
    this.cartInfo.forEach(element => {
      this.cartTotal += element.productType.price;
    });
  }

}
