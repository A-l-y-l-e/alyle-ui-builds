import { LyTheme2 } from '@alyle/ui';
import { Directive, Input, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var style = function (theme) { return ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
}); };
var LyDivider = /** @class */ (function () {
    function LyDivider(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: /**
         * Add indentation (72px)
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._inset = val;
            this._theme.addStyle("lyDivider.inset", function () { return ({
                marginBefore: '74px'
            }); }, this._el.nativeElement, this._insetClass);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyDivider.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    };
    LyDivider.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-divider'
                },] }
    ];
    /** @nocollapse */
    LyDivider.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyDivider.propDecorators = {
        inset: [{ type: Input }]
    };
    return LyDivider;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyDividerModule = /** @class */ (function () {
    function LyDividerModule() {
    }
    LyDividerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyDivider],
                    declarations: [LyDivider]
                },] }
    ];
    return LyDividerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyDivider, LyDividerModule };

//# sourceMappingURL=alyle-ui-divider.js.map