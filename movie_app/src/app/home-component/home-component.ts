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



  movies: Movie[] = [{
    title: 'Kanthara',
    description: 'Its a great movie.',
    releaseDate: '2 Oct 2025',
    genres: 'Historical',
    rating: 9,
    languages: 'Kannada',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-ODMxLjJLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00377351-zxuctprpjm-portrait.jpg'
  }, {
    title: 'They call him OG',
    description: 'Its a great movie.',
    releaseDate: '28 Sep 2025',
    genres: 'Action',
    rating: 8,
    languages: 'Telugu',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTYwLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00369074-asrgqvfrbx-portrait.jpg'
  }, {
    title: 'Sunny Sanskari Ki Tulsi Kumari',
    description: 'Its a great movie.',
    releaseDate: '2 Oct 2025',
    genres: 'Family',
    rating: 8,
    languages: 'Hindi',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTEuNEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00388406-rllzkffbmh-portrait.jpg'
  }, {
    title: 'Idli Kadai',
    description: 'Its a great movie.',
    releaseDate: '1 Oct 2025',
    genres: 'Family',
    rating: 8,
    languages: 'Tamil',
    duration: '02:02',
    director: 'Rishab Shetty',
    cast: ['Rishab Shetty'],
    status: 'Released',
    poster: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTEyLjZLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418958-ftmrvrcnge-portrait.jpg'
  }];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.setMovies(this.movies);
  }

  goToDetails(index: number) {
    this.router.navigate(['/movies', index+1]);
  }


}
