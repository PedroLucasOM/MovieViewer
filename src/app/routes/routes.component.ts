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
    console.log(text);
    console.log(this.text);
    this.flagPopularGenres = false;
    this.flagMovies = true;
  }
}
