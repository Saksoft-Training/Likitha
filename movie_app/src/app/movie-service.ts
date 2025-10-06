import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  private selectedMovieSubject = new BehaviorSubject<Movie | null>(null);
  selectedMovie$ = this.selectedMovieSubject.asObservable();

  setMovies(movies: Movie[]) {
    this.moviesSubject.next(movies);
  }

  addMovie(movie: Movie) {
    const current = this.moviesSubject.value;
    this.moviesSubject.next([...current, movie]);
  }
  
  getMovies(): Movie[] {
    return this.moviesSubject.value;
  }

  deleteMovie(index: number) {
    const current = [...this.moviesSubject.value];
    current.splice(index, 1);
    this.moviesSubject.next(current);
  }

  selectMovie(movie: Movie) {
    this.selectedMovieSubject.next(movie);
  }

}
