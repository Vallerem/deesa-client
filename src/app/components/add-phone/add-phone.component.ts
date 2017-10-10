import { PhonesService } from './../../services/phones.service';
import { SessionService } from './../../services/session/session.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
	
	
	uploader: FileUploader;
	phone = {
		brand: '',
		image: 'http://placehold.it/350x150',
		model: '',
		specs: []
	};
	spec = '';
	feedback: string;
	baseAPI = environment.baseAPI;

  constructor(
		private phoneAPI: PhonesService,
		private session: SessionService,
  	private router: Router
  ) { }

  ngOnInit() {
		this.uploader = new FileUploader({
			url: `${this.baseAPI}/api/phones`,
			authToken: "JWT " + this.session.token,
		});
		this.uploader.onAfterAddingFile = (file) => { console.log('file2', file) };
		this.uploader.onSuccessItem = (item, response) => {
			console.log('phone', JSON.parse(response).phone);
			
			this.phone = JSON.parse(response).phone
			
			this.feedback = JSON.parse(response).message;
		};

		this.uploader.onErrorItem = (item, response, status, headers) => {
			console.log('error', response);
			this.feedback = JSON.parse(response).message;
		};
  }

  submitForm(){
		
		this.uploader.onBuildItemForm = (item, form) => {
			item.withCredentials = false;
			form.append('brand', this.phone.brand);
			form.append('model', this.phone.model);
			form.append('specs', this.phone.specs);
		};
		
		this.uploader.uploadAll();
  	// this.phoneAPI.add(this.phone)
  	// 	.subscribe((res)=>{
  	// 		console.log(res)
  	// 		this.router.navigate(['/phones'])		
  	// 	})
  	// console.log(this.phone)
  }

  addSpec() {
  	this.phone.specs.push(this.spec)
  	this.spec = ''
  }

}
