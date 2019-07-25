import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from 'src/app/core/model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  flagCarregando = false;
  @Input() text: string;

  @Input() flagShowComponent = false;

  constructor(private serviceMovie: MoviesService) { }

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

}
