import { Directive, Renderer2, ElementRef, Input, Optional, NgModule } from '@angular/core';
import { LyTheme2, toBoolean, LyCommon, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = (theme) => ({
    root: {
        display: 'block',
        overflow: 'hidden',
        borderRadius: '2px'
    },
    content: {
        display: 'block',
        padding: '16px 24px',
        [theme.getBreakpoint('XSmall')]: {
            padding: '16px 16px'
        }
    },
    actions: {
        display: 'block',
        padding: '8px 12px',
        [theme.getBreakpoint('XSmall')]: {
            padding: '8px 4px'
        }
    },
    actionsItem: {
        margin: '0 4px'
    }
});
/** @type {?} */
const DEFAULT_ASPECT_RATIO = '16:9';
/** @type {?} */
const STYLE_PRIORITY = -1;
class LyCard {
    /**
     * @param {?} theme
     * @param {?} el
     * @param {?} renderer
     * @param {?} common
     */
    constructor(theme, el, renderer, common) {
        this.theme = theme;
        this.el = el;
        this.renderer = renderer;
        this.common = common;
        /**
         * styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.common.setAutoContrast();
        /** @type {?} */
        let requireOnChanges;
        if (!this.common.bg) {
            this.common.bg = 'background:primary';
            requireOnChanges = true;
        }
        if (!this.common.elevation) {
            this.common.elevation = 2;
            requireOnChanges = true;
        }
        if (requireOnChanges) {
            this.common.ngOnChanges();
        }
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
    }
}
LyCard.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card'
            },] }
];
/** @nocollapse */
LyCard.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
class LyCardContent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} card
     */
    constructor(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    }
}
LyCardContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-content'
            },] }
];
/** @nocollapse */
LyCardContent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCard }
];
class LyCardActions {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} card
     */
    constructor(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(element => {
                this.renderer.addClass(element, this.card.classes.actionsItem);
            });
        }
    }
}
LyCardActions.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-actions'
            },] }
];
/** @nocollapse */
LyCardActions.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCard }
];
LyCardActions.propDecorators = {
    disableActionSpacing: [{ type: Input }]
};
class LyCardMedia {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} theme
     */
    constructor(el, renderer, theme) {
        this.el = el;
        this.renderer = renderer;
        this.theme = theme;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set bgImg(val) {
        if (val !== this.bgImg) {
            this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
        }
    }
    /**
     * @return {?}
     */
    get bgImg() {
        return this._bgImg;
    }
    /**
     * Aspect ratio
     * @param {?} val
     * @return {?}
     */
    set ratio(val) {
        if (val !== this.ratio) {
            this._createAspectRatioClass(val);
        }
    }
    /**
     * @return {?}
     */
    get ratio() {
        return this._ratio;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    }
    /**
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    _createBgImgClass(val, instance) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, `background-image`, `url("${val}")`);
        return this.theme.addStyle(`lyCard-media:${val}`, (`display:block;` +
            `background-size: cover;` +
            `background-repeat: no-repeat;` +
            `background-position: center;`), this.el.nativeElement, instance, STYLE_PRIORITY);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createAspectRatioClass(val) {
        this._ratio = val;
        this._ratioClass = this.theme.addStyle(`lyCard-media-ar:${val}`, ({
            '&:before': val.split(':').reduce((valorAnterior, valorActual) => {
                return (/** @type {?} */ (({
                    paddingTop: `${+valorActual / +valorAnterior * 100}%`,
                    content: `\'\'`,
                    display: 'block'
                })));
            })
        }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
    }
}
LyCardMedia.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-media'
            },] }
];
/** @nocollapse */
LyCardMedia.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
LyCardMedia.propDecorators = {
    bgImg: [{ type: Input }],
    ratio: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyCardModule {
}
LyCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCommonModule],
                declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
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

export { LyCardModule, LyCard, LyCardContent, LyCardActions, LyCardMedia };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiwgTHlDb21tb24sIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzE2cHggMTZweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzhweCA0cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25zSXRlbToge1xuICAgIG1hcmdpbjogJzAgNHB4J1xuICB9XG59KTtcblxuY29uc3QgREVGQVVMVF9BU1BFQ1RfUkFUSU8gPSAnMTY6OSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb21tb246IEx5Q29tbW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgbGV0IHJlcXVpcmVPbkNoYW5nZXM6IGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5iZykge1xuICAgICAgdGhpcy5jb21tb24uYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tbW9uLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5jb21tb24uZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZU9uQ2hhbmdlcykge1xuICAgICAgdGhpcy5jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmNvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9ucyk7XG4gICAgaWYgKCF0b0Jvb2xlYW4odGhpcy5kaXNhYmxlQWN0aW9uU3BhY2luZykpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9uc0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtbWVkaWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYmdJbWc6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmdJbWdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JhdGlvQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYmdJbWcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnSW1nKSB7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy5fY3JlYXRlQmdJbWdDbGFzcyh2YWwsIHRoaXMuX2JnSW1nQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYmdJbWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnSW1nO1xuICB9XG5cbiAgLyoqIEFzcGVjdCByYXRpbyAqL1xuICBASW5wdXQoKVxuICBzZXQgcmF0aW8odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCByYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLnJhdGlvID0gREVGQVVMVF9BU1BFQ1RfUkFUSU87XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmdJbWdDbGFzcyh2YWw6IHN0cmluZywgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHRoaXMuX2JnSW1nID0gdmFsO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgYmFja2dyb3VuZC1pbWFnZWAsIGB1cmwoXCIke3ZhbH1cIilgKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUNhcmQtbWVkaWE6JHt2YWx9YCxcbiAgICAgIChcbiAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgXG4gICAgICApLFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgdGhpcy5fcmF0aW9DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhLWFyOiR7dmFsfWAsICh7XG4gICAgICAgICcmOmJlZm9yZSc6IHZhbC5zcGxpdCgnOicpLnJlZHVjZSgodmFsb3JBbnRlcmlvciwgdmFsb3JBY3R1YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGAkeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSVgLFxuICAgICAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yYXRpb0NsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWEgfSBmcm9tICcuL2NhcmQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtNQUdNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLE1BQU07SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsWUFBWSxFQUFFLEtBQUs7S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsV0FBVztRQUNwQixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUc7WUFDL0IsT0FBTyxFQUFFLFdBQVc7U0FDckI7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxVQUFVO1FBQ25CLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRztZQUMvQixPQUFPLEVBQUUsU0FBUztTQUNuQjtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFLE9BQU87S0FDaEI7Q0FDRixDQUFDOztNQUVJLG9CQUFvQixHQUFHLE1BQU07O01BRTdCLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFLekIsTUFBYSxNQUFN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