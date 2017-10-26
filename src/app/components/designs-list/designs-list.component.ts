import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'designs-list',
  templateUrl: './designs-list.component.html',
  styleUrls: ['./designs-list.component.css']
})
export class DesignsListComponent implements OnInit {

  @Input() designsList;
  arr = [];

  constructor() { }

  ngOnInit() {

    this.arr.push(this.designsList);
    this.arr.forEach((e) => {
      console.log("designList::");
      console.log(e);
    });



  }

}
