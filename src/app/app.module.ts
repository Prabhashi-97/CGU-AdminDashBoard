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
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddAboutUsComponent } from './about-us/add-about-us/add-about-us.component';
import { ListAboutUsComponent } from './about-us/list-about-us/list-about-us.component';
import { UpdateAboutUsComponent } from './about-us/update-about-us/update-about-us.component';
import { DeleteAboutUsComponent } from './about-us/delete-about-us/delete-about-us.component';


@NgModule({
  declarations: [AppComponent, AboutUsComponent, AddAboutUsComponent, ListAboutUsComponent, UpdateAboutUsComponent, DeleteAboutUsComponent],
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
    NewsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
