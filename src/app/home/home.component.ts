import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie.model';
import { GenreMovie } from '../genre-movie/genre-movie.model';
import { GenreMovieService } from '../genre-movie/genre-movie.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public genres : GenreMovie[];
  public movies : Movie[];
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

  public getNameGenre(idGenre:string){
    let exist = "";
      this.genres.forEach(function (value) {
        if(value._id == idGenre){
          exist = value.name;
        }
    });
    return exist;
  }

}
