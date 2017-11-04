import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartInfo; //array of items in cart  [{…}, {…}, {…}, {…}, {…}, {…}]

  cartTotal: Number = 0;

  constructor(private userAPI: UserService, private productAPI: ProductService) { }

  ngOnInit() {
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

  deleteItem(id){

    let index = this.cartInfo.indexOf(id);
    this.cartInfo.splice(index, 1);
    this.calculateTotal();
      this.productAPI.deleteProduct(id).subscribe((res)=>{
        console.log(res);
      });
  }
}
