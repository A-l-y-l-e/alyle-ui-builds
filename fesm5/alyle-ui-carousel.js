import { Component, Directive, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { Platform, LyTheme2, toBoolean, DirAlias, LyCommonModule } from '@alyle/ui';
import * as _chroma from 'chroma-js';
import { CommonModule } from '@angular/common';

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
    var dir = theme.getDirection(DirAlias.before);
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
         */
        function () {
            return this._touch;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
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
        if (Platform.isBrowser) {
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
        if (Platform.isBrowser) {
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
        if (Platform.isBrowser) {
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
        var dir = this._theme.config.getDirection(DirAlias.before);
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
                var sign = theme.getDirection(DirAlias.before) === 'left' ? -1 : 1;
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
        var sign = this._theme.config.getDirection(DirAlias.before) === 'left' ? -1 : 1;
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
        { type: Component, args: [{
                    selector: 'ly-carousel',
                    template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"\n      ></span>\n      </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyCarousel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    LyCarousel.propDecorators = {
        slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
        _slide: [{ type: ViewChild, args: ['_slide',] }],
        lyItems: [{ type: ContentChildren, args: [forwardRef(function () { return LyCarouselItem; }),] }],
        mode: [{ type: Input }],
        interval: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        touch: [{ type: Input }]
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
         */
        function (value) {
            this._className = this._theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    LyCarouselItem.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-carousel-item'
                },] }
    ];
    /** @nocollapse */
    LyCarouselItem.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyCarouselItem.propDecorators = {
        srcImg: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [CommonModule, LyCommonModule],
                    exports: [LyCarouselItem, LyCarousel, LyCommonModule],
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

export { STYLES, CarouselMode, LyCarousel, LyCarouselItem, LyCarouselModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIm5nOi8vQGFseWxlL3VpL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMsIERpckFsaWFzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IGRpciA9IHRoZW1lLmdldERpcmVjdGlvbihEaXJBbGlhcy5iZWZvcmUpO1xuICBjb25zdCByaWdodCA9IGRpciA9PT0gJ3JpZ2h0JyA/IDAgOiAxODA7XG4gIGNvbnN0IGxlZnQgPSBkaXIgPT09ICdsZWZ0JyA/IDAgOiAxODA7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnJiB7YWN0aW9uc30ucmlnaHQnOiB7XG4gICAgICAgIGFmdGVyOiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyaWdodH1kZWcpYFxuICAgICAgfSxcbiAgICAgICcmIHthY3Rpb25zfS5sZWZ0Jzoge1xuICAgICAgICBiZWZvcmU6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2xlZnR9ZGVnKWBcbiAgICAgIH0sXG4gICAgICAnJiBzdmcnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8gLjI1ZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IGNocm9tYSh0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCkuYWxwaGEoLjI1KS5jc3MoKSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnByaW1hcnksXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ1xuICAgIH0sXG4gICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRvdWNoQWN0aW9uOiAncGFuLXkgIWltcG9ydGFudCdcbiAgICB9LFxuICAgIHNsaWRlOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVDb250ZW50OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuICAgIHNsaWRlQW5pbToge1xuICAgICAgJyYgPiBkaXYnOiB7XG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICAgIH1cbiAgICB9LFxuICAgIHNsaWRlTm9FdmVudDoge1xuICAgICAgJyY+ZGl2Jzoge1xuICAgICAgICB0b3VjaEFjdGlvbjogJ2luaXRpYWwgIWltcG9ydGFudCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhcm91c2VsSW5kaWNhdG9yczoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAnJj5kaXYnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJzMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKScsXG4gICAgICAgIHdpZHRoOiAnMWVtJyxcbiAgICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG9wYWNpdHk6IC42NVxuICAgICAgfSxcbiAgICAgICcmPmRpdj5zcGFuLmFjdGl2ZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInKSBzbGlkZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX3NsaWRlJykgX3NsaWRlOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3RvdWNoOiBib29sZWFuO1xuICBwcml2YXRlIF9zbGlkZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB0b3VjaCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl90b3VjaCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCB0b3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2g7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQ29udGFpbmVyKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWdTdGFydCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUGFuKHJlY3Qud2lkdGggKiBNYXRoLnNpZ24oZS5kZWx0YVgpKTtcbiAgICB9XG4gIH1cblxuICBfb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLmNvbmZpZy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoTWF0aC5hYnMoZS52ZWxvY2l0eSkgPj0gMC4yNSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fc2xpZGUubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIF9vbkRyYWdDYW5jZWwoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBfc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fc2xpZGVDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlDYXJvdXNlbC5zZWxlY3Q6JHt2YWwudG9TdHJpbmcoMzIpfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzaWduID0gdGhlbWUuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSkgPT09ICdsZWZ0JyA/IC0xIDogMTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkezEwMCAqIHZhbCAqIHNpZ259JSlgXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fc2xpZGUubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2xpZGVDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghbm90UmVzZXRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5fc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5fc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMuX3RoZW1lLmNvbmZpZy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWChjYWxjKCR7c2lnbiAqIDEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCkpYCk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWwsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWxdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUFxQk0sTUFBTSxHQUFHLE9BQU87O0lBRWhCLGNBQWMsR0FBRyxDQUFDLENBQUM7O0FBRXpCLElBQWEsTUFBTSxHQUFHLFVBQUMsS0FBcUI7O1FBQ3BDLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O1FBQ3pDLEtBQUssR0FBRyxHQUFHLEtBQUssT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHOztRQUNqQyxJQUFJLEdBQUcsR0FBRyxLQUFLLE1BQU0sR0FB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