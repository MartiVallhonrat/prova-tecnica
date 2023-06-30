import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../enviroments/enviroments';
import { Movie } from '../interfaces/movies';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public favourites: Movie[] | null = []

  constructor(private http: HttpClient) { }

  searchBy(searchTitle: string, searchYear?: string) {
    debugger

    let params = new HttpParams()
    .set('t', searchTitle)
    .set('apikey', environment.apiKey);


    if (searchYear !== undefined) {
      params = params.set('y', searchYear);
    }

    return this.http.get<Movie>(environment.apiUrl, { params })
  }

  addFavourites(newMovie: Movie) {

    if(!this.favourites?.includes(newMovie)) {
      this.favourites?.push(newMovie); 
    }
  }
}
