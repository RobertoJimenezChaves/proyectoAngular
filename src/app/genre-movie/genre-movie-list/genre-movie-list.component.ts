import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { GenreMovie } from '../genre-movie.model'


@Component({
  selector: 'genre-movie-list',
  templateUrl: './genre-movie-list.component.html',
  styleUrls: ['./genre-movie-list.component.css']
})
export class GenreMovieListComponent implements OnInit {
	@Input() genreMovie;
	@Output() removedGenre: EventEmitter<GenreMovie> = new EventEmitter<GenreMovie>();
	@Output() updatedGenre: EventEmitter<GenreMovie> = new EventEmitter<GenreMovie>();
	

  constructor() { }

  ngOnInit() {
  }

  public removeGenre(genre:GenreMovie){
    this.removedGenre.emit(genre);
  }

  public editGenre(genre:GenreMovie){
  	this.updatedGenre.emit(genre);
  }

}
