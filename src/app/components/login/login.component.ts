import { SessionService } from './../../services/session/session.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	user = {
		username: '',
		password: '',
	}
	error = null;

  constructor(
  	private session: SessionService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  submitLogin() {
  	this.session.login(this.user)
  		.subscribe(
  			(data) => {
  				this.router.navigate(['/phones']);
  			},
  			(err) => {
  				this.error = err;
  			});
  }
}
	