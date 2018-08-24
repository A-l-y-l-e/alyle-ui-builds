/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, QueryList, ContentChildren, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, forwardRef, Inject, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselService } from './carousel.service';
import { Platform, LyTheme2, toBoolean } from '@alyle/ui';
/** @enum {number} */
const CarouselMode = {
    /** full */
    default: 0,
    inline: 1,
};
export { CarouselMode };
CarouselMode[CarouselMode.default] = 'default';
CarouselMode[CarouselMode.inline] = 'inline';
export class LyCarousel {
    /**
     * @param {?} elementRef
     * @param {?} sanitizer
     * @param {?} cd
     * @param {?} theme
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(elementRef, sanitizer, cd, theme, renderer, platformId) {
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
                '': () => (`display: block;` +
                    `-webkit-user-select: none;` +
                    `-moz-user-select: none;` +
                    `-ms-user-select: none;` +
                    `position: relative;`),
                ' .ly-carousel-actions': () => (`position: absolute;` +
                    `top: 0;` +
                    `bottom: 0;` +
                    `margin:auto .25em;` +
                    `height:1em;` +
                    `width:1em;` +
                    `font-size:36px;` +
                    `cursor:pointer;` +
                    `color: #fff;` +
                    `background: rgba(0, 0, 0, 0.11);` +
                    `will-change: transform;`),
                ' .ly-carousel-actions.right': () => (`right: 0;` +
                    `-webkit-transform: rotate(180deg);` +
                    `transform: rotate(180deg);`),
                ' svg': () => (`display:block;` +
                    `fill:currentColor;`)
            }),
            slideContainer: this.theme.core.setUpStyle('k-carousel-slide', {
                '': () => (`overflow: hidden;` +
                    `display: block;` +
                    `width: 100%;` +
                    `height: 100%;` +
                    `position: relative;`)
            }),
            slide: this.theme.core.setUpStyleSecondary('carousel-slide', {
                '': () => (`display: flex;` +
                    `width: 100%;` +
                    `height: 100%;` +
                    `will-change: transform`),
                ' > ly-carousel-item': () => (`width: 100%;` +
                    `flex-shrink: 0;` +
                    `overflow: auto;` +
                    `position: relative;` +
                    `background-size: cover;` +
                    `background-position: center;` +
                    `background-repeat: no-repeat;`),
                ' > ly-carousel-item > [lyCarouselImg]': () => (`width: 100%;`)
            }),
            slideContent: this.theme.core.setUpStyleSecondary('carousel-slide-content', {
                '': () => (`display: flex;`)
            }),
            slideAnim: this.theme.core.setUpStyleSecondary('slide-anim', {
                ' > div': () => (`transition: transform 750ms cubic-bezier(.1, 1, 0.5, 1);`)
            }),
            slideNoEvent: this.theme.core.setUpStyleSecondary('k-slide-no-event', {
                '>div': () => (`touch-action: initial !important;`)
            }),
            carouselIndicators: this.theme.core.setUpStyleSecondary('k-carousel-indicators', {
                '': () => (`position: absolute;` +
                    `bottom: 0;` +
                    `left: 0;` +
                    `right: 0;` +
                    `margin: 0;` +
                    `box-sizing: border-box;` +
                    `display: flex;` +
                    `align-items: center;` +
                    `justify-content: center;` +
                    `height: 48px;`),
                '>div': () => (`display: inline-block;` +
                    `border-radius: 50%;` +
                    `cursor: pointer;` +
                    `position: relative;` +
                    `padding: .5em;` +
                    `outline: none`),
                '>div > span': () => (`transition: 300ms cubic-bezier(0.65, 0.05, 0.36, 1);` +
                    `width: 1em;` +
                    `height: 1em;` +
                    `transform: scale(.5);` +
                    `border-radius: 50%;` +
                    `will-change: transform;` +
                    `display: block;`),
                '>div>span.active': () => (`transform: scale(1);`)
            }),
        };
        this.renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set slideEvent(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        this._slideEvent = newVal;
        if (newVal) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.classes.slideNoEvent);
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, this.classes.slideNoEvent);
        }
    }
    /**
     * @return {?}
     */
    get slideEvent() {
        return this._slideEvent;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDragStart(e) {
        this.renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        this.selectedElement = this.lyItems.find((item, index) => index === this.selectedIndex)._nativeElement;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDrag(e) {
        /** @type {?} */
        const rect = this.selectedElement.getBoundingClientRect();
        if (Math.abs(e.deltaX) < rect.width) {
            this._onPan(e.deltaX);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDragEnd(e) {
        /** @type {?} */
        const rect = this.selectedElement.getBoundingClientRect();
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
            const eventName = e.additionalEvent;
            if (eventName === 'slideleft') {
                this.next();
            }
            else if (eventName === 'slideright') {
                this.prev();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.slideEvent) {
            this.slideEvent = false;
        }
        if (Platform.isBrowser) {
            this._resetInterval();
        }
    }
    /**
     * @param {?} x
     * @return {?}
     */
    _onPan(x) {
        this._positionLeft = /** @type {?} */ (this.sanitizerStyle(`translate(calc(${-100 * this.selectedIndex}% + ${x}px), 0px)`));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    sanitizerStyle(val) {
        return this.sanitizer.bypassSecurityTrustStyle(val);
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
     * @return {?}
     */
    _markForCheck() {
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
        if (Platform.isBrowser) {
            this.renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
        }
    }
    /**
     * @param {?} val
     * @param {?=} notResetInterval
     * @return {?}
     */
    select(val, notResetInterval) {
        this.selectedIndex = val;
        if (this.mode === CarouselMode.default) {
            this._positionLeft = `translate(${-100 * val}%, 0px)`;
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
        this.select(prev < 0 ? len : prev);
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
        this.select(next > len ? 0 : next, notResetInterval);
    }
    /**
     * @return {?}
     */
    _resetInterval() {
        this.stop();
        this._intervalFn = setInterval(() => {
            this.next(true);
            this.cd.markForCheck();
        }, this.interval);
    }
    /**
     * @return {?}
     */
    stop() {
        if (this._intervalFn !== null) {
            clearInterval(this._intervalFn);
        }
    }
}
LyCarousel.decorators = [
    { type: Component, args: [{
                selector: 'ly-carousel',
                template: `<div
(slidestart)="slideEvent && onDragStart($event)"
(slide)="slideEvent && onDrag($event)"
(slideend)="slideEvent && onDragEnd($event)"
#slideContainer
>
  <div [className]="classes.slide" [style.transform]="_positionLeft">
    <ng-content></ng-content>
  </div>
  <div [className]="classes.carouselIndicators" *ngIf="lyItems.length !== 1">
      <div tabindex="0"
      (click)="select(i)"
      role="button"
      *ngFor="let item of lyItems; let i = index">
      <span color="#000"
      bg="background:primary"
      [class.active]="selectedIndex==i"
      [elevation]="6"></span>
      </div>
  </div>
  <div class="ly-carousel-actions" (click)="prev()">
    <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
  </div>
  <div class="ly-carousel-actions right" (click)="next()">
    <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
  </div>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LyCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
LyCarousel.propDecorators = {
    slideContainer: [{ type: ViewChild, args: ['slideContainer',] }],
    lyItems: [{ type: ContentChildren, args: [forwardRef(() => LyCarouselItem),] }],
    mode: [{ type: Input }],
    interval: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    slideEvent: [{ type: Input }]
};
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
export class LyCarouselItem {
    /**
     * @param {?} carousel
     * @param {?} carouselService
     * @param {?} cd
     * @param {?} platformId
     * @param {?} theme
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(carousel, carouselService, cd, platformId, theme, renderer, elementRef) {
        this.carouselService = carouselService;
        this.cd = cd;
        this.platformId = platformId;
        this.theme = theme;
        this.renderer = renderer;
        this._carousel = carousel;
        this._nativeElement = elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set srcImg(value) {
        /** @type {?} */
        const newImgStyle = this.theme.setUpStyleSecondary(`ly-carousel-img-${value}`, {
            '': () => (`background-image: url('${value}');`)
        });
        this.theme.updateClassName(this._nativeElement, this.renderer, newImgStyle, this.className);
        this.className = newImgStyle;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
LyCarouselItem.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'ly-carousel-item'
            },] },
];
/** @nocollapse */
LyCarouselItem.ctorParameters = () => [
    { type: LyCarousel, decorators: [{ type: Optional }] },
    { type: CarouselService },
    { type: ChangeDetectorRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyCarouselItem.propDecorators = {
    src: [{ type: Input }],
    srcImg: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBR0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsUUFBUSxFQUNSLFVBQVUsRUFHVixNQUFNLEVBQ04sV0FBVyxFQUVYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0lBR3hELFVBQU87SUFDUCxTQUFNOzs7MEJBRE4sT0FBTzswQkFDUCxNQUFNO0FBb0NSLE1BQU07Ozs7Ozs7OztJQW9MSixZQUNVLFlBQ0EsV0FDQSxJQUNBLE9BQ0EsVUFDcUIsVUFBa0I7UUFMdkMsZUFBVSxHQUFWLFVBQVU7UUFDVixjQUFTLEdBQVQsU0FBUztRQUNULE9BQUUsR0FBRixFQUFFO1FBQ0YsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUNhLGVBQVUsR0FBVixVQUFVLENBQVE7dUJBeExoQyxvRkFBb0Y7MkJBQy9FLElBQUk7b0JBR0ksWUFBWSxDQUFDLE9BQU87d0JBQzlCLElBQUk7NkJBRUMsQ0FBQzt1QkFFaEI7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUM5QixVQUFVLEVBQUU7Z0JBQ1YsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1IsaUJBQWlCO29CQUNqQiw0QkFBNEI7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QWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7S0FDOUI7Ozs7O0lBaUJELFdBQVcsQ0FBQyxPQUFzQixLQUFLOzs7O0lBRXZDLFFBQVEsTUFBTTs7O1lBdENmLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQXFCeUIsVUFBVSx1QkFBL0IsUUFBUTtZQWxVSixlQUFlO1lBYnRCLGlCQUFpQjtZQWtWMEIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7WUFwVUosUUFBUTtZQU56QixTQUFTO1lBVlQsVUFBVTs7O2tCQWdVVCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3B0aW9uYWwsXG4gIGZvcndhcmRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmV4cG9ydCBlbnVtIENhcm91c2VsTW9kZSB7XG4gIC8qKiBmdWxsICovXG4gIGRlZmF1bHQsXG4gIGlubGluZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuKHNsaWRlc3RhcnQpPVwic2xpZGVFdmVudCAmJiBvbkRyYWdTdGFydCgkZXZlbnQpXCJcbihzbGlkZSk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZygkZXZlbnQpXCJcbihzbGlkZWVuZCk9XCJzbGlkZUV2ZW50ICYmIG9uRHJhZ0VuZCgkZXZlbnQpXCJcbiNzbGlkZUNvbnRhaW5lclxuPlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5zbGlkZVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3Bvc2l0aW9uTGVmdFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNhcm91c2VsSW5kaWNhdG9yc1wiICpuZ0lmPVwibHlJdGVtcy5sZW5ndGggIT09IDFcIj5cbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCJcbiAgICAgIChjbGljayk9XCJzZWxlY3QoaSlcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBseUl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8c3BhbiBjb2xvcj1cIiMwMDBcIlxuICAgICAgYmc9XCJiYWNrZ3JvdW5kOnByaW1hcnlcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZEluZGV4PT1pXCJcbiAgICAgIFtlbGV2YXRpb25dPVwiNlwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImx5LWNhcm91c2VsLWFjdGlvbnNcIiAoY2xpY2spPVwicHJldigpXCI+XG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD48L3N2Zz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJseS1jYXJvdXNlbC1hY3Rpb25zIHJpZ2h0XCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnpcIj48L3BhdGg+PC9zdmc+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2Fyb3VzZWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBfc2VsZWN0ZWRJbmRleDogYW55O1xuICBwdWJsaWMgbnVsbEltZyA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQkFQLy8vd0FBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09JztcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxGbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlQ29udGFpbmVyJykgc2xpZGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUNhcm91c2VsSXRlbSkpIGx5SXRlbXM6IFF1ZXJ5TGlzdDxMeUNhcm91c2VsSXRlbT47XG4gIEBJbnB1dCgpIG1vZGU6IENhcm91c2VsTW9kZSA9IENhcm91c2VsTW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDcwMDA7XG4gIF9wb3NpdGlvbkxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGNsYXNzZXMgPSB7XG4gICAgcm9vdDogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGUoXG4gICAgICAnY2Fyb3VzZWwnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2AgK1xuICAgICAgICAgIGAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGAtbW96LXVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgICAgICAgIGAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgXG4gICAgICAgICksXG4gICAgICAgICcgLmx5LWNhcm91c2VsLWFjdGlvbnMnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYG1hcmdpbjphdXRvIC4yNWVtO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZTozNnB4O2AgK1xuICAgICAgICAgIGBjdXJzb3I6cG9pbnRlcjtgICtcbiAgICAgICAgICBgY29sb3I6ICNmZmY7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMSk7YCArXG4gICAgICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07YFxuICAgICAgICApLFxuICAgICAgICAnIC5seS1jYXJvdXNlbC1hY3Rpb25zLnJpZ2h0JzogKCkgPT4gKFxuICAgICAgICAgIGByaWdodDogMDtgICtcbiAgICAgICAgICBgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO2AgK1xuICAgICAgICAgIGB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO2BcbiAgICAgICAgKSxcbiAgICAgICAgJyBzdmcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgICAgYGZpbGw6Y3VycmVudENvbG9yO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgc2xpZGVDb250YWluZXI6IHRoaXMudGhlbWUuY29yZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stY2Fyb3VzZWwtc2xpZGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47YCArXG4gICAgICAgICAgYGRpc3BsYXk6IGJsb2NrO2AgK1xuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBzbGlkZTogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnY2Fyb3VzZWwtc2xpZGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDEwMCU7YCArXG4gICAgICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm1gXG4gICAgICAgICksXG4gICAgICAgICcgPiBseS1jYXJvdXNlbC1pdGVtJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgICBgZmxleC1zaHJpbms6IDA7YCArXG4gICAgICAgICAgYG92ZXJmbG93OiBhdXRvO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtc2l6ZTogY292ZXI7YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgXG4gICAgICAgICksXG4gICAgICAgICcgPiBseS1jYXJvdXNlbC1pdGVtID4gW2x5Q2Fyb3VzZWxJbWddJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDogMTAwJTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQ29udGVudDogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnY2Fyb3VzZWwtc2xpZGUtY29udGVudCcsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZGlzcGxheTogZmxleDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlQW5pbTogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnc2xpZGUtYW5pbScsIHtcbiAgICAgICAgJyA+IGRpdic6ICgpID0+IChcbiAgICAgICAgICBgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIHNsaWRlTm9FdmVudDogdGhpcy50aGVtZS5jb3JlLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnay1zbGlkZS1uby1ldmVudCcsIHtcbiAgICAgICAgJz5kaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYHRvdWNoLWFjdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgY2Fyb3VzZWxJbmRpY2F0b3JzOiB0aGlzLnRoZW1lLmNvcmUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgICdrLWNhcm91c2VsLWluZGljYXRvcnMnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBsZWZ0OiAwO2AgK1xuICAgICAgICAgIGByaWdodDogMDtgICtcbiAgICAgICAgICBgbWFyZ2luOiAwO2AgK1xuICAgICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2AgK1xuICAgICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgICAgICBgaGVpZ2h0OiA0OHB4O2BcbiAgICAgICAgKSxcbiAgICAgICAgJz5kaXYnOiAoKSA9PiAoXG4gICAgICAgICAgYGRpc3BsYXk6IGlubGluZS1ibG9jaztgICtcbiAgICAgICAgICBgYm9yZGVyLXJhZGl1czogNTAlO2AgK1xuICAgICAgICAgIGBjdXJzb3I6IHBvaW50ZXI7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgICAgICBgcGFkZGluZzogLjVlbTtgICtcbiAgICAgICAgICBgb3V0bGluZTogbm9uZWBcbiAgICAgICAgKSxcbiAgICAgICAgJz5kaXYgPiBzcGFuJzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2l0aW9uOiAzMDBtcyBjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSk7YCArXG4gICAgICAgICAgYHdpZHRoOiAxZW07YCArXG4gICAgICAgICAgYGhlaWdodDogMWVtO2AgK1xuICAgICAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKC41KTtgICtcbiAgICAgICAgICBgYm9yZGVyLXJhZGl1czogNTAlO2AgK1xuICAgICAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2AgK1xuICAgICAgICAgIGBkaXNwbGF5OiBibG9jaztgXG4gICAgICAgICksXG4gICAgICAgICc+ZGl2PnNwYW4uYWN0aXZlJzogKCkgPT4gKFxuICAgICAgICAgIGB0cmFuc2Zvcm06IHNjYWxlKDEpO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gIH07XG4gIHByaXZhdGUgX3NsaWRlRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBzbGlkZUV2ZW50KHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3NsaWRlRXZlbnQgPSBuZXdWYWw7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlTm9FdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZU5vRXZlbnQpO1xuICAgIH1cbiAgfVxuICBnZXQgc2xpZGVFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVFdmVudDtcbiAgfVxuICBvbkRyYWdTdGFydChlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5seUl0ZW1zLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KS5fbmF0aXZlRWxlbWVudDtcbiAgfVxuICBvbkRyYWcoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoTWF0aC5hYnMoZS5kZWx0YVgpIDwgcmVjdC53aWR0aCkge1xuICAgICAgdGhpcy5fb25QYW4oZS5kZWx0YVgpO1xuICAgIH1cbiAgfVxuICBvbkRyYWdFbmQoZSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlbGVjdGVkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2xpZGVDb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNsaWRlQW5pbSk7XG4gICAgdGhpcy5zZWxlY3QodGhpcy5zZWxlY3RlZEluZGV4KTtcblxuICAgIGlmIChNYXRoLmFicyhlLmRlbHRhWCkgPiByZWN0LndpZHRoIC8gMikge1xuICAgICAgaWYgKDAgPiBlLmRlbHRhWCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoMCA8IGUuZGVsdGFYKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5hZGRpdGlvbmFsRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGUuYWRkaXRpb25hbEV2ZW50O1xuICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlbGVmdCcpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZSA9PT0gJ3NsaWRlcmlnaHQnKSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zbGlkZUV2ZW50KSB7XG4gICAgICB0aGlzLnNsaWRlRXZlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVzZXRJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uUGFuKHgpIHtcbiAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSB0aGlzLnNhbml0aXplclN0eWxlKGB0cmFuc2xhdGUoY2FsYygkey0xMDAgKiB0aGlzLnNlbGVjdGVkSW5kZXggfSUgKyAke3h9cHgpLCAwcHgpYCkgYXMgYW55O1xuICB9XG4gIHByaXZhdGUgc2FuaXRpemVyU3R5bGUodmFsOiBhbnkpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUNvbnRhaW5lcik7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNsaWRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zbGlkZUFuaW0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3QodmFsOiBudW1iZXIsIG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgIGlmICh0aGlzLm1vZGUgPT09IENhcm91c2VsTW9kZS5kZWZhdWx0KSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkxlZnQgPSBgdHJhbnNsYXRlKCR7LTEwMCAqIHZhbH0lLCAwcHgpYDtcbiAgICB9XG4gICAgaWYgKCFub3RSZXNldEludGVydmFsKSB7XG4gICAgICB0aGlzLl9yZXNldEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIHByZXYoKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldiA9IHRoaXMuc2VsZWN0ZWRJbmRleCAtIDE7XG4gICAgdGhpcy5zZWxlY3QocHJldiA8IDAgPyBsZW4gOiBwcmV2KTtcbiAgfVxuICBuZXh0KG5vdFJlc2V0SW50ZXJ2YWw/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gdGhpcy5seUl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc2VsZWN0ZWRJbmRleCArIDE7XG4gICAgdGhpcy5zZWxlY3QobmV4dCA+IGxlbiA/IDAgOiBuZXh0LCBub3RSZXNldEludGVydmFsKTtcbiAgfVxuICBwcml2YXRlIF9yZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuX2ludGVydmFsRm4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWxGbiAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbEZuKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdseS1jYXJvdXNlbC1pdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIC8qKiBAZGVwcmVjYXRlZCB1c2Ugc3JjSW1nICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc3JjSW1nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdJbWdTdHlsZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAgIGBseS1jYXJvdXNlbC1pbWctJHt2YWx1ZX1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZX0nKTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX25hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0ltZ1N0eWxlLCB0aGlzLmNsYXNzTmFtZSk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBuZXdJbWdTdHlsZTtcbiAgfVxuICBwcml2YXRlIF9jYXJvdXNlbDogTHlDYXJvdXNlbDtcbiAgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIGNhcm91c2VsOiBMeUNhcm91c2VsLFxuICAgIHByaXZhdGUgY2Fyb3VzZWxTZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fY2Fyb3VzZWwgPSBjYXJvdXNlbDtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19