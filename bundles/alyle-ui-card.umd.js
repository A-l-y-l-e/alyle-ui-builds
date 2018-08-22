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
            this.classes = theme.addStyleSheet(styles, 'lyCard');
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
        function LyCard(cardService, theme, el, renderer, common$$1) {
            this.cardService = cardService;
            this.theme = theme;
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
                if (!this.common.shadowColor) {
                    this.common.shadowColor = 'colorShadow';
                    requireOnChanges = true;
                }
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
                { type: i1.LyTheme2 },
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
                    /** @type {?} */
                    var newClass = this._createBgImgClass(val);
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
            /** Aspect ratio */
            set: /**
             * Aspect ratio
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.ratio) {
                    /** @type {?} */
                    var newClass = this._createAspectRatioClass(val);
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
                        exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMTZweCAyNHB4J1xuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnOHB4IDEycHgnXG4gIH0sXG4gIGFjdGlvbnNJdGVtOiB7XG4gICAgbWFyZ2luOiAnMCA0cHgnXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDYXJkU2VydmljZSB7XG4gIGNsYXNzZXM6IHtcbiAgICByb290OiBzdHJpbmcsXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIGFjdGlvbnM6IHN0cmluZyxcbiAgICBhY3Rpb25zSXRlbTogc3RyaW5nLFxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUNhcmQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQsIGRlZmF1bHRFbnRyeSwgdG9Cb29sZWFuLCBMeUNvbW1vbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNhcmRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJkLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX0VMRVZBVElPTiA9IDI7XG5jb25zdCBERUZBVUxUX0FTUEVDVF9SQVRJTyA9ICcxNjo5JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gcHJpdmF0ZSBfZWxldmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8vIHByaXZhdGUgX2VsZXZhdGlvbkNsYXNzOiBzdHJpbmc7XG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBlbGV2YXRpb24odmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgLy8gICBpZiAodGhpcy5lbGV2YXRpb24gIT09IHZhbCkge1xuICAvLyAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWwpO1xuICAvLyAgICAgdGhpcy5fZWxldmF0aW9uQ2xhc3MgPSB0aGlzLnN0eWxlci51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9lbGV2YXRpb25DbGFzcyk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIGdldCBlbGV2YXRpb24oKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2VsZXZhdGlvbjtcbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FyZFNlcnZpY2U6IEx5Q2FyZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb21tb246IEx5Q29tbW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHJlcXVpcmVPbkNoYW5nZXM6IGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5iZykge1xuICAgICAgdGhpcy5jb21tb24uYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tbW9uLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5jb21tb24uZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tbW9uLnNoYWRvd0NvbG9yKSB7XG4gICAgICB0aGlzLmNvbW1vbi5zaGFkb3dDb2xvciA9ICdjb2xvclNoYWRvdyc7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVpcmVPbkNoYW5nZXMpIHtcbiAgICAgIHRoaXMuY29tbW9uLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmRTZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gaWYgKHRoaXMuZWxldmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAvLyAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgLy8gfVxuICB9XG5cbiAgLy8gcHJpdmF0ZSBfY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgLy8gICB0aGlzLl9lbGV2YXRpb24gPSBkZWZhdWx0RW50cnkodmFsLCBERUZBVUxUX0VMRVZBVElPTik7XG4gIC8vICAgY29uc29sZS5sb2coJ2VsZScsIHRoaXMuZWxldmF0aW9uKTtcbiAgLy8gICByZXR1cm4gdGhpcy5zdHlsZXIuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAvLyAgICAgYGstY2FyZC1lOiR7dGhpcy5lbGV2YXRpb259YCxcbiAgLy8gICAgIHRoZW1lID0+IChcbiAgLy8gICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnl9O2AgK1xuICAvLyAgICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gIC8vICAgICAgIC8vIGBwYWRkaW5nOjI0cHg7YCArIC8vIHJlbW92ZSB0aGlzXG4gIC8vICAgICAgIGBib3JkZXItcmFkaXVzOjJweDtgICtcbiAgLy8gICAgICAgYCR7c2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24pfWBcbiAgLy8gICAgIClcbiAgLy8gICApO1xuICAvLyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkU2VydmljZTogTHlDYXJkU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmRTZXJ2aWNlLmNsYXNzZXMuY29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZFNlcnZpY2U6IEx5Q2FyZFNlcnZpY2VcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZFNlcnZpY2UuY2xhc3Nlcy5hY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNhcmRTZXJ2aWNlLmNsYXNzZXMuYWN0aW9uc0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtbWVkaWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYmdJbWc6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmdJbWdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JhdGlvQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYmdJbWcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnSW1nKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUJnSW1nQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuX2JnSW1nQ2xhc3MgPSB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2JnSW1nQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYmdJbWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnSW1nO1xuICB9XG5cbiAgLyoqIEFzcGVjdCByYXRpbyAqL1xuICBASW5wdXQoKVxuICBzZXQgcmF0aW8odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnJhdGlvKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuX3JhdGlvQ2xhc3MgPSB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3JhdGlvQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5yYXRpbyA9IERFRkFVTFRfQVNQRUNUX1JBVElPO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJnSW1nQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZ0ltZyA9IHZhbDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYGJhY2tncm91bmQtaW1hZ2VgLCBgdXJsKFwiJHt2YWx9XCIpYCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBrLWNhcmQtbWVkaWE6JHt2YWx9YCxcbiAgICAgICgpID0+IChcbiAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yYXRpbyA9IHZhbDtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGstY2FyZC1tZWRpYS1hcjoke3ZhbH1gLCB7XG4gICAgICAgICc6YmVmb3JlJzogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB2YWwuc3BsaXQoJzonKS5yZWR1Y2UoKHZhbG9yQW50ZXJpb3IsIHZhbG9yQWN0dWFsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgYHBhZGRpbmctdG9wOiR7K3ZhbG9yQWN0dWFsIC8gK3ZhbG9yQW50ZXJpb3IgKiAxMDB9JTtgICtcbiAgICAgICAgICAgICAgICBgY29udGVudDonJztgICtcbiAgICAgICAgICAgICAgICBgZGlzcGxheTpibG9jaztgXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWEgfSBmcm9tICcuL2NhcmQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYV0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWFdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJjb21tb24iLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlDb21tb24iLCJPcHRpb25hbCIsInRvQm9vbGVhbiIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUdBLElBQU0sTUFBTSxHQUFHO1FBQ2IsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsV0FBVztTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLE9BQU87U0FDaEI7S0FDRixDQUFDOztRQVVBLHVCQUNFLEtBQWU7WUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3REOztvQkFaRkEsYUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7d0JBckJ6QkMsV0FBUTs7Ozs0QkFEakI7Ozs7Ozs7QUNBQTtJQUtBLElBQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7OztRQW1CbEMsZ0JBQ1UsYUFDQSxPQUNBLElBQ0EsVUFDWUMsU0FBZ0I7WUFKNUIsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsVUFBSyxHQUFMLEtBQUs7WUFDTCxP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