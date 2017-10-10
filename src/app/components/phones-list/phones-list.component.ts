import { PhonesService } from './../../services/phones.service';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css'],
})
export class PhonesListComponent implements OnInit {
	phones;
  baseAPI = environment.baseAPI;
  
  constructor(private phoneAPI: PhonesService) { }

  ngOnInit() {
  	this.phoneAPI.getList()
  		.subscribe((phones) => {
  			this.phones = phones
  		})
  }

  getPhones() {
  	
  }
  
}
