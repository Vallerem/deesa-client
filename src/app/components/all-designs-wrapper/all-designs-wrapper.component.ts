import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-designs-wrapper',
  templateUrl: './all-designs-wrapper.component.html',
  styleUrls: ['./all-designs-wrapper.component.css']
})
export class AllDesignsWrapperComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));

  designsList: any;
  arr = [];


  constructor(private designService: DesignService) { }

  ngOnInit() {

     //this.designsList = this.designService._designList;
     //this.designsList = this.designService.getAllDesigns();

     //this.designsList = this.designService.getAllDesigns;

/*     this.getAllDesigns().subscribe((res)=>{
      this._designList = res;
      console.log(`CONSTRUCTOR _designList   -->${JSON.stringify(this._designList)}`);
    }) */

    this.designService.getAllDesigns().subscribe((res)=>{
      this.designsList = res;
      console.log(`designsList   -->${JSON.stringify(this.designsList)}`);
    });

    console.log("this.designsList = this.designService.getDesignList() arr.element");
     console.log("all-designs-wrapper- ngOnInit() - this.designsList -->");

/*     this.arr.push(this.designsList);
    this.arr.forEach((e) => {
      console.log(e);
    }); */

    //console.log("all-designs-wrapper- ngOnInit() - this.designsList --> JSON.parse>"+JSON.parse(this.designsList));
    //console.log("GET FROM SERVICE:::: >"+JSON.parse(this.designService.getAllDesigns()) );
  }
}
