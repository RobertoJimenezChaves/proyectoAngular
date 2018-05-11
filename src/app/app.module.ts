import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { HomeComponent } from './home/home.component';
import { GenreMovieComponent } from './genre-movie/genre-movie.component';
import { GenreMovieListComponent } from './genre-movie/genre-movie-list/genre-movie-list.component';
import { GenreMovieDetailComponent } from './genre-movie/genre-movie-detail/genre-movie-detail.component';
import { GenreMovieService } from './genre-movie/genre-movie.service';
import { MovieService } from './movie/movie.service';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AboutComponent } from './about/about.component';

import { PopoverModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';

import { CapitalLetterValidator } from './shared/text-capital-letter.directive';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    GenreMovieComponent,
    GenreMovieListComponent,
    GenreMovieDetailComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieListComponent,
    AboutComponent,
    CapitalLetterValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [
    GenreMovieService,
    MovieService,
    DataService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
