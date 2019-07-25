import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  text: string;
  @Output() searchMoviesEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchMovies() {
    console.log(this.text);
    this.searchMoviesEvent.emit(this.text);
  }

}
