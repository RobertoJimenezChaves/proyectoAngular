import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMovieDetailComponent } from './genre-movie-detail.component';

describe('GenreMovieDetailComponent', () => {
  let component: GenreMovieDetailComponent;
  let fixture: ComponentFixture<GenreMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
