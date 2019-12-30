import { __decorate, __param } from 'tslib';
import { InjectionToken, Renderer2, ElementRef, Optional, Inject, Input, Directive, NgModule } from '@angular/core';
import { styleTemplateToString, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';

var LyAvatar_1;
const STYLE_PRIORITY = -2;
const DEFAULT_SIZE = 40;
const DEFAULT_BG = 'action';
const LY_AVATAR_DEFAULT_OPTIONS = new InjectionToken('LY_AVATAR_DEFAULT_OPTIONS');
const STYLES = (theme) => {
    return {
        $name: LyAvatar.и,
        $priority: STYLE_PRIORITY,
        root: (className) => `${className}{display:inline-flex;position:relative;font-size:1.25em;flex-shrink:0;align-items:center;user-select:none;border-radius:50%;text-align:center;justify-content:center;}${styleTemplateToString(((theme.avatar
            && theme.avatar.root
            && theme.avatar.root())), `${className}`)}${className}>img{width:100%;height:100%;border-radius:50%;display:block;object-fit:cover;-webkit-background-clip:padding-box;}`
    };
};
/** @docs-private */
class LyAvatarBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
let LyAvatar = LyAvatar_1 = class LyAvatar extends LyAvatarMixinBase {
    constructor(theme, renderer, _elementRef, _styleRenderer, _defaults) {
        super(theme);
        this._elementRef = _elementRef;
        this._styleRenderer = _styleRenderer;
        this._defaults = _defaults;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, this.classes.root);
    }
    /** Avatar size */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this[0x1] = this._styleRenderer.add(`${LyAvatar_1.и}-size-${val}`, () => ((className) => `${className}{width:${val}px;height:${val}px;}`), STYLE_PRIORITY, this[0x1]);
            // const newClass = this._theme.renderStyle(`${LyAvatar.и}.size:${val}`, () => (
            //   (className: string) => ``
            // ), STYLE_PRIORITY);
            // this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
        }
    }
    get size() {
        return this._size;
    }
    ngOnChanges() {
        this.updateStyle(this._elementRef.nativeElement);
    }
    ngOnInit() {
        if (!this.bg) {
            this.bg = (this._defaults && this._defaults.bg) || DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = (this._defaults && this._defaults.size) || DEFAULT_SIZE;
        }
    }
};
/** @docs-private */
LyAvatar.и = 'LyAvatar';
LyAvatar.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: StyleRenderer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_AVATAR_DEFAULT_OPTIONS,] }] }
];
__decorate([
    Input()
], LyAvatar.prototype, "size", null);
LyAvatar = LyAvatar_1 = __decorate([
    Directive({
        selector: 'ly-avatar',
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor',
        ],
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    }),
    __param(4, Optional()), __param(4, Inject(LY_AVATAR_DEFAULT_OPTIONS))
], LyAvatar);

let LyAvatarModule = class LyAvatarModule {
};
LyAvatarModule = __decorate([
    NgModule({
        exports: [LyAvatar, LyCommonModule],
        declarations: [LyAvatar]
    })
], LyAvatarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LY_AVATAR_DEFAULT_OPTIONS, LyAvatar, LyAvatarBase, LyAvatarMixinBase, LyAvatarModule, STYLES };
//# sourceMappingURL=alyle-ui-avatar.js.map
