import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() commentsInfo;
  @Output() submittedLike = new EventEmitter < boolean > ();

  arr = [];

  constructor() { }

  ngOnInit() {

    console.log(`LIST COMPONENT commentsInfo-->${JSON.stringify(this.commentsInfo)}`);
  }

  addLike(comment){
    this.submittedLike.emit(comment); //Output - Send to parent
  }

}
