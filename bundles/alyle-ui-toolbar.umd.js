(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/toolbar', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.toolbar = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = ({
        root: {
            display: 'flex',
            boxSizing: 'border-box',
            flexDirection: 'row',
            alignItems: 'center',
            height: '64px',
            width: '100%'
        },
        row: {
            padding: '0 16px',
            display: 'flex',
            boxSizing: 'border-box',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            whiteSpace: 'nowrap'
        }
    });
    var ToolbarItem = /** @class */ (function () {
        function ToolbarItem() {
            console.warn('ly-toolbar-item @deprecated');
        }
        ToolbarItem.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-toolbar-item'
                    },] },
        ];
        /** @nocollapse */
        ToolbarItem.ctorParameters = function () { return []; };
        return ToolbarItem;
    }());
    var LyToolbar = /** @class */ (function () {
        function LyToolbar(renderer, el, theme, bgAndColor) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles, 'ly-toolbar', STYLE_PRIORITY);
            renderer.addClass(el.nativeElement, this.classes.row);
            if (bgAndColor) {
                bgAndColor.setAutoContrast();
            }
        }
        LyToolbar.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-toolbar'
                    },] },
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
        return LyToolbar;
    }());
    var LyToolbarRow = /** @class */ (function () {
        function LyToolbarRow(el, renderer2, toolbar) {
            renderer2.addClass(el.nativeElement, toolbar.classes.row);
            /** TODO: fix this */
        }
        LyToolbarRow.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-toolbar-row'
                    },] },
        ];
        /** @nocollapse */
        LyToolbarRow.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyToolbar, decorators: [{ type: core.Optional }] }
            ];
        };
        return LyToolbarRow;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyToolbarModule = /** @class */ (function () {
        function LyToolbarModule() {
        }
        LyToolbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [LyToolbar, ToolbarItem, LyToolbarRow],
                        declarations: [LyToolbar, ToolbarItem, LyToolbarRow]
                    },] },
        ];
        return LyToolbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ToolbarItem = ToolbarItem;
    exports.LyToolbar = LyToolbar;
    exports.LyToolbarRow = LyToolbarRow;
    exports.LyToolbarModule = LyToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIudHMiLCJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNjRweCcsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICByb3c6IHtcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhci1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFySXRlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUud2FybignbHktdG9vbGJhci1pdGVtIEBkZXByZWNhdGVkJyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcidcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseS10b29sYmFyJywgU1RZTEVfUFJJT1JJVFkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb25cbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvdyk7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG59XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhci1yb3cnXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhclJvdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHRvb2xiYXI6IEx5VG9vbGJhclxuICApIHtcbiAgICByZW5kZXJlcjIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgdG9vbGJhci5jbGFzc2VzLnJvdyk7XG4gICAgLyoqIFRPRE86IGZpeCB0aGlzICovXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUb29sYmFyLCBUb29sYmFySXRlbSwgTHlUb29sYmFyUm93IH0gZnJvbSAnLi90b29sYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVRvb2xiYXIsIFRvb2xiYXJJdGVtLCBMeVRvb2xiYXJSb3ddLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRvb2xiYXIsIFRvb2xiYXJJdGVtLCBMeVRvb2xiYXJSb3ddXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiTHlUaGVtZTIiLCJMeUNvbW1vbiIsIk9wdGlvbmFsIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQVFBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUUxQixJQUFNLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxNQUFNO1lBQ2YsU0FBUyxFQUFFLFlBQVk7WUFDdkIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsTUFBTTtTQUNkO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsT0FBTyxFQUFFLFFBQVE7WUFDakIsT0FBTyxFQUFFLE1BQU07WUFDZixTQUFTLEVBQUUsWUFBWTtZQUN2QixLQUFLLEVBQUUsTUFBTTtZQUNiLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxRQUFRO1NBQ3JCO0tBQ0YsQ0FBQyxDQUFDOztRQU1EO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzdDOztvQkFORkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7cUJBQzVCOzs7OzBCQWhDRDs7O1FBNkNFLG1CQUNFLFFBQW1CLEVBQ25CLEVBQWMsRUFDTixPQUNJLFVBQW9CO1lBRHhCLFVBQUssR0FBTCxLQUFLOzJCQUxMLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1lBUXRFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELElBQUksVUFBVSxFQUFFO2dCQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUM5QjtTQUNGOztvQkFoQkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTtxQkFDdkI7Ozs7O3dCQXRDQ0MsY0FBUzt3QkFDVEMsZUFBVTt3QkFFT0MsV0FBUTt3QkFBbEJDLFdBQVEsdUJBMkNaQyxhQUFROzs7d0JBakRiOzs7UUErREUsc0JBQ0UsRUFBYyxFQUNkLFNBQW9CLEVBQ1IsT0FBa0I7WUFFOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O1NBRTNEOztvQkFYRkwsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCOzs7Ozt3QkF6RENFLGVBQVU7d0JBRFZELGNBQVM7d0JBK0RjLFNBQVMsdUJBQTdCSSxhQUFROzs7MkJBbEViOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7d0JBQy9DLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO3FCQUNyRDs7OEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=