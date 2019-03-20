import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { DataserviceService } from '../service/dataservice.service'
import { NoteserviceService } from '../service/noteservice.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  @Output() messageEvent=new EventEmitter();
  @Output() deletecard=new EventEmitter();
  @Output() archivedCard = new EventEmitter();
  @Output() unarchiveCard = new EventEmitter();
  @Input() card: any;
  @Input() more;
  @Input() type;

  model: any;
  flag = false;
  display=false;
  title:any;


  colorArray=[[{ 'color': '#FFFFFF', 'name': 'White' },
  { 'color': '#E53935', 'name': 'Red' },
  { 'color': '#EF6C00', 'name': 'Orange' },
  { 'color': '#FFEB3B', 'name': 'Yellow' }],
  
  [{ 'color': '#B2FF59', 'name': 'green' },
  { 'color': '#69F0AE', 'name': 'teal' },
  { 'color': '#81D4FA', 'name': 'blue' },
  { 'color': '#0288D1', 'name': 'darkblue' }],
  
  [{ 'color': '#B39DDB', 'name': 'purple' },
  { 'color': '#F48FB1', 'name': 'pink' },
  { 'color': '#FFAB40', 'name': 'brown' },
  { 'color': '#E0E0E0', 'name': 'gray' }
  
  ]]

  
  constructor(private data:DataserviceService,private note:NoteserviceService) { }
//  deletedcards=[];
  ngOnInit() {
    // console.log(this.card);
    
  }

  colorsEdit(color, card) {
    if (card == undefined) {
      console.log('in undefined')
      console.log(color)
      this.messageEvent.emit(color);
    }
    else {
      console.log('in defined card')
      this.updateColor(color,card)
    }

  }
  updateColor(color,card) {
    console.log(card,"card12..")
    console.log(card.color=color,'color..') 
    this.note.updateColor({
      "color": color,
      'noteIdList': [this.card.id]
    }).subscribe(data =>{
      console.log(data, "data from update color")
    },
      err=>{
        console.log(err,"err")

      })
  }

  doArchive(card){
  console.log(card);
  const obj=
  { "isArchived":true,
  "noteIdList":[card.id]
}
console.log(obj);
  this.note.archive(obj).subscribe(data=>{
    console.log(data)
    this.cardArchive(card)
   
 },err=>console.log(err))
}
doUnArchive(card){

  console.log(card);
  const obj=
  { "isArchived":false,
  "noteIdList":[card.id]
}
console.log(obj);
  this.note.archive(obj).subscribe(data=>{
    console.log(data)
    this.notArchive(card)
    // this.messageEvent.emit(this.archive);
 },err=>console.log(err))
}
deleteforever(card){
  this.note.deleteNotes({
      "isdeleted":true,
      "noteIdList":[card.id]
  }).subscribe(data=>{
    
    let ind=this.card.indexOf(card)
    this.card.splice(ind,0);
  },err=>console.log(err))}
 
deleteNote(card){

  
  this.note.deleteNote({
    "isDeleted":true,
    "noteIdList":[card.id]
  }).subscribe(data=>{
    console.log(data)
    this.cardDelete(card)

  },err=>console.log(err))
}
cardDelete(card){
  this.deletecard.emit(card);
}
restore(card){

  
  this.note.deleteNote({
    "isDeleted":false,
    "noteIdList":[card.id]
  }).subscribe(data=>{
    console.log(data)
    this.cardDelete(card)

  },err=>console.log(err))
}
cardArchive(card){
  this.archivedCard.emit(card)

}
notArchive(card){
  this.unarchiveCard.emit(card)

}
}   
