import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

}
