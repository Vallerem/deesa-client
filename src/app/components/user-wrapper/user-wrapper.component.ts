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
  createDesignFlag: boolean = false;

  private routerUser = {
    username: ''
  }

  constructor(private userAPI: UserService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
    if(this.routerUser.username === this.currentUser.username) this.createDesignFlag=true;

    /**
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
}
