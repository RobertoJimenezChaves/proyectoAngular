import { Component, OnInit, Output, EventEmitter, Input , OnChanges} from '@angular/core';
import { GenreMovie } from '../genre-movie.model'

@Component({
  selector: 'genre-movie-detail',
  templateUrl: './genre-movie-detail.component.html',
  styleUrls: ['./genre-movie-detail.component.css']
})
export class GenreMovieDetailComponent implements OnInit, OnChanges {
	@Output() addedGenre: EventEmitter<any> = new EventEmitter<any>();
	@Output() updatedGenre: EventEmitter<any> = new EventEmitter<any>();
	@Input('selectedGenre') genre : GenreMovie = new GenreMovie();
	submitted = false;
	isEditing = false;

  constructor() { }

  	ngOnInit() {

  	}

  addGenre(genreForm){

	if(this.isEditing){
		this.updatedGenre.emit({
			'genre':this.genre,
			'form':genreForm
		});

		this.isEditing = false;
		this.newGenrePosUpdate();
		genreForm.reset();

	} else {
		this.addedGenre.emit({
			'genre':this.genre,
			'form':genreForm
		});
	}
	this.submitted = true; 

  }


  ngOnChanges(changes){
		if(changes.genre && changes.genre.currentValue._id){
			this.isEditing = true;
		}
  }

  newGenre(){
		this.submitted = false; 
		this.isEditing = false;
		this.genre = new GenreMovie();
  }

  newGenrePosUpdate(){
		this.genre = new GenreMovie();
  }

}
