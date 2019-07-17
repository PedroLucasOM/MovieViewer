import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMovieComponent } from './popular-movie.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PopularMovieComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PopularMovieComponent
  ]
})
export class PopularMovieModule { }
