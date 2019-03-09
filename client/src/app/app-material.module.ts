import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatSidenavModule,MatSnackBarModule,MatDividerModule,MatListModule,MatTooltipModule,MatDatepickerModule,MatDialogModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSnackBarModule,MatTooltipModule,FormsModule,MatListModule, MatDividerModule,MatDatepickerModule,MatDialogModule,ReactiveFormsModule,
   MatFormFieldModule,MatSidenavModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule
  ],
  exports:[FormsModule,MatSnackBarModule,MatDividerModule,MatListModule,MatTooltipModule,MatDatepickerModule, MatDialogModule,ReactiveFormsModule,
    MatFormFieldModule,MatSidenavModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
   ]
})
export class AppMaterialModule { }
