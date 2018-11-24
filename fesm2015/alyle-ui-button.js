import { LY_COMMON_STYLES, Platform, toBoolean, LyTheme2, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinFlat, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState, LyCommonModule } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = (theme) => {
    /** @type {?} */
    const typography = theme.typography;
    /** @type {?} */
    const _styles = ({
        root: Object.assign({ fontFamily: typography.fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: `rgba(0, 0, 0, 0)`, border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', '&::-moz-focus-inner, &::-moz-focus-inner': {
                border: 0
            } }, typography.lyTyp.button, { '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0 }), '&{onFocusByKeyboard}::after, &:hover::after': {
                background: 'currentColor',
                opacity: .13,
                borderRadius: 'inherit'
            } }),
        content: {
            padding: 0,
            display: 'flex',
            justifyContent: 'inherit',
            alignItems: 'inherit',
            alignContent: 'inherit',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box'
        },
        onFocusByKeyboard: {},
        animations: {
            '&,&::after': {
                transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms'
            }
        }
    });
    if (typeof _styles.root.fontSize === 'number') {
        _styles.root.fontSize = (/** @type {?} */ (theme.pxToRem(_styles.root.fontSize)));
    }
    if (typeof _styles.root.letterSpacing === 'number') {
        _styles.root.letterSpacing = (/** @type {?} */ (theme.pxToRem(_styles.root.letterSpacing)));
    }
    return _styles;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_SIZE = 'medium';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
const ɵ0 = (theme) => ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.lyTyp.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '48px'
}), ɵ1 = (theme) => ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.lyTyp.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '96px'
});
/**
 * @ignore
 * @type {?}
 */
const Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '64px'
    }),
    large: ɵ1
};
/**
 * \@docs-private
 */
class LyButtonBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase))))))))));
class LyButton extends LyButtonMixinBase {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _ngZone
     * @param {?} _rippleService
     * @param {?} _focusState
     */
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        super(_theme, _ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this._rippleService = _rippleService;
        this._focusState = _focusState;
        /**
         * Style
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._rippleSensitive = false;
        this.setAutoContrast();
        this._triggerElement = _el;
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
        if (Platform.FIREFOX) {
            this._theme.addStyle('button-ff', {
                '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                    border: 0
                }
            }, this._el.nativeElement, undefined, STYLE_PRIORITY);
        }
    }
    /**
     * @ignore
     * @return {?}
     */
    get rippleSensitive() {
        return this._rippleSensitive;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rippleSensitive(value) {
        /** @type {?} */
        const newVal = this._rippleSensitive = toBoolean(value);
        this._rippleConfig.sensitive = newVal;
    }
    /**
     * Button size
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this._theme.addStyle(`lyButton.size:${this.size}`, Size[(/** @type {?} */ (this.size))], this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
        }
    }
    /**
     * Button appearance
     * @return {?}
     */
    get appearance() { return this._appearance; }
    /**
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        if (val !== this.appearance) {
            if (val === 'icon' && !this._rippleConfig.centered) {
                this._rippleConfig.centered = true;
            }
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle(`lyButton.appearance:${val}`, (theme) => (theme.button.appearance[val]), this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        /** @type {?} */
        const focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe((event) => {
                if (this._onFocusByKeyboardState === true) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    this._onFocusByKeyboardState = false;
                }
                if (event.by === 'keyboard') {
                    if (event.event.type === 'focus') {
                        this._onFocusByKeyboardState = true;
                        this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    }
                }
            });
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this._el.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    }
}
LyButton.decorators = [
    { type: Component, args: [{
                selector: '[ly-button]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<span [className]=\"classes.content\">\n  <ng-content></ng-content>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
                inputs: [
                    'bg',
                    'flat',
                    'color',
                    'raised',
                    'disabled',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple'
                ]
            }] }
];
/** @nocollapse */
LyButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState }
];
LyButton.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    rippleSensitive: [{ type: Input, args: ['sensitive',] }],
    size: [{ type: Input }],
    appearance: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyButtonModule {
}
LyButtonModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyButton, LyCommonModule],
                declarations: [LyButton]
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

