import { __decorate, __metadata } from 'tslib';
import { Input, Directive, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyTheme2, LyCommonModule } from '@alyle/ui';

const MEDIA_PRIORITY = 999;
const styles = {
    hide: {
        display: 'none'
    }
};
let MediaDirective = class MediaDirective {
    constructor(_renderer, _elementRef, theme) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles);
    }
    /**
     * Shows the item when the value is resolved as true
     */
    get lyShow() {
        return this._show;
    }
    set lyShow(val) {
        this._show = val;
        this._showClass = this.theme.addStyle(`lyMedia-show:${val}`, (theme) => ({
            [theme.getBreakpoint(val)]: {
                display: 'block'
            }
        }), this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
    }
    /**
     * Hides the item when the value is resolved as true
     */
    set lyHide(val) {
        this._hide = val;
        this._hideClass = this.theme.addStyle(`lyMedia-hide:${val}`, (theme) => ({
            [theme.getBreakpoint(val)]: {
                display: 'none'
            }
        }), this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
    }
    get lyHide() {
        return this._hide;
    }
    ngOnInit() {
        if (!this.lyHide) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.hide);
        }
    }
    ngOnChanges() {
        if (this.lyHide && this.lyShow) {
            throw new Error(`use only \`lyHide\` or \`lyShow\` per element`);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MediaDirective.prototype, "lyShow", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MediaDirective.prototype, "lyHide", null);
MediaDirective = __decorate([
    Directive({
        selector: '[lyShow], [lyHide]'
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef,
        LyTheme2])
], MediaDirective);

let ResponsiveModule = class ResponsiveModule {
};
ResponsiveModule = __decorate([
    NgModule({
        declarations: [MediaDirective],
        exports: [MediaDirective, LyCommonModule],
    })
], ResponsiveModule);

const Breakpoints = {
    XSmall: '(max-width: 599px)',
    Small: '(min-width: 600px) and (max-width: 959px)',
    Medium: '(min-width: 960px) and (max-width: 1279px)',
    Large: '(min-width: 1280px) and (max-width: 1919px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599px) and (orientation: portrait), ' +
        '(max-width: 959px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

export { Breakpoints, MediaDirective, ResponsiveModule };
//# sourceMappingURL=alyle-ui-responsive.js.map
