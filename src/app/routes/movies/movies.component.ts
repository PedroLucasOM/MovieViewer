import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/core/model';
import { PopularMovieService } from '../popular-movie/popular-movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() fonte: string;
  @Input() fonteTitulo: string;
  @Input() flagAltoContraste = false;

  @Input() movies: Movie[];
  movie = new Movie();

  flagView = false;
  @Input() flagCarregando = false;
  @Input() flagSearchMovies = false;

  constructor(private servicePopularMovieService: PopularMovieService) { }

  ngOnInit() {}

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
