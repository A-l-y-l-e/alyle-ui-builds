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
export class LyCommon {
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
LyCommon.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[bg], [color], [raised], [disabled]'
            },] },
];
/** @nocollapse */
LyCommon.ctorParameters = () => [
    { type: LyTheme2, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LyShadowService, },
    { type: undefined, decorators: [{ type: Inject, args: [LY_GLOBAL_CONTRAST,] }, { type: Optional },] },
];
LyCommon.propDecorators = {
    "bg": [{ type: Input },],
    "color": [{ type: Input },],
    "raised": [{ type: Input },],
    "elevation": [{ type: Input },],
};
function LyCommon_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCommon.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCommon.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCommon.propDecorators;
    /** @type {?} */
    LyCommon.prototype._raisedState;
    /** @type {?} */
    LyCommon.prototype._currentClassName;
    /** @type {?} */
    LyCommon.prototype._bg;
    /** @type {?} */
    LyCommon.prototype._color;
    /** @type {?} */
    LyCommon.prototype.elevation;
    /** @type {?} */
    LyCommon.prototype.theme;
    /** @type {?} */
    LyCommon.prototype.renderer;
    /** @type {?} */
    LyCommon.prototype.elementRef;
    /** @type {?} */
    LyCommon.prototype.shadow;
    /** @type {?} */
    LyCommon.prototype.contrast;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5ELE1BQU07Ozs7Ozs7O0lBOEJKLFlBQ1UsT0FDQSxVQUNBLFlBQ0EsUUFDd0M7UUFKeEMsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUNSLGVBQVUsR0FBVixVQUFVO1FBQ1YsV0FBTSxHQUFOLE1BQU07UUFDa0MsYUFBUSxHQUFSLFFBQVE7eUJBTnJDLENBQUM7S0FPakI7Ozs7O1FBOUJELEVBQUUsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHbkIsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ2pCOzs7OztRQUtHLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHdEIsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztRQUlZLE1BQU0sQ0FBQyxHQUFZ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SSxDQUFDLFlBQVksRUFBRTtZQUNyQixNQUFNLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7OztZQXhIakIsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUscUNBQXFDO2FBQ2hEOzs7O1lBUlEsUUFBUTtZQUZzRCxTQUFTO1lBQUUsVUFBVTtZQUtuRixlQUFlOzRDQXlDbkIsTUFBTSxTQUFDLGtCQUFrQixjQUFHLFFBQVE7OzttQkE5QnRDLEtBQUs7c0JBV0wsS0FBSzt1QkFXTCxLQUFLOzBCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEluamVjdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfR0xPQkFMX0NPTlRSQVNUIH0gZnJvbSAnLi9jb250cmFzdCc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcbmltcG9ydCB7IEx5U2hhZG93U2VydmljZSB9IGZyb20gJy4vc2hhZG93LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tiZ10sIFtjb2xvcl0sIFtyYWlzZWRdLCBbZGlzYWJsZWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZFN0YXRlOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBiZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmcgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9jc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9iZztcbiAgfVxuICAvLyBnZXQgY3NzQmcoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2Nzc0JnO1xuICAvLyB9XG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9jc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICAvLyBnZXQgY3NzQ29sb3IoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2Nzc0NvbG9yO1xuICAvLyB9XG4gIEBJbnB1dCgpIHNldCByYWlzZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX3JhaXNlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZFN0YXRlOyB9XG4gIEBJbnB1dCgpIGVsZXZhdGlvbiA9IDM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzaGFkb3c6IEx5U2hhZG93U2VydmljZSxcbiAgICBASW5qZWN0KExZX0dMT0JBTF9DT05UUkFTVCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb250cmFzdDogYm9vbGVhblxuICApIHsgfVxuXG4gIHB1YmxpYyBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgdGhpcy5jb250cmFzdCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgbGV0IG5ld0NsYXNzTmFtZTtcbiAgICAvKip+ICovXG4gICAgY29uc3QgcmFpc2VkxLhleSA9IHRoaXMuX3JhaXNlZFN0YXRlID09PSB0cnVlID8gJ3JhaXNlZCcgOiAnJztcbiAgICBsZXQga2V5ID0gJyc7XG4gICAgaWYgKCh0aGlzLmNvbnRyYXN0ICYmICF0aGlzLmNvbG9yIHx8IHRoaXMuY29sb3IgPT09ICdhdXRvJykgJiYgdGhpcy5iZykge1xuICAgICAga2V5ID0gYGNvbnRyYXN0JHt0aGlzLmJnfSR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6IHRoaXMuY29udHJhc3RTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJnICYmIHRoaXMuY29sb3IpIHtcbiAgICAgIGtleSA9IGBiJsS4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgICAga2V5ID0gcmFpc2VkxLhleSArIHRoaXMuY29sb3IgfHwgJyc7XG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5iYWNrZ3JvdW5kLnByaW1hcnl9O2A7XG4gICAgICAgIGxldCBjb2xvciA9ICcnO1xuICAgICAgICBsZXQgY29sb3JTaGFkb3c7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5jb2xvcik7XG4gICAgICAgICAgY29sb3JTaGFkb3cgPSBjb2xvcjtcbiAgICAgICAgICBzdHlsZXMgKz0gYGNvbG9yOiR7Y29sb3J9O2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3JTaGFkb3cgPSB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiwgY29sb3JTaGFkb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJnIHx8IHRoaXMuY29sb3IpIHtcbiAgICAgIGNvbnN0IGNoYW5nZUtleSA9IHRoaXMuYmcgPyBbJ2JnJywgJ2JhY2tncm91bmQnLCB0aGlzLmJnXSA6IFsnxLgnLCAnY29sb3InLCB0aGlzLmNvbG9yXTtcbiAgICAgIGNvbnN0IGNvbG9yID0gY2hhbmdlS2V5WzJdO1xuICAgICAga2V5ID0gYCR7Y2hhbmdlS2V5WzBdfSR7Y29sb3J9JHt0aGlzLl9yYWlzZWRTdGF0ZX0ke3RoaXMuZWxldmF0aW9ufWA7XG5cbiAgICAgIC8qKiBDcmVhdGUgc3R5bGUgKi9cbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnIHx8IHRoaXMuY29sb3IpO1xuICAgICAgICBsZXQgc3R5bGVzID0gYCR7Y2hhbmdlS2V5WzFdfToke19jb2xvcn07YDtcbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgc3R5bGVzICs9IHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIF9jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH19KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBgcmFpc2VkJHt0aGlzLl9yYWlzZWRTdGF0ZX0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzaGFkb3dCdWlsZGVyKDAsIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAgICAgfVxuICAgICAgfX0pO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3NOYW1lLCB0aGlzLl9jdXJyZW50Q2xhc3NOYW1lKTtcbiAgICB0aGlzLl9jdXJyZW50Q2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lO1xuICB9XG4gIHByaXZhdGUgY29udHJhc3RTdHlsZSgpIHtcbiAgICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICB0aGlzLl9jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZihgJHt0aGlzLmJnfTpjb250cmFzdGApO1xuICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke3RoaXMuX2NvbG9yfTtgO1xuICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgc3R5bGVzICs9IHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIGNzc0JnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHByaXZhdGUgYmdDb2xvclN0eWxlKCkge1xuICAgIGNvbnN0IGNzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAgIGNvbnN0IGNzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke2Nzc0NvbG9yfTtgO1xuICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgc3R5bGVzICs9IHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIGNzc0JnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxufVxuIl19