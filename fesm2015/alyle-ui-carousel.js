import * as _chroma from 'chroma-js';
import { Component, Directive, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Platform, LyTheme2, toBoolean, DirAlias, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
const chroma = _chroma;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const STYLES = (theme) => {
    /** @type {?} */
    const dir = theme.getDirection(DirAlias.before);
    /** @type {?} */
    const right = dir === 'right' ? 0 : 180;
    /** @type {?} */
    const left = dir === 'left' ? 0 : 180;
    return {
        root: {
            display: 'block',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            position: 'relative',
            '& {actions}.right': {
                after: 0,
                transform: `rotate(${right}deg)`
            },
            '& {actions}.left': {
                before: 0,
                transform: `rotate(${left}deg)`
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
const CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
CarouselMode[CarouselMode.default] = 'default';
CarouselMode[CarouselMode.inline] = 'inline';
class LyCarousel {
    /**
     * @param {?} _el
     * @param {?} _cd
     * @param {?} _theme
     * @param {?} _renderer
     */
    constructor(_el, _cd, _theme, _renderer) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set touch(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        this._touch = newVal;
        if (newVal) {
            this._renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
        }
        else {
            this._renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
        }
    }
    /**
     * @return {?}
     */
    get touch() {
        return this._touch;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.touch) {
            this.touch = false;
        }
        if (Platform.isBrowser) {
            this._resetInterval();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this.stop();
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _onDragStart() {
        this.stop();
        this._renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._selectedElement = this.lyItems.find((_item, index) => index === this.selectedIndex)._nativeElement;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _onDrag(e) {
        /** @type {?} */
        const rect = this._selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
        else {
            this._onPan(rect.width * Math.sign(e.deltaX));
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _onDragEnd(e) {
        /** @type {?} */
        const rect = this._selectedElement.getBoundingClientRect();
        /** @type {?} */
        const dir = this._theme.config.getDirection(DirAlias.before);
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
            const eventName = e.additionalEvent;
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
    }
    /**
     * @return {?}
     */
    _onDragCancel() {
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._select(this.selectedIndex);
        this._resetInterval();
    }
    /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    _select(val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._slideClass = this._theme.addStyle(`lyCarousel.select:${val.toString(32)}`, (theme) => {
                /** @type {?} */
                const sign = theme.getDirection(DirAlias.before) === 'left' ? -1 : 1;
                return {
                    transform: `translateX(${100 * val * sign}%)`
                };
            }, this._slide.nativeElement, this._slideClass, STYLE_PRIORITY);
        }
        if (!notResetInterval) {
            this._resetInterval();
        }
    }
    /**
     * @return {?}
     */
    prev() {
        /** @type {?} */
        const len = this.lyItems.length - 1;
        /** @type {?} */
        const prev = this.selectedIndex - 1;
        this._select(prev < 0 ? len : prev);
    }
    /**
     * @param {?=} notResetInterval
     * @return {?}
     */
    next(notResetInterval) {
        /** @type {?} */
        const len = this.lyItems.length - 1;
        /** @type {?} */
        const next = this.selectedIndex + 1;
        this._select(next > len ? 0 : next, notResetInterval);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this._intervalFn !== null) {
            clearInterval(this._intervalFn);
            this._intervalFn = null;
        }
    }
    /**
     * @return {?}
     */
    _resetInterval() {
        this.stop();
        this._intervalFn = setInterval(() => {
            this.next(true);
            this._markForCheck();
        }, this.interval);
    }
    /**
     * @param {?} x
     * @return {?}
     */
    _onPan(x) {
        /** @type {?} */
        const sign = this._theme.config.getDirection(DirAlias.before) === 'left' ? -1 : 1;
        this._renderer.setStyle(this._slide.nativeElement, 'transform', `translateX(calc(${sign * 100 * this.selectedIndex}% + ${x}px))`);
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this._cd.markForCheck();
    }
}
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
LyCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: Renderer2 }
];
LyCarousel.propDecorators = {
    slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
    _slide: [{ type: ViewChild, args: ['_slide',] }],
    lyItems: [{ type: ContentChildren, args: [forwardRef(() => LyCarouselItem),] }],
    mode: [{ type: Input }],
    interval: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    touch: [{ type: Input }]
};
class LyCarouselItem {
    /**
     * @param {?} _theme
     * @param {?} _el
     */
    constructor(_theme, _el) {
        this._theme = _theme;
        this._nativeElement = _el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set srcImg(value) {
        this._className = this._theme.addStyle(`ly-carousel-img:${value}`, (`background-image: url('${value}')`), this._nativeElement, this._className, STYLE_PRIORITY);
    }
}
LyCarouselItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-carousel-item'
            },] }
];
/** @nocollapse */
LyCarouselItem.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyCarouselItem.propDecorators = {
    srcImg: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyCarouselModule {
}
LyCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyCommonModule],
                exports: [LyCarouselItem, LyCarousel, LyCommonModule],
                declarations: [LyCarouselItem, LyCarousel]
            },] }
];

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

//# sourceMappingURL=alyle-ui-carousel.js.map