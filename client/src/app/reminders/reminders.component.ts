import { Component, OnInit,Input } from '@angular/core';
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
  public newDate;
  public date = new Date();
  @Input() note: any;
  id=localStorage.getItem('token');


  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.view = message)

  }
  private model = {};

chooseTime(card){
  console.log(card)
  if(card=='8pm'){
    this.newDate = new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate() + 0, 20, 0, 0)
  }
  else if(card=='8am'){
    this.newDate=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDay()+1,8,0,0)
  }
  else if(card=='Nextweek'){
    this.newDate=new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDay()+7,8,0,0)
  }
 
const model={
  'reminder':this.newDate,
  'noteIdList':[this.card.id]


}
console.log(model);

this.notes.addReminders(model).subscribe(data=>{
console.log(data);
},err=>console.log(err))

}

}
