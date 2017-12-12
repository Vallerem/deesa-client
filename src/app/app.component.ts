import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session/session.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  	private session: SessionService,
  	private router: Router,
  ) { }

  ngOnInit() {
   /*  console.log(environment.sayHello); */
  }
}
