import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UpdatenoteComponent } from 'src/app/updatenote/updatenote.component'
import{NoteserviceService} from '../service/noteservice.service'
import { viewAttached } from '@angular/core/src/render3/instructions';
import{CollaboratorComponent} from '../collaborator/collaborator.component'
import{DataserviceService} from '../service/dataservice.service'

export interface dialog{
  array:[];
  cond:any;
}
@Component({
  selector: 'app-notebar',
  templateUrl: './notebar.component.html',
  styleUrls: ['./notebar.component.scss']
})
export class NotebarComponent implements OnInit {
  // notes:any;
  // title:any;
  // description:any;
 
  array:[]
  data:any;
 model:any;
 cardid: any;
 allcards: any;
 flag1=true;
 ArrayOfLabel=[];

 message: string;
// id:any
 @Input() card=[];
 @Input() arrayCards;
 @Input() type;
 @Input() cond;
@Input() Search;
@Output() updateEvent = new EventEmitter<any>();
view;

  constructor(public dialog: MatDialog,private note:NoteserviceService,private dataservice:DataserviceService) { }
  
  ngOnInit() {
    this.dataservice.currentMessageList.subscribe(message => {
      console.log(message,"in display")
      this.view = message})
    
    

    this.view = localStorage.getItem('view');
console.log(this.card);

// this.getLabel();)
  }
  openDialog(array){
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
     
      data: { array },
      width:'600px',
    })
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result['array'].id);
      this.model = {
        noteId: result['array'].id,
        title: result['array'].title,
        description: result['array'].description,
      }
      this.note.updatenote(this.model).subscribe(message=>{
          console.log(message);
      })
    });
  }
  // unarchive($event){
  //   try{
  //   this.card.splice(0,0,$event)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  archive($event){
    try{
    let ind=this.card.indexOf($event)
    this.card.splice(ind,1);}
    catch(err){
      console.log(err)}
  }

  unarchived($event){
    try{
    let ind=this.card.indexOf($event)
    this.card.splice(ind,1);
    }catch(err){
      console.log(err)
    }
  }
  delete($event) {
    try{
    let ind = this.card.indexOf($event);
    this.card.splice(ind, 1);
    }catch(err){
      console.log(err)
    }
  }
  opendialog(){
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '700px',
      height:'300px',
      data: {array:this.card}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  label($event){
    this.ArrayOfLabel=$event.label;
    // console.log($event,"labels")
  }

  remove(array){
    var id= array.id;
    console.log(id)
    this.note.deleteReminder({"noteIdList":[array.id]}).subscribe(data=>{
console.log(data)
 array.reminder=[]

    // this.card.splice()
    })

  }
 removelabel(noteid,labelid){
   console.log(noteid)
   console.log(labelid)
   this.note.postAddLabelnotesRemove(noteid, labelid,{
     "noteId":noteid,
     "lableId":labelid
   }).subscribe(data=>{
     console.log(data)
     
   })

 }
}
