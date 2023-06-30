import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchTerm?: string;
  searchYear?: string;
  results: any;
  error?: string;

  constructor(private moviesService: MoviesService) { }

  search() {

    this.error = undefined;

    if (!this.searchTerm) {
      this.error = "The title field is required!"
      return;
    }

    this.moviesService.searchBy(this.searchTerm, this.searchYear)
      .subscribe(
        data => {
          console.log(data)
          this.results = data;
        },
        error => {
          console.log(error)
          this.error = error;
        }
      );
  }
}

