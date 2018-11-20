/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input, } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater } from '@alyle/ui';
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
                zIndex: theme.zIndex.toolbar
            },
            _a[theme.getBreakpoint('XSmall')] = {
                height: '56px'
            },
            _a)
    });
};
var ɵ0 = styles;
var LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
export { LyToolbarBase };
if (false) {
    /** @type {?} */
    LyToolbarBase.prototype._theme;
}
/** @type {?} */
export var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase)))))))));
var LyToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(LyToolbar, _super);
    function LyToolbar(renderer, _el, theme) {
        var _this = _super.call(this, theme) || this;
        _this._el = _el;
        _this.theme = theme;
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.setAutoContrast();
        renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
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
    LyToolbar.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
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
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    };
    LyToolbar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar',
                    inputs: [
                        'bg',
                        'flat',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor'
                    ]
                },] }
    ];
    /** @nocollapse */
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyToolbar.propDecorators = {
        position: [{ type: Input }]
    };
    return LyToolbar;
}(LyToolbarMixinBase));
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
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUyxFQUNULGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUVsQixNQUFNLFdBQVcsQ0FBQzs7SUFFYixjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixnQkFBZ0IsR0FBRyxPQUFPOztJQUMxQixVQUFVLEdBQUcscUJBQXFCOztJQUVsQyxNQUFNLEdBQUcsVUFBQyxLQUFxQjs7SUFBSyxPQUFBLENBQUM7UUFDekMsSUFBSTtnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNO2dCQUNiLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87O1lBQzVCLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQkFDL0IsTUFBTSxFQUFFLE1BQU07YUFDZjtlQUNGO0tBQ0YsQ0FBQztBQWZ3QyxDQWV4Qzs7QUFJRjtJQUNFLHVCQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztJQUNQLG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFGRywrQkFBdUI7OztBQUkzQixNQUFNLEtBQU8sa0JBQWtCLEdBQUcsaUJBQWlCLENBQ2pELE9BQU8sQ0FDTCxTQUFTLENBQ1AsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXZEO0lBWStCLHFDQUFrQjtJQVkvQyxtQkFDRSxRQUFtQixFQUNYLEdBQWUsRUFDZixLQUFlO1FBSHpCLFlBS0Usa0JBQU0sS0FBSyxDQUFDLFNBR2I7UUFOUyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBSyxHQUFMLEtBQUssQ0FBVTtRQWR6QixhQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBaUJ6RCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUMvRCxDQUFDO0lBaEJELHNCQUNJLCtCQUFROzs7O1FBSVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFQRCxVQUNhLEdBQWE7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBdUIsR0FBSyxFQUFFLGNBQVksR0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUosQ0FBQzs7O09BQUE7Ozs7SUFjRCwrQkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsNEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixNQUFNLEVBQUU7d0JBQ04sSUFBSTt3QkFDSixNQUFNO3dCQUNOLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsYUFBYTtxQkFDZDtpQkFDRjs7OztnQkF0RUMsU0FBUztnQkFDVCxVQUFVO2dCQU1WLFFBQVE7OzsyQkFvRVAsS0FBSzs7SUErQlIsZ0JBQUM7Q0FBQSxBQS9DRCxDQVkrQixrQkFBa0IsR0FtQ2hEO1NBbkNZLFNBQVM7OztJQUNwQiw0QkFBMkQ7O0lBQzNELDhCQUE0Qjs7SUFDNUIsbUNBQStCOztJQVc3Qix3QkFBdUI7O0lBQ3ZCLDBCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbkZsYXQsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXNcbn0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnZml4ZWQnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdiYWNrZ3JvdW5kOnRlcnRpYXJ5JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIGhlaWdodDogJzY0cHgnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LnRvb2xiYXIsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgaGVpZ2h0OiAnNTZweCdcbiAgICB9XG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXRpYycgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knIHwgJ3JlbGF0aXZlJztcblxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlUb29sYmFyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgbWl4aW5GbGF0KFxuICAgICAgbWl4aW5Db2xvcihcbiAgICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlUb29sYmFyQmFzZSkpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIGV4dGVuZHMgTHlUb29sYmFyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb247XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktdG9vbGJhci1wb3NpdGlvbjoke3ZhbH1gLCBgcG9zaXRpb246JHt2YWx9YCwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG59XG4iXX0=