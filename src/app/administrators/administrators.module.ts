import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdministratorsComponent } from './add-administrators/add-administrators.component';
import { ListAdministratorsComponent } from './list-administrators/list-administrators.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AddAdministratorsComponent,
    ListAdministratorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class AdministratorsModule { }
