import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
/**
 * Comment item of comments list
 */
export class CommentBoxComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  @Input() commentItem;
  @Output() submittedLike = new EventEmitter < boolean > ();

  constructor() { }

  ngOnInit() {}

  addLike(){
    this.submittedLike.emit(this.commentItem); //Output - Send to parent
  }
}
