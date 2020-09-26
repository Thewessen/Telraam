import { Component,
			Input,
			Output,
			OnInit,
			EventEmitter
			} from '@angular/core';
import { NgStyle } from '@angular/common';
import { BALLIMAGES } from './ball-colors';

@Component({
  selector: 'telraam-ball',
	template: `
				<img class="ball" [src]="color_source" />
	
				`,
	styles: [`
		img.ball { 
			display: block; 
			position: relative; 
			height: 100%; 
			width: 100%;  
			margin: 0; 
			padding: 0; 
			overflow: hidden; 
			top: 0; 
			}
				`]
})

export class TelraamBall implements OnInit {

	@Input() ballcolor: string;

	public color_source: string;

	constructor()	{ 
	}

	ngOnInit() {
		this.color_source = BALLIMAGES[this.ballcolor];
	}
}
