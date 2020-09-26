import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgStyle } from '@angular/common';
import eigenhuis from '../Rubrics/eigenhuis';
import schrift from '../Rubrics/schriftbeoordeling';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

export class Student {
	public name: string;
	public classcode: string;
}

@Component({
  selector: 'app-schriftchecklist',
  templateUrl: './schriftchecklist.component.html',
  styleUrls: ['./schriftchecklist.component.css']
})

export class SchriftchecklistComponent implements OnInit {
	public totalValue: number = 0;
	public selectedRows: number = 0;

	public pdf: any;
	public rubrics: any[];

	public onePerRow: boolean = true;
	public fill_color: string = 'green';
	public fill_color_red: string = 'red';

	@ViewChild('studentname') _student: ElementRef;

	public student: Student = new Student;

	constructor() {
		pdfMake.vfs = pdfFonts.pdfMake.vfs;
		this.pdf = schrift;
	}

  ngOnInit() {
	  this.rubrics = [eigenhuis,schrift];
  }

	SelectCell(content: number,row: number,cell: number): void {
		let _table = this.pdf.content[content].table.body;
		let _average: number;
		let _counts = (_table[0][0].style==='points');
		if(row!=6) {
			for(let i = 1;i<_table[row].length;i++) {
				if(i===cell) {
					if(_table[row][i].fillColor) {
						_table[row][i].fillColor = undefined;
						if(_counts) { 
							this.totalValue -= i; 
							this.selectedRows--;
						};
					} else {
						_table[row][i].fillColor = this.fill_color;
						if(_counts) { 
							this.totalValue += i; 
							this.selectedRows++;
						};
					};
					_average = Math.round(this.totalValue/this.selectedRows);
				} else {
					if(_table[row][i].fillColor && _counts) {
						this.totalValue -= i; 
						this.selectedRows--;
						_average = Math.round(this.totalValue/this.selectedRows);
					}; 
					_table[row][i].fillColor = undefined;
				};
			};
		} else {
			if(_table[row][cell].fillColor) {
				_table[row][cell].fillColor = undefined;
			} else {
				_table[row][cell].fillColor = this.fill_color;
				_average = Math.round(this.totalValue/this.selectedRows);
			};
		};
		if(_table[row][2].fillColor) {
			if(_average>=2) {
				this.pdf.content[2].text = this.pdf.content[4].table.body[0][2].text;
			} else {
				this.pdf.content[2].text = this.pdf.content[4].table.body[0][1].text;
			};
		} else {
			this.pdf.content[2].text = this.pdf.content[4].table.body[0][_average].text;
		};
	}

	//	setRowValue(row: any,value: number): any {
	//		row.setAttribute('rowvalue',value);
	//		return this;
	//	}
	//
	//	CalculateTotalValue(): any {
	//		let _rows = document.getElementById('rubric_container').children;
	//		this.totalValue = 0;
	//		for(let i=0;i<_rows.length;i++) {
	//			this.totalValue += parseInt(_rows[i].getAttribute('rowvalue'));
	//		};
	//		return this;
	//	}
	//
	//	CalculateGrade(): any {
	//		let _rows = document.getElementById('rubric_container').children;
	//		let _maxValue = this.CalculateMaxValue();
	//		this.grade = this.content.grade.formula(this.totalValue,_maxValue);
	//		return this;
	//	}

	//	CalculateMaxValue(): number {
	//		let _content = this.pdf.content;
	//		for(let i = 0;i<_content.length;i++) {
	//			if(_content[i].table) {
	//				let _body = _content[i].table.body;
	//				if(_body[0][0].style==='points') {
	//					let _maxvalue = 0;
	//					for(let j = 1;j<_body.length;j++) {
	//						_maxvalue += _body[j].length-1;
	//					};
	//					this.maxValue = _maxvalue;
	//				};
	//			};
	//		};
	//	}

	CellFlex(cell: any): string {
		if(cell.style==='subject') {
			return '25';
		} else if (cell.colSpan) {
			return 'calc' + cell.colSpan + 'Cols';
		} else {
			return '*';
		}
	}

	ChangeRubric(rubric: any): void {
		this.pdf = rubric;
	};
	
	PdfOpen(): void {
		//		this.pdf.content[1].text = "Samuel Thewessen (2TH2)";
		pdfMake.createPdf(this.pdf).open();
	}

	PdfPrint(): void {
		pdfMake.createPdf(this.pdf).print();
	}

	PdfDownload(): void {
		//console.log(this._student);
		pdfMake.createPdf(this.pdf).download(this._student.nativeElement.value + '.pdf');
		this._student.nativeElement.focus();
	}
	
}
