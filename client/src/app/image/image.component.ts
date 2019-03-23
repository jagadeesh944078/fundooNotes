import { Component, OnInit ,Inject} from '@angular/core';
import {ImageCroppedEvent } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{dialog} from '../dashboard/dashboard.component'
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
    @Inject(MAT_DIALOG_DATA) public data: dialog) { }

  ngOnInit() {
  }
  
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageEvent = event;

      this.croppedImage = event.base64;
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

}
