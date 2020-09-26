import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var MQ: any;

@Component({
  selector: 'app-math-input',
  templateUrl: './math-input.component.html',
  styleUrls: ['./math-input.component.css']
})

export class MathInputComponent implements OnInit {
  @ViewChild('mathfieldobj') mqmathfield: ElementRef;

  @ViewChild('staticmathobj') mqstaticmath: ElementRef;
  
  @ViewChild('mathonpage') mqmathonpage: ElementRef;
  
  public mathOnPage: string;

  constructor() {
	  this.mathOnPage = 'ax^2+bx+c=0';
  }

  ngOnInit() {
	  let mathField = MQ.MathField(this.mqmathfield.nativeElement);
  }

  ngAfterViewInit() {
	  MQ.StaticMath(this.mqstaticmath.nativeElement);
	  let staticmath = MQ.StaticMath(this.mqmathonpage.nativeElement);
  }

  ConsoleLog(target: any): void {
	  console.log(target);
  }
}
