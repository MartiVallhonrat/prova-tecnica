import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AddFavouritesSnackbarComponent } from './home/home-snackbars/add-favourites-snackbar/add-favourites-snackbar.component';
import { DeleteFavouritesSnackbarComponent } from './favourites/favourites-snackbars/delete-favourites-snackbar/delete-favourites-snackbar.component';
import { ResumeFavouriteDialogComponent } from './favourites/favourites-dialog/resume-favourite-dialog/resume-favourite-dialog.component';
import { ResumeFavouritesSnackbarComponent } from './favourites/favourites-snackbars/resume-favourites-snackbar/resume-favourites-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouritesComponent,
    AddFavouritesSnackbarComponent,
    DeleteFavouritesSnackbarComponent,
    ResumeFavouriteDialogComponent,
    ResumeFavouritesSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
