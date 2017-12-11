import { CommentService } from './../../../services/comment.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.css']
})
/**
 * Container: form and list of comments
 */
export class CommentWrapperComponent implements OnInit {

  @Input() commentsInfo; //array of comments
  @Input() designId;
  message: String;

  constructor(private commentsAPI: CommentService) {}

  ngOnInit() {}

  submittedCommentForm(comment) {
    let newComment = {
      creator: comment.creator,
      message: comment.message,
      design: this.designId,
      likedBy: []
    }

    this.commentsInfo.push(newComment); // data-binding comment

    this.commentsAPI.newComment(newComment)
      .subscribe((res) => {
        this.message = res.message;
      });
  }

  addLike(commentItem) {
    this.commentsAPI.addCommentLikes(commentItem)
      .subscribe((res) => {
        this.message = res.message;
      });
  }
}
