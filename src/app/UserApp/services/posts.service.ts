import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";


@Injectable()
export class PostsService {

  constructor(private http: Http) {
    console.log('PostsService initialized...')
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json())
  }

}
