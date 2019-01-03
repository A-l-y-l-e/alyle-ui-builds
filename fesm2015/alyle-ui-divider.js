import { LyTheme2 } from '@alyle/ui';
import { Directive, Input, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const style = (theme) => ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
});
class LyDivider {
    /**
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * Add indentation (72px)
     * @param {?} val
     * @return {?}
     */
    set inset(val) {
        this._inset = val;
        this._theme.addStyle(`lyDivider.inset`, () => ({
            marginBefore: '74px'
        }), this._el.nativeElement, this._insetClass);
    }
    /**
     * @return {?}
     */
    get inset() {
        return this._inset;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    }
}
LyDivider.decorators = [
    { type: Directive, args: [{
                selector: 'ly-divider'
            },] }
];
/** @nocollapse */
LyDivider.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDivider.propDecorators = {
    inset: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyDividerModule {
}
LyDividerModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyDivider],
                declarations: [LyDivider]
            },] }
];

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