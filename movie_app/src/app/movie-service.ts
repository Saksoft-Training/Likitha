import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // #region Subjects and Observables
  /**
   * Holds the list of movies as an observable stream.
   */
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  public movies$ = this.moviesSubject.asObservable();
  /**
  * Holds the currently selected movie.
  */
  private selectedMovieSubject = new BehaviorSubject<Movie | null>(null);
  public selectedMovie$ = this.selectedMovieSubject.asObservable();
  // #endregion

  // #region Movie Management Methods
  /**
   * Replaces the entire list of movies.
   * @param movies - Array of movies to set.
   * @returns void
   */
  public setMovies(movies: Movie[]): void {
    this.moviesSubject.next(movies);
  }
  /**
  * Adds a single movie to the existing movie list.
  * @param movie - The movie to add.
  * @returns void
  */
  public addMovie(movie: Movie): void {
    const current = this.moviesSubject.value;
    this.moviesSubject.next([...current, movie]);
    /**
  * Gets the current list of movies as a plain array.
  * @returns Array of current movies.
  */
  }
  public getMovies(): Movie[] {
    return this.moviesSubject.value;
  }
  /**
   * Deletes a movie at a specific index.
   * @param index - The index of the movie to remove.
   * @returns void
   */
  public deleteMovie(index: number): void {
    const current = [...this.moviesSubject.value];
    current.splice(index, 1);
    this.moviesSubject.next(current);
  }
  // #endregion

  // #region Movie Selection
  /**
   * Sets the selected movie for viewing or editing.
   * @param movie - The movie to select.
   * @returns void
   */
  public selectMovie(movie: Movie): void {
    this.selectedMovieSubject.next(movie);
  }
  // #endregion
}
