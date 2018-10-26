import { __assign } from 'tslib';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon, LyCommonModule } from '@alyle/ui';
import { Ripple, LyRippleService, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var styles = function (theme) {
    var _a = theme.typography, button = _a.button, fontFamily = _a.fontFamily;
    /** @type {?} */
    var _styles = ({
        root: __assign({ fontFamily: fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: "rgba(0, 0, 0, 0)", border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms', '&::-moz-focus-inner, &::-moz-focus-inner': {
                border: 0
            } }, button),
        content: {
            padding: 0,
            display: 'flex',
            justifyContent: 'inherit',
            alignItems: 'inherit',
            alignContent: 'inherit',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
        }
    });
    if (typeof _styles.root.fontSize === 'number') {
        _styles.root.fontSize = theme.pxToRem(_styles.root.fontSize);
    }
    if (typeof _styles.root.letterSpacing === 'number') {
        _styles.root.letterSpacing = theme.pxToRem(_styles.root.letterSpacing);
    }
    return _styles;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_SIZE = 'medium';
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
var ɵ0 = function (theme) { return ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '64px'
}); }, ɵ1 = function (theme) { return ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '112px'
}); };
/** *
 * @ignore
  @type {?} */
var Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '88px'
    }),
    large: ɵ1
};
var LyButton = /** @class */ (function () {
    function LyButton(_elementRef, _renderer, _theme, _ngZone, _rippleService, bgAndColor) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._theme = _theme;
        this._ngZone = _ngZone;
        this._rippleService = _rippleService;
        /**
         * Style
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._rippleSensitive = false;
        this._disableRipple = null;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        /** @ignore */
        get: /**
         * @ignore
         * @return {?}
         */
        function () {
            return this._rippleSensitive;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._rippleSensitive = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "disableRipple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disableRipple;
        },
        /** Whether ripples are disabled. */
        set: /**
         * Whether ripples are disabled.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (Platform.isBrowser && val !== this._disableRipple) {
                /** @type {?} */
                var newVal = this._disableRipple = toBoolean(val);
                // remove previous ripple if exist
                this.ngOnDestroy();
                if (!newVal) {
                    /** @type {?} */
                    var rippleContainer = this._rippleContainer.nativeElement;
                    /** @type {?} */
                    var triggerElement = this._elementRef.nativeElement;
                    this._ripple = new Ripple(this._theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "size", {
        /** Button size */
        get: /**
         * Button size
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.size) {
                this._size = val;
                this._sizeClass = this._theme.addStyle("lyButton-size:" + this.size, Size[/** @type {?} */ (this.size)], this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            if (this._ripple) {
                this._ripple.removeEvents();
                this._ripple = null;
            }
        }
    };
    LyButton.decorators = [
        { type: Component, args: [{
                    selector: '[ly-button]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n  <span [className]=\"classes.content\">\n    <ng-content></ng-content>\n  </span>\n  <div #rippleContainer [className]=\"_rippleService.classes.container\"></div>\n  ",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    LyButton.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        rippleSensitive: [{ type: Input, args: ['sensitive',] }],
        disableRipple: [{ type: Input }],
        size: [{ type: Input }]
    };
    return LyButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyButtonModule = /** @class */ (function () {
    function LyButtonModule() {
    }
    LyButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyRippleModule, LyCommonModule],
                    exports: [LyButton, LyCommonModule],
                    declarations: [LyButton]
                },] }
    ];
    return LyButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LyButton, LyButtonModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+IHtcbiAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcycsXG4gICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwgJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgYm9yZGVyOiAwXG4gICAgICB9LFxuICAgICAgLi4uYnV0dG9uXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgfVxuICB9KTtcbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QuZm9udFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QuZm9udFNpemUpO1xuICB9XG4gIGlmICh0eXBlb2YgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nKTtcbiAgfVxuICByZXR1cm4gX3N0eWxlcztcbn07XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUNvbW1vblxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxudHlwZSBMeUJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgU2l6ZTogUmVjb3JkPEx5QnV0dG9uU2l6ZSwgYW55PiA9IHtcbiAgc21hbGw6IHRoZW1lID0+ICh7XG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSAtIDEpLFxuICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgIG1pbldpZHRoOiAnNjRweCdcbiAgfSksXG4gIG1lZGl1bTogKHtcbiAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICBtaW5XaWR0aDogJzg4cHgnXG4gIH0pLFxuICBsYXJnZTogKHRoZW1lKSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgbWluV2lkdGg6ICcxMTJweCdcbiAgfSlcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuIFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIDxkaXYgI3JpcHBsZUNvbnRhaW5lciBbY2xhc3NOYW1lXT1cIl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMuY29udGFpbmVyXCI+PC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBMeUJ1dHRvblNpemU7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNhYmxlUmlwcGxlOiBib29sZWFuID0gbnVsbDtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHJpcHBsZXMgYXJlIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVJpcHBsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHZhbCAhPT0gdGhpcy5fZGlzYWJsZVJpcHBsZSkge1xuICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVJpcHBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdFxuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgICAgLy8gYWRkIHJpcHBsZVxuICAgICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3JpcHBsZVNlcnZpY2UuY2xhc3NlcywgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlUmlwcGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlO1xuICB9XG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2l6ZSgpOiBMeUJ1dHRvblNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogTHlCdXR0b25TaXplKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi1zaXplOiR7dGhpcy5zaXplfWAsXG4gICAgICAgIFNpemVbdGhpcy5zaXplIGFzIGFueV0sXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMuX3JpcHBsZSkge1xuICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3JpcHBsZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEFwcFxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJ1dHRvbiwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQWEsTUFBTSxHQUFH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