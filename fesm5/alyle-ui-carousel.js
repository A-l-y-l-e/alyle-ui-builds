import { Component, Directive, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, LyTheme2, toBoolean, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { LyRippleModule } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.classes = this.theme.addStyleSheet(styles, 'lyCarousel');
        this.renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyCarousel.prototype, "slideEvent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slideEvent;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
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
        if (Platform.isBrowser) {
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
        if (Platform.isBrowser) {
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
        if (Platform.isBrowser) {
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
        { type: Component, args: [{
                    selector: 'ly-carousel',
                    template: "<div\n(slidestart)=\"slideEvent && onDragStart($event)\"\n(slide)=\"slideEvent && onDrag($event)\"\n(slideend)=\"slideEvent && onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"6\"></span>\n      </div>\n  </div>\n  <div class=\"ly-carousel-actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div class=\"ly-carousel-actions right\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                },] },
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
        slideEvent: [{ type: Input }]
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
         */
        function (value) {
            this._className = this.theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className);
        },
        enumerable: true,
        configurable: true
    });
    LyCarouselItem.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'ly-carousel-item'
                },] },
    ];
    /** @nocollapse */
    LyCarouselItem.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyCarouselItem.propDecorators = {
        srcImg: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [CommonModule, LyCommonModule, LyRippleModule],
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

export { CarouselMode, LyCarousel, LyCarouselItem, LyCarouselModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIm5nOi8vQGFseWxlL3VpL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIC5seS1jYXJvdXNlbC1hY3Rpb25zJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICB9LFxuICAgICcmIC5seS1jYXJvdXNlbC1hY3Rpb25zLnJpZ2h0Jzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzbGlkZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICB9LFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSA+IFtseUNhcm91c2VsSW1nXSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBzbGlkZUFuaW06IHtcbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICB9XG4gIH0sXG4gIHNsaWRlTm9FdmVudDoge1xuICAgICcmPmRpdic6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnaW5pdGlhbCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgJyY+ZGl2Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgIH0sXG4gICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICczMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSknLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICAnJj5kaXY+c3Bhbi5hY3RpdmUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZTogYDxkaXZcbihzbGlkZXN0YXJ0KT1cInNsaWRlRXZlbnQgJiYgb25EcmFnU3RhcnQoJGV2ZW50KVwiXG4oc2xpZGUpPVwic2xpZGVFdmVudCAmJiBvbkRyYWcoJGV2ZW50KVwiXG4oc2xpZGVlbmQpPVwic2xpZGVFdmVudCAmJiBvbkRyYWdFbmQoJGV2ZW50KVwiXG4jc2xpZGVDb250YWluZXJcbj5cbiAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuc2xpZGVcIiBbc3R5bGUudHJhbnNmb3JtXT1cIl9wb3NpdGlvbkxlZnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5jYXJvdXNlbEluZGljYXRvcnNcIiAqbmdJZj1cImx5SXRlbXMubGVuZ3RoICE9PSAxXCI+XG4gICAgICA8ZGl2IHRhYmluZGV4PVwiMFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0KGkpXCJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbHlJdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPHNwYW4gY29sb3I9XCIjMDAwXCJcbiAgICAgIGJnPVwiYmFja2dyb3VuZDpwcmltYXJ5XCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRJbmRleD09aVwiXG4gICAgICBbZWxldmF0aW9uXT1cIjZcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zXCIgKGNsaWNrKT1cInByZXYoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibHktY2Fyb3VzZWwtYWN0aW9ucyByaWdodFwiIChjbGljayk9XCJuZXh0KClcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX3NlbGVjdGVkSW5kZXg6IGFueTtcbiAgcHVibGljIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5Q2Fyb3VzZWwnKTtcbiAgcHJpdmF0ZSBfc2xpZGVFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHNsaWRlRXZlbnQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fc2xpZGVFdmVudCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCBzbGlkZUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZUV2ZW50O1xuICB9XG4gIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG4gIG9uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfVxuICB9XG4gIG9uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zbGlkZUV2ZW50KSB7XG4gICAgICB0aGlzLnNsaWRlRXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLnNhbml0aXplclN0eWxlKGB0cmFuc2xhdGUoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgpYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgc2FuaXRpemVyU3R5bGUodmFsOiBhbnkpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlKCR7LTEwMCAqIHZhbH0lLCAwcHgpYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5zZWxlY3QocHJldiA8IDAgPyBsZW4gOiBwcmV2KTtcbiAgfVxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWNhcm91c2VsLWltZzoke3ZhbHVlfWAsIChcbiAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKWBcbiAgICAgICksXG4gICAgICB0aGlzLl9uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fY2xhc3NOYW1lXG4gICAgKTtcbiAgfVxuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuXG5jb25zdCBMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTID0gW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0xZX0NBUk9VU0VMX0RJUkVDVElWRVNdLFxuICBkZWNsYXJhdGlvbnM6IFtMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQW9CQSxJQUFNLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLHdCQUF3QixFQUFFO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxDQUFDO1lBQ04sTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsWUFBWTtZQUNwQixNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLE1BQU07WUFDaEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLE1BQU07WUFDYixVQUFVLEVBQUUscUJBQXFCO1lBQ2pDLFVBQVUsRUFBRSxXQUFXO1NBQ3hCO1FBQ0QsOEJBQThCLEVBQUU7WUFDOUIsS0FBSyxFQUFFLENBQUM7WUFDUixtQkFBbUIsRUFBRSxnQkFBZ0I7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM1QjtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxjQUFj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