(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.card = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,i0,i1,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyCardClasses = /** @class */ (function () {
        function LyCardClasses(theme) {
            this.theme = theme;
            this.cardContent = this.theme.setUpStyleSecondary('k-card-content', function () {
                return ("display:block;" +
                    "padding:16px 24px;");
            });
            this.cardActions = this.theme.setUpStyleSecondary('k-card-actions', function () {
                return ("display: block;" +
                    "padding: 8px 12px;");
            });
            this.cardActionsItem = this.theme.setUpStyleSecondary('k-card-actions-item', function () {
                return ("margin: 0 4px;");
            });
        }
        LyCardClasses.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        LyCardClasses.ctorParameters = function () {
            return [
                { type: i1.LyTheme2, },
            ];
        };
        /** @nocollapse */ LyCardClasses.ngInjectableDef = i0.defineInjectable({ factory: function LyCardClasses_Factory() { return new LyCardClasses(i0.inject(i1.LyTheme2)); }, token: LyCardClasses, providedIn: "root" });
        return LyCardClasses;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DEFAULT_ELEVATION = 2;
    var LyCard = /** @class */ (function () {
        function LyCard(styler, elementRef, renderer) {
            this.styler = styler;
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        Object.defineProperty(LyCard.prototype, "elevation", {
            get: /**
             * @return {?}
             */ function () {
                return this._elevation;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.elevation !== val) {
                    var /** @type {?} */ newClass = this._createElevationClass(val);
                    this._elevationClass = this.styler.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._elevationClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCard.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.elevation === void 0) {
                    this.elevation = DEFAULT_ELEVATION;
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCard.prototype._createElevationClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                this._elevation = i1.defaultEntry(val, DEFAULT_ELEVATION);
                return this.styler.setUpStyleSecondary("k-card-e:" + this.elevation, function (theme) {
                    return ("background-color:" + theme.background.primary + ";" +
                        "display:block;" +
                        "position:relative;" +
                        // `padding:24px;` + // remove this
                        "border-radius:2px;" +
                        ("" + i1.shadowBuilder(_this.elevation)));
                });
            };
        LyCard.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card'
                    },] },
        ];
        /** @nocollapse */
        LyCard.ctorParameters = function () {
            return [
                { type: i1.LyTheme2, },
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
            ];
        };
        LyCard.propDecorators = {
            "elevation": [{ type: i0.Input },],
        };
        return LyCard;
    }());
    var LyCardContent = /** @class */ (function () {
        function LyCardContent(elementRef, renderer, classes) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.classes = classes;
        }
        /**
         * @return {?}
         */
        LyCardContent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.elementRef.nativeElement, this.classes.cardContent);
            };
        LyCardContent.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card-content'
                    },] },
        ];
        /** @nocollapse */
        LyCardContent.ctorParameters = function () {
            return [
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: LyCardClasses, },
            ];
        };
        return LyCardContent;
    }());
    var LyCardActions = /** @class */ (function () {
        function LyCardActions(elementRef, renderer, classes) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.classes = classes;
        }
        /**
         * @return {?}
         */
        LyCardActions.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.elementRef.nativeElement.childNodes.forEach(function (element) {
                    _this.renderer.addClass(element, _this.classes.cardActionsItem);
                });
                this.renderer.addClass(this.elementRef.nativeElement, this.classes.cardActions);
            };
        LyCardActions.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card-actions'
                    },] },
        ];
        /** @nocollapse */
        LyCardActions.ctorParameters = function () {
            return [
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: LyCardClasses, },
            ];
        };
        return LyCardActions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyCardModule = /** @class */ (function () {
        function LyCardModule() {
        }
        LyCardModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyCard, LyCardContent, LyCardActions],
                        declarations: [LyCard, LyCardContent, LyCardActions]
                    },] },
        ];
        return LyCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyCardModule = LyCardModule;
    exports.LyCard = LyCard;
    exports.LyCardContent = LyCardContent;
    exports.LyCardActions = LyCardActions;
    exports.ɵa = LyCardClasses;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDbGFzc2VzIHtcbiAgY2FyZENvbnRlbnQgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgJ2stY2FyZC1jb250ZW50JyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgIGBwYWRkaW5nOjE2cHggMjRweDtgXG4gICAgKVxuICApO1xuICBjYXJkQWN0aW9ucyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkLWFjdGlvbnMnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgIGBwYWRkaW5nOiA4cHggMTJweDtgXG4gICAgKVxuICApO1xuICBjYXJkQWN0aW9uc0l0ZW0gPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgJ2stY2FyZC1hY3Rpb25zLWl0ZW0nLFxuICAgICgpID0+IChcbiAgICAgIGBtYXJnaW46IDAgNHB4O2BcbiAgICApXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIGRlZmF1bHRFbnRyeSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNhcmRDbGFzc2VzIH0gZnJvbSAnLi9jYXJkLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX0VMRVZBVElPTiA9IDI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2VsZXZhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9lbGV2YXRpb25DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgZWxldmF0aW9uKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZWxldmF0aW9uICE9PSB2YWwpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuX2VsZXZhdGlvbkNsYXNzID0gdGhpcy5zdHlsZXIudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9lbGV2YXRpb25DbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBlbGV2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZXZhdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVyOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZWxldmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLl9lbGV2YXRpb24gPSBkZWZhdWx0RW50cnkodmFsLCBERUZBVUxUX0VMRVZBVElPTik7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVyLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55PihcbiAgICAgIGBrLWNhcmQtZToke3RoaXMuZWxldmF0aW9ufWAsXG4gICAgICB0aGVtZSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgICtcbiAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgIGBwb3NpdGlvbjpyZWxhdGl2ZTtgICtcbiAgICAgICAgLy8gYHBhZGRpbmc6MjRweDtgICsgLy8gcmVtb3ZlIHRoaXNcbiAgICAgICAgYGJvcmRlci1yYWRpdXM6MnB4O2AgK1xuICAgICAgICBgJHtzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uKX1gXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRDb250ZW50KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWFjdGlvbnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZEFjdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlDYXJkQ2xhc3Nlc1xuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jYXJkQWN0aW9uc0l0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jYXJkQWN0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9uc10sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9uc11cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJMeVRoZW1lMiIsImRlZmF1bHRFbnRyeSIsInNoYWRvd0J1aWxkZXIiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVu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