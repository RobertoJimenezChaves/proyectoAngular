import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  public addedMovie(movie:Movie){
  	this.movieService.addMovie(movie);
  }


  public removedMovie(movie:Movie){
  	this.movieService.removeMovie(movie);
  }

  public updatedMovie(movie:Movie){
  	this.movieService.editMovie(movie);
  }
}
