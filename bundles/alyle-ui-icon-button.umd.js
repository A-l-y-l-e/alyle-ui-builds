(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon-button', ['exports', '@alyle/ui', '@angular/core', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['icon-button'] = {}),global.alyle.ui,global.ng.core,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,i1,i0,ripple,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = ({
        root: {
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            userSelect: 'none',
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'transparent',
            border: 0,
            padding: 0,
            overflow: 'hidden',
            cursor: 'pointer',
            outline: 'none',
            boxSizing: 'border-box',
            color: 'currentColor',
            display: 'inline-flex',
            position: 'relative',
            textDecoration: 'none',
            borderRadius: '50%',
        },
        content: {
            display: 'flex',
            justifyContent: 'inherit',
            alignItems: 'inherit',
            width: 'inherit',
            height: 'inherit',
            overflow: 'inherit',
        }
    });
    var LyIconButtonService = /** @class */ (function () {
        function LyIconButtonService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles, 'lyIconButtonStatic');
        }
        LyIconButtonService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyIconButtonService.ctorParameters = function () {
            return [
                { type: i1.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyIconButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconButtonService_Factory() { return new LyIconButtonService(i0.inject(i1.LyTheme2)); }, token: LyIconButtonService, providedIn: "root" });
        return LyIconButtonService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles$1 = function (theme) {
        return ({
            size: {
                width: theme.iconButton.size,
                height: theme.iconButton.size
            }
        });
    };
    var LyIconButton = /** @class */ (function () {
        function LyIconButton(elementRef, renderer, bgAndColor, iconButtonService, theme) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.iconButtonService = iconButtonService;
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles$1, 'lyIconButton');
            if (bgAndColor) {
                bgAndColor.setAutoContrast();
            }
        }
        /**
         * @return {?}
         */
        LyIconButton.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.elementRef.nativeElement, this.iconButtonService.classes.root);
                this.renderer.addClass(this.elementRef.nativeElement, this.classes.size);
            };
        LyIconButton.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                        template: "\n  <div class=\"{{ iconButtonService.classes.content }}\"\n  lyRipple\n  lyRippleCentered\n  >\n    <ng-content></ng-content>\n  </div>\n  ",
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        exportAs: 'lyIconButton'
                    },] },
        ];
        /** @nocollapse */
        LyIconButton.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyCommon, decorators: [{ type: i0.Optional }] },
                { type: LyIconButtonService },
                { type: i1.LyTheme2 }
            ];
        };
        LyIconButton.propDecorators = {
            ripple: [{ type: i0.ViewChild, args: [ripple.LyRipple,] }]
        };
        return LyIconButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyIconButtonModule = /** @class */ (function () {
        function LyIconButtonModule() {
        }
        LyIconButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule],
                        exports: [LyIconButton],
                        declarations: [LyIconButton],
                    },] },
        ];
        return LyIconButtonModule;
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

    exports.LyIconButtonModule = LyIconButtonModule;
    exports.LyIconButton = LyIconButton;
    exports.ɵa = LyIconButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVUaGVtZSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIG92ZXJmbG93OiAnaW5oZXJpdCcsXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUljb25CdXR0b25TdGF0aWMnKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2ljb24tYnV0dG9uLnNlcnZpY2UnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBzaXplOiB7XG4gICAgd2lkdGg6IHRoZW1lLmljb25CdXR0b24uc2l6ZSxcbiAgICBoZWlnaHQ6IHRoZW1lLmljb25CdXR0b24uc2l6ZVxuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktaWNvbi1idXR0b25dLCBhW2x5LWljb24tYnV0dG9uXSwgc3BhbltseS1pY29uLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwie3sgaWNvbkJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jb250ZW50IH19XCJcbiAgbHlSaXBwbGVcbiAgbHlSaXBwbGVDZW50ZXJlZFxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5SWNvbkJ1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChMeVJpcHBsZSkgcmlwcGxlOiBMeVJpcHBsZTtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUljb25CdXR0b24nKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uLFxuICAgIHB1YmxpYyBpY29uQnV0dG9uU2VydmljZTogTHlJY29uQnV0dG9uU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25CdXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNpemUpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJy4vaWNvbi1idXR0b24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJzdHlsZXMiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJMeUNvbW1vbiIsIk9wdGlvbmFsIiwiVmlld0NoaWxkIiwiTHlSaXBwbGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLHFCQUFxQixFQUFFLE1BQU07WUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtZQUMxQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtZQUNqRCxjQUFjLEVBQUUsUUFBUTtZQUN4QixVQUFVLEVBQUUsUUFBUTtZQUNwQixVQUFVLEVBQUUsYUFBYTtZQUN6QixNQUFNLEVBQUUsQ0FBQztZQUNULE9B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