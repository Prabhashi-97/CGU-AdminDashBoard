import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultantsModule } from './consultants/consultants.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { ProgramsModule } from './programs/programs.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanySessionsModule } from './company-sessions/company-sessions.module';
import { ImageAlbumModule } from './image-album/image-album.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import {NewsModule} from './news/news.module';

@NgModule({
  declarations: [AppComponent],
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
    CompanySessionsModule,
    NgbModule,
    ImageAlbumModule,
    NgxPaginationModule,
    RouterModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
