import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartId = localStorage.getItem('cartId');
  public flag2 = false;
  public flag = false;
  public flag3 = false;
  public cardObj = {};
  public emptyCart = false;
  public value = 25;
  public address;
  public addNotGiven = false;
  public firstCss = true;
  private details;
public forCss;
  constructor(private note:NoteserviceService) { }

  ngOnInit() {
    this.addNotGiven = false;
    if (localStorage.getItem("cartId") != null) {
      this.getCardDetails();
}
  }
  getCardDetails() {
    this.note.myCart()
      .subscribe((data) => {

        console.log(data['data']); 
        this.details = data['data'][0].product
        console.log(this.details)
      },
      (error) => {
        console.log(error)
      }
      );
  }


  placeOrder() {
    if (localStorage.getItem("cartId") == null) {
      console.log("cartId is not present");
      return;
    }
    if (this.address != undefined) {
      let reqBody = {
        "cartId": localStorage.getItem("cartId"),
        "address": this.address
      }
      this.note.placeOrder(reqBody)
        .subscribe((data) => {
          console.log(data);
          this.value = 100
          this.flag3 = true; this.flag = false;
          this.forCss = false

        });
    }
    else {
      console.log("enter address");
      this.addNotGiven = true

    }

}
}
