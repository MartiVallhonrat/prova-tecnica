import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-resume-favourite-dialog',
  templateUrl: './resume-favourite-dialog.component.html',
  styleUrls: ['./resume-favourite-dialog.component.scss']
})
export class ResumeFavouriteDialogComponent {

  constructor(
    private dialog: MatDialogRef<ResumeFavouriteDialogComponent>,
    private moviesService: MoviesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  message = new FormControl<string>("");


  closeDialog(): void {
    this.dialog.close(false);
  }
  async confirmed() {
    await this.moviesService.updateAbstract(this.message.value!, this.data.index);
    this.dialog.close(true);
  }
}
