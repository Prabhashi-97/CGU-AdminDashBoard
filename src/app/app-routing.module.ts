import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteVacanciesComponent } from './vacancies/delete-vacancies/delete-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { AcceptVacanciesComponent } from './vacancies/accept-vacancies/accept-vacancies.component';

const routes: Routes = [
  
 {path: 'vacancies',
      children: [
        {path: '', component: ListVacanciesComponent},
        {path: 'list', component: ListVacanciesComponent},
        {path: 'delete/:vacancyId', component: DeleteVacanciesComponent},
        {path: 'view/:vacancyId', component: ViewVacancyComponent},
        {path: 'accept/:vacancyId', component: AcceptVacanciesComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
