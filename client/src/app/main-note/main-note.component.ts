import { Component, OnInit, Input } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service'
import { identifierModuleUrl } from '@angular/compiler';

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
  // recievemessage($event) {
  //   console.log($event,"note")
  //   this.close = $event;
  //   console.log(this.close,"note")
  //   this.title.push(this.close)
  // }
  receiveMessage($event) {
    this.addnote = $event;
    console.log(this.addnote, "......addnote")
    this.title.splice(0, 0, this.addnote)

  }



}
