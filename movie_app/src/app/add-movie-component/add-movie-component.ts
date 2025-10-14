import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  //#region Fields and Properties

  public genresList: string[] = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror'];
  public errorMessage: string = '';
  public movieForm!: FormGroup;

  //#endregion


  //#region Constructor

  /**
   * 
   * @param router - Angular router service for navigation
   * @param fb - FormBuilder service for building reactive forms
   * @param movieService - Service for movie-related operations
   */

  constructor(private router: Router,
    private fb: FormBuilder,
    private movieService: MovieService) { }

  //#endregion

  //#region Lifecycle hooks

  /**
   * Adds an initial cast member input field
   * Initializes the form with default values and required fields
   */

  public ngOnInit(): void {
    this.movieForm = this.fb.group({
      cast: this.fb.array([]),
      description: ['', Validators.required],
      director: [''],
      duration: ['', Validators.required],
      genres: ['', Validators.required],
      languages: ['', Validators.required],
      poster: ['', Validators.required],
      releaseDate: ['', Validators.required],
      status: ['upcoming'], title: ['', Validators.required]
    });
    this.addCastMember();
  }

  //#endregion

  //#region cast member form control

  /**
   * @returns A formArray representing the cast members
   */

  public get castMembers(): FormArray {
    return this.movieForm.get('cast') as FormArray;
  }

  /**
   * Adds new cast member input 
   */

  public addCastMember(): void {
    this.castMembers.push(new FormControl(''));
  }

  /**
   * Removes cast member input at specific index
   * @param index - Index of cast member to remove
   */

  public removeCastMember(index: number): void {
    this.castMembers.removeAt(index);
  }
  //#endregion

  //#region Form Submission

  /**
   * Handles form submission
   * Validates form and sends data to service
   * Navigate to the movie list upon success submission
   * Displays error message if validation fails
   */
  public onSubmit(): void {
    if (this.movieForm.valid) {
      const movieData = {
        cast: this.movieForm.value.cast,
        description: this.movieForm.value.description,
        director: this.movieForm.value.director,
        duration: this.movieForm.value.duration,
        genres: this.movieForm.value.genres,
        languages: this.movieForm.value.languages,
        poster: this.movieForm.value.poster,
        releaseDate: this.movieForm.value.releaseDate,
        status: this.movieForm.value.status,
        title: this.movieForm.value.title
      };

      this.movieService.addMovie(movieData);

      this.errorMessage = '';
      this.router.navigate(['movies']);
    } else {
      this.errorMessage = 'Please fill all required fields.';
    }
  }

  //#endregion

  //#region reset

  /**
   * Resets the form to initial state
   * Clears all cast members and adds one default input
   * Clears any error message
   */

  public onReset(): void {
    this.movieForm.reset();
    this.castMembers.clear();
    this.addCastMember();
    this.errorMessage = '';
  }

  //#endregion
}
