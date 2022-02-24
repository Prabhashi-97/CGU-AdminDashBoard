import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSessionRequestsComponent } from './list-session-requests/list-session-requests.component';
import { ViewSessionRequestComponent } from './view-session-request/view-session-request.component';
import { DeleteSessionRequestComponent } from './delete-session-request/delete-session-request.component';
import { UpdateSessionRequestComponent } from './update-session-request/update-session-request.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ListAcceptedRequestsComponent } from './list-accepted-requests/list-accepted-requests.component';



@NgModule({
  declarations: [
    ListSessionRequestsComponent,
    ViewSessionRequestComponent,
    DeleteSessionRequestComponent,
    UpdateSessionRequestComponent,
    ListAcceptedRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ]
})
export class CompanySessionsModule { }
