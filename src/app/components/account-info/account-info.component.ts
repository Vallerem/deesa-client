import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  optionalParameter: string;

  arr = [];

  @Input() accountInfo: any = {};
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


