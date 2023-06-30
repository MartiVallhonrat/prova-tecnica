import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddFavouritesSnackbarComponent } from './home-snackbars/add-favourites-snackbar/add-favourites-snackbar.component';
import { Movie } from '../interfaces/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchTerm?: string;
  searchYear?: string;
  results?: Movie;
  error?: string;
  favourites: Movie[] | null = null;

  constructor
  (
    private moviesService: MoviesService,
    private snackBar: MatSnackBar
  ) 
  { }

  addFavourites(newMovie: Movie) {

    this.moviesService.addFavourites(newMovie);
    this.snackBar.openFromComponent(AddFavouritesSnackbarComponent, {duration: 2000, panelClass: "success-snackbar"});
  }

  search() {

    this.error = undefined;
    this.results = undefined;

    if (!this.searchTerm) {
      this.error = "The title field is required!"
      return;
    }

    this.moviesService.searchBy(this.searchTerm, this.searchYear)
      .subscribe(
        data => {
          if (data.Response == "True") {
            this.results = data;
          }
          if (data.Response == "False") {
            this.error = data.Error;
          }
          
        },
        error => {
          console.log(error);
        }
      );
  }
}

