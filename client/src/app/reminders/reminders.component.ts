import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  public menuTo: boolean = true;

  constructor(public data:DataserviceService,private notes:NoteserviceService) { }
  @Input() card: any;
  @Output() reminderEvent = new EventEmitter<any>();
  public newDate;
  public hours;
  public date = new Date();
  @Input() note: any;
  id=localStorage.getItem('userId');

  @Output() messageEvent = new EventEmitter();

  ngOnInit() {
    // this.data.currentReminder.subscribe(message => this.card = message)

  }
  private model = {};

chooseTime(card,cardObject){
  console.log('reminder add in ',cardObject)
  if(card=='8pm'){
    this.newDate = new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate() + 0, 20, 0, 0)
  }
  else if(card=='8am'){
    this.newDate=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDay()+1,8,0,0)
  }
  else if(card=='Nextweek'){
    this.newDate=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDay()+7,8,0,0)
  }
  console.log(cardObject,'iudshdhsoihdsoi');
  
 
  if(cardObject!=undefined)
  {
    const model={
      'reminder':this.newDate,
      'noteIdList':[this.card.id]
    
    
    }
    console.log(model);
    
    this.notes.addReminders(model).subscribe(data=>{
    console.log(data);
    this.card.reminder=[model.reminder]
    },err=>console.log(err))
    
    }
    else{
      const model={
        'reminder':this.newDate,
        'type':'reminder'
      
      
      }
      console.log(model);
      this.reminderEvent.emit(model)
      //  this.data.changeReminder(model)
    }
  }

  setCustomTime(data){
    if(data=='8am'){
      this.hours=8;
    }
    if(data=='1pm'){
      this.hours=13;
    }
    if(data=='6pm'){
      this.hours=18;
    }
    if(data=='8pm'){
      this.hours=20
    }
    // if(this.hours>12){
    //   this.customTime=(this.hours-12)+':'+'00'+' PM'
    // }
    // else if(this.hours<=12){
    //   this.customTime=this.hours+':'+'00'+' AM'
    // }
}
}
