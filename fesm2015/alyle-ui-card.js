import { CommonModule } from '@angular/common';
import { Directive, ElementRef, Input, NgZone, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'block',
        overflow: 'hidden',
        borderRadius: '2px',
        '&': theme.card ? theme.card.root : null
    },
    content: {
        display: 'block',
        padding: '16px 24px',
        [theme.getBreakpoint('XSmall')]: {
            padding: '16px 16px'
        }
    },
    actions: {
        display: 'block',
        padding: '8px 12px',
        [theme.getBreakpoint('XSmall')]: {
            padding: '8px 4px'
        }
    },
    actionsItem: {
        margin: '0 4px'
    }
});
/** @type {?} */
const DEFAULT_ASPECT_RATIO = '16:9';
/** @type {?} */
const STYLE_PRIORITY = -1;
/**
 * \@docs-private
 */
class LyCardBase {
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
const LyCardMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCardBase)))))))));
class LyCard extends LyCardMixinBase {
    /**
     * @param {?} theme
     * @param {?} _el
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(theme, _el, renderer, ngZone) {
        super(theme, ngZone);
        this.theme = theme;
        this._el = _el;
        this.renderer = renderer;
        /**
         * styles
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(STYLES);
        this.setAutoContrast();
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
        /** @type {?} */
        let requireOnChanges;
        if (!this.bg) {
            this.bg = 'background:primary';
            requireOnChanges = true;
        }
        if (!this.elevation) {
            this.elevation = 2;
            requireOnChanges = true;
        }
        if (requireOnChanges) {
            this.updateStyle(this._el);
        }
        this.renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeRippleEvents();
    }
}
LyCard.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple',
                ]
            },] }
];
/** @nocollapse */
LyCard.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
class LyCardContent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} card
     */
    constructor(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    }
}
LyCardContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-content'
            },] }
];
/** @nocollapse */
LyCardContent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCard }
];
class LyCardActions {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} card
     */
    constructor(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(element => {
                this.renderer.addClass(element, this.card.classes.actionsItem);
            });
        }
    }
}
LyCardActions.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-actions'
            },] }
];
/** @nocollapse */
LyCardActions.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCard }
];
LyCardActions.propDecorators = {
    disableActionSpacing: [{ type: Input }]
};
class LyCardMedia {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} theme
     */
    constructor(el, renderer, theme) {
        this.el = el;
        this.renderer = renderer;
        this.theme = theme;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set bgImg(val) {
        if (val !== this.bgImg) {
            this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
        }
    }
    /**
     * @return {?}
     */
    get bgImg() {
        return this._bgImg;
    }
    /**
     * Aspect ratio
     * @param {?} val
     * @return {?}
     */
    set ratio(val) {
        if (val !== this.ratio) {
            this._createAspectRatioClass(val);
        }
    }
    /**
     * @return {?}
     */
    get ratio() {
        return this._ratio;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    }
    /**
     * @private
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    _createBgImgClass(val, instance) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, `background-image`, `url("${val}")`);
        return this.theme.addStyle(`lyCard-media:${val}`, (`display:block;` +
            `background-size: cover;` +
            `background-repeat: no-repeat;` +
            `background-position: center;`), this.el.nativeElement, instance, STYLE_PRIORITY);
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    _createAspectRatioClass(val) {
        this._ratio = val;
        this._ratioClass = this.theme.addStyle(`lyCard-media-ar:${val}`, ({
            '&:before': val.split(':').reduce((valorAnterior, valorActual) => {
                return (/** @type {?} */ (({
                    paddingTop: `${+valorActual / +valorAnterior * 100}%`,
                    content: `\'\'`,
                    display: 'block'
                })));
            })
        }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
    }
}
LyCardMedia.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-media'
            },] }
];
/** @nocollapse */
LyCardMedia.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
LyCardMedia.propDecorators = {
    bgImg: [{ type: Input }],
    ratio: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LyCardModule {
}
LyCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCommonModule],
                declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
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

export { LyCardModule, STYLES, LyCardBase, LyCardMixinBase, LyCard, LyCardContent, LyCardActions, LyCardMedia };

//# sourceMappingURL=alyle-ui-card.js.map