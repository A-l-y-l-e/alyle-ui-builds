import { __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { mixinStyleUpdater, mixinColor, toBoolean, LyTheme2, LyCommonModule } from '@alyle/ui';

const STYLE_PRIORITY = -1;
const styles = (theme) => ({
    root: {
        margin: 0,
        display: 'block',
        '&': theme.typography ? theme.typography.root : null
    }
});
const ɵ0 = styles;
/** @docs-private */
var Gutter;
(function (Gutter) {
    Gutter[Gutter["default"] = 0] = "default";
    Gutter[Gutter["top"] = 1] = "top";
    Gutter[Gutter["bottom"] = 2] = "bottom";
})(Gutter || (Gutter = {}));
/** @docs-private */
class LyTypographyBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyTypographyMixinBase = mixinStyleUpdater(mixinColor((LyTypographyBase)));
let LyTypography = class LyTypography extends LyTypographyMixinBase {
    constructor(_theme, _el, renderer) {
        super(_theme);
        this._el = _el;
        this.renderer = renderer;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    set lyTyp(val) {
        if (val !== this.lyTyp) {
            if (val) {
                this._lyTypClass = this._createTypClass(val, this._lyTypClass);
            }
            else if (this._lyTypClass) {
                this.renderer.removeClass(this._el.nativeElement, this._lyTypClass);
                this._lyTypClass = undefined;
            }
        }
    }
    get lyTyp() {
        return this._lyTyp;
    }
    /** The text will truncate with an ellipsis. */
    set noWrap(val) {
        const newValue = toBoolean(val);
        if (newValue) {
            this._noWrapClass = this._theme.addSimpleStyle('lyTyp.noWrap', {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            });
            this.renderer.addClass(this._el.nativeElement, this._noWrapClass);
        }
        else if (this._noWrapClass) {
            this.renderer.removeClass(this._el.nativeElement, this._noWrapClass);
            this._noWrapClass = undefined;
        }
    }
    get noWrap() {
        return this._noWrap;
    }
    set gutter(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.gutter) {
            this._gutter = newVal;
            this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
        }
    }
    get gutter() {
        return this._gutter;
    }
    set gutterTop(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.gutterTop) {
            this._gutterTop = newVal;
            // const newClass = this._createGutterClass(Gutter.top, newVal);
            this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
        }
    }
    get gutterTop() {
        return this._gutterTop;
    }
    set gutterBottom(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.gutterBottom) {
            this._gutterBottom = newVal;
            this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
        }
    }
    get gutterBottom() {
        return this._gutterBottom;
    }
    ngOnInit() {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error(`use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'`);
        }
    }
    ngOnChanges() {
        this.updateStyle(this._el.nativeElement);
    }
    _createTypClass(key, instance) {
        const newKey = `k-typ:${key}`;
        return this._theme.addStyle(newKey, (theme) => {
            const { typography } = theme;
            const styl = Object.assign({}, typography.lyTyp[key || 'body1']);
            if (styl.lineHeight) {
                styl.lineHeight = theme.pxToRem(styl.lineHeight);
            }
            if (typeof styl.letterSpacing === 'number') {
                styl.letterSpacing = `${styl.letterSpacing}px`;
            }
            // set default fontFamily
            styl.fontFamily = styl.fontFamily || typography.fontFamily;
            return styl;
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    }
    _createGutterClass(name, val, instance) {
        return this._theme.addStyle(`k-typ-gutter:${name}:${val}`, (theme) => {
            const gutter = name === Gutter.default;
            return (`margin-top:${val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0}em;` +
                `margin-bottom:${val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0}em;`);
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyTypography.prototype, "lyTyp", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyTypography.prototype, "noWrap", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyTypography.prototype, "gutter", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyTypography.prototype, "gutterTop", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyTypography.prototype, "gutterBottom", null);
LyTypography = __decorate([
    Directive({
        selector: `[lyTyp]`,
        inputs: [
            'color'
        ]
    }),
    __metadata("design:paramtypes", [LyTheme2,
        ElementRef,
        Renderer2])
], LyTypography);

let LyTypographyModule = class LyTypographyModule {
};
LyTypographyModule = __decorate([
    NgModule({
        exports: [LyTypography, LyCommonModule],
        declarations: [LyTypography]
    })
], LyTypographyModule);

export { LyTypography, LyTypographyBase, LyTypographyMixinBase, LyTypographyModule, ɵ0 };
//# sourceMappingURL=alyle-ui-typography.js.map
