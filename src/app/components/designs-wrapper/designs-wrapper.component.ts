import { ProductService } from './../../services/product.service';
import { CommentService } from './../../services/comment.service';
import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'designs-wrapper',
  templateUrl: './designs-wrapper.component.html',
  styleUrls: ['./designs-wrapper.component.css']
})
export class DesignsWrapperComponent implements OnInit {

  //currentUser: any = JSON.parse(localStorage.getItem('user'));
  designInfo: any;
  commentsInfo: any;
  productsTypes: any;
  userDesigns: any; //keep here to access to service variable in product item

  private idDesign: String;

  constructor(private userAPI: UserService, private route: ActivatedRoute, private designAPI: DesignService, private commentAPI: CommentService, private productAPI: ProductService) {}


  ngOnInit() {

/*     this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
 */    this.idDesign = this.route.snapshot.paramMap.get('idDesign'); //catch route param


    //Retrieve Design Info
    this.designAPI.getDesign(this.idDesign).subscribe((res)=>{

      this.designInfo = res.design;
      this.designAPI._designInfo = res.design;
      this.designAPI.designId=this.designInfo._id //calls the setter and passes designInfo._id

            //Retrieve designs info
            this.userAPI.getUserDesigns(this.designInfo.creator._id).subscribe((res)=>{
              //Keep in userAPI service userDesigns variable
              this.userAPI._userDesigns = res.designs; //calls the setter and passes res.designs
              this.userDesigns = res.designs;
            });
    });

    //Retrieve Comments Info
    this.commentAPI.getCommentsFromDesign(this.idDesign).subscribe((res)=>{
      this.commentsInfo = res.comments;
    });

    //Retrieve products types
    //check if products are in service loaded
    if (this.productAPI._productTypes) {
      this.productsTypes = this.productAPI._productTypes;
      console.log("this.productsTypes");
      console.log(this.productsTypes);
    } else {
      console.log("HACE SUBSCRIBE PRODUCTS");
      this.productAPI.getAllProductTypes().subscribe((res) => {
        this.productsTypes = res.products;
        this.productAPI._productTypes = res.products;
        console.log("this.productsTypes");
        console.log(this.productsTypes);
      });
    }
  }
}
