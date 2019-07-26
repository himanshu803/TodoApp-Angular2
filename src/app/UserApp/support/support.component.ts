import { Component} from '@angular/core';
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'support',
  templateUrl: 'support.component.html',
  styleUrls: ['support.component.css'],
  providers: [CommentService]
})
export class SupportComponent  {
  comments: comments[];

  constructor (private commentsService : CommentService) {
    this.commentsService.getComments().subscribe(comments => {
      this.comments = comments;
    })
  }
}

interface comments {
  id: number;
  name: string;
  email: string;
  body: string;
}
