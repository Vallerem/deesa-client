import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  optionalParameter: string;
  currentUser: any = JSON.parse(localStorage.getItem('user'));


  @Input() accountInfo: any;
  @Input() currentView: any;
  @Output() submittedForm = new EventEmitter < boolean > ();

  constructor() {}

  ngOnInit() {
    this.accountInfo.user.password="";
  }

  submitForm() {
     this.accountInfo.currentView = this.currentView; // add view: account/password/address
    this.submittedForm.emit(this.accountInfo); //Output - Send to parent
  }

}


