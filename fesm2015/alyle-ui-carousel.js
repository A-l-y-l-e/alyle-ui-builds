import { __decorate } from 'tslib';
import { ElementRef, ChangeDetectorRef, Renderer2, ViewChild, ContentChildren, forwardRef, Input, Component, ChangeDetectionStrategy, Directive, NgModule } from '@angular/core';
import { DirAlias, keyframesUniqueId, st2c, StyleCollection, toBoolean, Platform, LyTheme2, LyCommonModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/** Default interval in ms */
const DEFAULT_INTERVAL = 7000;
const DEFAULT_AUTOPLAY = true;
const DEFAULT_HAS_PROGRESS_BAR = false;
const STYLE_PRIORITY = -2;
const STYLES = (theme, ref) => {
    const dir = theme.getDirection(DirAlias.before);
    const right = dir === 'right' ? 0 : 180;
    const left = dir === 'left' ? 0 : 180;
    const carousel = ref.selectorsOf(STYLES);
    const barAnimation = keyframesUniqueId.next();
    const { after, before } = theme;
    return {
        $priority: STYLE_PRIORITY,
        $global: (className) => `@keyframes ${barAnimation}{${className} 0%{transform:translateX(0%);}${className} 100%{transform:translateX(${dir === 'left' ? '-' : ''}100%);}}`,
        root: () => (className) => `${className}{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;position:relative;}${st2c(((theme.carousel
            && theme.carousel.root
            && (theme.carousel.root instanceof StyleCollection
                ? theme.carousel.root.setTransformer(fn => fn(carousel))
                : theme.carousel.root(carousel)))), `${className}`)}${className} ${carousel.actions}.right{${after}:0;transform:rotate(${right}deg);}${className} ${carousel.actions}.left{${before}:0;transform:rotate(${left}deg);}${className} svg{display:block;fill:currentColor;}`,
        actions: (className) => `${className}{position:absolute;top:0;bottom:0;margin:auto .25em;height:1em;width:1em;font-size:36px;cursor:pointer;background:${theme.background.primary.default.alpha(.25)};color:${theme.text.primary};will-change:transform;}`,
        slideContainer: (className) => `${className}{overflow:hidden;display:block;width:100%;height:100%;position:relative;touch-action:pan-y !important;}`,
        slide: (className) => `${className}{display:flex;width:100%;height:100%;will-change:transform;}${className} > ly-carousel-item{width:100%;flex-shrink:0;position:relative;background-size:cover;background-position:center;background-repeat:no-repeat;}`,
        slideContent: (className) => `${className}{display:flex;}`,
        slideAnim: (className) => `${className} > div{transition:transform 750ms cubic-bezier(.1, 1, 0.5, 1);}`,
        slideNoEvent: (className) => `${className}>div{touch-action:initial !important;-webkit-user-drag:initial !important;}`,
        carouselIndicators: (className) => `${className}{position:absolute;bottom:0;left:0;right:0;margin:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:48px;}${className}>div{display:inline-block;border-radius:50%;cursor:pointer;position:relative;padding:.5em;outline:none;}${className}>div },${className}>div>div > span{transition:300ms cubic-bezier(0.65, 0.05, 0.36, 1);width:1em;height:1em;transform:scale(.5);border-radius:50%;will-change:transform;display:block;opacity:.65;}${className}>div } },'${className}>div }>div>span.active,${className}>div>div > span },'${className}>div>div > span>div>span.active{transform:scale(1);opacity:1;}`,
        barContainer: (className) => `${className}{background:${theme.background.primary.default.alpha(.25)};height:4px;position:absolute;bottom:0;width:100%;}`,
        bar: (className) => `${className}{height:4px;position:absolute;bottom:0;width:100%;animation-name:${barAnimation};animation-timing-function:linear;animation-iteration-count:infinite;background:${theme.text.primary};}`
    };
};
/** @docs-private */
var CarouselMode;
(function (CarouselMode) {
    /** full */
    CarouselMode[CarouselMode["default"] = 0] = "default";
    CarouselMode[CarouselMode["inline"] = 1] = "inline";
})(CarouselMode || (CarouselMode = {}));
let LyCarousel = class LyCarousel {
    constructor(_el, _cd, _theme, _renderer) {
        this._el = _el;
        this._cd = _cd;
        this._theme = _theme;
        this._renderer = _renderer;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._intervalFn = null;
        /** @docs-private */
        this.mode = CarouselMode.default;
        this.selectedIndex = 0;
        this._interval = DEFAULT_INTERVAL;
        /** Emits whenever the component is destroyed. */
        this._destroy = new Subject();
        this._renderer.addClass(_el.nativeElement, this.classes.root);
    }
    /** @internal */
    get _isIntervalFn() {
        return !!this._intervalFn;
    }
    /**
     * It will pause the slide change when the mouse cursor passes
     * through the carousel.
     */
    get pauseOnHover() {
        return this._pauseOnHover;
    }
    set pauseOnHover(val) {
        const newVal = toBoolean(val);
        this._pauseOnHover = newVal;
    }
    set touch(val) {
        const newVal = toBoolean(val);
        this._touch = newVal;
        if (newVal) {
            this._renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
        }
        else {
            this._renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
        }
    }
    get touch() {
        return this._touch;
    }
    set autoplay(val) {
        const newVal = toBoolean(val);
        this._autoplay = newVal;
        if (newVal) {
            this._resetInterval();
        }
        else {
            this.stop();
        }
    }
    get autoplay() {
        return this._autoplay;
    }
    set hasProgressBar(val) {
        const newVal = toBoolean(val);
        this._hasProgressBar = newVal;
    }
    get hasProgressBar() {
        return this._hasProgressBar;
    }
    set interval(val) {
        this._interval = val;
        this._resetInterval();
    }
    get interval() {
        return this._interval;
    }
    ngOnInit() {
        if (!this.touch) {
            this.touch = false;
        }
        if (this.autoplay == null) {
            this.autoplay = DEFAULT_AUTOPLAY;
        }
        if (this.hasProgressBar == null) {
            this.hasProgressBar = DEFAULT_HAS_PROGRESS_BAR;
        }
    }
    ngAfterViewInit() {
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
        this.lyItems.changes.pipe(takeUntil(this._destroy)).subscribe(() => this._markForCheck());
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        if (Platform.isBrowser) {
            this.stop();
        }
    }
    _onMouseEnter() {
        if (this.pauseOnHover) {
            this.stop();
        }
    }
    _onMouseLeave() {
        if (this.pauseOnHover) {
            this._resetInterval();
        }
    }
    /** @docs-private */
    _onDragStart() {
        this.stop();
        this._renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._selectedElement = this.lyItems.find((_item, index) => index === this.selectedIndex)._nativeElement;
    }
    _onDrag(e) {
        const rect = this._selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
        else {
            this._onPan(rect.width * Math.sign(e.deltaX));
        }
    }
    _onDragEnd(e) {
        const rect = this._selectedElement.getBoundingClientRect();
        const dir = this._theme.variables.getDirection(DirAlias.before);
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
    }
    _onDragCancel() {
        this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this._select(this.selectedIndex);
        this._resetInterval();
    }
    _select(val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._slideClass = this._theme.addStyle(`lyCarousel.select:${val.toString(32)}`, (theme) => {
                const sign = theme.getDirection(DirAlias.before) === 'left' ? -1 : 1;
                return {
                    transform: `translateX(${100 * val * sign}%)`
                };
            }, this._slide.nativeElement, this._slideClass, STYLE_PRIORITY);
        }
        if (!notResetInterval) {
            if (this.autoplay && !this.pauseOnHover) {
                this._resetInterval();
            }
        }
    }
    prev() {
        const len = this.lyItems.length - 1;
        const prev = this.selectedIndex - 1;
        this._select(prev < 0 ? len : prev);
    }
    next(notResetInterval) {
        const len = this.lyItems.length - 1;
        const next = this.selectedIndex + 1;
        this._select(next > len ? 0 : next, notResetInterval);
    }
    stop() {
        if (this._intervalFn !== null) {
            clearInterval(this._intervalFn);
            this._intervalFn = null;
        }
    }
    _resetInterval() {
        if (Platform.isBrowser) {
            this.stop();
            this._restartProgressBarAnimation();
            this._markForCheck();
            this._intervalFn = setInterval(() => {
                this.next(true);
                this._restartProgressBarAnimation();
                this._markForCheck();
            }, this.interval);
        }
    }
    _restartProgressBarAnimation() {
        if (this.hasProgressBar && this._progressBar) {
            const el = this._progressBar.nativeElement;
            // Hack for restart animation
            el.style.animationName = 'øfakeName';
            window.getComputedStyle(el).getPropertyValue('opacity');
            el.style.animationName = '';
        }
    }
    _onPan(x) {
        const sign = this._theme.variables.getDirection(DirAlias.before) === 'left' ? -1 : 1;
        this._renderer.setStyle(this._slide.nativeElement, 'transform', `translateX(calc(${sign * 100 * this.selectedIndex}% + ${x}px))`);
    }
    _markForCheck() {
        this._cd.markForCheck();
    }
};
LyCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: Renderer2 }
];
__decorate([
    ViewChild('slideContainer', { static: false })
], LyCarousel.prototype, "slideContainer", void 0);
__decorate([
    ViewChild('_slide', { static: false })
], LyCarousel.prototype, "_slide", void 0);
__decorate([
    ViewChild('_progressBar', { static: false })
], LyCarousel.prototype, "_progressBar", void 0);
__decorate([
    ContentChildren(forwardRef(() => LyCarouselItem))
], LyCarousel.prototype, "lyItems", void 0);
__decorate([
    Input()
], LyCarousel.prototype, "mode", void 0);
__decorate([
    Input()
], LyCarousel.prototype, "selectedIndex", void 0);
__decorate([
    Input()
], LyCarousel.prototype, "pauseOnHover", null);
__decorate([
    Input()
], LyCarousel.prototype, "touch", null);
__decorate([
    Input()
], LyCarousel.prototype, "autoplay", null);
__decorate([
    Input()
], LyCarousel.prototype, "hasProgressBar", null);
__decorate([
    Input()
], LyCarousel.prototype, "interval", null);
LyCarousel = __decorate([
    Component({
        selector: 'ly-carousel',
        template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n    <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; index as i\"\n    >\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"></span>\n    </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div\n    [className]=\"classes.barContainer\"\n    *ngIf=\"hasProgressBar && _isIntervalFn && interval && autoplay\"\n  >\n    <div\n      [className]=\"classes.bar\"\n      #_progressBar\n      [style.animation-duration]=\"interval + 'ms'\"\n    ></div>\n  </div>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        host: {
            '(mouseenter)': '_onMouseEnter()',
            '(mouseleave)': '_onMouseLeave()'
        }
    })
], LyCarousel);
let LyCarouselItem = class LyCarouselItem {
    constructor(_theme, _el) {
        this._theme = _theme;
        this._nativeElement = _el.nativeElement;
    }
    set srcImg(value) {
        this._className = this._theme.addStyle(`ly-carousel-img:${value}`, (`background-image: url('${value}')`), this._nativeElement, this._className, STYLE_PRIORITY);
    }
};
LyCarouselItem.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
__decorate([
    Input()
], LyCarouselItem.prototype, "srcImg", null);
LyCarouselItem = __decorate([
    Directive({
        selector: 'ly-carousel-item'
    })
], LyCarouselItem);

let LyCarouselModule = class LyCarouselModule {
};
LyCarouselModule = __decorate([
    NgModule({
        imports: [CommonModule, LyCommonModule],
        exports: [LyCarouselItem, LyCarousel, LyCommonModule],
        declarations: [LyCarouselItem, LyCarousel]
    })
], LyCarouselModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CarouselMode, LyCarousel, LyCarouselItem, LyCarouselModule, STYLES };
//# sourceMappingURL=alyle-ui-carousel.js.map
