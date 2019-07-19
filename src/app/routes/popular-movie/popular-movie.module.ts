import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularMovieComponent } from './popular-movie.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopularMovieService } from './popular-movie.service';



@NgModule({
  declarations: [PopularMovieComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PopularMovieComponent
  ],
  providers: [PopularMovieService]
})
export class PopularMovieModule { }
