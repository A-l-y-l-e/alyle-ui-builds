/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LyTheme2, toBoolean } from '@alyle/ui';
/** @type {?} */
var styles = ({
    root: {
        margin: 0,
        display: 'block'
    }
});
/** @enum {number} */
var Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = 'default';
Gutter[Gutter.top] = 'top';
Gutter[Gutter.bottom] = 'bottom';
var LyTypography = /** @class */ (function () {
    function LyTypography(style, elementRef, renderer) {
        this.style = style;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classes = this.style.addStyleSheet(styles, 'lyTyp', -1);
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyTypography.prototype, "lyTyp", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lyTyp;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.lyTyp) {
                this._lyTypClass = this._createTypClass(val, this._lyTypClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutter;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutter) {
                this._gutter = newVal;
                this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterTop;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterTop) {
                this._gutterTop = newVal;
                // const newClass = this._createGutterClass(Gutter.top, newVal);
                this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTypography.prototype, "gutterBottom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutterBottom;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
            if (newVal !== this.gutterBottom) {
                this._gutterBottom = newVal;
                this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTypography.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error("use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'");
        }
    };
    /**
     * @param {?} key
     * @param {?} instance
     * @return {?}
     */
    LyTypography.prototype._createTypClass = /**
     * @param {?} key
     * @param {?} instance
     * @return {?}
     */
    function (key, instance) {
        /** @type {?} */
        var newKey = "k-typ:" + key;
        return this.style.addStyle(newKey, function (theme) {
            var typography = theme.typography;
            var _a = typography[key || 'body1'], fontSize = _a.fontSize, fontWeight = _a.fontWeight, letterSpacing = _a.letterSpacing, textTransform = _a.textTransform, lineHeight = _a.lineHeight;
            /** @type {?} */
            var style = ("font-size:" + theme.pxToRem(fontSize) + ";" +
                ("font-weight:" + fontWeight + ";") +
                ("letter-spacing:" + theme.pxToRem(letterSpacing) + ";"));
            if (lineHeight) {
                style += "line-height:" + theme.pxToRem(lineHeight) + ";";
            }
            if (textTransform) {
                style += "text-transform:" + textTransform + ";";
            }
            return style;
        }, this.elementRef.nativeElement, instance);
    };
    /**
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    LyTypography.prototype._createGutterClass = /**
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    function (name, val, instance) {
        return this.style.addStyle("k-typ-gutter:" + name + ":" + val, function (theme) {
            /** @type {?} */
            var gutter = name === Gutter.default;
            return ("margin-top:" + (val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0) + "em;" +
                ("margin-bottom:" + (val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0) + "em;"));
        }, this.elementRef.nativeElement, instance);
    };
    LyTypography.decorators = [
        { type: Directive, args: [{
                    selector: "[lyTyp]"
                },] },
    ];
    /** @nocollapse */
    LyTypography.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyTypography.propDecorators = {
        lyTyp: [{ type: Input }],
        gutter: [{ type: Input }],
        gutterTop: [{ type: Input }],
        gutterBottom: [{ type: Input }]
    };
    return LyTypography;
}());
export { LyTypography };
if (false) {
    /** @type {?} */
    LyTypography.prototype.classes;
    /** @type {?} */
    LyTypography.prototype._lyTyp;
    /** @type {?} */
    LyTypography.prototype._lyTypClass;
    /** @type {?} */
    LyTypography.prototype._gutter;
    /** @type {?} */
    LyTypography.prototype._gutterClass;
    /** @type {?} */
    LyTypography.prototype._gutterTop;
    /** @type {?} */
    LyTypography.prototype._gutterTopClass;
    /** @type {?} */
    LyTypography.prototype._gutterBottom;
    /** @type {?} */
    LyTypography.prototype._gutterBottomClass;
    /** @type {?} */
    LyTypography.prototype.style;
    /** @type {?} */
    LyTypography.prototype.elementRef;
    /** @type {?} */
    LyTypography.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFaEQsSUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFLE9BQU87S0FDakI7Q0FDRixDQUFDLENBQUM7OztJQUdELFVBQU87SUFDUCxNQUFHO0lBQ0gsU0FBTTs7Y0FGTixPQUFPO2NBQ1AsR0FBRztjQUNILE1BQU07O0lBbUVOLHNCQUNVLE9BQ0EsWUFDQTtRQUZBLFVBQUssR0FBTCxLQUFLO1FBQ0wsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTt1QkEvRFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQWlFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxRTtJQXJERCxzQkFDSSwrQkFBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1UsR0FBVztZQUNuQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENB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LEVBQUUsR0FBWSxFQUFFLFFBQWdCO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3hCLGtCQUFnQixJQUFJLFNBQUksR0FBSyxFQUM3QixVQUFBLEtBQUs7O1lBQ0gsSUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDdkMsT0FBTyxDQUNMLGlCQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFNO2lCQUM1RixvQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQU0sQ0FBQSxDQUN0RyxDQUFDO1NBQ0gsRUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQ3hDLENBQUM7OztnQkFsSEwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7OztnQkFqQlEsUUFBUTtnQkFERyxVQUFVO2dCQUFFLFNBQVM7Ozt3QkFpQ3RDLEtBQUs7eUJBVUwsS0FBSzs0QkFZTCxLQUFLOytCQWFMLEtBQUs7O3VCQXBFUjs7U0FtQmEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgaXNEZXZNb2RlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfVxufSk7XG5cbmVudW0gR3V0dGVyIHtcbiAgZGVmYXVsdCxcbiAgdG9wLFxuICBib3R0b20sXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnN0eWxlLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlUeXAnLCAtMSk7XG4gIHByaXZhdGUgX2x5VHlwOiBzdHJpbmc7XG4gIHByaXZhdGUgX2x5VHlwQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJUb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICB0aGlzLl9seVR5cENsYXNzID0gdGhpcy5fY3JlYXRlVHlwQ2xhc3ModmFsLCB0aGlzLl9seVR5cENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGx5VHlwKCkge1xuICAgIHJldHVybiB0aGlzLl9seVR5cDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBndXR0ZXIodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5ndXR0ZXIpIHtcbiAgICAgIHRoaXMuX2d1dHRlciA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuX2d1dHRlckNsYXNzID0gdGhpcy5fY3JlYXRlR3V0dGVyQ2xhc3MoR3V0dGVyLmRlZmF1bHQsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyVG9wKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyVG9wKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3AgPSBuZXdWYWw7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCk7XG4gICAgICB0aGlzLl9ndXR0ZXJUb3BDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci50b3AsIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJUb3A7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyQm90dG9tKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyQm90dG9tKSB7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b20gPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJCb3R0b21DbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5ib3R0b20sIG5ld1ZhbCwgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZ3V0dGVyQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXJCb3R0b207XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLmFkZFN0eWxlPGFueT4obmV3S2V5LFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cG9ncmFwaHkgfSA9IHRoZW1lO1xuICAgICAgICBjb25zdCB7IGZvbnRTaXplLCBmb250V2VpZ2h0LCBsZXR0ZXJTcGFjaW5nLCB0ZXh0VHJhbnNmb3JtLCBsaW5lSGVpZ2h0IH0gPSB0eXBvZ3JhcGh5W2tleSB8fCAnYm9keTEnXTtcbiAgICAgICAgbGV0IHN0eWxlID0gKFxuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7Zm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShsZXR0ZXJTcGFjaW5nKX07YFxuICAgICAgICApO1xuICAgICAgICBpZiAobGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWxlICs9IGBsaW5lLWhlaWdodDoke3RoZW1lLnB4VG9SZW0obGluZUhlaWdodCl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzdHlsZSArPSBgdGV4dC10cmFuc2Zvcm06JHt0ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUd1dHRlckNsYXNzKG5hbWU6IEd1dHRlciwgdmFsOiBib29sZWFuLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUuYWRkU3R5bGU8YW55PihcbiAgICAgIGBrLXR5cC1ndXR0ZXI6JHtuYW1lfToke3ZhbH1gLFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCBndXR0ZXIgPSBuYW1lID09PSBHdXR0ZXIuZGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBgbWFyZ2luLXRvcDokeyB2YWwgJiYgKGd1dHRlciB8fCBuYW1lID09PSBHdXR0ZXIudG9wKSA/IHRoZW1lLnR5cG9ncmFwaHkuZ3V0dGVyVG9wIDogMCB9ZW07YCArXG4gICAgICAgICAgYG1hcmdpbi1ib3R0b206JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLmJvdHRvbSkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlckJvdHRvbSA6IDAgfWVtO2BcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaW5zdGFuY2VcbiAgICApO1xuICB9XG59XG4iXX0=