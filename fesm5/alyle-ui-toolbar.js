import { __extends } from 'tslib';
import { Directive, Renderer2, ElementRef, Input, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
var LyToolbar = /** @class */ (function (_super) {
    __extends(LyToolbar, _super);
    function LyToolbar(renderer, _el, theme) {
        var _this = _super.call(this, theme) || this;
        _this._el = _el;
        _this.theme = theme;
        /**
         * Styles
         * \@docs-private
         */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyToolbarModule = /** @class */ (function () {
    function LyToolbarModule() {
    }
    LyToolbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyCommonModule],
                    exports: [LyToolbar, LyCommonModule],
                    declarations: [LyToolbar]
                },] }
    ];
    return LyToolbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyToolbarBase, LyToolbarMixinBase, LyToolbar, LyToolbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXNcbn0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnZml4ZWQnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdiYWNrZ3JvdW5kOnRlcnRpYXJ5JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIGhlaWdodDogJzY0cHgnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LnRvb2xiYXIsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgaGVpZ2h0OiAnNTZweCdcbiAgICB9XG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXRpYycgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knIHwgJ3JlbGF0aXZlJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRvb2xiYXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICAgIG1peGluQ29sb3IoXG4gICAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5VG9vbGJhckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIGV4dGVuZHMgTHlUb29sYmFyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS10b29sYmFyLXBvc2l0aW9uOiR7dmFsfWAsIGBwb3NpdGlvbjoke3ZhbH1gLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6IHBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5VG9vbGJhciB9IGZyb20gJy4vdG9vbGJhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5VG9vbGJhciwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRvb2xiYXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQXFCTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixnQkFBZ0IsR0FBRyxPQUFPOztJQUMxQixVQUFVLEdBQUcscUJBQXFCOztJQUVsQyxNQUFNLEdBQUcsVUFBQyxLQUFxQjs7SUFBSyxRQUFDO1FBQ3pDLElBQUk7Z0JBQ0YsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixLQUFLLEVBQUUsTUFBTTtnQkFDYixhQUFhLEVBQUUsS0FBSztnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPOztZQUM1QixHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUc7Z0JBQy9CLE1BQU0sRUFBRSxNQUFNO2FBQ2Y7ZUFDRjtLQUNGO0NBQUM7Ozs7QUFLRjs7OztJQUNFLHVCQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7S0FDcEI7SUFDUCxvQkFBQztDQUFBLElBQUE7Ozs7O0FBR0QsSUFBYSxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FDakQsT0FBTyxDQUNILFVBQVUsQ0FDUixXQUFXLENBQ1QsYUFBYSxDQUNYLGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdEQ7SUFZK0JBLDZCQUFrQjtJQWdCL0MsbUJBQ0UsUUFBbUIsRUFDWCxHQUFlLEVBQ2YsS0FBZTtRQUh6QixZQUtFLGtCQUFNLEtBQUssQ0FBQyxTQUdiO1FBTlMsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQUssR0FBTCxLQUFLLENBQVU7Ozs7O1FBZGhCLGFBQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFpQmxFLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0tBQzlEO0lBaEJELHNCQUNJLCtCQUFROzs7O1FBSVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDYSxHQUFhO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXVCLEdBQUssRUFBRSxjQUFZLEdBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3pKOzs7T0FBQTs7OztJQWNELCtCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBRUQsNEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7S0FDRjs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osTUFBTTt3QkFDTixPQUFPO3dCQUNQLFFBQVE7d0JBQ1IsVUFBVTt3QkFDVixXQUFXO3dCQUNYLGFBQWE7cUJBQ2Q7aUJBQ0Y7Ozs7Z0JBdEVDLFNBQVM7Z0JBQ1QsVUFBVTtnQkFNVixRQUFROzs7MkJBd0VQLEtBQUs7O0lBK0JSLGdCQUFDO0NBQUEsQ0F2QzhCLGtCQUFrQjs7Ozs7O0FDekVqRDtJQUtBO0tBS2dDOztnQkFML0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7b0JBQ3BDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDMUI7O0lBQzhCLHNCQUFDO0NBTGhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9