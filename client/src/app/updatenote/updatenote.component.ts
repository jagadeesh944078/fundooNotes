import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { dialog} from '../notebar/notebar.component'


@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent >,@Inject(MAT_DIALOG_DATA) public data: dialog
    ) { }

  ngOnInit() {
  }
close():void{
  this.dialogRef.close();
}
}
