import { __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const style = (theme) => ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
});
const ɵ0 = style;
let LyDivider = class LyDivider {
    constructor(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    /** Add indentation (72px) */
    set inset(val) {
        this._inset = val;
        this._theme.addStyle(`lyDivider.inset`, () => ({
            marginBefore: '74px'
        }), this._el.nativeElement, this._insetClass);
    }
    get inset() {
        return this._inset;
    }
    ngOnInit() {
        const className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LyDivider.prototype, "inset", null);
LyDivider = __decorate([
    Directive({
        selector: 'ly-divider'
    }),
    __metadata("design:paramtypes", [ElementRef,
        LyTheme2])
], LyDivider);

let LyDividerModule = class LyDividerModule {
};
LyDividerModule = __decorate([
    NgModule({
        exports: [LyDivider],
        declarations: [LyDivider]
    })
], LyDividerModule);

export { LyDivider, LyDividerModule, ɵ0 };
//# sourceMappingURL=alyle-ui-divider.js.map
