import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  public whatTime: Date = new Date();
  cartInfo = 20;

  public payment: String;
  public user: String;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.payment = params['payment'];
      this.user = params['user'];
    });
  }
}

