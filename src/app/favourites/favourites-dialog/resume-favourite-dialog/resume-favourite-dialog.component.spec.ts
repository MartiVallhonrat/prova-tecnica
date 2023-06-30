import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFavouriteDialogComponent } from './resume-favourite-dialog.component';

describe('ResumeFavouriteDialogComponent', () => {
  let component: ResumeFavouriteDialogComponent;
  let fixture: ComponentFixture<ResumeFavouriteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeFavouriteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeFavouriteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
