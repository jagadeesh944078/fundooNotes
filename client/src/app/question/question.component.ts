import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoteserviceService } from '../service/noteservice.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  // @ViewChild('replyArea') private answerReply: ElementRef;
  // @ViewChild('quesReplyArea') private quesReply: ElementRef;
  private noteId;
  private title;
  private description;
  private question;
  private show;
  private body = {
    "question": ""
  }
  public owner;
  private img;
  private date;
  private fName;
  private lName;
  private qA;
  private replyShow = false;
  private image;
  private img2;
  private open = true;
  private down = true;
  private rID;
  private replyCount;
  private value;
  private avgRate;
  private qID;
  private rate;
  private firstname;
  private lastname;
  private image2
public editorContent: string ;
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
    this.show = !this.show;
    let requestBody = {
      "message": this.editorContent,
      "notesId": this.noteId
    }
    this.note.addquestion(requestBody).subscribe(result => {
      this.getNote();
    })
  }
  /**
   *   @description : Api call for closing QandA
   **/
  closeQAndA() {
    this.router.navigate(['/dashboard'])
  }
  /**
   *   @description : Api call for like
   **/
  like(data) {
    let requestBody = {
      "like": true
    }
    this.note.likeQnA(data.id, requestBody).subscribe(response => {
      this.getNote();
    })
  }
  private rateBody = {
    "rate": ""
  }
  /**
   *   @description : Api call for rating
   **/
  rating(data, event) {

    let reqBody = {
      "rate": event
    }
    this.note.ratingQnA(data.id, reqBody).subscribe(result => {
      this.getNote();
    })
  }

  /**
   *   @description : Api call for Answer
   **/
  answer(id) {
    this.replyShow = !this.replyShow;
    this.qID = id;

  }
  private replyBody = {
    "reply": ""
  };
  replyTo() {
    let replyRequest = {
      "message": this.editorContent,
    }
    this.note.replyQnA(this.qID, replyRequest).subscribe(response => {
      this.getNote();
    })
  }
  
  checkRating(rateArray) {
    this.rate = 0;
    if (rateArray.length == 0) {
      return true;
    }
    for (let i = 0; i < rateArray.length; i++) {
      if (rateArray[i].userId == localStorage.getItem('userId')) {
        this.rate = rateArray[i].rate;
      }
    }
    return true;
  }

  averageRating(rateArray) {
    this.value = 0;
    if (rateArray.length != 0) {
      for (let i = 0; i < rateArray.length; i++) {
        this.value += rateArray[i].rate
      }
      this.avgRate = this.value / rateArray.length;
      return this.avgRate.toFixed(1);
    }
  }

  replyDown(replyId) {
    this.down = !this.down;
    this.rID = replyId;
  }
  viewReplies(questAns) {
    this.replyCount = 0;
    for (let i = 0; i < this.qA.length; i++) {
      if (questAns.id == this.qA[i].parentId) {
        this.replyCount++
      }
    }
    return this.replyCount;
  }
  
  
}