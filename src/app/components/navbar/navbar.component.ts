import { SessionService } from './../../services/session/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  currentUser: any = JSON.parse(localStorage.getItem('user'));

  constructor(
  	public session: SessionService,
  	private router:  Router
  ) { }

  ngOnInit() {
  }
  
  logout() {
  	this.session.logout();
  }
  
  // method to chek if a user is logged in
  checkUser() {
    return this.session.checkUser();
  } 
}
