import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string;
  email!: string;
  address!: string;

  userArray: Array<User> = [];

  onClick() {
    this.userArray.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });

    console.log(this.userArray);
  }

  onDelete(index: number) {
    this.userArray.splice(index, 1);
  }
}

interface User {
  name: string;
  email: string;
  address: string;
}
