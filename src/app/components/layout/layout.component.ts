import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private designService: DesignService) { }

  ngOnInit() {

/*     this.designService.getAllDesigns().subscribe( (res) => {

    this.designService.designList = res; //store designList in service when application is initialized.
    console.log(`designInfo   -->${JSON.stringify(this.designService.designList)}`);
    }); */

  }

}
