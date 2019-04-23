import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteserviceService } from '../service/noteservice.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(public note:NoteserviceService,public route:ActivatedRoute) { }
  public accessToken = this.route.snapshot.params.forgotToken;
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  ngOnInit() {
  }
  getErrorPassword() {
    return this.password.hasError('required') ? 'enter password' :
      this.password.hasError('pattern') ? 'Password can be only number,alphabets and characters(* and @)' :
        '';
  }
  private info: any = {}
  public input = new FormData();

  resetPassword() {
    var body = {
      "newPassword": this.info.password
    }
    if (this.info.password.length == 0) {
      return;
    }
    this.input.append('newPassword', this.info.password);
    this.note.resetPassword(body).subscribe(response => {
      console.log(response)
    }, error => {
    })
}
}
