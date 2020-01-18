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
}; }, ɵ21 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex:" + val + ";}}"; }); }, true);
}; }, ɵ22 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-basis:" + val + ";}}"; }); }, true);
}; }, ɵ23 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-direction:" + val + ";}}"; }); }, true);
}; }, ɵ24 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-grow:" + val + ";}}"; }); }, true);
}; }, ɵ25 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-self:" + val + ";}}"; }); }, true);
}; }, ɵ26 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-shrink:" + val + ";}}"; }); }, true);
}; }, ɵ27 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-wrap:" + val + ";}}"; }); }, true);
}; }, ɵ28 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{justify-content:" + val + ";}}"; }); }, true);
}; }, ɵ29 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{justify-items:" + val + ";}}"; }); }, true);
}; }, ɵ30 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{justify-self:" + val + ";}}"; }); }, true);
}; }, ɵ31 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{align-content:" + val + ";}}"; }); }, true);
}; }, ɵ32 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{align-items:" + val + ";}}"; }); }, true);
}; }, ɵ33 = function (value) { return function (_a) {
    var breakpoints = _a.breakpoints;
    return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{order:" + val + ";}}"; }); }, true);
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
        Input(),
        Style(ɵ21)
    ], LyStyle.prototype, "flex", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ22)
    ], LyStyle.prototype, "flexBasis", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ23)
    ], LyStyle.prototype, "flexDirection", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ24)
    ], LyStyle.prototype, "flexGrow", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ25)
    ], LyStyle.prototype, "flexSelf", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ26)
    ], LyStyle.prototype, "flexShrink", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ27)
    ], LyStyle.prototype, "flexWrap", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ28)
    ], LyStyle.prototype, "justifyContent", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ29)
    ], LyStyle.prototype, "justifyItems", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ30)
    ], LyStyle.prototype, "justifySelf", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ31)
    ], LyStyle.prototype, "alignContent", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ32)
    ], LyStyle.prototype, "alignItems", void 0);
    tslib_1.__decorate([
        Input(),
        Style(ɵ33)
    ], LyStyle.prototype, "order", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "lyStyle", null);
    LyStyle = LyStyle_1 = tslib_1.__decorate([
        Directive({
            selector: "[lyStyle],\n              [p], [pf], [pe], [pt], [pb], [px], [py],\n              [m], [mf], [me], [mt], [mb], [mx], [my],\n              [size],\n              [width], [maxWidth], [minWidth],\n              [height], [maxHeight], [minHeight],\n              [display],\n              [flex],\n              [flexBasis],\n              [flexDirection],\n              [flexGrow],\n              [flexSelf],\n              [flexShrink],\n              [flexWrap],\n              [justifyContent],\n              [justifyItems],\n              [justifySelf],\n              [alignContent],\n              [alignItems],\n              [order]",
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20, ɵ21, ɵ22, ɵ23, ɵ24, ɵ25, ɵ26, ɵ27, ɵ28, ɵ29, ɵ30, ɵ31, ɵ32, ɵ33 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL3N0eWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUk3RSxJQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQThDeEIsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFDLEVBQTZCO1FBQTVCLDRCQUFXO0lBQXNCLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxDQUMzRSxVQUFDLFNBQWlCLElBQUssT0FBQSxhQUFVLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBSyxFQUF4RixDQUF3RixDQUNoSCxFQUY0RSxDQUU1RSxFQUFFLElBQUksQ0FBQztBQUZvQyxDQUVwQyxFQUZDLENBRUQsT0FLUixVQUFBLEtBQUssSUFBSSxPQUFBLFVBQUMsRUFBb0I7UUFBbkIsNEJBQVcsRUFBRSxnQkFBSztJQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxDQUNsRSxVQUFDLFNBQWlCLElBQUssT0FBQSxhQUFVLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBSSxTQUFTLGlCQUFZLEtBQUssU0FBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQUssRUFBakcsQ0FBaUcsQ0FD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QUFvQztJQU9uQztRQUxELEtBQUssRUFBRTtRQUNQLEtBQUssS0FJTDs2Q0FBeUI7SUFPeEI7UUFMRCxLQUFLLEVBQUU7UUFDUCxLQUFLLEtBSUw7bURBQStCO0lBTzlCO1FBTEQsS0FBSyxFQUFFO1FBQ1AsS0FBSyxLQUlMO2lEQUE2QjtJQU81QjtRQUxELEtBQUssRUFBRTtRQUNQLEtBQUssS0FJTDtnREFBNEI7SUFPM0I7UUFMRCxLQUFLLEVBQUU7UUFDUCxLQUFLLEtBSUw7aURBQTZCO0lBTzVCO1FBTEQsS0FBSyxFQUFFO1FBQ1AsS0FBSyxLQUlMOytDQUEyQjtJQU8xQjtRQUxELEtBQUssRUFBRTtRQUNQLEtBQUssS0FJTDswQ0FBK0I7SUFHaEM7UUFEQyxLQUFLLEVBQUU7MENBR1A7SUE5UFUsT0FBTztRQXpCbkIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtvQkFtQlU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxPQUFPLENBcVJuQjtJQUFELGNBQUM7Q0FBQSxBQXJSRCxJQXFSQztTQXJSWSxPQUFPO0FBdVJwQjs7O0dBR0c7QUFDSCxTQUFTLEtBQUssQ0FBQyxHQUFvQjtJQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDNUIsQ0FBQyxDQUFJLEdBQUcsR0FBRyxDQUFDLE9BQUk7UUFDaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFzQjtJQUN2QyxPQUFPLEtBQUssSUFBSSxDQUFDO1FBQ2YsQ0FBQyxDQUFJLEtBQWUsR0FBRyxHQUFHLE1BQUc7UUFDN0IsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDekIsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUksS0FBSyxPQUFJLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFN0eWxlVGVtcGxhdGUgfSBmcm9tICcuLi9wYXJzZSc7XG5pbXBvcnQgeyBlYWNoTWVkaWEsIE1lZGlhUXVlcnlBcnJheSB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFN0eWxlUmVuZGVyZXIsIFN0eWxlLCBXaXRoU3R5bGVzIH0gZnJvbSAnLi4vbWluaW1hbC9yZW5kZXJlci1zdHlsZSc7XG5pbXBvcnQgeyBUaGVtZVJlZiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTAuNTtcblxuLyoqXG4gKiBAZHluYW1pY1xuICogU3BhY2luZ1xuICogW3BdLCBbcGZdLCBbcGVdLCBbcHRdLCBbcGJdLCBbcHhdLCBbcHldLFxuICogW21dLCBbbWZdLCBbbWVdLCBbbXRdLCBbbWJdLCBbbXhdLCBbbXldLFxuICogU2l6aW5nXG4gKiBbc2l6ZV0sXG4gKiBbd2lkdGhdLCBbbWF4V2lkdGhdLCBbbWluV2lkdGhdLFxuICogW2hlaWdodF0sIFttYXhIZWlnaHRdLCBbbWluSGVpZ2h0XSxcbiAqIE90aGVyc1xuICogW2x5U3R5bGVdXG4gKiBbd2lkdGhdXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVN0eWxlXSxcbiAgICAgICAgICAgICAgW3BdLCBbcGZdLCBbcGVdLCBbcHRdLCBbcGJdLCBbcHhdLCBbcHldLFxuICAgICAgICAgICAgICBbbV0sIFttZl0sIFttZV0sIFttdF0sIFttYl0sIFtteF0sIFtteV0sXG4gICAgICAgICAgICAgIFtzaXplXSxcbiAgICAgICAgICAgICAgW3dpZHRoXSwgW21heFdpZHRoXSwgW21pbldpZHRoXSxcbiAgICAgICAgICAgICAgW2hlaWdodF0sIFttYXhIZWlnaHRdLCBbbWluSGVpZ2h0XSxcbiAgICAgICAgICAgICAgW2Rpc3BsYXldLFxuICAgICAgICAgICAgICBbZmxleF0sXG4gICAgICAgICAgICAgIFtmbGV4QmFzaXNdLFxuICAgICAgICAgICAgICBbZmxleERpcmVjdGlvbl0sXG4gICAgICAgICAgICAgIFtmbGV4R3Jvd10sXG4gICAgICAgICAgICAgIFtmbGV4U2VsZl0sXG4gICAgICAgICAgICAgIFtmbGV4U2hyaW5rXSxcbiAgICAgICAgICAgICAgW2ZsZXhXcmFwXSxcbiAgICAgICAgICAgICAgW2p1c3RpZnlDb250ZW50XSxcbiAgICAgICAgICAgICAgW2p1c3RpZnlJdGVtc10sXG4gICAgICAgICAgICAgIFtqdXN0aWZ5U2VsZl0sXG4gICAgICAgICAgICAgIFthbGlnbkNvbnRlbnRdLFxuICAgICAgICAgICAgICBbYWxpZ25JdGVtc10sXG4gICAgICAgICAgICAgIFtvcmRlcl1gLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlTdHlsZSBpbXBsZW1lbnRzIFdpdGhTdHlsZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlTdHlsZSc7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOiR7dG84UHgodmFsKX07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBwOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzLCBhZnRlcn0pID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy0ke2FmdGVyfToke3RvOFB4KHZhbCl9O319YFxuICAgICksIHRydWUpXG4gICkgcGY6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHMsIGJlZm9yZX0pID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy0ke2JlZm9yZX06JHt0bzhQeCh2YWwpfTt9fWBcbiAgICApLCB0cnVlKVxuICApIHBlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIHRydWUpXG4gICkgcHQ6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy1ib3R0b206JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBwYjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOjAgJHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBweDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOiR7dG84UHgodmFsKX0gMDt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBweTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW46JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBtOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzLCBhZnRlcn0pID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi0ke2FmdGVyfToke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCB0cnVlKVxuICApIG1mOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzLCBiZWZvcmV9KSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW4tJHtiZWZvcmV9OiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIHRydWUpXG4gICkgbWU6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17bWFyZ2luLXRvcDoke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCB0cnVlKVxuICApIG10OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi1ib3R0b206JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgdHJ1ZSlcbiAgKSBtYjogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW46MCAke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCB0cnVlKVxuICApIG14OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbjoke3RvOFB4KHZhbCl9IDA7fX1gXG4gICAgICAgICksIHRydWUpXG4gICkgbXk6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXt3aWR0aDoke3RyYW5zZm9ybSh2YWwpfTt9fWBcbiAgICApLCB0cnVlKVxuICApIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudW1iZXIgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17bWF4LXdpZHRoOiR7dHJhbnNmb3JtKHZhbCl9O319YFxuICAgICksIHRydWUpXG4gICkgbWF4V2lkdGg6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttaW4td2lkdGg6JHt0cmFuc2Zvcm0odmFsKX07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBtaW5XaWR0aDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2hlaWdodDoke3RyYW5zZm9ybSh2YWwpfTt9fWBcbiAgICApLCB0cnVlKVxuICApIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21heC1oZWlnaHQ6JHt0cmFuc2Zvcm0odmFsKX07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBtYXhIZWlnaHQ6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bWJlciB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttaW4taGVpZ2h0OiR7dHJhbnNmb3JtKHZhbCl9O319YFxuICAgICksIHRydWUpXG4gICkgbWluSGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy53aWR0aCA9IHZhbHVlO1xuICAgIHRoaXMuaGVpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2Rpc3BsYXk6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgZGlzcGxheTogc3RyaW5nIHwgbnVsbDtcblxuXG4gIC8vIEZsZXhib3hcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2ZsZXg6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgZmxleDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2ZsZXgtYmFzaXM6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgZmxleEJhc2lzOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17ZmxleC1kaXJlY3Rpb246JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgZmxleERpcmVjdGlvbjogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2ZsZXgtZ3Jvdzoke3ZhbH07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBmbGV4R3Jvdzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2ZsZXgtc2VsZjoke3ZhbH07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBmbGV4U2VsZjogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2ZsZXgtc2hyaW5rOiR7dmFsfTt9fWBcbiAgICApLCB0cnVlKVxuICApIGZsZXhTaHJpbms6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtmbGV4LXdyYXA6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgZmxleFdyYXA6IHN0cmluZyB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtqdXN0aWZ5LWNvbnRlbnQ6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkganVzdGlmeUNvbnRlbnQ6IHN0cmluZyB8IG51bGw7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZyB8IG51bGw+KFxuICAgIHZhbHVlID0+ICh7YnJlYWtwb2ludHN9OiBUaGVtZVZhcmlhYmxlcykgPT4gZWFjaE1lZGlhKHZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7KG1lZGlhICYmIGJyZWFrcG9pbnRzW21lZGlhXSkgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtqdXN0aWZ5LWl0ZW1zOiR7dmFsfTt9fWBcbiAgICApLCB0cnVlKVxuICApIGp1c3RpZnlJdGVtczogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2p1c3RpZnktc2VsZjoke3ZhbH07fX1gXG4gICAgKSwgdHJ1ZSlcbiAgKSBqdXN0aWZ5U2VsZjogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e2FsaWduLWNvbnRlbnQ6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgYWxpZ25Db250ZW50OiBzdHJpbmcgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudWxsPihcbiAgICB2YWx1ZSA9PiAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAkeyhtZWRpYSAmJiBicmVha3BvaW50c1ttZWRpYV0pIHx8ICdhbGwnfXske2NsYXNzTmFtZX17YWxpZ24taXRlbXM6JHt2YWx9O319YFxuICAgICksIHRydWUpXG4gICkgYWxpZ25JdGVtczogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBAU3R5bGU8c3RyaW5nIHwgbnVtYmVyIHwgbnVsbD4oXG4gICAgdmFsdWUgPT4gKHticmVha3BvaW50c306IFRoZW1lVmFyaWFibGVzKSA9PiBlYWNoTWVkaWEodmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgYnJlYWtwb2ludHNbbWVkaWFdKSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e29yZGVyOiR7dmFsfTt9fWBcbiAgICApLCB0cnVlKVxuICApIG9yZGVyOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBseVN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9seVN0eWxlO1xuICB9XG4gIHNldCBseVN0eWxlKHZhbDogc3RyaW5nIHwgTWVkaWFRdWVyeUFycmF5IHwgKCh0aGVtZTogYW55LCByZWY6IFRoZW1lUmVmKSA9PiBTdHlsZVRlbXBsYXRlKSB8IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1sweGFdID0gdGhpcy5zUmVuZGVyZXIuYWRkKHZhbCwgdGhpc1sweGFdKTtcbiAgICB9IGVsc2UgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzWzB4YV0gPSB0aGlzLnNSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5U3R5bGUu0Lh9LS1zdHlsZS0ke3ZhbH1gLFxuICAgICAgICAoe2JyZWFrcG9pbnRzfTogVGhlbWVWYXJpYWJsZXMpID0+IGVhY2hNZWRpYSh2YWwhLCAodiwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHsobWVkaWEgJiYgKGJyZWFrcG9pbnRzW21lZGlhXSB8fCBtZWRpYSkpIHx8ICdhbGwnfXske2NsYXNzTmFtZX17JHt2fTt9fWBcbiAgICAgICAgKSwgdHJ1ZSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgICB0aGlzWzB4YV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc1JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXNbMHhhXSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2x5U3R5bGU6IHN0cmluZyB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgc1JlbmRlcmVyOiBTdHlsZVJlbmRlcmVyXG4gICkgeyB9XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRvIHB4IGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgb3RoZXJ3aXNlIGxlYXZlIGl0IGFzIGlzXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRvOFB4KHZhbDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJ1xuICAgID8gYCR7dmFsICogOH1weGBcbiAgICA6IHZhbDtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbHVlIDw9IDFcbiAgICA/IGAke3ZhbHVlIGFzIG51bWJlciAqIDEwMH0lYFxuICAgIDogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgPyB2YWx1ZVxuICAgICAgOiBgJHt2YWx1ZX1weGA7XG59XG4iXX0=