import { Component, OnInit } from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';
import {  HttpService} from '../service/http/http.service';
import { Router } from '@angular/router';
import { NoteserviceService } from '../service/noteservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  maxDate = new Date();
  cards = [];
  records = {};
   constructor(private service : HttpService, private router : Router,public note:NoteserviceService) { }
  
  ngOnInit() {
    this.records = this.note.getServiceOfUser().subscribe(data => {
      for (var i = 0; i < data["data"].data.length; i++) {
        data["data"].data[i].select = false;
        this.cards.push(data["data"].data[i]);
      }
      var value = data["data"].data.name;
})
    this.getCartInformation()
  }
    hide=true;
  /**
   * @description firstName validation 
   */
  firstName = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
    /**
   * @description lastName validation 
   */
  lastName = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
    /**
   * @description email validation 
   */
  email = new FormControl('',[Validators.required,Validators.email]);
    /**
   * @description phone validation 
   */
  phone = new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(12),Validators.minLength(10)]);
    /**
   * @description password validation 
   */
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
    /**
   * @description repeatPassword validation 
   */
  repeatPassword = new FormControl('',[Validators.required,Validators.minLength(8)]);
   /**
   * @description Gets firstName error message
   */
  private cartId = localStorage.getItem('cartId')
  private prodId : any = [];
  private getService;

  firstNameErrorMessage(){
    return this.firstName.hasError('required') ? 'Enter the name':
    this.firstName.hasError('pattern') ? 'Enter a valid name':
    '';
  }
   /**
   * @description Gets lastName error message
   */
  lastNameErrorMessage(){
    return this.lastName.hasError('required') ? 'Enter the name':
    this.lastName.hasError('pattern') ? 'Enter a valid name':
    '';
  }
   /**
   * @description Gets mail error message
   */
  emailErrorMessage(){
    return this.email.hasError('required') ? 'email is required':
    this.email.hasError('email') ? 'Not a valid email':
    '';
  }
   
   /**
   * @description Gets password error message
   */
  passwordErrorMessage(){
    return this.password.hasError('required') ? 'Enter the password':
    this.password.hasError('minlength') ? 'The password should of minimum of 6 digits':
    '';
  }
   /**
   * @description Gets repeatPassword error message
   */
  repeatPasswordErrorMessage(){
    return this.repeatPassword.hasError('required') ? 'Enter the password':
    this.repeatPassword.hasError('minlength') ? 'The password should of minimum of 6 digits':
    '';
  }
  getValues ( ){
    var user = { 
      "firstName":this.firstName.value,
      "lastName":this.lastName.value,
       //"phoneNumber":this.phone.value,
      "imageUrl":"",
      "service": "advance",
      "email":this.email.value,
      "emailVerified": true,
      "createdDate": "",
      "modifiedDate": "",
      "password":this.password.value
      
    }
    console.log(user);
    if(this.password.value == this.repeatPassword.value){
      this.service.postRequest("user/userSignUp",user).subscribe(data => {
        console.log(data);
        this.router.navigate(['login']);
      },
      err => {
        console.log(err);
      })
    }
  }
  selectCards(card) {
    this.service = card.name;
    card.select = true;
    for (var i = 0; i < this.cards.length; i++) {
      if (card.name == this.cards[i].name) {
        continue;
      }
      this.cards[i].select = false;
    }
}
getCartInformation(){
  this.note.getCartDetails(this.cartId).subscribe(
    data => {
      console.log(data)
      this.prodId = data['data'].productId
      console.log(this.prodId)
      this.getService =  data['data']['product'].name ;
    },
    error => {
      console.log(error)
    }
)
}
}
  
