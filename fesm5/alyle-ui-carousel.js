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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIm5nOi8vQGFseWxlL3VpL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4sIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyYge2FjdGlvbnN9LnJpZ2h0Jzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIG1hcmdpbjogJ2F1dG8gLjI1ZW0nLFxuICAgIGhlaWdodDogJzFlbScsXG4gICAgd2lkdGg6ICcxZW0nLFxuICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgIGJhY2tncm91bmQ6IGNocm9tYSh0aGVtZS50ZXh0LnByaW1hcnkpLmFscGhhKC4yNSkuY3NzKCksXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgc2xpZGVDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvdWNoQWN0aW9uOiAncGFuLXkgIWltcG9ydGFudCdcbiAgfSxcbiAgc2xpZGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAnJiA+IGx5LWNhcm91c2VsLWl0ZW0nOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBzbGlkZUFuaW06IHtcbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICB9XG4gIH0sXG4gIHNsaWRlTm9FdmVudDoge1xuICAgICcmPmRpdic6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnaW5pdGlhbCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgJyY+ZGl2Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgIH0sXG4gICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICczMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSknLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3BhY2l0eTogLjY1XG4gICAgfSxcbiAgICAnJj5kaXY+c3Bhbi5hY3RpdmUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfVxuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlQ29udGFpbmVyJykgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUNhcm91c2VsSXRlbSkpIGx5SXRlbXM6IFF1ZXJ5TGlzdDxMeUNhcm91c2VsSXRlbT47XG4gIEBJbnB1dCgpIG1vZGU6IENhcm91c2VsTW9kZSA9IENhcm91c2VsTW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDcwMDA7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90b3VjaDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHRvdWNoKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3RvdWNoID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCB0b3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2g7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICB0aGlzLnRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIF9vbkRyYWdTdGFydCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUGFuKHJlY3Qud2lkdGggKiBNYXRoLnNpZ24oZS5kZWx0YVgpKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgX29uRHJhZ0NhbmNlbCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cblxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlM2QoJHstMTAwICogdmFsfSUsIDBweCwgMClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsRm4gIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxGbik7XG4gICAgICB0aGlzLl9pbnRlcnZhbEZuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLl9zYW5pdGl6ZXJTdHlsZShgdHJhbnNsYXRlM2QoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgsIDApYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgX3Nhbml0aXplclN0eWxlKHZhbDogYW55KTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWNhcm91c2VsLWltZzoke3ZhbHVlfWAsIChcbiAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKWBcbiAgICAgICksXG4gICAgICB0aGlzLl9uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fY2xhc3NOYW1lLCBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztJQXNCTSxNQUFNLEdBQUcsT0FBTzs7SUFFaEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFFbkIsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxRQUFDO0lBQ3pDLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFN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