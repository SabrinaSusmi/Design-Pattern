"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ItalicText = void 0;
var TextDecorator_1 = require("./TextDecorator");
var ItalicText = /** @class */ (function (_super) {
    __extends(ItalicText, _super);
    function ItalicText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicText.prototype.getModifiedText = function () {
        return _super.prototype.getModifiedText.call(this).italics();
    };
    return ItalicText;
}(TextDecorator_1.TextDecorator));
exports.ItalicText = ItalicText;
