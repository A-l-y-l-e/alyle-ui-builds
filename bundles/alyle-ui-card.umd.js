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
            this.card = this.theme.setUpStyleSecondary('k-card', function () {
                return ("display:block;" +
                    "overflow: hidden;");
            });
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
    var /** @type {?} */ DEFAULT_ASPECT_RATIO = '16:9';
    var LyCard = /** @class */ (function () {
        function LyCard(classes, styler, el, renderer) {
            this.classes = classes;
            this.styler = styler;
            this.el = el;
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
                    this._elevationClass = this.styler.updateClass(this.el.nativeElement, this.renderer, newClass, this._elevationClass);
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
                this.renderer.addClass(this.el.nativeElement, this.classes.card);
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
                { type: LyCardClasses, },
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
        function LyCardContent(el, renderer, classes) {
            this.el = el;
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
                this.renderer.addClass(this.el.nativeElement, this.classes.cardContent);
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
        function LyCardActions(el, renderer, classes) {
            this.el = el;
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
                this.renderer.addClass(this.el.nativeElement, this.classes.cardActions);
                if (!i1.toBoolean(this.disableActionSpacing)) {
                    this.el.nativeElement.childNodes.forEach(function (element) {
                        _this.renderer.addClass(element, _this.classes.cardActionsItem);
                    });
                }
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
        LyCardActions.propDecorators = {
            "disableActionSpacing": [{ type: i0.Input },],
        };
        return LyCardActions;
    }());
    var LyCardMedia = /** @class */ (function () {
        function LyCardMedia(el, renderer, theme) {
            this.el = el;
            this.renderer = renderer;
            this.theme = theme;
        }
        Object.defineProperty(LyCardMedia.prototype, "bgImg", {
            get: /**
             * @return {?}
             */ function () {
                return this._bgImg;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.bgImg) {
                    var /** @type {?} */ newClass = this._createBgImgClass(val);
                    this._bgImgClass = this.theme.updateClass(this.el.nativeElement, this.renderer, newClass, this._bgImgClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCardMedia.prototype, "ratio", {
            get: /**
             * @return {?}
             */ function () {
                return this._ratio;
            },
            set: /**
             * Aspect ratio
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.ratio) {
                    var /** @type {?} */ newClass = this._createAspectRatioClass(val);
                    this._ratioClass = this.theme.updateClass(this.el.nativeElement, this.renderer, newClass, this._ratioClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCardMedia.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.ratio) {
                    this.ratio = DEFAULT_ASPECT_RATIO;
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCardMedia.prototype._createBgImgClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._bgImg = val;
                this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
                return this.theme.setUpStyle("k-card-media:" + val, function () {
                    return ("display:block;" +
                        "background-size: cover;" +
                        "background-repeat: no-repeat;" +
                        "background-position: center;");
                });
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCardMedia.prototype._createAspectRatioClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._ratio = val;
                return this.theme.setUpStyle("k-card-media-ar:" + val, {
                    ':before': function () {
                        return (val.split(':').reduce(function (valorAnterior, valorActual) {
                            return ("padding-top:" + +valorActual / +valorAnterior * 100 + "%;" +
                                "content:'';" +
                                "display:block;");
                        }));
                    }
                });
            };
        LyCardMedia.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card-media'
                    },] },
        ];
        /** @nocollapse */
        LyCardMedia.ctorParameters = function () {
            return [
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: i1.LyTheme2, },
            ];
        };
        LyCardMedia.propDecorators = {
            "bgImg": [{ type: i0.Input },],
            "ratio": [{ type: i0.Input },],
        };
        return LyCardMedia;
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
                        exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia],
                        declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
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
    exports.LyCardMedia = LyCardMedia;
    exports.ɵa = LyCardClasses;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDbGFzc2VzIHtcbiAgY2FyZCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2BcbiAgICApXG4gICk7XG4gIGNhcmRDb250ZW50ID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQtY29udGVudCcsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICBgcGFkZGluZzoxNnB4IDI0cHg7YFxuICAgIClcbiAgKTtcbiAgY2FyZEFjdGlvbnMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgJ2stY2FyZC1hY3Rpb25zJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTogYmxvY2s7YCArXG4gICAgICBgcGFkZGluZzogOHB4IDEycHg7YFxuICAgIClcbiAgKTtcbiAgY2FyZEFjdGlvbnNJdGVtID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQtYWN0aW9ucy1pdGVtJyxcbiAgICAoKSA9PiAoXG4gICAgICBgbWFyZ2luOiAwIDRweDtgXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBzaGFkb3dCdWlsZGVyLCBkZWZhdWx0RW50cnksIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNhcmRDbGFzc2VzIH0gZnJvbSAnLi9jYXJkLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX0VMRVZBVElPTiA9IDI7XG5jb25zdCBERUZBVUxUX0FTUEVDVF9SQVRJTyA9ICcxNjo5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2VsZXZhdGlvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBlbGV2YXRpb24odmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fZWxldmF0aW9uQ2xhc3MgPSB0aGlzLnN0eWxlci51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9lbGV2YXRpb25DbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBlbGV2YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZXZhdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlDYXJkQ2xhc3NlcyxcbiAgICBwcml2YXRlIHN0eWxlcjogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmQpO1xuICAgIGlmICh0aGlzLmVsZXZhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5fZWxldmF0aW9uID0gZGVmYXVsdEVudHJ5KHZhbCwgREVGQVVMVF9FTEVWQVRJT04pO1xuICAgIHJldHVybiB0aGlzLnN0eWxlci5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICBgay1jYXJkLWU6JHt0aGlzLmVsZXZhdGlvbn1gLFxuICAgICAgdGhlbWUgPT4gKFxuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeX07YCArXG4gICAgICAgIGBwb3NpdGlvbjpyZWxhdGl2ZTtgICtcbiAgICAgICAgLy8gYHBhZGRpbmc6MjRweDtgICsgLy8gcmVtb3ZlIHRoaXNcbiAgICAgICAgYGJvcmRlci1yYWRpdXM6MnB4O2AgK1xuICAgICAgICBgJHtzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uKX1gXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlDYXJkQ2xhc3Nlc1xuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZENvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNsYXNzZXM6IEx5Q2FyZENsYXNzZXNcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jYXJkQWN0aW9ucyk7XG4gICAgaWYgKCF0b0Jvb2xlYW4odGhpcy5kaXNhYmxlQWN0aW9uU3BhY2luZykpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1tZWRpYSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTWVkaWEgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9iZ0ltZzogc3RyaW5nO1xuICBwcml2YXRlIF9iZ0ltZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF0aW86IHN0cmluZztcbiAgcHJpdmF0ZSBfcmF0aW9DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBiZ0ltZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmdJbWcpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQmdJbWdDbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fYmdJbWdDbGFzcyA9IHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fYmdJbWdDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBiZ0ltZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdJbWc7XG4gIH1cblxuICAvKiogQXNwZWN0IHJhdGlvICovXG4gIEBJbnB1dCgpXG4gIHNldCByYXRpbyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucmF0aW8pIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlQXNwZWN0UmF0aW9DbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fcmF0aW9DbGFzcyA9IHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fcmF0aW9DbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCByYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLnJhdGlvID0gREVGQVVMVF9BU1BFQ1RfUkFUSU87XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmdJbWdDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2JnSW1nID0gdmFsO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgYmFja2dyb3VuZC1pbWFnZWAsIGB1cmwoXCIke3ZhbH1cIilgKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGstY2FyZC1tZWRpYToke3ZhbH1gLFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYGJhY2tncm91bmQtc2l6ZTogY292ZXI7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2BcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQXNwZWN0UmF0aW9DbGFzcyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3JhdGlvID0gdmFsO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgay1jYXJkLW1lZGlhLWFyOiR7dmFsfWAsIHtcbiAgICAgICAgJzpiZWZvcmUnOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHZhbC5zcGxpdCgnOicpLnJlZHVjZSgodmFsb3JBbnRlcmlvciwgdmFsb3JBY3R1YWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBgcGFkZGluZy10b3A6JHsrdmFsb3JBY3R1YWwgLyArdmFsb3JBbnRlcmlvciAqIDEwMH0lO2AgK1xuICAgICAgICAgICAgICAgIGBjb250ZW50OicnO2AgK1xuICAgICAgICAgICAgICAgIGBkaXNwbGF5OmJsb2NrO2BcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYSB9IGZyb20gJy4vY2FyZC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYV1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJMeVRoZW1lMiIsImRlZmF1bHRFbnRyeSIsInNoYWRvd0J1aWxkZXIiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJ0b0Jvb2xlYW4iLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBZ0NFLHVCQUNVO1lBQUEsVUFBSyxHQUFMLEtBQUs7d0JBNUJSLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQ25DLFFBQVEsRUFDUjtnQkFBTSxRQUNKLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2FBQ3BCLENBQ0Y7K0JBQ2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDMUMsZ0JBQWdCLEVBQ2hCO2dCQUFNLFFBQ0osZ0JBQWdCO29CQUNoQixvQkFBb0I7YUFDckIsQ0FDRjsrQkFDYSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMxQyxnQkFBZ0IsRUFDaEI7Z0JBQU0sUUFD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