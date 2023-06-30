import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies';
import { DeleteFavouritesSnackbarComponent } from './favourites-snackbars/delete-favourites-snackbar/delete-favourites-snackbar.component';
import { ResumeFavouriteDialogComponent } from './favourites-dialog/resume-favourite-dialog/resume-favourite-dialog.component';
import { ResumeFavouritesSnackbarComponent } from './favourites-snackbars/resume-favourites-snackbar/resume-favourites-snackbar.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{

  favourites: Movie[] | null = null;

  constructor(
    private movieService: MoviesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.favourites = this.movieService.favourites;
  }

  delete(movie: Movie) {

    if (this.favourites) {
      this.favourites.splice((this.favourites.indexOf(movie)), 1); ;
      this.snackBar.openFromComponent(DeleteFavouritesSnackbarComponent, {duration: 2000, panelClass: "delete-snackbar"});
    }
  }

  openDialogMessage(editMovie: Movie): void {
    this.dialog
      .open(ResumeFavouriteDialogComponent, {width: "500px", data: { index: this.favourites?.findIndex((movie) => movie == editMovie)}})
      .afterClosed()
      .subscribe((confirmation: Boolean) => {
        if (confirmation) {
          this.snackBar.openFromComponent(ResumeFavouritesSnackbarComponent, {duration: 2000, panelClass: "success-snackbar",});
          this.favourites = this.movieService.favourites;
        };
      });
  }
}
