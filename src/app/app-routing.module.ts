import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultantComponent } from './consultants/add-consultant/add-consultant.component';
import { DeleteConsultantComponent } from './consultants/delete-consultant/delete-consultant.component';
import { ListConsultantsComponent } from './consultants/list-consultants/list-consultants.component';
import { UpdateConsultantComponent } from './consultants/update-consultant/update-consultant.component';
import { ViewConsultantComponent } from './consultants/view-consultant/view-consultant.component';
import { DeleteVacanciesComponent } from './vacancies/delete-vacancies/delete-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
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
import { AlbumListViewComponent } from './image-album/album-list-view/album-list-view.component';
import { AlbumAddComponent } from './image-album/album-add/album-add.component';
import { AlbumViewComponent } from './image-album/album-view/album-view.component';
import { AlbumEditComponent } from './image-album/album-edit/album-edit.component';
import { AlbumDeleteComponent } from './image-album/album-delete/album-delete.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { ListNewsComponent} from './news/list-news/list-news.component';

const routes: Routes = [
  {
    path: 'programs',
    children: [
      { path: '', component: ListProgramsComponent },
      { path: 'list', component: ListProgramsComponent },
      { path: 'delete/:programId', component: DeleteProgramComponent },
      { path: 'edit/:programId', component: UpdateProgramsComponent },
      { path: 'view/:programId', component: ViewProgramComponent },
      { path: 'create', component: AddProgramComponent },
    ],
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
  },

  {
    path: 'vacancies',
    children: [
      { path: '', component: ListVacanciesComponent },
      { path: 'list', component: ListVacanciesComponent },
      { path: 'delete/:vacancyId', component: DeleteVacanciesComponent },
      { path: 'view/:vacancyId', component: ViewVacancyComponent },
      { path: 'accept/:vacancyId', component: AcceptVacanciesComponent },
    ],
  },
  {
    path: 'consultants',
    children: [
      // {path: '', component:ListConsultantsComponent},
      { path: 'list', component: ListConsultantsComponent },
      { path: 'view/:consultantId', component: ViewConsultantComponent },
      { path: 'delete/:consultantId', component: DeleteConsultantComponent },
      { path: 'update/:id', component: UpdateConsultantComponent },
      { path: 'add', component: AddConsultantComponent },
    ],
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
  },

  {path: 'news',
    children:[
      {path: '', component: ListNewsComponent},
      {path: 'list', component: ListNewsComponent},
      // {path: 'delete/:newsId', component:DeleteNewsComponent},
      // {path: 'edit/:newsId', component: EditNewsComponent},
      // {path: 'view/:newsId', component: ViewNewsComponent},
      {path: 'create', component: AddNewsComponent},
    
],
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
