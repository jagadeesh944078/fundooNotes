import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service'

@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {
  title:any=[];
  addnote:any;
  close:any;
  constructor(private notes:NoteserviceService) { }

  ngOnInit() {
   this.getAllCards();
  }
  getAllCards(){
    
    this.notes.getNote().subscribe(data=>{
        this.title = data['data']['data'];
        console.log(this.title ,"title")
    },
    err=>{
          console.log("error  ")
    })
  }
  // recievemessage($event) {
  //   console.log($event,"note")

  //   this.close = $event;
  //   console.log(this.close,"note")
  //   this.title.push(this.close)
  // }
  receiveMessage($event) {
    this.addnote = $event;
    this.title.push(this.addnote)


  }
  
}
