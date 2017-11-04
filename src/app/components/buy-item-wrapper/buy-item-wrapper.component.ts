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

  //async variables
  userDesigns:any;
  productInfo:any;
  designInfo:any;

  designId: any;
  productName:any;

  message: any={};

  ngOnInit() {

    this.designId = this.route.snapshot.paramMap.get('idDesign');
    this.productName = this.route.snapshot.paramMap.get('productName'); //catch route param

    this.designAPI.getDesign(this.designId).subscribe((res)=>{
      this.designInfo = res.design;
    });

    //check if products are in service loaded
    if (this.userAPI._userDesigns) {
      this.userDesigns = this.userAPI._userDesigns;
    } else {
      this.userAPI.getUserDesigns(this.userAPI._currentUser._id).subscribe((res)=>{
        this.userDesigns = res.designs;
        console.log(this.userDesigns);
      });
    }

    this.productAPI.getProductType(this.productName).subscribe((res)=>{
      this.productInfo = res.product;
    });
  }


  submitForm(event){
    console.log("sdfsdsfsfdsfdsfdsf");
    console.log(event);

    this.productAPI.newBuyProduct(event)
    .subscribe((res) => {
      this.message = res.message;
      this.userAPI._userCart=event; //store item un user shopping cart
      console.log(`response new comment: ${this.message}`);
    });

  }
}
