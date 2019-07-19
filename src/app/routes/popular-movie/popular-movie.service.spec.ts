import { TestBed } from '@angular/core/testing';

import { PopularMovieService } from './popular-movie.service';

describe('PopularMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularMovieService = TestBed.get(PopularMovieService);
    expect(service).toBeTruthy();
  });
});
