import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LabelsComponent} from '../labels/labels.component'
import { from } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DataserviceService } from '../service/dataservice.service';
import {ImageComponent} from '../image/image.component';
import { environment } from 'src/environments/environment';
import { NoteserviceService } from '../service/noteservice.service';
export interface dialog{
  array:[];
  
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private profile;
  message: any;
  content: any;
Search:string;
name:string;
email:string
public value = 0;
view=false;
imageProfile: string;
 private ArrayOfLabel = [];
 label=[];
  constructor(private router: Router,public dialog: MatDialog,public data:DataserviceService,public note:NoteserviceService) {
    
   }

  ngOnInit() {
this.name=localStorage.getItem('firstName')
this.email=localStorage.getItem('email')
this.data.currentPhoto.subscribe(data=> {
  console.log(data ,"image data")
})
this.getlabel()
  }
 
  addNote(): void {
    this.router.navigate(["addNote"])
  }
  recieveMessage($event) {
    this.message = $event;
    console.log("event data..", this.message);
  }
  remainder(): void {

    this.router.navigate(["remainder"])
  }
  archive(): void {

    this.router.navigate(["archive"])
  }
  trash(): void {

    this.router.navigate(["trash"])
  }
goSearch(){
  this.router.navigate(['dashboard/search'])
}
lookfor(){
  this.data.changeMessage(this.Search)
}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(["/login"])
  }
  values: any = '';
  openDialog(){
    const dialogRef = this.dialog.open(LabelsComponent,{
     
      data: {  },
      width:'600px',
    })
    dialogRef.afterClosed().subscribe(result => {
    });
}
toggle(){
  this.view=!this.view;
  localStorage.setItem('view', JSON.stringify(this.view))
   this.data.changeAppearance(this.view);
}
imageFile = null;
public imageNew = localStorage.getItem('imageUrl');
img = environment.profileUrl + this.imageNew;
onFileUpload(event) {
  this.imageFile = event.path[0].files[0];
  const uploadImage = new FormData();
  uploadImage.append('file', this.imageFile, this.imageFile.name);
  this.openPicture(event);

}
openPicture(data){
  const dialogRef =this.dialog.open(ImageComponent,{
    width: '80%',
    height: '80%',
    data: data,
    // disableClose: true
  })
  dialogRef.afterClosed().subscribe(result=>{
   this.data.currentPhoto.subscribe(imageResponse=>this.profile=imageResponse)
   if(this.profile=true){
     this.imageProfile=localStorage.getItem('imageUrl');

     this.img=environment.profileUrl+this.imageProfile;
   }
  //  localStorage.setItem('imageUrl',data['status'].imageUrl)

  })
}
// public image={};
getlabel(){
  this.note.getLabel().subscribe(data=>{
    this.ArrayOfLabel=data['data']['details']
    this.data.changeMessage(data['data']['details'])
    this.label.push(this.ArrayOfLabel)
    // this.data.currentMessage.subscribe(message=>this.ArrayOfLabel=message)
  })
}
editlabel(label){
  this.router.navigate(['dashboard/label',label])}
}
