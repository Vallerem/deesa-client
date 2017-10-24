import { UserService } from './../../services/user.service';
import { DesignService } from './../../services/design.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-new-wrapper',
  templateUrl: './design-new-wrapper.component.html',
  styleUrls: ['./design-new-wrapper.component.css']
})
export class DesignNewWrapperComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  designInfo: any = {};

  constructor(private userAPI: UserService, private designService: DesignService) { }

  ngOnInit() {
    this.userAPI.getAccount(this.currentUser).subscribe((res) => {
      this.currentUser.idCreator = res.user._id;
      console.log(`designsList   -->${JSON.stringify(this.currentUser)}`);
    });
  }

  newDesign(designForm) {

        console.log("account.component");
        designForm.creator = this.currentUser.idCreator; // add id creator

          this.designService.newDesign(designForm)
          .subscribe((res) => {
            this.designInfo = res;
            console.log(`response editAccount: ${this.designInfo}`);

          });
      }
}
