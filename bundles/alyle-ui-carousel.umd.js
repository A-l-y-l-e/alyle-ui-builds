(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@alyle/ui'), require('chroma-js'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/carousel', ['exports', '@angular/core', '@angular/platform-browser', '@alyle/ui', 'chroma-js', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.carousel = {}),global.ng.core,global.ng.platformBrowser,global.ly.core,global.chroma,global.ng.common));
}(this, (function (exports,core,platformBrowser,ui,_chroma,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * \@docs-private
     * @type {?}
     */
    var chroma = _chroma;
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = function (theme) {
        return ({
            root: {
                display: 'block',
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                position: 'relative',
                '& {actions}.right': {
                    right: 0,
                    '-webkit-transform': 'rotate(180deg)',
                    transform: 'rotate(180deg)'
                },
                '& svg': {
                    display: 'block',
                    fill: 'currentColor'
                }
            },
            actions: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                margin: 'auto .25em',
                height: '1em',
                width: '1em',
                fontSize: '36px',
                cursor: 'pointer',
                color: theme.background.primary.default,
                background: chroma(theme.text.primary).alpha(.25).css(),
                willChange: 'transform'
            },
            slideContainer: {
                overflow: 'hidden',
                display: 'block',
                width: '100%',
                height: '100%',
                position: 'relative',
                touchAction: 'pan-y !important'
            },
            slide: {
                display: 'flex',
                width: '100%',
                height: '100%',
                willChange: 'transform',
                '& > ly-carousel-item': {
                    width: '100%',
                    flexShrink: 0,
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
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
                    display: 'block',
                    opacity: .65
                },
                '&>div>span.active': {
                    transform: 'scale(1)',
                    opacity: 1
                }
            }
        });
    };
    /** @enum {number} */
    var CarouselMode = {
        /** full */
        default: 0,
        inline: 1,
    };
    CarouselMode[CarouselMode.default] = 'default';
    CarouselMode[CarouselMode.inline] = 'inline';
    var LyCarousel = /** @class */ (function () {
        function LyCarousel(_el, _sanitizer, cd, theme, renderer) {
            this._el = _el;
            this._sanitizer = _sanitizer;
            this.cd = cd;
            this.theme = theme;
            this.renderer = renderer;
            /**
             * \@docs-private
             */
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this.nullImg = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            this._intervalFn = null;
            this.mode = CarouselMode.default;
            this.interval = 7000;
            this.selectedIndex = 0;
            this.renderer.addClass(_el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyCarousel.prototype, "touch", {
            get: /**
             * @return {?}
             */ function () {
                return this._touch;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = ui.toBoolean(val);
                this._touch = newVal;
                if (newVal) {
                    this.renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
                }
                else {
                    this.renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCarousel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.touch) {
                    this.touch = false;
                }
                if (ui.Platform.isBrowser) {
                    this._resetInterval();
                }
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
        /** @docs-private */
        /**
         * \@docs-private
         * @return {?}
         */
        LyCarousel.prototype._onDragStart = /**
         * \@docs-private
         * @return {?}
         */
            function () {
                var _this = this;
                this.stop();
                this.renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this.selectedElement = this.lyItems.find(function (item, index) { return index === _this.selectedIndex; })._nativeElement;
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype._onDrag = /**
         * \@docs-private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var rect = this.selectedElement.getBoundingClientRect();
                if (Math.abs(e.deltaX) < rect.width) {
                    this._onPan(e.deltaX);
                }
                else {
                    this._onPan(rect.width * Math.sign(e.deltaX));
                }
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype._onDragEnd = /**
         * \@docs-private
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
                this._resetInterval();
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @return {?}
         */
        LyCarousel.prototype._onDragCancel = /**
         * \@docs-private
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this.select(this.selectedIndex);
                this._resetInterval();
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
                    this._positionLeft = "translate3d(" + -100 * val + "%, 0px, 0)";
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
        LyCarousel.prototype.stop = /**
         * @return {?}
         */
            function () {
                if (this._intervalFn !== null) {
                    clearInterval(this._intervalFn);
                    this._intervalFn = null;
                }
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
                    _this._markForCheck();
                }, this.interval);
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
                this._positionLeft = ( /** @type {?} */(this._sanitizerStyle("translate3d(calc(" + -100 * this.selectedIndex + "% + " + x + "px), 0px, 0)")));
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCarousel.prototype._sanitizerStyle = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                return this._sanitizer.bypassSecurityTrustStyle(val);
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @return {?}
         */
        LyCarousel.prototype._markForCheck = /**
         * \@docs-private
         * @return {?}
         */
            function () {
                this.cd.markForCheck();
            };
        LyCarousel.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-carousel',
                        template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"\n      ></span>\n      </div>\n  </div>\n  <div [className]=\"classes.actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
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
            touch: [{ type: core.Input }]
        };
        return LyCarousel;
    }());
    var LyCarouselItem = /** @class */ (function () {
        function LyCarouselItem(theme, _el) {
            this.theme = theme;
            this._nativeElement = _el.nativeElement;
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
                        selector: 'ly-carousel-item'
                    },] }
        ];
        /** @nocollapse */
        LyCarouselItem.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
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
    var LyCarouselModule = /** @class */ (function () {
        function LyCarouselModule() {
        }
        LyCarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ui.LyCommonModule],
                        exports: [LyCarouselItem, LyCarousel, ui.LyCommonModule],
                        declarations: [LyCarouselItem, LyCarousel]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIHthY3Rpb25zfS5yaWdodCc6IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG4gICAgJyYgc3ZnJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kOiBjaHJvbWEodGhlbWUudGV4dC5wcmltYXJ5KS5hbHBoYSguMjUpLmNzcygpLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3VjaEFjdGlvbjogJ3Bhbi15ICFpbXBvcnRhbnQnXG4gIH0sXG4gIHNsaWRlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgJyYgPiBseS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgfVxuICB9LFxuICBzbGlkZUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgc2xpZGVBbmltOiB7XG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKSdcbiAgfVxuICB9LFxuICBzbGlkZU5vRXZlbnQ6IHtcbiAgICAnJj5kaXYnOiB7XG4gICAgICB0b3VjaEFjdGlvbjogJ2luaXRpYWwgIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIGNhcm91c2VsSW5kaWNhdG9yczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICcmPmRpdic6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nOiAnLjVlbScsXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICB9LFxuICAgICcmPmRpdiA+IHNwYW4nOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSguNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG9wYWNpdHk6IC42NVxuICAgIH0sXG4gICAgJyY+ZGl2PnNwYW4uYWN0aXZlJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfc2VsZWN0ZWRJbmRleDogYW55O1xuICBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdG91Y2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgdG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWdDYW5jZWwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gYHRyYW5zbGF0ZTNkKCR7LTEwMCAqIHZhbH0lLCAwcHgsIDApYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG5cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gdGhpcy5fc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZTNkKGNhbGMoJHstMTAwICogdGhpcy5zZWxlY3RlZEluZGV4IH0lICsgJHt4fXB4KSwgMHB4LCAwKWApIGFzIGFueTtcbiAgfVxuICBwcml2YXRlIF9zYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0ge1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbCwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0b0Jvb2xlYW4iLCJQbGF0Zm9ybSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50UmVmIiwiRG9tU2FuaXRpemVyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIlZpZXdDaGlsZCIsIkNvbnRlbnRDaGlsZHJlbiIsImZvcndhcmRSZWYiLCJJbnB1dCIsIkRpcmVjdGl2ZSIsIk5n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