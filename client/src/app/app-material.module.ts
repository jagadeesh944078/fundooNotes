import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatSidenavModule,MatTabsModule,MatProgressBarModule,MatSnackBarModule,MatChipsModule,MatNativeDateModule,MatDividerModule,MatListModule,MatTooltipModule,MatDatepickerModule,MatDialogModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSnackBarModule,MatProgressBarModule,MatTabsModule,MatChipsModule,MatTooltipModule,MatNativeDateModule,FormsModule,MatListModule, MatDividerModule,MatDatepickerModule,MatDialogModule,ReactiveFormsModule,
   MatFormFieldModule,MatSidenavModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule
  ],
  exports:[FormsModule,MatSnackBarModule,MatProgressBarModule,MatTabsModule,MatChipsModule,MatDividerModule,MatNativeDateModule,MatListModule,MatTooltipModule,MatDatepickerModule, MatDialogModule,ReactiveFormsModule,
    MatFormFieldModule,MatSidenavModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
   ]
})
export class AppMaterialModule { }
