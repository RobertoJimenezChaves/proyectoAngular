import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { GenreMovie } from '../genre-movie/genre-movie.model';
import { GenreMovieService } from '../genre-movie/genre-movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public genres : GenreMovie[];
  public movies : Movie[];
  public selectedMovie : Movie = new Movie;

  constructor(private movieService:MovieService, private genreMovieService:GenreMovieService) { }

  ngOnInit() {
    this.getGenres();
    this.getMovies();
  }

  public getGenres(){
    this.genreMovieService.getGenreMovieList().subscribe((data) => {
        this.genres = data.genre;
      },(error)=>{
        console.log('error',error);
      });
  }

  public getMovies(){
    this.movieService.getMovieList().subscribe((data) => {
        this.movies = data.movie;
      },(error)=>{
        console.log('error',error);
      });
  }

  public addedMovie(movie:any){
  	this.movieService.addMovie(movie.movie)
          .then(data => {
      
            this.getMovies();
          })
          .catch(error => {
            console.log('error',error);
          });
  }


  public removedMovie(movie:Movie){
  	this.movieService.removeMovie(movie)
          .then(data => {
            
            this.getMovies();
          })
          .catch(error => {
            console.log('error',error);
          });
  }

  public updatedMovie(movie:any){
    this.movieService.editMovie(movie.movie)
          .then(data => {
            
            this.getMovies();
          })
          .catch(error => {
            console.log('error',error);
          });
  }

  public selectMovie(movie:Movie){
    this.selectedMovie = Object.assign({}, movie);
  }
}
