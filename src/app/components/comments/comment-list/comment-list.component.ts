import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
/**
 * List of comments
 */
export class CommentListComponent implements OnInit {

  @Input() commentsInfo;
  @Output() submittedLike = new EventEmitter < boolean > ();

  constructor() { }

  ngOnInit() {}

  addLike(comment){
    this.submittedLike.emit(comment); //Output - Send to parent
  }
}
