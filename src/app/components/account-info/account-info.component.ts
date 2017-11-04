import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  optionalParameter: string;
  currentUser: any = JSON.parse(localStorage.getItem('user'));
 

  arr = [];

  @Input() accountInfo: any = {}; // prevent an undefined element
  @Input() currentView: any;
  @Output() submittedForm = new EventEmitter < boolean > ();

  constructor() {}

  ngOnInit() {
         console.log("ngOnInit");
      this.arr.push(this.accountInfo);

        this.arr.forEach((element)=>{
      console.log(element);
        });
  }

  submitForm() {

console.log("submitForm-->accountInfo");
this.arr.push(this.accountInfo);
    this.arr.forEach((element)=>{
      console.log(element);
        });
    this.accountInfo.currentView = this.currentView; // add view: account/password/address

    this.submittedForm.emit(this.accountInfo); //Output - Send to parent
  }

}


