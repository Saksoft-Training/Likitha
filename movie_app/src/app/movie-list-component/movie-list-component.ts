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

  /**
   * Array of movies currently available in list
   */
  movies: Movie[] = [];

  /**
   * 
   * @param movieService - Service for managing movie data
   * @param router - Angular Router used for navigation
   * @param logger - Service used for logging component activity
   */

  constructor(private movieService: MovieService, 
    private router: Router, 
    private logger: LoggerService) { }


    /**
     * @summary - Subscribes to movie list from ovieService and logs activity
     */

  public ngOnInit() {
    this.movieService.movies$.subscribe(movies => {
      this.movies = movies;
      this.logger.log('Movie list updated', movies);
    });
    this.logger.log('MovieListComponent initialized');
  }

  /**
   * @summary - updates movie list and logs deletion
   * @param index  - index of movie to be deleted
   */

  public onDeleteMovie(index: number): void {
    const deletedMovie = this.movies[index];
    this.movieService.deleteMovie(index);
    this.logger.log('Movie deleted', deletedMovie);
  }

  /**
   * @summary - Navigate to movie details page
   * @param movie - selected movie object
   * @param index - index of selected movie
   */


  public onSelectMovie(movie: Movie, index: number): void {
    this.router.navigate(['movies', index + 1]);
  }
}
