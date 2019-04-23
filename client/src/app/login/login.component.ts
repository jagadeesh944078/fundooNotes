import { Component, OnInit ,OnDestroy} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  HttpService} from '../service/http/http.service';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { NoteserviceService } from '../service/noteservice.service';
import { Subject } from 'rxjs';
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
export class LoginComponent implements OnInit ,OnDestroy{
  destroy$: Subject<boolean> = new Subject<boolean>();

private records;
private cards = [];
private cartId = localStorage.getItem('cartId')
private prodId: any = [];
private getService;
  constructor(private service : HttpService, private router : Router,private note:NoteserviceService) { }

  ngOnInit() {
    this.getServices()
    this.getCartInformation()
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
  account() { 
    this.router.navigate(['product']);
  }
  
/**
 * @description Navigates to forgot password page
 */
  forgot() {
    this.router.navigate(['forgot']);
  }
  getServices() {
    this.records = this.note.getServiceOfUser()
      .subscribe(data => {
        for (var i = 0; i < data["data"].data.length; i++) {
          data["data"].data[i].select = false;
          this.cards.push(data["data"].data[i]);
        }
        console.log(this.cards)
        var value = data["data"].data.name;
      })
  }

  selectCards(product) {
    console.log("selected")
    this.service = product.name;
    console.log(this.service)
    product.select = true;
    for (var i = 0; i < this.cards.length; i++) {
      if (product.name == this.cards[i].name) {
        continue;
      }
      this.cards[i].select = false;
    }
  }

  getCartInformation() {
    this.note.getCartDetails(this.cartId).subscribe(
      data => {
        console.log(data)
        this.prodId = data['data'].productId
        console.log(this.prodId)
        this.getService = data['data']['product'].name;
      },
      error => {
        console.log(error)
      }
    )
  }

  cartAdd(cart) {
    this.note.addtoCart(
      {
        "productId": cart.id
      }
    ).subscribe(
      (data) => {
        console.log("successfully added to cart", data)
        localStorage.setItem("cartId", data['data']['details'].id)
        // this.openDialog(cart);
      }, error => {
        console.log("Error ", error)
      }
    )

}
ngOnDestroy() {
  this.destroy$.next(true);
  // Now let's also unsubscribe from the subject itself:
  this.destroy$.unsubscribe();
}
}
