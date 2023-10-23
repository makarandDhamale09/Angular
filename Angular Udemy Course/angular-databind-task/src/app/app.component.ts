import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postTitle!: string;
  postDetails!: string;
  imageURL!: string;
  postUrl!: string;
  addBackground: boolean = false;
}
