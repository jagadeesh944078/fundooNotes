import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  HttpService} from '../service/http/http.service';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);
//   password= new FormControl('', [
//     Validators.required
//   ]);
//   model={};
//  hide=true;
// login(){
//   console.log("hello");
// console.log(this.password.value ,this.emailFormControl.value);
// }
//   matcher = new MyErrorStateMatcher()
  constructor(private service : HttpService, private router : Router) { }

  ngOnInit() {
    
  }
  /**
   * @description Hide and show password
   */
  hide = true; 

  /**
   * @description email validation 
   */
  email = new FormControl('', [Validators.required, Validators.email]); 

  /**
   * @description Password validation
   */
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
  /**
   * @description Gets mail error message
   */
  getErrorMessage() {
    return this.email.hasError('required') ?
      'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  /**
   * @description Gets password error message
   */
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? "Can't be empty" : this.password.hasError('minlength') ? 'Wrong password' : '';
  }
  
  /**
   * @description Login after validating the data and checking the database whether the user exists or not
   * @param email 
   * @param password 
   */
  secureLogin(email, password) { 
    var user = {
      "email": email,
      "password": password
    }
    console.log(user);
    this.service.postRequest('user/login',user).subscribe((data: any)  =>  {
      localStorage.setItem('firstName', data['firstName']);
      localStorage.setItem('lastName', data['lastName']);
      localStorage.setItem('email', data['email']);

      localStorage.setItem('token', data['id']);

      console.log(data);
      
      if (data != 'undefined') {
        if (data.id) {
           this.router.navigate(['dashboard']);
        } else {
          alert("Something went wrong")
        }
      }
    });
  }

/**
 * @description Navigates to registration page
 */
  registration() { 
    this.router.navigate(['registration']);
  }
  
/**
 * @description Navigates to forgot password page
 */
  forgot() {
    this.router.navigate(['forgot']);
  }
}
