import { Component, OnInit } from '@angular/core';
import{ NoteserviceService } from '../service/noteservice.service'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
 deletecards=[];
 card=[];
  constructor(private data:NoteserviceService) { }

  ngOnInit() {
    this.getAllCards()
  }
  getAllCards(){
    this.data.getTrashNotes().subscribe(data=>{
      console.log("getting notes")
      this.deletecards=data['data']['data']
    },
    err=>{
      console.log(err)
    }
    )
  }
 

}
