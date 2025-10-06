import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddMovieComponent } from '../add-movie-component/add-movie-component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie-service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { LoggerService } from '../logger-service';
import { AppHighlight } from '../app-highlight';

@Component({
  selector: 'app-movie-list-component',
  imports: [CommonModule, AppHighlight],
  templateUrl: './movie-list-component.html',
  styleUrl: './movie-list-component.scss'
})
export class MovieListComponent implements OnInit {
   movies: Movie[] = [];

   constructor(private movieService: MovieService, private router:Router, private logger:LoggerService){}

   ngOnInit() {
    this.movieService.movies$.subscribe(movies => {
      this.movies = movies;
      this.logger.log('Movie list updated', movies);
    });
    this.logger.log('MovieListComponent initialized');
  }

  onDeleteMovie(index: number) {
    const deletedMovie = this.movies[index];
    this.movieService.deleteMovie(index);
    this.logger.log('Movie deleted', deletedMovie);
  }


  onSelectMovie(movie: Movie, index: number) {
  this.router.navigate(['/movies', index]);
}
}
