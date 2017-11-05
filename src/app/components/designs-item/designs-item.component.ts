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
  flagP = false;


  constructor() { }

  ngOnInit() {}



  changeImgHover(event){
    let str = event.target.innerHTML;
    console.log("DIV");

/*     console.log("mouse : " );
    console.log("event type");
    console.log(event.type); */
    this.hover = (event.type === 'mouseenter') ? 'opacity-yes' : 'opacity-no';
    console.log(this.hover);
  }

  changeImgHover2(event){
    console.log("P");
    this.hover='opacity-yes';
    console.log(this.hover);

 }



/*   $(document).ready(function() {
    $('#second, #third').hover(function(){
        $('#first').addClass('blue');
    },
    function(){
        $('#first').removeClass('blue');
    });
}); */

}
