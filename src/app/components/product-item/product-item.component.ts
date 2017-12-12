import { DesignService } from './../../services/design.service';
import { async } from '@angular/core/testing';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit
{

  @Input() productItem;
  currentEvent:any ;
  userDesigns:any;
  designId: any;
  productName:any;

  constructor(private userAPI: UserService, private designAPI: DesignService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userDesigns = this.userAPI._userDesigns;
    this.designId = this.designAPI._designId;
  }

  setProductName(name){
    this.productName = name;
  }

  /**
   * Check image product and redirect to this
   * @param event
   */
  imageClick(event){
 console.log("EVENT TARGET:");
 console.log(event);

console.log(event.target.innerHTML);

let str = event.target.innerHTML;

let taza = str.toUpperCase().includes("TAZA");
let camiseta = str.toUpperCase().includes("CAMISETA");
let sudadera = str.toUpperCase().includes("SUDADERA");
let mochila = str.toUpperCase().includes("MOCHILA");

if(taza){this.setProductName("TAZA")}
if(camiseta){this.setProductName("CAMISETA")}
if(sudadera){this.setProductName("SUDADERA")}
if(mochila){this.setProductName("MOCHILA")}

console.log("this.productName");
console.log(this.productName);

this.router.navigate(['/designs', 'view', this.designId ,'product', this.productName]);
  }
}
