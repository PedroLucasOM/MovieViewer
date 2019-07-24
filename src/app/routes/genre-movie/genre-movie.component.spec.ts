import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMovieComponent } from './genre-movie.component';

describe('GenreMovieComponent', () => {
  let component: GenreMovieComponent;
  let fixture: ComponentFixture<GenreMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
