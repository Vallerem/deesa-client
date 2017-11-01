import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  @Input() commentItem;
  @Output() submittedLike = new EventEmitter < boolean > ();

  constructor() { }

  ngOnInit() {
    console.log("ESTOY EN BOX");
    console.log(`component box commentsInfo-->${JSON.stringify(this.commentItem)}`);

    console.log(this.commentItem);

  }

  addLike(){
    this.commentItem.creator = this.currentUser._id;
    this.submittedLike.emit(this.commentItem); //Output - Send to parent
  }

}
