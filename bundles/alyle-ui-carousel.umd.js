(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/carousel', ['exports', '@angular/core', '@angular/platform-browser', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.carousel = {}),global.ng.core,global.ng.platformBrowser,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,platformBrowser,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = ({
        root: {
            display: 'block',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            position: 'relative',
            '& .ly-carousel-actions': {
                position: 'absolute',
                top: 0,
                bottom: 0,
                margin: 'auto .25em',
                height: '1em',
                width: '1em',
                fontSize: '36px',
                cursor: 'pointer',
                color: '#fff',
                background: 'rgba(0, 0, 0, 0.11)',
                willChange: 'transform'
            },
            '& .ly-carousel-actions.right': {
                right: 0,
                '-webkit-transform': 'rotate(180deg)',
                transform: 'rotate(180deg)'
            },
            '& svg': {
                display: 'block',
                fill: 'currentColor'
            }
        },
        slideContainer: {
            overflow: 'hidden',
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        slide: {
            display: 'flex',
            width: '100%',
            height: '100%',
            willChange: 'transform',
            '& > ly-carousel-item': {
                width: '100%',
                flexShrink: 0,
                overflow: 'auto',
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            },
            '& > ly-carousel-item > [lyCarouselImg]': {
                width: '100%'
            }
        },
        slideContent: {
            display: 'flex'
        },
        slideAnim: {
            '& > div': {
                transition: 'transform 750ms cubic-bezier(.1, 1, 0.5, 1)'
            }
        },
        slideNoEvent: {
            '&>div': {
                touchAction: 'initial !important'
            }
        },
        carouselIndicators: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 0,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '48px',
            '&>div': {
                display: 'inline-block',
                borderRadius: '50%',
                cursor: 'pointer',
                position: 'relative',
                padding: '.5em',
                outline: 'none'
            },
            '&>div > span': {
                transition: '300ms cubic-bezier(0.65, 0.05, 0.36, 1)',
                width: '1em',
                height: '1em',
                transform: 'scale(.5)',
                borderRadius: '50%',
                willChange: 'transform',
                display: 'block'
            },
            '&>div>span.active': {
                transform: 'scale(1)'
            }
        }
    });
    /** @enum {number} */
    var CarouselMode = {
        /** full */
        default: 0,
        inline: 1,
    };
    CarouselMode[CarouselMode.default] = 'default';
    CarouselMode[CarouselMode.inline] = 'inline';
    var LyCarousel = /** @class */ (function () {
        function LyCarousel(elementRef, sanitizer, cd, theme, renderer) {
            this.elementRef = elementRef;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.theme = theme;
            this.renderer = renderer;
            this.nullImg = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            this._intervalFn = null;
            this.mode = CarouselMode.default;
            this.interval = 7000;
            this.selectedIndex = 0;
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
                var newVal = ui.toBoolean(val);
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
                if (ui.Platform.isBrowser) {
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
                this._positionLeft = ( /** @type {?} */(this.sanitizerStyle("translate(calc(" + -100 * this.selectedIndex + "% + " + x + "px), 0px)")));
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
                if (ui.Platform.isBrowser) {
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
                if (ui.Platform.isBrowser) {
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
            { type: core.Component, args: [{
                        selector: 'ly-carousel',
                        template: "<div\n(slidestart)=\"slideEvent && onDragStart($event)\"\n(slide)=\"slideEvent && onDrag($event)\"\n(slideend)=\"slideEvent && onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"6\"></span>\n      </div>\n  </div>\n  <div class=\"ly-carousel-actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div class=\"ly-carousel-actions right\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        LyCarousel.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: platformBrowser.DomSanitizer },
                { type: core.ChangeDetectorRef },
                { type: ui.LyTheme2 },
                { type: core.Renderer2 }
            ];
        };
        LyCarousel.propDecorators = {
            slideContainer: [{ type: core.ViewChild, args: ['slideContainer',] }],
            lyItems: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyCarouselItem; }),] }],
            mode: [{ type: core.Input }],
            interval: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            slideEvent: [{ type: core.Input }]
        };
        return LyCarousel;
    }());
    var LyCarouselItem = /** @class */ (function () {
        function LyCarouselItem(theme, renderer, elementRef) {
            this.theme = theme;
            this.renderer = renderer;
            this._nativeElement = elementRef.nativeElement;
        }
        Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._className = this.theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        LyCarouselItem.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: 'ly-carousel-item'
                    },] }
        ];
        /** @nocollapse */
        LyCarouselItem.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        LyCarouselItem.propDecorators = {
            srcImg: [{ type: core.Input }]
        };
        return LyCarouselItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_CAROUSEL_DIRECTIVES = [LyCarouselItem, LyCarousel];
    var LyCarouselModule = /** @class */ (function () {
        function LyCarouselModule() {
        }
        LyCarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ui.LyCommonModule],
                        exports: [LY_CAROUSEL_DIRECTIVES, ui.LyCommonModule],
                        declarations: [LY_CAROUSEL_DIRECTIVES]
                    },] }
        ];
        return LyCarouselModule;
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

    exports.CarouselMode = CarouselMode;
    exports.LyCarousel = LyCarousel;
    exports.LyCarouselItem = LyCarouselItem;
    exports.LyCarouselModule = LyCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJiAubHktY2Fyb3VzZWwtYWN0aW9ucyc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbWFyZ2luOiAnYXV0byAuMjVlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgZm9udFNpemU6ICczNnB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTEpJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gICAgfSxcbiAgICAnJiAubHktY2Fyb3VzZWwtYWN0aW9ucy5yaWdodCc6IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG4gICAgJyYgc3ZnJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgfVxuICB9LFxuICBzbGlkZUNvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgc2xpZGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAnJiA+IGx5LWNhcm91c2VsLWl0ZW0nOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgfSxcbiAgICAnJiA+IGx5LWNhcm91c2VsLWl0ZW0gPiBbbHlDYXJvdXNlbEltZ10nOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9LFxuICBzbGlkZUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgc2xpZGVBbmltOiB7XG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKSdcbiAgfVxuICB9LFxuICBzbGlkZU5vRXZlbnQ6IHtcbiAgICAnJj5kaXYnOiB7XG4gICAgICB0b3VjaEFjdGlvbjogJ2luaXRpYWwgIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIGNhcm91c2VsSW5kaWNhdG9yczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICcmPmRpdic6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nOiAnLjVlbScsXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICB9LFxuICAgICcmPmRpdiA+IHNwYW4nOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSguNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0sXG4gICAgJyY+ZGl2PnNwYW4uYWN0aXZlJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIHB1YmxpYyBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInKSBzbGlkZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5Q2Fyb3VzZWxJdGVtKSkgbHlJdGVtczogUXVlcnlMaXN0PEx5Q2Fyb3VzZWxJdGVtPjtcbiAgQElucHV0KCkgbW9kZTogQ2Fyb3VzZWxNb2RlID0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIGludGVydmFsID0gNzAwMDtcbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfc2xpZGVFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHNsaWRlRXZlbnQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fc2xpZGVFdmVudCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCBzbGlkZUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZUV2ZW50O1xuICB9XG4gIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG4gIG9uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfVxuICB9XG4gIG9uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zbGlkZUV2ZW50KSB7XG4gICAgICB0aGlzLnNsaWRlRXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLnNhbml0aXplclN0eWxlKGB0cmFuc2xhdGUoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgpYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgc2FuaXRpemVyU3R5bGUodmFsOiBhbnkpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlKCR7LTEwMCAqIHZhbH0lLCAwcHgpYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5zZWxlY3QocHJldiA8IDAgPyBsZW4gOiBwcmV2KTtcbiAgfVxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWNhcm91c2VsLWltZzoke3ZhbHVlfWAsIChcbiAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKWBcbiAgICAgICksXG4gICAgICB0aGlzLl9uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fY2xhc3NOYW1lLCBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTID0gW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTFlfQ0FST1VTRUxfRElSRUNUSVZFUywgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRvQm9vbGVhbiIsIlBsYXRmb3JtIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRSZWYiLCJEb21TYW5pdGl6ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkx5VGhlbWUyIiwiUmVuZGVyZXIyIiwiVmlld0NoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIklucHV0IiwiRGlyZWN0aXZlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBb0JNLGNBQWMsR0FBRyxDQUFDLENBQUM7O1FBRW5CLE1BQU0sSUFBSTtRQUNkLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLHFCQUFxQixFQUFFLE1BQU07WUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtZQUMxQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLHdCQUF3QixFQUFFO2dCQUN4QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRSxLQUFLO2dCQUNaLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixNQUFNLEVBQUUsU0FBUztnQkFDakIsS0FBSyxFQUFFLE1BQU07Z0JBQ2Is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