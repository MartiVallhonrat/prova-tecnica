import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavouritesSnackbarComponent } from './add-favourites-snackbar.component';

describe('AddFavouritesSnackbarComponent', () => {
  let component: AddFavouritesSnackbarComponent;
  let fixture: ComponentFixture<AddFavouritesSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavouritesSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFavouritesSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
