import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/core/model';
import { PopularMovieService } from '../popular-movie/popular-movie.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  closeResult: string;

  @Input() flagCarregando = false;
  @Input() flagSearchMovies = false;

  constructor(private servicePopularMovieService: PopularMovieService, private modalService: NgbModal) { }

  ngOnInit() {}

  onFindMovieByID(id: string, content: any) {
    this.servicePopularMovieService.onFindMovie(id).then(
      response => {
        this.movie = response;
        this.open(content);
      }
    );
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
