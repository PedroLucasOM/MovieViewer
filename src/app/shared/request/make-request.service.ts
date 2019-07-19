import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeRequestService {

  constructor(private http: HttpClient) { }

  onMakeRequest(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }
}
