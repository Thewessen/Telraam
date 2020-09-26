import { Component,
			Input,
			OnInit
			} from '@angular/core';
import { NgStyle } from '@angular/common';
import { TelraamBall } from './telraam-ball.component';
import { TelraamService } from './telraam.service';
import { BALLIMAGES } from './ball-colors';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'telraam-row',
  templateUrl: './telraam-row.component.html',
  styleUrls: ['./telraam-row.component.css']
})

export class TelraamRow implements OnInit {
	@Input() private row: number;

	@Input() public height: number;

	@ViewChild('row_container') _row: ElementRef;

	private value: number;
	private previous_value: number;

	public balls: any[] = new Array;
	private ballcolors: string[];

	//private row_margin: number;
	private width: number;

	private panDirectionLeft: boolean = false;
	private panDirectionRight: boolean = false;

	constructor(public service: TelraamService)	{ 
		service.board_state$.subscribe(board_state_source => {
			this.previous_value = this.value;
			this.value = service.getRowValue(this.row);
	//		console.log(this.previous_value,this.value);
			this.balls.length = service.getNumberSystem();
			//balls get 40% width to divide, minus (2x) 0.1% margin. There are service.numberSystem balls.
			this.width = (9/19)*this.height;
			//(80-0.2*service.getNumberSystem())/service.getNumberSystem();
			//On rowHeight input calculate margin to fill container (rows take 90% of container height).
			//this.row_margin = (90-service.getRows()*this.height)/service.getRows()/2;
			//rows get 90% height to divide, without margin of 1% (2x). There are service.getRows() rows.
			//this.height = (90-service.getRows()*2)/service.getRows();
		});
	}

	ngOnInit() {
		this.ballcolors = BALLIMAGES['colors'];
		this.value = this.service.getRowValue(this.row);
		this.balls.length = this.service.getNumberSystem();
		//this.height = (90-this.service.getRows()*2)/this.service.getRows();
		//this.width = (80-0.2*this.service.getNumberSystem())/this.service.getNumberSystem();
		this.width = (9/19)*this.height;
		//this.row_margin = (90-this.service.getRows()*this.height)/this.service.getRows()/2;
	}

	ContainerRef(): any {
		return this._row.nativeElement;
	}

	ConsoleLog(target: any): number {
		console.log(this._row.nativeElement.offsetHeight);
		return 0;
	}

	calculateTransitionTime(index: number): string {
		let n = this.service.getRowValue(this.row)+index-this.service.getNumberSystem();
		let a = 0.7;
		let b = 0.3;
		// Total time of ball movement equals a-b
		let c = (a/b)**(1/this.service.getNumberSystem());
		if(this.getPosition(index)==='left') {
			return a-b*c**-n + 's';
		} else {
			return a-b*c**(n+1) + 's';
		};
	}

	changeValue(index: number): void {
		this.service.logBallIndex(this.row, index);
	}

	getPosition(index: number): string {
		return index<this.service.getNumberSystem()-this.value?'left':'right'; 
	}

	panLeft(index: number) {
		if(this.getPosition(index)==='right') {
			this.panDirectionLeft=true;
			if(this.panDirectionRight) {
				this.panDirectionRight=false;
				this.service.logRowValue(this.previous_value,this.row);
			} else {
				this.changeValue(index);
			};
		} else {
		};
	}

	panRight(index: number) {
		if(this.getPosition(index)==='left') {
			this.panDirectionRight=true;
			if(this.panDirectionLeft) {
				this.panDirectionLeft=false;
				this.service.logRowValue(this.previous_value,this.row);
			} else {
				this.changeValue(index);
			};
		};
	}

	panEnd() {
		this.panDirectionLeft=false;
		this.panDirectionRight=false;
	}
	//	Only if rowvalue changable by user input box
	//	logRowValue(value): void {
	//		if (value!=this.service.getCurrent()[this.row] && value<this.service.numberSystem && value!=null) {
	//			this.service.logRowValue(value, this.row);
	//		};
	//	}
}
