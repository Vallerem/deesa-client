import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'design-new-form',
  templateUrl: './design-new-form.component.html',
  styleUrls: ['./design-new-form.component.css']
})
export class DesignNewFormComponent implements OnInit {

    designInfo: any = {
    designGallery: []
  };


  //designInfo: any = {};


  img : any;
  @Output() submittedForm = new EventEmitter < boolean > ();

  constructor() { }

  ngOnInit() {
  }

  submitForm(event) {

    console.log("event:");

console.log(event);

    console.log("SUBMITFORM!");

    console.log(`this.designInfo-->${JSON.stringify(this.designInfo)}`);

    try
    {
      if( (typeof(event.designInfo.title) != "undefined")){console.log("TITLE UNDEFINED");
    }
    }
    catch(e)
    {
     console.log(e);

    }

        this.submittedForm.emit(this.designInfo); //Output - Send to parent
      }


      addImg() {
        this.designInfo.designGallery.push(this.img)
        this.img = ''
      }

}
