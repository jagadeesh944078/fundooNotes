import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 arrayCard:any[];
 Search:string;
//  destroy$: Subject<boolean> = new Subject<boolean>(); 

  constructor( private noteservice:NoteserviceService,private data:DataserviceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>{
      this.Search =message;
    })
    this.getnotes()
  }
getnotes(){

this.noteservice.getNote()
   .pipe()  
    .subscribe(data => {
        this.arrayCard = [];
        for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
         
          this.arrayCard.push(data["data"]['data'][i])
        
      }
      console.log("Search card array ",this.arrayCard)
       
      }, error => {
        console.log(error);
      })
    }

  
}


