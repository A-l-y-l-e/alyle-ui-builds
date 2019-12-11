import { __decorate } from 'tslib';
import { Input, Directive, NgModule } from '@angular/core';
import { toBoolean, StyleRenderer, LyHostClass } from '@alyle/ui';

var STYLES = function (theme) { return function (className) { return className + "{display:block;background-color:" + theme.divider + ";height:1px;}"; }; };
var ɵ0 = STYLES;
var LyDivider = /** @class */ (function () {
    function LyDivider(_styleRenderer, _hostClass) {
        this._styleRenderer = _styleRenderer;
        this._hostClass = _hostClass;
    }
    LyDivider_1 = LyDivider;
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: function (val) {
            var newVal = this._inset = toBoolean(val);
            if (newVal) {
                this[0x1] = this._styleRenderer.add(LyDivider_1.и + "--inset", function (_a) {
                    var before = _a.before;
                    return function (className) { return className + "{margin-" + before + ":74px;}"; };
                }, this[0x1]);
            }
            else {
                this._hostClass.remove(this[0x1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyDivider.prototype.ngOnInit = function () {
        this._styleRenderer.add(STYLES);
    };
    var LyDivider_1;
    LyDivider.и = 'LyDivider';
    LyDivider.ctorParameters = function () { return [
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
    __decorate([
        Input()
    ], LyDivider.prototype, "inset", null);
    LyDivider = LyDivider_1 = __decorate([
        Directive({
            selector: 'ly-divider',
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
    ], LyDivider);
    return LyDivider;
}());

var LyDividerModule = /** @class */ (function () {
    function LyDividerModule() {
    }
    LyDividerModule = __decorate([
        NgModule({
            exports: [LyDivider],
            declarations: [LyDivider]
        })
    ], LyDividerModule);
    return LyDividerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyDivider, LyDividerModule, ɵ0 };
//# sourceMappingURL=alyle-ui-divider.js.map
