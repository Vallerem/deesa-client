import { UserService } from './../../services/user.service';
import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));

  constructor(private userAPI: UserService, private designAPI: DesignService) {}

  ngOnInit() {}
}
