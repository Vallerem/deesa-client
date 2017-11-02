import { ProductService } from './../../services/product.service';
import { DesignService } from './../../services/design.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'buy-item-wrapper',
  templateUrl: './buy-item-wrapper.component.html',
  styleUrls: ['./buy-item-wrapper.component.css']
})
export class BuyItemWrapperComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userAPI: UserService, private designAPI: DesignService, private productAPI: ProductService) { }

  userDesigns:any;
  designId: any;
  productName:any;
  productInfo:any;
  designInfo:any={};
  designInfoService:any={};


  //Necesitas diseño info y diseños del usuario
  //  { path: 'designs/view/:idDesign/product/:productName', component: BuyItemWrapperComponent, canActivate: [SessionService]}

  ngOnInit() {

    console.log("AI");
    console.log("AI");



    this.designId = this.route.snapshot.paramMap.get('designId');
    this.productName = this.route.snapshot.paramMap.get('productName'); //catch route param
    console.log("LLEGA AQUI BUY WRAPPER");

    this.designAPI.getDesign('59f1bf09e792f547483299ee').subscribe((res)=>{
      this.designInfo = res.design;
      console.log("OnInit() designInfo");
      console.log(this.designInfo);
    });

    this.userAPI.getUserDesigns('59ed2620c326752790c62c12').subscribe((res)=>{
      this.userDesigns = res.designs;
      console.log(this.userDesigns);
    });

    this.productAPI.getProductType(this.productName).subscribe((res)=>{
      this.productInfo = res.product;
      console.log("OnInit() productInfo");

      console.log(this.productInfo);
    });

/*     this.getDesign('59f1bf09e792f547483299ee');
    this.getDesignFromService();
 */
  }

/*   getDesign(id){
    this.designAPI.getDesign('59f1bf09e792f547483299ee').subscribe((res)=>{
      this.designInfo = res;
      console.log("getDesign() - designInfo");
      console.log(this.designInfo);
    });
  } */

/*   getDesignFromService(){
    this.designInfoService=this.designAPI._designInfo;
    console.log("designInfoService");
    console.log(this.designInfoService);

  } */
}
