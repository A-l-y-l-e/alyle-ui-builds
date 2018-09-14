(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.card = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,i0,i1,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = {
        root: {
            display: 'block',
            overflow: 'hidden',
            borderRadius: '2px'
        },
        content: {
            display: 'block',
            padding: '16px 24px'
        },
        actions: {
            display: 'block',
            padding: '8px 12px'
        },
        actionsItem: {
            margin: '0 4px'
        }
    };
    var LyCardService = /** @class */ (function () {
        function LyCardService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles, 'lyCard');
        }
        LyCardService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        LyCardService.ctorParameters = function () {
            return [
                { type: i1.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyCardService.ngInjectableDef = i0.defineInjectable({ factory: function LyCardService_Factory() { return new LyCardService(i0.inject(i1.LyTheme2)); }, token: LyCardService, providedIn: "root" });
        return LyCardService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_ASPECT_RATIO = '16:9';
    var LyCard = /** @class */ (function () {
        // private _elevation: string | number;
        // private _elevationClass: string;
        // @Input()
        // set elevation(val: string | number) {
        //   if (this.elevation !== val) {
        //     const newClass = this._createElevationClass(val);
        //     this._elevationClass = this.styler.updateClass(this.el.nativeElement, this.renderer, newClass, this._elevationClass);
        //   }
        // }
        // get elevation() {
        //   return this._elevation;
        // }
        function LyCard(cardService, el, renderer, common$$1) {
            this.cardService = cardService;
            this.el = el;
            this.renderer = renderer;
            this.common = common$$1;
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
                this.renderer.addClass(this.el.nativeElement, this.cardService.classes.root);
                // if (this.elevation === void 0) {
                //   this.elevation = DEFAULT_ELEVATION;
                // }
            };
        LyCard.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card'
                    },] },
        ];
        /** @nocollapse */
        LyCard.ctorParameters = function () {
            return [
                { type: LyCardService },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyCommon, decorators: [{ type: i0.Optional }] }
            ];
        };
        return LyCard;
    }());
    var LyCardContent = /** @class */ (function () {
        function LyCardContent(el, renderer, cardService) {
            this.el = el;
            this.renderer = renderer;
            this.cardService = cardService;
        }
        /**
         * @return {?}
         */
        LyCardContent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, this.cardService.classes.content);
            };
        LyCardContent.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card-content'
                    },] },
        ];
        /** @nocollapse */
        LyCardContent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: LyCardService }
            ];
        };
        return LyCardContent;
    }());
    var LyCardActions = /** @class */ (function () {
        function LyCardActions(el, renderer, cardService) {
            this.el = el;
            this.renderer = renderer;
            this.cardService = cardService;
        }
        /**
         * @return {?}
         */
        LyCardActions.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.addClass(this.el.nativeElement, this.cardService.classes.actions);
                if (!i1.toBoolean(this.disableActionSpacing)) {
                    this.el.nativeElement.childNodes.forEach(function (element) {
                        _this.renderer.addClass(element, _this.cardService.classes.actionsItem);
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
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: LyCardService }
            ];
        };
        LyCardActions.propDecorators = {
            disableActionSpacing: [{ type: i0.Input }]
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
                    "background-position: center;"), this.el.nativeElement, instance);
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
                }), this.el.nativeElement, this._ratioClass);
            };
        LyCardMedia.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-card-media'
                    },] },
        ];
        /** @nocollapse */
        LyCardMedia.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i1.LyTheme2 }
            ];
        };
        LyCardMedia.propDecorators = {
            bgImg: [{ type: i0.Input }],
            ratio: [{ type: i0.Input }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, i1.LyCommonModule],
                        declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
                    },] },
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
    exports.ɵa = LyCardService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMTZweCAyNHB4J1xuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnOHB4IDEycHgnXG4gIH0sXG4gIGFjdGlvbnNJdGVtOiB7XG4gICAgbWFyZ2luOiAnMCA0cHgnXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDYXJkU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlDYXJkJyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCB0b0Jvb2xlYW4sIEx5Q29tbW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5Q2FyZFNlcnZpY2UgfSBmcm9tICcuL2NhcmQuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBwcml2YXRlIF9lbGV2YXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgLy8gcHJpdmF0ZSBfZWxldmF0aW9uQ2xhc3M6IHN0cmluZztcbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IGVsZXZhdGlvbih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAvLyAgIGlmICh0aGlzLmVsZXZhdGlvbiAhPT0gdmFsKSB7XG4gIC8vICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbCk7XG4gIC8vICAgICB0aGlzLl9lbGV2YXRpb25DbGFzcyA9IHRoaXMuc3R5bGVyLnVwZGF0ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gZ2V0IGVsZXZhdGlvbigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICAvLyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJkU2VydmljZTogTHlDYXJkU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbW1vbjogTHlDb21tb25cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbW1vbi5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICBsZXQgcmVxdWlyZU9uQ2hhbmdlczogYm9vbGVhbjtcbiAgICBpZiAoIXRoaXMuY29tbW9uLmJnKSB7XG4gICAgICB0aGlzLmNvbW1vbi5iZyA9ICdiYWNrZ3JvdW5kOnByaW1hcnknO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb21tb24uZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmNvbW1vbi5lbGV2YXRpb24gPSAyO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIC8vIGlmICghdGhpcy5jb21tb24uc2hhZG93Q29sb3IpIHtcbiAgICAvLyAgIHRoaXMuY29tbW9uLnNoYWRvd0NvbG9yID0gJ2NvbG9yU2hhZG93JztcbiAgICAvLyAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIC8vIH1cbiAgICBpZiAocmVxdWlyZU9uQ2hhbmdlcykge1xuICAgICAgdGhpcy5jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZFNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBpZiAodGhpcy5lbGV2YXRpb24gPT09IHZvaWQgMCkge1xuICAgIC8vICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICAvLyB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmRTZXJ2aWNlOiBMeUNhcmRTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZFNlcnZpY2UuY2xhc3Nlcy5jb250ZW50KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWFjdGlvbnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZEFjdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaXNhYmxlQWN0aW9uU3BhY2luZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkU2VydmljZTogTHlDYXJkU2VydmljZVxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkU2VydmljZS5jbGFzc2VzLmFjdGlvbnMpO1xuICAgIGlmICghdG9Cb29sZWFuKHRoaXMuZGlzYWJsZUFjdGlvblNwYWNpbmcpKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY2FyZFNlcnZpY2UuY2xhc3Nlcy5hY3Rpb25zSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1tZWRpYSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTWVkaWEgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9iZ0ltZzogc3RyaW5nO1xuICBwcml2YXRlIF9iZ0ltZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF0aW86IHN0cmluZztcbiAgcHJpdmF0ZSBfcmF0aW9DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBiZ0ltZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmdJbWcpIHtcbiAgICAgIHRoaXMuX2JnSW1nQ2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCwgdGhpcy5fYmdJbWdDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBiZ0ltZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdJbWc7XG4gIH1cblxuICAvKiogQXNwZWN0IHJhdGlvICovXG4gIEBJbnB1dCgpXG4gIHNldCByYXRpbyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5Q2FyZC1tZWRpYToke3ZhbH1gLFxuICAgICAgKFxuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYGJhY2tncm91bmQtc2l6ZTogY292ZXI7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2BcbiAgICAgICksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgdGhpcy5fcmF0aW9DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhLWFyOiR7dmFsfWAsICh7XG4gICAgICAgICcmOmJlZm9yZSc6IHZhbC5zcGxpdCgnOicpLnJlZHVjZSgodmFsb3JBbnRlcmlvciwgdmFsb3JBY3R1YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGAkeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSVgLFxuICAgICAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yYXRpb0NsYXNzXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWEsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYV1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJMeVRoZW1lMiIsImNvbW1vbiIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJMeUNvbW1vbiIsIk9wdGlvbmFsIiwidG9Cb29sZWFuIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLE1BQU0sR0FBRztRQUNiLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLFdBQVc7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsVUFBVTtTQUNwQjtRQUNELFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO0tBQ0YsQ0FBQzs7UUFLQSx1QkFDVTtZQUFBLFVBQUssR0FBTCxLQUFLOzJCQUZMLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7U0FHL0M7O29CQUxOQSxhQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozt3QkFyQnpCQyxXQUFROzs7OzRCQURqQjs7Ozs7OztBQ0FBO0lBSUEsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7O1FB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