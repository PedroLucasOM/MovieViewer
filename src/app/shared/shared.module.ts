import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimengModule } from './primeng/primeng.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { MakeRequestService } from './request/make-request.service';
import { MessageService } from 'primeng/components/common/messageservice';

import { AltoContrasteDirective } from './directives/alto-contraste.directive';


@NgModule({
  declarations: [AltoContrasteDirective],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    DragScrollModule,
    PrimengModule,
    AngularMaterialModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    DragScrollModule,
    FontAwesomeModule,
    FormsModule,
    AltoContrasteDirective,
    NgbModule,
    PrimengModule,
    AngularMaterialModule
  ],
  providers: [MakeRequestService, MessageService]
})
export class SharedModule { }
