import { __decorate } from 'tslib';
import { ElementRef, Renderer2, NgZone, Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { styleTemplateToString, StyleCollection, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyTheme2, StyleRenderer, toBoolean, Style, LyHostClass, LyCommonModule } from '@alyle/ui';

var LyCardMedia_1;
const STYLES = (theme, ref) => {
    const card = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyCard.и,
        root: () => (className) => `${className}{display:block;overflow:hidden;border-radius:2px;}${styleTemplateToString(((theme.card
            && theme.card.root
            && (theme.card.root instanceof StyleCollection
                ? theme.card.root.setTransformer(fn => fn(card))
                : theme.card.root(card)))), `${className}`)}`,
        bgImg: (className) => `${className}{display:block;background-size:cover;background-repeat:no-repeat;background-position:center;}`,
        content: (className) => `${className}{display:block;padding:16px 24px;}${className} ${theme.getBreakpoint('XSmall')}{padding:16px 16px;}`,
        actions: (className) => `${className}{display:block;padding:8px 12px;}${className} ${theme.getBreakpoint('XSmall')}{padding:8px 4px;}`,
        actionsItem: (className) => `${className}{margin:0 4px;}`
    };
};
const DEFAULT_ASPECT_RATIO = '16:9';
const STYLE_PRIORITY = -1;
/** @docs-private */
class LyCardBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyCardMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCardBase)))))))));
let LyCard = class LyCard extends LyCardMixinBase {
    constructor(theme, _el, renderer, ngZone) {
        super(theme, ngZone);
        this.theme = theme;
        this._el = _el;
        this.renderer = renderer;
        /**
         * styles
         * @docs-private
         */
        this.classes = this.theme.renderStyleSheet(STYLES);
        this.setAutoContrast();
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    ngOnInit() {
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
    ngOnDestroy() {
        this._removeRippleEvents();
    }
};
LyCard.и = 'LyCard';
LyCard.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
LyCard = __decorate([
    Directive({
        selector: 'ly-card',
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor',
            'disableRipple',
        ],
        providers: [StyleRenderer]
    })
], LyCard);
let LyCardContent = class LyCardContent {
    constructor(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    }
};
LyCardContent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCard }
];
LyCardContent = __decorate([
    Directive({
        selector: 'ly-card-content'
    })
], LyCardContent);
let LyCardActions = class LyCardActions {
    constructor(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(element => {
                this.renderer.addClass(element, this.card.classes.actionsItem);
            });
        }
    }
};
LyCardActions.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCard }
];
__decorate([
    Input()
], LyCardActions.prototype, "disableActionSpacing", void 0);
LyCardActions = __decorate([
    Directive({
        selector: 'ly-card-actions'
    })
], LyCardActions);
const ɵ0 = (val) => () => (className) => `${className}{background-image:url('${val}');}`;
/**
 * @dynamic
 */
let LyCardMedia = LyCardMedia_1 = class LyCardMedia {
    constructor(sRenderer, card) {
        this.sRenderer = sRenderer;
        sRenderer.addClass(card.classes.bgImg);
    }
    /**
     * Aspect ratio
     *
     * e.g:
     * 4:3
     * 1:1
     */
    set ratio(val) {
        if (val !== this.ratio) {
            this._ratio = val;
            this[0x2] = this.sRenderer.add(`${LyCardMedia_1.и}--ratio-${val}`, () => (className) => `${className}::before{content:'';display:block;padding-top:${val
                .split(':')
                .reduce((prev, current) => (+current / +prev * 100).toString())}%;}`, STYLE_PRIORITY, this[0x2]);
        }
    }
    get ratio() {
        return this._ratio;
    }
    ngOnInit() {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    }
};
LyCardMedia.и = 'LyCardMedia';
LyCardMedia.$priority = STYLE_PRIORITY;
LyCardMedia.ctorParameters = () => [
    { type: StyleRenderer },
    { type: LyCard }
];
__decorate([
    Input(),
    Style(ɵ0)
], LyCardMedia.prototype, "bgImg", void 0);
__decorate([
    Input()
], LyCardMedia.prototype, "ratio", null);
LyCardMedia = LyCardMedia_1 = __decorate([
    Directive({
        selector: 'ly-card-media',
        providers: [
            StyleRenderer,
            LyHostClass
        ]
    })
], LyCardMedia);

let LyCardModule = class LyCardModule {
};
LyCardModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCommonModule],
        declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
    })
], LyCardModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyCard, LyCardActions, LyCardBase, LyCardContent, LyCardMedia, LyCardMixinBase, LyCardModule, STYLES, ɵ0 };
//# sourceMappingURL=alyle-ui-card.js.map
