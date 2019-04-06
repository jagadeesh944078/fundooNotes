import { Injectable } from '@angular/core';
import { BehaviorSubject ,Subject} from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource = new BehaviorSubject('');
  currentMessage=this.messageSource.asObservable();
  
  private messageSourceList = new BehaviorSubject(false);
  currentMessageList = this.messageSourceList.asObservable();
  
  private changephoto = new BehaviorSubject(true);
  currentPhoto = this.changephoto.asObservable();

  private addReminder=new BehaviorSubject({'reminder':new Date});
  currentReminder=this.addReminder.asObservable();



  private addcollaborator=new BehaviorSubject({
    "firstName":'',
    "lastName":'',
    "userId":'',
    "email":''
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
}
