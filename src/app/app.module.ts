import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ConsultantsModule } from './consultants/consultants.module';




import { VacanciesModule } from './vacancies/vacancies.module';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';


import { ProgramsModule } from './programs/programs.module';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanySessionsModule} from './company-sessions/company-sessions.module';

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
    HttpClientModule,
    ConsultantsModule,
    
    MatListModule,
    NgbModule,
    
    VacanciesModule,
 
  
    MatTableModule,
    ProgramsModule,
    
    NgbModule,
    CompanySessionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
