/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, LyTheme2, toBoolean } from '@alyle/ui';
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
export { CarouselMode };
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
        this._positionLeft = (/** @type {?} */ (this.sanitizerStyle("translate(calc(" + -100 * this.selectedIndex + "% + " + x + "px), 0px)")));
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
        slideEvent: [{ type: Input }]
    };
    return LyCarousel;
}());
export { LyCarousel };
if (false) {
    /** @type {?} */
    LyCarousel.prototype._selectedIndex;
    /** @type {?} */
    LyCarousel.prototype.nullImg;
    /** @type {?} */
    LyCarousel.prototype._intervalFn;
    /** @type {?} */
    LyCarousel.prototype.slideContainer;
    /** @type {?} */
    LyCarousel.prototype.lyItems;
    /** @type {?} */
    LyCarousel.prototype.mode;
    /** @type {?} */
    LyCarousel.prototype.interval;
    /** @type {?} */
    LyCarousel.prototype._positionLeft;
    /** @type {?} */
    LyCarousel.prototype.selectedIndex;
    /** @type {?} */
    LyCarousel.prototype.selectedElement;
    /** @type {?} */
    LyCarousel.prototype.classes;
    /** @type {?} */
    LyCarousel.prototype._slideEvent;
    /** @type {?} */
    LyCarousel.prototype.elementRef;
    /** @type {?} */
    LyCarousel.prototype.sanitizer;
    /** @type {?} */
    LyCarousel.prototype.cd;
    /** @type {?} */
    LyCarousel.prototype.theme;
    /** @type {?} */
    LyCarousel.prototype.renderer;
}
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
            this._className = this.theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    LyCarouselItem.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'ly-carousel-item'
                },] }
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
export { LyCarouselItem };
if (false) {
    /** @type {?} */
    LyCarouselItem.prototype._className;
    /** @type {?} */
    LyCarouselItem.prototype._nativeElement;
    /** @type {?} */
    LyCarouselItem.prototype.theme;
    /** @type {?} */
    LyCarouselItem.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBRXBELGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBRW5CLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsd0JBQXdCLEVBQUU7WUFDeEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsTUFBTTtZQUNiLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsVUFBVSxFQUFFLFdBQVc7U0FDeEI7UUFDRCw4QkFBOEIsRUFBRTtZQUM5QixLQUFLLEVBQUUsQ0FBQztZQUNSLG1CQUFtQixFQUFFLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdC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cUJBQW1CLEtBQU8sRUFBRSxDQUMxQiw0QkFBMEIsS0FBSyxPQUFJLENBQ3BDLEVBQ0QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQ2hDLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Z0JBZkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkE5UGtCLFFBQVE7Z0JBTHpCLFNBQVM7Z0JBTFQsVUFBVTs7O3lCQTJRVCxLQUFLOztJQW9CUixxQkFBQztDQUFBLEFBMUJELElBMEJDO1NBdEJZLGNBQWM7OztJQUN6QixvQ0FBMkI7O0lBVzNCLHdDQUE0Qjs7SUFHMUIsK0JBQXVCOztJQUN2QixrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIC5seS1jYXJvdXNlbC1hY3Rpb25zJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBtYXJnaW46ICdhdXRvIC4yNWVtJyxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMSknLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICB9LFxuICAgICcmIC5seS1jYXJvdXNlbC1hY3Rpb25zLnJpZ2h0Jzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZyknLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBzbGlkZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICB9LFxuICAgICcmID4gbHktY2Fyb3VzZWwtaXRlbSA+IFtseUNhcm91c2VsSW1nXSc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH0sXG4gIHNsaWRlQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBzbGlkZUFuaW06IHtcbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJ1xuICB9XG4gIH0sXG4gIHNsaWRlTm9FdmVudDoge1xuICAgICcmPmRpdic6IHtcbiAgICAgIHRvdWNoQWN0aW9uOiAnaW5pdGlhbCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgJyY+ZGl2Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmc6ICcuNWVtJyxcbiAgICAgIG91dGxpbmU6ICdub25lJ1xuICAgIH0sXG4gICAgJyY+ZGl2ID4gc3Bhbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICczMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSknLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICAnJj5kaXY+c3Bhbi5hY3RpdmUnOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX3NlbGVjdGVkSW5kZXg6IGFueTtcbiAgcHVibGljIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9zbGlkZUV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgc2xpZGVFdmVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9zbGlkZUV2ZW50ID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNsaWRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlRXZlbnQ7XG4gIH1cbiAgb25EcmFnU3RhcnQoZSkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA8IHJlY3Qud2lkdGgpIHtcbiAgICAgIHRoaXMuX29uUGFuKGUuZGVsdGFYKTtcbiAgICB9XG4gIH1cbiAgb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNsaWRlRXZlbnQpIHtcbiAgICAgIHRoaXMuc2xpZGVFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IHRoaXMuc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZShjYWxjKCR7LTEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCksIDBweClgKSBhcyBhbnk7XG4gIH1cbiAgcHJpdmF0ZSBzYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQ29udGFpbmVyKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IGB0cmFuc2xhdGUoJHstMTAwICogdmFsfSUsIDBweClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG4gIG5leHQobm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICB0aGlzLnNlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxJdGVtIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmNJbWcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nOiR7dmFsdWV9YCwgKFxuICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpYFxuICAgICAgKSxcbiAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG4iXX0=