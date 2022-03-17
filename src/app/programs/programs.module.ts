import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProgramComponent } from './add-program/add-program.component';
import { DeleteProgramComponent } from './delete-program/delete-program.component';
import { ListProgramsComponent } from './list-programs/list-programs.component';
import { UpdateProgramsComponent } from './update-programs/update-programs.component';
import { ViewProgramComponent } from './view-program/view-program.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AddProgramComponent,
    DeleteProgramComponent,
    ListProgramsComponent,
    UpdateProgramsComponent,
    ViewProgramComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  providers:[
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500,verticalPosition: 'top',panelClass: ['red-snackbar']}}
  ]
})
export class ProgramsModule { }
