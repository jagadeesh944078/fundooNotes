import { Component, OnInit,Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import {UpdatenoteComponent } from 'src/app/updatenote/updatenote.component'
import{NoteserviceService} from '../service/noteservice.service'
import { from } from 'rxjs';
export interface dialog{
  array:[];
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
 @Input() card=[];


  constructor(public dialog: MatDialog,private note:NoteserviceService) { }
  
  ngOnInit() {
    
console.log(this.card);
  }
  openDialog(array){
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
     
      data: { array },
      width:'600px',
      height:'200px'
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
          console.log("fg");
      })
    });
  }
  
}
