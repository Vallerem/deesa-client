import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem;

  constructor() { }

  ngOnInit() {

    console.log("PRODUCT ITEM");
    console.log(this.productItem);


  }

}
