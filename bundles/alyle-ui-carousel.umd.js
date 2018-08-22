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
                        template: "<div\n(slidestart)=\"slideEvent && onDragStart($event)\"\n(slide)=\"slideEvent && onDrag($event)\"\n(slideend)=\"slideEvent && onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [newRaised]=\"[6]\"></span>\n      </div>\n  </div>\n  <div class=\"ly-carousel-actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div class=\"ly-carousel-actions right\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2Nhcm91c2VsL2Nhcm91c2VsLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEhvc3QsIFNraXBTZWxmLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBvZiBhcyBvYnNlcnZhYmxlT2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeVRoZW1lQ29udGFpbmVyLCBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4vY2Fyb3VzZWwubW9kdWxlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7fVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3B0aW9uYWwsXG4gIGZvcndhcmRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuKHNsaWRlc3RhcnQpPVwic2xpZGVFdmVudCAmJiBvbkRyYWdTdGFydCgkZXZlbnQpXCJcbihzbGlkZSk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZygkZXZlbnQpXCJcbihzbGlkZWVuZCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ0VuZCgkZXZlbnQpXCJcbiNzbGlkZUNvbnRhaW5lclxuPlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5zbGlkZVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3Bvc2l0aW9uTGVmdFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNhcm91c2VsSW5kaWNhdG9yc1wiICpuZ0lmPVwibHlJdGVtcy5sZW5ndGggIT09IDFcIj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBseUl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8c3BhbiBjb2xvcj1cIiMwMDBcIlxuICAgICAgYmc9XCJiYWNrZ3JvdW5kOnByaW1hcnlcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEluZGV4PT1pXCJcbiAgICAgIFtuZXdSYWlzZWRdPVwiWzZdXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibHktY2Fyb3VzZWwtYWN0aW9uc1wiIChjbGljayk9XCJwcmV2KClcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImx5LWNhcm91c2VsLWFjdGlvbnMgcmlnaHRcIiAoY2xpY2spPVwibmV4dCgpXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L3N2Zz5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIHB1YmxpYyBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInKSBzbGlkZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5Q2Fyb3VzZWxJdGVtKSkgbHlJdGVtczogUXVlcnlMaXN0PEx5Q2Fyb3VzZWxJdGVtPjtcbiAgQElucHV0KCkgbW9kZTogQ2Fyb3VzZWxNb2RlID0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIGludGVydmFsID0gNzAwMDtcbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZShcbiAgICAgICdjYXJvdXNlbCcsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YCArXG4gICAgICAgICAgYC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgICAgICAgYC1tcy11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyAubHktY2Fyb3VzZWwtYWN0aW9ucyc6ICgpID0+IChcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB0b3A6IDA7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbWFyZ2luOmF1dG8gLjI1ZW07YCArXG4gICAgICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgICAgICBgZm9udC1zaXplOjM2cHg7YCArXG4gICAgICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgICAgIGBjb2xvcjogI2ZmZjtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjExKTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgXG4gICAgICAgICksXG4gICAgICAgICcgLmx5LWNhcm91c2VsLWFjdGlvbnMucmlnaHQnOiAoKSA9PiAoXG4gICAgICAgICAgYHJpZ2h0OiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7YCArXG4gICAgICAgICAgYHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7YFxuICAgICAgICApLFxuICAgICAgICAnIHN2Zyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgICBgZmlsbDpjdXJyZW50Q29sb3I7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUNvbnRhaW5lcjogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGUoXG4gICAgICAnay1jYXJvdXNlbC1zbGlkZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YCArXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDEwMCU7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdjYXJvdXNlbC1zbGlkZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybWBcbiAgICAgICAgKSxcbiAgICAgICAgJyA+IGx5LWNhcm91c2VsLWl0ZW0nOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICAgIGBmbGV4LXNocmluazogMDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGF1dG87YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2BcbiAgICAgICAgKSxcbiAgICAgICAgJyA+IGx5LWNhcm91c2VsLWl0ZW0gPiBbbHlDYXJvdXNlbEltZ10nOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVDb250ZW50OiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdjYXJvdXNlbC1zbGlkZS1jb250ZW50Jywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVBbmltOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdzbGlkZS1hbmltJywge1xuICAgICAgICAnID4gZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVOb0V2ZW50OiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdrLXNsaWRlLW5vLWV2ZW50Jywge1xuICAgICAgICAnPmRpdic6ICgpID0+IChcbiAgICAgICAgICBgdG91Y2gtYWN0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBjYXJvdXNlbEluZGljYXRvcnM6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stY2Fyb3VzZWwtaW5kaWNhdG9ycycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2AgK1xuICAgICAgICAgIGBtYXJnaW46IDA7YCArXG4gICAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDQ4cHg7YFxuICAgICAgICApLFxuICAgICAgICAnPmRpdic6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogaW5saW5lLWJsb2NrO2AgK1xuICAgICAgICAgIGBib3JkZXItcmFkaXVzOiA1MCU7YCArXG4gICAgICAgICAgYGN1cnNvcjogcG9pbnRlcjtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgICAgIGBwYWRkaW5nOiAuNWVtO2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiBub25lYFxuICAgICAgICApLFxuICAgICAgICAnPmRpdiA+IHNwYW4nOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKTtgICtcbiAgICAgICAgICBgd2lkdGg6IDFlbTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxZW07YCArXG4gICAgICAgICAgYHRyYW5zZm9ybTogc2NhbGUoLjUpO2AgK1xuICAgICAgICAgIGBib3JkZXItcmFkaXVzOiA1MCU7YCArXG4gICAgICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07YCArXG4gICAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICAgICAgKSxcbiAgICAgICAgJz5kaXY+c3Bhbi5hY3RpdmUnOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zZm9ybTogc2NhbGUoMSk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgfTtcbiAgcHJpdmF0ZSBfc2xpZGVFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHNsaWRlRXZlbnQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fc2xpZGVFdmVudCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCBzbGlkZUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZUV2ZW50O1xuICB9XG4gIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG4gIG9uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfVxuICB9XG4gIG9uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNsaWRlRXZlbnQpIHtcbiAgICAgIHRoaXMuc2xpZGVFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IHRoaXMuc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZShjYWxjKCR7LTEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCksIDBweClgKSBhcyBhbnk7XG4gIH1cbiAgcHJpdmF0ZSBzYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQ29udGFpbmVyKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IGB0cmFuc2xhdGUoJHstMTAwICogdmFsfSUsIDBweClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG4gIG5leHQobm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICB0aGlzLnNlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxJdGVtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzcmNJbWcgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmNJbWcodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0ltZ1N0eWxlID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgYGx5LWNhcm91c2VsLWltZy0ke3ZhbHVlfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fbmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3SW1nU3R5bGUsIHRoaXMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IG5ld0ltZ1N0eWxlO1xuICB9XG4gIHByaXZhdGUgX2Nhcm91c2VsOiBMeUNhcm91c2VsO1xuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgY2Fyb3VzZWw6IEx5Q2Fyb3VzZWwsXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9jYXJvdXNlbCA9IGNhcm91c2VsO1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4vY2Fyb3VzZWwuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuXG5jb25zdCBMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTID0gW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0xZX0NBUk9VU0VMX0RJUkVDVElWRVNdLFxuICBkZWNsYXJhdGlvbnM6IFtMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb3JlVGhlbWUiLCJ0b0Jvb2xlYW4iLCJQbGF0Zm9ybSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50UmVmIiwiRG9tU2FuaXRpemVyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIkluamVjdCIsIlBMQVRGT1JNX0lEIiwiVmlld0NoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIklucHV0IiwiRGlyZWN0aXZlIiwiT3B0aW9uYWwiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVFFLHlCQUNVO1lBQUEsY0FBUyxHQUFULFNBQVM7U0FDZjs7b0JBTkxBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQUpvQ0MsWUFBUzs7Ozs4QkFGOUM7Ozs7Ozs7QUNBQTs7O1FBMkJFLFVBQU87UUFDUCxTQUFNOzs4QkFETixPQUFPOzhCQUNQLE1BQU07O1FBd05OLG9CQUNVLFlBQ0EsV0FDQSxJQUNBLE9BQ0EsVUFDcUIsVUFBa0I7WUFMdkMsZUFBVSxHQUFWLFVBQVU7WUFDVixjQUFTLEdBQVQsU0FBUztZQUNULE9BQUUsR0FBRixFQUFFO1lBQ0YsVUFBSyxHQUFMLEtBQUs7WUFDTCxhQUFRLEdBQVIsUUFBUTtZQUNhLGVBQVUsR0FBVixVQUFVLENBQVE7MkJBeExoQyxvRkFBb0Y7K0JBQy9FLElBQUk7d0JBR0ksWUFBWSxDQUFDLE9BQU87NEJBQzlCLElBQUk7aUNBRUMsQ0FBQzsyQkFFaEI7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDOUIsVUFBVSxFQUFFO29CQUNW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