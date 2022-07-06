import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ListConsultationRequestsComponent } from './list-consultation-requests/list-consultation-requests.component';
import { MatButtonModule } from '@angular/material/button';
import { EmailComponent } from './email/email.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { DeleteSessionComponent } from './delete-session/delete-session.component';

@NgModule({
  declarations: [
    ListConsultationRequestsComponent,
    EmailComponent,
    DeleteSessionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    
  ]
})
export class ConsultationSessionsModule { }
