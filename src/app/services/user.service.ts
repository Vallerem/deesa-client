import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private BASE_URL: string = environment.baseAPI; //http://localhost:3000

  _currentUser: any = JSON.parse(localStorage.getItem('user'));
  _userDesigns: any;
  _userCart:any;

  constructor(
    private http: Http,
    private session: SessionService
  ) {}

  //GETTERS & SETTERS
  get userDesigns() {
    return this._userDesigns;
  }
  set userDesigns(userDesigns) {
    this._userDesigns = userDesigns;
  }

  get currentUser() {
    return this._userDesigns;
  }
  set currentUser(currentUser) {
    this._currentUser = currentUser;
  }

  get userCart() {
    return this._userCart;
  }
  set userCart(userCart) {
    this._userCart = userCart;
  }

  //HTTP METHODS - API CLIENT

  getAccount(user) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.BASE_URL}/account`,user, options).map((res) => res.json());
  }

  editAccount(user) {
    console.log("user.service.edit"+JSON.stringify(user.userInfo));

  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.BASE_URL}/account`,user, options).map((res) => res.json());
  }

  editPasswordAccount(user) {
    console.log("user.service.password"+JSON.stringify(user));

  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.BASE_URL}/account/password`,user, options).map((res) => {console.log("response:"+res); return res.json();});
  }

  editAddressAccount(user) {
    console.log("user.service"+JSON.stringify(user));

  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.BASE_URL}/account/address`,user, options).map((res) => {console.log("response:"+res); return res.json();});
  }

  getUserDesigns(userId){
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });
    console.log("getUserDesigns");

    return this.http.get(`${this.BASE_URL}/account/designs/${userId}`, options).map((res) => res.json());
  }

  getCart(userId){
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });
    console.log("getCart");

    return this.http.get(`${this.BASE_URL}/account/cart/${userId}`, options).map((res) => res.json());
  }


}
