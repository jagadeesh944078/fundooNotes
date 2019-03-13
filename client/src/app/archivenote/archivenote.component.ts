import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
 archivenote=[];
  constructor(private data:NoteserviceService) { }

  ngOnInit() {
    this.archiveNote();
  }
  archiveNote(){
    this.data.getArchiveNote().subscribe(data=>{
console.log('added successfully');
this.archivenote=data['data']['data']
},
err=>{
  console.log(err);
    })

    }

  }


