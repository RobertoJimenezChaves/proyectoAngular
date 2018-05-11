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
  public selectedGenre : GenreMovie = new GenreMovie;
  public genres : GenreMovie[];

  constructor(private genreMovieService:GenreMovieService, 
  private movieService:MovieService) { }

  ngOnInit() {
    this.getGenres();
  }

  public getGenres(){
    this.genreMovieService.getGenreMovieList().subscribe((data) => {
        this.genres = data.genre;
      },(error)=>{
        console.log('error',error);
      });
  }

  public addedGenre(genre:any){

    this.genreMovieService.addGenreMovie(genre.genre)
          .then(data => {
            
            genre.form.reset();
            this.getGenres();
          })
          .catch(error => {
            console.log('error',error);
          });

  }


  public removedGenre(genre:GenreMovie){
    this.genreMovieService.removeGenreMovie(genre)
          .then(data => {
            
            this.getGenres();
          })
          .catch(error => {
            console.log('error',error);
          });
  }

  public selectGenre(genre:GenreMovie){
    this.selectedGenre = Object.assign({}, genre);
  }

  public updatedGenre(genre:any){
  	this.genreMovieService.editGenreMovie(genre.genre)
          .then(data => {
            
            this.getGenres();
          })
          .catch(error => {
            console.log('error',error);
          });
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
