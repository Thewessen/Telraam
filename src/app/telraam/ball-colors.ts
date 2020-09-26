export const BALLIMAGES: any = {
	'colors': ['red','yellow','darkgreen','lightblue','darkblue','pink','lightgreen','brown','purple'],
	'red': '../assets/telraamimages/row0.png',
	'yellow': '../assets/telraamimages/row1.png',
	'darkgreen': '../assets/telraamimages/row2.png',
	'lightblue': '../assets/telraamimages/row3.png',
	'darkblue': '../assets/telraamimages/row4.png',
	'pink': '../assets/telraamimages/row5.png',
	'lightgreen': '../assets/telraamimages/row6.png',
	'brown': '../assets/telraamimages/row7.png',
	'purple': '../assets/telraamimages/row8.png',
};

export const ROWCOLORS: any = {
	'standard': function(row: number, index: number, numberSystem: number): string {
						return this.colors[row];
					},
	'twocolorrow': function(row: number, index: number, numberSystem: number): string {
						return index<numberSystem/2 ? this.colors[0] : this.colors[1];
					},
}
	//	getballstyle(style) {
	//		let ballstyles = {
	//			'standard': 'assets/telraamimages/row' + this.row + '.png',
	//			'disco': 'assets/telraamimages/row' + (this.index+this.row)%9 + '.png',
	//			'twocolorrow': 'assets/telraamimages/row' + (this.index<this.logger.numberSystem/2 ? 0 : 1) + '.png',
	//			'twocolortelraam': 'assets/telraamimages/row' + (this.row<this.logger.getRows()/2 ? 0 : 1) + '.png',
	//		}
	//		return ballstyles[style];
	//	}
	
