import { Component, OnInit, Input,ViewChild,AfterViewInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service'
import { identifierModuleUrl } from '@angular/compiler';
import { AddNoteComponent} from '../add-note/add-note.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {
  title = [];
  addnote: any;
  
  close: any;
  card = [];

  constructor(private notes: NoteserviceService) { }
  @Input() view: boolean;
  @ViewChild(AddNoteComponent) child;

  ngOnInit() {
    this.getAllCards();
  }
  id = []
  getAllCards() {

    this.notes.getNote().subscribe(data => {
      console.log(data, 'getall cards')
      this.card = data['data']['data'];
      for (let index = 0; index < this.card.length; index++) {
        this.id.push(this.card[index].id);
        if (this.card[index].isDeleted == false && this.card[index].isArchived == false) {
          this.title.push(this.card[index])
          console.log(this.title, "all cardss")
        }
      }
    },
      err => {
        console.log("error  ")
      })
  }
 
  receiveMessage($event) {
    this.addnote = $event;
    console.log(this.addnote, "......addnote")
    this.title.splice(0, 0, this.addnote)
}
message:any;
ngAfterViewInit() {
  this.message = this.child.message
  console.log(this.message,"dfgj")
}
}
