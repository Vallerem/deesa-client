import { ProductService } from './../../../services/product.service';
import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() buyItem;

  subtotal: Number;

  constructor( private http: Http, private ngzone: NgZone, private productAPI: ProductService) {}


  ngOnInit() {
    console.log(this.buyItem);

  }

  deleteItem(id){
    this.ngzone.run(() => {
      this.productAPI.deleteProduct(id).subscribe((res)=>{
        console.log("PERO ESTO DEL NGZONE QUE ES!?!?!?");
        console.log(res);
        this.productAPI.sendCartChanged();

      });
    })

  }

/*   deleteItem(id){
    this.route.params.subscribe(params => {
      let productId = id;
      let userId = this.localUser._id;
      let index = this.cartItemsId.indexOf(productId);
      this.cartItems.splice(index, 1);
      this.calculateTotal();
      this.ngzone.run(() => {
      return this.http.put(`${this.BASE_URL}/my-cart/deleteItem`, {productId, userId} )
      .subscribe((res)=> {
            this.account.sendCartChanged();
          });
    })
  })
} */

}
