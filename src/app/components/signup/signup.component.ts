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

  user = {
		username: '',
		password: '',
    email: '',
    userInfo: {
       name: '', 
       surname: ''
    },
    role: '',
	}
	error = null;

  constructor(
  	private session: SessionService,
  	private router: Router
  ) {}

  ngOnInit() {}

  changePhaseDesigner() {
    this.formPhase = 1;
    this.user.role = "DESIGNER";
    // console.log(this.user);
  }

  changePhaseFan() {
    this.formPhase = 1;
    this.user.role = "FAN";
    // console.log(this.user);
  }

  signupSubmit() {
    this.session.signup(this.user)
    .subscribe(
  			(data) => {
  				this.router.navigate(['/account']);
  			},
  			(err) => {
  				this.error = err;
  			});
  }


}
