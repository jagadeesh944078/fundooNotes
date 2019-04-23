import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../service/noteservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{ ProductconfirmComponent} from '../productconfirm/productconfirm.component'
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private clicked = false;
  private records;
  private cards=[];
private service;
  constructor(public note:NoteserviceService,public dialog: MatDialog,public router:Router) { }

  ngOnInit() {
    this.getServices()
  }
  openDialog(product): void {
    const dialogRef = this.dialog.open(ProductconfirmComponent, {
      width: '600px',
      height: '300px',
      data:product
    });

  
  }



  click() {
    this.clicked = true;
  }

  unClick() {
    this.clicked = false;
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
    this.service=product.name
    product.select=true;
    for(var i=0;i<this.cards.length;i++){
      if(product.name==this.cards[i].name){
      continue}
      this.cards[i].select=false
    }
  }
  cartAdd(cart) {
    console.log(cart.id)
    this.note.addtoCart(
      {
        "productId": cart.id
      }
      
    ).subscribe(
      (data) => {
        console.log("successfully added to cart", data)
        localStorage.setItem("cartId",data['data']['details'].id)
      }, error => {
        console.log("Error ", error)
      }
    )
}
login(){
  this.router.navigate(['login'])
}
}
