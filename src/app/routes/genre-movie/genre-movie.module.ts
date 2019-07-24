import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreMovieComponent } from './genre-movie.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [GenreMovieComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GenreMovieComponent]
})
export class GenreMovieModule { }
