import { Component, OnInit, Output, EventEmitter, Input ,OnChanges} from '@angular/core';
import { Movie } from '../movie.model';
import { GenreMovie } from '../../genre-movie/genre-movie.model';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnChanges {

  @Output() addedMovie: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatedMovie: EventEmitter<any> = new EventEmitter<any>();
  @Input('genreList') genreList : GenreMovie[];
  @Input('selectedMovie') movie : Movie = new Movie();
	submitted = false;
	isEditing = false;

  constructor() { }

  	ngOnInit() {
		this.loadGenre();
  	}

  	loadGenre(){
  		if(this.genreList != null){
  			if(this.genreList.length > 0){
				this.movie.genreId = this.genreList[0]._id;
				console.log("this.movie.genreId: "+this.movie.genreId);
			}
		}
  	}


  	ngOnChanges(changes){
		if(changes.movie && changes.movie.currentValue._id){
			this.isEditing = true;
		}

		if(changes.genreList){
			this.loadGenre();
		}
  }


  public addMovie(movieForm){

	if(this.isEditing){
		this.updatedMovie.emit({
			'movie':this.movie,
			'form':movieForm
		});

		this.isEditing = false;
		movieForm.reset();

	} else {
		this.addedMovie.emit({
			'movie':this.movie,
			'form':movieForm
		});
		movieForm.reset();
	}
	
	this.submitted = true; 
	this.newMoviePosUpdate();
	
  }

   newMovie(){
		this.submitted = false; 
		this.isEditing = false;
		this.movie = new Movie();
		this.loadGenre();
	}

	newMoviePosUpdate(){
		console.log("newMoviePosUpdate");
		this.movie = new Movie();
		this.loadGenre();
	}

}
