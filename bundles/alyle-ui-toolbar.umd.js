(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/toolbar', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.toolbar = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

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
    var LyToolbar = /** @class */ (function () {
        function LyToolbar(renderer, _el, theme, _common) {
            this._el = _el;
            this.theme = theme;
            this._common = _common;
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            renderer.addClass(this._el.nativeElement, this.classes.root);
            if (this._common) {
                this._common.setAutoContrast();
            }
        }
        Object.defineProperty(LyToolbar.prototype, "position", {
            get: /**
             * @return {?}
             */ function () {
                return this._position;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: core.Directive, args: [{
                        selector: 'ly-toolbar'
                    },] }
        ];
        /** @nocollapse */
        LyToolbar.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 },
                { type: ui.LyCommon, decorators: [{ type: core.Optional }] }
            ];
        };
        LyToolbar.propDecorators = {
            position: [{ type: core.Input }]
        };
        return LyToolbar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyToolbarModule = /** @class */ (function () {
        function LyToolbarModule() {
        }
        LyToolbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ui.LyCommonModule],
                        exports: [LyToolbar, ui.LyCommonModule],
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

    exports.LyToolbar = LyToolbar;
    exports.LyToolbarModule = LyToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIudHMiLCJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdmaXhlZCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ2JhY2tncm91bmQ6dGVydGlhcnknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgaGVpZ2h0OiAnNjRweCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgudG9vbGJhcixcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBoZWlnaHQ6ICc1NnB4J1xuICAgIH1cbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhdGljJyB8ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreScgfCAncmVsYXRpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb247XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktdG9vbGJhci1wb3NpdGlvbjoke3ZhbH1gLCBgcG9zaXRpb246JHt2YWx9YCwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9jb21tb246IEx5Q29tbW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAodGhpcy5fY29tbW9uKSB7XG4gICAgICB0aGlzLl9jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb21tb24uYmcpIHtcbiAgICAgIHRoaXMuX2NvbW1vbi5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLl9jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlUb29sYmFyIH0gZnJvbSAnLi90b29sYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUb29sYmFyLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VG9vbGJhcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJMeVRoZW1lMiIsIkx5Q29tbW9uIiwiT3B0aW9uYWwiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVVNLGNBQWMsR0FBRyxDQUFDLENBQUM7O1FBQ25CLGdCQUFnQixHQUFHLE9BQU87O1FBQzFCLFVBQVUsR0FBRyxxQkFBcUI7O1FBRWxDLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztRQUFLLFFBQUM7WUFDekMsSUFBSTtnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNO2dCQUNiLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87O2dCQUM1QixHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUc7b0JBQy9CLE1BQU0sRUFBRSxNQUFNO2lCQUNmO21CQUNGO1NBQ0Y7SUFmeUMsQ0FleEM7O1FBbUJBLG1CQUNFLFFBQW1CLEVBQ1gsR0FBZSxFQUNmLEtBQWUsRUFDSCxPQUFpQjtZQUY3QixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBVTtZQUNILFlBQU8sR0FBUCxPQUFPLENBQVU7WUFmdkMsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztZQWlCekQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUNoQztTQUNGO1FBbEJELHNCQUNJLCtCQUFROzs7Z0JBSVo7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCOzs7O2dCQVBELFVBQ2EsR0FBYTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXVCLEdBQUssRUFBRSxjQUFZLEdBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3pKOzs7V0FBQTs7OztRQWdCRCw0QkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7aUJBQ2xDO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO29CQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUM1QjthQUNGOztvQkFuQ0ZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTtxQkFDdkI7Ozs7O3dCQWhDQ0MsY0FBUzt3QkFDVEMsZUFBVTt3QkFJT0MsV0FBUTt3QkFBbEJDLFdBQVEsdUJBNENaQyxhQUFROzs7OytCQVpWQyxVQUFLOztRQTZCUixnQkFBQztLQXBDRDs7Ozs7O0FDakNBO1FBS0E7U0FLZ0M7O29CQUwvQkMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxFQUFFQyxpQkFBYyxDQUFDO3dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUVBLGlCQUFjLENBQUM7d0JBQ3BDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDMUI7O1FBQzhCLHNCQUFDO0tBTGhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9