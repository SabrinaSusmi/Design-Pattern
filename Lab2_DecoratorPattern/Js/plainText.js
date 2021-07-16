"use strict";
exports.__esModule = true;
exports.PlainText = void 0;
var PlainText = /** @class */ (function () {
    function PlainText(text) {
        this.s_text = text;
    }
    PlainText.prototype.getModifiedText = function () {
        return this.s_text;
    };
    return PlainText;
}());
exports.PlainText = PlainText;
