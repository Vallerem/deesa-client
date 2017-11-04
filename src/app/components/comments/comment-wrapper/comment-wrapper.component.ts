import { CommentService } from './../../../services/comment.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.css']
})
export class CommentWrapperComponent implements OnInit {

  //private listId = 'COMMENT_COMPONENT_LIST';

  @Input() commentsInfo;
  @Input() designId;
  message: String;


  constructor(private commentsAPI: CommentService) { }

  ngOnInit() {}

  submittedCommentForm(event){
    console.log("NEW COMMENT.");

    event.design = this.designId;
    console.log(event);

    this.commentsAPI.newComment(event)
    .subscribe((res) => {
      this.message = res.message;
      console.log(`response new comment: ${this.message}`);
    });
  }

  addLike(event){
    console.log(`event---------> ${JSON.stringify(event)}`);

   this.commentsAPI.addCommentLikes(event)
   .subscribe((res) => {
     this.message = res.message;
     console.log(`response addCommentLikes: ${this.message}`);
   });
  }
}
