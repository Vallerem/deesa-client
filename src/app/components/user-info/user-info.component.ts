import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() accountInfo;

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  createDesignFlag: boolean = false;
  private routerUser = {
    username: ''
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    console.log("HOLA");

/*     console.log(`${this.accountInfo.user.designerInfo.socialMedia.twitter}`);
 */    console.log(`this.accountInfo   -->${JSON.stringify(this.accountInfo.user)}`);


    this.routerUser.username = this.route.snapshot.paramMap.get('username'); //catch route param
    if(this.routerUser.username === this.currentUser.username) this.createDesignFlag=true;
  }

  followButton(event){
    console.log("CLICK FOLLOW");
  }

  messageButton(event){
    console.log("CLICK MESSAGE");
  }

}
