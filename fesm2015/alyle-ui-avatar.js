import { __decorate, __metadata } from 'tslib';
import { Input, Directive, Renderer2, ElementRef, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, LyTheme2, LyCommonModule } from '@alyle/ui';

const STYLE_PRIORITY = -2;
const DEFAULT_SIZE = 40;
const DEFAULT_BG = 'action';
const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1.25em',
        flexShrink: 0,
        alignItems: 'center',
        userSelect: 'none',
        borderRadius: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        '&>img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'block',
            objectFit: 'cover',
            '-webkit-background-clip': 'padding-box'
        },
        '&': theme.avatar ? theme.avatar.root : null
    }
});
const ɵ0 = STYLES;
/** @docs-private */
class LyAvatarBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
let LyAvatar = class LyAvatar extends LyAvatarMixinBase {
    constructor(theme, renderer, _elementRef) {
        super(theme);
        this._elementRef = _elementRef;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, this.classes.root);
    }
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this._theme.addStyle(`lyAvatar.size:${val}`, {
                width: `${val}px`,
                height: `${val}px`,
            }, this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
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
            this.bg = DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], LyAvatar.prototype, "size", null);
LyAvatar = __decorate([
    Directive({
        selector: 'ly-avatar',
        inputs: [
            'bg',
            'color',
            'raised',
            'outlined',
            'elevation',
            'shadowColor',
        ]
    }),
    __metadata("design:paramtypes", [LyTheme2,
        Renderer2,
        ElementRef])
], LyAvatar);

let LyAvatarModule = class LyAvatarModule {
};
LyAvatarModule = __decorate([
    NgModule({
        exports: [LyAvatar, LyCommonModule],
        declarations: [LyAvatar]
    })
], LyAvatarModule);

export { LyAvatar, LyAvatarBase, LyAvatarMixinBase, LyAvatarModule, ɵ0 };
//# sourceMappingURL=alyle-ui-avatar.js.map
