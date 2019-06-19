import { __decorate, __metadata } from 'tslib';
import { Directive, ElementRef, Renderer2, NgZone, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, LyTheme2, toBoolean, LyCommonModule } from '@alyle/ui';

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
        this.classes = this.theme.addStyleSheet(STYLES);
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
        ]
    }),
    __metadata("design:paramtypes", [LyTheme2,
        ElementRef,
        Renderer2,
        NgZone])
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
LyCardContent = __decorate([
    Directive({
        selector: 'ly-card-content'
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyCard])
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
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LyCardActions.prototype, "disableActionSpacing", void 0);
LyCardActions = __decorate([
    Directive({
        selector: 'ly-card-actions'
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyCard])
], LyCardActions);
let LyCardMedia = class LyCardMedia {
    constructor(el, renderer, theme) {
        this.el = el;
        this.renderer = renderer;
        this.theme = theme;
    }
    set bgImg(val) {
        if (val !== this.bgImg) {
            this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
        }
    }
    get bgImg() {
        return this._bgImg;
    }
    /** Aspect ratio */
    set ratio(val) {
        if (val !== this.ratio) {
            this._createAspectRatioClass(val);
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
    _createBgImgClass(val, instance) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, `background-image`, `url("${val}")`);
        return this.theme.addStyle(`lyCard-media:${val}`, (`display:block;` +
            `background-size: cover;` +
            `background-repeat: no-repeat;` +
            `background-position: center;`), this.el.nativeElement, instance, STYLE_PRIORITY);
    }
    _createAspectRatioClass(val) {
        this._ratio = val;
        this._ratioClass = this.theme.addStyle(`lyCard-media-ar:${val}`, ({
            '&:before': val.split(':').reduce((valorAnterior, valorActual) => {
                return ({
                    paddingTop: `${+valorActual / +valorAnterior * 100}%`,
                    content: `\'\'`,
                    display: 'block'
                });
            })
        }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyCardMedia.prototype, "bgImg", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyCardMedia.prototype, "ratio", null);
LyCardMedia = __decorate([
    Directive({
        selector: 'ly-card-media'
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyTheme2])
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

export { LyCard, LyCardActions, LyCardBase, LyCardContent, LyCardMedia, LyCardMixinBase, LyCardModule, STYLES };
//# sourceMappingURL=alyle-ui-card.js.map
