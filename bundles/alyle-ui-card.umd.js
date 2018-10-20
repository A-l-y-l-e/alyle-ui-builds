(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.card = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = function (theme) {
        var _a, _b;
        return ({
            root: {
                display: 'block',
                overflow: 'hidden',
                borderRadius: '2px'
            },
            content: (_a = {
                display: 'block',
                padding: '16px 24px'
            },
                _a[theme.getBreakpoint('XSmall')] = {
                    padding: '16px 16px'
                },
                _a),
            actions: (_b = {
                display: 'block',
                padding: '8px 12px'
            },
                _b[theme.getBreakpoint('XSmall')] = {
                    padding: '8px 4px'
                },
                _b),
            actionsItem: {
                margin: '0 4px'
            }
        });
    };
    /** @type {?} */
    var DEFAULT_ASPECT_RATIO = '16:9';
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    var LyCard = /** @class */ (function () {
        function LyCard(theme, el, renderer, common$$1) {
            this.theme = theme;
            this.el = el;
            this.renderer = renderer;
            this.common = common$$1;
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        }
        /**
         * @return {?}
         */
        LyCard.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.common.setAutoContrast();
                /** @type {?} */
                var requireOnChanges;
                if (!this.common.bg) {
                    this.common.bg = 'background:primary';
                    requireOnChanges = true;
                }
                if (!this.common.elevation) {
                    this.common.elevation = 2;
                    requireOnChanges = true;
                }
                // if (!this.common.shadowColor) {
                //   this.common.shadowColor = 'colorShadow';
                //   requireOnChanges = true;
                // }
                if (requireOnChanges) {
                    this.common.ngOnChanges();
                }
                this.renderer.addClass(this.el.nativeElement, this.classes.root);
                // if (this.elevation === void 0) {
                //   this.elevation = DEFAULT_ELEVATION;
                // }
            };
        LyCard.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card'
                    },] }
        ];
        /** @nocollapse */
        LyCard.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyCommon, decorators: [{ type: core.Optional }] }
            ];
        };
        return LyCard;
    }());
    var LyCardContent = /** @class */ (function () {
        function LyCardContent(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        /**
         * @return {?}
         */
        LyCardContent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
            };
        LyCardContent.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card-content'
                    },] }
        ];
        /** @nocollapse */
        LyCardContent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyCard }
            ];
        };
        return LyCardContent;
    }());
    var LyCardActions = /** @class */ (function () {
        function LyCardActions(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        /**
         * @return {?}
         */
        LyCardActions.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
                if (!ui.toBoolean(this.disableActionSpacing)) {
                    this.el.nativeElement.childNodes.forEach(function (element) {
                        _this.renderer.addClass(element, _this.card.classes.actionsItem);
                    });
                }
            };
        LyCardActions.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card-actions'
                    },] }
        ];
        /** @nocollapse */
        LyCardActions.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: LyCard }
            ];
        };
        LyCardActions.propDecorators = {
            disableActionSpacing: [{ type: core.Input }]
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
                    this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
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
            /** Aspect ratio */
            set: /**
             * Aspect ratio
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.ratio) {
                    this._createAspectRatioClass(val);
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
         * @param {?} instance
         * @return {?}
         */
        LyCardMedia.prototype._createBgImgClass = /**
         * @param {?} val
         * @param {?} instance
         * @return {?}
         */
            function (val, instance) {
                this._bgImg = val;
                this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
                return this.theme.addStyle("lyCard-media:" + val, ("display:block;" +
                    "background-size: cover;" +
                    "background-repeat: no-repeat;" +
                    "background-position: center;"), this.el.nativeElement, instance, STYLE_PRIORITY);
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
                this._ratioClass = this.theme.addStyle("lyCard-media-ar:" + val, ({
                    '&:before': val.split(':').reduce(function (valorAnterior, valorActual) {
                        return /** @type {?} */ (({
                            paddingTop: +valorActual / +valorAnterior * 100 + "%",
                            content: "''",
                            display: 'block'
                        }));
                    })
                }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
            };
        LyCardMedia.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card-media'
                    },] }
        ];
        /** @nocollapse */
        LyCardMedia.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 }
            ];
        };
        LyCardMedia.propDecorators = {
            bgImg: [{ type: core.Input }],
            ratio: [{ type: core.Input }]
        };
        return LyCardMedia;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyCardModule = /** @class */ (function () {
        function LyCardModule() {
        }
        LyCardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, ui.LyCommonModule],
                        declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
                    },] }
        ];
        return LyCardModule;
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

    exports.LyCardModule = LyCardModule;
    exports.LyCard = LyCard;
    exports.LyCardContent = LyCardContent;
    exports.LyCardActions = LyCardActions;
    exports.LyCardMedia = LyCardMedia;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCB0b0Jvb2xlYW4sIEx5Q29tbW9uLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcxNnB4IDE2cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnOHB4IDEycHgnLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggNHB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uc0l0ZW06IHtcbiAgICBtYXJnaW46ICcwIDRweCdcbiAgfVxufSk7XG5cbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbW1vbjogTHlDb21tb25cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbW1vbi5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICBsZXQgcmVxdWlyZU9uQ2hhbmdlczogYm9vbGVhbjtcbiAgICBpZiAoIXRoaXMuY29tbW9uLmJnKSB7XG4gICAgICB0aGlzLmNvbW1vbi5iZyA9ICdiYWNrZ3JvdW5kOnByaW1hcnknO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb21tb24uZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmNvbW1vbi5lbGV2YXRpb24gPSAyO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlmICghdGhpcy5jb21tb24uc2hhZG93Q29sb3IpIHtcbiAgICAvLyAgIHRoaXMuY29tbW9uLnNoYWRvd0NvbG9yID0gJ2NvbG9yU2hhZG93JztcbiAgICAvLyAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIC8vIH1cbiAgICBpZiAocmVxdWlyZU9uQ2hhbmdlcykge1xuICAgICAgdGhpcy5jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBpZiAodGhpcy5lbGV2YXRpb24gPT09IHZvaWQgMCkge1xuICAgIC8vICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICAvLyB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5jb250ZW50KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWFjdGlvbnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZEFjdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaXNhYmxlQWN0aW9uU3BhY2luZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmFjdGlvbnMpO1xuICAgIGlmICghdG9Cb29sZWFuKHRoaXMuZGlzYWJsZUFjdGlvblNwYWNpbmcpKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2JnSW1nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnSW1nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuICBwcml2YXRlIF9yYXRpb0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGJnSW1nKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZ0ltZykge1xuICAgICAgdGhpcy5fYmdJbWdDbGFzcyA9IHRoaXMuX2NyZWF0ZUJnSW1nQ2xhc3ModmFsLCB0aGlzLl9iZ0ltZ0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJnSW1nKCkge1xuICAgIHJldHVybiB0aGlzLl9iZ0ltZztcbiAgfVxuXG4gIC8qKiBBc3BlY3QgcmF0aW8gKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5fY3JlYXRlQXNwZWN0UmF0aW9DbGFzcyh2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5yYXRpbyA9IERFRkFVTFRfQVNQRUNUX1JBVElPO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJnSW1nQ2xhc3ModmFsOiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZ0ltZyA9IHZhbDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYGJhY2tncm91bmQtaW1hZ2VgLCBgdXJsKFwiJHt2YWx9XCIpYCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhOiR7dmFsfWAsXG4gICAgICAoXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgICAgKSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQXNwZWN0UmF0aW9DbGFzcyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3JhdGlvID0gdmFsO1xuICAgIHRoaXMuX3JhdGlvQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5Q2FyZC1tZWRpYS1hcjoke3ZhbH1gLCAoe1xuICAgICAgICAnJjpiZWZvcmUnOiB2YWwuc3BsaXQoJzonKS5yZWR1Y2UoKHZhbG9yQW50ZXJpb3IsIHZhbG9yQWN0dWFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBgJHsrdmFsb3JBY3R1YWwgLyArdmFsb3JBbnRlcmlvciAqIDEwMH0lYCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fcmF0aW9DbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWEsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYV1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImNvbW1vbiIsIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkx5Q29tbW9uIiwiT3B0aW9uYWwiLCJ0b0Jvb2xlYW4iLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUdBLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7O1FBQUssUUFBQztZQUN6QyxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLE9BQU87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