import { ProductService } from './../../services/product.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-wrapper',
  templateUrl: './product-wrapper.component.html',
  styleUrls: ['./product-wrapper.component.css']
})
export class ProductWrapperComponent implements OnInit {

  @Input() productsTypes;

  constructor(private productAPI: ProductService) {}

  ngOnInit() {}

}

