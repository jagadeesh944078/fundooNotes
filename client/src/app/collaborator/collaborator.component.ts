import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{dialog} from '../iconlist/iconlist.component';
import { NoteserviceService } from '../service/noteservice.service';
import { DataserviceService } from '../service/dataservice.service';

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
  card=[]
  constructor(  public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialog,public note:NoteserviceService,public dataservice:DataserviceService) { 
      this.card=data['collaborators']
      console.log(data);
      
if(this.card==undefined){
  this.card=[];
}
      console.log(this.card,"cards")
    }

  ngOnInit() {
    this.name=localStorage.getItem('firstName')
    this.email=localStorage.getItem('email')
    // this.dataservice.currentCollaborator.subscribe(message => this.userId = message)

  }

  addCollab(data){
console.log(data);

    var body={
      "firstName":this.rFname,
      "lastName":this.rLname,
      "userId":this.rId,
      "email":this.rmail
    }
this.card.push(body)

this.collaborator=''
    this.dataservice.changeCollaborator(body);
  console.log(data,"data",data.length)
  if(data!=undefined && data.id!=undefined)
  this.note.addColl(data.id,body).subscribe(data=>{
    console.log(data,"resp while adding")
  

  })
  }
details(array,data){
console.log(data);

if(this.checkCollaborator(array)){
  return;
}

console.log(this.card,"deatails")

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
  
  removeCollab(noteid,userId,index){
    console.log(index);
    
   this.card.splice(index,1);


    console.log(userId,"cardid")
    console.log(noteid.id)
    if(noteid.id!=undefined)
{
  this.note.removeColl(noteid.id,userId.userId).subscribe(data=>{
    console.log(data);
    })
}else{
  userId.type='remove';
  this.dataservice.removeCollaboratorMethod(userId);
}


    
  }

 checkCollaborator(item){
   console.log(this.card);
for (let i = 0; i < this.card.length; i++) {
if(this.card[i].userId==item.userId){
  console.log('itkjdksbiub');
  
  return true;
}  
}
return false;
 
} 
}
