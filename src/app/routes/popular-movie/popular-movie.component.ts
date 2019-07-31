import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Movie } from 'src/app/core/model';
import { PopularMovieService } from './popular-movie.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {

  @Input() fonte: string;
  @Input() fonteTitulo: string;
  @Input() flagAltoContraste = false;

  movie: Movie = new Movie();
  movies: Movie[];

  rating: number;

  flagPopularMovies = false;
  flagView = false;
  @Input() flagShowComponent = true;

  @ViewChild('nav', {static: false}) ds: DragScrollComponent;

  constructor(private servicePopularMovieService: PopularMovieService) { }

  ngOnInit() {
    this.onFindAll();
  }

  onFindAll() {
    this.flagPopularMovies = false;
    this.servicePopularMovieService.onFindPopularMovies().then(
      response => {
        this.movies = response;
        this.flagPopularMovies = true;
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

  onMoveLeft() {
    this.ds.moveLeft();
  }

  onMoveRight() {
    this.ds.moveRight();
  }
}
