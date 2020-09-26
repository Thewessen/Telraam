import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { TelraamBoardstate } from './telraam-boardstate';

@Injectable()

export class TelraamService {
	private maxRows: number;

	//settings
	public showRowValue: boolean;
	public autoExceed: boolean;
	public autoAddRow: boolean;

	private telraam: TelraamBoardstate;

	private board_state_source = new Subject<number[]>();
	board_state$ = this.board_state_source.asObservable();

	constructor() {
		this.maxRows = 9;
		this.showRowValue = true;
		this.autoExceed = true;
		this.autoAddRow = false;
	}

	setMaxRows(value: number): void {
		this.maxRows = value;
	}

	setBoardState(boardstate: TelraamBoardstate) {
		this.telraam = boardstate;
		this.board_state_source.next(this.telraam.boardstate);
	}

	getRowValue(row: number): number {
		return this.telraam.boardstate[row];
	}

	getNumberSystem(): number {
		return this.telraam.numbersystem;
	}

	getCurrent(): TelraamBoardstate {
		return this.telraam;
	}

	getBoardstate(): number[] {
		return this.telraam.boardstate;
	}

	getMaxRows(): number {
		return this.maxRows;
	}
	
	logTotalValue(value: string): void {
		let _part = value.split("");
		for(var i=0;i<this.getRows();i++) {
			if(i<_part.length) {
				let _value = parseInt(_part[_part.length-i-1],this.telraam.numbersystem);
				if(_value.toString()!=='NaN') {
					this.telraam.boardstate[i] = _value;
				} else { 
					console.log(_part[_part.length-i-1] + ' of ' + _part + ' gets parseint ' + _value + ' which is not recognised as a number!');
					return; 
				};
			} else {
				this.telraam.boardstate[i] = 0;
			};
		};
		this.board_state_source.next(this.telraam.boardstate);
	}

	logBallIndex(row: number, index: number): void {
		let _currentvalue = this.telraam.boardstate[row];
		let _nextvalue = this.telraam.numbersystem-index;
		this.logRowValue(_currentvalue<_nextvalue ? _nextvalue : _nextvalue-1, row);
	}

	logRowValue(value: number, row: number): void {
		if(value>this.telraam.numbersystem) { return; }
		else { 
			this.telraam.boardstate[row] = value; 
			this.board_state_source.next(this.telraam.boardstate);
		};
		function ChangeValue(that: any,_row: number) {
			if(that.telraam.boardstate[_row]===that.telraam.numbersystem && _row+1<that.getRows()) {
				if(that.telraam.boardstate[_row+1]+1<=that.telraam.numbersystem) {
					that.telraam.boardstate[_row+1]++;
					that.telraam.boardstate[_row] = 0;
					that.board_state_source.next(that.telraam.boardstate);
					setTimeout(() => ChangeValue(that,_row+1),400);
				} else {
					ChangeValue(that,_row+1);
				};
			} else if(that.telraam.boardstate[_row]===that.telraam.numbersystem && _row+1===that.getRows() && _row+1<that.maxRows) {
				if(that.autoAddRow) {
					that.telraam.boardstate.push(0);
					that.board_state_source.next(that.telraam.boardstate);
					ChangeValue(that,_row);
				};
			};
			if(_row<=row) {
				return;
			} else if(that.telraam.boardstate[_row-1]!==that.telraam.numbersystem) {
					ChangeValue(that,_row-2);
			} else { return; };
		};
		if(this.autoExceed) { setTimeout(() => ChangeValue(this,row),400); };
	}

	getRows(): number{
		return this.telraam.boardstate.length;
	}
	
	getTotalValue(): string {
		let _value = 0;
		let _rows = this.getRows();
		for(var i = 0;i < _rows; i++) {
			_value += this.telraam.boardstate[i] * Math.pow(this.telraam.numbersystem,i);
		};
		return _value.toString(this.telraam.numbersystem).toUpperCase();
	}

	getMaxValue(): number {
		let _value = this.telraam.numbersystem-1;
		let _rows = this.getRows();
		if(_value === 0) {
			return 0;
		} else {
			for(var i = 1;i < _rows; i++) {
				_value += (this.telraam.numbersystem-1)*Math.pow(this.telraam.numbersystem,i);
			};
			return _value;
		};
	}

	//	getRowStateValue(value: number, row: number): number{
	//		let _boardstate = this.getCurrent();
	//		let _value = 0;
	//		let _rows = this.getRows();
	//		for(var i = 0;i < _rows; i++) {
	//			_value += _boardstate[i] * Math.pow(this.telraam.numbersystem,i);
	//		};
	//		return _value;
	//	}
	
	changeRowCount(value: number) {
		if(value<=this.maxRows && value>1) {
			let _dif = this.telraam.boardstate.length-value;
			if(_dif>0) {
				for(var i=0;i<_dif;i++) {
					this.telraam.boardstate.pop();
				};
			} else {
				for(var i=0;i<-_dif;i++) {
					this.telraam.boardstate.push(0);
				};
			};
		}
		this.board_state_source.next(this.telraam.boardstate);
	}

	changeNumberSystem(value: string): void {
		let _value = parseInt(value);
		if(_value!==this.telraam.numbersystem && _value>1 && _value<37) {
			let _totalvalue = parseInt(this.getTotalValue(),this.telraam.numbersystem);
			this.telraam.numbersystem = _value;
			this.logTotalValue(_totalvalue.toString(_value));
		};
	} 
}
