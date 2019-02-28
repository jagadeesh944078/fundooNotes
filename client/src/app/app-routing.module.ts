import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotComponent } from './forgot/forgot.component';
//import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNoteComponent } from './add-note/add-note.component';
import{ NoteBarComponent} from './note-bar/note-bar.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'forgot', component: ForgotComponent },
  { path:'dashboard',component:DashboardComponent,children:[
    { path:'',component:AddNoteComponent},
    { path:'addNote',component:AddNoteComponent,children:[
      { path:'', component: NoteBarComponent}]
    }]}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
