import { SessionService } from './session/session.service';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhonesService {
	
	private BASE_URL: string = environment.baseAPI;

  constructor( 
  	private http: Http,
  	private session: SessionService
   ) { }

  getList() {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get(`${this.BASE_URL}/api/phones`, options)
  		.map( (res) => res.json() )
  }

  get(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get(`${this.BASE_URL}/api/phones/${id}`, options)
  		.map((res) => res.json() );
  }

  add(phone) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.post(`${this.BASE_URL}/api/phones`, phone, options)
  		.map((res) => res.json())
  }

  edit(phone) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.put(`${this.BASE_URL}/api/phones/${phone._id}`, phone, options)
  		.map( (res) => res.json());
  }

  remove(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.delete(`${this.BASE_URL}/api/phones/${id}`, options)
  		.map( (res) => res.json());
  }

}
