import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {
	public _x1: number;
	public _y1: number;

	public _x2: number;
	public _y2: number;

	private _firstClick: boolean = true;

	public Points: any[];

  constructor() {
	  this._x1 = 0;
	  this._y1 = 0;
	  this._x2 = 400;
	  this._y2 = 400;
  }

  ngOnInit() {
  }

  setPoint(_event: any) {
	  if(this._firstClick) {
		  this._x1 = this._x2 = _event.clientX.toString();
		  this._y1 = this._y2 = _event.clientY.toString();
	  } else {
		  this._x1 = _event.clientX.toString();
		  this._y1 = _event.clientY.toString();
	  };
	  this._firstClick=!this._firstClick;
	  console.log(_event.clientX,_event.clientY);
  }

}
