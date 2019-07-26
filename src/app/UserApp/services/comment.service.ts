import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

@Injectable()
export class CommentService {

  constructor(private http : Http) {
    console.log('CommentService initialized..')
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
      .map(res => res.json())
  }

}
