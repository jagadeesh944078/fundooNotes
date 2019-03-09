import { Component, OnInit,Input} from '@angular/core';
import { MatDialog } from '@angular/material';
import {UpdatenoteComponent } from 'src/app/updatenote/updatenote.component'

export interface dialog{
  title:any;  
  description:any;
}
@Component({
  selector: 'app-notebar',
  templateUrl: './notebar.component.html',
  styleUrls: ['./notebar.component.scss']
})
export class NotebarComponent implements OnInit {
  notes:any;
  title:any;
  description:any;
  @Input() card=[];
  
 


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
console.log(this.card);
  }
  openDialog(array): void{
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
     
      data: {array}
    })
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.title = result;
    });
  }
}
