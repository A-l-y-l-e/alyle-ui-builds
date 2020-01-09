import * as tslib_1 from "tslib";
import { Component, Directive, QueryList, ContentChildren, Input, AfterViewInit, OnDestroy, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Platform, LyTheme2, toBoolean, ThemeVariables, DirAlias, ThemeRef, st2c, keyframesUniqueId, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxRQUFRLEVBQ1IsUUFBUSxFQUNSLElBQUksRUFDSixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsNkJBQTZCO0FBQzdCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLE1BQU0sd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBWTFCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTJDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbkYsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsTUFBTSxLQUFLLEdBQUcsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDeEMsTUFBTSxJQUFJ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QUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDcEMsbUJBQW1CLEtBQUssRUFBRSxFQUFFLENBQzFCLDBCQUEwQixLQUFLLElBQUksQ0FDcEMsRUFDRCxJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FDaEMsQ0FBQztJQUNKLENBQUM7Q0FXRixDQUFBOztZQU5tQixRQUFRO1lBQ25CLFVBQVU7O0FBZGpCO0lBREMsS0FBSyxFQUFFOzRDQVNQO0FBWFUsY0FBYztJQUgxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7R0FDVyxjQUFjLENBc0IxQjtTQXRCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgTHlUaGVtZTIsXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIERpckFsaWFzLFxuICBUaGVtZVJlZixcbiAgc3QyYyxcbiAga2V5ZnJhbWVzVW5pcXVlSWQsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqIERlZmF1bHQgaW50ZXJ2YWwgaW4gbXMgKi9cbmNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSA3MDAwO1xuY29uc3QgREVGQVVMVF9BVVRPUExBWSA9IHRydWU7XG5jb25zdCBERUZBVUxUX0hBU19QUk9HUkVTU19CQVIgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDYXJvdXNlbFRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgQ2Fyb3VzZWwgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUNhcm91c2VsVmFyaWFibGVzIHtcbiAgY2Fyb3VzZWw/OiBMeUNhcm91c2VsVGhlbWU7XG59XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlDYXJvdXNlbFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBkaXIgPSB0aGVtZS5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgY29uc3QgcmlnaHQgPSBkaXIgPT09ICdyaWdodCcgPyAwIDogMTgwO1xuICBjb25zdCBsZWZ0ID0gZGlyID09PSAnbGVmdCcgPyAwIDogMTgwO1xuICBjb25zdCBjYXJvdXNlbCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCBiYXJBbmltYXRpb24gPSBrZXlmcmFtZXNVbmlxdWVJZC5uZXh0KCk7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICAkZ2xvYmFsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAa2V5ZnJhbWVzICR7YmFyQW5pbWF0aW9ufXske2NsYXNzTmFtZX0gMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCUpO30ke2NsYXNzTmFtZX0gMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgke2RpciA9PT0gJ2xlZnQnID8gJy0nIDogJyd9MTAwJSk7fX1gLFxuICAgIHJvb3Q6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jazstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5jYXJvdXNlbFxuICAgICAgICAgICAgJiYgdGhlbWUuY2Fyb3VzZWwucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmNhcm91c2VsLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5jYXJvdXNlbC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNhcm91c2VsKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5jYXJvdXNlbC5yb290KGNhcm91c2VsKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSAke2Nhcm91c2VsLmFjdGlvbnN9LnJpZ2h0eyR7YWZ0ZXJ9OjA7dHJhbnNmb3JtOnJvdGF0ZSgke3JpZ2h0fWRlZyk7fSR7Y2xhc3NOYW1lfSAke2Nhcm91c2VsLmFjdGlvbnN9LmxlZnR7JHtiZWZvcmV9OjA7dHJhbnNmb3JtOnJvdGF0ZSgke2xlZnR9ZGVnKTt9JHtjbGFzc05hbWV9IHN2Z3tkaXNwbGF5OmJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO31gLFxuICAgIGFjdGlvbnM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDttYXJnaW46YXV0byAuMjVlbTtoZWlnaHQ6MWVtO3dpZHRoOjFlbTtmb250LXNpemU6MzZweDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQuYWxwaGEoLjI1KX07Y29sb3I6JHt0aGVtZS50ZXh0LnByaW1hcnl9O3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt9YCxcbiAgICBzbGlkZUNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dG91Y2gtYWN0aW9uOnBhbi15ICFpbXBvcnRhbnQ7fWAsXG4gICAgc2xpZGU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07fSR7Y2xhc3NOYW1lfSA+IGx5LWNhcm91c2VsLWl0ZW17d2lkdGg6MTAwJTtmbGV4LXNocmluazowO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7fWAsXG4gICAgc2xpZGVDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O31gLFxuICAgIHNsaWRlQW5pbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ID4gZGl2e3RyYW5zaXRpb246dHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTt9YCxcbiAgICBzbGlkZU5vRXZlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfT5kaXZ7dG91Y2gtYWN0aW9uOmluaXRpYWwgIWltcG9ydGFudDstd2Via2l0LXVzZXItZHJhZzppbml0aWFsICFpbXBvcnRhbnQ7fWAsXG4gICAgY2Fyb3VzZWxJbmRpY2F0b3JzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOjA7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6NDhweDt9JHtjbGFzc05hbWV9PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOi41ZW07b3V0bGluZTpub25lO30ke2NsYXNzTmFtZX0+ZGl2IH0sJHtjbGFzc05hbWV9PmRpdj5kaXYgPiBzcGFue3RyYW5zaXRpb246MzAwbXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpO3dpZHRoOjFlbTtoZWlnaHQ6MWVtO3RyYW5zZm9ybTpzY2FsZSguNSk7Ym9yZGVyLXJhZGl1czo1MCU7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO2Rpc3BsYXk6YmxvY2s7b3BhY2l0eTouNjU7fSR7Y2xhc3NOYW1lfT5kaXYgfSB9LCcke2NsYXNzTmFtZX0+ZGl2IH0+ZGl2PnNwYW4uYWN0aXZlLCR7Y2xhc3NOYW1lfT5kaXY+ZGl2ID4gc3BhbiB9LCcke2NsYXNzTmFtZX0+ZGl2PmRpdiA+IHNwYW4+ZGl2PnNwYW4uYWN0aXZle3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjE7fWAsXG4gICAgYmFyQ29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17YmFja2dyb3VuZDoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LmFscGhhKC4yNSl9O2hlaWdodDo0cHg7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7d2lkdGg6MTAwJTt9YCxcbiAgICBiYXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtoZWlnaHQ6NHB4O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3dpZHRoOjEwMCU7YW5pbWF0aW9uLW5hbWU6JHtiYXJBbmltYXRpb259O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YmFja2dyb3VuZDoke3RoZW1lLnRleHQucHJpbWFyeX07fWBcbiAgfTtcbn07XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgZW51bSBDYXJvdXNlbE1vZGUge1xuICAvKiogZnVsbCAqL1xuICBkZWZhdWx0LFxuICBpbmxpbmVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICcobW91c2VlbnRlciknOiAnX29uTW91c2VFbnRlcigpJyxcbiAgICAnKG1vdXNlbGVhdmUpJzogJ19vbk1vdXNlTGVhdmUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9pbnRlcnZhbEZuOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnc2xpZGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19zbGlkZScsIHsgc3RhdGljOiBmYWxzZSB9KSBfc2xpZGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19wcm9ncmVzc0JhcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcHJvZ3Jlc3NCYXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlDYXJvdXNlbEl0ZW0pKSBseUl0ZW1zOiBRdWVyeUxpc3Q8THlDYXJvdXNlbEl0ZW0+O1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKSBtb2RlOiBDYXJvdXNlbE1vZGUgPSBDYXJvdXNlbE1vZGUuZGVmYXVsdDtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90b3VjaDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYXV0b3BsYXk6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1Byb2dyZXNzQmFyOiBib29sZWFuO1xuICBwcml2YXRlIF9pbnRlcnZhbCA9IERFRkFVTFRfSU5URVJWQUw7XG4gIHByaXZhdGUgX3NsaWRlQ2xhc3M6IHN0cmluZztcblxuICAvKiogRW1pdHMgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0IF9pc0ludGVydmFsRm4oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5faW50ZXJ2YWxGbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdCB3aWxsIHBhdXNlIHRoZSBzbGlkZSBjaGFuZ2Ugd2hlbiB0aGUgbW91c2UgY3Vyc29yIHBhc3Nlc1xuICAgKiB0aHJvdWdoIHRoZSBjYXJvdXNlbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYXVzZU9uSG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlT25Ib3ZlcjtcbiAgfVxuICBzZXQgcGF1c2VPbkhvdmVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3BhdXNlT25Ib3ZlciA9IG5ld1ZhbDtcbiAgfVxuICBwcml2YXRlIF9wYXVzZU9uSG92ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IHRvdWNoKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3RvdWNoID0gbmV3VmFsO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVOb0V2ZW50KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhdXRvcGxheSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9hdXRvcGxheSA9IG5ld1ZhbDtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfVxuICBnZXQgYXV0b3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9wbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc1Byb2dyZXNzQmFyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2hhc1Byb2dyZXNzQmFyID0gbmV3VmFsO1xuICB9XG4gIGdldCBoYXNQcm9ncmVzc0JhcigpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzUHJvZ3Jlc3NCYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaW50ZXJ2YWwodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbDtcbiAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gIH1cbiAgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICB0aGlzLnRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9wbGF5ID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3BsYXkgPSBERUZBVUxUX0FVVE9QTEFZO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNQcm9ncmVzc0JhciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmhhc1Byb2dyZXNzQmFyID0gREVGQVVMVF9IQVNfUFJPR1JFU1NfQkFSO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB9XG5cbiAgICB0aGlzLmx5SXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX21hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICh0aGlzLnBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgX29uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBfb25EcmFnU3RhcnQoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5zbGlkZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2xpZGVBbmltKTtcbiAgICB0aGlzLl9zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLmx5SXRlbXMuZmluZCgoX2l0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSEuX25hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfb25EcmFnKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPCByZWN0LndpZHRoKSB7XG4gICAgICB0aGlzLl9vblBhbihlLmRlbHRhWCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uUGFuKHJlY3Qud2lkdGggKiBNYXRoLnNpZ24oZS5kZWx0YVgpKTtcbiAgICB9XG4gIH1cblxuICBfb25EcmFnRW5kKGUpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fc2VsZWN0ZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGUuZGVsdGFYKSA+IHJlY3Qud2lkdGggLyAyKSB7XG4gICAgICBpZiAoMCA+IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmICgwIDwgZS5kZWx0YVgpIHtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmFkZGl0aW9uYWxFdmVudCkge1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gZS5hZGRpdGlvbmFsRXZlbnQ7XG4gICAgICBpZiAoTWF0aC5hYnMoZS52ZWxvY2l0eSkgPj0gMC4yNSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnc2xpZGVsZWZ0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgPT09ICdzbGlkZXJpZ2h0Jykge1xuICAgICAgICAgIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fc2xpZGUubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScpO1xuICB9XG5cbiAgX29uRHJhZ0NhbmNlbCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuX3NlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgIHRoaXMuX3Jlc2V0SW50ZXJ2YWwoKTtcbiAgfVxuXG4gIF9zZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9zbGlkZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUNhcm91c2VsLnNlbGVjdDoke3ZhbC50b1N0cmluZygzMil9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHNpZ24gPSB0aGVtZS5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7MTAwICogdmFsICogc2lnbn0lKWBcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9zbGlkZS5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zbGlkZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICBpZiAodGhpcy5hdXRvcGxheSAmJiAhdGhpcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5fc2VsZWN0KHByZXYgPCAwID8gbGVuIDogcHJldik7XG4gIH1cblxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5fc2VsZWN0KG5leHQgPiBsZW4gPyAwIDogbmV4dCwgbm90UmVzZXRJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbEZuICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsRm4pO1xuICAgICAgdGhpcy5faW50ZXJ2YWxGbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRJbnRlcnZhbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMuX3Jlc3RhcnRQcm9ncmVzc0JhckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbEZuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3Jlc3RhcnRQcm9ncmVzc0JhckFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpIGFzIGFueTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXN0YXJ0UHJvZ3Jlc3NCYXJBbmltYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaGFzUHJvZ3Jlc3NCYXIgJiYgdGhpcy5fcHJvZ3Jlc3NCYXIpIHtcblxuICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcm9ncmVzc0Jhci5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAvLyBIYWNrIGZvciByZXN0YXJ0IGFuaW1hdGlvblxuICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICfDuGZha2VOYW1lJztcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgICBlbC5zdHlsZS5hbmltYXRpb25OYW1lID0gJyc7XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vblBhbih4KSB7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5nZXREaXJlY3Rpb24oRGlyQWxpYXMuYmVmb3JlKSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX3NsaWRlLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWChjYWxjKCR7c2lnbiAqIDEwMCAqIHRoaXMuc2VsZWN0ZWRJbmRleCB9JSArICR7eH1weCkpYCk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWc6JHt2YWx1ZX1gLCAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWV9JylgXG4gICAgICApLFxuICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==