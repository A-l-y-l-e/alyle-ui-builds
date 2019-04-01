import { Directive, Renderer2, ElementRef, Input, isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, getLyThemeVariableUndefinedError, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = 'fixed';
/** @type {?} */
const DEFAULT_BG = 'background:tertiary';
/** @type {?} */
const styles = (theme) => ({
    root: {
        padding: '0 16px',
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        height: '64px',
        zIndex: theme.zIndex.toolbar,
        [theme.getBreakpoint('XSmall')]: {
            height: '56px'
        },
        '&': theme.toolbar ? theme.toolbar.root : null
    },
    dense: {
        height: '56px'
    }
});
/**
 * \@docs-private
 */
class LyToolbarBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
class LyToolbar extends LyToolbarMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} theme
     */
    constructor(_renderer, _el, theme) {
        super(theme);
        this._renderer = _renderer;
        this._el = _el;
        this.theme = theme;
        /**
         * Styles
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.setAutoContrast();
        _renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set position(val) {
        this._position = val;
        this._positionClass = this.theme.addStyle(`lyToolbar.position:${val}`, `position:${val}`, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set dense(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (isDevMode() && newVal !== this.dense) {
            console.warn(this._el.nativeElement, `LyToolbar.appearance: \`dense\` is deprecated, instead use \`appearance="dense"\``);
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this.classes.dense);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.dense);
            }
        }
    }
    /**
     * @return {?}
     */
    get dense() {
        return this._dense;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle(`LyToolbar.appearance:${val}`, (theme) => {
                if (!theme.toolbar) {
                    throw getLyThemeVariableUndefinedError('toolbar');
                }
                if (!(theme.toolbar.appearance && (/** @type {?} */ (theme.toolbar.appearance))[val])) {
                    throw new Error(`Value toolbar.appearance['${val}'] not found in ThemeVariables`);
                }
                return (/** @type {?} */ ((/** @type {?} */ (theme.toolbar.appearance))[val]));
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    get appearance() {
        return this._appearance;
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
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    }
}
LyToolbar.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor'
                ]
            },] }
];
/** @nocollapse */
LyToolbar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyToolbar.propDecorators = {
    position: [{ type: Input }],
    dense: [{ type: Input }],
    appearance: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyToolbarModule {
}
LyToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyCommonModule],
                exports: [LyToolbar, LyCommonModule],
                declarations: [LyToolbar]
            },] }
];

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

export { LyToolbarBase, LyToolbarMixinBase, LyToolbar, LyToolbarModule };

//# sourceMappingURL=alyle-ui-toolbar.js.map