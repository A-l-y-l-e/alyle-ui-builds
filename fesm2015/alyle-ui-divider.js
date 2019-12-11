import { __decorate } from 'tslib';
import { Input, Directive, NgModule } from '@angular/core';
import { toBoolean, StyleRenderer, LyHostClass } from '@alyle/ui';

var LyDivider_1;
const STYLES = (theme) => (className) => `${className}{display:block;background-color:${theme.divider};height:1px;}`;
const ɵ0 = STYLES;
let LyDivider = LyDivider_1 = class LyDivider {
    constructor(_styleRenderer, _hostClass) {
        this._styleRenderer = _styleRenderer;
        this._hostClass = _hostClass;
    }
    /** Add indentation (72px) */
    set inset(val) {
        const newVal = this._inset = toBoolean(val);
        if (newVal) {
            this[0x1] = this._styleRenderer.add(`${LyDivider_1.и}--inset`, ({ before }) => (className) => `${className}{margin-${before}:74px;}`, this[0x1]);
        }
        else {
            this._hostClass.remove(this[0x1]);
        }
    }
    get inset() {
        return this._inset;
    }
    ngOnInit() {
        this._styleRenderer.add(STYLES);
    }
};
LyDivider.и = 'LyDivider';
LyDivider.ctorParameters = () => [
    { type: StyleRenderer },
    { type: LyHostClass }
];
__decorate([
    Input()
], LyDivider.prototype, "inset", null);
LyDivider = LyDivider_1 = __decorate([
    Directive({
        selector: 'ly-divider',
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    })
], LyDivider);

let LyDividerModule = class LyDividerModule {
};
LyDividerModule = __decorate([
    NgModule({
        exports: [LyDivider],
        declarations: [LyDivider]
    })
], LyDividerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyDivider, LyDividerModule, ɵ0 };
//# sourceMappingURL=alyle-ui-divider.js.map
