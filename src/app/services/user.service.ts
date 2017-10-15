import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private BASE_URL: string = environment.baseAPI; //http://localhost:3000

  constructor(
    private http: Http,
    private session: SessionService
  ) {}

  //Client API

  getAccount(user) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.BASE_URL}/account`,user, options).map((res) => res.json());
  }

  editAccount(user) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.BASE_URL}/account`,user, options).map((res) => res.json());
  }

}