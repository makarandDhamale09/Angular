import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Post';
  messagePost: string = 'Message Post';

  postParentMessage: string = 'Message coming from post parent';

  childMessage: string = 'From Child Component';

  outputChildMessage = 'Message from child component via output';

  @Output() messageEvent = new EventEmitter<string>();

  @Input() fromParent!: string;

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
