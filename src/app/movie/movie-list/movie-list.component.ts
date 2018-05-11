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
  @Input() genres;
	@Output() removedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
	@Output() selectMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
	

  constructor() { }

  ngOnInit() {
  }

  public removeMovie(movie:Movie){
  	this.removedMovie.emit(movie);
  }

  public editMovie(movie:Movie){
  	this.selectMovie.emit(movie);
  }

  public getNameGenre(idGenre:string){
    let exist = "";
      this.genres.forEach(function (value) {
        if(value._id == idGenre){
          exist = value.name;
        }
    });
    return exist;
  }

}
