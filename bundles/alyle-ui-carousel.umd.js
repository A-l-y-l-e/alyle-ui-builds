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
                    if (Math.abs(e.velocity) >= 0.25) {
                        if (eventName === 'slideleft') {
                            this.next();
                        }
                        else if (eventName === 'slideright') {
                            this.prev();
                        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIHthY3Rpb25zfS5yaWdodCc6IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG4gICAgJyYgc3ZnJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kOiBjaHJvbWEodGhlbWUudGV4dC5wcmltYXJ5KS5hbHBoYSguMjUpLmNzcygpLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3VjaEFjdGlvbjogJ3Bhbi15ICFpbXBvcnRhbnQnXG4gIH0sXG4gIHNsaWRlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgJyYgPiBseS1jYXJvdXNlbC1pdGVtJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgfVxuICB9LFxuICBzbGlkZUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgc2xpZGVBbmltOiB7XG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKSdcbiAgfVxuICB9LFxuICBzbGlkZU5vRXZlbnQ6IHtcbiAgICAnJj5kaXYnOiB7XG4gICAgICB0b3VjaEFjdGlvbjogJ2luaXRpYWwgIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIGNhcm91c2VsSW5kaWNhdG9yczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICcmPmRpdic6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nOiAnLjVlbScsXG4gICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICB9LFxuICAgICcmPmRpdiA+IHNwYW4nOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSguNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG9wYWNpdHk6IC42NVxuICAgIH0sXG4gICAgJyY+ZGl2PnNwYW4uYWN0aXZlJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfc2VsZWN0ZWRJbmRleDogYW55O1xuICBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdG91Y2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgdG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoTWF0aC5hYnMoZS52ZWxvY2l0eSkgPj0gMC4yNSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlcmlnaHQnKSB7XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0NhbmNlbCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlM2QoJHstMTAwICogdmFsfSUsIDBweCwgMClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsRm4gIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxGbik7XG4gICAgICB0aGlzLl9pbnRlcnZhbEZuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLl9zYW5pdGl6ZXJTdHlsZShgdHJhbnNsYXRlM2QoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgsIDApYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgX3Nhbml0aXplclN0eWxlKHZhbDogYW55KTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWNhcm91c2VsLWltZzoke3ZhbHVlfWAsIChcbiAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKWBcbiAgICAgICksXG4gICAgICB0aGlzLl9uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fY2xhc3NOYW1lLCBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRvQm9vbGVhbiIsIlBsYXRmb3JtIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRSZWYiLCJEb21TYW5pdGl6ZXIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkx5VGhlbWUyIiwiUmVuZGVyZXIyIiwiVmlld0NoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIklucHV0IiwiRGlyZWN0aXZlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O1FBc0JNLE1BQU0sR0FBRyxPQUFPOztRQUVoQixjQUFjLEdBQUcsQ0FBQyxDQUFDOztRQUVuQixNQUFNLEdBQUcsVUFBQyxLQUFxQjtRQUFLLFFBQUM7WUFDekMsSUFBSSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixxQkFBcUIsRUFBRSxNQUFNO2dCQUM3QixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixpQkFBaUIsRUFBRSxNQUFNO2dCQUN6QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsbUJBQW1CLEVBQUU7b0JBQ25CLEtBQUssRUFBRSxDQUFDO29CQUNSLG1CQUFtQixFQUFFLGdCQUFnQjtvQkFDckMsU0FBUyxFQUFFLGdCQUFnQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxPQUFPO29CQUNoQixJQUFJLEVBQUUsY0FBYztpQkFDckI7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRSxLQUFLO2dCQUNaLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixNQUFNLEVBQUUsU0FBUztnQkFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3ZDLFVBQVUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUN2RCxVQUFVLEVBQUUsV0FBVzthQUN4QjtZQUNELGNBQWMsRUFBRTtnQkFD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