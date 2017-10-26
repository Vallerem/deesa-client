import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'designs-wrapper',
  templateUrl: './designs-wrapper.component.html',
  styleUrls: ['./designs-wrapper.component.css']
})
export class DesignsWrapperComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  designInfo: any;
  designsList: any;

  private routerUser = {
    username: ''
  }
  private idDesign: String;



  constructor(private userAPI: UserService, private route: ActivatedRoute, private designAPI: DesignService) {}

  ngOnInit() {

    this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
    this.idDesign = this.route.snapshot.paramMap.get('idDesign'); //catch route param


    this.designAPI.getDesign(this.idDesign).subscribe((res)=>{
      this.designInfo = res.design;
      console.log(`designInfo   -->${JSON.stringify(this.designInfo)}`);

    })
  }

}
