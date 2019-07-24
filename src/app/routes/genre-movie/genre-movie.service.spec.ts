import { TestBed } from '@angular/core/testing';

import { GenreMovieService } from './genre-movie.service';

describe('GenreMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenreMovieService = TestBed.get(GenreMovieService);
    expect(service).toBeTruthy();
  });
});
