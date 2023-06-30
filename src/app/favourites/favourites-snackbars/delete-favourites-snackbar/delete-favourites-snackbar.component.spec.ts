import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFavouritesSnackbarComponent } from './delete-favourites-snackbar.component';

describe('DeleteFavouritesSnackbarComponent', () => {
  let component: DeleteFavouritesSnackbarComponent;
  let fixture: ComponentFixture<DeleteFavouritesSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFavouritesSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFavouritesSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
