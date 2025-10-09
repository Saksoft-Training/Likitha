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
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit() {
   const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.movies$.subscribe(movies => {
      this.selectedMovie = movies[id-1];
    });
  }

}