import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFavouritesSnackbarComponent } from './resume-favourites-snackbar.component';

describe('ResumeFavouritesSnackbarComponent', () => {
  let component: ResumeFavouritesSnackbarComponent;
  let fixture: ComponentFixture<ResumeFavouritesSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeFavouritesSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeFavouritesSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
