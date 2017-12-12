import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FileSelectDirective } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  BASE_URL: string = environment.baseAPI; //http://localhost:3000

  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/avatar`
  });

  currentUser: any = JSON.parse(localStorage.getItem('user')); //current user when login or signup
  currentView: string = "Cuenta";
  accountInfo: any; //JSON
  innerWidth = (window.screen.width) + "px";
/*   feedback = undefined; */
  message:any;
  cart: any;

  constructor(private userAPI: UserService) {}

  ngOnInit() {
    //We save user information in the user's service to save future calls to the server
    this.userAPI.getAccount(this.currentUser)
      .subscribe((res) => {
        this.accountInfo = res;
        //this.userAPI._currentUser=this.currentUser;
      });

/*     this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    }; */
  }

  submitImage() {

/*     this.uploader.onBuildItemForm = (item, form) => {
          item.withCredentials = false;
          form.append('_id', this.userAPI._currentUser._id );
          form.append('old_imgUrl', this.accountInfo.user.avatarUrl );
        };
    this.uploader.uploadAll(); */

    if (this.uploader.queue[0].file) {
      this.message="Imagen subida";
      this.accountInfo.user.avatarUrl = `assets/images/profile/${this.uploader.queue[0].file.name}`;
      this.userAPI._currentUser.avatarUrl = `assets/images/profile/${this.uploader.queue[0].file.name}`;
      this.uploader.queue =[];
      this.userAPI.editAvatarAccount(this.userAPI._currentUser)
        .subscribe((res) => {
          this.accountInfo.user.avatarUrl= res.avatarUrl; //html data-binding
          this.userAPI._currentUser.avatarUrl = res.avatarUrl; //
          localStorage.setItem('user', JSON.stringify(this.userAPI._currentUser) ); //update localStorage because onInit update userAPI._currentUser
        });
    }
    else{
      this.message="Error al subir imagen";
    }
  }

  /**
   * Submit form change profile
   * @param accountInfo
   */
  editAccount(accountInfo) {

    if (accountInfo.currentView === 'Cuenta') {
      this.message="Cuenta modificada";
      this.userAPI.editAccount(accountInfo.user)
        .subscribe((res) => {
          this.accountInfo.user.userInfo = res.user.userInfo;
        });
    }

    if (accountInfo.currentView === 'Contraseña') {
      //this.message="Contraseña modificada";
      this.userAPI.editPasswordAccount(accountInfo.user)
        .subscribe((res) => {
          //this.accountInfo = res;
          this.message = res.message;

        });
    }

    if (accountInfo.currentView === 'Dirección') {
      this.message = "Dirección modificada";
      this.userAPI.editAddressAccount(accountInfo.user)
        .subscribe((res) => {
          this.accountInfo.user.addressInfo = res.user.addressInfo;
        });
    }
  }

  clicked(event) {
    this.message="";
    event.preventDefault();
    this.currentView = event.target.innerHTML;
  }
}
