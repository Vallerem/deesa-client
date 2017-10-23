import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DesignService {

  private BASE_URL: string = environment.baseAPI; //http://localhost:3000
  currentUser: any = JSON.parse(localStorage.getItem('user'));


  constructor(private http: Http, private session: SessionService) { }

  getDesign(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

  	return this.http.get(`${this.BASE_URL}/designs/${id}`, options)
  		.map((res) => res.json() );
  }

}
