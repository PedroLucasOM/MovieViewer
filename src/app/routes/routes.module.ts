import { NavbarModule } from './../reusable/navbar/navbar.module';
import { MoviesModule } from './movies/movies.module';
import { PopularMovieModule } from './popular-movie/popular-movie.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreMovieModule } from './genre-movie/genre-movie.module';
import { RoutesComponent } from './routes.component';



@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    PopularMovieModule,
    GenreMovieModule,
    MoviesModule,
    NavbarModule
  ],
  exports: [
    RoutesComponent,
    PopularMovieModule,
    GenreMovieModule,
    MoviesModule
  ]
})
export class RoutesModule { }
