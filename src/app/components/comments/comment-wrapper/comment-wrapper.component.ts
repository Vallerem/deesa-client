import { CommentService } from './../../../services/comment.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.css']
})
export class CommentWrapperComponent implements OnInit {

  //private listId = 'COMMENT_COMPONENT_LIST';

  @Input() commentsInfo; //array of comments
  @Input() designId;
  message: String;


  constructor(private commentsAPI: CommentService) { }

  ngOnInit() {}

  submittedCommentForm(comment){
    console.log("NEW COMMENT.");
    console.log("COMMENTSINFO:");
    console.log(this.commentsInfo);
    console.log(comment);

    let newComment = {
      creator: comment.creator,
      message: comment.message,
      design: this.designId,
      likedBy: []
    }

    this.commentsInfo.push(newComment);
    console.log(this.commentsInfo);

      this.commentsAPI.newComment(newComment)
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
