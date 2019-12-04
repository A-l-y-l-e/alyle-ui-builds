import { __decorate } from 'tslib';
import { Input, Directive, NgModule } from '@angular/core';
import { keyframesUniqueId, Dir, toBoolean, StyleRenderer, LyHostClass } from '@alyle/ui';

var STYLE_PRIORITY = -0.5;
var STYLES = function (theme) {
    var id = keyframesUniqueId.next();
    var _a = theme.background, primary = _a.primary, secondary = _a.secondary, tertiary = _a.tertiary;
    var dir = theme.direction === Dir.ltr ? -1 : 1;
    var lum = primary.default.luminance();
    var one = (lum < .5
        ? tertiary
        : secondary);
    var two = (lum < .5
        ? secondary
        : tertiary);
    one = one.darken(1 * (lum < .5 ? -.5 : 0));
    two = two.darken(.25 * (lum < .5 ? -1 : 1));
    return {
        $name: LySkeleton.и,
        $priority: STYLE_PRIORITY,
        $global: function (className) { return "@keyframes " + id + "{" + className + " 0%{background-position:" + -dir * 200 + "% 50%;}" + className + " 100%{background-position:" + dir * 200 + "% 50%;}}"; },
        root: function (className) { return className + "{content:'';background:" + ("linear-gradient(270deg, " + one + ", " + two + ", " + two + ", " + one + ")") + ";background-size:400% 400%;animation:" + id + " 8s ease-in-out infinite;color:transparent;cursor:progress;user-select:none;}"; }
    };
};
var LySkeleton = /** @class */ (function () {
    function LySkeleton(styleRenderer, hostClass) {
        this.styleRenderer = styleRenderer;
        this.hostClass = hostClass;
        /** @docs-private */
        this.classes = this.styleRenderer.addSheet(STYLES);
    }
    Object.defineProperty(LySkeleton.prototype, "skeleton", {
        get: function () {
            return this._skeleton;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            this._skeleton = newVal;
            this.hostClass.toggle(this.classes.root, newVal);
        },
        enumerable: true,
        configurable: true
    });
    /** @docs-private */
    LySkeleton.и = 'LySkeleton';
    LySkeleton.ctorParameters = function () { return [
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
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
    return LySkeleton;
}());

var LySkeletonModule = /** @class */ (function () {
    function LySkeletonModule() {
    }
    LySkeletonModule = __decorate([
        NgModule({
            declarations: [LySkeleton],
            exports: [LySkeleton]
        })
    ], LySkeletonModule);
    return LySkeletonModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LySkeleton, LySkeletonModule, STYLES };
//# sourceMappingURL=alyle-ui-skeleton.js.map
