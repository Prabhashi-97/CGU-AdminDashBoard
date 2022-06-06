import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class OverviewModule { }
