(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('chroma-js'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/carousel', ['exports', '@angular/core', '@alyle/ui', 'chroma-js', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.carousel = {}), global.ng.core, global.ly.core, global.chroma, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, ui, _chroma, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /** @docs-private */
    var chroma = _chroma;
    /** Default interval in ms */
    var DEFAULT_INTERVAL = 7000;
    var DEFAULT_AUTOPLAY = true;
    var DEFAULT_HAS_PROGRESS_BAR = false;
    var STYLE_PRIORITY = -2;
    var STYLES = function (theme) {
        var dir = theme.getDirection(ui.DirAlias.before);
        var right = dir === 'right' ? 0 : 180;
        var left = dir === 'left' ? 0 : 180;
        return {
            $priority: STYLE_PRIORITY,
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
                },
                '&': theme.carousel ? theme.carousel.root : null
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
            },
            barContainer: {
                background: chroma(theme.background.primary.default).alpha(.25).css(),
                height: '4px',
                position: 'absolute',
                bottom: 0,
                width: '100%',
            },
            bar: {
                height: '4px',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                animationName: '{interval}',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                background: theme.text.primary
            },
            $keyframes: {
                interval: {
                    0: {
                        transform: 'translateX(0%)'
                    },
                    100: {
                        transform: "translateX(" + (dir === 'left' ? '-' : '') + "100%)"
                    }
                }
            }
        };
    };
    /** @docs-private */

    (function (CarouselMode) {
        /** full */
        CarouselMode[CarouselMode["default"] = 0] = "default";
        CarouselMode[CarouselMode["inline"] = 1] = "inline";
    })(exports.CarouselMode || (exports.CarouselMode = {}));
    var LyCarousel = /** @class */ (function () {
        function LyCarousel(_el, _cd, _theme, _renderer) {
            this._el = _el;
            this._cd = _cd;
            this._theme = _theme;
            this._renderer = _renderer;
            /** @docs-private */
            this.classes = this._theme.addStyleSheet(STYLES);
            this._intervalFn = null;
            /** @docs-private */
            this.mode = exports.CarouselMode.default;
            this.selectedIndex = 0;
            this._interval = DEFAULT_INTERVAL;
            /** Emits whenever the component is destroyed. */
            this._destroy = new rxjs.Subject();
            this._renderer.addClass(_el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyCarousel.prototype, "_isIntervalFn", {
            /** @internal */
            get: function () {
                return !!this._intervalFn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "touch", {
            get: function () {
                return this._touch;
            },
            set: function (val) {
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
        Object.defineProperty(LyCarousel.prototype, "autoplay", {
            get: function () {
                return this._autoplay;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._autoplay = newVal;
                if (newVal) {
                    this._resetInterval();
                }
                else {
                    this.stop();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "hasProgressBar", {
            get: function () {
                return this._hasProgressBar;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._hasProgressBar = newVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "interval", {
            get: function () {
                return this._interval;
            },
            set: function (val) {
                this._interval = val;
                this._resetInterval();
            },
            enumerable: true,
            configurable: true
        });
        LyCarousel.prototype.ngOnInit = function () {
            if (!this.touch) {
                this.touch = false;
            }
            if (this.autoplay == null) {
                this.autoplay = DEFAULT_AUTOPLAY;
            }
            if (this.hasProgressBar == null) {
                this.hasProgressBar = DEFAULT_HAS_PROGRESS_BAR;
            }
        };
        LyCarousel.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
            if (ui.Platform.isBrowser) {
                this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            }
            this.lyItems.changes.pipe(operators.takeUntil(this._destroy)).subscribe(function () { return _this._markForCheck(); });
        };
        LyCarousel.prototype.ngOnDestroy = function () {
            this._destroy.next();
            this._destroy.complete();
            if (ui.Platform.isBrowser) {
                this.stop();
            }
        };
        /** @docs-private */
        LyCarousel.prototype._onDragStart = function () {
            var _this = this;
            this.stop();
            this._renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            this._selectedElement = this.lyItems.find(function (_item, index) { return index === _this.selectedIndex; })._nativeElement;
        };
        LyCarousel.prototype._onDrag = function (e) {
            var rect = this._selectedElement.getBoundingClientRect();
            if (Math.abs(e.deltaX) < rect.width) {
                this._onPan(e.deltaX);
            }
            else {
                this._onPan(rect.width * Math.sign(e.deltaX));
            }
        };
        LyCarousel.prototype._onDragEnd = function (e) {
            var rect = this._selectedElement.getBoundingClientRect();
            var dir = this._theme.variables.getDirection(ui.DirAlias.before);
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
        LyCarousel.prototype._onDragCancel = function () {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            this._select(this.selectedIndex);
            this._resetInterval();
        };
        LyCarousel.prototype._select = function (val, notResetInterval) {
            this.selectedIndex = val;
            if (this.mode === exports.CarouselMode.default) {
                this._slideClass = this._theme.addStyle("lyCarousel.select:" + val.toString(32), function (theme) {
                    var sign = theme.getDirection(ui.DirAlias.before) === 'left' ? -1 : 1;
                    return {
                        transform: "translateX(" + 100 * val * sign + "%)"
                    };
                }, this._slide.nativeElement, this._slideClass, STYLE_PRIORITY);
            }
            if (!notResetInterval) {
                if (this.autoplay) {
                    this._resetInterval();
                }
            }
        };
        LyCarousel.prototype.prev = function () {
            var len = this.lyItems.length - 1;
            var prev = this.selectedIndex - 1;
            this._select(prev < 0 ? len : prev);
        };
        LyCarousel.prototype.next = function (notResetInterval) {
            var len = this.lyItems.length - 1;
            var next = this.selectedIndex + 1;
            this._select(next > len ? 0 : next, notResetInterval);
        };
        LyCarousel.prototype.stop = function () {
            if (this._intervalFn !== null) {
                clearInterval(this._intervalFn);
                this._intervalFn = null;
            }
        };
        LyCarousel.prototype._resetInterval = function () {
            var _this = this;
            if (ui.Platform.isBrowser) {
                this.stop();
                this._restartProgressBarAnimation();
                this._markForCheck();
                this._intervalFn = setInterval(function () {
                    _this.next(true);
                    _this._restartProgressBarAnimation();
                    _this._markForCheck();
                }, this.interval);
            }
        };
        LyCarousel.prototype._restartProgressBarAnimation = function () {
            if (this.hasProgressBar && this._progressBar) {
                var el = this._progressBar.nativeElement;
                // Hack for restart animation
                el.style.animationName = 'øfakeName';
                window.getComputedStyle(el).getPropertyValue('opacity');
                el.style.animationName = '';
            }
        };
        LyCarousel.prototype._onPan = function (x) {
            var sign = this._theme.variables.getDirection(ui.DirAlias.before) === 'left' ? -1 : 1;
            this._renderer.setStyle(this._slide.nativeElement, 'transform', "translateX(calc(" + sign * 100 * this.selectedIndex + "% + " + x + "px))");
        };
        LyCarousel.prototype._markForCheck = function () {
            this._cd.markForCheck();
        };
        __decorate([
            core.ViewChild('slideContainer', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyCarousel.prototype, "slideContainer", void 0);
        __decorate([
            core.ViewChild('_slide', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyCarousel.prototype, "_slide", void 0);
        __decorate([
            core.ViewChild('_progressBar', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyCarousel.prototype, "_progressBar", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyCarouselItem; })),
            __metadata("design:type", core.QueryList)
        ], LyCarousel.prototype, "lyItems", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], LyCarousel.prototype, "mode", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyCarousel.prototype, "selectedIndex", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyCarousel.prototype, "touch", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyCarousel.prototype, "autoplay", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyCarousel.prototype, "hasProgressBar", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], LyCarousel.prototype, "interval", null);
        LyCarousel = __decorate([
            core.Component({
                selector: 'ly-carousel',
                template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n    <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; index as i\"\n    >\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"></span>\n    </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div\n    [className]=\"classes.barContainer\"\n    *ngIf=\"hasProgressBar && _isIntervalFn && interval && autoplay\"\n  >\n    <div\n      [className]=\"classes.bar\"\n      #_progressBar\n      [style.animation-duration]=\"interval + 'ms'\"\n    ></div>\n  </div>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.ChangeDetectorRef,
                ui.LyTheme2,
                core.Renderer2])
        ], LyCarousel);
        return LyCarousel;
    }());
    var LyCarouselItem = /** @class */ (function () {
        function LyCarouselItem(_theme, _el) {
            this._theme = _theme;
            this._nativeElement = _el.nativeElement;
        }
        Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
            set: function (value) {
                this._className = this._theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyCarouselItem.prototype, "srcImg", null);
        LyCarouselItem = __decorate([
            core.Directive({
                selector: 'ly-carousel-item'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef])
        ], LyCarouselItem);
        return LyCarouselItem;
    }());

    var LyCarouselModule = /** @class */ (function () {
        function LyCarouselModule() {
        }
        LyCarouselModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, ui.LyCommonModule],
                exports: [LyCarouselItem, LyCarousel, ui.LyCommonModule],
                declarations: [LyCarouselItem, LyCarousel]
            })
        ], LyCarouselModule);
        return LyCarouselModule;
    }());

    exports.LyCarousel = LyCarousel;
    exports.LyCarouselItem = LyCarouselItem;
    exports.LyCarouselModule = LyCarouselModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-carousel.umd.js.map
