import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {

  @Input() designInfo;
  @Input() userDesigns;
  @Input() productInfo;

  @Output() submittedForm = new EventEmitter<boolean>();
  message:any;


  buyProduct: any = {
    creator: {},
    productType: {},
    design: "",
    qty: 1
  }

  selectedValue: String;

  constructor(private userAPI: UserService) {}

  ngOnInit() {
console.log("userDesigns:");

    console.log(this.userDesigns);

    if(this.productInfo.size){
      this.selectedValue = this.productInfo.size[0]; //default size S
    }

  }

  submitForm(){
    this.buyProduct.creator=this.userAPI._currentUser._id;

    this.buyProduct.productType=this.productInfo;
    this.buyProduct.design=this.designInfo._id;
    this.buyProduct.size = this.selectedValue;
console.log(this.buyProduct);
this.message="Producto añadido al carrito";


    this.submittedForm.emit(this.buyProduct);
  }

  subtractQty(){
    this.buyProduct.qty++;
  }

  addQty(){
    if(this.buyProduct.qty>0) this.buyProduct.qty--;
  }



}
