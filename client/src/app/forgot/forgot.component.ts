import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import {  NoteserviceService } from  '../service/noteservice.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit  {
  destroy$: Subject<boolean> = new Subject<boolean>();
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorEmail() {
    return this.email.hasError('required') ? 'Enter a Valid email  ' :
      this.email.hasError('email') ? 'Invalid email' :
        '';
}
  constructor(public note:NoteserviceService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
  private model: any = {}
  goToPassword() {
    console.log(this.model.email)
    if (!this.email.invalid) {
      this.note.newPassword({
        "email": this.model.email,

      })
        .subscribe(
          (data) => {
           console.log(data)
          },
          error => {
           
          }
        )
    }
    else {

    }
}
}
