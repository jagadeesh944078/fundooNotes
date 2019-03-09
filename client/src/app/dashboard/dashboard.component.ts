import { Component, OnInit, ChangeDetectorRef, Inject, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  message: any;
  content: any;
  constructor(private router: Router) { }
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


  logout(): void {
    localStorage.removeItem('loginItem')
    this.router.navigate(["/login"])
  }
}
