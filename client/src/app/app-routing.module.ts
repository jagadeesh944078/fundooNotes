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
import { ArchivenoteComponent } from './archivenote/archivenote.component';
import { MainNoteComponent } from './main-note/main-note.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'forgot', component: ForgotComponent },

  { path:'dashboard',component:DashboardComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'note'},

    { path:'note',component:MainNoteComponent},
    { path:'updatenote',component:UpdatenoteComponent}
    ]}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
