import { HttpClientModule } from '@angular/common/http';
import { MakeRequestService } from './request/make-request.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// PRIMENG
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { DragScrollModule } from 'ngx-drag-scroll';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    PanelModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    DragScrollModule,
    ProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    InputTextModule,
    PanelModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    DragScrollModule,
    ProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [MakeRequestService]
})
export class SharedModule { }
