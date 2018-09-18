/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Optional, Renderer2, ElementRef, Input } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = 'fixed';
/** @type {?} */
var DEFAULT_BG = 'background:tertiary';
/** @type {?} */
var styles = function (theme) {
    var _a;
    return ({
        root: (_a = {
                padding: '0 16px',
                display: 'flex',
                boxSizing: 'border-box',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                height: '64px',
                zIndex: 1111
            },
            _a[theme.getBreakpoint('XSmall')] = {
                height: '56px'
            },
            _a)
    });
};
var ɵ0 = styles;
/** @typedef {?} */
var position;
var LyToolbar = /** @class */ (function () {
    function LyToolbar(renderer, _el, theme, _common) {
        this._el = _el;
        this.theme = theme;
        this._common = _common;
        this.classes = this.theme.addStyleSheet(styles, 'ly-toolbar', STYLE_PRIORITY);
        renderer.addClass(this._el.nativeElement, this.classes.root);
        if (this._common) {
            this._common.setAutoContrast();
        }
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("ly-toolbar-position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyToolbar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this._common.bg) {
            this._common.bg = DEFAULT_BG;
            this._common.ngOnChanges();
        }
    };
    LyToolbar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar'
                },] },
    ];
    /** @nocollapse */
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    LyToolbar.propDecorators = {
        position: [{ type: Input }]
    };
    return LyToolbar;
}());
export { LyToolbar };
if (false) {
    /** @type {?} */
    LyToolbar.prototype.classes;
    /** @type {?} */
    LyToolbar.prototype._position;
    /** @type {?} */
    LyToolbar.prototype._positionClass;
    /** @type {?} */
    LyToolbar.prototype._el;
    /** @type {?} */
    LyToolbar.prototype.theme;
    /** @type {?} */
    LyToolbar.prototype._common;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztBQUUvRCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0FBQ2pDLElBQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDOztBQUV6QyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztJQUFLLE9BQUEsQ0FBQztRQUN6QyxJQUFJO2dCQUNGLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsTUFBTTtnQkFDZixTQUFTLEVBQUUsWUFBWTtnQkFDdkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLElBQUk7O1lBQ1osR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFHO2dCQUMvQixNQUFNLEVBQUUsTUFBTTthQUNmO2VBQ0Y7S0FDRixDQUFDO0FBZndDLENBZXhDLENBQUM7Ozs7O0lBbUJELG1CQUNFLFFBQW1CLEVBQ1gsS0FDQSxPQUNZLE9BQWlCO1FBRjdCLFFBQUcsR0FBSCxHQUFHO1FBQ0gsVUFBSyxHQUFMLEtBQUs7UUFDTyxZQUFPLEdBQVAsT0FBTyxDQUFVO3VCQWY3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQztRQWlCdEUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2hDO0tBQ0Y7SUFsQkQsc0JBQ0ksK0JBQVE7Ozs7UUFJWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNhLEdBQWE7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBdUIsR0FBSyxFQUFFLGNBQVksR0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDeko7OztPQUFBOzs7O0lBZ0JELDRCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7S0FDRjs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBaENDLFNBQVM7Z0JBQ1QsVUFBVTtnQkFJTyxRQUFRO2dCQUFsQixRQUFRLHVCQTRDWixRQUFROzs7MkJBWlYsS0FBSzs7b0JBeENSOztTQW9DYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2ZpeGVkJztcbmNvbnN0IERFRkFVTFRfQkcgPSAnYmFja2dyb3VuZDp0ZXJ0aWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB6SW5kZXg6IDExMTEsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgaGVpZ2h0OiAnNTZweCdcbiAgICB9XG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXRpYycgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knIHwgJ3JlbGF0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseS10b29sYmFyJywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb247XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktdG9vbGJhci1wb3NpdGlvbjoke3ZhbH1gLCBgcG9zaXRpb246JHt2YWx9YCwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9jb21tb246IEx5Q29tbW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAodGhpcy5fY29tbW9uKSB7XG4gICAgICB0aGlzLl9jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb21tb24uYmcpIHtcbiAgICAgIHRoaXMuX2NvbW1vbi5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLl9jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==