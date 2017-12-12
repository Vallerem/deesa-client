import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class DesignService {

  private BASE_URL: string = environment.baseAPI; //http://localhost:3000
  //currentUser: any = JSON.parse(localStorage.getItem('user'));

  public _designId: any;

  public _designList: any;

  public _designInfo: any;


  constructor(private http: Http, private session: SessionService) {

   }


  /**
   * GETTERS & SETTERS
   */
  get designId() {
    return this._designId;
  }
  set designId(designId) {
    this._designId = designId;
  }

  get designInfo() {
    return this._designInfo;
  }
  set designInfo(designInfo) {
    this._designInfo = designInfo;
  }

    set designList(value:any) {
      this._designList = value;
    }

    get designList():any {
      return this._designList;
    }

    getDesignList(){
/*       this.getAllDesigns().subscribe((res)=>{
      this._designList = res;
      console.log(`CONSTRUCTOR _designList   -->${JSON.stringify(this._designList)}`);
    }) */
      return this._designList;
    }


/**
 * API CLIENT
 */

  getDesign(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

  	return this.http.get(`${this.BASE_URL}/designs/${id}`, options)
  		.map((res) => res.json() );
  }

  getAllDesigns() {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

  	return this.http.get(`${this.BASE_URL}/designs/allDesigns`, options)
      .map((res) => res.json() )
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  newDesign(design) {
  	let headers = new Headers({
      'Authorization': 'JWT ' + this.session.token,
      "Access-Control-Allow-Origin" : "*"
    });
    let options = new RequestOptions({ headers: headers });

  	return this.http.post(`${this.BASE_URL}/designs/new`,design, options)
      .map((res) => res.json() )
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
