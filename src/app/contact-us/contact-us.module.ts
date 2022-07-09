import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactUsComponent } from './add-contact-us/add-contact-us.component';
import { ListContactUsComponent } from './list-contact-us/list-contact-us.component';
import { ViewContactUsComponent } from './view-contact-us/view-contact-us.component';
import { UpdateContactUsComponent } from './update-contact-us/update-contact-us.component';
import { DeleteContactUsComponent } from './delete-contact-us/delete-contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AddContactUsComponent,
    ListContactUsComponent,
    ViewContactUsComponent,
    UpdateContactUsComponent,
    DeleteContactUsComponent
    
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
export class ContactUsModule { }
