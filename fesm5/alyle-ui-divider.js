import { __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

var style = function (theme) { return ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
}); };
var ɵ0 = style;
var LyDivider = /** @class */ (function () {
    function LyDivider(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: function (val) {
            this._inset = val;
            this._theme.addStyle("lyDivider.inset", function () { return ({
                marginBefore: '74px'
            }); }, this._el.nativeElement, this._insetClass);
        },
        enumerable: true,
        configurable: true
    });
    LyDivider.prototype.ngOnInit = function () {
        var className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyDivider.prototype, "inset", null);
    LyDivider = __decorate([
        Directive({
            selector: 'ly-divider'
        }),
        __metadata("design:paramtypes", [ElementRef,
            LyTheme2])
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

export { LyDivider, LyDividerModule, ɵ0 };
//# sourceMappingURL=alyle-ui-divider.js.map
