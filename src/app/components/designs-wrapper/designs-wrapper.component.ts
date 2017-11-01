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

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  designInfo: any;
  commentsInfo: any;
  productsTypes: any;


  private routerUser = {
    username: ''
  }
  private idDesign: String;

  constructor(private userAPI: UserService, private route: ActivatedRoute, private designAPI: DesignService, private commentAPI: CommentService, private productAPI: ProductService) {}


  ngOnInit() {

    this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
    this.idDesign = this.route.snapshot.paramMap.get('idDesign'); //catch route param

    //Retrieve Design Info
    this.designAPI.getDesign(this.idDesign).subscribe((res)=>{
      this.designInfo = res.design;
    });

    //Retrieve Comments Info
    this.commentAPI.getCommentsFromDesign(this.idDesign).subscribe((res)=>{
      this.commentsInfo = res.comments;
    })

    //ToDo: Retrieve products Info

    this.productAPI.getAllProductTypes().subscribe((res)=>{
      this.productsTypes = res.products;
    })
  }
}
