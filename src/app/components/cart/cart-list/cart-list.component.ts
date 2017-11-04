import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartInfo;

  constructor(private userAPI: UserService, private productAPI: ProductService) { }

  ngOnInit() {
    console.log(this.cartInfo);

  }

}
