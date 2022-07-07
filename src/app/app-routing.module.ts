import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultantComponent } from './consultants/add-consultant/add-consultant.component';
import { DeleteConsultantComponent } from './consultants/delete-consultant/delete-consultant.component';
import { ListConsultantsComponent } from './consultants/list-consultants/list-consultants.component';
import { UpdateConsultantComponent } from './consultants/update-consultant/update-consultant.component';
import { ViewConsultantComponent } from './consultants/view-consultant/view-consultant.component';
import { DeleteVacanciesComponent } from './vacancies/delete-vacancies/delete-vacancies.component';
import { DeleteAcceptedvacanciesComponent } from './vacancies/delete-acceptedvacancies/delete-acceptedvacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { SendEmailsComponent } from './vacancies/send-emails/send-emails.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { AcceptVacanciesComponent } from './vacancies/accept-vacancies/accept-vacancies.component';
import { DeleteSessionRequestComponent } from './company-sessions/delete-session-request/delete-session-request.component';
import { ListSessionRequestsComponent } from './company-sessions/list-session-requests/list-session-requests.component';
import { UpdateSessionRequestComponent } from './company-sessions/update-session-request/update-session-request.component';
import { ViewSessionRequestComponent } from './company-sessions/view-session-request/view-session-request.component';
import { AddProgramComponent } from './programs/add-program/add-program.component';
import { DeleteProgramComponent } from './programs/delete-program/delete-program.component';
import { ListProgramsComponent } from './programs/list-programs/list-programs.component';
import { UpdateProgramsComponent } from './programs/update-programs/update-programs.component';
import { ViewProgramComponent } from './programs/view-program/view-program.component';
import { ListAcceptedRequestsComponent } from './company-sessions/list-accepted-requests/list-accepted-requests.component';
import { AddAdministratorsComponent } from './administrators/add-administrators/add-administrators.component';
import { ListAdministratorsComponent } from './administrators/list-administrators/list-administrators.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { LoginComponent } from './overview/login/login.component';
import { ListCvComponent } from './vacancies/list-cv/list-cv.component';
import { AlbumListViewComponent } from './image-album/album-list-view/album-list-view.component';
import { AlbumAddComponent } from './image-album/album-add/album-add.component';
import { AlbumViewComponent } from './image-album/album-view/album-view.component';
import { AlbumEditComponent } from './image-album/album-edit/album-edit.component';
import { AlbumDeleteComponent } from './image-album/album-delete/album-delete.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { ListNewsComponent} from './news/list-news/list-news.component';
import { DeleteNewsComponent } from './news/delete-news/delete-news.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { ListAboutUsComponent } from './about-us/list-about-us/list-about-us.component';
import { DeleteAboutUSComponent } from './about-us/delete-about-us/delete-about-us.component';
import { UpdateAboutUSComponent } from './about-us/update-about-us/update-about-us.component';
import { AddAboutUsComponent } from './about-us/add-about-us/add-about-us.component';
import { ViewAboutUsComponent } from './about-us/view-about-us/view-about-us.component';
import { AuthGuardService as AuthGuard } from '../app/services/auth-guard.service';




const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path: 'overview',
    children:[

      { path: '', component: OverviewComponent },
      {path: 'list', component: OverviewComponent},
      {path: 'login', component: LoginComponent},
    ],

    data:{permittedRoles:['Admin','MainAdmin']}


  },


  {
    path: 'company-sessions',
    children: [
      { path: '', component: ListSessionRequestsComponent },
      { path: 'list', component: ListSessionRequestsComponent },
      { path: 'delete/:sessionId', component: DeleteSessionRequestComponent },
      { path: 'edit/:sessionId', component: UpdateSessionRequestComponent },
      { path: 'view/pending/:sessionId', component: ViewSessionRequestComponent },
      { path: 'view/accepted/:sessionId', component: ListAcceptedRequestsComponent},
      
    ],
    canActivate : [AuthGuard],
    data:{permittedRoles:['Admin','MainAdmin']}

  },

{path: 'admins',
    children:[
      {path: 'list', component: ListAdministratorsComponent},
    ],
    canActivate : [AuthGuard],
    data:{permittedRoles:['Admin','MainAdmin']}
},

{path: 'admins',
    children:[
      {path: 'create', component: AddAdministratorsComponent },
    ],
    canActivate : [AuthGuard],
    data:{permittedRoles:['MainAdmin']}
},


  {path: 'programs',
    children:[
      {path: '', component: ListProgramsComponent},
      {path: 'list', component: ListProgramsComponent},
      {path: 'delete/:programId', component: DeleteProgramComponent},
      {path: 'edit/:programId', component:UpdateProgramsComponent},
      {path: 'view/:programId', component: ViewProgramComponent},
      {path: 'create', component: AddProgramComponent},
    ],
    canActivate : [AuthGuard],
    data:{permittedRoles:['Admin','MainAdmin']}

},


{path: 'vacancies',
children: [
  {path: '', component: ListVacanciesComponent},
  {path: 'list', component: ListVacanciesComponent},
  {path: 'delete/:vacancyId', component: DeleteVacanciesComponent},
  {path: 'delete/acceptedvacancies/:vacancyId', component: DeleteAcceptedvacanciesComponent},
  {path: 'view/:vacancyId', component: ViewVacancyComponent},
  {path: 'accept/:vacancyId', component: AcceptVacanciesComponent},
  {path: 'list/cv', component: ListCvComponent},
  {path: 'send/:id', component: SendEmailsComponent},
],
canActivate : [AuthGuard],
data:{permittedRoles:['Admin','MainAdmin']}
},

{path:'consultants',
    children:[
      // {path: '', component:ListConsultantsComponent},
      {path: 'list', component:ListConsultantsComponent},
      {path: 'view/:consultantId', component:ViewConsultantComponent},
      {path: 'delete/:consultantId', component:DeleteConsultantComponent},
      {path: 'update/:id', component:UpdateConsultantComponent},
      {path: 'add', component: AddConsultantComponent},
    ],
    canActivate : [AuthGuard],
    data:{permittedRoles:['Admin','MainAdmin']}
  },
  {
    path: 'image-album',
    children: [
      { path: '', component: AlbumListViewComponent },
      { path: 'list', component: AlbumListViewComponent },
      { path: 'create', component: AlbumAddComponent },
      { path: 'delete/:albumId', component: AlbumDeleteComponent },
      { path: 'edit/:albumId', component: AlbumEditComponent },
      { path: 'view/:albumId', component: AlbumViewComponent },
    ],
    canActivate : [AuthGuard],
    data:{permittedRoles:['Admin','MainAdmin']}

  },

  {path: 'news',
    children:[
      {path: '', component: ListNewsComponent},
      {path: 'list', component: ListNewsComponent},
      {path: 'delete/:newsID', component:DeleteNewsComponent},
      {path: 'edit/:newsID', component: UpdateNewsComponent},
      {path: 'view/:newsID', component: ViewNewsComponent},
      {path: 'create', component: AddNewsComponent},
    
],
  },

  {path: 'about-us',
    children:[
      {path: '', component: ListAboutUsComponent},
      {path: 'list', component: ListAboutUsComponent},
      {path: 'delete/:ID', component:DeleteAboutUSComponent},
      {path: 'edit/:ID', component: UpdateAboutUSComponent},
      {path: 'create', component: AddAboutUsComponent}, 
      {path: 'view/:ID', component: ViewAboutUsComponent},
],
  }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
