import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { dialog} from '../dashboard/dashboard.component'
import{NoteserviceService} from '../service/noteservice.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
flag=true;
flag1=true;
labelList:any;
model:any;
@Input() card: any;
getlabels=[];
ArrayOfLabel:any;
constructor(public dialogRef: MatDialogRef< LabelsComponent >,@Inject(MAT_DIALOG_DATA) public data: dialog,private Data:NoteserviceService) { }

  ngOnInit() {

  }
  reverseFlag(){
    this.flag=!this.flag
  }
  close(){
    this.dialogRef.close();
    this.addlabel();
  }
  userId=localStorage.getItem('token')
  addlabel(){
    
    this.model={
      "label": "string",
      "isDeleted": true,
      "userId": this.userId,
    }
    
    this.Data.addLabel(this.model).subscribe(data=>{
      console.log(data)
      this.getLabel();
    },
    err=>{
      console.log(err)
    })
  }
getLabel(){
this.Data.getLabel().subscribe(data=>{
console.log(data['data']['details'],'label data')
this.ArrayOfLabel=data['data']['details']
console.log(data);
},
err=>{
  console.log(err)
})
}
  }
  
 


