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
import { TrashComponent } from './trash/trash.component';
import { LabelsComponent } from './labels/labels.component';
import { SearchComponent } from './search/search.component';
import{AuthGuard } from './service/auth/auth.guard'
import { ImageComponent } from './image/image.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { RemindericonComponent } from './remindericon/remindericon.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'forgot', component: ForgotComponent },

  { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard] ,children:[
    {path:'',pathMatch:'full',redirectTo:'note',canActivate:[AuthGuard]},

    { path:'note',component:MainNoteComponent},
    { path:'updatenote',component:UpdatenoteComponent},
    { path:'trash',component:TrashComponent},
    { path:'archivenote',component:ArchivenoteComponent},
    { path:'lables',component:LabelsComponent},
    { path:'search',component:SearchComponent},
    {path:'image',component:ImageComponent},
    {path:'collaborator',component:CollaboratorComponent},
    {path:'remindericon',component:RemindericonComponent}
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
