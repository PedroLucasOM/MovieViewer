import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from 'src/app/core/model';
import { PopularMovieService } from '../popular-movie/popular-movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  movie = new Movie();

  flagView = false;
  flagCarregando = false;
  @Input() text: string;

  @Input() flagShowComponent = false;

  constructor(private serviceMovie: MoviesService, private servicePopularMovieService: PopularMovieService) { }

  ngOnInit() {
    this.onFindMovies();
  }

  onFindMovies() {
    this.flagCarregando = true;
    this.serviceMovie.onFindMovie(this.text).then(
      response => {
        this.movies = response;
        this.flagCarregando = false;
      }
    );
  }

  onFindMovieByID(id: string) {
    this.flagView = false;
    this.servicePopularMovieService.onFindMovie(id).then(
      response => {
        this.movie = response;
        this.flagView = true;
      }
    );
  }

}
