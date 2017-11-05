import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'designs-item',
  templateUrl: './designs-item.component.html',
  styleUrls: ['./designs-item.component.css']
})
export class DesignsItemComponent implements OnInit {

  /**
   * params: {_id, title, creator, description, designGallery[], designMainImg, likedBy[]}
   */
  @Input() designsItem;
  hover:string = 'opacity-no';

  constructor() { }

  ngOnInit() {}

  changeImgHover(event){
    this.hover = (event.type === 'mouseenter') ? 'opacity-yes' : 'opacity-no';
  }

  changeImgHover2(event){
    this.hover='opacity-yes';
 }
}
