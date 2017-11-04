import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartInfo; //array of items in cart  [{_id,creator,...}, {…}, {…}, {…}, {…}, {…}]

  cartTotal: Number = 0;
  message: any;
  serverDelete = false;   // flag to proceed delete item in server side.
  zombieIndexItem: any;  // index to return
  zombieItem: any = {};  // item to return

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

  revertDeleteProduct(){
    this.cartInfo.splice(this.zombieIndexItem, 0, this.zombieItem); //insert item into cartInfo at the specified index (deleting 0 items first).
    this.message = (function () { return; })(); // set message undefined
    this.serverDelete=false;
  }

  /**
   *
   * @param id item
   */
  deleteItem(id) {
    console.log(this.serverDelete);
    console.log(this.cartInfo);

    if (this.serverDelete === true) {

        this.calculateTotal();
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
