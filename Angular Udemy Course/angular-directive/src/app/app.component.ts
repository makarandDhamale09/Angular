import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray: Array<Post> = [
    {
      id: 1,
      postTitle: 'Post 1',
    },
    {
      id: 2,
      postTitle: 'Post 2',
    },
    {
      id: 3,
      postTitle: 'Post 3',
    },
    {
      id: 4,
      postTitle: 'Post 4',
    },
    {
      id: 5,
      postTitle: 'Post 5',
    },
  ];

  objArray1: Array<Post> = [];

  stepForm!: string;
  isActive: boolean = true;

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'Post 6' });
    this.objArray1.push({ id: 1, postTitle: 'Post 1' });
  }

  onDelete(index: number) {
    //let index = this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
    this.objArray1.splice(index, 1);
  }

  onClick(status: string) {
    this.stepForm = status;
  }
}

interface Post {
  id: number;
  postTitle: string;
}
