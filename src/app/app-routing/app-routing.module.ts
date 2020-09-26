import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { TelraamComponent } from '../telraam/telraam.component';
import { DrawingComponent } from '../drawing/drawing.component';
import { MathInputComponent } from '../math-input/math-input.component';
import { DesmosComponent } from '../desmos/desmos.component';
import { SchriftchecklistComponent } from '../schriftchecklist/schriftchecklist.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'telraam', component: TelraamComponent },
	{ path: 'drawing', component: DrawingComponent },
	{ path: 'mathinput', component: MathInputComponent },
	{ path: 'desmos', component: DesmosComponent },
	{ path: 'schriftcheck', component: SchriftchecklistComponent }
];

@NgModule({
  imports: [
    CommonModule,
	 RouterModule.forRoot(routes)
  ],
  exports: [
	  RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
