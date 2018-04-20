import { Injectable } from '@angular/core';
import { GenreMovie } from './genre-movie.model'

@Injectable()
export class GenreMovieService {

public genreMovieList: GenreMovie[] = [
	{
		id : 1,
		name : 'Drama',
		description : 'Se centran principalmente en el desarrollo de un conflicto entre los protagonistas.',
		edit: false
	},{
		id : 2,
		name : 'Comedia',
		description : 'Realizadas con la intención de provocar humor.',
		edit: false
	},{
		id : 3,
		name : 'Acción',
		description : 'Implica una interacción moral entre el «bien» y el «mal» llevada a su fin por la violencia.',
		edit: false
	}

];

  constructor() { }

  public getGenreMovieList(){
		return this.genreMovieList;
  }

  public addGenreMovie(newGenreMovie:GenreMovie){
  		newGenreMovie.id = this.genreMovieList.length +1;
  		newGenreMovie.edit = false;
  		console.log("newGenreMovie.id: "+newGenreMovie.id);
		this.genreMovieList.push(newGenreMovie);
  }

  public removeGenreMovie(genreMovie:GenreMovie){
		this.genreMovieList = this.genreMovieList.filter(item => item !== genreMovie);
  }

  public editGenreMovie(genreMovie:GenreMovie){
  		genreMovie.edit = false;
  }

}
