import { Injectable } from '@angular/core';
import { MakeRequestService } from 'src/app/shared/request/make-request.service';
import { Movie } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://api.themoviedb.org/3/search/movie';
  apiKey = 'api_key=05c3c451dfb4b3b129b21ec835de3158';
  language = 'language=pt-BR';

  constructor(private serviceMakeRequest: MakeRequestService) { }

  onFindMovie(text: string) {
    return this.serviceMakeRequest.onMakeRequest(this.url + '?' + this.apiKey + '&' + this.language + '&query=' + text).then(
      response => response as Movie[]
    );
  }
}
