import { Component, OnInit,Input } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  public menuTo: boolean = true;

  constructor(public data:DataserviceService) { }
  @Input() view;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.view = message)

  }

}
