import {Injectable} from '@angular/core';
import {MakeRequestService} from 'src/app/shared/request/make-request.service';
import {Movie} from 'src/app/core/model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularMovieService {

  url = `${environment.url}/movie`;
  apiKey = environment.apiKey;
  language = environment.language;

  constructor(private serviceMakeRequest: MakeRequestService) {
  }

  onFindPopularMovies() {
    return this.serviceMakeRequest.onMakeRequest(this.url + '/popular' + '?' + this.apiKey + '&' + this.language).then(
      response => response.results as Movie[]);
  }

  onFindMovie(id: string) {
    return this.serviceMakeRequest.onMakeRequest(this.url + '/' + id + '?' + this.apiKey + '&' + this.language).then(
      response => response);
  }
}
