import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

@Injectable()
export class SessionService implements CanActivate {
	public token: string = '';
	public isAuth: boolean = false;
	public user = {};

	// private BASE_URL: string = 'https://phoneapi.herokuapp.com/'
	private BASE_URL: string = environment.baseAPI;

  constructor(
  	private http: Http,
  	private router: Router
  ) { }

	checkUser() {
   return localStorage.getItem('user');
	}

  canActivate() {
  	if (localStorage.getItem('token')) {
  		let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
  		let options = new RequestOptions({ headers: headers });
  		return this.http.get(`${this.BASE_URL}/token`, options)
  			.toPromise()
  			.then((res) => res.json())
  			.then((data) => {
  				this.isAuth = true;
  				this.user = JSON.parse(localStorage.getItem('user'))
  				this.token = localStorage.getItem('token');
  				return true
  			})
  			.catch((err) => {
  				this.logout();
  				this.router.navigate(['/login']);
  				return false;
  			})
  	}else{
  		this.logout();
  		this.router.navigate(['/login']);
  		return false
  	}
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user)
        .map((res) => res.json())
        .map((res) => {
        	let token = res.token;
        	let user = res.user;
					let role = res.role;

        	if (token) {
        	  // set token property
        	  this.token = token;
        	  this.user = {
        	  	_id: user._id,
        	  	username: user.username,
              role: user.role,
              avatarUrl: user.avatarUrl
        	  };
        	  this.isAuth = true;
        	  // store username and jwt token in local storage to keep user logged in between page refreshes
        	  localStorage.setItem('token', token );
        	  localStorage.setItem('user', JSON.stringify(this.user) );
        	  // return true to indicate successful login
        	  return true;
        	} else {
        	  // return false to indicate failed login
        	  return false;
        	}
        })
  }

  isTokenValid(token){
  	let headers = new Headers({ 'Authorization': 'JWT ' + token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get(`${this.BASE_URL}/token`, options)
  		.map((res) => res.json())
  }






	signup(user) {
		  return this.http.post(`${this.BASE_URL}/login`, user)
        .map((res) => res.json())
        .map((res) => {
        	let token = res.token;
        	let user = res.user;

        	if (token) {
        	  // set token property
        	  this.token = token;
        	  this.user = {
        	  	_id: user._id,
        	  	username: user.username,
							role: user.role
        	  };
        	  this.isAuth = true;
        	  // store username and jwt token in local storage to keep user logged in between page refreshes
        	  localStorage.setItem('token', token );
        	  localStorage.setItem('user', JSON.stringify(this.user) );
        	  // return true to indicate successful login
        	  return true;
        	} else {
        	  // return false to indicate failed login
        	  return false;
        	}
        })
	}



	

  logout() {
  	this.token = null;
  	this.user = null;
  	this.isAuth = false;
  	localStorage.removeItem('token');
  	localStorage.removeItem('user');
  	this.router.navigate(['/']);
  }
}
