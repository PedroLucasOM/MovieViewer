import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
