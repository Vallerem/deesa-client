import { UserService } from './../../../services/user.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})

/**
 * Comment form to post a new comment
 */
export class CommentFormComponent implements OnInit {

  @Input() commentsInfo;
  @Output() submittedForm = new EventEmitter < boolean > ();

  newComment: any = {};

  constructor(private userAPI: UserService) {}
  ngOnInit() {}

  submitComment() {
    this.newComment.creator = this.userAPI._currentUser;
    this.submittedForm.emit(this.newComment);
  }
}

