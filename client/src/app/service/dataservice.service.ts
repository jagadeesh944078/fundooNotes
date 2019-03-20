import { Injectable } from '@angular/core';
import { BehaviorSubject ,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource = new BehaviorSubject('');
  currentMessage=this.messageSource.asObservable();
  
  private messageSourceList = new BehaviorSubject(false);
  currentMessageList = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: string) {
    console.log(message, "message")
    this.messageSource.next(message)
  }
  changeAppearance(message:boolean){

    this.messageSourceList.next(message);
  }
}
