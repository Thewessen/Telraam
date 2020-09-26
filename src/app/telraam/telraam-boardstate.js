"use strict";
exports.__esModule = true;
var TelraamBoardstate = /** @class */ (function () {
    function TelraamBoardstate(boardstate, numbersystem) {
        this.boardstate = [0, 0, 0, 0, 0, 0];
        this.numbersystem = 10;
        if (boardstate) {
            this.boardstate = boardstate;
        }
        ;
        if (numbersystem) {
            this.numbersystem = numbersystem;
        }
        ;
    }
    return TelraamBoardstate;
}());
exports.TelraamBoardstate = TelraamBoardstate;
