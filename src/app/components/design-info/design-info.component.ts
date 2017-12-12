import { DesignService } from './../../services/design.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'design-info',
  templateUrl: './design-info.component.html',
  styleUrls: ['./design-info.component.css']
})
export class DesignInfoComponent implements OnInit {

  @Input() designInfo;

  constructor() {}

  ngOnInit() {}

}

