import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  optionalParameter: string;
  currentView: string;

  constructor(
/*     @Input() accountInfo: any
 */
private router: Router) {
  console.log(`----------->${this.router.url}`);
}

ngOnInit() {

  if(this.router.url === '/account'){
    this.currentView='account';
  }

  if(this.router.url === '/account/designer'){
    this.currentView='designer';
  }

  if(this.router.url === '/account/password'){
    this.currentView='password';
  }

}

submitForm() {

}


}
