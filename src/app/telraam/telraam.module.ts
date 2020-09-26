import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TelraamComponent } from './telraam.component';
import { TelraamFrame } from './telraam-frame.component';
import { TelraamRow } from './telraam-row.component';
import { TelraamBall } from './telraam-ball.component';
import { TelraamSettings } from './telraam-settings.component';

import { TelraamService } from './telraam.service';
import { TelraamHistoryService } from './telraam-history.service';

import { ClickOutsideDirective } from '../click-outside.directive';

@NgModule({
  declarations: [
		TelraamFrame,
		TelraamRow,
		TelraamBall,
	  TelraamSettings,
	  ClickOutsideDirective,
	  TelraamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
	exports: [ TelraamFrame,
				  ClickOutsideDirective 
				],
	providers: [ TelraamService,
					 TelraamHistoryService
				  ],
})
export class TelraamModule { }
