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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2Fyb3VzZWwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwudHMiLCJuZzovL0BhbHlsZS91aS9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7fVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3B0aW9uYWwsXG4gIGZvcndhcmRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuKHNsaWRlc3RhcnQpPVwic2xpZGVFdmVudCAmJiBvbkRyYWdTdGFydCgkZXZlbnQpXCJcbihzbGlkZSk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZygkZXZlbnQpXCJcbihzbGlkZWVuZCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ0VuZCgkZXZlbnQpXCJcbiNzbGlkZUNvbnRhaW5lclxuPlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5zbGlkZVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3Bvc2l0aW9uTGVmdFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNhcm91c2VsSW5kaWNhdG9yc1wiICpuZ0lmPVwibHlJdGVtcy5sZW5ndGggIT09IDFcIj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBseUl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8c3BhbiBjb2xvcj1cIiMwMDBcIlxuICAgICAgYmc9XCJiYWNrZ3JvdW5kOnByaW1hcnlcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEluZGV4PT1pXCJcbiAgICAgIFtlbGV2YXRpb25dPVwiNlwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImx5LWNhcm91c2VsLWFjdGlvbnNcIiAoY2xpY2spPVwicHJldigpXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L3N2Zz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zIHJpZ2h0XCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBfc2VsZWN0ZWRJbmRleDogYW55O1xuICBwdWJsaWMgbnVsbEltZyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09JztcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxGbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlQ29udGFpbmVyJykgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUNhcm91c2VsSXRlbSkpIGx5SXRlbXM6IFF1ZXJ5TGlzdDxMeUNhcm91c2VsSXRlbT47XG4gIEBJbnB1dCgpIG1vZGU6IENhcm91c2VsTW9kZSA9IENhcm91c2VsTW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDcwMDA7XG4gIF9wb3NpdGlvbkxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGNsYXNzZXMgPSB7XG4gICAgcm9vdDogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGUoXG4gICAgICAnY2Fyb3VzZWwnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2AgK1xuICAgICAgICAgIGAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGAtbW96LXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgXG4gICAgICAgICksXG4gICAgICAgICcgLmx5LWNhcm91c2VsLWFjdGlvbnMnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYG1hcmdpbjphdXRvIC4yNWVtO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZTozNnB4O2AgK1xuICAgICAgICAgIGBjdXJzb3I6cG9pbnRlcjtgICtcbiAgICAgICAgICBgY29sb3I6ICNmZmY7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMSk7YCArXG4gICAgICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07YFxuICAgICAgICApLFxuICAgICAgICAnIC5seS1jYXJvdXNlbC1hY3Rpb25zLnJpZ2h0JzogKCkgPT4gKFxuICAgICAgICAgIGByaWdodDogMDtgICtcbiAgICAgICAgICBgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO2AgK1xuICAgICAgICAgIGB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyBzdmcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgICAgYGZpbGw6Y3VycmVudENvbG9yO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVDb250YWluZXI6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stY2Fyb3VzZWwtc2xpZGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47YCArXG4gICAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2AgK1xuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZTogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnY2Fyb3VzZWwtc2xpZGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDEwMCU7YCArXG4gICAgICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm1gXG4gICAgICAgICksXG4gICAgICAgICcgPiBseS1jYXJvdXNlbC1pdGVtJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgZmxleC1zaHJpbms6IDA7YCArXG4gICAgICAgICAgYG92ZXJmbG93OiBhdXRvO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtc2l6ZTogY292ZXI7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgXG4gICAgICAgICksXG4gICAgICAgICcgPiBseS1jYXJvdXNlbC1pdGVtID4gW2x5Q2Fyb3VzZWxJbWddJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDogMTAwJTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQ29udGVudDogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnY2Fyb3VzZWwtc2xpZGUtY29udGVudCcsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQW5pbTogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnc2xpZGUtYW5pbScsIHtcbiAgICAgICAgJyA+IGRpdic6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlTm9FdmVudDogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay1zbGlkZS1uby1ldmVudCcsIHtcbiAgICAgICAgJz5kaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYHRvdWNoLWFjdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdrLWNhcm91c2VsLWluZGljYXRvcnMnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBsZWZ0OiAwO2AgK1xuICAgICAgICAgIGByaWdodDogMDtgICtcbiAgICAgICAgICBgbWFyZ2luOiAwO2AgK1xuICAgICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2AgK1xuICAgICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgICAgICBgaGVpZ2h0OiA0OHB4O2BcbiAgICAgICAgKSxcbiAgICAgICAgJz5kaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGlubGluZS1ibG9jaztgICtcbiAgICAgICAgICBgYm9yZGVyLXJhZGl1czogNTAlO2AgK1xuICAgICAgICAgIGBjdXJzb3I6IHBvaW50ZXI7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgICAgICBgcGFkZGluZzogLjVlbTtgICtcbiAgICAgICAgICBgb3V0bGluZTogbm9uZWBcbiAgICAgICAgKSxcbiAgICAgICAgJz5kaXYgPiBzcGFuJzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSk7YCArXG4gICAgICAgICAgYHdpZHRoOiAxZW07YCArXG4gICAgICAgICAgYGhlaWdodDogMWVtO2AgK1xuICAgICAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKC41KTtgICtcbiAgICAgICAgICBgYm9yZGVyLXJhZGl1czogNTAlO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2PnNwYW4uYWN0aXZlJzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKDEpO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gIH07XG4gIHByaXZhdGUgX3NsaWRlRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBzbGlkZUV2ZW50KHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3NsaWRlRXZlbnQgPSBuZXdWYWw7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgc2xpZGVFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVFdmVudDtcbiAgfVxuICBvbkRyYWdTdGFydChlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuICBvbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH1cbiAgfVxuICBvbkRyYWdFbmQoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcblxuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPiByZWN0LndpZHRoIC8gMikge1xuICAgICAgaWYgKDAgPiBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoMCA8IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5hZGRpdGlvbmFsRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGUuYWRkaXRpb25hbEV2ZW50O1xuICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlbGVmdCcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlcmlnaHQnKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zbGlkZUV2ZW50KSB7XG4gICAgICB0aGlzLnNsaWRlRXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLnNhbml0aXplclN0eWxlKGB0cmFuc2xhdGUoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgpYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgc2FuaXRpemVyU3R5bGUodmFsOiBhbnkpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlKCR7LTEwMCAqIHZhbH0lLCAwcHgpYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5zZWxlY3QocHJldiA8IDAgPyBsZW4gOiBwcmV2KTtcbiAgfVxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIC8qKiBAZGVwcmVjYXRlZCB1c2Ugc3JjSW1nICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdJbWdTdHlsZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWctJHt2YWx1ZX1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX25hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0ltZ1N0eWxlLCB0aGlzLmNsYXNzTmFtZSk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBuZXdJbWdTdHlsZTtcbiAgfVxuICBwcml2YXRlIF9jYXJvdXNlbDogTHlDYXJvdXNlbDtcbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIGNhcm91c2VsOiBMeUNhcm91c2VsLFxuICAgIHByaXZhdGUgY2Fyb3VzZWxTZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fY2Fyb3VzZWwgPSBjYXJvdXNlbDtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuY29uc3QgTFlfQ0FST1VTRUxfRElSRUNUSVZFUyA9IFtMeUNhcm91c2VsSXRlbSwgTHlDYXJvdXNlbF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMWV9DQVJPVVNFTF9ESVJFQ1RJVkVTXSxcbiAgZGVjbGFyYXRpb25zOiBbTFlfQ0FST1VTRUxfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJvdXNlbE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFNRSx5QkFDVTtRQUFBLGNBQVMsR0FBVCxTQUFTO0tBQ2Y7O2dCQU5MLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSFEsU0FBUzs7OzBCQURsQjs7Ozs7OztBQ0FBOzs7SUEyQkUsVUFBTztJQUNQLFNBQU07OzBCQUROLE9BQU87MEJBQ1AsTUFBTTs7SUF3Tk4sb0JBQ1UsWUFDQSxXQUNBLElBQ0EsT0FDQSxVQUNxQixV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