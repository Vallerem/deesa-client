import { SessionService } from './../../services/session/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	public session: SessionService,
  	private router:  Router
  ) { }

  ngOnInit() {
    
  }
  
  logout() {
  	this.session.logout();
  }
}
