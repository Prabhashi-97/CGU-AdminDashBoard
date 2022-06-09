import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ListConsultationRequestsComponent } from './list-consultation-requests/list-consultation-requests.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListConsultationRequestsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
 
  ]
})
export class ConsultationSessionsModule { }
