import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  panelOpenState : boolean
  headerName :String

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  addNote() : void {
    this.router.navigate(["addNote"])
  }
remainder() : void{
  // this.router.navigate([""])
  this.router.navigate(["remainder"])
}
archive() : void {
  // this.router.navigate([""])
  this.router.navigate(["archive"])
}
trash() : void {
  // this.router.navigate([""])
  this.router.navigate(["trash"])
}

close() :void{
  this.panelOpenState = false;
}
  logout() : void {
    // this.noteService.httpOptions2.headers.delete('jwtToken');
     localStorage.removeItem('jwtToken');
     
     localStorage.removeItem('loginItem')
     this.router.navigate(["/login"])
   }
}
