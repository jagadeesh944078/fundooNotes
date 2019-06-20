import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  ArrayOfLabel=[];
  sub
  labelName
  constructor(public Data:NoteserviceService,private routes: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      console.log(params,"params");
      this.labelName = params['label'];
      this.getlabel();
    });
console.log("------------------------------------------")
  }
getlabel(){
  console.log(this.labelName, this.ArrayOfLabel)
  this.Data.getNotesListByLabel(this.labelName).subscribe(message => {
    console.log(message);

    this.ArrayOfLabel = message['data']['data']
    console.log(this.ArrayOfLabel)
  })
}
}
