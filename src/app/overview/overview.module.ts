import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
})
export class OverviewModule { }
