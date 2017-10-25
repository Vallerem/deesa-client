import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  accountInfo: any;
  designsList: any;
  createDesignFlag: boolean = false; //control variable for add Design button


/*   private sub: any;
  private parentRouteId: number; */


  private routerUser = {
    username: ''
  }

  constructor(private userAPI: UserService, private route: ActivatedRoute ) { }


checkLoggedUser(){
  return (this.routerUser.username === this.currentUser.username) ? true : false //If they are the same Add Design
}

/* foo = this.checkLoggedUser();
foo2 = this.checkLoggedUser; */

  ngOnInit() {
   this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
   this.createDesignFlag = (this.routerUser.username === this.currentUser.username) ? true : false //If they are the same Add Design
   console.log(this.createDesignFlag);

 /*   this.designerRole = this.userAPI.checkDesignerRole(this.routerUser);
   console.log("designerRole --> "+this.designerRole); */


    //if(this.routerUser.username === this.currentUser.username) {this.createDesignFlag=true} //If they are the same Add Design


/*     console.log(`checkLoggedUser() ${this.foo}`);
    console.log(`checkLoggedUser ${this.foo2()}`); */

/* console.log(`queryparams${this.route.queryParams}`);
 */

/*  this.sub = this.route.parent.params.subscribe(params => {
  this.parentRouteId = +params["username"];
});
 console.log(`parentRouteId   -->${JSON.stringify(this.parentRouteId)}`);
console.log(`sub   -->${JSON.stringify(this.sub)}`);

*/

/**
 * If user logged are the same show button
 */


    /**
     * toDo:
     * Esta llamada se puede poner en un servicio que se ejecuta al inicio del todo.
     * De esta manera solo cargaria la informacion al principio, despues simplemente se llama al servicio
     * y se devuelve la información.
     */
    this.userAPI.getAccount(this.routerUser).subscribe((res) => {
      this.accountInfo = res;
      this.designsList = res.user.designerInfo.designs;
      console.log(`designsList   -->${JSON.stringify(this.designsList)}`);
    });
  }

/*   ngOnDestroy() {
    this.sub.unsubscribe();
} */
}
