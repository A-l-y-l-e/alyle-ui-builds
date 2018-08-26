(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/platform-browser'), require('@angular/common'), require('@alyle/ui/ripple')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/carousel', ['exports', '@angular/core', '@alyle/ui', '@angular/platform-browser', '@angular/common', '@alyle/ui/ripple'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.carousel = {}),global.ng.core,global.alyle.ui,global.ng.platformBrowser,global.ng.common,global.alyle.ui.ripple));
}(this, (function (exports,i0,i1,platformBrowser,common,ripple) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CarouselService = /** @class */ (function () {
        function CarouselService(coreTheme) {
            this.coreTheme = coreTheme;
        }
        CarouselService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        CarouselService.ctorParameters = function () {
            return [
                { type: i1.CoreTheme }
            ];
        };
        /** @nocollapse */ CarouselService.ngInjectableDef = i0.defineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(i0.inject(i1.CoreTheme)); }, token: CarouselService, providedIn: "root" });
        return CarouselService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var CarouselMode = {
        /** full */
        default: 0,
        inline: 1,
    };
    CarouselMode[CarouselMode.default] = 'default';
    CarouselMode[CarouselMode.inline] = 'inline';
    var LyCarousel = /** @class */ (function () {
        function LyCarousel(elementRef, sanitizer, cd, theme, renderer, platformId) {
            this.elementRef = elementRef;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.theme = theme;
            this.renderer = renderer;
            this.platformId = platformId;
            this.nullImg = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            this._intervalFn = null;
            this.mode = CarouselMode.default;
            this.interval = 7000;
            this.selectedIndex = 0;
            this.classes = {
                root: this.theme.core.setUpStyle('carousel', {
                    '': function () {
                        return ("display: block;" +
                            "-webkit-user-select: none;" +
                            "-moz-user-select: none;" +
                            "-ms-user-select: none;" +
                            "position: relative;");
                    },
                    ' .ly-carousel-actions': function () {
                        return ("position: absolute;" +
                            "top: 0;" +
                            "bottom: 0;" +
                            "margin:auto .25em;" +
                            "height:1em;" +
                            "width:1em;" +
                            "font-size:36px;" +
                            "cursor:pointer;" +
                            "color: #fff;" +
                            "background: rgba(0, 0, 0, 0.11);" +
                            "will-change: transform;");
                    },
                    ' .ly-carousel-actions.right': function () {
                        return ("right: 0;" +
                            "-webkit-transform: rotate(180deg);" +
                            "transform: rotate(180deg);");
                    },
                    ' svg': function () {
                        return ("display:block;" +
                            "fill:currentColor;");
                    }
                }),
                slideContainer: this.theme.core.setUpStyle('k-carousel-slide', {
                    '': function () {
                        return ("overflow: hidden;" +
                            "display: block;" +
                            "width: 100%;" +
                            "height: 100%;" +
                            "position: relative;");
                    }
                }),
                slide: this.theme.core.setUpStyleSecondary('carousel-slide', {
                    '': function () {
                        return ("display: flex;" +
                            "width: 100%;" +
                            "height: 100%;" +
                            "will-change: transform");
                    },
                    ' > ly-carousel-item': function () {
                        return ("width: 100%;" +
                            "flex-shrink: 0;" +
                            "overflow: auto;" +
                            "position: relative;" +
                            "background-size: cover;" +
                            "background-position: center;" +
                            "background-repeat: no-repeat;");
                    },
                    ' > ly-carousel-item > [lyCarouselImg]': function () { return ("width: 100%;"); }
                }),
                slideContent: this.theme.core.setUpStyleSecondary('carousel-slide-content', {
                    '': function () { return ("display: flex;"); }
                }),
                slideAnim: this.theme.core.setUpStyleSecondary('slide-anim', {
                    ' > div': function () { return ("transition: transform 750ms cubic-bezier(.1, 1, 0.5, 1);"); }
                }),
                slideNoEvent: this.theme.core.setUpStyleSecondary('k-slide-no-event', {
                    '>div': function () { return ("touch-action: initial !important;"); }
                }),
                carouselIndicators: this.theme.core.setUpStyleSecondary('k-carousel-indicators', {
                    '': function () {
                        return ("position: absolute;" +
                            "bottom: 0;" +
                            "left: 0;" +
                            "right: 0;" +
                            "margin: 0;" +
                            "box-sizing: border-box;" +
                            "display: flex;" +
                            "align-items: center;" +
                            "justify-content: center;" +
                            "height: 48px;");
                    },
                    '>div': function () {
                        return ("display: inline-block;" +
                            "border-radius: 50%;" +
                            "cursor: pointer;" +
                            "position: relative;" +
                            "padding: .5em;" +
                            "outline: none");
                    },
                    '>div > span': function () {
                        return ("transition: 300ms cubic-bezier(0.65, 0.05, 0.36, 1);" +
                            "width: 1em;" +
                            "height: 1em;" +
                            "transform: scale(.5);" +
                            "border-radius: 50%;" +
                            "will-change: transform;" +
                            "display: block;");
                    },
                    '>div>span.active': function () { return ("transform: scale(1);"); }
                }),
            };
            this.renderer.addClass(elementRef.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyCarousel.prototype, "slideEvent", {
            get: /**
             * @return {?}
             */ function () {
                return this._slideEvent;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = i1.toBoolean(val);
                this._slideEvent = newVal;
                if (newVal) {
                    this.renderer.removeClass(this.elementRef.nativeElement, this.classes.slideNoEvent);
                }
                else {
                    this.renderer.addClass(this.elementRef.nativeElement, this.classes.slideNoEvent);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype.onDragStart = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                this.renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this.selectedElement = this.lyItems.find(function (item, index) { return index === _this.selectedIndex; })._nativeElement;
            };
        /**
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype.onDrag = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var rect = this.selectedElement.getBoundingClientRect();
                if (Math.abs(e.deltaX) < rect.width) {
                    this._onPan(e.deltaX);
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype.onDragEnd = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var rect = this.selectedElement.getBoundingClientRect();
                this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this.select(this.selectedIndex);
                if (Math.abs(e.deltaX) > rect.width / 2) {
                    if (0 > e.deltaX) {
                        this.next();
                    }
                    else if (0 < e.deltaX) {
                        this.prev();
                    }
                }
                else if (e.additionalEvent) {
                    /** @type {?} */
                    var eventName = e.additionalEvent;
                    if (eventName === 'slideleft') {
                        this.next();
                    }
                    else if (eventName === 'slideright') {
                        this.prev();
                    }
                }
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.slideEvent) {
                    this.slideEvent = false;
                }
                if (i1.Platform.isBrowser) {
                    this._resetInterval();
                }
            };
        /**
         * @param {?} x
         * @return {?}
         */
        LyCarousel.prototype._onPan = /**
         * @param {?} x
         * @return {?}
         */
            function (x) {
                this._positionLeft = /** @type {?} */ (this.sanitizerStyle("translate(calc(" + -100 * this.selectedIndex + "% + " + x + "px), 0px)"));
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCarousel.prototype.sanitizerStyle = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return this.sanitizer.bypassSecurityTrustStyle(val);
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (i1.Platform.isBrowser) {
                    this.stop();
                }
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this.cd.markForCheck();
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
                if (i1.Platform.isBrowser) {
                    this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                }
            };
        /**
         * @param {?} val
         * @param {?=} notResetInterval
         * @return {?}
         */
        LyCarousel.prototype.select = /**
         * @param {?} val
         * @param {?=} notResetInterval
         * @return {?}
         */
            function (val, notResetInterval) {
                this.selectedIndex = val;
                if (this.mode === CarouselMode.default) {
                    this._positionLeft = "translate(" + -100 * val + "%, 0px)";
                }
                if (!notResetInterval) {
                    this._resetInterval();
                }
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype.prev = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var len = this.lyItems.length - 1;
                /** @type {?} */
                var prev = this.selectedIndex - 1;
                this.select(prev < 0 ? len : prev);
            };
        /**
         * @param {?=} notResetInterval
         * @return {?}
         */
        LyCarousel.prototype.next = /**
         * @param {?=} notResetInterval
         * @return {?}
         */
            function (notResetInterval) {
                /** @type {?} */
                var len = this.lyItems.length - 1;
                /** @type {?} */
                var next = this.selectedIndex + 1;
                this.select(next > len ? 0 : next, notResetInterval);
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype._resetInterval = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.stop();
                this._intervalFn = setInterval(function () {
                    _this.next(true);
                    _this.cd.markForCheck();
                }, this.interval);
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype.stop = /**
         * @return {?}
         */
            function () {
                if (this._intervalFn !== null) {
                    clearInterval(this._intervalFn);
                }
            };
        LyCarousel.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-carousel',
                        template: "<div\n(slidestart)=\"slideEvent && onDragStart($event)\"\n(slide)=\"slideEvent && onDrag($event)\"\n(slideend)=\"slideEvent && onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"6\"></span>\n      </div>\n  </div>\n  <div class=\"ly-carousel-actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div class=\"ly-carousel-actions right\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        LyCarousel.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: platformBrowser.DomSanitizer },
                { type: i0.ChangeDetectorRef },
                { type: i1.LyTheme2 },
                { type: i0.Renderer2 },
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        LyCarousel.propDecorators = {
            slideContainer: [{ type: i0.ViewChild, args: ['slideContainer',] }],
            lyItems: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return LyCarouselItem; }),] }],
            mode: [{ type: i0.Input }],
            interval: [{ type: i0.Input }],
            selectedIndex: [{ type: i0.Input }],
            slideEvent: [{ type: i0.Input }]
        };
        return LyCarousel;
    }());
    var LyCarouselItem = /** @class */ (function () {
        function LyCarouselItem(carousel, carouselService, cd, platformId, theme, renderer, elementRef) {
            this.carouselService = carouselService;
            this.cd = cd;
            this.platformId = platformId;
            this.theme = theme;
            this.renderer = renderer;
            this._carousel = carousel;
            this._nativeElement = elementRef.nativeElement;
        }
        Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newImgStyle = this.theme.setUpStyleSecondary("ly-carousel-img-" + value, {
                    '': function () { return ("background-image: url('" + value + "');"); }
                });
                this.theme.updateClassName(this._nativeElement, this.renderer, newImgStyle, this.className);
                this.className = newImgStyle;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        LyCarouselItem.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { };
        /**
         * @return {?}
         */
        LyCarouselItem.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        LyCarouselItem.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'ly-carousel-item'
                    },] },
        ];
        /** @nocollapse */
        LyCarouselItem.ctorParameters = function () {
            return [
                { type: LyCarousel, decorators: [{ type: i0.Optional }] },
                { type: CarouselService },
                { type: i0.ChangeDetectorRef },
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i1.LyTheme2 },
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        LyCarouselItem.propDecorators = {
            src: [{ type: i0.Input }],
            srcImg: [{ type: i0.Input }]
        };
        return LyCarouselItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_CAROUSEL_DIRECTIVES = [LyCarouselItem, LyCarousel];
    var LyCarouselModule = /** @class */ (function () {
        function LyCarouselModule() {
        }
        LyCarouselModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, i1.LyCommonModule, ripple.LyRippleModule],
                        exports: [LY_CAROUSEL_DIRECTIVES],
                        declarations: [LY_CAROUSEL_DIRECTIVES]
                    },] },
        ];
        return LyCarouselModule;
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

    exports.CarouselMode = CarouselMode;
    exports.LyCarousel = LyCarousel;
    exports.LyCarouselItem = LyCarouselItem;
    exports.CarouselService = CarouselService;
    exports.LyCarouselModule = LyCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2Nhcm91c2VsL2Nhcm91c2VsLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkge31cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9wdGlvbmFsLFxuICBmb3J3YXJkUmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIHRvQm9vbGVhbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZTogYDxkaXZcbihzbGlkZXN0YXJ0KT1cInNsaWRlRXZlbnQgJiYgb25EcmFnU3RhcnQoJGV2ZW50KVwiXG4oc2xpZGUpPVwic2xpZGVFdmVudCAmJiBvbkRyYWcoJGV2ZW50KVwiXG4oc2xpZGVlbmQpPVwic2xpZGVFdmVudCAmJiBvbkRyYWdFbmQoJGV2ZW50KVwiXG4jc2xpZGVDb250YWluZXJcbj5cbiAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuc2xpZGVcIiBbc3R5bGUudHJhbnNmb3JtXT1cIl9wb3NpdGlvbkxlZnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5jYXJvdXNlbEluZGljYXRvcnNcIiAqbmdJZj1cImx5SXRlbXMubGVuZ3RoICE9PSAxXCI+XG4gICAgICA8ZGl2IHRhYmluZGV4PVwiMFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0KGkpXCJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbHlJdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPHNwYW4gY29sb3I9XCIjMDAwXCJcbiAgICAgIGJnPVwiYmFja2dyb3VuZDpwcmltYXJ5XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRJbmRleD09aVwiXG4gICAgICBbZWxldmF0aW9uXT1cIjZcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zXCIgKGNsaWNrKT1cInByZXYoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibHktY2Fyb3VzZWwtYWN0aW9ucyByaWdodFwiIChjbGljayk9XCJuZXh0KClcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX3NlbGVjdGVkSW5kZXg6IGFueTtcbiAgcHVibGljIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlKFxuICAgICAgJ2Nhcm91c2VsJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgLW1vei11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgLW1zLXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgICAgICApLFxuICAgICAgICAnIC5seS1jYXJvdXNlbC1hY3Rpb25zJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHRvcDogMDtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBtYXJnaW46YXV0byAuMjVlbTtgICtcbiAgICAgICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgICAgIGBmb250LXNpemU6MzZweDtgICtcbiAgICAgICAgICBgY3Vyc29yOnBvaW50ZXI7YCArXG4gICAgICAgICAgYGNvbG9yOiAjZmZmO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTEpO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyAubHktY2Fyb3VzZWwtYWN0aW9ucy5yaWdodCc6ICgpID0+IChcbiAgICAgICAgICBgcmlnaHQ6IDA7YCArXG4gICAgICAgICAgYC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtgICtcbiAgICAgICAgICBgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtgXG4gICAgICAgICksXG4gICAgICAgICcgc3ZnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICAgIGBmaWxsOmN1cnJlbnRDb2xvcjtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQ29udGFpbmVyOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZShcbiAgICAgICdrLWNhcm91c2VsLXNsaWRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGU6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtYFxuICAgICAgICApLFxuICAgICAgICAnID4gbHktY2Fyb3VzZWwtaXRlbSc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGZsZXgtc2hyaW5rOiAwO2AgK1xuICAgICAgICAgIGBvdmVyZmxvdzogYXV0bztgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YFxuICAgICAgICApLFxuICAgICAgICAnID4gbHktY2Fyb3VzZWwtaXRlbSA+IFtseUNhcm91c2VsSW1nXSc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUNvbnRlbnQ6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlLWNvbnRlbnQnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUFuaW06IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ3NsaWRlLWFuaW0nLCB7XG4gICAgICAgICcgPiBkaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZU5vRXZlbnQ6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stc2xpZGUtbm8tZXZlbnQnLCB7XG4gICAgICAgICc+ZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGB0b3VjaC1hY3Rpb246IGluaXRpYWwgIWltcG9ydGFudDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIGNhcm91c2VsSW5kaWNhdG9yczogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay1jYXJvdXNlbC1pbmRpY2F0b3JzJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbGVmdDogMDtgICtcbiAgICAgICAgICBgcmlnaHQ6IDA7YCArXG4gICAgICAgICAgYG1hcmdpbjogMDtgICtcbiAgICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgICtcbiAgICAgICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gICAgICAgICAgYGhlaWdodDogNDhweDtgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDUwJTtgICtcbiAgICAgICAgICBgY3Vyc29yOiBwb2ludGVyO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICAgICAgYHBhZGRpbmc6IC41ZW07YCArXG4gICAgICAgICAgYG91dGxpbmU6IG5vbmVgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2ID4gc3Bhbic6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO2AgK1xuICAgICAgICAgIGB3aWR0aDogMWVtO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDFlbTtgICtcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSguNSk7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDUwJTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgICtcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YFxuICAgICAgICApLFxuICAgICAgICAnPmRpdj5zcGFuLmFjdGl2ZSc6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSgxKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICB9O1xuICBwcml2YXRlIF9zbGlkZUV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgc2xpZGVFdmVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9zbGlkZUV2ZW50ID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNsaWRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlRXZlbnQ7XG4gIH1cbiAgb25EcmFnU3RhcnQoZSkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA8IHJlY3Qud2lkdGgpIHtcbiAgICAgIHRoaXMuX29uUGFuKGUuZGVsdGFYKTtcbiAgICB9XG4gIH1cbiAgb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2xpZGVFdmVudCkge1xuICAgICAgdGhpcy5zbGlkZUV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gdGhpcy5zYW5pdGl6ZXJTdHlsZShgdHJhbnNsYXRlKGNhbGMoJHstMTAwICogdGhpcy5zZWxlY3RlZEluZGV4IH0lICsgJHt4fXB4KSwgMHB4KWApIGFzIGFueTtcbiAgfVxuICBwcml2YXRlIHNhbml0aXplclN0eWxlKHZhbDogYW55KTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gYHRyYW5zbGF0ZSgkey0xMDAgKiB2YWx9JSwgMHB4KWA7XG4gICAgfVxuICAgIGlmICghbm90UmVzZXRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsRm4gIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxGbik7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNyY0ltZyAqL1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3SW1nU3R5bGUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nLSR7dmFsdWV9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9Jyk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdJbWdTdHlsZSwgdGhpcy5jbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gbmV3SW1nU3R5bGU7XG4gIH1cbiAgcHJpdmF0ZSBfY2Fyb3VzZWw6IEx5Q2Fyb3VzZWw7XG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBjYXJvdXNlbDogTHlDYXJvdXNlbCxcbiAgICBwcml2YXRlIGNhcm91c2VsU2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX2Nhcm91c2VsID0gY2Fyb3VzZWw7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmNvbnN0IExZX0NBUk9VU0VMX0RJUkVDVElWRVMgPSBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWxdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTFlfQ0FST1VTRUxfRElSRUNUSVZFU10sXG4gIGRlY2xhcmF0aW9uczogW0xZX0NBUk9VU0VMX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvcmVUaGVtZSIsInRvQm9vbGVhbiIsIlBsYXRmb3JtIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRSZWYiLCJEb21TYW5pdGl6ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkx5VGhlbWUyIiwiUmVuZGVyZXIyIiwiSW5qZWN0IiwiUExBVEZPUk1fSUQiLCJWaWV3Q2hpbGQiLCJDb250ZW50Q2hpbGRyZW4iLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiLCJMeVJpcHBsZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBTUUseUJBQ1U7WUFBQSxjQUFTLEdBQVQsU0FBUztTQUNmOztvQkFOTEEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBSFFDLFlBQVM7Ozs7OEJBRGxCOzs7Ozs7O0FDQUE7OztRQTJCRSxVQUFPO1FBQ1AsU0FBTTs7OEJBRE4sT0FBTzs4QkFDUCxNQUFNOztRQXdOTixvQkFDVSxZQUNBLFdBQ0EsSUFDQSxPQUNBLFVBQ3FCLFVBQWtCO1lBTHZDLGVBQVUsR0FBVixVQUFVO1lBQ1YsY0FBUyxHQUFULFNBQVM7WUFDVCxPQUFFLEdBQUYsRUFBRTtZQUNGLFVBQUssR0FBTCxLQUFLO1lBQ0wsYUFBUSxHQUFSLFFBQVE7WUFDYSxlQUFVLEdBQVYsVUFBVSxDQUFROzJCQXhMaEMsb0ZBQW9GOytCQUMvRSxJQUFJO3dCQUdJLFlBQVksQ0FBQyxPQUFPOzRCQUM5QixJQUFJO2lDQUVDLENBQUM7MkJBRWhCO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQzlCLFVBQVUsRUFBRTtvQkFDVixFQUFFLEVBQUU7d0JBQU0sUUFDUixpQkFBaUI7NEJBQ2pCLDRCQUE0Qjs0QkFDNUIseUJBQXlCOzRCQUN6Qix3QkFBd0I7NEJBQ3hCLHFCQUFxQjtxQkFDdEI7b0JBQ0QsdUJBQXVCLEVBQUU7d0JBQU0sUUFDN0IscUJBQXFCOzRCQUNyQixTQUFTOzRCQUNULFlBQVk7NEJBQ1osb0JBQW9COzRCQUNwQixhQUFhOzRCQUNiLFlBQVk7NEJBQ1osaUJBQWlCOzRCQUNqQixpQkFBaUI7NEJBQ2pCLGNBQWM7NEJBQ2Qsa0NBQWtDOzRCQUNsQyx5QkFBeUI7cUJBQzFCO29CQUNELDZCQUE2QixFQUFF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