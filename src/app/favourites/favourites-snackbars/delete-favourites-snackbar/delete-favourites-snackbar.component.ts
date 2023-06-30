import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-favourites-snackbar',
  templateUrl: './delete-favourites-snackbar.component.html',
  styleUrls: ['./delete-favourites-snackbar.component.scss']
})
export class DeleteFavouritesSnackbarComponent {

  snackBarRef = inject(MatSnackBarRef);
}
