import * as tslib_1 from "tslib";
import { Component, Directive, QueryList, ContentChildren, Input, AfterViewInit, OnDestroy, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Platform, LyTheme2, toBoolean, ThemeVariables, DirAlias, ThemeRef, styleTemplateToString, keyframesUniqueId, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/** Default interval in ms */
const DEFAULT_INTERVAL = 7000;
const DEFAULT_AUTOPLAY = true;
const DEFAULT_HAS_PROGRESS_BAR = false;
const STYLE_PRIORITY = -2;
export const STYLES = (theme, ref) => {
    const dir = theme.getDirection(DirAlias.before);
    const right = dir === 'right' ? 0 : 180;
    const left = dir === 'left' ? 0 : 180;
    const carousel = ref.selectorsOf(STYLES);
    const barAnimation = keyframesUniqueId.next();
    const { after, before } = theme;
    return {
        $priority: STYLE_PRIORITY,
        $global: (className) => `@keyframes ${barAnimation}{${className} 0%{transform:translateX(0%);}${className} 100%{transform:translateX(${dir === 'left' ? '-' : ''}100%);}}`,
        root: () => (className) => `${className}{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;position:relative;}${styleTemplateToString(((theme.carousel
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
export var CarouselMode;
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
tslib_1.__decorate([
    ViewChild('slideContainer', { static: false })
], LyCarousel.prototype, "slideContainer", void 0);
tslib_1.__decorate([
    ViewChild('_slide', { static: false })
], LyCarousel.prototype, "_slide", void 0);
tslib_1.__decorate([
    ViewChild('_progressBar', { static: false })
], LyCarousel.prototype, "_progressBar", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyCarouselItem))
], LyCarousel.prototype, "lyItems", void 0);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "mode", void 0);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "selectedIndex", void 0);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "pauseOnHover", null);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "touch", null);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "autoplay", null);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "hasProgressBar", null);
tslib_1.__decorate([
    Input()
], LyCarousel.prototype, "interval", null);
LyCarousel = tslib_1.__decorate([
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
export { LyCarousel };
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
tslib_1.__decorate([
    Input()
], LyCarouselItem.prototype, "srcImg", null);
LyCarouselItem = tslib_1.__decorate([
    Directive({
        selector: 'ly-carousel-item'
    })
], LyCarouselItem);
export { LyCarouselItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxRQUFRLEVBQ1IsUUFBUSxFQUNSLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsNkJBQTZCO0FBQzdCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLE1BQU0sd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBWTFCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTJDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbkYsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsTUFBTSxLQUFLLEdBQUcsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDeEMsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDdEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNoQyxPQUFPO1FBQ0wsU0FBUyxFQUFFLGNBQWM7UUFDekIsT0FBTyxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsY0FBYyxZQUFZLElBQUksU0FBUyxpQ0FBaUMsU0FBUyw4QkFBOEIsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVU7UUFDbEwsSUFBSSxFQUFFLEdBQUksRUFBRSxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLHlHQUF5RyxxQkFBcUIsQ0FBQyxDQUN6SyxDQUFDLEtBQUssQ0FBQyxRQUFRO2VBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO2VBQ25CLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDaEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ25DLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsU0FBUyxJQUFJLFFBQVEsQ0FBQyxPQUFPLFVBQVUsS0FBSyx1QkFBdUIsS0FBSyxTQUFTLFNBQVMsSUFBSSxRQUFRLENBQUMsT0FBTyxTQUFTLE1BQU0sdUJBQXVCLElBQUksU0FBUyxTQUFTLHdDQUF3QztRQUM5TyxPQUFPLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMscUhBQXFILEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLDBCQUEwQjtRQUNsUSxjQUFjLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMseUdBQXlHO1FBQzVKLEtBQUssRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUywrREFBK0QsU0FBUywrSUFBK0k7UUFDalEsWUFBWSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLGlCQUFpQjtRQUNsRSxTQUFTLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsaUVBQWlFO1FBQy9HLFlBQVksRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyw2RUFBNkU7UUFDOUgsa0JBQWtCLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsaUpBQWlKLFNBQVMsMkdBQTJHLFNBQVMsVUFBVSxTQUFTLGtMQUFrTCxTQUFTLGFBQWEsU0FBUywwQkFBMEIsU0FBUyxzQkFBc0IsU0FBUyxnRUFBZ0U7UUFDM3FCLFlBQVksRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxlQUFlLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHFEQUFxRDtRQUNoSyxHQUFHLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsb0VBQW9FLFlBQVksbUZBQW1GLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJO0tBQ2xPLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixvQkFBb0I7QUFDcEIsTUFBTSxDQUFOLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QixXQUFXO0lBQ1gscURBQU8sQ0FBQTtJQUNQLG1EQUFNLENBQUE7QUFDUixDQUFDLEVBSlcsWUFBWSxLQUFaLFlBQVksUUFJdkI7QUFZRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBc0ZyQixZQUNVLEdBQWUsRUFDZixHQUFzQixFQUN0QixNQUFnQixFQUNoQixTQUFvQjtRQUhwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBekY5QixvQkFBb0I7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO1FBSzFDLG9CQUFvQjtRQUNYLFNBQUksR0FBaUIsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUtuQixjQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFHckMsaURBQWlEO1FBQ2hDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBeUU5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXhFRCxnQkFBZ0I7SUFDaEIsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBRUgsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxHQUFZO1FBQzNCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBSUQsSUFBSSxLQUFLLENBQUMsR0FBWTtRQUNwQixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9FO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBR0QsSUFBSSxRQUFRLENBQUMsR0FBWTtRQUN2QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBR0QsSUFBSSxjQUFjLENBQUMsR0FBWTtRQUM3QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUdELElBQUksUUFBUSxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLHdCQUF3QixDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLFlBQVk7UUFDVixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUMsY0FBYyxDQUFDO0lBQzVHLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBQztRQUNQLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQUM7UUFDVixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMzRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFakMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtpQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtTQUNGO2FBQU0sSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQzVCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2hDLElBQUksU0FBUyxLQUFLLFdBQVcsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO3dCQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNiO2lCQUNGO3FCQUFNLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtvQkFDckMsSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO3dCQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsZ0JBQTBCO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ3JDLHFCQUFxQixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDLENBQUMsS0FBcUIsRUFBRSxFQUFFO2dCQUN4QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLE9BQU87b0JBQ0wsU0FBUyxFQUFFLGNBQWMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUk7aUJBQzlDLENBQUM7WUFDSixDQUFDLEVBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLGNBQWMsQ0FDZixDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksQ0FBQyxnQkFBMEI7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDN0IsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFRLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU8sNEJBQTRCO1FBQ2xDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRTVDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1lBRTNDLDZCQUE2QjtZQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7WUFDckMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUU3QjtJQUNILENBQUM7SUFFTyxNQUFNLENBQUMsQ0FBQztRQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckksQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBRUYsQ0FBQTs7WUFyTGdCLFVBQVU7WUFDVixpQkFBaUI7WUFDZCxRQUFRO1lBQ0wsU0FBUzs7QUF0RmtCO0lBQS9DLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrREFBNEI7QUFDbkM7SUFBdkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FBb0I7QUFDYjtJQUE3QyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dEQUEwQztBQUNwQztJQUFsRCxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzJDQUFvQztBQUU3RTtJQUFSLEtBQUssRUFBRTt3Q0FBMkM7QUFDMUM7SUFBUixLQUFLLEVBQUU7aURBQW1CO0FBcUIzQjtJQURDLEtBQUssRUFBRTs4Q0FHUDtBQVFEO0lBREMsS0FBSyxFQUFFO3VDQVNQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7MENBU1A7QUFNRDtJQURDLEtBQUssRUFBRTtnREFJUDtBQU1EO0lBREMsS0FBSyxFQUFFOzBDQUlQO0FBakZVLFVBQVU7SUFWdEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsODNDQUE4QjtRQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxtQkFBbUIsRUFBRSxLQUFLO1FBQzFCLElBQUksRUFBRTtZQUNKLGNBQWMsRUFBRSxpQkFBaUI7WUFDakMsY0FBYyxFQUFFLGlCQUFpQjtTQUNsQztLQUNGLENBQUM7R0FDVyxVQUFVLENBNFF0QjtTQTVRWSxVQUFVO0FBaVJ2QixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBZXpCLFlBQ1UsTUFBZ0IsRUFDeEIsR0FBZTtRQURQLFdBQU0sR0FBTixNQUFNLENBQVU7UUFHeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzFDLENBQUM7SUFqQkQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNwQyxtQkFBbUIsS0FBSyxFQUFFLEVBQUUsQ0FDMUIsMEJBQTBCLEtBQUssSUFBSSxDQUNwQyxFQUNELElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUNoQyxDQUFDO0lBQ0osQ0FBQztDQVdGLENBQUE7O1lBTm1CLFFBQVE7WUFDbkIsVUFBVTs7QUFkakI7SUFEQyxLQUFLLEVBQUU7NENBU1A7QUFYVSxjQUFjO0lBSDFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztHQUNXLGNBQWMsQ0FzQjFCO1NBdEJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICBMeVRoZW1lMixcbiAgdG9Cb29sZWFuLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgRGlyQWxpYXMsXG4gIFRoZW1lUmVmLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIGtleWZyYW1lc1VuaXF1ZUlkLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBEZWZhdWx0IGludGVydmFsIGluIG1zICovXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMID0gNzAwMDtcbmNvbnN0IERFRkFVTFRfQVVUT1BMQVkgPSB0cnVlO1xuY29uc3QgREVGQVVMVF9IQVNfUFJPR1JFU1NfQkFSID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5Q2Fyb3VzZWxUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIENhcm91c2VsIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDYXJvdXNlbFZhcmlhYmxlcyB7XG4gIGNhcm91c2VsPzogTHlDYXJvdXNlbFRoZW1lO1xufVxuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5Q2Fyb3VzZWxWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgZGlyID0gdGhlbWUuZ2V0RGlyZWN0aW9uKERpckFsaWFzLmJlZm9yZSk7XG4gIGNvbnN0IHJpZ2h0ID0gZGlyID09PSAncmlnaHQnID8gMCA6IDE4MDtcbiAgY29uc3QgbGVmdCA9IGRpciA9PT0gJ2xlZnQnID8gMCA6IDE4MDtcbiAgY29uc3QgY2Fyb3VzZWwgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgYmFyQW5pbWF0aW9uID0ga2V5ZnJhbWVzVW5pcXVlSWQubmV4dCgpO1xuICBjb25zdCB7IGFmdGVyLCBiZWZvcmUgfSA9IHRoZW1lO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJGdsb2JhbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQGtleWZyYW1lcyAke2JhckFuaW1hdGlvbn17JHtjbGFzc05hbWV9IDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDAlKTt9JHtjbGFzc05hbWV9IDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoJHtkaXIgPT09ICdsZWZ0JyA/ICctJyA6ICcnfTEwMCUpO319YCxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5jYXJvdXNlbFxuICAgICAgICAgICAgJiYgdGhlbWUuY2Fyb3VzZWwucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmNhcm91c2VsLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5jYXJvdXNlbC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNhcm91c2VsKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5jYXJvdXNlbC5yb290KGNhcm91c2VsKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSAke2Nhcm91c2VsLmFjdGlvbnN9LnJpZ2h0eyR7YWZ0ZXJ9OjA7dHJhbnNmb3JtOnJvdGF0ZSgke3JpZ2h0fWRlZyk7fSR7Y2xhc3NOYW1lfSAke2Nhcm91c2VsLmFjdGlvbnN9LmxlZnR7JHtiZWZvcmV9OjA7dHJhbnNmb3JtOnJvdGF0ZSgke2xlZnR9ZGVnKTt9JHtjbGFzc05hbWV9IHN2Z3tkaXNwbGF5OmJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO31gLFxuICAgIGFjdGlvbnM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDttYXJnaW46YXV0byAuMjVlbTtoZWlnaHQ6MWVtO3dpZHRoOjFlbTtmb250LXNpemU6MzZweDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQuYWxwaGEoLjI1KX07Y29sb3I6JHt0aGVtZS50ZXh0LnByaW1hcnl9O3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt9YCxcbiAgICBzbGlkZUNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dG91Y2gtYWN0aW9uOnBhbi15ICFpbXBvcnRhbnQ7fWAsXG4gICAgc2xpZGU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07fSR7Y2xhc3NOYW1lfSA+IGx5LWNhcm91c2VsLWl0ZW17d2lkdGg6MTAwJTtmbGV4LXNocmluazowO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7fWAsXG4gICAgc2xpZGVDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O31gLFxuICAgIHNsaWRlQW5pbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ID4gZGl2e3RyYW5zaXRpb246dHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTt9YCxcbiAgICBzbGlkZU5vRXZlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfT5kaXZ7dG91Y2gtYWN0aW9uOmluaXRpYWwgIWltcG9ydGFudDstd2Via2l0LXVzZXItZHJhZzppbml0aWFsICFpbXBvcnRhbnQ7fWAsXG4gICAgY2Fyb3VzZWxJbmRpY2F0b3JzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOjA7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6NDhweDt9JHtjbGFzc05hbWV9PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOi41ZW07b3V0bGluZTpub25lO30ke2NsYXNzTmFtZX0+ZGl2IH0sJHtjbGFzc05hbWV9PmRpdj5kaXYgPiBzcGFue3RyYW5zaXRpb246MzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO3dpZHRoOjFlbTtoZWlnaHQ6MWVtO3RyYW5zZm9ybTpzY2FsZSguNSk7Ym9yZGVyLXJhZGl1czo1MCU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO2Rpc3BsYXk6YmxvY2s7b3BhY2l0eTouNjU7fSR7Y2xhc3NOYW1lfT5kaXYgfSB9LCcke2NsYXNzTmFtZX0+ZGl2IH0+ZGl2PnNwYW4uYWN0aXZlLCR7Y2xhc3NOYW1lfT5kaXY+ZGl2ID4gc3BhbiB9LCcke2NsYXNzTmFtZX0+ZGl2PmRpdiA+IHNwYW4+ZGl2PnNwYW4uYWN0aXZle3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjE7fWAsXG4gICAgYmFyQ29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17YmFja2dyb3VuZDoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LmFscGhhKC4yNSl9O2hlaWdodDo0cHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7d2lkdGg6MTAwJTt9YCxcbiAgICBiYXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtoZWlnaHQ6NHB4O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3dpZHRoOjEwMCU7YW5pbWF0aW9uLW5hbWU6JHtiYXJBbmltYXRpb259O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YmFja2dyb3VuZDoke3RoZW1lLnRleHQucHJpbWFyeX07fWBcbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAnX29uTW91c2VFbnRlcigpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ19vbk1vdXNlTGVhdmUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19zbGlkZScsIHsgc3RhdGljOiBmYWxzZSB9KSBfc2xpZGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19wcm9ncmVzc0JhcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcHJvZ3Jlc3NCYXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90b3VjaDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYXV0b3BsYXk6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1Byb2dyZXNzQmFyOiBib29sZWFuO1xuICBwcml2YXRlIF9pbnRlcnZhbCA9IERFRkFVTFRfSU5URVJWQUw7XG4gIHByaXZhdGUgX3NsaWRlQ2xhc3M6IHN0cmluZztcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0IF9pc0ludGVydmFsRm4oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5faW50ZXJ2YWxGbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdCB3aWxsIHBhdXNlIHRoZSBzbGlkZSBjaGFuZ2Ugd2hlbiB0aGUgbW91c2UgY3Vyc29yIHBhc3Nlc1xuICAgKiB0aHJvdWdoIHRoZSBjYXJvdXNlbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYXVzZU9uSG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlT25Ib3ZlcjtcbiAgfVxuICBzZXQgcGF1c2VPbkhvdmVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3BhdXNlT25Ib3ZlciA9IG5ld1ZhbDtcbiAgfVxuICBwcml2YXRlIF9wYXVzZU9uSG92ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IHRvdWNoKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3RvdWNoID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhdXRvcGxheSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9hdXRvcGxheSA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuICBnZXQgYXV0b3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9wbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc1Byb2dyZXNzQmFyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2hhc1Byb2dyZXNzQmFyID0gbmV3VmFsO1xuICB9XG4gIGdldCBoYXNQcm9ncmVzc0JhcigpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzUHJvZ3Jlc3NCYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW50ZXJ2YWwodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbDtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cbiAgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICB0aGlzLnRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9wbGF5ID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3BsYXkgPSBERUZBVUxUX0FVVE9QTEFZO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNQcm9ncmVzc0JhciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmhhc1Byb2dyZXNzQmFyID0gREVGQVVMVF9IQVNfUFJPR1JFU1NfQkFSO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG5cbiAgICB0aGlzLmx5SXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX21hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICh0aGlzLnBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX29uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoX2l0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSEuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUGFuKHJlY3Qud2lkdGggKiBNYXRoLnNpZ24oZS5kZWx0YVgpKTtcbiAgICB9XG4gIH1cblxuICBfb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoTWF0aC5hYnMoZS52ZWxvY2l0eSkgPj0gMC4yNSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fc2xpZGUubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICB9XG5cbiAgX29uRHJhZ0NhbmNlbCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIF9zZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9zbGlkZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUNhcm91c2VsLnNlbGVjdDoke3ZhbC50b1N0cmluZygzMil9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHNpZ24gPSB0aGVtZS5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7MTAwICogdmFsICogc2lnbn0lKWBcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9zbGlkZS5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zbGlkZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICBpZiAodGhpcy5hdXRvcGxheSAmJiAhdGhpcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5fc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5fc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMuX3Jlc3RhcnRQcm9ncmVzc0JhckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3Jlc3RhcnRQcm9ncmVzc0JhckFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXN0YXJ0UHJvZ3Jlc3NCYXJBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaGFzUHJvZ3Jlc3NCYXIgJiYgdGhpcy5fcHJvZ3Jlc3NCYXIpIHtcblxuICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcm9ncmVzc0Jhci5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAvLyBIYWNrIGZvciByZXN0YXJ0IGFuaW1hdGlvblxuICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICfDuGZha2VOYW1lJztcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgICBlbC5zdHlsZS5hbmltYXRpb25OYW1lID0gJyc7XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWChjYWxjKCR7c2lnbiAqIDEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCkpYCk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==