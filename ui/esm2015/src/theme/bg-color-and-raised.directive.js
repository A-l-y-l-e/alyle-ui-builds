/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Inject, Optional, Renderer2, ElementRef } from '@angular/core';
import { LY_GLOBAL_CONTRAST } from './contrast';
import { LyTheme2 } from './theme2.service';
import { toBoolean } from '../minimal';
import { shadowBuilder } from '../shadow';
import { LyShadowService } from './shadow.service';
export class LyBgColorAndRaised {
    /**
     * @param {?} theme
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} shadow
     * @param {?} contrast
     */
    constructor(theme, renderer, elementRef, shadow, contrast) {
        this.theme = theme;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.shadow = shadow;
        this.contrast = contrast;
        this.elevation = 3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set bg(value) {
        this._bg = value;
        // this._cssBg = this.theme.colorOf(value);
    }
    /**
     * @return {?}
     */
    get bg() {
        return this._bg;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
        // this._cssColor = this.theme.colorOf(value);
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set raised(val) { this._raisedState = toBoolean(val); }
    /**
     * @return {?}
     */
    get raised() { return this._raisedState; }
    /**
     * @return {?}
     */
    setAutoContrast() {
        this.contrast = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        let /** @type {?} */ newClassName;
        /**
         * ~
         */
        const /** @type {?} */ raisedĸey = this._raisedState === true ? 'raised' : '';
        let /** @type {?} */ key = '';
        if ((this.contrast && !this.color || this.color === 'auto') && this.bg) {
            key = `contrast${this.bg}${this._raisedState}${this.elevation}`;
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': this.contrastStyle.bind(this) });
        }
        else if (this.bg && this.color) {
            key = `b&ĸ${this.bg}${this.color}${this._raisedState}${this.elevation}`;
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': this.bgColorStyle.bind(this) });
        }
        else if (this.raised && !this.bg) {
            key = raisedĸey + this.color || '';
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': () => {
                    let /** @type {?} */ styles = `background-color:${this.theme.config["background"].primary};`;
                    let /** @type {?} */ color = '';
                    let /** @type {?} */ colorShadow;
                    if (this.color) {
                        color = this.theme.colorOf(this.color);
                        colorShadow = color;
                        styles += `color:${color};`;
                    }
                    else {
                        colorShadow = this.theme.config["colorShadow"];
                    }
                    if (this._raisedState) {
                        styles += shadowBuilder(this.elevation, colorShadow);
                    }
                    return styles;
                } });
        }
        else if (this.bg || this.color) {
            const /** @type {?} */ changeKey = this.bg ? ['bg', 'background', this.bg] : ['ĸ', 'color', this.color];
            const /** @type {?} */ color = changeKey[2];
            key = `${changeKey[0]}${color}${this._raisedState}${this.elevation}`;
            /** Create style */
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': () => {
                    const /** @type {?} */ _color = this.theme.colorOf(this.bg || this.color);
                    let /** @type {?} */ styles = `${changeKey[1]}:${_color};`;
                    if (this._raisedState) {
                        styles += shadowBuilder(this.elevation, _color);
                    }
                    return styles;
                } });
        }
        else {
            key = `raised${this._raisedState}${this.elevation}`;
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': () => {
                    if (this._raisedState) {
                        return shadowBuilder(this.elevation, this.theme.config["colorShadow"]);
                    }
                    else {
                        return shadowBuilder(0, this.theme.config["colorShadow"]);
                    }
                } });
        }
        this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, newClassName, this._currentClassName);
        this._currentClassName = newClassName;
    }
    /**
     * @return {?}
     */
    contrastStyle() {
        const /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
        this._color = this.theme.colorOf(`${this.bg}:contrast`);
        let /** @type {?} */ styles = `background:${cssBg};color:${this._color};`;
        if (this._raisedState) {
            styles += shadowBuilder(this.elevation, cssBg);
        }
        return styles;
    }
    /**
     * @return {?}
     */
    bgColorStyle() {
        const /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
        const /** @type {?} */ cssColor = this.theme.colorOf(this.color);
        let /** @type {?} */ styles = `background:${cssBg};color:${cssColor};`;
        if (this._raisedState) {
            styles += shadowBuilder(this.elevation, cssBg);
        }
        return styles;
    }
}
LyBgColorAndRaised.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[bg], [color], [raised]'
            },] },
];
/** @nocollapse */
LyBgColorAndRaised.ctorParameters = () => [
    { type: LyTheme2, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LyShadowService, },
    { type: undefined, decorators: [{ type: Inject, args: [LY_GLOBAL_CONTRAST,] }, { type: Optional },] },
];
LyBgColorAndRaised.propDecorators = {
    "bg": [{ type: Input },],
    "color": [{ type: Input },],
    "raised": [{ type: Input },],
    "elevation": [{ type: Input },],
};
function LyBgColorAndRaised_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyBgColorAndRaised.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyBgColorAndRaised.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyBgColorAndRaised.propDecorators;
    /** @type {?} */
    LyBgColorAndRaised.prototype._raisedState;
    /** @type {?} */
    LyBgColorAndRaised.prototype._currentClassName;
    /** @type {?} */
    LyBgColorAndRaised.prototype._bg;
    /** @type {?} */
    LyBgColorAndRaised.prototype._color;
    /** @type {?} */
    LyBgColorAndRaised.prototype.elevation;
    /** @type {?} */
    LyBgColorAndRaised.prototype.theme;
    /** @type {?} */
    LyBgColorAndRaised.prototype.renderer;
    /** @type {?} */
    LyBgColorAndRaised.prototype.elementRef;
    /** @type {?} */
    LyBgColorAndRaised.prototype.shadow;
    /** @type {?} */
    LyBgColorAndRaised.prototype.contrast;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVksS0FBSyxFQUE0QixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5ELE1BQU07Ozs7Ozs7O0lBOEJKLFlBQ1UsT0FDQSxVQUNBLFlBQ0EsUUFDd0M7UUFKeEMsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUNSLGVBQVUsR0FBVixVQUFVO1FBQ1YsV0FBTSxHQUFOLE1BQU07UUFDa0MsYUFBUSxHQUFSLFFBQVE7eUJBTnJDLENBQUM7S0FPakI7Ozs7O1FBOUJELEVBQUUsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHbkIsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ2pCOzs7OztRQUtHLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHdEIsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztRQUlZLE1BQU0sQ0FBQyxHQUFZ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SSxDQUFDLFlBQVksRUFBRTtZQUNyQixNQUFNLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7OztZQXhIakIsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUseUJBQXlCO2FBQ3BDOzs7O1lBVFEsUUFBUTtZQUZnRSxTQUFTO1lBQUUsVUFBVTtZQU03RixlQUFlOzRDQXlDbkIsTUFBTSxTQUFDLGtCQUFrQixjQUFHLFFBQVE7OzttQkE5QnRDLEtBQUs7c0JBV0wsS0FBSzt1QkFXTCxLQUFLOzBCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFNraXBTZWxmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBJbmplY3QsIE9wdGlvbmFsLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3QsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX0dMT0JBTF9DT05UUkFTVCB9IGZyb20gJy4vY29udHJhc3QnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwnO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL2FseWxlLWNvbmZpZy1zZXJ2aWNlJztcbmltcG9ydCB7IEx5U2hhZG93U2VydmljZSB9IGZyb20gJy4vc2hhZG93LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tiZ10sIFtjb2xvcl0sIFtyYWlzZWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUJnQ29sb3JBbmRSYWlzZWQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9yYWlzZWRTdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY3VycmVudENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9iZzogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgYmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JnID0gdmFsdWU7XG4gICAgLy8gdGhpcy5fY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodmFsdWUpO1xuICB9XG4gIGdldCBiZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmc7XG4gIH1cbiAgLy8gZ2V0IGNzc0JnKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9jc3NCZztcbiAgLy8gfVxuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgLy8gdGhpcy5fY3NzQ29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodmFsdWUpO1xuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cbiAgLy8gZ2V0IGNzc0NvbG9yKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9jc3NDb2xvcjtcbiAgLy8gfVxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWRTdGF0ZSA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWRTdGF0ZTsgfVxuICBASW5wdXQoKSBlbGV2YXRpb24gPSAzO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2hhZG93OiBMeVNoYWRvd1NlcnZpY2UsXG4gICAgQEluamVjdChMWV9HTE9CQUxfQ09OVFJBU1QpIEBPcHRpb25hbCgpIHByaXZhdGUgY29udHJhc3Q6IGJvb2xlYW5cbiAgKSB7IH1cblxuICBwdWJsaWMgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgIHRoaXMuY29udHJhc3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGxldCBuZXdDbGFzc05hbWU7XG4gICAgLyoqfiAqL1xuICAgIGNvbnN0IHJhaXNlZMS4ZXkgPSB0aGlzLl9yYWlzZWRTdGF0ZSA9PT0gdHJ1ZSA/ICdyYWlzZWQnIDogJyc7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICgodGhpcy5jb250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0bycpICYmIHRoaXMuYmcpIHtcbiAgICAgIGtleSA9IGBjb250cmFzdCR7dGhpcy5iZ30ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iZyAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICBrZXkgPSBgYibEuCR7dGhpcy5iZ30ke3RoaXMuY29sb3J9JHt0aGlzLl9yYWlzZWRTdGF0ZX0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogdGhpcy5iZ0NvbG9yU3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yYWlzZWQgJiYgIXRoaXMuYmcpIHtcbiAgICAgIGtleSA9IHJhaXNlZMS4ZXkgKyB0aGlzLmNvbG9yIHx8ICcnO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuYmFja2dyb3VuZC5wcmltYXJ5fTtgO1xuICAgICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAgICAgbGV0IGNvbG9yU2hhZG93O1xuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgIGNvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgICAgICAgIGNvbG9yU2hhZG93ID0gY29sb3I7XG4gICAgICAgICAgc3R5bGVzICs9IGBjb2xvcjoke2NvbG9yfTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbG9yU2hhZG93ID0gdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3c7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgc3R5bGVzICs9IHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIGNvbG9yU2hhZG93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgfX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iZyB8fCB0aGlzLmNvbG9yKSB7XG4gICAgICBjb25zdCBjaGFuZ2VLZXkgPSB0aGlzLmJnID8gWydiZycsICdiYWNrZ3JvdW5kJywgdGhpcy5iZ10gOiBbJ8S4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBfY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlcigwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgIH19KTtcbiAgICB9XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzTmFtZSwgdGhpcy5fY3VycmVudENsYXNzTmFtZSk7XG4gICAgdGhpcy5fY3VycmVudENsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZTtcbiAgfVxuICBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBwcml2YXRlIGJnQ29sb3JTdHlsZSgpIHtcbiAgICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICBjb25zdCBjc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHtjc3NDb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiJdfQ==