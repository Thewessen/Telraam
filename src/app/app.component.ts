import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { TelraamBoardstate } from './telraam/telraam-boardstate';

@Component({
  selector: 'app-root',
  template: `
  				<div class="fullpage">
					<a routerLink="/telraam" *ngIf="router.url!='/telraam'">telraam</a><br>
					<a routerLink="/dashboard" *ngIf="router.url!='/dashboard'">dashboard</a><br>
					<a routerLink="/drawing" *ngIf="router.url!='/drawing'">drawing</a><br>
					<a routerLink="/mathinput" *ngIf="router.url!='/mathinput'">Math Input</a><br>
					<a routerLink="/desmos" *ngIf="router.url!='/desmos'">Desmos</a><br>
					<a routerLink="/schriftcheck" *ngIf="router.url!='/schriftcheck'">Schriftchecklist</a><br>
					<router-outlet></router-outlet>
				</div>
			  `,
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	public telraam = new TelraamBoardstate();
	constructor(public router: Router) {
	}
}
