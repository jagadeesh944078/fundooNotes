import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  ArrayOfLabel:any
  constructor(public Data:NoteserviceService) { }

  ngOnInit() {
    this.getlabel()
  }
getlabel(){
  this.Data.getLabel().subscribe(data=>{
    this.ArrayOfLabel=data['data']['details']
    // this.ArrayOfLabel=this.ArrayOfLabel.reverse();
    console.log(this.ArrayOfLabel,"labels");
    },
    err=>{
      console.log(err)
    })
    }
}
