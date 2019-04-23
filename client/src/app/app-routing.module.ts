import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotComponent } from './forgot/forgot.component';
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
import { QuestionComponent } from './question/question.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductconfirmComponent } from './productconfirm/productconfirm.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'forgot', component: ForgotComponent },
  {path: 'resetpassword/:forgotToken', component:ResetComponent},
  {path:'product',component:ProductComponent},
  {path:'productconfirm',component:ProductconfirmComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard] ,children:[
    {path:'',pathMatch:'full',redirectTo:'note',canActivate:[AuthGuard]},

    { path:'note',component:MainNoteComponent,canActivate:[AuthGuard]},
    { path:'updatenote',component:UpdatenoteComponent,canActivate:[AuthGuard]},
    { path:'trash',component:TrashComponent,canActivate:[AuthGuard]},
    { path:'archivenote',component:ArchivenoteComponent,canActivate:[AuthGuard]},
    // { path:'lables',component:LabelsComponent,canActivate:[AuthGuard]},
    { path:'search',component:SearchComponent,canActivate:[AuthGuard]},
    {path:'image',component:ImageComponent,canActivate:[AuthGuard]},
    {path:'collaborator',component:CollaboratorComponent,canActivate:[AuthGuard]},
    {path:'remindericon',component:RemindericonComponent,canActivate:[AuthGuard]},
    {path:'note/:noteId/question',component:QuestionComponent,canActivate:[AuthGuard]},
    {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
      {path: 'labels/:labels', component: LabelsComponent}
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
