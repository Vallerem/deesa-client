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

  ngOnInit() {
    this.calculateTotal();
  }

  ngOnDestroy() {
     if( this.serverDelete){
      let index = this.userAPI._currentUser.shoppingCart.indexOf(this.zombieItem._id);
      if (index > -1) {
        this.userAPI._currentUser.shoppingCart.splice(index, 1);
      }

      this.deleteProductFromServer(this.zombieItem._id);
    }
  }

  processOrder(){
   this.router.navigate(['/paypal'],
   {queryParams: {payment: this.cartTotal, user: this.userAPI._currentUser.username}});
  }

  calculateTotal(){
    this.cartTotal=0;
    this.userAPI._currentUser.shoppingCart.forEach(element => {
      this.cartTotal += (element.productType.price*element.qty);
    });
  }

  revertDeleteProduct(){
    this.userAPI._currentUser.shoppingCart.splice(this.zombieIndexItem, 0, this.zombieItem); //insert item into cartInfo at the specified index (deleting 0 items first).
/*     this.message = (function () { return; })(); // set message undefined */
    this.message="";
    this.serverDelete=false;
    this.calculateTotal();
  }

  deleteProductFromServer(id){
    this.productAPI.deleteProduct(id).subscribe((res) => {
      this.message = res.message;
    });
  }

  /**
   *
   * @param id item
   */
  deleteItem(id) {

    if (this.serverDelete) {

      this.calculateTotal();

      let index = this.userAPI._currentUser.shoppingCart.indexOf(this.zombieItem._id);
      if (index > -1) {
        this.userAPI._currentUser.shoppingCart.splice(index, 1);
      }

      this.deleteProductFromServer(this.zombieItem._id);


      this.serverDelete = true;
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
    console.log("getZombieItem id");
    console.log(id);
    this.zombieIndexItem = this.userAPI._currentUser.shoppingCart.map(function(element) {return element._id; }).indexOf(id);
    this.zombieItem = this.userAPI._currentUser.shoppingCart[this.zombieIndexItem];
    this.userAPI._currentUser.shoppingCart.splice(this.zombieIndexItem, 1);
    console.log("this.zombieIndexItem");
    console.log(this.zombieIndexItem);
    console.log("this.zombieItem ");
    console.log(this.zombieItem );
  }
}
