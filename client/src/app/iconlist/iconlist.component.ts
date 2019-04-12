import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service'
import { NoteserviceService } from '../service/noteservice.service'
import { from } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CollaboratorComponent } from '../collaborator/collaborator.component'
import { Router } from '@angular/router';

export interface dialog {
  array: any;
}
@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss']
})
export class IconlistComponent implements OnInit {
  @Output() messageEvent = new EventEmitter();
  @Output() reminderEvent = new EventEmitter();
  @Output() labelEvent = new EventEmitter();
  @Output() deletecard = new EventEmitter();
  @Output() archivedCard = new EventEmitter();
  @Output() unarchiveCard = new EventEmitter();
  @Input() card: any;
  @Input() more;
  @Input() type;
  model: any;
  flag = false;
  display = false;
  title: any;
  collab=[];
  label: string;
  public arrayData = [];
  ArrayOfLabel: []
  colorArray = [[{ 'color': '#FFFFFF', 'name': 'White' },
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


  constructor(private data: DataserviceService, private note: NoteserviceService, public dialog: MatDialog,private router:Router) { }
  //  deletedcards=[];
  ngOnInit() {
    // console.log(this.card);
    // this.getReminder();
    this.getLabel()
    this.data.currentCollaborator.subscribe(message=>{
      // console.log(message,'mess in icon');
      
      if(message.email!=""){
        this.collab.push(message);
      }
    })

  }

  colorsEdit(color, card) {
    if (card == undefined) {
      console.log('in undefined')
      console.log(color)
      this.messageEvent.emit(color);
    }
    else {
      console.log('in defined card')
      this.updateColor(color, card)
    }

  }
  updateColor(color, card) {
    console.log(card, "card12..")
    console.log(card.color = color, 'color..')
    this.note.updateColor({
      "color": color,
      'noteIdList': [this.card.id]
    }).subscribe(data => {
      console.log(data, "data from update color")
    },
      err => {
        console.log(err, "err")

      })
  }

  doArchive(card) {
    if(card!=undefined){
    console.log(card);
    const obj =
    {
      "isArchived": true,
      "noteIdList": [card.id]
    }
    console.log(obj);
    this.note.archive(obj).subscribe(data => {
      console.log(data)
      this.cardArchive(card)

    }, err => console.log(err))}
    else{
      const obj={
       "isArchived":true
      }
    }
  }
  doUnArchive(card) {
    console.log(card);
    const obj =
    {
      "isArchived": false,
      "noteIdList": [card.id]
    }
    console.log(obj);
    this.note.archive(obj).subscribe(data => {
      console.log(data)
      this.notArchive(card)
      // this.messageEvent.emit(this.archive);
    }, err => console.log(err))
  }
  deleteforever(card) {
    this.note.deleteNotes({
      "isdeleted": true,
      "noteIdList": [card.id]
    }).subscribe(data => {

      let ind = this.card.indexOf(card)
      this.card.splice(ind, 1);
    }, err => console.log(err))
  }

  deleteNote(card) {


    this.note.deleteNote({
      "isDeleted": true,
      "noteIdList": [card.id]
    }).subscribe(data => {
      console.log(data)
      this.cardDelete(card)

    }, err => console.log(err))
  }
  cardDelete(card) {
    this.deletecard.emit(card);
  }
  restore(card) {


    this.note.deleteNote({
      "isDeleted": false,
      "noteIdList": [card.id]
    }).subscribe(data => {
      console.log(data)
      this.cardDelete(card)

    }, err => console.log(err))
  }
  cardArchive(card) {
    this.archivedCard.emit(card)

  }
  notArchive(card) {
    this.unarchiveCard.emit(card)

  }
  opendialog(data) {
    if(data==undefined){
      data={
        collaborators:[]
      }
      console.log(this.collab);
      
      if(this.collab.length>0)
      data.collaborators=this.collab;
    }
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '600px',
      height: '250px',
      data: data
    });

  }
  userId=localStorage.getItem('userId')
  // id=localStorage.getItem('id')

  addLabel(label,card){
    if(card!=undefined){

    console.log(label,card.id);
    this.model={
      "id":card.id,
      "label": label.label,
      "isDeleted": false,
      "labelId": label.id,
      
    }
    console.log(this.model)

    this.note.addLabel(this.model).subscribe(data=>{
      console.log(data,"data  ")
      // this.card.ArrayOfLabel=[this.model.labelId]

      this.label='';

      // this.ArrayOfLabel.push(data);
      // this.getLabel();
    },
    err=>{
      console.log(err)
    })}
    else{
      this.model={
        // "id":card.id,
        "label": label.label,
        "isDeleted": false,
        "labelId": label.id,
        
      }
      this.labelEvent.emit(this.model);

    }
  }
  getLabel() {
  this.note.getLabel().subscribe(data => {
  // console.log(data, 'label data')
  this.ArrayOfLabel = data['data']['details']
  // console.log(this.ArrayOfLabel, 'iconlist');
  },
   err => {
        console.log(err)
   })
  }


  remind(event) {
    console.log('event in iconlist', event);
    this.reminderEvent.emit(event);
  }
  askquestion(){
  this.router.navigate(['/dashboard/note/'+ this.card.id +'/question'])}
}


// reminderService(){

// }

