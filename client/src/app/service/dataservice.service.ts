import { Injectable } from '@angular/core';
import { BehaviorSubject ,Subject} from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource = new BehaviorSubject('');
  currentMessage=this.messageSource.asObservable();

  private addNoteid = new BehaviorSubject('');
  currentnoteId=this.addNoteid.asObservable();

  private messageSourceList = new BehaviorSubject(false);
  currentMessageList = this.messageSourceList.asObservable();
  
  private changephoto = new BehaviorSubject(false);
  currentPhoto = this.changephoto.asObservable();

  private addlabel = new BehaviorSubject(true);
  currentlabel = this.addlabel.asObservable();

  private addReminder=new BehaviorSubject({'reminder':new Date});
  currentReminder=this.addReminder.asObservable();


  private removeCollaborator=new BehaviorSubject({type:''});
  currentRemoveCollaborator=this.removeCollaborator.asObservable();

 
  private addcollaborator=new BehaviorSubject({
    "firstName":'',
    "lastName":'',
    "userId":'',
    "email":'',
    "type":''
  });
  currentCollaborator=this.addcollaborator.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeAppearance(message:boolean){
  console.log(message,"in data source")
  this.messageSourceList.next(message);
  }
  changeImage(message:boolean){
  console.log(message,"imagedata")
  this.changephoto.next(message); 
  }
 changeReminder(message:any){
   console.log(message);
   
   this.addReminder.next(message)
 }
 changeCollaborator(message:any){
   console.log(message);
   this.addcollaborator.next(message)
 }
 removeCollaboratorMethod(message:any){
   this.removeCollaborator.next(message);
 }
 changeNoteId(message:any){
  console.log(message,"noteid");
  this.addNoteid.next(message)
}
}
