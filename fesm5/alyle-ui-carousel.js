import { Injectable, NgModule, Component, Directive, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, forwardRef, Inject, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { CoreTheme, LyCommonModule, toBoolean, Platform, LyTheme2 } from '@alyle/ui';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LyRippleModule } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ CarouselService.ngInjectableDef = defineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(inject(CoreTheme)); }, token: CarouselService, providedIn: "root" });
    return CarouselService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
CarouselMode[CarouselMode.default] = "default";
CarouselMode[CarouselMode.inline] = "inline";
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
                '': function () {
                    return ("display: block;" +
                        "-webkit-user-select: none;" +
                        "-moz-user-select: none;" +
                        "-ms-user-select: none;" +
                        "position: relative;");
                },
                ' .ly-carousel-actions': function () {
                    return ("position: absolute;" +
                        "top: 0;" +
                        "bottom: 0;" +
                        "margin:auto .25em;" +
                        "height:1em;" +
                        "width:1em;" +
                        "font-size:36px;" +
                        "cursor:pointer;" +
                        "color: #fff;" +
                        "background: rgba(0, 0, 0, 0.11);" +
                        "will-change: transform;");
                },
                ' .ly-carousel-actions.right': function () {
                    return ("right: 0;" +
                        "-webkit-transform: rotate(180deg);" +
                        "transform: rotate(180deg);");
                },
                ' svg': function () {
                    return ("display:block;" +
                        "fill:currentColor;");
                }
            }),
            slideContainer: this.theme.core.setUpStyle('k-carousel-slide', {
                '': function () {
                    return ("overflow: hidden;" +
                        "display: block;" +
                        "width: 100%;" +
                        "height: 100%;" +
                        "position: relative;");
                }
            }),
            slide: this.theme.core.setUpStyleSecondary('carousel-slide', {
                '': function () {
                    return ("display: flex;" +
                        "width: 100%;" +
                        "height: 100%;" +
                        "will-change: transform");
                },
                ' > ly-carousel-item': function () {
                    return ("width: 100%;" +
                        "flex-shrink: 0;" +
                        "overflow: auto;" +
                        "position: relative;" +
                        "background-size: cover;" +
                        "background-position: center;" +
                        "background-repeat: no-repeat;");
                },
                ' > ly-carousel-item > [lyCarouselImg]': function () {
                    return ("width: 100%;");
                }
            }),
            slideContent: this.theme.core.setUpStyleSecondary('carousel-slide-content', {
                '': function () {
                    return ("display: flex;");
                }
            }),
            slideAnim: this.theme.core.setUpStyleSecondary('slide-anim', {
                ' > div': function () {
                    return ("transition: transform 750ms cubic-bezier(.1, 1, 0.5, 1);");
                }
            }),
            slideNoEvent: this.theme.core.setUpStyleSecondary('k-slide-no-event', {
                '>div': function () {
                    return ("touch-action: initial !important;");
                }
            }),
            carouselIndicators: this.theme.core.setUpStyleSecondary('k-carousel-indicators', {
                '': function () {
                    return ("position: absolute;" +
                        "bottom: 0;" +
                        "left: 0;" +
                        "right: 0;" +
                        "margin: 0;" +
                        "box-sizing: border-box;" +
                        "display: flex;" +
                        "align-items: center;" +
                        "justify-content: center;" +
                        "height: 48px;");
                },
                '>div': function () {
                    return ("display: inline-block;" +
                        "border-radius: 50%;" +
                        "cursor: pointer;" +
                        "position: relative;" +
                        "padding: .5em;" +
                        "outline: none");
                },
                '>div > span': function () {
                    return ("transition: 300ms cubic-bezier(0.65, 0.05, 0.36, 1);" +
                        "width: 1em;" +
                        "height: 1em;" +
                        "transform: scale(.5);" +
                        "border-radius: 50%;" +
                        "will-change: transform;" +
                        "display: block;");
                },
                '>div>span.active': function () {
                    return ("transform: scale(1);");
                }
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
            var /** @type {?} */ newVal = toBoolean(val);
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
        var /** @type {?} */ rect = this.selectedElement.getBoundingClientRect();
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
        var /** @type {?} */ rect = this.selectedElement.getBoundingClientRect();
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
            var /** @type {?} */ eventName = e.additionalEvent;
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
        var /** @type {?} */ len = this.lyItems.length - 1;
        var /** @type {?} */ prev = this.selectedIndex - 1;
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
        var /** @type {?} */ len = this.lyItems.length - 1;
        var /** @type {?} */ next = this.selectedIndex + 1;
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
        { type: ElementRef, },
        { type: DomSanitizer, },
        { type: ChangeDetectorRef, },
        { type: LyTheme2, },
        { type: Renderer2, },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    LyCarousel.propDecorators = {
        "slideContainer": [{ type: ViewChild, args: ['slideContainer',] },],
        "lyItems": [{ type: ContentChildren, args: [forwardRef(function () { return LyCarouselItem; }),] },],
        "mode": [{ type: Input },],
        "interval": [{ type: Input },],
        "selectedIndex": [{ type: Input },],
        "slideEvent": [{ type: Input },],
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
            var /** @type {?} */ newImgStyle = this.theme.setUpStyleSecondary("ly-carousel-img-" + value, {
                '': function () {
                    return ("background-image: url('" + value + "');");
                }
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
        { type: LyCarousel, decorators: [{ type: Optional },] },
        { type: CarouselService, },
        { type: ChangeDetectorRef, },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
        { type: LyTheme2, },
        { type: Renderer2, },
        { type: ElementRef, },
    ]; };
    LyCarouselItem.propDecorators = {
        "src": [{ type: Input },],
        "srcImg": [{ type: Input },],
    };
    return LyCarouselItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LY_CAROUSEL_DIRECTIVES = [LyCarouselItem, LyCarousel];
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CarouselMode, LyCarousel, LyCarouselItem, CarouselService, LyCarouselModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSG9zdCwgU2tpcFNlbGYsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIG9mIGFzIG9ic2VydmFibGVPZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIEx5VGhlbWVDb250YWluZXIsIENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNhcm91c2VsTW9kdWxlIH0gZnJvbSAnLi9jYXJvdXNlbC5tb2R1bGUnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHt9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPcHRpb25hbCxcbiAgZm9yd2FyZFJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIEx5VGhlbWUyLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuZXhwb3J0IGVudW0gQ2Fyb3VzZWxNb2RlIHtcbiAgLyoqIGZ1bGwgKi9cbiAgZGVmYXVsdCxcbiAgaW5saW5lXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNhcm91c2VsJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4oc2xpZGVzdGFydCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ1N0YXJ0KCRldmVudClcIlxuKHNsaWRlKT1cInNsaWRlRXZlbnQgJiYgb25EcmFnKCRldmVudClcIlxuKHNsaWRlZW5kKT1cInNsaWRlRXZlbnQgJiYgb25EcmFnRW5kKCRldmVudClcIlxuI3NsaWRlQ29udGFpbmVyXG4+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLnNsaWRlXCIgW3N0eWxlLnRyYW5zZm9ybV09XCJfcG9zaXRpb25MZWZ0XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY2Fyb3VzZWxJbmRpY2F0b3JzXCIgKm5nSWY9XCJseUl0ZW1zLmxlbmd0aCAhPT0gMVwiPlxuICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdChpKVwiXG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGx5SXRlbXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxzcGFuIGNvbG9yPVwiIzAwMFwiXG4gICAgICBiZz1cImJhY2tncm91bmQ6cHJpbWFyeVwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkSW5kZXg9PWlcIlxuICAgICAgW25ld1JhaXNlZF09XCJbNl1cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zXCIgKGNsaWNrKT1cInByZXYoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibHktY2Fyb3VzZWwtYWN0aW9ucyByaWdodFwiIChjbGljayk9XCJuZXh0KClcIj5cbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvc3ZnPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX3NlbGVjdGVkSW5kZXg6IGFueTtcbiAgcHVibGljIG51bGxJbWcgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gIHByaXZhdGUgX2ludGVydmFsRm4gPSBudWxsO1xuICBAVmlld0NoaWxkKCdzbGlkZUNvbnRhaW5lcicpIHNsaWRlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgaW50ZXJ2YWwgPSA3MDAwO1xuICBfcG9zaXRpb25MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXggPSAwO1xuICBzZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlKFxuICAgICAgJ2Nhcm91c2VsJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgICAgICBgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgLW1vei11c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAgICAgICBgLW1zLXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgICAgICApLFxuICAgICAgICAnIC5seS1jYXJvdXNlbC1hY3Rpb25zJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHRvcDogMDtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBtYXJnaW46YXV0byAuMjVlbTtgICtcbiAgICAgICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgICAgIGBmb250LXNpemU6MzZweDtgICtcbiAgICAgICAgICBgY3Vyc29yOnBvaW50ZXI7YCArXG4gICAgICAgICAgYGNvbG9yOiAjZmZmO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTEpO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyAubHktY2Fyb3VzZWwtYWN0aW9ucy5yaWdodCc6ICgpID0+IChcbiAgICAgICAgICBgcmlnaHQ6IDA7YCArXG4gICAgICAgICAgYC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtgICtcbiAgICAgICAgICBgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtgXG4gICAgICAgICksXG4gICAgICAgICcgc3ZnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICAgIGBmaWxsOmN1cnJlbnRDb2xvcjtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQ29udGFpbmVyOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZShcbiAgICAgICdrLWNhcm91c2VsLXNsaWRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGU6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtYFxuICAgICAgICApLFxuICAgICAgICAnID4gbHktY2Fyb3VzZWwtaXRlbSc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICAgICAgYGZsZXgtc2hyaW5rOiAwO2AgK1xuICAgICAgICAgIGBvdmVyZmxvdzogYXV0bztgICtcbiAgICAgICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YFxuICAgICAgICApLFxuICAgICAgICAnID4gbHktY2Fyb3VzZWwtaXRlbSA+IFtseUNhcm91c2VsSW1nXSc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6IDEwMCU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUNvbnRlbnQ6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlLWNvbnRlbnQnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZUFuaW06IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ3NsaWRlLWFuaW0nLCB7XG4gICAgICAgICcgPiBkaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZU5vRXZlbnQ6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2stc2xpZGUtbm8tZXZlbnQnLCB7XG4gICAgICAgICc+ZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGB0b3VjaC1hY3Rpb246IGluaXRpYWwgIWltcG9ydGFudDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIGNhcm91c2VsSW5kaWNhdG9yczogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay1jYXJvdXNlbC1pbmRpY2F0b3JzJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbGVmdDogMDtgICtcbiAgICAgICAgICBgcmlnaHQ6IDA7YCArXG4gICAgICAgICAgYG1hcmdpbjogMDtgICtcbiAgICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgICtcbiAgICAgICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gICAgICAgICAgYGhlaWdodDogNDhweDtgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2JzogKCkgPT4gKFxuICAgICAgICAgIGBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDUwJTtgICtcbiAgICAgICAgICBgY3Vyc29yOiBwb2ludGVyO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICAgICAgYHBhZGRpbmc6IC41ZW07YCArXG4gICAgICAgICAgYG91dGxpbmU6IG5vbmVgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2ID4gc3Bhbic6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNpdGlvbjogMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO2AgK1xuICAgICAgICAgIGB3aWR0aDogMWVtO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDFlbTtgICtcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSguNSk7YCArXG4gICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDUwJTtgICtcbiAgICAgICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgICtcbiAgICAgICAgICBgZGlzcGxheTogYmxvY2s7YFxuICAgICAgICApLFxuICAgICAgICAnPmRpdj5zcGFuLmFjdGl2ZSc6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNmb3JtOiBzY2FsZSgxKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICB9O1xuICBwcml2YXRlIF9zbGlkZUV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgc2xpZGVFdmVudCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9zbGlkZUV2ZW50ID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNsaWRlRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlRXZlbnQ7XG4gIH1cbiAgb25EcmFnU3RhcnQoZSkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHRoaXMubHlJdGVtcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA8IHJlY3Qud2lkdGgpIHtcbiAgICAgIHRoaXMuX29uUGFuKGUuZGVsdGFYKTtcbiAgICB9XG4gIH1cbiAgb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpID4gcmVjdC53aWR0aCAvIDIpIHtcbiAgICAgIGlmICgwID4gZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKDAgPCBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuYWRkaXRpb25hbEV2ZW50KSB7XG4gICAgICBjb25zdCBldmVudE5hbWUgPSBlLmFkZGl0aW9uYWxFdmVudDtcbiAgICAgIGlmIChldmVudE5hbWUgPT09ICdzbGlkZWxlZnQnKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2xpZGVFdmVudCkge1xuICAgICAgdGhpcy5zbGlkZUV2ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gdGhpcy5zYW5pdGl6ZXJTdHlsZShgdHJhbnNsYXRlKGNhbGMoJHstMTAwICogdGhpcy5zZWxlY3RlZEluZGV4IH0lICsgJHt4fXB4KSwgMHB4KWApIGFzIGFueTtcbiAgfVxuICBwcml2YXRlIHNhbml0aXplclN0eWxlKHZhbDogYW55KTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVDb250YWluZXIpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0KHZhbDogbnVtYmVyLCBub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICBpZiAodGhpcy5tb2RlID09PSBDYXJvdXNlbE1vZGUuZGVmYXVsdCkge1xuICAgICAgdGhpcy5fcG9zaXRpb25MZWZ0ID0gYHRyYW5zbGF0ZSgkey0xMDAgKiB2YWx9JSwgMHB4KWA7XG4gICAgfVxuICAgIGlmICghbm90UmVzZXRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuICBwcmV2KCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnNlbGVjdGVkSW5kZXggLSAxO1xuICAgIHRoaXMuc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cbiAgbmV4dChub3RSZXNldEludGVydmFsPzogYm9vbGVhbikge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMubHlJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLnNlbGVjdGVkSW5kZXggKyAxO1xuICAgIHRoaXMuc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsRm4gIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxGbik7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwtaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbEl0ZW0gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNyY0ltZyAqL1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNyY0ltZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3SW1nU3R5bGUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICBgbHktY2Fyb3VzZWwtaW1nLSR7dmFsdWV9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9Jyk7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdJbWdTdHlsZSwgdGhpcy5jbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gbmV3SW1nU3R5bGU7XG4gIH1cbiAgcHJpdmF0ZSBfY2Fyb3VzZWw6IEx5Q2Fyb3VzZWw7XG4gIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBjYXJvdXNlbDogTHlDYXJvdXNlbCxcbiAgICBwcml2YXRlIGNhcm91c2VsU2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX2Nhcm91c2VsID0gY2Fyb3VzZWw7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmNvbnN0IExZX0NBUk9VU0VMX0RJUkVDVElWRVMgPSBbTHlDYXJvdXNlbEl0ZW0sIEx5Q2Fyb3VzZWxdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTFlfQ0FST1VTRUxfRElSRUNUSVZFU10sXG4gIGRlY2xhcmF0aW9uczogW0xZX0NBUk9VU0VMX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBUUUseUJBQ1U7UUFBQSxjQUFTLEdBQVQsU0FBUztLQUNmOztnQkFOTCxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpvQyxTQUFTOzs7MEJBRjlDOzs7Ozs7O0FDQUE7Ozs7Ozs7OztJQW9QRSxvQkFDVSxZQUNBLFdBQ0EsSUFDQSxPQUNBLFVBQ3FCO1FBTHJCLGVBQVUsR0FBVixVQUFVO1FBQ1YsY0FBUyxHQUFULFNBQVM7UUFDVCxPQUFFLEdBQUYsRUFBRTtRQUNGLFVBQUssR0FBTCxLQUFLO1FBQ0wsYUFBUSxHQUFSLFFBQVE7UUFDYSxlQUFVLEdBQVYsVUFBVTt1QkF4THhCLG9GQUFvRjsyQkFDL0UsSUFBSTtvQkFHSSxZQUFZLENBQUMsT0FBTzt3QkFDOUIsSUFBSTs2QkFFQyxDQUFDO3VCQUVoQjtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQzlCLFVBQVUsRUFBRTtnQkFDVixFQUFFLEVBQUU7b0JBQU0sUUFDUixpQkFBaUI7d0JBQ2pCLDRCQUE0Qjt3QkFDNUIseUJBQXlCO3dCQUN6Qix3QkFBd0I7d0JBQ3hCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsdUJBQXVCLEVBQUU7b0JBQU0sUUFDN0IscUJBQXFCO3dCQUNyQixTQUFTO3dCQUNULFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2Qsa0NBQWtDO3dCQUNsQyx5QkFBeUI7aUJBQzFCO2dCQUNELDZCQUE2QixFQUFFO29CQUFNLFFBQ25DLFdBQVc7d0JBQ1gsb0NBQW9DO3dCQUNwQyw0QkFBNEI7aUJBQzdCO2dCQUNELE1BQU0sRUFBRTtvQkFBTSxRQUNaLGdCQUFnQjt3QkFDaEIsb0JBQW9CO2lCQUNyQjthQUNGLENBQ0Y7WUFDRCxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN4QyxrQkFBa0IsRUFBRTtnQkFDbEIsRUFBRSxFQUFFO29CQUFNLFFBQ1IsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixxQkFBcUI7aUJBQ3RCO2FBQ0YsQ0FDRjtZQUNELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FDeEMsZ0JBQWdCLEVBQUU7Z0JBQ2hCLEVBQUUsRUFBRTtvQkFBTSxRQUNSLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHdCQUF3QjtpQkFDekI7Z0JBQ0QscUJBQXFCLEVBQUU7b0JBQU0sUUFDM0IsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix5QkFBeUI7d0JBQ3pCLDhCQUE4Qjt3QkFDOUIsK0JBQStCO2lCQUNoQztnQkFDRCx1Q0FBdUMsRUFBRTtvQkFBTSxRQUM3QyxjQUFjO2lCQUNmO2FBQ0YsQ0FDRjtZQUNELFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FDL0Msd0JBQXdCLEVBQUU7Z0JBQ3hCLEVBQUUsRUFBRTtvQkFBTSxRQUNSLGdCQUFnQjtpQkFDakI7YUFDRixDQUNGO1lBQ0QsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUM1QyxZQUFZLEVBQUU7Z0JBQ1osUUFBUSxFQUFFO29CQUFNLFFBQ2QsMERBQTBEO2lCQUMzRDthQUNGLENBQ0Y7WUFDRCxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQy9DLGtCQUFrQixFQUFFO2dCQUNsQixNQUFNLEVBQUU7b0JBQU0sUUFDWixtQ0FBbUM7aUJBQ3BDO2FBQ0YsQ0FDRjtZQUNELGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUNyRCx1QkFBdUIsRUFBRTtnQkFDdkIsRUFBRSxFQUFFO29CQUFNLFFBQ1IscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLHlCQUF5Qjt3QkFDekIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsZUFBZTtpQkFDaEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUFNLFFBQ1osd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLGVBQWU7aUJBQ2hCO2dCQUNELGFBQWEsRUFBRTtvQkFBTSxRQUNuQixzREFBc0Q7d0JBQ3RELGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCx1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIseUJBQXlCO3dCQUN6QixpQkFBaUI7aUJBQ2xCO2dCQUNELGtCQUFrQixFQUFFO29CQUFNLFFBQ3hCLHNCQUFzQjtpQkFDdkI7YUFDRixDQUNGO1NBQ0Y7UUFxREMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JFOzBCQW5ERyxrQ0FBVTs7OztRQVNkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztrQkFYYyxHQUFZO1lBQ3pCLHFCQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDMUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNyRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xGOzs7Ozs7Ozs7SUFLSCxnQ0FBVzs7OztJQUFYLFVBQVksQ0FBQztRQUFiLGlCQUdDO1FBRkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUssS0FBSyxLQUFJLENBQUMsYUFBYSxHQUFBLENBQUMsQ0FBQyxjQUFjLENBQUM7S0FDeEc7Ozs7O0lBQ0QsMkJBQU07Ozs7SUFBTixVQUFPLENBQUM7UUFDTixxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7OztJQUNELDhCQUFTOzs7O0lBQVQsVUFBVSxDQUFDO1FBQ1QscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2I7U0FDRjthQUFNLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUM1QixxQkFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUNwQyxJQUFJLFNBQVMsS0FBSyxXQUFXLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO2lCQUFNLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtnQkFDckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2I7U0FDRjtLQUNGOzs7O0lBWUQsNkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7O0lBRU8sMkJBQU07Ozs7Y0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEscUJBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBa0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsWUFBUSxDQUFDLGNBQVcsQ0FBUSxDQUFBLENBQUM7Ozs7OztJQUUzRyxtQ0FBYzs7OztjQUFDLEdBQVE7UUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUcvQyxnQ0FBVzs7OztRQUNoQixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7Ozs7O0lBR0gsa0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELG9DQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkYsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkY7S0FDRjs7Ozs7O0lBQ0QsMkJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsZ0JBQTBCO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVMsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7S0FDRjs7OztJQUNELHlCQUFJOzs7SUFBSjtRQUNFLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBQ0QseUJBQUk7Ozs7SUFBSixVQUFLLGdCQUEwQjtRQUM3QixxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3REOzs7O0lBQ08sbUNBQWM7Ozs7O1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7SUFHcEIseUJBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUM3QixhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7O2dCQS9SRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSw2L0JBMEJMO29CQUNMLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBdkRDLFVBQVU7Z0JBY0gsWUFBWTtnQkFabkIsaUJBQWlCO2dCQWNBLFFBQVE7Z0JBTnpCLFNBQVM7NkNBd09OLE1BQU0sU0FBQyxXQUFXOzs7bUNBdExwQixTQUFTLFNBQUMsZ0JBQWdCOzRCQUMxQixlQUFlLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEdBQUEsQ0FBQzt5QkFDaEQsS0FBSzs2QkFDTCxLQUFLO2tDQUVMLEtBQUs7K0JBZ0lMLEtBQUs7O3FCQXpNUjs7O0lBd1ZFLHdCQUNjLFVBQ0osaUJBQ0EsSUFDcUIsWUFDckIsT0FDQSxVQUNSLFVBQXNCO1FBTGQsb0JBQWUsR0FBZixlQUFlO1FBQ2YsT0FBRSxHQUFGLEVBQUU7UUFDbUIsZUFBVSxHQUFWLFVBQVU7UUFDL0IsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUdoQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDaEQ7MEJBekJHLGtDQUFNOzs7OztrQkFBQyxLQUFhO1lBQ3RCLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUNoRCxxQkFBbUIsS0FBTyxFQUFFO2dCQUMxQixFQUFFLEVBQUU7b0JBQU0sUUFDUiw0QkFBMEIsS0FBSyxRQUFLO2lCQUNyQzthQUNGLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDOzs7Ozs7Ozs7SUFrQi9CLG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQixLQUFLOzs7O0lBRXZDLGlDQUFROzs7SUFBUixlQUFjOztnQkF0Q2YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFwUVksVUFBVSx1QkF5UmxCLFFBQVE7Z0JBbFVKLGVBQWU7Z0JBYnRCLGlCQUFpQjs2Q0FrVmQsTUFBTSxTQUFDLFdBQVc7Z0JBcFVKLFFBQVE7Z0JBTnpCLFNBQVM7Z0JBVlQsVUFBVTs7O3dCQWdVVCxLQUFLOzJCQUNMLEtBQUs7O3lCQXpVUjs7Ozs7OztBQ0FBLEFBUUEscUJBQU0sc0JBQXNCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7Ozs7O2dCQUUzRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7b0JBQ3ZELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDdkM7OzJCQWREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==