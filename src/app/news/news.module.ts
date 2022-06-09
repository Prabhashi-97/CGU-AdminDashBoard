import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
// import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
//import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ViewNewsComponent } from './view-news/view-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';



@NgModule({
  declarations: [
    AddNewsComponent,
    ListNewsComponent,
    ViewNewsComponent,
    UpdateNewsComponent,
    DeleteNewsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
    
  ]
})
export class NewsModule { }
