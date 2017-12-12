import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-designs-wrapper',
  templateUrl: './all-designs-wrapper.component.html',
  styleUrls: ['./all-designs-wrapper.component.css']
})
export class AllDesignsWrapperComponent implements OnInit {

  designsList: any;

  constructor(private designService: DesignService) { }

  ngOnInit() {
    this.designService.getAllDesigns().subscribe((res)=>{
      this.designsList = res;
    });
  }
}
