(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('chroma-js'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/carousel', ['exports', '@angular/core', '@alyle/ui', 'chroma-js', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.carousel = {}),global.ng.core,global.ly.core,global.chroma,global.ng.common));
}(this, (function (exports,core,ui,_chroma,common) { 'use strict';

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
    var STYLES = function (theme) {
        /** @type {?} */
        var dir = theme.getDirection(ui.DirAlias.before);
        /** @type {?} */
        var right = dir === 'right' ? 0 : 180;
        /** @type {?} */
        var left = dir === 'left' ? 0 : 180;
        return {
            root: {
                display: 'block',
                '-webkit-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                position: 'relative',
                '& {actions}.right': {
                    after: 0,
                    transform: "rotate(" + right + "deg)"
                },
                '& {actions}.left': {
                    before: 0,
                    transform: "rotate(" + left + "deg)"
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
                background: chroma(theme.background.primary.default).alpha(.25).css(),
                color: theme.text.primary,
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
        };
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
        function LyCarousel(_el, _cd, _theme, _renderer) {
            this._el = _el;
            this._cd = _cd;
            this._theme = _theme;
            this._renderer = _renderer;
            /**
             * \@docs-private
             */
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            this._intervalFn = null;
            /**
             * \@docs-private
             */
            this.mode = CarouselMode.default;
            this.interval = 7000;
            this.selectedIndex = 0;
            this._renderer.addClass(_el.nativeElement, this.classes.root);
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
                    this._renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
                }
                else {
                    this._renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
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
                this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
                if (ui.Platform.isBrowser) {
                    this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
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
                this._renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this._selectedElement = this.lyItems.find(function (item, index) { return index === _this.selectedIndex; })._nativeElement;
            };
        /**
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype._onDrag = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var rect = this._selectedElement.getBoundingClientRect();
                if (Math.abs(e.deltaX) < rect.width) {
                    this._onPan(e.deltaX);
                }
                else {
                    this._onPan(rect.width * Math.sign(e.deltaX));
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        LyCarousel.prototype._onDragEnd = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var rect = this._selectedElement.getBoundingClientRect();
                /** @type {?} */
                var dir = this._theme.config.getDirection(ui.DirAlias.before);
                this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this._select(this.selectedIndex);
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
                            if (dir === 'left') {
                                this.next();
                            }
                            else {
                                this.prev();
                            }
                        }
                        else if (eventName === 'slideright') {
                            if (dir === 'right') {
                                this.next();
                            }
                            else {
                                this.prev();
                            }
                        }
                    }
                }
                this._renderer.removeStyle(this._slide.nativeElement, 'transform');
                this._resetInterval();
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype._onDragCancel = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
                this._select(this.selectedIndex);
                this._resetInterval();
            };
        /**
         * @param {?} val
         * @param {?=} notResetInterval
         * @return {?}
         */
        LyCarousel.prototype._select = /**
         * @param {?} val
         * @param {?=} notResetInterval
         * @return {?}
         */
            function (val, notResetInterval) {
                this.selectedIndex = val;
                if (this.mode === CarouselMode.default) {
                    this._slideClass = this._theme.addStyle("lyCarousel.select:" + val.toString(32), function (theme) {
                        /** @type {?} */
                        var sign = theme.getDirection(ui.DirAlias.before) === 'left' ? -1 : 1;
                        return {
                            transform: "translateX(" + 100 * val * sign + "%)"
                        };
                    }, this._slide.nativeElement, this._slideClass, STYLE_PRIORITY);
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
                this._select(prev < 0 ? len : prev);
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
                this._select(next > len ? 0 : next, notResetInterval);
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
                /** @type {?} */
                var sign = this._theme.config.getDirection(ui.DirAlias.before) === 'left' ? -1 : 1;
                this._renderer.setStyle(this._slide.nativeElement, 'transform', "translateX(calc(" + sign * 100 * this.selectedIndex + "% + " + x + "px))");
            };
        /**
         * @return {?}
         */
        LyCarousel.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this._cd.markForCheck();
            };
        LyCarousel.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-carousel',
                        template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"\n      ></span>\n      </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        LyCarousel.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: ui.LyTheme2 },
                { type: core.Renderer2 }
            ];
        };
        LyCarousel.propDecorators = {
            slideContainer: [{ type: core.ViewChild, args: ['slideContainer',] }],
            _slide: [{ type: core.ViewChild, args: ['_slide',] }],
            lyItems: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyCarouselItem; }),] }],
            mode: [{ type: core.Input }],
            interval: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            touch: [{ type: core.Input }]
        };
        return LyCarousel;
    }());
    var LyCarouselItem = /** @class */ (function () {
        function LyCarouselItem(_theme, _el) {
            this._theme = _theme;
            this._nativeElement = _el.nativeElement;
        }
        Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._className = this._theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
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

    exports.STYLES = STYLES;
    exports.CarouselMode = CarouselMode;
    exports.LyCarousel = LyCarousel;
    exports.LyCarouselItem = LyCarouselItem;
    exports.LyCarouselModule = LyCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4sIFRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCBkaXIgPSB0aGVtZS5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgY29uc3QgcmlnaHQgPSBkaXIgPT09ICdyaWdodCcgPyAwIDogMTgwO1xuICBjb25zdCBsZWZ0ID0gZGlyID09PSAnbGVmdCcgPyAwIDogMTgwO1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyYge2FjdGlvbnN9LnJpZ2h0Jzoge1xuICAgICAgICBhZnRlcjogMCxcbiAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cmlnaHR9ZGVnKWBcbiAgICAgIH0sXG4gICAgICAnJiB7YWN0aW9uc30ubGVmdCc6IHtcbiAgICAgICAgYmVmb3JlOiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtsZWZ0fWRlZylgXG4gICAgICB9LFxuICAgICAgJyYgc3ZnJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJ1xuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kOiBjaHJvbWEodGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQpLmFscGhhKC4yNSkuY3NzKCksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5wcmltYXJ5LFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICB9LFxuICAgIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0b3VjaEFjdGlvbjogJ3Bhbi15ICFpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBzbGlkZToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAnJiA+IGx5LWNhcm91c2VsLWl0ZW0nOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsaWRlQ29udGVudDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcbiAgICBzbGlkZUFuaW06IHtcbiAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKSdcbiAgICB9XG4gICAgfSxcbiAgICBzbGlkZU5vRXZlbnQ6IHtcbiAgICAgICcmPmRpdic6IHtcbiAgICAgICAgdG91Y2hBY3Rpb246ICdpbml0aWFsICFpbXBvcnRhbnQnXG4gICAgICB9XG4gICAgfSxcbiAgICBjYXJvdXNlbEluZGljYXRvcnM6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogJzQ4cHgnLFxuICAgICAgJyY+ZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBwYWRkaW5nOiAnLjVlbScsXG4gICAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmPmRpdiA+IHNwYW4nOiB7XG4gICAgICAgIHRyYW5zaXRpb246ICczMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSknLFxuICAgICAgICB3aWR0aDogJzFlbScsXG4gICAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC41KScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvcGFjaXR5OiAuNjVcbiAgICAgIH0sXG4gICAgICAnJj5kaXY+c3Bhbi5hY3RpdmUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxGbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlQ29udGFpbmVyJykgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19zbGlkZScpIF9zbGlkZTogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5Q2Fyb3VzZWxJdGVtKSkgbHlJdGVtczogUXVlcnlMaXN0PEx5Q2Fyb3VzZWxJdGVtPjtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCkgbW9kZTogQ2Fyb3VzZWxNb2RlID0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIGludGVydmFsID0gNzAwMDtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90b3VjaDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc2xpZGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgdG91Y2godmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fdG91Y2ggPSBuZXdWYWw7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgdG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMudG91Y2gpIHtcbiAgICAgIHRoaXMudG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgX29uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuX3NlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vblBhbihyZWN0LndpZHRoICogTWF0aC5zaWduKGUuZGVsdGFYKSk7XG4gICAgfVxuICB9XG5cbiAgX29uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuX3NlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZS5jb25maWcuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcblxuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPiByZWN0LndpZHRoIC8gMikge1xuICAgICAgaWYgKDAgPiBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoMCA8IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5hZGRpdGlvbmFsRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGUuYWRkaXRpb25hbEV2ZW50O1xuICAgICAgaWYgKE1hdGguYWJzKGUudmVsb2NpdHkpID49IDAuMjUpIHtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlbGVmdCcpIHtcbiAgICAgICAgICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgICBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nKTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBfb25EcmFnQ2FuY2VsKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5fc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgX3NlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3NsaWRlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5Q2Fyb3VzZWwuc2VsZWN0OiR7dmFsLnRvU3RyaW5nKDMyKX1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2lnbiA9IHRoZW1lLmdldERpcmVjdGlvbihEaXJBbGlhcy5iZWZvcmUpID09PSAnbGVmdCcgPyAtMSA6IDE7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsxMDAgKiB2YWwgKiBzaWdufSUpYFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NsaWRlQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuX3NlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG5cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuX3NlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICAgIHRoaXMuX2ludGVydmFsRm4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIGNvbnN0IHNpZ24gPSB0aGlzLl90aGVtZS5jb25maWcuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSkgPT09ICdsZWZ0JyA/IC0xIDogMTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9zbGlkZS5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoY2FsYygke3NpZ24gKiAxMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpKWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0ge1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nOiR7dmFsdWV9YCwgKFxuICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpYFxuICAgICAgKSxcbiAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkRpckFsaWFzIiwidG9Cb29sZWFuIiwiUGxhdGZvcm0iLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiTHlUaGVtZTIiLCJSZW5kZXJlcjIiLCJWaWV3Q2hpbGQiLCJDb250ZW50Q2hpbGRyZW4iLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJEaXJlY3RpdmUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxl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