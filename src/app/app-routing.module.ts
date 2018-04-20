import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenreMovieComponent } from './genre-movie/genre-movie.component';
import { MovieComponent } from './movie/movie.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{    path: '', 
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },{
        path: 'genre-movie',
        component: GenreMovieComponent
    },{
        path: 'movie',
        component: MovieComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
