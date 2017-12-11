import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  @Input() cartInfo; //array of items in cart  [{_id,creator,...}, {…}, {…}, {…}, {…}, {…}]

  cartTotal: any;
  message: any;
  serverDelete = false;   // flag to proceed delete item in server side.
  zombieIndexItem: any;  // index to return
  zombieItem: any = {};  // item to return

  constructor(private userAPI: UserService, private productAPI: ProductService, private router: Router) { }

  ngOnInit() {this.calculateTotal();
    console.log("CART INFO");

  console.log(this.cartInfo);
  console.log("this.userAPI._currentUser.shoppingCart AFTER");
  console.log(this.userAPI._currentUser.shoppingCart);
  }

  ngOnDestroy() {
     if( this.serverDelete){
/*       console.log("this.userAPI._currentUser.shoppingCart AFTER");
      console.log(this.userAPI._currentUser.shoppingCart);
      console.log("this.zombieItem._id");
      console.log(this.zombieItem._id);
      let index = this.userAPI._currentUser.shoppingCart.indexOf(this.zombieItem._id);
      if (index > -1) {
        this.userAPI._currentUser.shoppingCart.splice(index, 1);
      }
      console.log("this.userAPI._currentUser.shoppingCart AFTER");
      console.log(this.userAPI._currentUser.shoppingCart); */

      this.productAPI.deleteProduct(this.zombieItem._id).subscribe((res) => {
      });
    }
  }

  processOrder(){
   this.router.navigate(['/paypal'],
   {queryParams: {payment: this.cartTotal, user: this.userAPI._currentUser.username}});
  }

  calculateTotal(){
    this.cartTotal=0;
    this.cartInfo.forEach(element => {
      this.cartTotal += (element.productType.price*element.qty);
    });
  }

  revertDeleteProduct(){
    this.cartInfo.splice(this.zombieIndexItem, 0, this.zombieItem); //insert item into cartInfo at the specified index (deleting 0 items first).
    this.message = (function () { return; })(); // set message undefined
    this.serverDelete=false;
    this.calculateTotal();

  }

  /**
   *
   * @param id item
   */
  deleteItem(id) {
    console.log(this.serverDelete);
    console.log(this.cartInfo);

    if (this.serverDelete) {

      this.calculateTotal();
/*       let index = this.userAPI._currentUser.shoppingCart.indexOf(this.zombieItem._id);
      if (index > -1) {
        this.userAPI._currentUser.shoppingCart.splice(index, 1);
      } */
      this.productAPI.deleteProduct(this.zombieItem._id).subscribe((res) => {
        console.log(res);
        this.message = res.message;
      });

      this.serverDelete = false;
      this.getZombieItem(id);

    } else {
      this.getZombieItem(id);
      this.calculateTotal();

      this.message = "Producto eliminado"
      this.serverDelete = true;
    }
  }


  //find id inside an array of items and retrieve this index. Slice this item from cart info
  getZombieItem(id){
    this.zombieIndexItem = this.cartInfo.map(function(element) {return element._id; }).indexOf(id);
    this.zombieItem = this.cartInfo[this.zombieIndexItem];
    this.cartInfo.splice(this.zombieIndexItem, 1);
  }
}
