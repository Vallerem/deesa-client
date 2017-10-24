import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DesignService {

  private BASE_URL: string = environment.baseAPI; //http://localhost:3000
  currentUser: any = JSON.parse(localStorage.getItem('user'));

  public _designList: any;


  constructor(private http: Http, private session: SessionService) {

   }


  /**
   * GETTERS & SETTERS
   */

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

    console.log("getAllDesigns method INVOKED!");

  	return this.http.get(`${this.BASE_URL}/designs/allDesigns`, options)
  		.map((res) => res.json() );
  }

  newDesign(design) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

  	return this.http.post(`${this.BASE_URL}/designs/new`, options)
  		.map((res) => res.json() );
  }
}
