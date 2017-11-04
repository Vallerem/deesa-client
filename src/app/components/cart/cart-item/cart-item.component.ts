import { ProductService } from './../../../services/product.service';
import { Component, OnInit, Input, NgZone, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() buyItem;
  @Output() delItem = new EventEmitter < boolean > ();


  subtotal: Number;

  constructor( private http: Http, private ngzone: NgZone, private productAPI: ProductService) {}


  ngOnInit() {}

  deleteItem(id){
    this.delItem.emit(id); //Output - Send to parent
  }

}
