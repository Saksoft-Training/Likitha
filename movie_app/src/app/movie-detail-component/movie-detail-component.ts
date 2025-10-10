import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail-component',
  imports: [CommonModule],
  templateUrl: './movie-detail-component.html',
  styleUrl: './movie-detail-component.scss'
})
export class MovieDetailComponent implements OnInit {
  /**
   * Movie selected on route parameter
   */
  public selectedMovie: Movie | null = null;

  /**
   * 
   * @param movieService - Service to retrieve the movie data
   * @param route - ActivatedRoute used to extract route parameter
   */

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  /**
   * @summary - Retrieves the movie ID from route and subscribes to movie data to set selected movie
   */


  public ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.movies$.subscribe(movies => {
      this.selectedMovie = movies[id - 1];
    });
  }

}