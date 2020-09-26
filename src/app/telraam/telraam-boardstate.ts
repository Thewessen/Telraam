import { Optional } from '@angular/core';

export class TelraamBoardstate {
	public boardstate: number[] = [0,0,0,0,0,0];
	public numbersystem: number = 10;

	constructor(boardstate?: number[],numbersystem?: number) {
		if(boardstate) { this.boardstate = boardstate; };
		if(numbersystem) { this.numbersystem = numbersystem; };
	}
}
