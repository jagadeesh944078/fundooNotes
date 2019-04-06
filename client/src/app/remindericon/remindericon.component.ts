import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-remindericon',
  templateUrl: './remindericon.component.html',
  styleUrls: ['./remindericon.component.scss']
})
export class RemindericonComponent implements OnInit {
public reminderData=[];
  constructor(private note:NoteserviceService) { }

  ngOnInit() {
    this.getReminders()
  }
getReminders(){
  this.note.getReminder().subscribe(data=>{
  this.reminderData=data['data']['data']
  // console.log(this.reminderData,"remindersdata")
  })
}
}
