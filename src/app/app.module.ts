import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TelraamModule } from './telraam/telraam.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrawingComponent } from './drawing/drawing.component';
import { MathInputComponent } from './math-input/math-input.component';
import { DesmosComponent } from './desmos/desmos.component';
import { SchriftchecklistComponent } from './schriftchecklist/schriftchecklist.component';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';
import { HasContent, HasContentImpure } from './has-content.pipe';

@NgModule({
	declarations: [ 
		AppComponent, DashboardComponent, DrawingComponent, MathInputComponent, DesmosComponent, SchriftchecklistComponent,
	  PdfmakeComponent,
	  HasContent,
	  HasContentImpure
	],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
	  TelraamModule,
	  BrowserAnimationsModule,
	  AppRoutingModule,
	  FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
