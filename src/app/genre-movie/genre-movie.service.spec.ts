import { TestBed, inject } from '@angular/core/testing';

import { GenreMovieService } from './genre-movie.service';

describe('GenreMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenreMovieService]
    });
  });

  it('should be created', inject([GenreMovieService], (service: GenreMovieService) => {
    expect(service).toBeTruthy();
  }));
});
