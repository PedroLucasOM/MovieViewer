import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  text: string;

  flagPopularGenres = true;
  flagCarregandoMovies = false;
  flagMovies = false;

  constructor() { }

  ngOnInit() {}

  onSendTextToMovies(text: string) {
    this.text = text;
    this.flagPopularGenres = false;
    this.flagMovies = true;
  }

  onReturnHome(flagReturnHome: boolean) {
    if (flagReturnHome === true) {
      this.text = '';
      this.flagMovies = false;
      this.flagPopularGenres = true;
    }
  }
}
