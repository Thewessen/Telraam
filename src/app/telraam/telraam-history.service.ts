import { Injectable } from '@angular/core';

import { TelraamBoardstate } from './telraam-boardstate';

@Injectable()

export class TelraamHistoryService {
	private telraamhistory: TelraamBoardstate[] = new Array;

	constructor() {
	}

	logHistory(telraam: TelraamBoardstate): void {
		let _boardstate = Object.assign([],telraam.boardstate);
		let _telraam = new TelraamBoardstate(_boardstate,telraam.numbersystem);
		this.telraamhistory.push(_telraam);
	}

	getHistory(index: number): TelraamBoardstate {
		return this.telraamhistory[index];
	} 
}
