import { PopularMovieModule } from './popular-movie/popular-movie.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopularMovieModule
  ],
  exports: [
    PopularMovieModule
  ]
})
export class RoutesModule { }
