import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'design-new-form',
  templateUrl: './design-new-form.component.html',
  styleUrls: ['./design-new-form.component.css']
})
export class DesignNewFormComponent implements OnInit {

/*   designInfo = {
    some: '',
    designGallery: []
  }; */


  designInfo: any;


  img : any;
  @Output() submittedForm = new EventEmitter < boolean > ();

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log(`${JSON.stringify(this.designInfo)}`);
        this.submittedForm.emit(this.designInfo); //Output - Send to parent
      }


      addImg() {
        this.designInfo.designGallery.push(this.img)
        this.img = ''
      }

}
