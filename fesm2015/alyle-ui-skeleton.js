import { __decorate } from 'tslib';
import { Input, Directive, NgModule } from '@angular/core';
import { keyframesUniqueId, Dir, toBoolean, StyleRenderer, LyHostClass } from '@alyle/ui';

const STYLE_PRIORITY = -0.5;
const STYLES = (theme) => {
    const id = keyframesUniqueId.next();
    const { primary, secondary, tertiary } = theme.background;
    const dir = theme.direction === Dir.ltr ? -1 : 1;
    const lum = primary.default.luminance();
    let one = (lum < .5
        ? tertiary
        : secondary);
    let two = (lum < .5
        ? secondary
        : tertiary);
    one = one.darken(1 * (lum < .5 ? -.5 : 0));
    two = two.darken(.25 * (lum < .5 ? -1 : 1));
    return {
        $name: LySkeleton.и,
        $priority: STYLE_PRIORITY,
        $global: (className) => `@keyframes ${id}{${className} 0%{background-position:${-dir * 200}% 50%;}${className} 100%{background-position:${dir * 200}% 50%;}}`,
        root: (className) => `${className}{content:'';background:${`linear-gradient(270deg, ${one}, ${two}, ${two}, ${one})`};background-size:400% 400%;animation:${id} 8s ease-in-out infinite;color:transparent;cursor:progress;user-select:none;}`
    };
};
let LySkeleton = class LySkeleton {
    constructor(styleRenderer, hostClass) {
        this.styleRenderer = styleRenderer;
        this.hostClass = hostClass;
        /** @docs-private */
        this.classes = this.styleRenderer.addSheet(STYLES);
    }
    get skeleton() {
        return this._skeleton;
    }
    set skeleton(val) {
        const newVal = toBoolean(val);
        this._skeleton = newVal;
        this.hostClass.toggle(this.classes.root, newVal);
    }
};
/** @docs-private */
LySkeleton.и = 'LySkeleton';
LySkeleton.ctorParameters = () => [
    { type: StyleRenderer },
    { type: LyHostClass }
];
__decorate([
    Input('lySkeleton')
], LySkeleton.prototype, "skeleton", null);
LySkeleton = __decorate([
    Directive({
        selector: '[lySkeleton]',
        providers: [
            LyHostClass,
            StyleRenderer
        ],
        exportAs: 'lySkeleton'
    })
], LySkeleton);

let LySkeletonModule = class LySkeletonModule {
};
LySkeletonModule = __decorate([
    NgModule({
        declarations: [LySkeleton],
        exports: [LySkeleton]
    })
], LySkeletonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LySkeleton, LySkeletonModule, STYLES };
//# sourceMappingURL=alyle-ui-skeleton.js.map
