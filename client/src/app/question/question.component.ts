import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoteserviceService } from '../service/noteservice.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public firstname;
  public lastname;
  data:any;
  private noteId;
  private title;
  private description;
  public editorContent: string ;
  private show;
  private question;
  private date;
  private img;
  private image;
  private qA;
  private img2;
  private image2;
  private replyShow=false;
  private qID
  private value;
  private avgRate
  private replyCount
  private rate;
  constructor(public router: Router, public activateRoute: ActivatedRoute,public note:NoteserviceService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: Params) => {
      console.log(params,"data")
      this.noteId = params['noteId'];
    });
this.getNote()
 this.firstname=localStorage.getItem('firstName')
 this.lastname=localStorage.getItem('lastName')
 this.image2=localStorage.getItem('imageUrl')
  }
  
  getNote() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.noteId = params['noteId'];
  });
  this.note.getNotesId(this.noteId).subscribe(data=>{
    console.log(data)
    this.title = data['data']['data'][0].title;
    this.description = data['data']['data'][0].description;
    this.show = data['data']['data'][0].questionAndAnswerNotes.length;
    if (this.show != 0) {
    this.question = data['data']['data'][0].questionAndAnswerNotes[0].message;
  }
   this.img = environment.profileUrl;
   this.date = data['data']['data'][0].questionAndAnswerNotes[0].modifiedDate;
   this.qA = data['data']['data'][0].questionAndAnswerNotes;

   this.image = localStorage.getItem('imageUrl');
   this.img2 = environment.profileUrl + this.image;
  })
  }
  addQuestion() {
    this.show=!this.show
    let body={
      "message":this.editorContent,
      "notesId":this.noteId
    }
    console.log(body)
    this.note.addquestion(body).subscribe(data=>{
      console.log(data)
    })
  }
  closeQAndA() {
  this.router.navigate(['/dashboard/note'])  }
  answer(id){
    this.replyShow=!this.replyShow
    this.qID=id;
    console.log(this.qID)
  }
  private replyBody = {
    "reply": ""
};
replyTo() {
  let replyRequest = {
    "message": this.editorContent,
  }
  this.note.replyQnA(this.qID, replyRequest).subscribe(data => {
    console.log(data)
    this.getNote();
  })
}
like(data) {
  let requestBody = {
    "like": true
  }
  console.log(data)
  this.note.likeQnA(data.id, requestBody).subscribe(response => {
    this.getNote();
  })
}

}
