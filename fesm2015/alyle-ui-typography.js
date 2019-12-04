import { __decorate } from 'tslib';
import { ElementRef, Renderer2, Input, Directive, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, mixinStyleUpdater, mixinColor, toBoolean, LyTheme2, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';

const STYLE_PRIORITY = -1;
const STYLES = (theme) => {
    return {
        $name: LyTypography.и,
        $priority: STYLE_PRIORITY,
        root: (className) => `${className}{margin:0;display:block;font-family:${theme.typography.fontFamily};}${styleTemplateToString(((theme.typography
            && theme.typography.root
            && (theme.typography.root instanceof StyleCollection
                ? theme.typography.root.setTransformer(fn => fn()).css
                : theme.typography.root()))), `${className}`)}`,
        gutterTop: (className) => `${className}{margin-top:0.35em;}`,
        gutterBottom: (className) => `${className}{margin-bottom:0.35em;}`,
        gutter: (className) => `${className}{margin:0.35em 0;}`
    };
};
const ɵ0 = STYLES;
/** @docs-private */
class LyTypographyBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyTypographyMixinBase = mixinStyleUpdater(mixinColor((LyTypographyBase)));
let LyTypography = class LyTypography extends LyTypographyMixinBase {
    constructor(_theme, _el, renderer, sr, hostClass) {
        super(_theme);
        this._el = _el;
        this.renderer = renderer;
        this.sr = sr;
        this.hostClass = hostClass;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this.renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    set lyTyp(val) {
        if (val !== this.lyTyp) {
            if (val) {
                this._lyTypClass = this._createTypClass(val, this._lyTypClass);
            }
            else if (this._lyTypClass) {
                this.renderer.removeClass(this._el.nativeElement, this._lyTypClass);
                this._lyTypClass = null;
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
            this.hostClass.toggle(this.classes.gutter, newVal);
        }
    }
    get gutter() {
        return this._gutter;
    }
    set gutterTop(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.gutterTop) {
            this._gutterTop = newVal;
            this.hostClass.toggle(this.classes.gutterTop, newVal);
        }
    }
    get gutterTop() {
        return this._gutterTop;
    }
    set gutterBottom(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.gutterBottom) {
            this._gutterBottom = newVal;
            this.hostClass.toggle(this.classes.gutterBottom, newVal);
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
    _createTypClass(val, instance) {
        const newKey = `k-typ:${val}`;
        return this.sr.add(newKey, (theme) => {
            if (theme.typography && theme.typography.lyTyp) {
                const lyTyp = theme.typography.lyTyp[val];
                if (lyTyp) {
                    return lyTyp instanceof StyleCollection
                        ? lyTyp.setTransformer((_) => _()).css
                        : lyTyp();
                }
            }
            throw new Error(`Value typography.lyTyp['${val}'] not found in ThemeVariables`);
        }, STYLE_PRIORITY, instance);
    }
};
/** @docs-private */
LyTypography.и = 'LyTypography';
LyTypography.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: StyleRenderer },
    { type: LyHostClass }
];
__decorate([
    Input()
], LyTypography.prototype, "lyTyp", null);
__decorate([
    Input()
], LyTypography.prototype, "noWrap", null);
__decorate([
    Input()
], LyTypography.prototype, "gutter", null);
__decorate([
    Input()
], LyTypography.prototype, "gutterTop", null);
__decorate([
    Input()
], LyTypography.prototype, "gutterBottom", null);
LyTypography = __decorate([
    Directive({
        selector: `[lyTyp]`,
        inputs: [
            'color'
        ],
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    })
], LyTypography);

let LyTypographyModule = class LyTypographyModule {
};
LyTypographyModule = __decorate([
    NgModule({
        exports: [LyTypography, LyCommonModule],
        declarations: [LyTypography]
    })
], LyTypographyModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyTypography, LyTypographyBase, LyTypographyMixinBase, LyTypographyModule, ɵ0 };
//# sourceMappingURL=alyle-ui-typography.js.map
