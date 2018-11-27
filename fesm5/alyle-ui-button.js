import { __extends, __assign } from 'tslib';
import { LY_COMMON_STYLES, Platform, toBoolean, LyTheme2, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinFlat, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState, LyCommonModule } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var styles = function (theme) {
    /** @type {?} */
    var typography = theme.typography;
    /** @type {?} */
    var _styles = ({
        root: __assign({ fontFamily: typography.fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: "rgba(0, 0, 0, 0)", border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', '&::-moz-focus-inner, &::-moz-focus-inner': {
                border: 0
            } }, typography.lyTyp.button, { '&::after': __assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &:hover::after': {
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
var DEFAULT_SIZE = 'medium';
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
var ɵ0 = function (theme) { return ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.lyTyp.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '48px'
}); }, ɵ1 = function (theme) { return ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.lyTyp.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '96px'
}); };
/**
 * @ignore
 * @type {?}
 */
var Size = {
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
var  /**
 * \@docs-private
 */
LyButtonBase = /** @class */ (function () {
    function LyButtonBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyButtonBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase))))))))));
var LyButton = /** @class */ (function (_super) {
    __extends(LyButton, _super);
    function LyButton(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._rippleService = _rippleService;
        _this._focusState = _focusState;
        /**
         * Style
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this._rippleSensitive = false;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        _this._renderer.addClass(_this._el.nativeElement, _this.classes.root);
        if (Platform.FIREFOX) {
            _this._theme.addStyle('button-ff', {
                '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                    border: 0
                }
            }, _this._el.nativeElement, undefined, STYLE_PRIORITY);
        }
        return _this;
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
            /** @type {?} */
            var newVal = this._rippleSensitive = toBoolean(value);
            this._rippleConfig.sensitive = newVal;
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
                this._sizeClass = this._theme.addStyle("lyButton.size:" + this.size, Size[(/** @type {?} */ (this.size))], this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "appearance", {
        /** Button appearance */
        get: /**
         * Button appearance
         * @return {?}
         */
        function () { return this._appearance; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.appearance) {
                if (val === 'icon' && !this._rippleConfig.centered) {
                    this._rippleConfig.centered = true;
                }
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("lyButton.appearance:" + val, function (theme) { return (theme.button.appearance[val]); }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        /** @type {?} */
        var focusState = this._focusState.listen(this._el);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (_this._onFocusByKeyboardState === true) {
                    _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    _this._onFocusByKeyboardState = false;
                }
                if (event.by === 'keyboard') {
                    if (event.event.type === 'focus') {
                        _this._onFocusByKeyboardState = true;
                        _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    }
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._el.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    };
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
    LyButton.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState }
    ]; };
    LyButton.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        rippleSensitive: [{ type: Input, args: ['sensitive',] }],
        size: [{ type: Input }],
        appearance: [{ type: Input }]
    };
    return LyButton;
}(LyButtonMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyButtonModule = /** @class */ (function () {
    function LyButtonModule() {
    }
    LyButtonModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyButton, LyCommonModule],
                    declarations: [LyButton]
                },] }
    ];
    return LyButtonModule;
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

