import { Injectable } from '@angular/core';
import { MakeRequestService } from 'src/app/shared/request/make-request.service';
import { Movie } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class PopularMovieService {

  url = 'https://api.themoviedb.org/3/movie';
  apiKey = 'api_key=05c3c451dfb4b3b129b21ec835de3158';
  language = 'language=pt-BR';

  constructor(private serviceMakeRequest: MakeRequestService) { }

  onFindPopularMovies() {
    return this.serviceMakeRequest.onMakeRequest(this.url + '/popular' + '?' + this.apiKey + '&' + this.language).then(
      response => response.results as Movie[]);
  }

  onFindMovie(id: string) {
    return this.serviceMakeRequest.onMakeRequest(this.url + '/' + id + '?' + this.apiKey + '&' + this.language).then(
      response => response);
  }
}