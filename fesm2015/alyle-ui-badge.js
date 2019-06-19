import { __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, LyCommonModule } from '@alyle/ui';

const STYLE_PRIORITY = -2;
const DEFAULT_POSITION = 'startTop';
const DEFAULT_BG = 'primary';
const DEFAULT_POSITION_VALUE = {
    after: '-11px',
    above: '-11px'
};
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
        position: 'absolute',
        display: 'flex',
        width: '22px',
        height: '22px',
        borderRadius: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        pointerEvents: 'none',
        zIndex: 1,
        fontSize: theme.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        '&': theme.badge ? theme.badge.root : null
    },
    relative: {
        position: 'relative'
    }
});
/** @docs-private */
class LyBadgeBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
let LyBadge = class LyBadge extends LyBadgeMixinBase {
    constructor(_el, _theme, _renderer) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        /**
         * Styles
         * @docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES);
        this.setAutoContrast();
        this._badgeElementRef = this._el.nativeElement;
    }
    /** The content for the badge */
    set content(val) {
        if (val !== this.content) {
            this._content = val;
            this._createBadge();
        }
    }
    get content() {
        return this._content;
    }
    /** The position for the badge */
    set position(val) {
        if (val !== this.position) {
            this._position = val;
            this._positionClass = this._theme.addStyle(`ly-badge.position:${val}`, (theme) => {
                const sty = theme.badge.position && theme.badge.position[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
                if (sty) {
                    return sty;
                }
                else {
                    throw new Error(`LyBadge.position \`${val}\` not found in \`ThemeVariables\``);
                }
            }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
        }
    }
    get position() {
        return this._position;
    }
    /** The color of the badge */
    get lyBadgeBg() {
        return this._lyBadgeBg;
    }
    set lyBadgeBg(val) {
        if (val !== this.lyBadgeBg) {
            this._lyBadgeBg = val;
            this._lyBadgeBgClass = this._theme.addStyle(`ly-badge.bg:${val}`, (theme) => ({
                backgroundColor: theme.colorOf(val),
                color: theme.colorOf(`${val}:contrast`)
            }), this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
        }
    }
    ngOnChanges() {
        if (!this.content) {
            this.updateStyle(this._el);
        }
    }
    ngOnInit() {
        /** Add root styles */
        this._renderer.addClass(this._badgeElementRef, this.classes.root);
        /** Set default position */
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        /** Set default bg */
        if (this.content && !this.lyBadgeBg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
    }
    ngOnDestroy() {
        if (this._elContainer) {
            this._renderer.removeChild(this._el.nativeElement, this._elContainer);
        }
    }
    _createBadge() {
        if (!this._elContainer) {
            const container = this._elContainer = this._renderer.createElement('div');
            this._renderer.appendChild(this._el.nativeElement, container);
            this._badgeElementRef = container;
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._elContainer.textContent = `${this.content}`;
    }
};
__decorate([
    Input('lyBadge'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyBadge.prototype, "content", null);
__decorate([
    Input('lyBadgePosition'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyBadge.prototype, "position", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyBadge.prototype, "lyBadgeBg", null);
LyBadge = __decorate([
    Directive({
        selector: 'ly-badge, [lyBadge]',
        inputs: [
            'bg',
            'color',
            'raised',
            'disabled',
            'outlined',
            'elevation',
            'shadowColor'
        ]
    }),
    __metadata("design:paramtypes", [ElementRef,
        LyTheme2,
        Renderer2])
], LyBadge);

let LyBadgeModule = class LyBadgeModule {
};
LyBadgeModule = __decorate([
    NgModule({
        exports: [LyBadge, LyCommonModule],
        declarations: [LyBadge]
    })
], LyBadgeModule);

export { LyBadge, LyBadgeBase, LyBadgeMixinBase, LyBadgeModule, STYLES };
//# sourceMappingURL=alyle-ui-badge.js.map
