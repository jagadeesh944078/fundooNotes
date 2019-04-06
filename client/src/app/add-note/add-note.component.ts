import { Component, OnInit,Output,EventEmitter } from '@angular/core';
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
  pinnedcard:any;
  card: any;
  date:Date;
  color='#ffffff';
  flag = true;
  flag1 = true;
  title = new FormControl('', [Validators.required, Validators.required]);
  description = new FormControl('', [Validators.required, Validators.required]);
  model: any;
  response: any;
  isOpen: boolean = false;
  private isArchived=false;
  collaboratorArray=[];
  
  // note: NoteModel = new NoteModel();
  constructor(private service : HttpService,private router : Router,private data:DataserviceService,private note:NoteserviceService) { }
  ngOnInit() {
 this.data.currentCollaborator.subscribe(data=>{
   console.log('data in add note ',data);
   if(data.email!="")
   this.collaboratorArray.push(data)
   
 },err=>{
   console.log('error in add note ',err);
   
 })
 console.log(this.date);
 
  }

  @Output() messageEvent = new EventEmitter<any>();

  
  
  close(){

    this.flag = !this.flag;
    if (this.title || this.description ) {



     this.notes = { 
    
      "title":this.title.value,
      "description":this.description.value,
      "labelIdList"	:[],
      "checklist":"",
      "isPined":"",
      "isArchived":this.isArchived,
      "color":this.color,
      "reminder":this.date,
     "collaberators":JSON.stringify(this.collaboratorArray),
}
if(this.date==undefined){
  console.log(this.date);
  
  this.notes.reminder='';
}
    console.log(this.notes,'in add');
    this.isOpen=!this.isOpen;

    
      this.service.PostUrlEncoded('notes/addNotes',this.notes).subscribe(data=>{
        console.log(data);
        this.response = data;
        this.title.reset();
        this.description.reset();
         
        this.messageEvent.emit(this.response['status']['details']);
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
    this.color = $event;
    console.log(this.color);
    
  }
  remind(event){

    console.log('event in add note',event);
    this.date=event.reminder;
    console.log(this.date,  '  ');
    
  }

}
 