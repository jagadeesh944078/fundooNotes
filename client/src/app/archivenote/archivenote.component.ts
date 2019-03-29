import { Component, OnInit, Input} from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  card = [];
  archiveCard = [];
  archivenote = [];
  @Input() type;

  constructor(private data: NoteserviceService) { }

  ngOnInit() {
    this.archiveNote();
  }
  archiveNote() {
    this.data.getArchiveNote().subscribe(data => {
      console.log('added successfully');
      this.archivenote = data['data']['data'];
      for (let index = 0; index < this.archiveCard.length; index++) {
        if (this.archiveCard[index].isArchived == false) {
          this.archivenote.push(this.archiveCard[index])
        }
      }
    },
      err => {
        console.log(err);
      })

  }
  delete($event) {
    let ind = this.archivenote.indexOf($event)
    this.archivenote.splice(ind, 1);
  }

}


