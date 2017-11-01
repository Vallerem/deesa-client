import { inject } from '@angular/core/testing';
import { SessionService } from './session/session.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  private BASE_URL: string = environment.baseAPI; //http://localhost:3000
  currentUser: any = JSON.parse(localStorage.getItem('user'));

  constructor(private http: Http, private session: SessionService) {}


  newComment(comment){
    let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    console.log("NEW COMMENT");
    console.log(comment);

  	return this.http.post(`${this.BASE_URL}/api/v1/comments/new`,comment, options)
    .map((res) => res.json() );
  }

  getCommentsFromDesign(idDesign) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

  	return this.http.get(`${this.BASE_URL}/api/v1/comments/design/${idDesign}`, options)
  		.map((res) => res.json() );
  }

  addCommentLikes(comment) {
    console.log("SERVICE - COMMENT"+JSON.stringify(comment));

    let idComment = comment._id;
    let idUser = comment.creator;
    console.log("idComment-->"+idComment);
    console.log("idUser-->"+idUser);
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
    let options = new RequestOptions({ headers: headers });

    if(idUser === this.currentUser.id){console.log('same user');}

    return this.http.patch(`${this.BASE_URL}/api/v1/comments/likes/${idComment}/${idUser}`, options)
  		.map((res) => res.json() );
  }

}
