import { Injectable } from '@angular/core';
import { Movie } from './movie.model'

@Injectable()
export class MovieService {

  public movieList: Movie[] = [
	{
		id : 1,
		name : 'EL Titanic',
		synopsis : 'En 1996, el buscador de tesoros Brock Lovett y su equipo de exploración acuden al pecio del RMS Titanic, con el propósito de sumergirse hasta los restos del barco hundido',
		edit: false,
		idGenre: 1,
		stock: 10,
		price: 20
	},{
		id : 2,
		name : 'The Hangover',
		synopsis : 'Doug Billings va a casarse con Trayce. Doug realizará una despedida de soltero en Las Vegas con sus amigos Phil Wenneck, Stuart "Stu" Price, y el hermano de Tracy, Alan.',
		edit: false,
		idGenre: 2,
		stock: 7,
		price: 59
	}

];

  constructor() { }

  public getMovieList(){
		return this.movieList;
  }

  public addMovie(newMovie:Movie){
  		newMovie.id = this.movieList.length +1;
  		newMovie.edit = false;
		this.movieList.push(newMovie);
  }

  public removeMovie(movie:Movie){
		this.movieList = this.movieList.filter(item => item !== movie);
  }

  public editMovie(movie:Movie){
  		movie.edit = false;
  }

  public existMovieByGenre(genreId:Number){
  		let exist = false;
  		this.movieList.forEach(function (value) {
		    if(value.idGenre == genreId){
		    	exist = true;
		    }
		});
		return exist;
  }
}
