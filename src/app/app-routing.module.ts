import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultantComponent } from './consultants/add-consultant/add-consultant.component';
import { DeleteConsultantComponent } from './consultants/delete-consultant/delete-consultant.component';
import { ListConsultantsComponent } from './consultants/list-consultants/list-consultants.component';
import { UpdateConsultantComponent } from './consultants/update-consultant/update-consultant.component';
import { ViewConsultantComponent } from './consultants/view-consultant/view-consultant.component';



const routes: Routes = [
  
  {path:'consultants',
    children:[
      {path: '', component:ListConsultantsComponent},
      {path: 'list', component:ListConsultantsComponent},
      {path: 'view/:consultantId', component:ViewConsultantComponent},
      {path: 'delete/:consultantId', component:DeleteConsultantComponent},
      {path: 'update/:id', component:UpdateConsultantComponent},
      {path: 'add', component: AddConsultantComponent},
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
