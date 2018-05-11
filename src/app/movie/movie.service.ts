import { Injectable } from '@angular/core';
import { Movie } from './movie.model'
import { DataService } from '../services/data.service';

@Injectable()
export class MovieService {

  constructor(private dataService:DataService) { }

  public getMovieList(){
		return this.dataService.get('/api/movies');
  }

  public addMovie(newMovie:Movie){
  		return this.dataService.post('/api/movies',{'movie':newMovie});
  }

  public removeMovie(movie:Movie){
		return this.dataService.delete('/api/movies/'+movie._id);
  }

  public editMovie(movie:Movie){
  		return this.dataService.put('/api/movies/'+movie._id,{'movie':movie});
  }

  public existMovieByGenre(genreId:string){
  		let exist = false;
		return exist;
  }
}
