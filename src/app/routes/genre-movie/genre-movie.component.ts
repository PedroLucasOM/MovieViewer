import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { GenreMovieService } from './genre-movie.service';
import { Genre, Movie } from 'src/app/core/model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { PopularMovieService } from '../popular-movie/popular-movie.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.css']
})
export class GenreMovieComponent implements OnInit {

  @Input() fonte: string;
  @Input() fonteTitulo: string;
  @Input() flagAltoContraste = false;

  data: Genre[];
  movie: Movie = new Movie();

  closeResult: string;

  flagMoviesByGenre = false;
  @Input() flagShowComponent = true;

  @ViewChildren('nav') dragScrolls: QueryList<DragScrollComponent>;

  constructor(private serviceGenreMovie: GenreMovieService, private servicePopularMovieService: PopularMovieService,
      // tslint:disable-next-line: align
      private modalService: NgbModal) { }

  ngOnInit() {
    this.onFindMoviesByGenre();
  }

  onFindMoviesByGenre() {
    this.data = this.serviceGenreMovie.onMakeListMovieByGenre();
    this.flagMoviesByGenre = true;
  }

  onFindMovieByID(id: string, content: any) {
    this.servicePopularMovieService.onFindMovie(id).then(
      response => {
        this.movie = response;
        this.open(content);
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

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
