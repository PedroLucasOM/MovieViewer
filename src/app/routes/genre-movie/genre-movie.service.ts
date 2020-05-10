// tslint:disable: prefer-for-of
import {Injectable} from '@angular/core';
import {MakeRequestService} from 'src/app/shared/request/make-request.service';
import {Genre, Movie} from 'src/app/core/model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreMovieService {

  url = environment.url;
  apiKey = environment.apiKey;
  language = environment.language;

  genres: Genre[] = [];
  data: Genre[] = [];
  valid: Movie[] = [];

  constructor(private serviceMakeRequest: MakeRequestService) {
  }

  onMakeListMovieByGenre() {
    this.onFindGenres()
      .then(response => {
        this.genres = this.genres.concat(response);
        this.onMakeList(this.genres);
      });
    return this.data;
  }

  onMakeList(genres: Genre[]) {
    for (let genre of genres) {
      genre = genre as Genre;
      this.onFindMovieByGenre(genre.id).then(
        response => {
          response = this.onValidList(response as Movie[]);
          genre.movies = response as Movie[];
          this.data.push(genre);
        }
      );
    }
  }

  onValidList(data: Movie[]) {
    this.valid = this.valid.concat(data);
    return data;
  }

  onFindMovieByGenre(genreId: number) {
    return this.serviceMakeRequest.onMakeRequest
      (this.url + '/discover/movie?' + this.apiKey + '&' + this.language + '&with_genres=' + genreId)
        .then(response => response.results);
  }

  onFindGenres() {
    return this.serviceMakeRequest.onMakeRequest(this.url + '/genre/movie/list?' + this.apiKey + '&' + this.language)
      .then(response => response.genres);
  }
}
