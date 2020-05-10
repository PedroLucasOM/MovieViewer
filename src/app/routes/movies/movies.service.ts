import {Injectable} from '@angular/core';
import {MakeRequestService} from 'src/app/shared/request/make-request.service';
import {Movie} from 'src/app/core/model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = `${environment.url}/search/movie`;
  apiKey = environment.apiKey;
  language = environment.language;

  constructor(private serviceMakeRequest: MakeRequestService) {
  }

  onFindMovie(text: string) {
    return this.serviceMakeRequest.onMakeRequest(this.url + '?' + this.apiKey + '&' + this.language + '&query=' + text).then(
      response => response.results as Movie[]
    );
  }
}
