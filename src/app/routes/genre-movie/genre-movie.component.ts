import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { GenreMovieService } from './genre-movie.service';
import { Genre } from 'src/app/core/model';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.css']
})
export class GenreMovieComponent implements OnInit {

  data: Genre[];
  flagMoviesByGenre = false;

  @ViewChildren('nav') dragScrolls: QueryList<DragScrollComponent>;

  constructor(private serviceGenreMovie: GenreMovieService) { }

  ngOnInit() {
    this.onFindMoviesByGenre();
  }

  onFindMoviesByGenre() {
    this.data = this.serviceGenreMovie.onMakeListMovieByGenre();
    this.flagMoviesByGenre = true;
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