export { LyButtonBase, LyButtonMixinBase, LyButton, LyButtonModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVZhcmlhYmxlcywgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IHR5cG9ncmFwaHkgPSB0aGVtZS50eXBvZ3JhcGh5O1xuICBjb25zdCBfc3R5bGVzID0gKHtcbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiB0eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwgJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgYm9yZGVyOiAwXG4gICAgICB9LFxuICAgICAgLi4udHlwb2dyYXBoeS5seVR5cC5idXR0b24sXG4gICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcme29uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsICY6aG92ZXI6OmFmdGVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgfSxcbiAgICBvbkZvY3VzQnlLZXlib2FyZDogeyB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmLCY6OmFmdGVyJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAodHlwZW9mIF9zdHlsZXMucm9vdC5mb250U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICBfc3R5bGVzLnJvb3QuZm9udFNpemUgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5mb250U2l6ZSkgYXMgYW55O1xuICB9XG4gIGlmICh0eXBlb2YgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nKSBhcyBhbnk7XG4gIH1cbiAgcmV0dXJuIF9zdHlsZXM7XG59O1xuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluQ29sb3IsXG4gIG1peGluQmcsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluRmxhdCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluUmFpc2VkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZVxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG50eXBlIEx5QnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbi8qKiBAaWdub3JlICovXG5jb25zdCBTaXplOiBSZWNvcmQ8THlCdXR0b25TaXplLCBhbnk+ID0ge1xuICBzbWFsbDogKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgbWluV2lkdGg6ICc0OHB4J1xuICB9KSxcbiAgbWVkaXVtOiAoe1xuICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIG1pbldpZHRoOiAnNjRweCdcbiAgfSksXG4gIGxhcmdlOiAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkubHlUeXAuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgbWluV2lkdGg6ICc5NnB4J1xuICB9KVxufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCdXR0b25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluRmxhdChcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUJ1dHRvbkJhc2UpKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBleHRlbmRzIEx5QnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3NpemU6IEx5QnV0dG9uU2l6ZTtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcuc2Vuc2l0aXZlID0gbmV3VmFsO1xuICB9XG5cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IEx5QnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsOiBMeUJ1dHRvblNpemUpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLnNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemUgYXMgYW55XSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQnV0dG9uIGFwcGVhcmFuY2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7IH1cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIGlmICh2YWwgPT09ICdpY29uJyAmJiAhdGhpcy5fcmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZUNvbmZpZy5jZW50ZXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh0aGVtZS5idXR0b24uYXBwZWFyYW5jZVt2YWxdKSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIF9uZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmIChQbGF0Zm9ybS5GSVJFRk9YKSB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnYnV0dG9uLWZmJywge1xuICAgICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwmOjotbW96LWZvY3VzLWlubmVyLCY6Oi1tb3otZm9jdXMtaW5uZXIsJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgICBib3JkZXI6IDBcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUJ1dHRvbiwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLElBQWEsTUFBTSxHQUFHLFVBQUMsS0FBcUI7O1FBQ3BDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVTs7UUFDN0IsT0FBTyxJQUFJO1FBQ2YsSUFBSSxhQUNGLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3pCLDZCQUE2QixFQUFFLGFBQWEsRUFDNUMsZUFBZSxFQUFFLGtCQUFrQixFQUNuQyxNQUFNLEVBQUUsQ0FBQyxFQUNULE9BQU8sRUFBRSxPQUFPLEVBQ2hCLGlCQUFpQixFQUFFLE1BQU0sRUFDekIsTUFBTSxFQUFFLENBQUMsRUFDVCxZQUFZLEVBQUUsS0FBSyxFQUNuQixPQUFPLEVBQUUsTUFBTSxFQUNmLFVBQVUsRUFBRSxHQUFHLEVBQ2YsU0FBUyxFQUFFLFlBQVksRUFDdkIsUUFBUSxFQUFFLFVBQVUsRUFDcEIsY0FBYyxFQUFFLFFBQVEsRUFDeEIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsWUFBWSxFQUFFLFFBQVEsRUFDdEIsT0FBTyxFQUFFLGFBQWEsRUFDdEIsTUFBTSxFQUFFLFNBQVMsRUFDakIscUJBQXFCLEVBQUUsTUFBTSxFQUM3QixrQkFBa0IsRUFBRSxNQUFNLEVBQzFCLGlCQUFpQixFQUFFLE1BQU0sRUFDekIsVUFBVSxFQUFFLE1BQU0sRUFDbEIsa0JBQWtCLEVBQUUsTUFBTSxFQUMxQiw4QkFBOEIsRUFBRSxNQUFNLEVBQ3RDLDBDQUEwQyxFQUFFO2dCQUMxQyxNQUFNLEVBQUUsQ0FBQzthQUNWLElBQ0UsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQzFCLFVBQVUsYUFDUixPQUFPLEVBQUUsSUFBSSxJQUNWLGdCQUFnQixDQUFDLElBQUksSUFDeEIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLFVBQVUsRUFBRSxhQUFhLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLEVBQ1YsYUFBYSxFQUFFLE1BQU0sS0FFdkIsNkNBQTZDLEVBQUU7Z0JBQzdDLFVBQVUsRUFBRSxjQUFjO2dCQUMxQixPQUFPLEVBQUUsR0FBRztnQkFDWixZQUFZLEVBQUUsU0FBUzthQUN4QixHQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsWUFBWTtTQUN4QjtRQUNELGlCQUFpQixFQUFFLEVBQUc7UUFDdEIsVUFBVSxFQUFFO1lBQ1YsWUFBWSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxtR0FBbUc7YUFDaEg7U0FDRjtLQUNGLENBQUM7SUFDRixJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxzQkFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQU8sQ0FBQztLQUNyRTtJQUNELElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUU7UUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLHNCQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBTyxDQUFDO0tBQy9FO0lBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDaEI7Ozs7Ozs7SUN6Q0ssWUFBWSxHQUFHLFFBQVE7O0lBQ3ZCLHNCQUFzQixHQUFHLEtBQUs7O0lBQzlCLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FNaEIsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDakMsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDbkUsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLE1BQU07Q0FDakIsSUFBQyxPQU1LLFVBQUMsS0FBcUIsSUFBSyxRQUFDO0lBQ2pDLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0NBQ2pCLElBQUM7Ozs7O0lBakJFLElBQUksR0FBOEI7SUFDdEMsS0FBSyxJQUtIO0lBQ0YsTUFBTSxHQUFHO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLE1BQU07S0FDakIsQ0FBQztJQUNGLEtBQUssSUFLSDtDQUNIOzs7O0FBR0Q7Ozs7SUFDRSxzQkFDUyxNQUFnQixFQUNoQixPQUFlO1FBRGYsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO0tBQ25CO0lBQ1AsbUJBQUM7Q0FBQSxJQUFBOzs7OztBQUdELElBQWEsaUJBQWlCLEdBQUcsaUJBQWlCLENBQ2xELE9BQU8sQ0FDTCxTQUFTLENBQ1AsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FDZCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFekQ7SUFnQjhCQSw0QkFBaUI7SUE2RDdDLGtCQUNVLEdBQWUsRUFDZixTQUFvQixFQUM1QixNQUFnQixFQUNoQixPQUFlLEVBQ1IsY0FBK0IsRUFDOUIsV0FBeUI7UUFObkMsWUFRRSxrQkFBTSxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBV3ZCO1FBbEJTLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBR3JCLG9CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUM5QixpQkFBVyxHQUFYLFdBQVcsQ0FBYzs7Ozs7UUE5RDFCLGFBQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0Qsc0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBZ0UvQixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUNoQyxpRkFBaUYsRUFBRTtvQkFDakYsTUFBTSxFQUFFLENBQUM7aUJBQ1Y7YUFDRixFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN2RDs7S0FDRjtJQWhFRCxzQkFDSSxxQ0FBZTs7Ozs7O1FBRG5CO1lBRUUsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7Ozs7O1FBQ0QsVUFBb0IsS0FBYzs7Z0JBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDdkM7OztPQUpBO0lBT0Qsc0JBQ0ksMEJBQUk7Ozs7OztRQURSO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQUNELFVBQVMsR0FBaUI7WUFDeEIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ3BDLG1CQUFpQixJQUFJLENBQUMsSUFBTSxFQUM1QixJQUFJLG9CQUFDLElBQUksQ0FBQyxJQUFJLEdBQVEsRUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNmLENBQUM7YUFDSDtTQUNGOzs7T0FaQTtJQWVELHNCQUNJLGdDQUFVOzs7Ozs7UUFEZCxjQUMyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTs7Ozs7UUFDckQsVUFBZSxHQUFXO1lBQ3hCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzNCLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO29CQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQzFDLHlCQUF1QixHQUFLLEVBQzVCLFVBQUMsS0FBcUIsSUFBSyxRQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFDLEVBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QjtTQUNGOzs7T0Fkb0Q7Ozs7SUFvQ3JELDhCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBRUQsMkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztTQUMxQjtLQUNGOzs7O0lBRUQsa0NBQWU7OztJQUFmO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBRXpFLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztTQUM3Qzs7WUFFSyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwRCxJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO2dCQUN6QixJQUFJLEtBQUksQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7b0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDbkYsS0FBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztpQkFDdEM7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRTtvQkFDM0IsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQ2hDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDakY7aUJBQ0Y7YUFDRixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRU0sd0JBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEM7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7O2dCQTFJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyx1S0FBMEI7b0JBQzFCLE1BQU0sRUFBRTt3QkFDTixJQUFJO3dCQUNKLE1BQU07d0JBQ04sT0FBTzt3QkFDUCxRQUFRO3dCQUNSLFVBQVU7d0JBQ1YsVUFBVTt3QkFDVixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7aUJBQ0Y7Ozs7Z0JBM0ZDLFVBQVU7Z0JBRVYsU0FBUztnQkFXVCxRQUFRO2dCQVZSLE1BQU07Z0JBc0JOLGVBQWU7Z0JBQ2YsWUFBWTs7O21DQStFWCxTQUFTLFNBQUMsaUJBQWlCO2tDQUczQixLQUFLLFNBQUMsV0FBVzt1QkFVakIsS0FBSzs2QkFrQkwsS0FBSzs7SUErRVIsZUFBQztDQUFBLENBM0g2QixpQkFBaUI7Ozs7OztBQy9GL0M7SUFJQTtLQUkrQjs7Z0JBSjlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDO29CQUNuQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3pCOztJQUM2QixxQkFBQztDQUovQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==