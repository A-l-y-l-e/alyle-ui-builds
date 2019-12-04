import { __decorate } from 'tslib';
import { InjectionToken, ElementRef, Renderer2, Input, Directive, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, LyHostClass, LyTheme2, LyCommonModule } from '@alyle/ui';

var LyBadge_1;
const LY_BADGE_DEFAULT_OPTIONS = new InjectionToken('BADGE_DEFAULT_OPTIONS');
const STYLE_PRIORITY = -2;
const DEFAULT_H_POSITION = 'after';
const DEFAULT_V_POSITION = 'above';
const DEFAULT_BG = 'primary';
const DEFAULT_APPEARANCE = 'default';
const DEFAULT_OVERLAP = 'rectangle';
const STYLES = (theme, ref) => {
    const badge = ref.selectorsOf(STYLES);
    return {
        $name: LyBadge.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{position:absolute;display:flex;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:${theme.pxToRem(12)};font-family:${theme.typography.fontFamily};justify-content:center;align-items:center;box-sizing:border-box;z-index:1;}${styleTemplateToString(((theme.badge
            && theme.badge.root
            && (theme.badge.root instanceof StyleCollection
                ? theme.badge.root.setTransformer(fn => fn(badge))
                : theme.badge.root(badge)))), `${className}`)}`,
        relative: (className) => `${className}{position:relative;}`
    };
};
/** @docs-private */
class LyBadgeBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
let LyBadge = LyBadge_1 = class LyBadge extends LyBadgeMixinBase {
    constructor(_el, _theme, _renderer) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        /**
         * Styles
         * @docs-private
         */
        this.classes = this._theme.renderStyleSheet(STYLES);
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
    set container(container) {
        if (container == null) {
            throw new Error(`${LyBadge_1.и}: [container] is undefined.`);
        }
        if (this.content != null) {
            throw new Error(`${LyBadge_1.и}: [container] with [content] don't work together.`);
        }
        if (!container.tagName) {
            throw new Error(`${LyBadge_1.и}: the value given to container is not an HTMLElement`);
        }
        this._container = container;
        this._renderer.appendChild(container, this._el.nativeElement);
    }
    get container() {
        return this._container;
    }
    get overlap() {
        return this._overlap;
    }
    set overlap(val) {
        if (val !== this.overlap) {
            this._overlap = val;
            Promise.resolve(null).then(() => {
                const overlap = val;
                const hp = this.hPosition;
                const vp = this.vPosition;
                const newClass = this._theme.renderStyle(`${LyBadge_1.и}-overlap-${val}&${hp}&${vp}`, (theme) => {
                    const p = overlap === 'circle'
                        ? 14 : 0;
                    return (className) => `${className}{${theme.getDirection(vp)}:${p}%;${theme.getDirection(hp)}:${p}%;}`;
                }, STYLE_PRIORITY);
                this._overlapClass = this._hostClass.update(newClass, this._overlapClass);
            });
        }
    }
    /** The color of the badge */
    get bg() {
        return this._lyBadgeBg;
    }
    set bg(val) {
        if (this.content == null) {
            this.lyBadgeBg = val;
        }
    }
    /** The color of the badge */
    get lyBadgeBg() {
        return this._lyBadgeBg;
    }
    set lyBadgeBg(val) {
        if (val !== this.lyBadgeBg) {
            this._lyBadgeBg = val;
            const newClass = this._theme.renderStyle(`${LyBadge_1.и}--bg-${val}`, (theme) => (className) => `${className}{background-color:${theme.colorOf(val)};color:${theme.colorOf(`${val}:contrast`)};}`, STYLE_PRIORITY);
            Promise.resolve(null).then(() => {
                this[0x1] = this._hostClass.update(newClass, this[0x1]);
            });
        }
    }
    get appearance() {
        return this._appearance;
    }
    set appearance(val) {
        if (this.content == null) {
            this.lyBadgeAppearance = val;
        }
    }
    get lyBadgeAppearance() {
        return this._appearance;
    }
    set lyBadgeAppearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            const styleID = `${LyBadge_1.и}--appearance-${val}`;
            const newClass = this._theme.renderStyle(styleID, (theme) => {
                const appearance = theme.badge
                    && theme.badge.appearance
                    && theme.badge.appearance[val]
                    && theme.badge.appearance[val](this.classes);
                if (appearance) {
                    return appearance;
                }
                throw new Error(`${styleID} is not defined in the theme.`);
            }, STYLE_PRIORITY);
            Promise.resolve(null).then(() => {
                this._appearanceClass = this._hostClass.update(newClass, this._appearanceClass);
            });
        }
    }
    ngOnChanges() {
        if (this.content == null) {
            this.updateStyle(this._el);
        }
        this._updatePosition();
        if (!this._hostClass) {
            this._hostClass = new LyHostClass(this._el, this._renderer);
        }
    }
    ngOnInit() {
        /** Add root styles */
        this._renderer.addClass(this._badgeElementRef, this.classes.root);
        /** Set default bg */
        if (!this.bg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
        /** Set default position */
        let requireUpdate = false;
        if (!this.hPosition) {
            requireUpdate = true;
            this.hPosition = DEFAULT_H_POSITION;
        }
        if (!this.vPosition) {
            requireUpdate = true;
            this.vPosition = DEFAULT_V_POSITION;
        }
        if (requireUpdate) {
            this._updatePosition();
        }
        /** Set default appearance */
        if (!this.appearance) {
            this.lyBadgeAppearance = DEFAULT_APPEARANCE;
        }
        /** Set default overlap */
        if (!this.overlap) {
            this.overlap = DEFAULT_OVERLAP;
        }
    }
    ngOnDestroy() {
        if (this._badgeEl) {
            this._renderer.removeChild(this._el.nativeElement, this._badgeEl);
        }
    }
    _updatePosition() {
        const hp = this.hPosition;
        const vp = this.vPosition;
        if (hp && vp) {
            let y;
            let x;
            if (hp && vp) {
                if (hp === 'after') {
                    x = 50;
                }
                else {
                    x = -50;
                }
                if (vp === 'above') {
                    y = -50;
                }
                else {
                    y = 50;
                }
            }
            const newClass = this._theme.renderStyle(`${LyBadge_1.и}--position-${hp}-${vp}`, (theme) => (className) => `${className}{transform:translate(${theme.after === 'right'
                ? x : -x}%, ${y}%);}`, STYLE_PRIORITY);
            Promise.resolve(null).then(() => {
                this._positionClass = this._hostClass.update(newClass, this._positionClass);
            });
        }
    }
    _createBadge() {
        if (!this._badgeEl) {
            const badge = this._badgeEl = this._renderer.createElement('div');
            this._renderer.appendChild((this.container) || this._el.nativeElement, badge);
            this._badgeElementRef = badge;
            this._hostClass = new LyHostClass(new ElementRef(badge), this._renderer);
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._badgeEl.textContent = `${this.content}`;
    }
};
LyBadge.и = 'LyBadge';
LyBadge.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 },
    { type: Renderer2 }
];
__decorate([
    Input('lyBadge')
], LyBadge.prototype, "content", null);
__decorate([
    Input()
], LyBadge.prototype, "container", null);
__decorate([
    Input()
], LyBadge.prototype, "hPosition", void 0);
__decorate([
    Input()
], LyBadge.prototype, "vPosition", void 0);
__decorate([
    Input()
], LyBadge.prototype, "overlap", null);
__decorate([
    Input()
], LyBadge.prototype, "bg", null);
__decorate([
    Input()
], LyBadge.prototype, "lyBadgeBg", null);
__decorate([
    Input()
], LyBadge.prototype, "appearance", null);
__decorate([
    Input()
], LyBadge.prototype, "lyBadgeAppearance", null);
LyBadge = LyBadge_1 = __decorate([
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
    })
], LyBadge);

let LyBadgeModule = class LyBadgeModule {
};
LyBadgeModule = __decorate([
    NgModule({
        exports: [LyBadge, LyCommonModule],
        declarations: [LyBadge]
    })
], LyBadgeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LY_BADGE_DEFAULT_OPTIONS, LyBadge, LyBadgeBase, LyBadgeMixinBase, LyBadgeModule, STYLES };
//# sourceMappingURL=alyle-ui-badge.js.map
