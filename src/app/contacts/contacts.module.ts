import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { UpdateContactsComponent } from './update-contacts/update-contacts.component';
import { DeleteContactsComponent } from './delete-contacts/delete-contacts.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ListContactsComponent,
    AddContactsComponent,
    UpdateContactsComponent,
    DeleteContactsComponent,
    MatButtonModule
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
