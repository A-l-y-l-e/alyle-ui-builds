(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon-button', ['exports', '@alyle/ui', '@angular/core', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['icon-button'] = {}),global.alyle.ui,global.ng.core,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,i1,i0,ripple,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
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
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        }
        LyIconButtonService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY$1 = -2;
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
        function LyIconButton(_el, renderer, bgAndColor, iconButtonService, theme, _ngZone, _rippleService) {
            this._el = _el;
            this.renderer = renderer;
            this.iconButtonService = iconButtonService;
            this.theme = theme;
            this._ngZone = _ngZone;
            this._rippleService = _rippleService;
            this.classes = this.theme.addStyleSheet(styles$1, STYLE_PRIORITY$1);
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
                this.renderer.addClass(this._el.nativeElement, this.iconButtonService.classes.root);
                this.renderer.addClass(this._el.nativeElement, this.classes.size);
            };
        /**
         * @return {?}
         */
        LyIconButton.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (i1.Platform.isBrowser) {
                    /** @type {?} */
                    var rippleContainer = this._rippleContainer.nativeElement;
                    /** @type {?} */
                    var triggerElement = this._el.nativeElement;
                    this._ripple = new ripple.Ripple(this.theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
                    this._ripple.setConfig({
                        centered: true
                    });
                }
            };
        /**
         * @return {?}
         */
        LyIconButton.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (i1.Platform.isBrowser) {
                    this._ripple.removeEvents();
                }
            };
        LyIconButton.decorators = [
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'button[ly-icon-button], a[ly-icon-button], span[ly-icon-button]',
                        template: "\n  <div [className]=\"iconButtonService.classes.content\"\n  ><ng-content></ng-content></div>\n  <div #rippleContainer [className]=\"_rippleService.classes.container\"></div>\n  ",
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        exportAs: 'lyIconButton'
                    }] }
        ];
        /** @nocollapse */
        LyIconButton.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyCommon, decorators: [{ type: i0.Optional }] },
                { type: LyIconButtonService },
                { type: i1.LyTheme2 },
                { type: i0.NgZone },
                { type: ripple.LyRippleService }
            ];
        };
        LyIconButton.propDecorators = {
            _rippleContainer: [{ type: i0.ViewChild, args: ['rippleContainer',] }]
        };
        return LyIconButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyIconButtonModule = /** @class */ (function () {
        function LyIconButtonModule() {
        }
        LyIconButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule],
                        exports: [LyIconButton],
                        declarations: [LyIconButton],
                    },] }
        ];
        return LyIconButtonModule;
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

    exports.LyIconButtonModule = LyIconButtonModule;
    exports.LyIconButton = LyIconButton;
    exports.ɵa = LyIconButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi1idXR0b24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi1idXR0b24vaWNvbi1idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIG92ZXJmbG93OiAnaW5oZXJpdCcsXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlclZpZXdJbml0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlSaXBwbGVTZXJ2aWNlLCBSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5Q29tbW9uLCBMeVRoZW1lMiwgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uU2VydmljZSB9IGZyb20gJy4vaWNvbi1idXR0b24uc2VydmljZSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHNpemU6IHtcbiAgICB3aWR0aDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplLFxuICAgIGhlaWdodDogdGhlbWUuaWNvbkJ1dHRvbi5zaXplXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltseS1pY29uLWJ1dHRvbl0sIGFbbHktaWNvbi1idXR0b25dLCBzcGFuW2x5LWljb24tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2NsYXNzTmFtZV09XCJpY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLmNvbnRlbnRcIlxuICA+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2NsYXNzTmFtZV09XCJfcmlwcGxlU2VydmljZS5jbGFzc2VzLmNvbnRhaW5lclwiPjwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlJY29uQnV0dG9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25CdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vbixcbiAgICBwdWJsaWMgaWNvbkJ1dHRvblNlcnZpY2U6IEx5SWNvbkJ1dHRvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNpemUpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLnRoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgdGhpcy5fcmlwcGxlLnNldENvbmZpZyh7XG4gICAgICAgIGNlbnRlcmVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJy4vaWNvbi1idXR0b24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SWNvbkJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SWNvbkJ1dHRvbl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbkJ1dHRvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJTVFlMRV9QUklPUklUWSIsInN0eWxlcyIsIlBsYXRmb3JtIiwiUmlwcGxlIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlDb21tb24iLCJPcHRpb25hbCIsIk5nWm9uZSIsIkx5UmlwcGxlU2VydmljZSIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUdNLGNBQWMsR0FBRyxDQUFDLENBQUM7O1FBRW5CLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLHFCQUFxQixFQUFFLE1BQU07WUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtZQUMxQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLDZCQUE2QixFQUFFLGtCQUFrQjtZQUNqRCxjQUFjLEVBQUUsUUFBUTtZQUN4QixVQUFVLEVBQUUsUUFBUTtZQUNwQixVQUFVLEVBQUUsYUFBYTtZQUN6QixNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLFNBQVM7WUFDakIsT0FBTyxFQUFFLE1BQU07WUFDZixTQUFTLEVBQUUsWUFBWTtZQUN2QixLQUFL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