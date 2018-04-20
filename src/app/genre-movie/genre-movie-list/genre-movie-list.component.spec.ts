import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMovieListComponent } from './genre-movie-list.component';

describe('GenreMovieListComponent', () => {
  let component: GenreMovieListComponent;
  let fixture: ComponentFixture<GenreMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
