import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VacanciesModule } from './vacancies/vacancies.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    VacanciesModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
