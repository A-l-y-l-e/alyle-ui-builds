/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** *
         * Save previous classes
          @type {?} */
        const prevClasses = this._rawClass;
        /** Clear rawClass */
        if (this._rawClass.length) {
            this._rawClass = [];
        }
        valArray.forEach(key => {
            /** @type {?} */
            let newClass;
            /** @type {?} */
            const values = key.split(':');
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
            /** @type {?} */
            const newClass = this._createDisplayClass(val, val);
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
            /** @type {?} */
            const newClass = this._createFlowClass(val, val);
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
            /** *
             * create Style
              @type {?} */
            const newClass = this._createAlignClass(val, val);
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
            /** *
             * create Style
              @type {?} */
            const newClass = this._createDirectionClass(val, val);
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
            /** *
             * create Style
              @type {?} */
            const newClass = this._createWrapClass(val, val);
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
        /** @type {?} */
        const newKey = `k-fx-display:${key || this.fxDisplay}`;
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
        /** @type {?} */
        const newKey = `k-fx-flow:${key || this.fxFlow}`;
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
        /** @type {?} */
        const newKey = `k-fx-align:${key || this.fxAlign}`;
        /** create Style */
        return this._coreTheme.setUpStyle(newKey, () => {
            /** @type {?} */
            const arrayVal = this.fxAlign.split(' ');
            /** @type {?} */
            const justifyContent = arrayVal[0] || 'start';
            /** @type {?} */
            const alignItems = arrayVal[1] || 'stretch';
            /** @type {?} */
            const alignContent = arrayVal[2];
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
        /** @type {?} */
        const newKey = `k-fx-direction:${key || this.fxDirection}`;
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
        /** @type {?} */
        const newKey = `k-fx-wrap:${key || this.fxWrap}`;
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
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: CoreTheme }
];
LyFlex.propDecorators = {
    fx: [{ type: Input }],
    fxDisplay: [{ type: Input }],
    fxFlow: [{ type: Input }],
    fxAlign: [{ type: Input }],
    fxDirection: [{ type: Input }],
    fxWrap: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGF5b3V0LyIsInNvdXJjZXMiOlsiZmxleC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0lBR3ZDLE9BQUk7SUFDSixTQUFNO0lBQ04sS0FBTSxLQUFLO0lBQ1gsWUFBYSxhQUFhO0lBQzFCLFFBQVMsUUFBUTtJQUNqQixlQUFnQixnQkFBZ0I7SUFDaEMsUUFBUyxRQUFRO0lBQ2pCLE1BQU8sTUFBTTtJQUNiLGFBQWMsY0FBYztJQUM1QixPQUFRLFlBQVk7SUFDcEIsUUFBUyxRQUFRO0lBQ2pCLEtBQU0sVUFBVTtJQUNoQixTQUFVLGVBQWU7SUFDekIsUUFBUyxjQUFjO0lBQ3ZCLFFBQVMsY0FBYztJQUN2QixVQUFXLFVBQVU7SUFDckIsU0FBVSxTQUFTOztnQkFoQm5CLElBQUk7Z0JBQ0osTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDUixNQUFNLGFBQWMsU0FBUSxVQUFVOzs7Ozs7O0lBOEhwQyxZQUN3QyxZQUFpQixFQUN2RCxVQUFzQixFQUN0QixRQUFtQixFQUNuQixTQUFvQjtRQUVwQixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBbEhELElBQ0ksRUFBRSxDQUFDLFFBQWtCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lB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OztZQWxPSixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxpRUFBaUU7Z0JBQzNFLFFBQVEsRUFBRSxNQUFNO2FBQ2pCOzs7OzRDQWdJSSxRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQTNLd0IsVUFBVTtZQUFyQixTQUFTO1lBQ3JELFNBQVM7OztpQkE4RGYsS0FBSzt3QkE0Q0wsS0FBSztxQkFZTCxLQUFLO3NCQVlMLEtBQUs7MEJBYUwsS0FBSztxQkFhTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIGlzRGV2TW9kZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lLCBVbmRlZmluZWQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IEx5RmxleEJhc2UgfSBmcm9tICcuL2ZsZXgtYmFzZSc7XG5cbmVudW0gX19hbGlnbiB7XG4gIGZsZXgsXG4gIGlubGluZSxcbiAgcm93ID0gJ3JvdycsXG4gIHJvd1JldmVyc2UgPSAncm93LXJldmVyc2UnLFxuICBjb2x1bW4gPSAnY29sdW1uJyxcbiAgY29sdW1uUmV2ZXJzZSA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gIG5vd3JhcCA9ICdub3dyYXAnLFxuICB3cmFwID0gJ3dyYXAnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgY2VudGVyID0gJ2NlbnRlcicsXG4gIGVuZCA9ICdmbGV4LWVuZCcsXG4gIGJldHdlZW4gPSAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZCA9ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHkgPSAnc3BhY2UtZXZlbmx5JyxcbiAgYmFzZWxpbmUgPSAnYmFzZWxpbmUnLFxuICBzdHJldGNoID0gJ3N0cmV0Y2gnLFxufVxuLyoqICdyb3cnIHwgJ3Jvd1JldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uUmV2ZXJzZScgKi9cbmV4cG9ydCB0eXBlIEZ4RGlyZWN0aW9uID0gc3RyaW5nIHwgbnVsbDtcbi8qKiAnbm93cmFwJyB8ICd3cmFwJyB8ICd3cmFwLXJldmVyc2UnICovXG5leHBvcnQgdHlwZSBGeFdyYXAgPSBzdHJpbmcgfCBudWxsO1xuLyoqIFtGeERpcmVjdGlvbiwgRnhXcmFwXSAqL1xuZXhwb3J0IHR5cGUgRnhGbG93ID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgRnhKdXN0aWZ5Q29udGVudCA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JyB8IG51bGw7XG5leHBvcnQgdHlwZSBGeEFsaWduSXRlbXMgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiYXNlbGluZScgfCAnc3RyZXRjaCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgRnhBbGlnbkNvbnRlbnQgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ3N0cmV0Y2gnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEZ4QWxpZ25JdGVtc0FuZENvbnRlbnQgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8IG51bGw7XG4vKipcbiAqIFtGeEp1c3RpZnlDb250ZW50XSB8IFtGeEp1c3RpZnlDb250ZW50LCBGeEFsaWduSXRlbXNBbmRDb250ZW50XSB8IFtGeEp1c3RpZnlDb250ZW50LCBGeEFsaWduSXRlbXMsIEZ4QWxpZ25Db250ZW50XVxuICovXG5leHBvcnQgdHlwZSBGeEFsaWduID0gc3RyaW5nO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmeERpc3BsYXldLCBbZnhGbG93XSwgW2Z4RGlyZWN0aW9uXSwgW2Z4V3JhcF0sIFtmeEFsaWduXSwgW2Z4XScsXG4gIGV4cG9ydEFzOiAnbHlGeCdcbn0pXG5leHBvcnQgY2xhc3MgTHlGbGV4IGV4dGVuZHMgTHlGbGV4QmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2Z4RGlzcGxheTogJ2ZsZXgnIHwgJ2lubGluZSc7XG4gIHByaXZhdGUgX2Z4RGlzcGxheUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIDxGeERpcmVjdGlvbj4gKyA8RnhXcmFwPiAqL1xuICBwcml2YXRlIF9meEZsb3c6IEZ4RmxvdztcbiAgcHJpdmF0ZSBfZnhGbG93Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meEFsaWduOiBGeEFsaWduO1xuICBwcml2YXRlIF9meEFsaWduQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meERpcmVjdGlvbjogRnhEaXJlY3Rpb247XG4gIHByaXZhdGUgX2Z4RGlyZWN0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9meFdyYXA6IEZ4V3JhcDtcbiAgcHJpdmF0ZSBfZnhXcmFwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXdDbGFzczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4KHZhbEFycmF5OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy5fcmF3Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3Jhd0NsYXNzID0gW107XG4gICAgfVxuXG4gICAgLyoqIFNhdmUgcHJldmlvdXMgY2xhc3NlcyAgKi9cbiAgICBjb25zdCBwcmV2Q2xhc3NlcyA9IHRoaXMuX3Jhd0NsYXNzO1xuXG4gICAgLyoqIENsZWFyIHJhd0NsYXNzICovXG4gICAgaWYgKHRoaXMuX3Jhd0NsYXNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmF3Q2xhc3MgPSBbXTtcbiAgICB9XG4gICAgdmFsQXJyYXkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IG5ld0NsYXNzO1xuICAgICAgY29uc3QgdmFsdWVzID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZGlzcGxheScpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXNwbGF5Q2xhc3Moa2V5LCB2YWx1ZXNbMV0gYXMgYW55LCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2Zsb3cnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRmxvd0NsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ2FsaWduJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFsaWduQ2xhc3Moa2V5LCB2YWx1ZXNbMV0sIHRoaXMuX21lZGlhUXVlcmllc1sodmFsdWVzWzJdKV0pO1xuICAgICAgfSBlbHNlXG4gICAgICBpZiAodmFsdWVzWzBdID09PSAnZGlyZWN0aW9uJykge1xuICAgICAgICBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZURpcmVjdGlvbkNsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH0gZWxzZVxuICAgICAgaWYgKHZhbHVlc1swXSA9PT0gJ3dyYXAnKSB7XG4gICAgICAgIG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV3JhcENsYXNzKGtleSwgdmFsdWVzWzFdLCB0aGlzLl9tZWRpYVF1ZXJpZXNbKHZhbHVlc1syXSldKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhd0NsYXNzLnB1c2gobmV3Q2xhc3MpO1xuICAgIH0pO1xuICAgIC8qKiBEZWxldGUgcHJldmlvdXMgY2xhc3NlcyBpZiB0aGV5IGV4aXN0ICovXG4gICAgaWYgKHByZXZDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgcHJldkNsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBZGQgbmV3IGNsYXNzICovXG4gICAgdGhpcy5fcmF3Q2xhc3MuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGtsYXNzKTtcbiAgICB9KTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZnhEaXNwbGF5KHZhbDogJ2ZsZXgnIHwgJ2lubGluZScpIHtcbiAgICBpZiAodGhpcy5meERpc3BsYXkgIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXNwbGF5Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4RGlzcGxheUNsYXNzKTtcbiAgICAgIHRoaXMuX2Z4RGlzcGxheUNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeERpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RGlzcGxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEZsb3codmFsOiBGeEZsb3cpIHtcbiAgICBpZiAodGhpcy5meEZsb3cgIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVGbG93Q2xhc3ModmFsLCB2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MobmV3Q2xhc3MsIHRoaXMuX2Z4Rmxvd0NsYXNzKTtcbiAgICAgIHRoaXMuX2Z4Rmxvd0NsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEZsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z4RmxvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmeEFsaWduKHZhbDogRnhBbGlnbikge1xuICAgIGlmICh0aGlzLmZ4QWxpZ24gIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBbGlnbkNsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meEFsaWduQ2xhc3MpO1xuICAgICAgdGhpcy5fZnhBbGlnbkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeEFsaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9meEFsaWduO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZ4RGlyZWN0aW9uKHZhbDogRnhEaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5fZnhEaXJlY3Rpb24gIT09IHZhbCkge1xuICAgICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVEaXJlY3Rpb25DbGFzcyh2YWwsIHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVDbGFzcyhuZXdDbGFzcywgdGhpcy5fZnhEaXJlY3Rpb25DbGFzcyk7XG4gICAgICB0aGlzLl9meERpcmVjdGlvbkNsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG4gIGdldCBmeERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZnhEaXJlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZnhXcmFwKHZhbDogRnhXcmFwKSB7XG4gICAgaWYgKHRoaXMuZnhXcmFwICE9PSB2YWwpIHtcbiAgICAgIC8qKiBjcmVhdGUgU3R5bGUgKi9cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV3JhcENsYXNzKHZhbCwgdmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKG5ld0NsYXNzLCB0aGlzLl9meFdyYXBDbGFzcyk7XG4gICAgICB0aGlzLl9meFdyYXBDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgZnhXcmFwKCkge1xuICAgIHJldHVybiB0aGlzLl9meFdyYXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIG1lZGlhUXVlcmllczogYW55LFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIGNvcmVUaGVtZSwgbWVkaWFRdWVyaWVzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5fZnhEaXNwbGF5KSB7XG4gICAgICAvKiogU2V0IGRlZmF1bHQgZGlzcGxheSAqL1xuICAgICAgdGhpcy5meERpc3BsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZURpc3BsYXlDbGFzcyhrZXk6IHN0cmluZywgdmFsOiAnZmxleCcgfCAnaW5saW5lJywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jaGVja1ZhbCh2YWwpO1xuXG4gICAgdGhpcy5fZnhEaXNwbGF5ID0gdmFsIHx8ICdmbGV4JztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1kaXNwbGF5OiR7a2V5IHx8IHRoaXMuZnhEaXNwbGF5fWA7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVUaGVtZS5zZXRVcFN0eWxlKG5ld0tleSxcbiAgICAgICgpID0+IChcbiAgICAgICAgdmFsID09PSAnaW5saW5lJyA/IGBkaXNwbGF5OmlubGluZS1mbGV4O2AgOiBgZGlzcGxheTpmbGV4O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbG93Q2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrVmFsKHZhbCk7XG5cbiAgICB0aGlzLl9meEZsb3cgPSB2YWwgfHwgJ3JvdyB3cmFwJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1mbG93OiR7a2V5IHx8IHRoaXMuZnhGbG93fWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiBgZmxleC1mbG93OiR7dGhpcy5meEZsb3d9YCxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFsaWduQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogc3RyaW5nLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2NoZWNrVmFsKHZhbCk7XG5cbiAgICB0aGlzLl9meEFsaWduID0gdmFsIHx8ICdzdGFydCBzdHJldGNoJztcbiAgICBjb25zdCBuZXdLZXkgPSBgay1meC1hbGlnbjoke2tleSB8fCB0aGlzLmZ4QWxpZ259YDtcbiAgICAvKiogY3JlYXRlIFN0eWxlICovXG4gICAgcmV0dXJuICB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsID0gdGhpcy5meEFsaWduLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgY29uc3QganVzdGlmeUNvbnRlbnQgPSBhcnJheVZhbFswXSB8fCAnc3RhcnQnO1xuICAgICAgICBjb25zdCBhbGlnbkl0ZW1zID0gYXJyYXlWYWxbMV0gfHwgJ3N0cmV0Y2gnO1xuICAgICAgICBjb25zdCBhbGlnbkNvbnRlbnQgPSBhcnJheVZhbFsyXTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBganVzdGlmeS1jb250ZW50OiR7X19hbGlnbltqdXN0aWZ5Q29udGVudF19O2AgK1xuICAgICAgICAgIGBhbGlnbi1pdGVtczoke19fYWxpZ25bYWxpZ25JdGVtc119O2AgK1xuICAgICAgICAgIGBhbGlnbi1jb250ZW50OiR7X19hbGlnblthbGlnbkNvbnRlbnQgfHwgYWxpZ25JdGVtc119O2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVEaXJlY3Rpb25DbGFzcyhrZXk6IHN0cmluZywgdmFsOiBGeERpcmVjdGlvbiwgbWVkaWE/OiBzdHJpbmcpIHtcblxuICAgIHRoaXMuX2Z4RGlyZWN0aW9uID0gdmFsIHx8ICdyb3cnO1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLWZ4LWRpcmVjdGlvbjoke2tleSB8fCB0aGlzLmZ4RGlyZWN0aW9ufWA7XG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4LWRpcmVjdGlvbjoke19fYWxpZ25bdGhpcy5meERpcmVjdGlvbl19O2BcbiAgICAgICksXG4gICAgICBtZWRpYVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVXcmFwQ2xhc3Moa2V5OiBzdHJpbmcsIHZhbDogRnhXcmFwLCBtZWRpYT86IHN0cmluZykge1xuICAgIHRoaXMuX2Z4V3JhcCA9IHZhbCB8fCAnd3JhcCc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGstZngtd3JhcDoke2tleSB8fCB0aGlzLmZ4V3JhcH1gO1xuXG4gICAgLyoqIGNyZWF0ZSBTdHlsZSAqL1xuICAgIHJldHVybiB0aGlzLl9jb3JlVGhlbWUuc2V0VXBTdHlsZShuZXdLZXksXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBmbGV4LXdyYXA6JHtfX2FsaWduW3RoaXMuZnhXcmFwXX07YFxuICAgICAgKSxcbiAgICAgIG1lZGlhXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBDaGVjayBpZiB2YWx1ZSBpcyBzdHJpbmcgZWxzZSBlbWl0IGVycm9yICovXG4gIHByaXZhdGUgX2NoZWNrVmFsKHZhbDogYW55KSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY29uc29sZS53YXJuKHZhbCwgJ2luJywgdGhpcy5fZWxlbWVudFJlZiwgYFxcbvCfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CL8J+gi/CfoIvwn6CLYCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHZhbHVlOiAnJHt2YWx9JyBpcyBub3QgYSBzdHJpbmcgaW5gKTtcbiAgICB9XG4gIH1cblxufVxuIl19