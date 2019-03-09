import { Component, OnInit,Output,EventEmitter} from '@angular/core';
// import { NoteModel } from 'src/app/models/note.model';
import {  HttpService} from '../service/http/http.service';
import { Router } from '@angular/router';
import {FormControl,  Validators} from '@angular/forms';
import { NoteserviceService } from '../service/noteservice.service'
import { DataserviceService } from '../service/dataservice.service'
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  public notes:any={};
  @Output() messageEvent = new EventEmitter<any>();
  pinnedcard:any;
  card: any;
  bgcolor: any="#FFFFFF";
  flag = true;
  flag1 = true;
  title = new FormControl('', [Validators.required, Validators.required]);
  description = new FormControl('', [Validators.required, Validators.required]);
  model: any;
  response: any;
  isOpen: boolean = false;
  
  
  // note: NoteModel = new NoteModel();
  constructor(private service : HttpService,private router : Router,private data:DataserviceService,private note:NoteserviceService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.card = message)
    console.log(this.card, "card..")
  }

  
  
  
  close(){
    this.flag = !this.flag;
    if (this.title || this.description ) {
     this.notes = { 
    
      "title":this.title.value,
      "description":this.description.value,
      "labelIdList"	:[],
      "checklist":"",
      "isPined":"",
      "isArchived":"",
      "color":this.bgcolor,
      "reminder":[],
     "collaberators":""
}
    console.log(this.notes,'in add');
   
    
      this.service.PostUrlEncoded('notes/addNotes',this.notes).subscribe(data=>{
        console.log(data);
        this.response = data;
        this.title.reset();
        this.description.reset();

        this.isOpen=!this.isOpen;
        this.messageEvent.emit(this.notes);
      },
      err =>
      {
        console.log("error occur while adding",err);   
      })
     
      // this.service.getnotes(this.notes).subscribe(data=>{
      //   console.log(data);

      // })
  
  }

  }
  ispinned() {
    this.flag1 = !this.flag1;
  }
  recievemessage($event) {
    this.bgcolor = $event;
  }
  

}
 