import { Injectable } from '@angular/core';
import { GenreMovie } from './genre-movie.model';
import { DataService } from '../services/data.service';

@Injectable()
export class GenreMovieService {

  constructor(private dataService:DataService) { }

  public getGenreMovieList(){
		return this.dataService.get('/api/genres');
  }

  public addGenreMovie(newGenreMovie:GenreMovie){
		return this.dataService.post('/api/genres',{'genre':newGenreMovie});
  }

  public removeGenreMovie(genreMovie:GenreMovie){
		return this.dataService.delete('/api/genres/'+genreMovie._id);
  }

  public editGenreMovie(genreMovie:GenreMovie){
    return this.dataService.put('/api/genres/'+genreMovie._id,{'genre':genreMovie});
  }

}
