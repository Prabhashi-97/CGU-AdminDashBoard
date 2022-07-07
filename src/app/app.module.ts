import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { ConsultantsModule } from './consultants/consultants.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { ProgramsModule } from './programs/programs.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanySessionsModule } from './company-sessions/company-sessions.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { OverviewModule } from './overview/overview.module';
import { ImageAlbumModule } from './image-album/image-album.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import {NewsModule} from './news/news.module';
import {AboutUsModule} from './about-us/about-us.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { AngularImageViewerModule } from '@hreimer/angular-image-viewer';


// import {NewsModule} from './news/news.module';

import {MatDialogModule} from '@angular/material/dialog';



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
    AdministratorsModule,
    OverviewModule,
    CompanySessionsModule,
    NgbModule,
    ImageAlbumModule,
    NgxPaginationModule,
    RouterModule,
    NewsModule,
    AboutUsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    // AngularImageViewerModule,
    ImageAlbumModule,
    //NgxPaginationModule,

    RouterModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
