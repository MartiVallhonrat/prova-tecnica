import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-favourites-snackbar',
  templateUrl: './add-favourites-snackbar.component.html',
  styleUrls: ['./add-favourites-snackbar.component.scss']
})
export class AddFavouritesSnackbarComponent {

  snackBarRef = inject(MatSnackBarRef);
}
