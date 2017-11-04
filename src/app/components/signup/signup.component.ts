import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../services/session/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formPhase: number = 0;
  passwordConfirmation = "";
	error = null;
  authenticated: boolean;
  currentUser: Object;
  message = "";


  user = {
		username: '',
		password: '',
    email: '',
    name: '', 
    surname: '',
    role: ''
	}

  constructor( private session: SessionService, private router: Router
  ) {

    // Here we get a method to see if the user is authenticated and get all the data from the user stored in LocalStorage
      if(localStorage.getItem('jwt')){
      this.authenticated = true;
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
  }

  ngOnInit() {}

  changePhaseDesigner() {
    this.formPhase = 1;
    this.user.role = "DESIGNER";
  }

  changePhaseFan() {
    this.formPhase = 1;
    this.user.role = "FAN";
  }

  resetPhase() {
    this.formPhase = 0;
    this.user.role = "";
  }


  signupSubmit() {
    this.session.signup(this.user)
    .subscribe(
  			(data) => {
  				this.router.navigate(['/account']);
  			},
  			(err) => {

          console.log(err);
  				this.error = err;
          // this.message = message;
  			});
  }
}

