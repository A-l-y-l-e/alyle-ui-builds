/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, forwardRef, Inject, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselService } from './carousel.service';
import { Platform, LyTheme2, toBoolean } from '@alyle/ui';
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
    function LyCarousel(elementRef, sanitizer, cd, theme, renderer, platformId) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.theme = theme;
        this.renderer = renderer;
        this.platformId = platformId;
        this.nullImg = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        this._intervalFn = null;
        this.mode = CarouselMode.default;
        this.interval = 7000;
        this.selectedIndex = 0;
        this.classes = {
            root: this.theme.core.setUpStyle('carousel', {
                '': function () { return ("display: block;" +
                    "-webkit-user-select: none;" +
                    "-moz-user-select: none;" +
                    "-ms-user-select: none;" +
                    "position: relative;"); },
                ' .ly-carousel-actions': function () { return ("position: absolute;" +
                    "top: 0;" +
                    "bottom: 0;" +
                    "margin:auto .25em;" +
                    "height:1em;" +
                    "width:1em;" +
                    "font-size:36px;" +
                    "cursor:pointer;" +
                    "color: #fff;" +
                    "background: rgba(0, 0, 0, 0.11);" +
                    "will-change: transform;"); },
                ' .ly-carousel-actions.right': function () { return ("right: 0;" +
                    "-webkit-transform: rotate(180deg);" +
                    "transform: rotate(180deg);"); },
                ' svg': function () { return ("display:block;" +
                    "fill:currentColor;"); }
            }),
            slideContainer: this.theme.core.setUpStyle('k-carousel-slide', {
                '': function () { return ("overflow: hidden;" +
                    "display: block;" +
                    "width: 100%;" +
                    "height: 100%;" +
                    "position: relative;"); }
            }),
            slide: this.theme.core.setUpStyleSecondary('carousel-slide', {
                '': function () { return ("display: flex;" +
                    "width: 100%;" +
                    "height: 100%;" +
                    "will-change: transform"); },
                ' > ly-carousel-item': function () { return ("width: 100%;" +
                    "flex-shrink: 0;" +
                    "overflow: auto;" +
                    "position: relative;" +
                    "background-size: cover;" +
                    "background-position: center;" +
                    "background-repeat: no-repeat;"); },
                ' > ly-carousel-item > [lyCarouselImg]': function () { return ("width: 100%;"); }
            }),
            slideContent: this.theme.core.setUpStyleSecondary('carousel-slide-content', {
                '': function () { return ("display: flex;"); }
            }),
            slideAnim: this.theme.core.setUpStyleSecondary('slide-anim', {
                ' > div': function () { return ("transition: transform 750ms cubic-bezier(.1, 1, 0.5, 1);"); }
            }),
            slideNoEvent: this.theme.core.setUpStyleSecondary('k-slide-no-event', {
                '>div': function () { return ("touch-action: initial !important;"); }
            }),
            carouselIndicators: this.theme.core.setUpStyleSecondary('k-carousel-indicators', {
                '': function () { return ("position: absolute;" +
                    "bottom: 0;" +
                    "left: 0;" +
                    "right: 0;" +
                    "margin: 0;" +
                    "box-sizing: border-box;" +
                    "display: flex;" +
                    "align-items: center;" +
                    "justify-content: center;" +
                    "height: 48px;"); },
                '>div': function () { return ("display: inline-block;" +
                    "border-radius: 50%;" +
                    "cursor: pointer;" +
                    "position: relative;" +
                    "padding: .5em;" +
                    "outline: none"); },
                '>div > span': function () { return ("transition: 300ms cubic-bezier(0.65, 0.05, 0.36, 1);" +
                    "width: 1em;" +
                    "height: 1em;" +
                    "transform: scale(.5);" +
                    "border-radius: 50%;" +
                    "will-change: transform;" +
                    "display: block;"); },
                '>div>span.active': function () { return ("transform: scale(1);"); }
            }),
        };
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
        { type: Renderer2 },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
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
    /** @type {?} */
    LyCarousel.prototype.platformId;
}
var LyCarouselItem = /** @class */ (function () {
    function LyCarouselItem(carousel, carouselService, cd, platformId, theme, renderer, elementRef) {
        this.carouselService = carouselService;
        this.cd = cd;
        this.platformId = platformId;
        this.theme = theme;
        this.renderer = renderer;
        this._carousel = carousel;
        this._nativeElement = elementRef.nativeElement;
    }
    Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newImgStyle = this.theme.setUpStyleSecondary("ly-carousel-img-" + value, {
                '': function () { return ("background-image: url('" + value + "');"); }
            });
            this.theme.updateClassName(this._nativeElement, this.renderer, newImgStyle, this.className);
            this.className = newImgStyle;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    LyCarouselItem.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { };
    /**
     * @return {?}
     */
    LyCarouselItem.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    LyCarouselItem.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'ly-carousel-item'
                },] },
    ];
    /** @nocollapse */
    LyCarouselItem.ctorParameters = function () { return [
        { type: LyCarousel, decorators: [{ type: Optional }] },
        { type: CarouselService },
        { type: ChangeDetectorRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyCarouselItem.propDecorators = {
        src: [{ type: Input }],
        srcImg: [{ type: Input }]
    };
    return LyCarouselItem;
}());
export { LyCarouselItem };
if (false) {
    /** @type {?} */
    LyCarouselItem.prototype.className;
    /**
     * @deprecated use srcImg
     * @type {?}
     */
    LyCarouselItem.prototype.src;
    /** @type {?} */
    LyCarouselItem.prototype._carousel;
    /** @type {?} */
    LyCarouselItem.prototype._nativeElement;
    /** @type {?} */
    LyCarouselItem.prototype.carouselService;
    /** @type {?} */
    LyCarouselItem.prototype.cd;
    /** @type {?} */
    LyCarouselItem.prototype.platformId;
    /** @type {?} */
    LyCarouselItem.prototype.theme;
    /** @type {?} */
    LyCarouselItem.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsUUFBUSxFQUNSLFVBQVUsRUFHVixNQUFNLEVBQ04sV0FBVyxFQUVYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0lBR3hELFVBQU87SUFDUCxTQUFNOzs7MEJBRE4sT0FBTzswQkFDUCxNQUFNOztJQXdOTixvQkFDVSxZQUNBLFdBQ0EsSUFDQSxPQUNBLFVBQ3FCLFVBQWtCO1FBTHZDLGVBQVUsR0FBVixVQUFVO1FBQ1YsY0FBUyxHQUFULFNBQVM7UUFDVCxPQUFFLEdBQUYsRUFBRTtRQUNGLFVBQUssR0FBTCxLQUFLO1FBQ0wsYUFBUSxHQUFSLFFBQVE7UUFDYSxlQUFVLEdBQVYsVUFBVSxDQUFRO3VCQXhMaEMsb0ZBQW9GOzJCQUMvRSxJQUFJO29CQUdJLFlBQVksQ0FBQyxPQUFPO3dCQUM5QixJQUFJOzZCQUVDLENBQUM7dUJBRWhCO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDOUIsVUFBVSxFQUFFO2dCQUNWLEVBQUUsRUFBRSxjQUFNLE9BQUEsQ0FDUixpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIseUJBQXlCO29CQUN6Qix3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V0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQ2hELHFCQUFtQixLQUFPLEVBQUU7Z0JBQzFCLEVBQUUsRUFBRSxjQUFNLE9BQUEsQ0FDUiw0QkFBMEIsS0FBSyxRQUFLLENBQ3JDLEVBRlMsQ0FFVDthQUNGLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1NBQzlCOzs7T0FBQTs7Ozs7SUFpQkQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCLEtBQUs7Ozs7SUFFdkMsaUNBQVE7OztJQUFSLGVBQWM7O2dCQXRDZixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQXFCeUIsVUFBVSx1QkFBL0IsUUFBUTtnQkFsVUosZUFBZTtnQkFidEIsaUJBQWlCO2dCQWtWMEIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Z0JBcFVKLFFBQVE7Z0JBTnpCLFNBQVM7Z0JBVlQsVUFBVTs7O3NCQWdVVCxLQUFLO3lCQUNMLEtBQUs7O3lCQXpVUjs7U0FxVWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPcHRpb25hbCxcbiAgZm9yd2FyZFJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4oc2xpZGVzdGFydCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ1N0YXJ0KCRldmVudClcIlxuKHNsaWRlKT1cInNsaWRlRXZlbnQgJiYgb25EcmFnKCRldmVudClcIlxuKHNsaWRlZW5kKT1cInNsaWRlRXZlbnQgJiYgb25EcmFnRW5kKCRldmVudClcIlxuI3NsaWRlQ29udGFpbmVyXG4+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLnNsaWRlXCIgW3N0eWxlLnRyYW5zZm9ybV09XCJfcG9zaXRpb25MZWZ0XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY2Fyb3VzZWxJbmRpY2F0b3JzXCIgKm5nSWY9XCJseUl0ZW1zLmxlbmd0aCAhPT0gMVwiPlxuICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdChpKVwiXG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGx5SXRlbXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxzcGFuIGNvbG9yPVwiIzAwMFwiXG4gICAgICBiZz1cImJhY2tncm91bmQ6cHJpbWFyeVwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSW5kZXg9PWlcIlxuICAgICAgW2VsZXZhdGlvbl09XCI2XCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibHktY2Fyb3VzZWwtYWN0aW9uc1wiIChjbGljayk9XCJwcmV2KClcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImx5LWNhcm91c2VsLWFjdGlvbnMgcmlnaHRcIiAoY2xpY2spPVwibmV4dCgpXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L3N2Zz5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIF9zZWxlY3RlZEluZGV4OiBhbnk7XG4gIHB1YmxpYyBudWxsSW1nID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInKSBzbGlkZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5Q2Fyb3VzZWxJdGVtKSkgbHlJdGVtczogUXVlcnlMaXN0PEx5Q2Fyb3VzZWxJdGVtPjtcbiAgQElucHV0KCkgbW9kZTogQ2Fyb3VzZWxNb2RlID0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIGludGVydmFsID0gNzAwMDtcbiAgX3Bvc2l0aW9uTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4ID0gMDtcbiAgc2VsZWN0ZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZShcbiAgICAgICdjYXJvdXNlbCcsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YCArXG4gICAgICAgICAgYC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgICAgICAgYC1tcy11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyAubHktY2Fyb3VzZWwtYWN0aW9ucyc6ICgpID0+IChcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB0b3A6IDA7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbWFyZ2luOmF1dG8gLjI1ZW07YCArXG4gICAgICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgICAgICBgZm9udC1zaXplOjM2cHg7YCArXG4gICAgICAgICAgYGN1cnNvcjpwb2ludGVyO2AgK1xuICAgICAgICAgIGBjb2xvcjogI2ZmZjtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjExKTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgXG4gICAgICAgICksXG4gICAgICAgICcgLmx5LWNhcm91c2VsLWFjdGlvbnMucmlnaHQnOiAoKSA9PiAoXG4gICAgICAgICAgYHJpZ2h0OiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7YCArXG4gICAgICAgICAgYHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7YFxuICAgICAgICApLFxuICAgICAgICAnIHN2Zyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgICBgZmlsbDpjdXJyZW50Q29sb3I7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUNvbnRhaW5lcjogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGUoXG4gICAgICAnay1jYXJvdXNlbC1zbGlkZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YCArXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDEwMCU7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdjYXJvdXNlbC1zbGlkZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybWBcbiAgICAgICAgKSxcbiAgICAgICAgJyA+IGx5LWNhcm91c2VsLWl0ZW0nOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICAgIGBmbGV4LXNocmluazogMDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGF1dG87YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2BcbiAgICAgICAgKSxcbiAgICAgICAgJyA+IGx5LWNhcm91c2VsLWl0ZW0gPiBbbHlDYXJvdXNlbEltZ10nOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVDb250ZW50OiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdjYXJvdXNlbC1zbGlkZS1jb250ZW50Jywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVBbmltOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdzbGlkZS1hbmltJywge1xuICAgICAgICAnID4gZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVOb0V2ZW50OiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdrLXNsaWRlLW5vLWV2ZW50Jywge1xuICAgICAgICAnPmRpdic6ICgpID0+IChcbiAgICAgICAgICBgdG91Y2gtYWN0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBjYXJvdXNlbEluZGljYXRvcnM6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stY2Fyb3VzZWwtaW5kaWNhdG9ycycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2AgK1xuICAgICAgICAgIGBtYXJnaW46IDA7YCArXG4gICAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YCArXG4gICAgICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDQ4cHg7YFxuICAgICAgICApLFxuICAgICAgICAnPmRpdic6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogaW5saW5lLWJsb2NrO2AgK1xuICAgICAgICAgIGBib3JkZXItcmFkaXVzOiA1MCU7YCArXG4gICAgICAgICAgYGN1cnNvcjogcG9pbnRlcjtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgICAgIGBwYWRkaW5nOiAuNWVtO2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiBub25lYFxuICAgICAgICApLFxuICAgICAgICAnPmRpdiA+IHNwYW4nOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zaXRpb246IDMwMG1zIGN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKTtgICtcbiAgICAgICAgICBgd2lkdGg6IDFlbTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxZW07YCArXG4gICAgICAgICAgYHRyYW5zZm9ybTogc2NhbGUoLjUpO2AgK1xuICAgICAgICAgIGBib3JkZXItcmFkaXVzOiA1MCU7YCArXG4gICAgICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07YCArXG4gICAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICAgICAgKSxcbiAgICAgICAgJz5kaXY+c3Bhbi5hY3RpdmUnOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zZm9ybTogc2NhbGUoMSk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgfTtcbiAgcHJpdmF0ZSBfc2xpZGVFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHNsaWRlRXZlbnQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fc2xpZGVFdmVudCA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfVxuICB9XG4gIGdldCBzbGlkZUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZUV2ZW50O1xuICB9XG4gIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpLl9uYXRpdmVFbGVtZW50O1xuICB9XG4gIG9uRHJhZyhlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfVxuICB9XG4gIG9uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVyaWdodCcpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNsaWRlRXZlbnQpIHtcbiAgICAgIHRoaXMuc2xpZGVFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25QYW4oeCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IHRoaXMuc2FuaXRpemVyU3R5bGUoYHRyYW5zbGF0ZShjYWxjKCR7LTEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCksIDBweClgKSBhcyBhbnk7XG4gIH1cbiAgcHJpdmF0ZSBzYW5pdGl6ZXJTdHlsZSh2YWw6IGFueSk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSh2YWwpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQ29udGFpbmVyKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdCh2YWw6IG51bWJlciwgbm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gQ2Fyb3VzZWxNb2RlLmRlZmF1bHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uTGVmdCA9IGB0cmFuc2xhdGUoJHstMTAwICogdmFsfSUsIDBweClgO1xuICAgIH1cbiAgICBpZiAoIW5vdFJlc2V0SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cbiAgcHJldigpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICB0aGlzLnNlbGVjdChwcmV2IDwgMCA/IGxlbiA6IHByZXYpO1xuICB9XG4gIG5leHQobm90UmVzZXRJbnRlcnZhbD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmx5SXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5zZWxlY3RlZEluZGV4ICsgMTtcbiAgICB0aGlzLnNlbGVjdChuZXh0ID4gbGVuID8gMCA6IG5leHQsIG5vdFJlc2V0SW50ZXJ2YWwpO1xuICB9XG4gIHByaXZhdGUgX3Jlc2V0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxGbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxJdGVtIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzcmNJbWcgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmNJbWcodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0ltZ1N0eWxlID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgYGx5LWNhcm91c2VsLWltZy0ke3ZhbHVlfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlfScpO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fbmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3SW1nU3R5bGUsIHRoaXMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IG5ld0ltZ1N0eWxlO1xuICB9XG4gIHByaXZhdGUgX2Nhcm91c2VsOiBMeUNhcm91c2VsO1xuICBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgY2Fyb3VzZWw6IEx5Q2Fyb3VzZWwsXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLl9jYXJvdXNlbCA9IGNhcm91c2VsO1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=