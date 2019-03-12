import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { dialog} from '../notebar/notebar.component'
import { NoteserviceService } from '../service/noteservice.service'


@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Input() card=[];
  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent >,@Inject(MAT_DIALOG_DATA) public data: dialog,private Data:NoteserviceService
    ) { }
    
  ngOnInit() {
  
  }
onclick():void{
  this.dialogRef.close();
}
// onclick(notes){
//   noteId:
//   title:
//   description:
// }
// this.Data.UpdatenoteComponent()
 }
