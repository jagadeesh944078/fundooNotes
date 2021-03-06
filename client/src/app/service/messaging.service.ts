import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import * as firebase from 'firebase/app'
import { HttpService } from '../service/http/http.service'

import 'firebase/messaging';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  messaging;
  constructor(private http:HttpService) {try{
    firebase.initializeApp({
    'messagingSenderId': '263147610417'
    });
    this.messaging = firebase.messaging();
    }catch(err){
    console.error('Firebase initialization error', err.stack);
    } }
    /**
* request permission for notification from firebase cloud messaging
* 
* @param userId userId
*/
getPermission() {
  this.messaging.requestPermission()
  .then(() => {
  return this.messaging.getToken()
  })
  .then(token => {
  console.log(token,"pushtoken")
    console.log(this.http.postJSON('user/registerPushToken',token))

  })
  .catch((err) => {
  console.log('Unable to get permission to notify.', err);
  });
  }
  receiveMessage() {
  this.messaging.onMessage((payload) => {
  console.log("Message received. ", payload);
  this.currentMessage.next(payload)
  });
  }
  
  
}
