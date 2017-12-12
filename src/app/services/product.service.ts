import { inject } from '@angular/core/testing';
import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProductService {

  private subject = new Subject<any>();


  private BASE_URL: string = environment.baseAPI; //http://localhost:3000
  _productTypes: any;

  constructor(private http: Http, private session: SessionService) {

    //HOW TO INITIALICE DATA ( QUIERO PONER TODOS LOS PRODUCTS TYPES AL INCIO, EN EL CONSTRUCTOR)
/*       // Initialice at the beginning all product types in store.
     this.getAllProductTypes().subscribe((res)=>{
      this._productTypes = res.products;
    });  */
  }

  /**
   *  GETTERS & SETTERS
   */

  get productTypes(){
    return this._productTypes;
  }

  set productTypes(productTypes){
    this._productTypes = productTypes;
  }


  /**
   *  HTTP METHODS - API CLIENT
   */

  getAllProductTypes(){
    let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.BASE_URL}/api/v1/products/allProductTypes`)
    .map((res) => res.json() );
  }

  getProductType(name){
    let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.BASE_URL}/api/v1/products/productType/${name}`)
    .map((res) => res.json() );
  }

  newBuyProduct(product){
    let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.BASE_URL}/api/v1/products/new`, product, options)
      .map((res) => res.json());
  }

  deleteProduct(id) {
    console.log("ENTRA A deleteProduct");
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.delete(`${this.BASE_URL}/api/v1/products/${id}`, options)
  		.map( (res) => res.json());
  }

  sendCartChanged() {
    this.subject.next({"changed": true});
  }
}
