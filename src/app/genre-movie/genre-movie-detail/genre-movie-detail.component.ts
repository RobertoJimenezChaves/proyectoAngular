import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { GenreMovie } from '../genre-movie.model'

@Component({
  selector: 'genre-movie-detail',
  templateUrl: './genre-movie-detail.component.html',
  styleUrls: ['./genre-movie-detail.component.css']
})
export class GenreMovieDetailComponent implements OnInit {
	@Output() addedGenre: EventEmitter<GenreMovie> = new EventEmitter<GenreMovie>();
	public genreName: string = "";
	public genreDescription: string = "";

  constructor() { }

  	ngOnInit() {}

  public addGenre(){
	let genre = new GenreMovie();
	genre.name = this.genreName;
	genre.description = this.genreDescription;

	this.addedGenre.emit(genre);
	this.genreName = '';
	this.genreDescription = '';
  }

}
