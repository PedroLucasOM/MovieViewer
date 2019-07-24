import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { GenreMovieService } from './genre-movie.service';
import { Genre, Movie } from 'src/app/core/model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { PopularMovieService } from '../popular-movie/popular-movie.service';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.css']
})
export class GenreMovieComponent implements OnInit {

  data: Genre[];
  movie: Movie = new Movie();
  flagMoviesByGenre = false;
  flagView = false;

  @ViewChildren('nav') dragScrolls: QueryList<DragScrollComponent>;

  constructor(private serviceGenreMovie: GenreMovieService, private servicePopularMovieService: PopularMovieService) { }

  ngOnInit() {
    this.onFindMoviesByGenre();
  }

  onFindMoviesByGenre() {
    this.data = this.serviceGenreMovie.onMakeListMovieByGenre();
    this.flagMoviesByGenre = true;
  }

  onFindMovieByID(id: string) {
    this.flagView = false;
    this.servicePopularMovieService.onFindMovie(id).then(
      response => {
        this.movie = response;
        console.log(this.movie);
        this.flagView = true;
      }
    );
  }

  // tslint:disable: no-string-literal
  onMoveLeft(object: Genre) {
    this.dragScrolls.toArray();
    const index = this.data.indexOf(object);
    this.dragScrolls['_results'][index].moveLeft();
  }

  onMoveRight(object: Genre) {
    const index = this.data.indexOf(object);
    this.dragScrolls.toArray();
    this.dragScrolls['_results'][index].moveRight();
  }
}
