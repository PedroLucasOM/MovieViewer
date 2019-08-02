import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { FieldsetModule } from 'primeng/fieldset';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    PanelModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    DialogModule,
    FieldsetModule,
    RatingModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    PanelModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    DialogModule,
    FieldsetModule,
    RatingModule,
    ProgressSpinnerModule,
    ToastModule
  ]
})
export class PrimengModule { }
