import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message: string = 'Message from typescript component file';
  imageUrl: string =
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  //This way we can dynamically set the color
  bool: boolean = true;

  buttonClick() {
    console.log('Button Clicked');
  }

  onKeyup() {
    console.log('Enter key pressed');
  }
}
