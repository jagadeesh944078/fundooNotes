
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MessagingService } from './service/messaging.service';
MessagingService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'fundoo';
  message;
  constructor(private messagingService: MessagingService) { }
  ngOnInit() {
    this.messagingService.getPermission();
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    }
}