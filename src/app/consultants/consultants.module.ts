import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { DeleteConsultantComponent } from './delete-consultant/delete-consultant.component';
import { ListConsultantsComponent } from './list-consultants/list-consultants.component';
import { UpdateConsultantComponent } from './update-consultant/update-consultant.component';
import { ViewConsultantComponent } from './view-consultant/view-consultant.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AddConsultantComponent,
    DeleteConsultantComponent,
    ListConsultantsComponent,
    UpdateConsultantComponent,
    ViewConsultantComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration:2500}}
  ]
})
export class ConsultantsModule { }
