import { Component, OnInit } from '@angular/core';
import { TelraamBoardstate } from '../telraam/telraam-boardstate';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public telraam = new TelraamBoardstate();

  constructor() { }

  ngOnInit() {
  }

}
