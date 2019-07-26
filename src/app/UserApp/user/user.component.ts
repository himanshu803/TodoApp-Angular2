import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [PostsService]
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: posts[];

  constructor (private postsService: PostsService) {
    this.name = 'Himanshu Mishra',
    this.email = 'himanshu.itech1@gmail.com',
    this.address = {
      city: 'bhopal',
      street: '12/220 Rajnagar'
    },
    this.hobbies = ['Singing', 'Dancing', 'Reading'],
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    }else {
      this.showHobbies = true;
    }
  }

  deleteHobby(i) {
    this.hobbies.splice(i,1);
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
}

interface address {
 street: string;
 city: string;
}

interface posts {
  title: string;
  id: number;
  body: string;
}


