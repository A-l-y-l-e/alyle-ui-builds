(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/divider', ['exports', '@alyle/ui', '@angular/core'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.divider = {}),global.ly.core,global.ng.core));
}(this, (function (exports,ui,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var style = function (theme) {
        return ({
            display: 'block',
            backgroundColor: theme.divider,
            height: '1px'
        });
    };
    var LyDivider = /** @class */ (function () {
        function LyDivider(_el, _theme) {
            this._el = _el;
            this._theme = _theme;
        }
        Object.defineProperty(LyDivider.prototype, "inset", {
            get: /**
             * @return {?}
             */ function () {
                return this._inset;
            },
            /** Add indentation (72px) */
            set: /**
             * Add indentation (72px)
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._inset = val;
                this._theme.addStyle("lyDivider.inset", function () {
                    return ({
                        marginBefore: '74px'
                    });
                }, this._el.nativeElement, this._insetClass);
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
            { type: core.Directive, args: [{
                        selector: 'ly-divider'
                    },] }
        ];
        /** @nocollapse */
        LyDivider.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyDivider.propDecorators = {
            inset: [{ type: core.Input }]
        };
        return LyDivider;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyDividerModule = /** @class */ (function () {
        function LyDividerModule() {
        }
        LyDividerModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyDivider],
                        declarations: [LyDivider]
                    },] }
        ];
        return LyDividerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LyDivider = LyDivider;
    exports.LyDividerModule = LyDividerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-divider.umd.js.map