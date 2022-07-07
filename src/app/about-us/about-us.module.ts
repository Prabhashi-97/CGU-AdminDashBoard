import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAboutUsComponent } from './add-about-us/add-about-us.component';
import { ListAboutUsComponent } from './list-about-us/list-about-us.component';
import { DeleteAboutUSComponent } from './delete-about-us/delete-about-us.component';
import { UpdateAboutUSComponent } from './update-about-us/update-about-us.component';
import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
//import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ViewAboutUsComponent } from './view-about-us/view-about-us.component';



@NgModule({
  declarations: [
    AddAboutUsComponent,
    ListAboutUsComponent,
    DeleteAboutUSComponent,
    UpdateAboutUSComponent,
    ViewAboutUsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AboutUsModule { }
