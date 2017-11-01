import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('user'));
  @Input() commentsInfo;
  @Output() submittedForm = new EventEmitter<boolean>();

  newComment: any = {};

  constructor() { }
  ngOnInit() {
    console.log(`currentUser-->${JSON.stringify(this.currentUser)}`);

  }

  submitComment(){
    console.log(this.commentsInfo);

    this.newComment.creator = this.currentUser._id;
  this.submittedForm.emit(this.newComment);
}

}
