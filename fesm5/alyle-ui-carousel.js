import { __decorate, __metadata } from 'tslib';
import { ViewChild, ElementRef, ContentChildren, forwardRef, QueryList, Input, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Renderer2, Directive, NgModule } from '@angular/core';
import { DirAlias, toBoolean, Platform, LyTheme2, LyCommonModule } from '@alyle/ui';
import * as _chroma from 'chroma-js';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/** @docs-private */
var chroma = _chroma;
/** Default interval in ms */
var DEFAULT_INTERVAL = 7000;
var DEFAULT_AUTOPLAY = true;
var DEFAULT_HAS_PROGRESS_BAR = false;
var STYLE_PRIORITY = -2;
var STYLES = function (theme) {
    var dir = theme.getDirection(DirAlias.before);
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
                touchAction: 'initial !important',
                '-webkit-user-drag': 'initial !important'
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
var CarouselMode;
(function (CarouselMode) {
    /** full */
    CarouselMode[CarouselMode["default"] = 0] = "default";
    CarouselMode[CarouselMode["inline"] = 1] = "inline";
})(CarouselMode || (CarouselMode = {}));
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
        this.mode = CarouselMode.default;
        this.selectedIndex = 0;
        this._interval = DEFAULT_INTERVAL;
        /** Emits whenever the component is destroyed. */
        this._destroy = new Subject();
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
            var newVal = toBoolean(val);
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
            var newVal = toBoolean(val);
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
            var newVal = toBoolean(val);
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
        if (Platform.isBrowser) {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
        this.lyItems.changes.pipe(takeUntil(this._destroy)).subscribe(function () { return _this._markForCheck(); });
    };
    LyCarousel.prototype.ngOnDestroy = function () {
        this._destroy.next();
        this._destroy.complete();
        if (Platform.isBrowser) {
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
        var dir = this._theme.variables.getDirection(DirAlias.before);
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
        if (this.mode === CarouselMode.default) {
            this._slideClass = this._theme.addStyle("lyCarousel.select:" + val.toString(32), function (theme) {
                var sign = theme.getDirection(DirAlias.before) === 'left' ? -1 : 1;
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
        if (Platform.isBrowser) {
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
        var sign = this._theme.variables.getDirection(DirAlias.before) === 'left' ? -1 : 1;
        this._renderer.setStyle(this._slide.nativeElement, 'transform', "translateX(calc(" + sign * 100 * this.selectedIndex + "% + " + x + "px))");
    };
    LyCarousel.prototype._markForCheck = function () {
        this._cd.markForCheck();
    };
    __decorate([
        ViewChild('slideContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyCarousel.prototype, "slideContainer", void 0);
    __decorate([
        ViewChild('_slide', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyCarousel.prototype, "_slide", void 0);
    __decorate([
        ViewChild('_progressBar', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyCarousel.prototype, "_progressBar", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return LyCarouselItem; })),
        __metadata("design:type", QueryList)
    ], LyCarousel.prototype, "lyItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], LyCarousel.prototype, "mode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LyCarousel.prototype, "selectedIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyCarousel.prototype, "touch", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyCarousel.prototype, "autoplay", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyCarousel.prototype, "hasProgressBar", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], LyCarousel.prototype, "interval", null);
    LyCarousel = __decorate([
        Component({
            selector: 'ly-carousel',
            template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n    <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; index as i\"\n    >\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"></span>\n    </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div\n    [className]=\"classes.barContainer\"\n    *ngIf=\"hasProgressBar && _isIntervalFn && interval && autoplay\"\n  >\n    <div\n      [className]=\"classes.bar\"\n      #_progressBar\n      [style.animation-duration]=\"interval + 'ms'\"\n    ></div>\n  </div>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef,
            LyTheme2,
            Renderer2])
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
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyCarouselItem.prototype, "srcImg", null);
    LyCarouselItem = __decorate([
        Directive({
            selector: 'ly-carousel-item'
        }),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef])
    ], LyCarouselItem);
    return LyCarouselItem;
}());

var LyCarouselModule = /** @class */ (function () {
    function LyCarouselModule() {
    }
    LyCarouselModule = __decorate([
        NgModule({
            imports: [CommonModule, LyCommonModule],
            exports: [LyCarouselItem, LyCarousel, LyCommonModule],
            declarations: [LyCarouselItem, LyCarousel]
        })
    ], LyCarouselModule);
    return LyCarouselModule;
}());

export { CarouselMode, LyCarousel, LyCarouselItem, LyCarouselModule, STYLES };
//# sourceMappingURL=alyle-ui-carousel.js.map
