import { Component, OnInit } from '@angular/core';
import { TelraamBoardstate } from './telraam-boardstate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telraam',
  templateUrl: './telraam.component.html',
  styleUrls: ['./telraam.component.css']
})
export class TelraamComponent implements OnInit {
	public telraam = new TelraamBoardstate();

  constructor(private router: Router) {
  }

  ngOnInit() {
      console.log("ON INIT!")
  }

}
