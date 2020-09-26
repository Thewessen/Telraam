import { Component, 
			Input
			} from '@angular/core';
import { 
			trigger,
			style,
			transition,
			animate
} from '@angular/animations';
import { NgStyle } from '@angular/common';

import { TelraamService } from './telraam.service';
import { TelraamHistoryService} from './telraam-history.service';


@Component({
  selector: 'telraam-settings',
  templateUrl: './telraam-settings.component.html',
	styleUrls: ['./telraam-settings.component.css'],
  animations: [
	  trigger('settings',
  				[
					transition("void => *", [
						style({visibility: 'visible', opacity: 0}),
						animate(500, style({opacity: 1}))
					]),
					transition("* => void", [
						animate(500, style({opacity: 0}))
					])
				])]
})

export class TelraamSettings {
	public viewsettings: boolean;

	constructor(private service: TelraamService,private hist: TelraamHistoryService)	{ 
		this.viewsettings = false;
	}

	toggleViewSettings(): void {
		this.viewsettings = !this.viewsettings;
	}
}
