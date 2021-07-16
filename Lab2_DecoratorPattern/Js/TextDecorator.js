"use strict";
exports.__esModule = true;
exports.TextDecorator = void 0;
var TextDecorator = /** @class */ (function () {
    function TextDecorator(text) {
        this.text = text;
    }
    TextDecorator.prototype.getModifiedText = function () {
        this.givenText = this.text.getModifiedText();
        return this.givenText;
    };
    return TextDecorator;
}());
exports.TextDecorator = TextDecorator;
