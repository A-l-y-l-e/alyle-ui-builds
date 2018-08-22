import { Injectable, NgModule, Component, Directive, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, forwardRef, Inject, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { CoreTheme, LyCommonModule, toBoolean, Platform, LyTheme2 } from '@alyle/ui';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LyRippleModule } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CarouselService = /** @class */ (function () {
    function CarouselService(coreTheme) {
        this.coreTheme = coreTheme;
    }
    CarouselService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CarouselService.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ CarouselService.ngInjectableDef = defineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(inject(CoreTheme)); }, token: CarouselService, providedIn: "root" });
    return CarouselService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
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
                    template: "<div\n(slidestart)=\"slideEvent && onDragStart($event)\"\n(slide)=\"slideEvent && onDrag($event)\"\n(slideend)=\"slideEvent && onDragEnd($event)\"\n#slideContainer\n>\n  <div [className]=\"classes.slide\" [style.transform]=\"_positionLeft\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n      <div tabindex=\"0\"\n      (click)=\"select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; let i = index\">\n      <span color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [newRaised]=\"[6]\"></span>\n      </div>\n  </div>\n  <div class=\"ly-carousel-actions\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div class=\"ly-carousel-actions right\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n</div>",
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

export { CarouselMode, LyCarousel, LyCarouselItem, CarouselService, LyCarouselModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSG9zdCwgU2tpcFNlbGYsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIG9mIGFzIG9ic2VydmFibGVPZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIEx5VGhlbWVDb250YWluZXIsIENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jYXJvdXNlbC5tb2R1bGUnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHt9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPcHRpb25hbCxcbiAgZm9yd2FyZFJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4oc2xpZGVzdGFydCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ1N0YXJ0KCRldmVudClcIlxuKHNsaWRlKT1cInNsaWRlRXZlbnQgJiYgb25EcmFnKCRldmVudClcIlxuKHNsaWRlZW5kKT1cInNsaWRlRXZlbnQgJiYgb25EcmFnRW5kKCRldmVudClcIlxuI3NsaWRlQ29udGFpbmVyXG4+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLnNsaWRlXCIgW3N0eWxlLnRyYW5zZm9ybV09XCJfcG9zaXRpb25MZWZ0XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY2Fyb3VzZWxJbmRpY2F0b3JzXCIgKm5nSWY9XCJseUl0ZW1zLmxlbmd0aCAhPT0gMVwiPlxuICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdChpKVwiXG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGx5SXRlbXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxzcGFuIGNvbG9yPVwiIzAwMFwiXG4gICAgICBiZz1cImJhY2tncm91bmQ6cHJpbWFyeVwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSW5kZXg9PWlcIlxuICAgICAgW25ld1JhaXNlZF09XCJbNl1cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zXCIgKGNsaWNrKT1cInByZXYoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibHktY2Fyb3VzZWwtYWN0aW9ucyByaWdodFwiIChjbGljayk9XCJuZXh0KClcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX3NlbGVjdGVkSW5kZXg6IGFueTtcbiAgcHVibGljIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlKFxuICAgICAgJ2Nhcm91c2VsJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgLW1vei11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgLW1zLXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgICAgICApLFxuICAgICAgICAnIC5seS1jYXJvdXNlbC1hY3Rpb25zJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHRvcDogMDtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBtYXJnaW46YXV0byAuMjVlbTtgICtcbiAgICAgICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgICAgIGBmb250LXNpemU6MzZweDtgICtcbiAgICAgICAgICBgY3Vyc29yOnBvaW50ZXI7YCArXG4gICAgICAgICAgYGNvbG9yOiAjZmZmO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTEpO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyAubHktY2Fyb3VzZWwtYWN0aW9ucy5yaWdodCc6ICgpID0+IChcbiAgICAgICAgICBgcmlnaHQ6IDA7YCArXG4gICAgICAgICAgYC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtgICtcbiAgICAgICAgICBgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtgXG4gICAgICAgICksXG4gICAgICAgICcgc3ZnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICAgIGBmaWxsOmN1cnJlbnRDb2xvcjtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQ29udGFpbmVyOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZShcbiAgICAgICdrLWNhcm91c2VsLXNsaWRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGU6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtYFxuICAgICAgICApLFxuICAgICAgICAnID4gbHktY2Fyb3VzZWwtaXRlbSc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGZsZXgtc2hyaW5rOiAwO2AgK1xuICAgICAgICAgIGBvdmVyZmxvdzogYXV0bztgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YFxuICAgICAgICApLFxuICAgICAgICAnID4gbHktY2Fyb3VzZWwtaXRlbSA+IFtseUNhcm91c2VsSW1nXSc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUNvbnRlbnQ6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlLWNvbnRlbnQnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUFuaW06IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ3NsaWRlLWFuaW0nLCB7XG4gICAgICAgICcgPiBkaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZU5vRXZlbnQ6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stc2xpZGUtbm8tZXZlbnQnLCB7XG4gICAgICAgICc+ZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGB0b3VjaC1hY3Rpb246IGluaXRpYWwgIWltcG9ydGFudDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIGNhcm91c2VsSW5kaWNhdG9yczogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay1jYXJvdXNlbC1pbmRpY2F0b3JzJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbGVmdDogMDtgICtcbiAgICAgICAgICBgcmlnaHQ6IDA7YCArXG4gICAgICAgICAgYG1hcmdpbjogMDtgICtcbiAgICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgICtcbiAgICAgICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gICAgICAgICAgYGhlaWdodDogNDhweDtgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDUwJTtgICtcbiAgICAgICAgICBgY3Vyc29yOiBwb2ludGVyO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICAgICAgYHBhZGRpbmc6IC41ZW07YCArXG4gICAgICAgICAgYG91dGxpbmU6IG5vbmVgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2ID4gc3Bhbic6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO2AgK1xuICAgICAgICAgIGB3aWR0aDogMWVtO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDFlbTtgICtcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSguNSk7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDUwJTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgICtcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YFxuICAgICAgICApLFxuICAgICAgICAnPmRpdj5zcGFuLmFjdGl2ZSc6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSgxKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICB9O1xuICBwcml2YXRlIF9zbGlkZUV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgc2xpZGVFdmVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9zbGlkZUV2ZW50ID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNsaWRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlRXZlbnQ7XG4gIH1cbiAgb25EcmFnU3RhcnQoZSkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA8IHJlY3Qud2lkdGgpIHtcbiAgICAgIHRoaXMuX29uUGFuKGUuZGVsdGFYKTtcbiAgICB9XG4gIH1cbiAgb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2xpZGVFdmVudCkge1xuICAgICAgdGhpcy5zbGlkZUV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gdGhpcy5zYW5pdGl6ZXJTdHlsZShgdHJhbnNsYXRlKGNhbGMoJHstMTAwICogdGhpcy5zZWxlY3RlZEluZGV4IH0lICsgJHt4fXB4KSwgMHB4KWApIGFzIGFueTtcbiAgfVxuICBwcml2YXRlIHNhbml0aXplclN0eWxlKHZhbDogYW55KTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gYHRyYW5zbGF0ZSgkey0xMDAgKiB2YWx9JSwgMHB4KWA7XG4gICAgfVxuICAgIGlmICghbm90UmVzZXRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsRm4gIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxGbik7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNyY0ltZyAqL1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3SW1nU3R5bGUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nLSR7dmFsdWV9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9Jyk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdJbWdTdHlsZSwgdGhpcy5jbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gbmV3SW1nU3R5bGU7XG4gIH1cbiAgcHJpdmF0ZSBfY2Fyb3VzZWw6IEx5Q2Fyb3VzZWw7XG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBjYXJvdXNlbDogTHlDYXJvdXNlbCxcbiAgICBwcml2YXRlIGNhcm91c2VsU2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX2Nhcm91c2VsID0gY2Fyb3VzZWw7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmNvbnN0IExZX0NBUk9VU0VMX0RJUkVDVElWRVMgPSBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWxdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTFlfQ0FST1VTRUxfRElSRUNUSVZFU10sXG4gIGRlY2xhcmF0aW9uczogW0xZX0NBUk9VU0VMX0RJUkVDVElWRVNdXG59KVxu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