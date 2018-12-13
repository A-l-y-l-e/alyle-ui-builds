import { Component, Directive, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, LyTheme2, toBoolean, LyCommonModule } from '@alyle/ui';
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
var styles = function (theme) { return ({
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
}); };
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
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
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
        this._positionLeft = (/** @type {?} */ (this._sanitizerStyle("translate3d(calc(" + -100 * this.selectedIndex + "% + " + x + "px), 0px, 0)")));
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
        { type: Component, args: [{
                    selector: 'ly-carousel',
                    template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"\n      ></span>\n      </div>\n  </div>\n  <div [className]=\"classes.actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyCarousel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    LyCarousel.propDecorators = {
        slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
        lyItems: [{ type: ContentChildren, args: [forwardRef(function () { return LyCarouselItem; }),] }],
        mode: [{ type: Input }],
        interval: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        touch: [{ type: Input }]
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
         */
        function (value) {
            this._className = this.theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
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

export { CarouselMode, LyCarousel, LyCarouselItem, LyCarouselModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIm5nOi8vQGFseWxlL3VpL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4sIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyYge2FjdGlvbnN9LnJpZ2h0Jzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIG1hcmdpbjogJ2F1dG8gLjI1ZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJhY2tncm91bmQ6IGNocm9tYSh0aGVtZS50ZXh0LnByaW1hcnkpLmFscGhhKC4yNSkuY3NzKCksXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgc2xpZGVDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvdWNoQWN0aW9uOiAncGFuLXkgIWltcG9ydGFudCdcbiAgfSxcbiAgc2xpZGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAnJiA+IGx5LWNhcm91c2VsLWl0ZW0nOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBzbGlkZUFuaW06IHtcbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICB9XG4gIH0sXG4gIHNsaWRlTm9FdmVudDoge1xuICAgICcmPmRpdic6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnaW5pdGlhbCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgJyY+ZGl2Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgIH0sXG4gICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICczMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSknLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3BhY2l0eTogLjY1XG4gICAgfSxcbiAgICAnJj5kaXY+c3Bhbi5hY3RpdmUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfVxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlQ29udGFpbmVyJykgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUNhcm91c2VsSXRlbSkpIGx5SXRlbXM6IFF1ZXJ5TGlzdDxMeUNhcm91c2VsSXRlbT47XG4gIEBJbnB1dCgpIG1vZGU6IENhcm91c2VsTW9kZSA9IENhcm91c2VsTW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDcwMDA7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90b3VjaDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHRvdWNoKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3RvdWNoID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCB0b3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2g7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICB0aGlzLnRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWdTdGFydCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUGFuKHJlY3Qud2lkdGggKiBNYXRoLnNpZ24oZS5kZWx0YVgpKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChNYXRoLmFicyhlLnZlbG9jaXR5KSA+PSAwLjI1KSB7XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnQ2FuY2VsKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIHNlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IGB0cmFuc2xhdGUzZCgkey0xMDAgKiB2YWx9JSwgMHB4LCAwKWA7XG4gICAgfVxuICAgIGlmICghbm90UmVzZXRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5zZWxlY3QocHJldiA8IDAgPyBsZW4gOiBwcmV2KTtcbiAgfVxuXG4gIG5leHQobm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICB0aGlzLnNlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICAgIHRoaXMuX2ludGVydmFsRm4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IHRoaXMuX3Nhbml0aXplclN0eWxlKGB0cmFuc2xhdGUzZChjYWxjKCR7LTEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCksIDBweCwgMClgKSBhcyBhbnk7XG4gIH1cbiAgcHJpdmF0ZSBfc2FuaXRpemVyU3R5bGUodmFsOiBhbnkpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxJdGVtIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmNJbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nOiR7dmFsdWV9YCwgKFxuICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpYFxuICAgICAgKSxcbiAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWwsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWxdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBc0JNLE1BQU0sR0FBRyxPQUFPOztJQUVoQixjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUVuQixNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIs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