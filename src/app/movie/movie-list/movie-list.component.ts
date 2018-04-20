import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GenreMovie } from '../../genre-movie/genre-movie.model'
import { Movie } from '../movie.model'
import { GenreMovieService } from '../../genre-movie/genre-movie.service';


@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	@Input() movie;
	@Output() removedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
	@Output() updatedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
	

  constructor(private genreMovieService:GenreMovieService) { }

  ngOnInit() {
  }

  public removeMovie(movie:Movie){
  	this.removedMovie.emit(movie);
  }

  public editMovie(movie:Movie){
  	this.updatedMovie.emit(movie);
  }

}
