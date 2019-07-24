import { MoviesModule } from './movies/movies.module';
import { PopularMovieModule } from './popular-movie/popular-movie.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreMovieModule } from './genre-movie/genre-movie.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PopularMovieModule,
    GenreMovieModule,
    MoviesModule
  ],
  exports: [
    PopularMovieModule,
    GenreMovieModule,
    MoviesModule
  ]
})
export class RoutesModule { }
