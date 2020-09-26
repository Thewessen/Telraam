import { Component, 
			OnInit,
			Input,
			ViewChild,
			ElementRef
			} from '@angular/core';
import { NgStyle } from '@angular/common';

import { TelraamRow } from './telraam-row.component';
import { TelraamSettings } from './telraam-settings.component';

import { TelraamService } from './telraam.service';
import { TelraamHistoryService } from './telraam-history.service';

import { TelraamBoardstate } from './telraam-boardstate';

import { ClickOutsideDirective } from '../click-outside.directive';

@Component({
  selector: 'telraam',
  templateUrl: './telraam-frame.component.html',
  styleUrls: ['./telraam-frame.component.css'],
	providers: [ TelraamService,
					 TelraamHistoryService
					]
})

export class TelraamFrame implements OnInit {
	@Input() private boardState: TelraamBoardstate;
	@ViewChild('rowContainer') rowContainer: ElementRef;

	private row_height: number;

	public row_count: any[] = new Array;
	
	public totalValue: string;

	constructor(private service: TelraamService,private hist: TelraamHistoryService)	{ 
		service.board_state$.subscribe(board_state_source => { 
			this.totalValue = service.getTotalValue();
			if(this.row_count.length!==service.getRows()) { this.row_count.length = service.getRows(); };
			hist.logHistory(service.getCurrent());
		});
	}

	ngOnInit() {
		this.service.setBoardState(this.boardState);
		this.totalValue = this.service.getTotalValue();
		this.row_count.length = this.service.getRows();

		//uggly!!
		let margin = 0.2;
		let totalrowheight = this.rowContainer.nativeElement.clientHeight-0.2*this.service.getMaxRows();
		this.row_height = totalrowheight/this.service.getMaxRows()/totalrowheight*100;
		console.log(this.rowContainer.nativeElement.clientHeight);
	}

	consoleLog(value: any) {
		console.log(value);
	}
}
