import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/core/model';
import { PopularMovieService } from './popular-movie.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {

  movies: Movie[];
  flagCarregando = false;
  flagPopularMovies = false;

  @ViewChild('nav', {static: false}) ds: DragScrollComponent;

  constructor(private servicePopularMovieService: PopularMovieService) { }

  ngOnInit() {
    this.onFindAll();
  }

  onFindAll() {
    this.flagCarregando = true;
    this.flagPopularMovies = false;
    this.servicePopularMovieService.onFindPopularMovies().then(
      response => {
        this.movies = response;
        console.log(this.movies);
        this.flagCarregando = false;
        this.flagPopularMovies = true;
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
