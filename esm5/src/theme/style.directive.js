import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { eachMedia } from '../style-utils';
import { StyleRenderer, Style, WithStyles } from '../minimal/renderer-style';
var STYLE_PRIORITY = -0.5;
var ɵ0 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding:" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ1 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints, after = _a.after;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-" + after + ":" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ2 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints, before = _a.before;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-" + before + ":" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ3 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-top:" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ4 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-bottom:" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ5 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding:0 " + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ6 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding:" + to8Px(val) + " 0;}}"; }); }, true);
}; }, ɵ7 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin:" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ8 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints, after = _a.after;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-" + after + ":" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ9 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints, before = _a.before;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-" + before + ":" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ10 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-top:" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ11 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-bottom:" + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ12 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin:0 " + to8Px(val) + ";}}"; }); }, true);
}; }, ɵ13 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin:" + to8Px(val) + " 0;}}"; }); }, true);
}; }, ɵ14 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{width:" + transform(val) + ";}}"; }); }, true);
}; }, ɵ15 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{max-width:" + transform(val) + ";}}"; }); }, true);
}; }, ɵ16 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{min-width:" + transform(val) + ";}}"; }); }, true);
}; }, ɵ17 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{height:" + transform(val) + ";}}"; }); }, true);
}; }, ɵ18 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{max-height:" + transform(val) + ";}}"; }); }, true);
}; }, ɵ19 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{min-height:" + transform(val) + ";}}"; }); }, true);
}; }, ɵ20 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{display:" + val + ";}}"; }); }, true);
}; };
/**
 * @dynamic
 * Spacing
 * [p], [pf], [pe], [pt], [pb], [px], [py],
 * [m], [mf], [me], [mt], [mb], [mx], [my],
 * Sizing
 * [size],
 * [width], [maxWidth], [minWidth],
 * [height], [maxHeight], [minHeight],
 * Others
 * [lyStyle]
 * [width]
 */
var LyStyle = /** @class */ (function () {
    function LyStyle(sRenderer) {
        this.sRenderer = sRenderer;
    }
    LyStyle_1 = LyStyle;
    Object.defineProperty(LyStyle.prototype, "size", {
        set: function (value) {
            this.width = value;
            this.height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyStyle.prototype, "lyStyle", {
        get: function () {
            return this._lyStyle;
        },
        set: function (val) {
            if (typeof val === 'function') {
                this[0xa] = this.sRenderer.add(val, this[0xa]);
            }
            else if (val != null) {
                this[0xa] = this.sRenderer.add(LyStyle_1.и + "--style-" + val, function (_a) {
                    var breakpoints = _a.breakpoints;
                    return eachMedia(val, function (v, media) { return (function (className) { return "@media " + ((media && (breakpoints[media] || media)) || 'all') + "{" + className + "{" + v + ";}}"; }); }, true);
                }, STYLE_PRIORITY, this[0xa]);
            }
            else {
                this.sRenderer.removeClass(this[0xa]);
            }
        },
        enumerable: true,
        configurable: true
    });
    var LyStyle_1;
    /** @docs-private */
    LyStyle.и = 'LyStyle';
    LyStyle.ctorParameters = function () { return [
        { type: StyleRenderer }
    ]; };
    tslib_1.__decorate([
        Input(),
        Style(ɵ0)
    ], LyStyle.prototype, "p", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ1)
    ], LyStyle.prototype, "pf", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ2)
    ], LyStyle.prototype, "pe", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ3)
    ], LyStyle.prototype, "pt", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ4)
    ], LyStyle.prototype, "pb", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ5)
    ], LyStyle.prototype, "px", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ6)
    ], LyStyle.prototype, "py", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ7)
    ], LyStyle.prototype, "m", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ8)
    ], LyStyle.prototype, "mf", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ9)
    ], LyStyle.prototype, "me", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ10)
    ], LyStyle.prototype, "mt", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ11)
    ], LyStyle.prototype, "mb", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ12)
    ], LyStyle.prototype, "mx", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ13)
    ], LyStyle.prototype, "my", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ14)
    ], LyStyle.prototype, "width", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ15)
    ], LyStyle.prototype, "maxWidth", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ16)
    ], LyStyle.prototype, "minWidth", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ17)
    ], LyStyle.prototype, "height", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ18)
    ], LyStyle.prototype, "maxHeight", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ19)
    ], LyStyle.prototype, "minHeight", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "size", null);
    tslib_1.__decorate([
        Input(),
        Style(ɵ20)
    ], LyStyle.prototype, "display", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "lyStyle", null);
    LyStyle = LyStyle_1 = tslib_1.__decorate([
        Directive({
            selector: "[lyStyle],\n              [p], [pf], [pe], [pt], [pb], [px], [py],\n              [m], [mf], [me], [mt], [mb], [mx], [my],\n              [size],\n              [width], [maxWidth], [minWidth],\n              [height], [maxHeight], [minHeight],\n              [display]",
            providers: [
                StyleRenderer
            ]
        })
    ], LyStyle);
    return LyStyle;
}());
export { LyStyle };
/**
 * Convert to px if the value is a number, otherwise leave it as is
 * @docs-private
 */
