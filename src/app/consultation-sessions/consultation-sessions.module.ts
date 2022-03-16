import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ListConsultationRequestsComponent } from './list-consultation-requests/list-consultation-requests.component';




@NgModule({
  declarations: [
    ListConsultationRequestsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
 
  ]
})
export class ConsultationSessionsModule { }