export { LyButtonBase, LyButtonMixinBase, LyButton, LyButtonModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVZhcmlhYmxlcywgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5O1xuICBjb25zdCBfc3R5bGVzID0gKHtcbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiB0eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwgJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgYm9yZGVyOiAwXG4gICAgICB9LFxuICAgICAgLi4udHlwb2dyYXBoeS5seVR5cC5idXR0b24sXG4gICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sXG4gICAgICAnJntvbkZvY3VzQnlLZXlib2FyZH06OmFmdGVyLCAmOmhvdmVyOjphZnRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH0sXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IHsgfSxcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAnJiwmOjphZnRlcic6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcywgYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXMnXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QuZm9udFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QuZm9udFNpemUpIGFzIGFueTtcbiAgfVxuICBpZiAodHlwZW9mIF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nID09PSAnbnVtYmVyJykge1xuICAgIF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZykgYXMgYW55O1xuICB9XG4gIHJldHVybiBfc3R5bGVzO1xufTtcbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkJnLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpbkZsYXQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeUZvY3VzU3RhdGVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxudHlwZSBMeUJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgU2l6ZTogUmVjb3JkPEx5QnV0dG9uU2l6ZSwgYW55PiA9IHtcbiAgc21hbGw6ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5Lmx5VHlwLmJ1dHRvbi5mb250U2l6ZSAtIDEpLFxuICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgIG1pbldpZHRoOiAnNDhweCdcbiAgfSksXG4gIG1lZGl1bTogKHtcbiAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnXG4gIH0pLFxuICBsYXJnZTogKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5Lmx5VHlwLmJ1dHRvbi5mb250U2l6ZSArIDEpLFxuICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgIG1pbldpZHRoOiAnOTZweCdcbiAgfSlcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlCdXR0b25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlCdXR0b25CYXNlKSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24uaHRtbCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gZXh0ZW5kcyBMeUJ1dHRvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3R5bGVcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zaXplOiBMeUJ1dHRvblNpemU7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnLnNlbnNpdGl2ZSA9IG5ld1ZhbDtcbiAgfVxuXG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2l6ZSgpOiBMeUJ1dHRvblNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogTHlCdXR0b25TaXplKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi5zaXplOiR7dGhpcy5zaXplfWAsXG4gICAgICAgIFNpemVbdGhpcy5zaXplIGFzIGFueV0sXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NpemVDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEJ1dHRvbiBhcHBlYXJhbmNlICovXG4gIEBJbnB1dCgpXG4gIGdldCBhcHBlYXJhbmNlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9hcHBlYXJhbmNlOyB9XG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICBpZiAodmFsID09PSAnaWNvbicgJiYgIXRoaXMuX3JpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgICB0aGlzLl9yaXBwbGVDb25maWcuY2VudGVyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAodGhlbWUuYnV0dG9uLmFwcGVhcmFuY2VbdmFsXSksXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBfbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAoUGxhdGZvcm0uRklSRUZPWCkge1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2J1dHRvbi1mZicsIHtcbiAgICAgICAgJyY6Oi1tb3otZm9jdXMtaW5uZXIsJjo6LW1vei1mb2N1cy1pbm5lciwmOjotbW96LWZvY3VzLWlubmVyLCY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICAgICAgYm9yZGVyOiAwXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuXG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2VsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmJ5ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmV2ZW50LnR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlCdXR0b24sIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBLE1BQWEsTUFBTSxHQUFHLENBQUMsS0FBcUI7O1VBQ3BDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVTs7VUFDN0IsT0FBTyxJQUFJO1FBQ2YsSUFBSSxrQkFDRixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUN6Qiw2QkFBNkIsRUFBRSxhQUFhLEVBQzVDLGVBQWUsRUFBRSxrQkFBa0IsRUFDbkMsTUFBTSxFQUFFLENBQUMsRUFDVCxPQUFPLEVBQUUsT0FBTyxFQUNoQixpQkFBaUIsRUFBRSxNQUFNLEVBQ3pCLE1BQU0sRUFBRSxDQUFDLEVBQ1QsWUFBWSxFQUFFLEtBQUssRUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFDZixVQUFVLEVBQUUsR0FBRyxFQUNmLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLGNBQWMsRUFBRSxRQUFRLEVBQ3hCLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLFlBQVksRUFBRSxRQUFRLEVBQ3RCLE9BQU8sRUFBRSxhQUFhLEVBQ3RCLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLHFCQUFxQixFQUFFLE1BQU0sRUFDN0Isa0JBQWtCLEVBQUUsTUFBTSxFQUMxQixpQkFBaUIsRUFBRSxNQUFNLEVBQ3pCLFVBQVUsRUFBRSxNQUFNLEVBQ2xCLGtCQUFrQixFQUFFLE1BQU0sRUFDMUIsOEJBQThCLEVBQUUsTUFBTSxFQUN0QywwQ0FBMEMsRUFBRTtnQkFDMUMsTUFBTSxFQUFFLENBQUM7YUFDVixJQUNFLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUMxQixVQUFVLGtCQUNSLE9BQU8sRUFBRSxJQUFJLElBQ1YsZ0JBQWdCLENBQUMsSUFBSSxJQUN4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