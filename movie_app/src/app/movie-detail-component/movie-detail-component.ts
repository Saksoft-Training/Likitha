import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail-component',
  imports: [CommonModule],
  templateUrl: './movie-detail-component.html',
  styleUrls: ['./movie-detail-component.scss']
})
export class MovieDetailComponent implements OnInit {
  //#region Properties
  /**
   * Movie selected on route parameter
   */
  public selectedMovie: Movie | null = null;
  //endregion

  //region Constructor
  /**
   * @param movieService - Service to retrieve the movie data
   * @param route - ActivatedRoute used to extract route parameter
   */
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  //#endregion

  //#region Lifecycle Hooks
  /**
   * @summary - Retrieves the movie ID from route and subscribes to movie data to set selected movie
   * @returns void
   */
  public ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.movies$.subscribe(movies => {
      this.selectedMovie = movies[id - 1];
    });
  }
  //#endregion
}