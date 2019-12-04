import * as tslib_1 from "tslib";
import { Directive, Input, SimpleChange } from '@angular/core';
import { StyleCollection } from '../parse';
import { eachMedia } from '../style-utils';
import { LyHostClass } from '../minimal/host-class';
import { StyleRenderer } from '../minimal/renderer-style';
var STYLE_PRIORITY = -0.5;
var LyStyle = /** @class */ (function () {
    function LyStyle(_sr, _hClass) {
        this._sr = _sr;
        this._hClass = _hClass;
    }
    LyStyle_1 = LyStyle;
    Object.defineProperty(LyStyle.prototype, "lyStyle", {
        get: function () {
            return this._lyStyle;
        },
        set: function (val) {
            if (typeof val === 'function') {
                this._sr.add(val);
            }
            else {
                this._updateStyle(0xa, 'style', val, function () { return eachMedia(val, function (v, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{" + v + ";}}"; }); }, new StyleCollection()); });
            }
        },
        enumerable: true,
        configurable: true
    });
    LyStyle.prototype._updateStyle = function (index, styleId, simpleChange, style) {
        if (simpleChange) {
            var currentValue = simpleChange instanceof SimpleChange
                ? simpleChange.currentValue
                : simpleChange;
            if (currentValue != null) {
                this[index] = this._sr.add(LyStyle_1.и + "--" + styleId + "-" + currentValue, style, STYLE_PRIORITY, this[index]);
            }
            else {
                this._hClass.remove(this[index]);
            }
        }
    };
    LyStyle.prototype.ngOnChanges = function (_a) {
        var p = _a.p, pf = _a.pf, pe = _a.pe, pt = _a.pt, pb = _a.pb, px = _a.px, py = _a.py, m = _a.m, mf = _a.mf, me = _a.me, mt = _a.mt, mb = _a.mb, mx = _a.mx, my = _a.my, display = _a.display, width = _a.width, maxWidth = _a.maxWidth;
        if (p) {
            var currentValue_1 = p.currentValue;
            this._updateStyle(0x1, 'p', p, function () { return eachMedia(currentValue_1, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding:" + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (pf) {
            var currentValue_2 = pf.currentValue;
            this._updateStyle(0x2, 'pf', pf, function (_a) {
                var after = _a.after;
                return eachMedia(currentValue_2, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding-" + after + ":" + to8Px(val) + ";}}"; }); }, new StyleCollection());
            });
        }
        if (pe) {
            var currentValue_3 = pe.currentValue;
            this._updateStyle(0x3, 'pe', pe, function (_a) {
                var before = _a.before;
                return eachMedia(currentValue_3, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding-" + before + ":" + to8Px(val) + ";}}"; }); }, new StyleCollection());
            });
        }
        if (pt) {
            var currentValue_4 = pt.currentValue;
            this._updateStyle(0x4, 'pt', pt, function () { return eachMedia(currentValue_4, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding-top:" + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (pb) {
            var currentValue_5 = pb.currentValue;
            this._updateStyle(0x5, 'pb', pb, function () { return eachMedia(currentValue_5, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding-bottom:" + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (px) {
            var currentValue_6 = px.currentValue;
            this._updateStyle(0x6, 'px', px, function () { return eachMedia(currentValue_6, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding:0 " + (typeof val === 'number'
                ? val * 8 + 'px'
                : val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (py) {
            var currentValue_7 = py.currentValue;
            this._updateStyle(0x7, 'py', py, function () { return eachMedia(currentValue_7, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{padding:" + (typeof val === 'number'
                ? val * 8 + 'px'
                : val) + " 0;}}"; }); }, new StyleCollection()); });
        }
        if (m) {
            var currentValue_8 = m.currentValue;
            this._updateStyle(0x8, 'm', m, function () { return eachMedia(currentValue_8, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin:" + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (mf) {
            var currentValue_9 = mf.currentValue;
            this._updateStyle(0x9, 'mf', mf, function (_a) {
                var after = _a.after;
                return eachMedia(currentValue_9, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin-" + after + ":" + to8Px(val) + ";}}"; }); }, new StyleCollection());
            });
        }
        if (me) {
            var currentValue_10 = me.currentValue;
            this._updateStyle(0x10, 'me', me, function (_a) {
                var before = _a.before;
                return eachMedia(currentValue_10, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin-" + before + ":" + to8Px(val) + ";}}"; }); }, new StyleCollection());
            });
        }
        if (mt) {
            var currentValue_11 = mt.currentValue;
            this._updateStyle(0x11, 'mt', mt, function () { return eachMedia(currentValue_11, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin-top:" + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (mb) {
            var currentValue_12 = mb.currentValue;
            this._updateStyle(0x12, 'mb', mb, function () { return eachMedia(currentValue_12, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin-bottom:" + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (mx) {
            var currentValue_13 = mx.currentValue;
            this._updateStyle(0x13, 'mx', mx, function () { return eachMedia(currentValue_13, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin:0 " + to8Px(val) + ";}}"; }); }, new StyleCollection()); });
        }
        if (my) {
            var currentValue_14 = my.currentValue;
            this._updateStyle(0x14, 'my', my, function () { return eachMedia(currentValue_14, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{margin:" + to8Px(val) + " 0;}}"; }); }, new StyleCollection()); });
        }
        if (display) {
            var currentValue_15 = display.currentValue;
            this._updateStyle(0x15, 'display', display, function () { return eachMedia(currentValue_15, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{display:" + val + ";}}"; }); }, new StyleCollection()); });
        }
        this._updateStyle(0x16, 'width', width, function () { return eachMedia(width.currentValue, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{width:" + transform(val) + ";}}"; }); }, new StyleCollection()); });
        this._updateStyle(0x17, 'maxWidth', maxWidth, function () { return eachMedia(maxWidth.currentValue, function (val, media) { return (function (className) { return "@media " + (media || 'all') + "{" + className + "{max-width:" + transform(val) + ";}}"; }); }, new StyleCollection()); });
    };
    var LyStyle_1;
    /** @docs-private */
    LyStyle.и = 'LyStyle';
    LyStyle.ctorParameters = function () { return [
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "p", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "pf", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "pe", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "pt", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "pb", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "px", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "py", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "m", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "mf", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "me", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "mt", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "mb", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "mx", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "my", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "display", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "width", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "maxWidth", void 0);
    tslib_1.__decorate([
        Input()
    ], LyStyle.prototype, "lyStyle", null);
    LyStyle = LyStyle_1 = tslib_1.__decorate([
        Directive({
            selector: "[lyStyle],\n              [p], [pf], [pe], [pt], [pb], [px], [py],\n              [m], [mf], [me], [mt], [mb], [mx], [my],\n              [display],\n              [maxWidth],\n              [width]",
            providers: [
                LyHostClass,
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
        : value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL3N0eWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQ0wsZUFBZSxFQUNBLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzFELElBQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBYzVCO0lBMENFLGlCQUNVLEdBQWtCLEVBQ2xCLE9BQW9CO1FBRHBCLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUMxQixDQUFDO2dCQTdDTSxPQUFPO0lBdUJsQixzQkFBSSw0QkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFZLEdBQW1FO1lBQzdFLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFFO2dCQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUNmLEdBQUcsRUFDSCxPQUFPLEVBQ1AsR0FBRyxFQUNILGNBQU0sT0FBQSxTQUFTLENBQUMsR0FBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLENBQ2xDLFVBQUMsU0FBaUIsSUFBSyxPQUFBLGFBQVUsS0FBSyxJQUFJLEtBQUssVUFBSSxTQUFTLFNBQUksQ0FBQyxRQUFLLEVBQS9DLENBQStDLENB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LElBa1NDO1NBbFNZLE9BQU87QUFvU3BCOzs7R0FHRztBQUNILFNBQVMsS0FBSyxDQUFDLEdBQW9CO0lBQ2pDLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUTtRQUM1QixDQUFDLENBQUksR0FBRyxHQUFHLENBQUMsT0FBSTtRQUNoQixDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQXNCO0lBQ3ZDLE9BQU8sS0FBSyxJQUFJLENBQUM7UUFDZixDQUFDLENBQUksS0FBZSxHQUFHLEdBQUcsTUFBRztRQUM3QixDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBTdHlsZVRlbXBsYXRlIH0gZnJvbSAnLi4vcGFyc2UnO1xuaW1wb3J0IHsgZWFjaE1lZGlhIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgTHlIb3N0Q2xhc3MgfSBmcm9tICcuLi9taW5pbWFsL2hvc3QtY2xhc3MnO1xuaW1wb3J0IHsgU3R5bGVSZW5kZXJlciB9IGZyb20gJy4uL21pbmltYWwvcmVuZGVyZXItc3R5bGUnO1xuaW1wb3J0IHsgVGhlbWVSZWYgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMC41O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbbHlTdHlsZV0sXG4gICAgICAgICAgICAgIFtwXSwgW3BmXSwgW3BlXSwgW3B0XSwgW3BiXSwgW3B4XSwgW3B5XSxcbiAgICAgICAgICAgICAgW21dLCBbbWZdLCBbbWVdLCBbbXRdLCBbbWJdLCBbbXhdLCBbbXldLFxuICAgICAgICAgICAgICBbZGlzcGxheV0sXG4gICAgICAgICAgICAgIFttYXhXaWR0aF0sXG4gICAgICAgICAgICAgIFt3aWR0aF1gLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlTdHlsZSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeVN0eWxlJztcblxuICBASW5wdXQoKSBwOiAgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgcGY6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIHBlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBwdDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgcGI6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIHB4OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBweTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgbTogIHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIG1mOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBtZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgbXQ6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIG1iOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBteDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgbXk6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIGRpc3BsYXk6IHN0cmluZyB8IG51bGw7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBtYXhXaWR0aDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBnZXQgbHlTdHlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlTdHlsZTtcbiAgfVxuICBzZXQgbHlTdHlsZSh2YWw6IHN0cmluZyB8ICgodGhlbWU6IGFueSwgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSkgfCBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3NyLmFkZCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHhhLFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICB2YWwsXG4gICAgICAgICgpID0+IGVhY2hNZWRpYSh2YWwhLCAodiwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9eyR7dn07fX1gXG4gICAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2x5U3R5bGU6IHN0cmluZyB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc3I6IFN0eWxlUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfaENsYXNzOiBMeUhvc3RDbGFzc1xuICApIHsgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlKFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgc3R5bGVJZDogc3RyaW5nLFxuICAgIHNpbXBsZUNoYW5nZTogU2ltcGxlQ2hhbmdlIHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCxcbiAgICBzdHlsZTogKHRoZW1lOiBhbnksIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGVcbiAgKSB7XG4gICAgaWYgKHNpbXBsZUNoYW5nZSkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gc2ltcGxlQ2hhbmdlIGluc3RhbmNlb2YgU2ltcGxlQ2hhbmdlXG4gICAgICAgID8gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZVxuICAgICAgICA6IHNpbXBsZUNoYW5nZTtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzW2luZGV4XSA9IHRoaXMuX3NyLmFkZChcbiAgICAgICAgICBgJHtMeVN0eWxlLtC4fS0tJHtzdHlsZUlkfS0ke2N1cnJlbnRWYWx1ZX1gLFxuICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgIFNUWUxFX1BSSU9SSVRZLCB0aGlzW2luZGV4XVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faENsYXNzLnJlbW92ZSh0aGlzW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoe3AsXG4gICAgcGYsXG4gICAgcGUsXG4gICAgcHQsXG4gICAgcGIsXG4gICAgcHgsXG4gICAgcHksXG4gICAgbSxcbiAgICBtZixcbiAgICBtZSxcbiAgICBtdCxcbiAgICBtYixcbiAgICBteCxcbiAgICBteSxcbiAgICBkaXNwbGF5LFxuICAgIHdpZHRoLFxuICAgIG1heFdpZHRoXG4gIH06IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAocCkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUgfSA9IHA7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHgxLFxuICAgICAgICAncCcsXG4gICAgICAgIHAsXG4gICAgICAgICgpID0+IGVhY2hNZWRpYShjdXJyZW50VmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7bWVkaWEgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nOiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBmKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gcGY7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHgyLFxuICAgICAgICAncGYnLFxuICAgICAgICBwZixcbiAgICAgICAgKHthZnRlcn0pID0+IGVhY2hNZWRpYShjdXJyZW50VmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7bWVkaWEgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtwYWRkaW5nLSR7YWZ0ZXJ9OiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHBlKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gcGU7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHgzLFxuICAgICAgICAncGUnLFxuICAgICAgICBwZSxcbiAgICAgICAgKHtiZWZvcmV9KSA9PiBlYWNoTWVkaWEoY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAke21lZGlhIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy0ke2JlZm9yZX06JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocHQpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBwdDtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDQsXG4gICAgICAgICdwdCcsXG4gICAgICAgIHB0LFxuICAgICAgICAoKSA9PiBlYWNoTWVkaWEoY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAke21lZGlhIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy10b3A6JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocGIpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBwYjtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDUsXG4gICAgICAgICdwYicsXG4gICAgICAgIHBiLFxuICAgICAgICAoKSA9PiBlYWNoTWVkaWEoY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAke21lZGlhIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZy1ib3R0b206JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAocHgpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBweDtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDYsXG4gICAgICAgICdweCcsXG4gICAgICAgIHB4LFxuICAgICAgICAoKSA9PiBlYWNoTWVkaWEoY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAke21lZGlhIHx8ICdhbGwnfXske2NsYXNzTmFtZX17cGFkZGluZzowICR7dHlwZW9mIHZhbCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgPyB2YWwgKiA4ICsgJ3B4J1xuICAgICAgICAgICAgICA6IHZhbH07fX1gXG4gICAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHB5KSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gcHk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHg3LFxuICAgICAgICAncHknLFxuICAgICAgICBweSxcbiAgICAgICAgKCkgPT4gZWFjaE1lZGlhKGN1cnJlbnRWYWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e3BhZGRpbmc6JHt0eXBlb2YgdmFsID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICA/IHZhbCAqIDggKyAncHgnXG4gICAgICAgICAgICAgIDogdmFsfSAwO319YFxuICAgICAgICApLCBuZXcgU3R5bGVDb2xsZWN0aW9uKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gbTtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDgsXG4gICAgICAgICdtJyxcbiAgICAgICAgbSxcbiAgICAgICAgKCkgPT4gZWFjaE1lZGlhKGN1cnJlbnRWYWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbjoke3RvOFB4KHZhbCl9O319YFxuICAgICAgICApLCBuZXcgU3R5bGVDb2xsZWN0aW9uKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtZikge1xuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUgfSA9IG1mO1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGUoXG4gICAgICAgIDB4OSxcbiAgICAgICAgJ21mJyxcbiAgICAgICAgbWYsXG4gICAgICAgICh7YWZ0ZXJ9KSA9PiBlYWNoTWVkaWEoY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAgIChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBtZWRpYSAke21lZGlhIHx8ICdhbGwnfXske2NsYXNzTmFtZX17bWFyZ2luLSR7YWZ0ZXJ9OiR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1lKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gbWU7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHgxMCxcbiAgICAgICAgJ21lJyxcbiAgICAgICAgbWUsXG4gICAgICAgICh7YmVmb3JlfSkgPT4gZWFjaE1lZGlhKGN1cnJlbnRWYWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi0ke2JlZm9yZX06JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobXQpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBtdDtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDExLFxuICAgICAgICAnbXQnLFxuICAgICAgICBtdCxcbiAgICAgICAgKCkgPT4gZWFjaE1lZGlhKGN1cnJlbnRWYWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi10b3A6JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobWIpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBtYjtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDEyLFxuICAgICAgICAnbWInLFxuICAgICAgICBtYixcbiAgICAgICAgKCkgPT4gZWFjaE1lZGlhKGN1cnJlbnRWYWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbi1ib3R0b206JHt0bzhQeCh2YWwpfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobXgpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBteDtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDEzLFxuICAgICAgICAnbXgnLFxuICAgICAgICBteCxcbiAgICAgICAgKCkgPT4gZWFjaE1lZGlhKGN1cnJlbnRWYWx1ZSwgKHZhbCwgbWVkaWEpID0+IChcbiAgICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21hcmdpbjowICR7dG84UHgodmFsKX07fX1gXG4gICAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG15KSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gbXk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgICAgMHgxNCxcbiAgICAgICAgJ215JyxcbiAgICAgICAgbXksXG4gICAgICAgICgpID0+IGVhY2hNZWRpYShjdXJyZW50VmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7bWVkaWEgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXttYXJnaW46JHt0bzhQeCh2YWwpfSAwO319YFxuICAgICAgICApLCBuZXcgU3R5bGVDb2xsZWN0aW9uKCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSB9ID0gZGlzcGxheTtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKFxuICAgICAgICAweDE1LFxuICAgICAgICAnZGlzcGxheScsXG4gICAgICAgIGRpc3BsYXksXG4gICAgICAgICgpID0+IGVhY2hNZWRpYShjdXJyZW50VmFsdWUsICh2YWwsIG1lZGlhKSA9PiAoXG4gICAgICAgICAgKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQG1lZGlhICR7bWVkaWEgfHwgJ2FsbCd9eyR7Y2xhc3NOYW1lfXtkaXNwbGF5OiR7dmFsfTt9fWBcbiAgICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgIDB4MTYsXG4gICAgICAnd2lkdGgnLFxuICAgICAgd2lkdGgsXG4gICAgICAoKSA9PiBlYWNoTWVkaWEod2lkdGguY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e3dpZHRoOiR7dHJhbnNmb3JtKHZhbCl9O319YFxuICAgICAgKSwgbmV3IFN0eWxlQ29sbGVjdGlvbigpKVxuICAgICk7XG5cbiAgICB0aGlzLl91cGRhdGVTdHlsZShcbiAgICAgIDB4MTcsXG4gICAgICAnbWF4V2lkdGgnLFxuICAgICAgbWF4V2lkdGgsXG4gICAgICAoKSA9PiBlYWNoTWVkaWEobWF4V2lkdGguY3VycmVudFZhbHVlLCAodmFsLCBtZWRpYSkgPT4gKFxuICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAbWVkaWEgJHttZWRpYSB8fCAnYWxsJ317JHtjbGFzc05hbWV9e21heC13aWR0aDoke3RyYW5zZm9ybSh2YWwpfTt9fWBcbiAgICAgICksIG5ldyBTdHlsZUNvbGxlY3Rpb24oKSlcbiAgICApO1xuXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRvIHB4IGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgb3RoZXJ3aXNlIGxlYXZlIGl0IGFzIGlzXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRvOFB4KHZhbDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJ1xuICAgID8gYCR7dmFsICogOH1weGBcbiAgICA6IHZhbDtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbHVlIDw9IDFcbiAgICA/IGAke3ZhbHVlIGFzIG51bWJlciAqIDEwMH0lYFxuICAgIDogdmFsdWU7XG59XG4iXX0=