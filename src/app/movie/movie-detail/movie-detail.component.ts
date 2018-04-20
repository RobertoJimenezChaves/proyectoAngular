import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.model'
import { GenreMovie } from '../../genre-movie/genre-movie.model'
import { GenreMovieService } from '../../genre-movie/genre-movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Output() addedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
	public name: string = "";
	public synopsis: string = "";
	public genreId: number;
	public stock: number = 0;
	public price: number = 0;

  constructor(private genreMovieService:GenreMovieService) { }

  	ngOnInit() {

  		this.genreId = this.genreMovieService.getGenreMovieList()[0].id;

  	}



  public addMovie(){
	let movie = new Movie();
	movie.name = this.name;
	movie.synopsis = this.synopsis;
	movie.idGenre = this.genreId
	movie.stock = this.stock;
	movie.price = this.price;

	this.addedMovie.emit(movie);
	this.name = '';
	this.synopsis = '';
	this.stock = 0;
	this.price = 0;
	this.genreId = this.genreMovieService.getGenreMovieList()[0].id;
	
  }

}
