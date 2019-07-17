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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    PanelModule,
    CardModule,
    FontAwesomeModule
  ],
  exports: [
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AccordionModule,
    InputTextModule,
    PanelModule,
    CardModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