function to8Px(val) {
    return typeof val === 'number'
        ? val * 8 + "px"
        : val;
}
function transform(value) {
    return value <= 1
        ? value * 100 + "%"
        : typeof value === 'string'
            ? value
            : value + "px";
}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL3N0eWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUk3RSxJQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQWlDeEIsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFDLEVBQTZCO1FBQTVCLDRCQUFXO0lBQXNCLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxDQUMzRSxVQUFDLFNBQWlCLElBQUssT0FBQSxhQUFVLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBSyxFQUF4RixDQUF3RixDQUNoSCxFQUY0RSxDQUU1RSxFQUFFLElBQUksQ0FBQztBQUZvQyxDQUVwQyxFQUZDLENBRUQsT0FLUixVQUFBLEtBQUssSUFBSSxPQUFBLFVBQUMsRUFBb0I7UUFBbkIsNEJBQVcsRUFBRSxnQkFBSztJQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxDQUNsRSxVQUFDLFNBQWlCLElBQUssT0FBQSxhQUFVLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBSSxTQUFTLGlCQUFZLEtBQUssU0FBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQUssRUFBakcsQ0FBaUcsQ0FD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S0FBSyxJQUFJLENBQUM7UUFDZixDQUFDLENBQUksS0FBZSxHQUFHLEdBQUcsTUFBRztRQUM3QixDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN6QixDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBSSxLQUFLLE9BQUksQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJy4uL3BhcnNlJztcbmltcG9ydCB7IGVhY2hNZWRpYSwgTWVkaWFRdWVyeUFycmF5IH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVSZW5kZXJlciwgU3R5bGUsIFdpdGhTdHlsZXMgfSBmcm9tICcuLi9taW5pbWFsL3JlbmRlcmVyLXN0eWxlJztcbmltcG9ydCB7IFRoZW1lUmVmIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMC41O1xuXG4vKipcbiAqIEBkeW5hbWljXG4gKiBTcGFjaW5nXG4gKiBbcF0sIFtwZl0sIFtwZV0sIFtwdF0sIFtwYl0sIFtweF0sIFtweV0sXG4gKiBbbV0sIFttZl0sIFttZV0sIFttdF0sIFttYl0sIFtteF0sIFtteV0sXG4gKiBTaXppbmdcbiAqIFtzaXplXSxcbiAqIFt3aWR0aF0sIFttYXhXaWR0aF0sIFttaW5XaWR0aF0sXG4gKiBbaGVpZ2h0XSwgW21heEhlaWdodF0sIFttaW5IZWlnaHRdLFxuICogT3RoZXJzXG4gKiBbbHlTdHlsZV1cbiAqIFt3aWR0aF1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW2x5U3R5bGVdLFxuICAgICAgICAgICAgICBbcF0sIFtwZl0sIFtwZV0sIFtwdF0sIFtwYl0sIFtweF0sIFtweV0sXG4gICAgICAgICAgICAgIFttXSwgW21mXSwgW21lXSwgW210XSwgW21iXSwgW214XSwgW215XSxcbiAgICAgICAgICAgICAgW3NpemVdLFxuICAgICAgICAgICAgICBbd2lkdGhdLCBbbWF4V2lkdGhdLCBbbWluV2lkdGhdLFxuICAgICAgICAgICAgICBbaGVpZ2h0XSwgW21heEhlaWdodF0sIFttaW5IZWlnaHRdLFxuICAgICAgICAgICAgICBbZGlzcGxheV1gLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlTdHlsZSBpbXBsZW1lbnRzIFdpdGhTdHlsZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlTdHlsZSc7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOiR7dG84UHgodmFsKX07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBwOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzLCBhZnRlcn0pID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy0ke2FmdGVyfToke3RvOFB4KHZhbCl9O319YFxuICAgICksIHRydWUpXG4gICkgcGY6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHMsIGJlZm9yZX0pID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy0ke2JlZm9yZX06JHt0bzhQeCh2YWwpfTt9fWBcbiAgICApLCB0cnVlKVxuICApIHBlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIHRydWUpXG4gICkgcHQ6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy1ib3R0b206JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBwYjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOjAgJHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBweDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOiR7dG84UHgodmFsKX0gMDt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBweTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW46JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBtOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzLCBhZnRlcn0pID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi0ke2FmdGVyfToke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCB0cnVlKVxuICApIG1mOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzLCBiZWZvcmV9KSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW4tJHtiZWZvcmV9OiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIHRydWUpXG4gICkgbWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17bWFyZ2luLXRvcDoke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCB0cnVlKVxuICApIG10OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi1ib3R0b206JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBtYjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW46MCAke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCB0cnVlKVxuICApIG14OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbjoke3RvOFB4KHZhbCl9IDA7fX1gXG4gICAgICAgICksIHRydWUpXG4gICkgbXk6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXt3aWR0aDoke3RyYW5zZm9ybSh2YWwpfTt9fWBcbiAgICApLCB0cnVlKVxuICApIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17bWF4LXdpZHRoOiR7dHJhbnNmb3JtKHZhbCl9O319YFxuICAgICksIHRydWUpXG4gICkgbWF4V2lkdGg6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttaW4td2lkdGg6JHt0cmFuc2Zvcm0odmFsKX07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBtaW5XaWR0aDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2hlaWdodDoke3RyYW5zZm9ybSh2YWwpfTt9fWBcbiAgICApLCB0cnVlKVxuICApIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21heC1oZWlnaHQ6JHt0cmFuc2Zvcm0odmFsKX07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBtYXhIZWlnaHQ6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttaW4taGVpZ2h0OiR7dHJhbnNmb3JtKHZhbCl9O319YFxuICAgICksIHRydWUpXG4gICkgbWluSGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy53aWR0aCA9IHZhbHVlO1xuICAgIHRoaXMuaGVpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2Rpc3BsYXk6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgZGlzcGxheTogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBnZXQgbHlTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlTdHlsZTtcbiAgfVxuICBzZXQgbHlTdHlsZSh2YWw6IHN0cmluZyB8IE1lZGlhUXVlcnlBcnJheSB8ICgodGhlbWU6IGFueSwgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSkgfCBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbMHhhXSA9IHRoaXMuc1JlbmRlcmVyLmFkZCh2YWwsIHRoaXNbMHhhXSk7XG4gICAgfSBlbHNlIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpc1sweGFdID0gdGhpcy5zUmVuZGVyZXIuYWRkKFxuICAgICAgICBgJHtMeVN0eWxlLtC4fS0tc3R5bGUtJHt2YWx9YCxcbiAgICAgICAgKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsISwgKHYsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIChicmVha3BvaW50c1ttZWRpYV0gfHwgbWVkaWEpKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9eyR7dn07fX1gXG4gICAgICAgICksIHRydWUpLFxuICAgICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgICAgdGhpc1sweGFdXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNSZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzWzB4YV0pO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9seVN0eWxlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IHNSZW5kZXJlcjogU3R5bGVSZW5kZXJlclxuICApIHsgfVxuXG59XG5cbi8qKlxuICogQ29udmVydCB0byBweCBpZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIsIG90aGVyd2lzZSBsZWF2ZSBpdCBhcyBpc1xuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0bzhQeCh2YWw6IG51bWJlciB8IHN0cmluZykge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcidcbiAgICA/IGAke3ZhbCAqIDh9cHhgXG4gICAgOiB2YWw7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZSA8PSAxXG4gICAgPyBgJHt2YWx1ZSBhcyBudW1iZXIgKiAxMDB9JWBcbiAgICA6IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gdmFsdWVcbiAgICAgIDogYCR7dmFsdWV9cHhgO1xufVxuIl19