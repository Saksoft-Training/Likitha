import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-component',
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})
export class HomeComponent implements OnInit {
  //#region Properties
  /**
   * Array of movie data displayed on the home page called from json file
   */
  public movies: Movie[] = [];
  public moviesJsonPath = 'assets/movies.json';
  //#endregion

  //#region Constructor
  /**
   * 
   * @param movieService - Service for managing movie data
   * @param router - Angular router for navigation
   */
  constructor(private movieService: MovieService, private router: Router, private http: HttpClient) { }
  //#endregion

  //#region Lifecycle Hooks
  /**
   * Sets initial movie list to MovieService
   * @returns void
   */
  public ngOnInit(): void {
    const existingMovies = this.movieService.getMovies();
    if (existingMovies && existingMovies.length > 0) {
      this.movies = existingMovies;
    } else {
      this.http.get<Movie[]>(this.moviesJsonPath).subscribe({
        next: (data) => {
          this.movies = data;
          this.movieService.setMovies(data);
        },
        error: (err) => {
          console.error('Failed to load movies:', err);
        }
      });
    }
  }
  //#endregion

  //#region Navigate
  /**
   * Navigates to detail page of a selected movie
   * @param index - Index of selected movie in list
   * @returns void
   */
  public goToDetails(index: number): void {
    this.router.navigate(['/movies', index + 1]);
  }
  //#endregion
}
