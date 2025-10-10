import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-component',
  imports: [CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent implements OnInit {

  /**
   * Array of movie data displayed on the home page
   */

  public movies: Movie[] = [{
    title: 'Kanthara',
    description: 'Its a great movie.',
    releaseDate: '2 Oct 2025',
    genres: ['Historical'],
    rating: 9,
    languages: 'Kannada',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'assets/kantara.avif'
  }, {
    title: 'They call him OG',
    description: 'Its a great movie.',
    releaseDate: '28 Sep 2025',
    genres: ['Action'],
    rating: 8,
    languages: 'Telugu',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'assets/OG.avif'
  }, {
    title: 'Sunny Sanskari Ki Tulsi Kumari',
    description: 'Its a great movie.',
    releaseDate: '2 Oct 2025',
    genres: ['Family'],
    rating: 8,
    languages: 'Hindi',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'assets/sunny-sanskari.avif'
  }, {
    title: 'Idli Kadai',
    description: 'Its a great movie.',
    releaseDate: '1 Oct 2025',
    genres: ['Family'],
    rating: 8,
    languages: 'Tamil',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'assets/idli-kadai.avif'
  }];

/**
 * 
 * @param movieService - Service for managing movie data
 * @param router - Angular router for navigation
 */
  constructor(private movieService: MovieService, private router: Router) { }

  /**
   * Sets initial movie list to MovieService
   */
  public ngOnInit(): void {
    this.movieService.setMovies(this.movies);
  }

  /**
   * Navigates to detail page of a selected movie
   * @param index - Index of selected movie in list
   */

  public goToDetails(index: number): void {
    this.router.navigate(['/movies', index + 1]);
  }


}
