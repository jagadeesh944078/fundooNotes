import { Component, OnInit ,Inject} from '@angular/core';
import {ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{dialog} from '../dashboard/dashboard.component'
import { NoteserviceService } from '../service/noteservice.service';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageEvent: any;

  constructor(public dialogRef: MatDialogRef<ImageComponent >,
    @Inject(MAT_DIALOG_DATA) public data: dialog,public note:NoteserviceService,public dataservice:DataserviceService) { }

  ngOnInit() {
  }
  
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped($event) {
    this.croppedImageEvent = $event.file;
    

      // this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // private token = localStorage.getItem('token');
setimage(){
  const uploadData=new FormData();
  uploadData.append('file',this.croppedImageEvent)
  console.log(uploadData,"imageurl")
  this.note.uploagImage(uploadData).subscribe(data=>{
    localStorage.setItem('imageUrl',data['status'].imageUrl)
    this.dialogRef.close()
    this.dataservice.changeImage(true)
console.log(data)
  })
  

}
}
