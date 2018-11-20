import { __extends } from 'tslib';
import { Directive, Renderer2, ElementRef, Input, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';
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
var LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
/** @type {?} */
var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase)))))))));
var LyToolbar = /** @class */ (function (_super) {
    __extends(LyToolbar, _super);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluRmxhdCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlc1xufSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdmaXhlZCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ2JhY2tncm91bmQ6dGVydGlhcnknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgaGVpZ2h0OiAnNjRweCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgudG9vbGJhcixcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBoZWlnaHQ6ICc1NnB4J1xuICAgIH1cbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhdGljJyB8ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreScgfCAncmVsYXRpdmUnO1xuXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeVRvb2xiYXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICBtaXhpbkZsYXQoXG4gICAgICBtaXhpbkNvbG9yKFxuICAgICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeVRvb2xiYXJCYXNlKSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIgZXh0ZW5kcyBMeVRvb2xiYXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS10b29sYmFyLXBvc2l0aW9uOiR7dmFsfWAsIGBwb3NpdGlvbjoke3ZhbH1gLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlUb29sYmFyIH0gZnJvbSAnLi90b29sYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUb29sYmFyLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VG9vbGJhcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBc0JNLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLGdCQUFnQixHQUFHLE9BQU87O0lBQzFCLFVBQVUsR0FBRyxxQkFBcUI7O0lBRWxDLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztJQUFLLFFBQUM7UUFDekMsSUFBSTtnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNO2dCQUNiLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87O1lBQzVCLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQkFDL0IsTUFBTSxFQUFFLE1BQU07YUFDZjtlQUNGO0tBQ0Y7Q0FBQzs7SUFLQSx1QkFDUyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0tBQ3BCO0lBQ1Asb0JBQUM7Q0FBQSxJQUFBOztBQUVELElBQWEsa0JBQWtCLEdBQUcsaUJBQWlCLENBQ2pELE9BQU8sQ0FDTCxTQUFTLENBQ1AsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXZEO0lBWStCQSw2QkFBa0I7SUFZL0MsbUJBQ0UsUUFBbUIsRUFDWCxHQUFlLEVBQ2YsS0FBZTtRQUh6QixZQUtFLGtCQUFNLEtBQUssQ0FBQyxTQUdiO1FBTlMsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQUssR0FBTCxLQUFLLENBQVU7UUFkekIsYUFBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWlCekQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7S0FDOUQ7SUFoQkQsc0JBQ0ksK0JBQVE7Ozs7UUFJWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNhLEdBQWE7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBdUIsR0FBSyxFQUFFLGNBQVksR0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDeko7OztPQUFBOzs7O0lBY0QsK0JBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCw0QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtLQUNGOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixNQUFNLEVBQUU7d0JBQ04sSUFBSTt3QkFDSixNQUFNO3dCQUNOLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsYUFBYTtxQkFDZDtpQkFDRjs7OztnQkF0RUMsU0FBUztnQkFDVCxVQUFVO2dCQU1WLFFBQVE7OzsyQkFvRVAsS0FBSzs7SUErQlIsZ0JBQUM7Q0FBQSxDQW5DOEIsa0JBQWtCOzs7Ozs7QUN6RWpEO0lBS0E7S0FLZ0M7O2dCQUwvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQztvQkFDcEMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO2lCQUMxQjs7SUFDOEIsc0JBQUM7Q0FMaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=