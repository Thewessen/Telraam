import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchriftchecklistComponent } from './schriftchecklist/schriftchecklist.component';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';

const routes: Routes = [
	{ path:'schriftcheck', component: SchriftchecklistComponent },
	{ path:'pdfmake', component: PdfmakeComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
