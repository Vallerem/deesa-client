import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() buyItem;

  constructor() { }

  ngOnInit() {
    console.log(this.buyItem);

  }

}
