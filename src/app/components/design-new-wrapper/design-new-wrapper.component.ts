import { UserService } from './../../services/user.service';
import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

import { FileSelectDirective } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'design-new-wrapper',
  templateUrl: './design-new-wrapper.component.html',
  styleUrls: ['./design-new-wrapper.component.css']
})
export class DesignNewWrapperComponent implements OnInit {

  BASE_URL: string = environment.baseAPI; //http://localhost:3000
  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/new`
  });

  /*   designInfo: any = {}; */

  constructor(private userAPI: UserService, private designAPI: DesignService, private router: Router) {}

  ngOnInit() {}

  newDesign(designForm) {

      this.designAPI.newDesign(designForm)
      .subscribe((res) => {
        this.router.navigate(['/designs', designForm.username]);
      });
  }
}

