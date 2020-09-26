import { Component, OnInit } from '@angular/core';
import dd from '../Rubrics/schriftbeoordeling';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.css']
})
export class PdfmakeComponent implements OnInit {

	constructor() {
		pdfMake.vfs = pdfFonts.pdfMake.vfs;
		var _title = dd.content.shift();
		var _grade = { text: 'G', style:'grade'};
		dd.content.unshift(_title,{ text: 'Samuel Thewessen (2TH2)', style: 'refs'},_grade);
		pdfMake.createPdf(dd).open();
	}

  ngOnInit() {
  }

}
