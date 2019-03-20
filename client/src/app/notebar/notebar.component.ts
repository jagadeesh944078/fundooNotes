import { Component, OnInit,Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import {UpdatenoteComponent } from 'src/app/updatenote/updatenote.component'
import{NoteserviceService} from '../service/noteservice.service'

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

 message: string;

 @Input() card=[];
 @Input() arrayCards;
 @Input() type;
 @Input() cond;
@Input() Search;

  constructor(public dialog: MatDialog,private note:NoteserviceService) { }
  
  ngOnInit() {
    
console.log(this.card);
  }
  openDialog(array){
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
     
      data: { array },
      width:'600px',
    })
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result['array'].id);
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
}
