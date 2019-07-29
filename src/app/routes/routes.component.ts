import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies/movies.service';
import { Movie } from '../core/model';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  fonte = 100;
  fonteTitulo = 150;

  movies: Movie[];

  flagPopularGenres = true;
  flagCarregandoMovies = false;
  flagMovies = false;
  flagSearchMovies = false;

  constructor(private serviceMovie: MoviesService) { }

  ngOnInit() {}

  onFindMovies(text: string) {
    this.flagCarregandoMovies = true;
    this.serviceMovie.onFindMovie(text).then(
      response => {
        this.movies = response;
        this.flagCarregandoMovies = false;
        this.flagPopularGenres = false;
        this.flagMovies = true;
        if (this.movies.length > 0) {
          this.flagSearchMovies = true;
        }
      }
    );
  }

  onReturnHome(flagReturnHome: boolean) {
    if (flagReturnHome === true) {
      this.flagCarregandoMovies = false;
      this.flagSearchMovies = false;
      this.flagMovies = false;
      this.flagPopularGenres = true;
    }
  }

  onAumentarFonte() {
    this.fonte = this.fonte + 10;
    this.fonteTitulo = this.fonteTitulo + 10;
  }

  onDiminuirFonte() {
    this.fonte = this.fonte - 10;
    this.fonteTitulo = this.fonteTitulo - 10;
  }

  onNormalizarFonte() {
    this.fonte = 100;
    this.fonteTitulo = 150;
  }
}
