import { Component, OnInit } from '@angular/core';
import { GenreMovieService } from './genre-movie.service';
import { GenreMovie } from './genre-movie.model';
import { MovieService } from '../movie/movie.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.css']
})
export class GenreMovieComponent implements OnInit {

  public alerts: any[] = [];

  constructor(private genreMovieService:GenreMovieService, 
  private movieService:MovieService) { }

  ngOnInit() {
  }

  public addedGenre(genre:GenreMovie){
  	this.genreMovieService.addGenreMovie(genre);
  }


  public removedGenre(genre:GenreMovie){
    if(!this.movieService.existMovieByGenre(genre.id)){
      this.genreMovieService.removeGenreMovie(genre);
    }else{
      this.noDelete();
    }
  }

  public updatedGenre(genre:GenreMovie){
  	this.genreMovieService.editGenreMovie(genre);
  }

  public noDelete(): void {
    this.alerts.push({
      type: 'danger',
      msg: 'El género no se puede eliminar debido a que está asociado a una película',
      timeout: 5000
    });
  }
 
  public onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
