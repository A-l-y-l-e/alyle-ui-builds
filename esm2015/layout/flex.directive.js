/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef, isDevMode, Inject, Optional } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
import { LyFlexBase } from './flex-base';
/** @enum {?} */
const __align = {
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
__align[__align.flex] = "flex";
__align[__align.inline] = "inline";
export class LyFlex extends LyFlexBase {
    /**
     * @param {?} mediaQueries
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} coreTheme
     */
    constructor(mediaQueries, elementRef, renderer, coreTheme) {
        super(elementRef, renderer, coreTheme, mediaQueries);
    }
    /**
     * @param {?} valArray
     * @return {?}
     */
    set fx(valArray) {
        if (!this._rawClass) {
            this._rawClass = [];
        }
        /**
         * Save previous classes
         */
        const /** @type {?} */ prevClasses = this._rawClass;
        /** Clear rawClass */
        if (this._rawClass.length) {
            this._rawClass = [];
        }
        valArray.forEach(key => {
            let /** @type {?} */ newClass;
            const /** @type {?} */ values = key.split(':');
            if (values[0] === 'display') {
                newClass = this._createDisplayClass(key, /** @type {?} */ (values[1]), this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'flow') {
                newClass = this._createFlowClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'align') {
                newClass = this._createAlignClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'direction') {
                newClass = this._createDirectionClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            else if (values[0] === 'wrap') {
                newClass = this._createWrapClass(key, values[1], this._mediaQueries[(values[2])]);
            }
            this._rawClass.push(newClass);
        });
        /** Delete previous classes if they exist */
        if (prevClasses.length) {
            prevClasses.forEach(klass => {
                this._renderer.removeClass(this._elementRef.nativeElement, klass);
            });
        }
        /** Add new class */
        this._rawClass.forEach(klass => {
            this._renderer.addClass(this._elementRef.nativeElement, klass);
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxDisplay(val) {
        if (this.fxDisplay !== val) {
            const /** @type {?} */ newClass = this._createDisplayClass(val, val);
            this._updateClass(newClass, this._fxDisplayClass);
            this._fxDisplayClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxDisplay() {
        return this._fxDisplay;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxFlow(val) {
        if (this.fxFlow !== val) {
            const /** @type {?} */ newClass = this._createFlowClass(val, val);
            this._updateClass(newClass, this._fxFlowClass);
            this._fxFlowClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxFlow() {
        return this._fxFlow;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxAlign(val) {
        if (this.fxAlign !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createAlignClass(val, val);
            this._updateClass(newClass, this._fxAlignClass);
            this._fxAlignClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxAlign() {
        return this._fxAlign;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxDirection(val) {
        if (this._fxDirection !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createDirectionClass(val, val);
            this._updateClass(newClass, this._fxDirectionClass);
            this._fxDirectionClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxDirection() {
        return this._fxDirection;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fxWrap(val) {
        if (this.fxWrap !== val) {
            /**
             * create Style
             */
            const /** @type {?} */ newClass = this._createWrapClass(val, val);
            this._updateClass(newClass, this._fxWrapClass);
            this._fxWrapClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get fxWrap() {
        return this._fxWrap;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this._fxDisplay) {
            /** Set default display */
            this.fxDisplay = null;
        }
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createDisplayClass(key, val, media) {
        this._checkVal(val);
        this._fxDisplay = val || 'flex';
        const /** @type {?} */ newKey = `k-fx-display:${key || this.fxDisplay}`;
        return this._coreTheme.setUpStyle(newKey, () => (val === 'inline' ? `display:inline-flex;` : `display:flex;`), media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createFlowClass(key, val, media) {
        this._checkVal(val);
        this._fxFlow = val || 'row wrap';
        const /** @type {?} */ newKey = `k-fx-flow:${key || this.fxFlow}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => `flex-flow:${this.fxFlow}`, media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createAlignClass(key, val, media) {
        this._checkVal(val);
        this._fxAlign = val || 'start stretch';
        const /** @type {?} */ newKey = `k-fx-align:${key || this.fxAlign}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => {
            const /** @type {?} */ arrayVal = this.fxAlign.split(' ');
            const /** @type {?} */ justifyContent = arrayVal[0] || 'start';
            const /** @type {?} */ alignItems = arrayVal[1] || 'stretch';
            const /** @type {?} */ alignContent = arrayVal[2];
            return (`justify-content:${__align[justifyContent]};` +
                `align-items:${__align[alignItems]};` +
                `align-content:${__align[alignContent || alignItems]};`);
        }, media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createDirectionClass(key, val, media) {
        this._fxDirection = val || 'row';
        const /** @type {?} */ newKey = `k-fx-direction:${key || this.fxDirection}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`flex-direction:${__align[this.fxDirection]};`), media);
    }
    /**
     * @param {?} key
     * @param {?} val
     * @param {?=} media
     * @return {?}
     */
    _createWrapClass(key, val, media) {
        this._fxWrap = val || 'wrap';
        const /** @type {?} */ newKey = `k-fx-wrap:${key || this.fxWrap}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => (`flex-wrap:${__align[this.fxWrap]};`), media);
    }
    /**
     * Check if value is string else emit error
     * @param {?} val
     * @return {?}
     */
    _checkVal(val) {
        if (isDevMode() && Array.isArray(val)) {
            console.warn(val, 'in', this._elementRef, `\n🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋🠋`);
            throw new Error(`value: '${val}' is not a string in`);
        }
    }
}
LyFlex.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[fxDisplay], [fxFlow], [fxDirection], [fxWrap], [fxAlign], [fx]',
                exportAs: 'lyFx'
            },] },
];
/** @nocollapse */
LyFlex.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] },] },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: CoreTheme, },
];
LyFlex.propDecorators = {
    "fx": [{ type: Input },],
    "fxDisplay": [{ type: Input },],
    "fxFlow": [{ type: Input },],
    "fxAlign": [{ type: Input },],
    "fxDirection": [{ type: Input },],
    "fxWrap": [{ type: Input },],
};
function LyFlex_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyFlex.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyFlex.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyFlex.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGF5b3V0LyIsInNvdXJjZXMiOlsiZmxleC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7U0FLakMsS0FBSztnQkFDRSxhQUFhO1lBQ2pCLFFBQVE7bUJBQ0QsZ0JBQWdCO1lBQ3ZCLFFBQVE7VUFDVixNQUFNO2lCQUNDLGNBQWM7V0FDcEIsWUFBWTtZQUNYLFFBQVE7U0FDWCxVQUFVO2FBQ04sZUFBZTtZQUNoQixjQUFjO1lBQ2QsY0FBYztjQUNaLFVBQVU7YUFDWCxTQUFTOzs7O0FBc0JyQixNQUFNLGFBQWMsU0FBUSxVQUFVOzs7Ozs7O0lBOEhwQyxZQUN3QyxjQUN0QyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixTQUFvQjtRQUVwQixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Ozs7O1FBakhHLEVBQUUsQ0FBQyxRQUFrQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUNyQjs7OztRQUdELHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOztRQUduQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFB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dUJBYUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBpc0Rldk1vZGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSwgVW5kZWZpbmVkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBMeUZsZXhCYXNlIH0gZnJvbSAnLi9mbGV4LWJhc2UnO1xuXG5lbnVtIF9fYWxpZ24ge1xuICBmbGV4LFxuICBpbmxpbmUsXG4gIHJvdyA9ICdyb3cnLFxuICByb3dSZXZlcnNlID0gJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uID0gJ2NvbHVtbicsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICBub3dyYXAgPSAnbm93cmFwJyxcbiAgd3JhcCA9ICd3cmFwJyxcbiAgd3JhcFJldmVyc2UgPSAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQgPSAnZmxleC1zdGFydCcsXG4gIGNlbnRlciA9ICdjZW50ZXInLFxuICBlbmQgPSAnZmxleC1lbmQnLFxuICBiZXR3ZWVuID0gJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQgPSAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5ID0gJ3NwYWNlLWV2ZW5seScsXG4gIGJhc2VsaW5lID0gJ2Jhc2VsaW5lJyxcbiAgc3RyZXRjaCA9ICdzdHJldGNoJyxcbn1cbi8qKiAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnICovXG5leHBvcnQgdHlwZSBGeERpcmVjdGlvbiA9IHN0cmluZyB8IG51bGw7XG4vKiogJ25vd3JhcCcgfCAnd3JhcCcgfCAnd3JhcC1yZXZlcnNlJyAqL1xuZXhwb3J0IHR5cGUgRnhXcmFwID0gc3RyaW5nIHwgbnVsbDtcbi8qKiBbRnhEaXJlY3Rpb24sIEZ4V3JhcF0gKi9cbmV4cG9ydCB0eXBlIEZ4RmxvdyA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZ4SnVzdGlmeUNvbnRlbnQgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seScgfCBudWxsO1xuZXhwb3J0IHR5cGUgRnhBbGlnbkl0ZW1zID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmFzZWxpbmUnIHwgJ3N0cmV0Y2gnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEZ4QWxpZ25Db250ZW50ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdzdHJldGNoJyB8IG51bGw7XG5leHBvcnQgdHlwZSBGeEFsaWduSXRlbXNBbmRDb250ZW50ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCBudWxsO1xuLyoqXG4gKiBbRnhKdXN0aWZ5Q29udGVudF0gfCBbRnhKdXN0aWZ5Q29udGVudCwgRnhBbGlnbkl0ZW1zQW5kQ29udGVudF0gfCBbRnhKdXN0aWZ5Q29udGVudCwgRnhBbGlnbkl0ZW1zLCBGeEFsaWduQ29udGVudF1cbiAqL1xuZXhwb3J0IHR5cGUgRnhBbGlnbiA9IHN0cmluZztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnhEaXNwbGF5XSwgW2Z4Rmxvd10sIFtmeERpcmVjdGlvbl0sIFtmeFdyYXBdLCBbZnhBbGlnbl0sIFtmeF0nLFxuICBleHBvcnRBczogJ2x5RngnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmxleCBleHRlbmRzIEx5RmxleEJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9meERpc3BsYXk6ICdmbGV4JyB8ICdpbmxpbmUnO1xuICBwcml2YXRlIF9meERpc3BsYXlDbGFzczogc3RyaW5nO1xuXG4gIC8qKiA8RnhEaXJlY3Rpb24+ICsgPEZ4V3JhcD4gKi9cbiAgcHJpdmF0ZSBfZnhGbG93OiBGeEZsb3c7XG4gIHByaXZhdGUgX2Z4Rmxvd0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhBbGlnbjogRnhBbGlnbjtcbiAgcHJpdmF0ZSBfZnhBbGlnbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhEaXJlY3Rpb246IEZ4RGlyZWN0aW9uO1xuICBwcml2YXRlIF9meERpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZnhXcmFwOiBGeFdyYXA7XG4gIHByaXZhdGUgX2Z4V3JhcENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF3Q2xhc3M6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmeCh2YWxBcnJheTogc3RyaW5nW10pIHtcbiAgICBpZiAoIXRoaXMuX3Jhd0NsYXNzKSB7XG4gICAgICB0aGlzLl9yYXdDbGFzcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKiBTYXZlIHByZXZpb3VzIGNsYXNzZXMgICovXG4gICAgY29uc3QgcHJldkNsYXNzZXMgPSB0aGlzLl9yYXdDbGFzcztcblxuICAgIC8qKiBDbGVhciByYXdDbGFzcyAqL1xuICAgIGlmICh0aGlzLl9yYXdDbGFzcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuICAgIHZhbEFycmF5LmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBuZXdDbGFzcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGtleS5zcGxpdCgnOicpO1xuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2Rpc3BsYXknKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlzcGxheUNsYXNzKGtleSwgdmFsdWVzWzFdIGFzIGFueSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdmbG93Jykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUZsb3dDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICdhbGlnbicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnbkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXJlY3Rpb25DbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9IGVsc2VcbiAgICAgIGlmICh2YWx1ZXNbMF0gPT09ICd3cmFwJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdyYXBDbGFzcyhrZXksIHZhbHVlc1sxXSwgdGhpcy5fbWVkaWFRdWVyaWVzWyh2YWx1ZXNbMl0pXSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yYXdDbGFzcy5wdXNoKG5ld0NsYXNzKTtcbiAgICB9KTtcbiAgICAvKiogRGVsZXRlIHByZXZpb3VzIGNsYXNzZXMgaWYgdGhleSBleGlzdCAqL1xuICAgIGlmIChwcmV2Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIHByZXZDbGFzc2VzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQWRkIG5ldyBjbGFzcyAqL1xuICAgIHRoaXMuX3Jhd0NsYXNzLmZvckVhY2goa2xhc3MgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBrbGFzcyk7XG4gICAgfSk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZ4RGlzcGxheSh2YWw6ICdmbGV4JyB8ICdpbmxpbmUnKSB7XG4gICAgaWYgKHRoaXMuZnhEaXNwbGF5ICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlzcGxheUNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meERpc3BsYXlDbGFzcyk7XG4gICAgICB0aGlzLl9meERpc3BsYXlDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhEaXNwbGF5KCkge1xuICAgIHJldHVybiB0aGlzLl9meERpc3BsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhGbG93KHZhbDogRnhGbG93KSB7XG4gICAgaWYgKHRoaXMuZnhGbG93ICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxvd0NsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEZsb3dDbGFzcyk7XG4gICAgICB0aGlzLl9meEZsb3dDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhGbG93KCkge1xuICAgIHJldHVybiB0aGlzLl9meEZsb3c7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhBbGlnbih2YWw6IEZ4QWxpZ24pIHtcbiAgICBpZiAodGhpcy5meEFsaWduICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQWxpZ25DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhBbGlnbkNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4QWxpZ25DbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhBbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhBbGlnbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeERpcmVjdGlvbih2YWw6IEZ4RGlyZWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuX2Z4RGlyZWN0aW9uICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRGlyZWN0aW9uQ2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RGlyZWN0aW9uQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhEaXJlY3Rpb25DbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhEaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RGlyZWN0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4V3JhcCh2YWw6IEZ4V3JhcCkge1xuICAgIGlmICh0aGlzLmZ4V3JhcCAhPT0gdmFsKSB7XG4gICAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdyYXBDbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhXcmFwQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhXcmFwQ2xhc3MgPSBuZXdDbGFzcztcbiAgICB9XG4gIH1cbiAgZ2V0IGZ4V3JhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhXcmFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBtZWRpYVF1ZXJpZXM6IGFueSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBjb3JlVGhlbWUsIG1lZGlhUXVlcmllcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuX2Z4RGlzcGxheSkge1xuICAgICAgLyoqIFNldCBkZWZhdWx0IGRpc3BsYXkgKi9cbiAgICAgIHRoaXMuZnhEaXNwbGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXNwbGF5Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogJ2ZsZXgnIHwgJ2lubGluZScsIG1lZGlhPzogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2tWYWwodmFsKTtcblxuICAgIHRoaXMuX2Z4RGlzcGxheSA9IHZhbCB8fCAnZmxleCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZGlzcGxheToke2tleSB8fCB0aGlzLmZ4RGlzcGxheX1gO1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIHZhbCA9PT0gJ2lubGluZScgPyBgZGlzcGxheTppbmxpbmUtZmxleDtgIDogYGRpc3BsYXk6ZmxleDtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRmxvd0NsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhGbG93ID0gdmFsIHx8ICdyb3cgd3JhcCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtZmxvdzoke2tleSB8fCB0aGlzLmZ4Rmxvd31gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gYGZsZXgtZmxvdzoke3RoaXMuZnhGbG93fWAsXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBbGlnbkNsYXNzKGtleTogc3RyaW5nLCB2YWw6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhBbGlnbiA9IHZhbCB8fCAnc3RhcnQgc3RyZXRjaCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtYWxpZ246JHtrZXkgfHwgdGhpcy5meEFsaWdufWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiAgdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheVZhbCA9IHRoaXMuZnhBbGlnbi5zcGxpdCgnICcpO1xuXG4gICAgICAgIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gYXJyYXlWYWxbMF0gfHwgJ3N0YXJ0JztcbiAgICAgICAgY29uc3QgYWxpZ25JdGVtcyA9IGFycmF5VmFsWzFdIHx8ICdzdHJldGNoJztcbiAgICAgICAgY29uc3QgYWxpZ25Db250ZW50ID0gYXJyYXlWYWxbMl07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYGp1c3RpZnktY29udGVudDoke19fYWxpZ25banVzdGlmeUNvbnRlbnRdfTtgICtcbiAgICAgICAgICBgYWxpZ24taXRlbXM6JHtfX2FsaWduW2FsaWduSXRlbXNdfTtgICtcbiAgICAgICAgICBgYWxpZ24tY29udGVudDoke19fYWxpZ25bYWxpZ25Db250ZW50IHx8IGFsaWduSXRlbXNdfTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRGlyZWN0aW9uQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogRnhEaXJlY3Rpb24sIG1lZGlhPzogc3RyaW5nKSB7XG5cbiAgICB0aGlzLl9meERpcmVjdGlvbiA9IHZhbCB8fCAncm93JztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1kaXJlY3Rpb246JHtrZXkgfHwgdGhpcy5meERpcmVjdGlvbn1gO1xuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleC1kaXJlY3Rpb246JHtfX2FsaWduW3RoaXMuZnhEaXJlY3Rpb25dfTtgXG4gICAgICApLFxuICAgICAgbWVkaWFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlV3JhcENsYXNzKGtleTogc3RyaW5nLCB2YWw6IEZ4V3JhcCwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9meFdyYXAgPSB2YWwgfHwgJ3dyYXAnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LXdyYXA6JHtrZXkgfHwgdGhpcy5meFdyYXB9YDtcblxuICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICByZXR1cm4gdGhpcy5fY29yZVRoZW1lLnNldFVwU3R5bGUobmV3S2V5LFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZmxleC13cmFwOiR7X19hbGlnblt0aGlzLmZ4V3JhcF19O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICAvKiogQ2hlY2sgaWYgdmFsdWUgaXMgc3RyaW5nIGVsc2UgZW1pdCBlcnJvciAqL1xuICBwcml2YXRlIF9jaGVja1ZhbCh2YWw6IGFueSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybih2YWwsICdpbicsIHRoaXMuX2VsZW1lbnRSZWYsIGBcXG7wn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi2ApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB2YWx1ZTogJyR7dmFsfScgaXMgbm90IGEgc3RyaW5nIGluYCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==