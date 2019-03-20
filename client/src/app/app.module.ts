import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotebarComponent } from './notebar/notebar.component';
import { ArchivenoteComponent } from './archivenote/archivenote.component';
import { TrashComponent } from './trash/trash.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconlistComponent } from './iconlist/iconlist.component';
import { MainNoteComponent } from './main-note/main-note.component';
import { LabelsComponent } from './labels/labels.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './pipe/search.pipe';
import{AuthGuard} from './service/auth/auth.guard';
import { RemindersComponent } from './reminders/reminders.component'
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotComponent,
    DashboardComponent,
    AddNoteComponent,
    NotebarComponent,
    ArchivenoteComponent,
    TrashComponent,
    UpdatenoteComponent,
    IconlistComponent,
    MainNoteComponent,
    LabelsComponent,
    SearchComponent,
    SearchPipe,
    RemindersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FlexLayoutModule 
  ],
  providers: [AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
