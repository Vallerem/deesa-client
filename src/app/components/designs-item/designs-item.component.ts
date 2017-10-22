import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'designs-item',
  templateUrl: './designs-item.component.html',
  styleUrls: ['./designs-item.component.css']
})
export class DesignsItemComponent implements OnInit {

  @Input() designsItem;

  constructor() { }

  ngOnInit() {
  }

}
