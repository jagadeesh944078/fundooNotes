import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{dialog} from '../iconlist/iconlist.component';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  userId:string;
  name:string;
  email:string;
  collaborator:string;
  userList:string;
  rmail:'';
  rFname:''
  rLname:''
  rId:''
  constructor(  public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialog,public note:NoteserviceService) { 
      console.log(data ,"data1")
    }

  ngOnInit() {
    this.name=localStorage.getItem('firstName')
    this.email=localStorage.getItem('email')
  }

  addCollab(noteid){
    var body={
      "firstName":this.rFname,
      "lastName":this.rLname,
      "userId":this.rId,
      "email":this.rmail
    }
  console.log(body,"data")
  console.log(noteid,"iddd"),
  this.note.addColl(noteid,body).subscribe(data=>{
  console.log(data)

  })
  }
  details(array){
    console.log(array,"deatails")
    this.rFname=array.firstName;
    this.rLname=array.lastName;
    this.rmail=array.email;
    this.rId=array.userId
    this.collaborator=this.rmail
    
  }
  searchForlist(data){
    this.note.serchUserList(
      {"searchWord":data}).subscribe(data=>{
      console.log(data)
      this.userList=data['data']['details'];
    })
    
  }
  removeCollab(userId){
    console.log(userId)
  }
}
