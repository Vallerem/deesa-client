import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'designs-list',
  templateUrl: './designs-list.component.html',
  styleUrls: ['./designs-list.component.css']
})
export class DesignsListComponent implements OnInit {

  @Input() designsList;

  constructor() { }

  ngOnInit() {
  }

}
