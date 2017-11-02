import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {

  @Input() designInfo;
  @Input() userDesigns;
  @Input() productInfo;

  buyProduct: any = {
    qty: 0
  }

  constructor() { }

  ngOnInit() {}

  submitForm(){

  }

  subtractQty(){
    this.buyProduct.qty++;
  }

  addQty(){
    if(this.buyProduct.qty>0) this.buyProduct.qty--;
  }



}
