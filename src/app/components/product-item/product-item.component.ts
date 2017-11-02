import { DesignService } from './../../services/design.service';
import { async } from '@angular/core/testing';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, AfterContentInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,OnChanges, AfterContentInit, AfterViewInit
{

  @Input() productItem;
  currentEvent:any ;
  userDesigns:any;
  designId: any;
  productName:any;

  constructor(private userAPI: UserService, private designAPI: DesignService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit() {
/*     console.log(`ngOnInit()- PRODUCT ITEM`);
    this.getUserDesigns()
    .subscribe(res => this.userDesigns = res); */

    /*NO CONSIGO COGER LA VARIABLE userDesigns del SERVICE, async pipe???,ngAfterContentInit,AfterViewInit, subscribes?? */

    //this.userDesigns =this.userAPI._userDesigns;

/*     this.userAPI._userDesigns
    .subscribe(data => {
      this.userDesigns = data;
   }); */

/*      console.log(this.userAPI._userDesigns);
    (this.userAPI._userDesigns | async)
    this.userDesigns =this.userAPI._userDesigns;

    {{ workingData$ | async }}  */
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userDesigns']) {
      console.log(`&&&&&&&&&&&&&&/////////////userDesigns change!`);
    }
}

/* getUserDesigns() {

  this.designService.getAllDesigns().subscribe((res)=>{
    this.designsList = res;
    console.log(`designsList   -->${JSON.stringify(this.designsList)}`);
  }); */


/*
    const url = 'assets/mock-posts.json';
    return this._http.get(url)
        .map(x => x.json());
}*/




  ngAfterContentInit() {
    console.log(`ngAfterContentInit()- PRODUCT ITEM`);

        console.log(this.userAPI._userDesigns);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit()- PRODUCT ITEM`);
    console.log(this.userAPI._userDesigns);
  }

  imageClick(event){
 console.log("EVENT TARGET:");
console.log(event.target.innerHTML);

//this.userDesigns = this.userAPI._userDesigns;
this.designId = this.designAPI._designId;
this.productName = event.target.innerHTML;

this.router.navigate(['/designs', 'view', this.designId ,'product', this.productName]);

//http://localhost:4200/designs/view;idDesign=59f1bf09e792f547483299ee/product;idProduct=SUDADERA

/*     event.preventDefault();
    this.currentEvent = event.target.innerHTML;
    console.log("currentEvent");
    console.log(this.currentEvent);
    console.log(JSON.stringify(this.currentEvent));


    console.log("CLICK IMAGE");
    console.log(event.target);
    console.log(this.userAPI._userDesigns);

    this.userDesigns = this.userAPI._userDesigns;
    this.designId = this.designAPI._designId; */

/*     this.router.navigate(['http://localhost:4200/designs']);
    //this.router.navigate(['/foo-content', 'bar-contents', 'baz-content', 'page'], this.params.queryParams)

     { path: ':foo/:bar/:baz/page', component: AComponent }
    this.router.navigate(['/foo-content', 'bar-contents', 'baz-content', 'page'], this.params.queryParams)
    this.router.navigate(['/designs', 'view', {idDesign: this.designId },'product', 'idDesign', 'product', 'productName'], this.params.queryParams);

    this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

    { path: 'designs/view/:idDesign/product/:productName', component: BuyItemWrapperComponent, canActivate: [SessionService]} */

  }

}
