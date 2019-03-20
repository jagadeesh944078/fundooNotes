import { Component, OnInit, ChangeDetectorRef, Inject, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {LabelsComponent} from '../labels/labels.component'
import { from } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DataserviceService } from '../service/dataservice.service';

export interface dialog{
  array:[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  view=false;

  message: any;
  content: any;
Search:string;
public value = 0;

  constructor(private router: Router,public dialog: MatDialog,public data:DataserviceService) {
    
   }

  ngOnInit() {

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
this.data.changeAppearance(this.view);
}


}
