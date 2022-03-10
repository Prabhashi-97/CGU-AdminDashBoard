import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { AlbumDeleteComponent } from './album-delete/album-delete.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumListViewComponent } from './album-list-view/album-list-view.component';
import { AlbumComponent } from './album/album.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AlbumAddComponent,
    AlbumViewComponent,
    AlbumDeleteComponent,
    AlbumEditComponent,
    AlbumListViewComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ImageAlbumModule {}
