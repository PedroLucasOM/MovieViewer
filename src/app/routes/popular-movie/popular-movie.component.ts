import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Movie } from 'src/app/core/model';
import { PopularMovieService } from './popular-movie.service';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {

  constructor(private servicePopularMovieService: PopularMovieService, private modalService: NgbModal) { }

  @Input() fonte: string;
  @Input() fonteTitulo: string;
  @Input() flagAltoContraste = false;

  movie: Movie = new Movie();
  movies: Movie[];

  rating: number;

  closeResult: string;

  flagPopularMovies = false;
  @Input() flagShowComponent = true;

  @ViewChild('nav', { static: false }) ds: DragScrollComponent;


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

  onFindMovieByID(id: string, content: any) {
    this.servicePopularMovieService.onFindMovie(id).then(
      response => {
        this.movie = response;
        this.open(content);
      }
    );
  }

  onMoveLeft() {
    this.ds.moveLeft();
  }

  onMoveRight() {
    this.ds.moveRight();
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
