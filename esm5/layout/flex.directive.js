/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, ElementRef, isDevMode, Inject, Optional } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
import { LyFlexBase } from './flex-base';
/** @enum {?} */
var __align = {
    flex: 0,
    inline: 1,
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
    nowrap: 'nowrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse',
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    baseline: 'baseline',
    stretch: 'stretch',
};
__align[__align.flex] = 'flex';
__align[__align.inline] = 'inline';
/** @typedef {?} */
var FxDirection;
export { FxDirection };
/** @typedef {?} */
var FxWrap;
export { FxWrap };
/** @typedef {?} */
var FxFlow;
export { FxFlow };
/** @typedef {?} */
var FxJustifyContent;
export { FxJustifyContent };
/** @typedef {?} */
var FxAlignItems;
export { FxAlignItems };
/** @typedef {?} */
var FxAlignContent;
export { FxAlignContent };
/** @typedef {?} */
var FxAlignItemsAndContent;
export { FxAlignItemsAndContent };
/** @typedef {?} */
var FxAlign;
export { FxAlign };
var LyFlex = /** @class */ (function (_super) {
    tslib_1.__extends(LyFlex, _super);
    function LyFlex(mediaQueries, elementRef, renderer, coreTheme) {
        return _super.call(this, elementRef, renderer, coreTheme, mediaQueries) || this;
    }
    Object.defineProperty(LyFlex.prototype, "fx", {
        set: /**
         * @param {?} valArray
         * @return {?}
         */
        function (valArray) {
            var _this = this;
            if (!this._rawClass) {
                this._rawClass = [];
            }
            /** *
             * Save previous classes
              @type {?} */
            var prevClasses = this._rawClass;
            /** Clear rawClass */
            if (this._rawClass.length) {
                this._rawClass = [];
            }
            valArray.forEach(function (key) {
                /** @type {?} */
                var newClass;
                /** @type {?} */
                var values = key.split(':');
                if (values[0] === 'display') {
                    newClass = _this._createDisplayClass(key, /** @type {?} */ (values[1]), _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'flow') {
                    newClass = _this._createFlowClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'align') {
                    newClass = _this._createAlignClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'direction') {
                    newClass = _this._createDirectionClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                else if (values[0] === 'wrap') {
                    newClass = _this._createWrapClass(key, values[1], _this._mediaQueries[(values[2])]);
                }
                _this._rawClass.push(newClass);
            });
            /** Delete previous classes if they exist */
            if (prevClasses.length) {
                prevClasses.forEach(function (klass) {
                    _this._renderer.removeClass(_this._elementRef.nativeElement, klass);
                });
            }
            /** Add new class */
            this._rawClass.forEach(function (klass) {
                _this._renderer.addClass(_this._elementRef.nativeElement, klass);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxDisplay;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxDisplay !== val) {
                /** @type {?} */
                var newClass = this._createDisplayClass(val, val);
                this._updateClass(newClass, this._fxDisplayClass);
                this._fxDisplayClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxFlow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxFlow;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxFlow !== val) {
                /** @type {?} */
                var newClass = this._createFlowClass(val, val);
                this._updateClass(newClass, this._fxFlowClass);
                this._fxFlowClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxAlign;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxAlign !== val) {
                /** *
                 * create Style
                  @type {?} */
                var newClass = this._createAlignClass(val, val);
                this._updateClass(newClass, this._fxAlignClass);
                this._fxAlignClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxDirection;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._fxDirection !== val) {
                /** *
                 * create Style
                  @type {?} */
                var newClass = this._createDirectionClass(val, val);
                this._updateClass(newClass, this._fxDirectionClass);
                this._fxDirectionClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFlex.prototype, "fxWrap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fxWrap;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.fxWrap !== val) {
                /** *
                 * create Style
                  @type {?} */
                var newClass = this._createWrapClass(val, val);
                this._updateClass(newClass, this._fxWrapClass);
                this._fxWrapClass = newClass;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyFlex.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this._fxDisplay) {
            /** Set default display */
            this.fxDisplay = null;
        }
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createDisplayClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        this._checkVal(val);
        this._fxDisplay = val || 'flex';
        /** @type {?} */
        var newKey = "k-fx-display:" + (key || this.fxDisplay);
        return this._coreTheme.setUpStyle(newKey, function () { return (val === 'inline' ? "display:inline-flex;" : "display:flex;"); }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createFlowClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._checkVal(val);
        this._fxFlow = val || 'row wrap';
        /** @type {?} */
        var newKey = "k-fx-flow:" + (key || this.fxFlow);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return "flex-flow:" + _this.fxFlow; }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createAlignClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._checkVal(val);
        this._fxAlign = val || 'start stretch';
        /** @type {?} */
        var newKey = "k-fx-align:" + (key || this.fxAlign);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () {
            /** @type {?} */
            var arrayVal = _this.fxAlign.split(' ');
            /** @type {?} */
            var justifyContent = arrayVal[0] || 'start';
            /** @type {?} */
            var alignItems = arrayVal[1] || 'stretch';
            /** @type {?} */
            var alignContent = arrayVal[2];
            return ("justify-content:" + __align[justifyContent] + ";" +
                ("align-items:" + __align[alignItems] + ";") +
                ("align-content:" + __align[alignContent || alignItems] + ";"));
        }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createDirectionClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxDirection = val || 'row';
        /** @type {?} */
        var newKey = "k-fx-direction:" + (key || this.fxDirection);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return ("flex-direction:" + __align[_this.fxDirection] + ";"); }, media);
    };
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    LyFlex.prototype._createWrapClass = /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    function (key, val, media) {
        var _this = this;
        this._fxWrap = val || 'wrap';
        /** @type {?} */
        var newKey = "k-fx-wrap:" + (key || this.fxWrap);
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, function () { return ("flex-wrap:" + __align[_this.fxWrap] + ";"); }, media);
    };
    /**
     * Check if value is string else emit error
     * @param {?} val
     * @return {?}
     */
    LyFlex.prototype._checkVal = /**
     * Check if value is string else emit error
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (isDevMode() && Array.isArray(val)) {
            console.warn(val, 'in', this._elementRef, "\n\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B\uD83E\uDC0B");
            throw new Error("value: '" + val + "' is not a string in");
        }
    };
    LyFlex.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fxDisplay], [fxFlow], [fxDirection], [fxWrap], [fxAlign], [fx]',
                    exportAs: 'lyFx'
                },] },
    ];
    /** @nocollapse */
    LyFlex.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: CoreTheme }
    ]; };
    LyFlex.propDecorators = {
        fx: [{ type: Input }],
        fxDisplay: [{ type: Input }],
        fxFlow: [{ type: Input }],
        fxAlign: [{ type: Input }],
        fxDirection: [{ type: Input }],
        fxWrap: [{ type: Input }]
    };
    return LyFlex;
}(LyFlexBase));
export { LyFlex };
if (false) {
    /** @type {?} */
    LyFlex.prototype._fxDisplay;
    /** @type {?} */
    LyFlex.prototype._fxDisplayClass;
    /**
     * <FxDirection> + <FxWrap>
     * @type {?}
     */
    LyFlex.prototype._fxFlow;
    /** @type {?} */
    LyFlex.prototype._fxFlowClass;
    /** @type {?} */
    LyFlex.prototype._fxAlign;
    /** @type {?} */
    LyFlex.prototype._fxAlignClass;
    /** @type {?} */
    LyFlex.prototype._fxDirection;
    /** @type {?} */
    LyFlex.prototype._fxDirectionClass;
    /** @type {?} */
    LyFlex.prototype._fxWrap;
    /** @type {?} */
    LyFlex.prototype._fxWrapClass;
    /** @type {?} */
    LyFlex.prototype._rawClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGF5b3V0LyIsInNvdXJjZXMiOlsiZmxleC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sV0FBVyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7OztJQUd2QyxPQUFJO0lBQ0osU0FBTTtJQUNOLEtBQU0sS0FBSztJQUNYLFlBQWEsYUFBYTtJQUMxQixRQUFTLFFBQVE7SUFDakIsZUFBZ0IsZ0JBQWdCO0lBQ2hDLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixhQUFjLGNBQWM7SUFDNUIsT0FBUSxZQUFZO0lBQ3BCLFFBQVMsUUFBUTtJQUNqQixLQUFNLFVBQVU7SUFDaEIsU0FBVSxlQUFlO0lBQ3pCLFFBQVMsY0FBYztJQUN2QixRQUFTLGNBQWM7SUFDdkIsVUFBVyxVQUFVO0lBQ3JCLFNBQVUsU0FBUzs7Z0JBaEJuQixJQUFJO2dCQUNKLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUNvQixrQ0FBVTtJQThIcEMsZ0JBQ3dDLFlBQWlCLEVBQ3ZELFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFNBQW9CO2VBRXBCLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQztLQUNyRDtJQWxIRCxzQkFDSSxzQkFBRTs7Ozs7UUFETixVQUNPLFFBQWtCO1lBRHpCLGlCQTJDQztZQXpDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIs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QUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxvUEFBNEMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBVyxHQUFHLHlCQUFzQixDQUFDLENBQUM7U0FDdkQ7OztnQkFsT0osU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUVBQWlFO29CQUMzRSxRQUFRLEVBQUUsTUFBTTtpQkFDakI7Ozs7Z0RBZ0lJLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQTNLd0IsVUFBVTtnQkFBckIsU0FBUztnQkFDckQsU0FBUzs7O3FCQThEZixLQUFLOzRCQTRDTCxLQUFLO3lCQVlMLEtBQUs7MEJBWUwsS0FBSzs4QkFhTCxLQUFLO3lCQWFMLEtBQUs7O2lCQTdKUjtFQTRDNEIsVUFBVTtTQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIGlzRGV2TW9kZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lLCBVbmRlZmluZWQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IEx5RmxleEJhc2UgfSBmcm9tICcuL2ZsZXgtYmFzZSc7XG5cbmVudW0gX19hbGlnbiB7XG4gIGZsZXgsXG4gIGlubGluZSxcbiAgcm93ID0gJ3JvdycsXG4gIHJvd1JldmVyc2UgPSAncm93LXJldmVyc2UnLFxuICBjb2x1bW4gPSAnY29sdW1uJyxcbiAgY29sdW1uUmV2ZXJzZSA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gIG5vd3JhcCA9ICdub3dyYXAnLFxuICB3cmFwID0gJ3dyYXAnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgY2VudGVyID0gJ2NlbnRlcicsXG4gIGVuZCA9ICdmbGV4LWVuZCcsXG4gIGJldHdlZW4gPSAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZCA9ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHkgPSAnc3BhY2UtZXZlbmx5JyxcbiAgYmFzZWxpbmUgPSAnYmFzZWxpbmUnLFxuICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxufVxuLyoqICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgKi9cbmV4cG9ydCB0eXBlIEZ4RGlyZWN0aW9uID0gc3RyaW5nIHwgbnVsbDtcbi8qKiAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnICovXG5leHBvcnQgdHlwZSBGeFdyYXAgPSBzdHJpbmcgfCBudWxsO1xuLyoqIFtGeERpcmVjdGlvbiwgRnhXcmFwXSAqL1xuZXhwb3J0IHR5cGUgRnhGbG93ID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRnhKdXN0aWZ5Q29udGVudCA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JyB8IG51bGw7XG5leHBvcnQgdHlwZSBGeEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiYXNlbGluZScgfCAnc3RyZXRjaCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgRnhBbGlnbkNvbnRlbnQgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ3N0cmV0Y2gnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEZ4QWxpZ25JdGVtc0FuZENvbnRlbnQgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8IG51bGw7XG4vKipcbiAqIFtGeEp1c3RpZnlDb250ZW50XSB8IFtGeEp1c3RpZnlDb250ZW50LCBGeEFsaWduSXRlbXNBbmRDb250ZW50XSB8IFtGeEp1c3RpZnlDb250ZW50LCBGeEFsaWduSXRlbXMsIEZ4QWxpZ25Db250ZW50XVxuICovXG5leHBvcnQgdHlwZSBGeEFsaWduID0gc3RyaW5nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmeERpc3BsYXldLCBbZnhGbG93XSwgW2Z4RGlyZWN0aW9uXSwgW2Z4V3JhcF0sIFtmeEFsaWduXSwgW2Z4XScsXG4gIGV4cG9ydEFzOiAnbHlGeCdcbn0pXG5leHBvcnQgY2xhc3MgTHlGbGV4IGV4dGVuZHMgTHlGbGV4QmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2Z4RGlzcGxheTogJ2ZsZXgnIHwgJ2lubGluZSc7XG4gIHByaXZhdGUgX2Z4RGlzcGxheUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIDxGeERpcmVjdGlvbj4gKyA8RnhXcmFwPiAqL1xuICBwcml2YXRlIF9meEZsb3c6IEZ4RmxvdztcbiAgcHJpdmF0ZSBfZnhGbG93Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meEFsaWduOiBGeEFsaWduO1xuICBwcml2YXRlIF9meEFsaWduQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meERpcmVjdGlvbjogRnhEaXJlY3Rpb247XG4gIHByaXZhdGUgX2Z4RGlyZWN0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meFdyYXA6IEZ4V3JhcDtcbiAgcHJpdmF0ZSBfZnhXcmFwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXdDbGFzczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4KHZhbEFycmF5OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuXG4gICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG4gICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZGlzcGxheScpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXNwbGF5Q2xhc3Moa2V5LCB2YWx1ZXNbMV0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2Zsb3cnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxvd0NsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2FsaWduJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZGlyZWN0aW9uJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZURpcmVjdGlvbkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ3dyYXAnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV3JhcENsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgIH0pO1xuICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZnhEaXNwbGF5KHZhbDogJ2ZsZXgnIHwgJ2lubGluZScpIHtcbiAgICBpZiAodGhpcy5meERpc3BsYXkgIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXNwbGF5Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RGlzcGxheUNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4RGlzcGxheUNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeERpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RGlzcGxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEZsb3codmFsOiBGeEZsb3cpIHtcbiAgICBpZiAodGhpcy5meEZsb3cgIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbG93Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4Rmxvd0NsYXNzKTtcbiAgICAgIHRoaXMuX2Z4Rmxvd0NsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEZsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RmxvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEFsaWduKHZhbDogRnhBbGlnbikge1xuICAgIGlmICh0aGlzLmZ4QWxpZ24gIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnbkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEFsaWduQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhBbGlnbkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEFsaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9meEFsaWduO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4RGlyZWN0aW9uKHZhbDogRnhEaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5fZnhEaXJlY3Rpb24gIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXJlY3Rpb25DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhEaXJlY3Rpb25DbGFzcyk7XG4gICAgICB0aGlzLl9meERpcmVjdGlvbkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhEaXJlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhXcmFwKHZhbDogRnhXcmFwKSB7XG4gICAgaWYgKHRoaXMuZnhXcmFwICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV3JhcENsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meFdyYXBDbGFzcyk7XG4gICAgICB0aGlzLl9meFdyYXBDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhXcmFwKCkge1xuICAgIHJldHVybiB0aGlzLl9meFdyYXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5fZnhEaXNwbGF5KSB7XG4gICAgICAvKiogU2V0IGRlZmF1bHQgZGlzcGxheSAqL1xuICAgICAgdGhpcy5meERpc3BsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZURpc3BsYXlDbGFzcyhrZXk6IHN0cmluZywgdmFsOiAnZmxleCcgfCAnaW5saW5lJywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhEaXNwbGF5ID0gdmFsIHx8ICdmbGV4JztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1kaXNwbGF5OiR7a2V5IHx8IHRoaXMuZnhEaXNwbGF5fWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgdmFsID09PSAnaW5saW5lJyA/IGBkaXNwbGF5OmlubGluZS1mbGV4O2AgOiBgZGlzcGxheTpmbGV4O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbG93Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrVmFsKHZhbCk7XG5cbiAgICB0aGlzLl9meEZsb3cgPSB2YWwgfHwgJ3JvdyB3cmFwJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1mbG93OiR7a2V5IHx8IHRoaXMuZnhGbG93fWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiBgZmxleC1mbG93OiR7dGhpcy5meEZsb3d9YCxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFsaWduQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrVmFsKHZhbCk7XG5cbiAgICB0aGlzLl9meEFsaWduID0gdmFsIHx8ICdzdGFydCBzdHJldGNoJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1hbGlnbjoke2tleSB8fCB0aGlzLmZ4QWxpZ259YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuICB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsID0gdGhpcy5meEFsaWduLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgY29uc3QganVzdGlmeUNvbnRlbnQgPSBhcnJheVZhbFswXSB8fCAnc3RhcnQnO1xuICAgICAgICBjb25zdCBhbGlnbkl0ZW1zID0gYXJyYXlWYWxbMV0gfHwgJ3N0cmV0Y2gnO1xuICAgICAgICBjb25zdCBhbGlnbkNvbnRlbnQgPSBhcnJheVZhbFsyXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBganVzdGlmeS1jb250ZW50OiR7X19hbGlnbltqdXN0aWZ5Q29udGVudF19O2AgK1xuICAgICAgICAgIGBhbGlnbi1pdGVtczoke19fYWxpZ25bYWxpZ25JdGVtc119O2AgK1xuICAgICAgICAgIGBhbGlnbi1jb250ZW50OiR7X19hbGlnblthbGlnbkNvbnRlbnQgfHwgYWxpZ25JdGVtc119O2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXJlY3Rpb25DbGFzcyhrZXk6IHN0cmluZywgdmFsOiBGeERpcmVjdGlvbiwgbWVkaWE/OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuX2Z4RGlyZWN0aW9uID0gdmFsIHx8ICdyb3cnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LWRpcmVjdGlvbjoke2tleSB8fCB0aGlzLmZ4RGlyZWN0aW9ufWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4LWRpcmVjdGlvbjoke19fYWxpZ25bdGhpcy5meERpcmVjdGlvbl19O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVXcmFwQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogRnhXcmFwLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4V3JhcCA9IHZhbCB8fCAnd3JhcCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtd3JhcDoke2tleSB8fCB0aGlzLmZ4V3JhcH1gO1xuXG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4LXdyYXA6JHtfX2FsaWduW3RoaXMuZnhXcmFwXX07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBDaGVjayBpZiB2YWx1ZSBpcyBzdHJpbmcgZWxzZSBlbWl0IGVycm9yICovXG4gIHByaXZhdGUgX2NoZWNrVmFsKHZhbDogYW55KSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY29uc29sZS53YXJuKHZhbCwgJ2luJywgdGhpcy5fZWxlbWVudFJlZiwgYFxcbvCfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CLYCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlOiAnJHt2YWx9JyBpcyBub3QgYSBzdHJpbmcgaW5gKTtcbiAgICB9XG4gIH1cblxufVxuIl19