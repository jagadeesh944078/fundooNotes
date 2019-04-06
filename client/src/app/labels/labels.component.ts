import { Component, OnInit,Inject,Input ,ViewChild,ElementRef} from '@angular/core';
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
label:string;
model:any;
private changeText: boolean;
private clickEdit;
private idEdit;
private iconEdit;
private canEdit;
private editLabel;
private messageDisplay;
private message;
private newLabel;

@Input() card: any;
getlabels=[];
ArrayOfLabel=[];
constructor(public dialogRef: MatDialogRef< LabelsComponent >,@Inject(MAT_DIALOG_DATA) public data: dialog,private Data:NoteserviceService) { }
@ViewChild('editDiv') editDiv: ElementRef;

  ngOnInit() {
// this.ArrayOfLabel=[this.data];
this.getLabel();
  }
  reverseFlag(){
    this.flag=!this.flag
  }
  close(){
    this.dialogRef.close();
    this.addLabel();
  }
  userId=localStorage.getItem('userId')
  // id=localStorage.getItem('id')

  addLabel(){
    this.model={
      // "id":this.id,
      "label": this.label,
      "isDeleted": false,
      "userId": this.userId,
      
    }
    console.log(this.model)

    this.Data.addLabel(this.model).subscribe(data=>{
      console.log(data,"data  ")
      this.label='';
      this.ArrayOfLabel.push(data);
      this.getLabel();
    },
    err=>{
      console.log(err)
    })
  }
getLabel(){
this.Data.getLabel().subscribe(data=>{
this.ArrayOfLabel=data['data']['details']
console.log(this.ArrayOfLabel,"labels");
},
err=>{
  console.log(err)
})
}
edit(label) {
  this.clickEdit = true;
  this.iconEdit = false;
  this.canEdit = true;
  this.idEdit = label.id;
  this.editLabel = label.label;

}
editlabel(label) {
  this.iconEdit = true;
  this.clickEdit = false;
  this.canEdit = false;
  this.newLabel = this.editDiv.nativeElement.innerHTML

  let body = {
    "label": this.newLabel,
    "isDeleted": false,
    "id": label.id,
    "userId": this.userId
  }
  this.Data.postUpdateNotelabel( label.id, body)
    .subscribe(result => {
      // this.dataService.change(true);
      this.getLabel();
    })
}
deleteLabel(labelid) {
  // const dialogRef = this.dialog.open(DeletedialogComponent, {
  //   width: '500px',
  //   panelClass: 'myapp-no-paddding-dialog',
  //   data: { name: 'label' }
  // });
  // dialogRef.afterClosed()//closing the dialogcomponent
  // .subscribe(data => {
  //   if (data) {
      this.Data.deletelabel( labelid)
      .subscribe(result => {

        // this.dataService.change(true);//sharing data through data service

        // this.eventTwo.emit();
        this.getLabel();
      });
    }

//   })
// }
//   }
  }
 


