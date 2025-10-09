import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../movie-service';
import { AppHighlight } from '../app-highlight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-component',
  imports: [CommonModule, ReactiveFormsModule, AppHighlight],
  templateUrl: './add-movie-component.html',
  styleUrl: './add-movie-component.scss'
})
export class AddMovieComponent {

  // @Output() movieAdded = new EventEmitter<any>();
  movieForm!: FormGroup;


  constructor(private router:Router,private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      languages: ['', Validators.required],
      genres: ['', Validators.required],
      duration: ['', Validators.required],
      director: [''],
      cast: this.fb.array([]),
      poster: ['', Validators.required],
      status: ['upcoming']
    });
    this.addCastMember();
  }

  get castMembers() {
    return this.movieForm.get('cast') as FormArray;
  }

  addCastMember() {
    this.castMembers.push(new FormControl(''));
  }

  removeCastMember(index: number) {
    this.castMembers.removeAt(index);
  }


  onSubmit() {
  if (this.movieForm.valid) {
    const movieData = {
      title: this.movieForm.value.title,
      description: this.movieForm.value.description,
      releaseDate: this.movieForm.value.releaseDate,
      languages: this.movieForm.value.languages,
      genres: this.movieForm.value.genres,
      duration: this.movieForm.value.duration,
      director: this.movieForm.value.director,
      cast: this.movieForm.value.cast,
      status: this.movieForm.value.status,
      poster: this.movieForm.value.poster
    };

    console.log(movieData);
    this.movieService.addMovie(movieData);

    alert('Movie added successfully!');
    this.router.navigate(['movies']);
  } else {
    alert('Please fill all required fields.');
  }
}


  onReset() {
    this.movieForm.reset();
    this.castMembers.clear();
    this.addCastMember();
  }
}
