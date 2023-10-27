import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts: Array<any>;

  //Providers in Angular
  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }

  addNewData() {
    let newPost: Post = {
      id: 6,
      postTitle: 'Post 6',
    };

    this.postService.addPost(newPost);
  }
}
