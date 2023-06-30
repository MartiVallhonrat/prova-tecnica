import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resume-favourites-snackbar',
  templateUrl: './resume-favourites-snackbar.component.html',
  styleUrls: ['./resume-favourites-snackbar.component.scss']
})
export class ResumeFavouritesSnackbarComponent {

  snackBarRef = inject(MatSnackBarRef);

}
