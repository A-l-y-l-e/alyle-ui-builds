import { Injectable, NgModule, Directive, Renderer2, ElementRef, Input, defineInjectable, inject } from '@angular/core';
import { LyTheme2, defaultEntry, shadowBuilder, toBoolean } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCardClasses {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.card = this.theme.setUpStyleSecondary('k-card', () => (`display:block;` +
            `overflow: hidden;`));
        this.cardContent = this.theme.setUpStyleSecondary('k-card-content', () => (`display:block;` +
            `padding:16px 24px;`));
        this.cardActions = this.theme.setUpStyleSecondary('k-card-actions', () => (`display: block;` +
            `padding: 8px 12px;`));
        this.cardActionsItem = this.theme.setUpStyleSecondary('k-card-actions-item', () => (`margin: 0 4px;`));
    }
}
LyCardClasses.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LyCardClasses.ctorParameters = () => [
    { type: LyTheme2, },
];
/** @nocollapse */ LyCardClasses.ngInjectableDef = defineInjectable({ factory: function LyCardClasses_Factory() { return new LyCardClasses(inject(LyTheme2)); }, token: LyCardClasses, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DEFAULT_ELEVATION = 2;
const /** @type {?} */ DEFAULT_ASPECT_RATIO = '16:9';
class LyCard {
    /**
     * @param {?} classes
     * @param {?} styler
     * @param {?} el
     * @param {?} renderer
     */
    constructor(classes, styler, el, renderer) {
        this.classes = classes;
        this.styler = styler;
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set elevation(val) {
        if (this.elevation !== val) {
            const /** @type {?} */ newClass = this._createElevationClass(val);
            this._elevationClass = this.styler.updateClass(this.el.nativeElement, this.renderer, newClass, this._elevationClass);
        }
    }
    /**
     * @return {?}
     */
    get elevation() {
        return this._elevation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.classes.card);
        if (this.elevation === void 0) {
            this.elevation = DEFAULT_ELEVATION;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createElevationClass(val) {
        this._elevation = defaultEntry(val, DEFAULT_ELEVATION);
        return this.styler.setUpStyleSecondary(`k-card-e:${this.elevation}`, theme => (`background-color:${theme.background.primary};` +
            `position:relative;` +
            `border-radius:2px;` +
            `${shadowBuilder(this.elevation)}`));
    }
}
LyCard.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card'
            },] },
];
/** @nocollapse */
LyCard.ctorParameters = () => [
    { type: LyCardClasses, },
    { type: LyTheme2, },
    { type: ElementRef, },
    { type: Renderer2, },
];
LyCard.propDecorators = {
    "elevation": [{ type: Input },],
};
class LyCardContent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} classes
     */
    constructor(el, renderer, classes) {
        this.el = el;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.classes.cardContent);
    }
}
LyCardContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-content'
            },] },
];
/** @nocollapse */
LyCardContent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyCardClasses, },
];
class LyCardActions {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} classes
     */
    constructor(el, renderer, classes) {
        this.el = el;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.classes.cardActions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(element => {
                this.renderer.addClass(element, this.classes.cardActionsItem);
            });
        }
    }
}
LyCardActions.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-actions'
            },] },
];
/** @nocollapse */
LyCardActions.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyCardClasses, },
];
LyCardActions.propDecorators = {
    "disableActionSpacing": [{ type: Input },],
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
            const /** @type {?} */ newClass = this._createBgImgClass(val);
            this._bgImgClass = this.theme.updateClass(this.el.nativeElement, this.renderer, newClass, this._bgImgClass);
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
            const /** @type {?} */ newClass = this._createAspectRatioClass(val);
            this._ratioClass = this.theme.updateClass(this.el.nativeElement, this.renderer, newClass, this._ratioClass);
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
     * @return {?}
     */
    _createBgImgClass(val) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, `background-image`, `url("${val}")`);
        return this.theme.setUpStyle(`k-card-media:${val}`, () => (`display:block;` +
            `background-size: cover;` +
            `background-repeat: no-repeat;` +
            `background-position: center;`));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createAspectRatioClass(val) {
        this._ratio = val;
        return this.theme.setUpStyle(`k-card-media-ar:${val}`, {
            ':before': () => {
                return (val.split(':').reduce((valorAnterior, valorActual) => {
                    return (`padding-top:${+valorActual / +valorAnterior * 100}%;` +
                        `content:'';` +
                        `display:block;`);
                }));
            }
        });
    }
}
LyCardMedia.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-media'
            },] },
];
/** @nocollapse */
LyCardMedia.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyTheme2, },
];
LyCardMedia.propDecorators = {
    "bgImg": [{ type: Input },],
    "ratio": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCardModule {
}
LyCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia],
                declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyCardModule, LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCardClasses as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2FyZC9jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENsYXNzZXMge1xuICBjYXJkID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICdrLWNhcmQnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgYG92ZXJmbG93OiBoaWRkZW47YFxuICAgIClcbiAgKTtcbiAgY2FyZENvbnRlbnQgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgJ2stY2FyZC1jb250ZW50JyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgIGBwYWRkaW5nOjE2cHggMjRweDtgXG4gICAgKVxuICApO1xuICBjYXJkQWN0aW9ucyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICAnay1jYXJkLWFjdGlvbnMnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OiBibG9jaztgICtcbiAgICAgIGBwYWRkaW5nOiA4cHggMTJweDtgXG4gICAgKVxuICApO1xuICBjYXJkQWN0aW9uc0l0ZW0gPSB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgJ2stY2FyZC1hY3Rpb25zLWl0ZW0nLFxuICAgICgpID0+IChcbiAgICAgIGBtYXJnaW46IDAgNHB4O2BcbiAgICApXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIGRlZmF1bHRFbnRyeSwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5Q2FyZENsYXNzZXMgfSBmcm9tICcuL2NhcmQuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gMjtcbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9lbGV2YXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVsZXZhdGlvbih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh0aGlzLmVsZXZhdGlvbiAhPT0gdmFsKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9lbGV2YXRpb25DbGFzcyA9IHRoaXMuc3R5bGVyLnVwZGF0ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsZXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzLFxuICAgIHByaXZhdGUgc3R5bGVyOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZCk7XG4gICAgaWYgKHRoaXMuZWxldmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLl9lbGV2YXRpb24gPSBkZWZhdWx0RW50cnkodmFsLCBERUZBVUxUX0VMRVZBVElPTik7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVyLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55PihcbiAgICAgIGBrLWNhcmQtZToke3RoaXMuZWxldmF0aW9ufWAsXG4gICAgICB0aGVtZSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICAvLyBgcGFkZGluZzoyNHB4O2AgKyAvLyByZW1vdmUgdGhpc1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jYXJkQ29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlDYXJkQ2xhc3Nlc1xuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZEFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2JnSW1nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnSW1nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuICBwcml2YXRlIF9yYXRpb0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGJnSW1nKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZ0ltZykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9iZ0ltZ0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJnSW1nKCkge1xuICAgIHJldHVybiB0aGlzLl9iZ0ltZztcbiAgfVxuXG4gIC8qKiBBc3BlY3QgcmF0aW8gKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9yYXRpb0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9yYXRpb0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgay1jYXJkLW1lZGlhOiR7dmFsfWAsXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBrLWNhcmQtbWVkaWEtYXI6JHt2YWx9YCwge1xuICAgICAgICAnOmJlZm9yZSc6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdmFsLnNwbGl0KCc6JykucmVkdWNlKCh2YWxvckFudGVyaW9yLCB2YWxvckFjdHVhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGBwYWRkaW5nLXRvcDokeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSU7YCArXG4gICAgICAgICAgICAgICAgYGNvbnRlbnQ6Jyc7YCArXG4gICAgICAgICAgICAgICAgYGRpc3BsYXk6YmxvY2s7YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWFdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQWdDRSxZQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7b0JBNUJSLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQ25DLFFBQVEsRUFDUixPQUNFLGdCQUFnQjtZQUNoQixtQkFBbUIsQ0FDcEIsQ0FDRjsyQkFDYSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMxQyxnQkFBZ0IsRUFDaEIsT0FDRSxnQkFBZ0I7WUFDaEIsb0JBQW9CLENBQ3JCLENBQ0Y7MkJBQ2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDMUMsZ0JBQWdCLEVBQ2hCLE9BQ0UsaUJBQWlCO1lBQ2pCLG9CQUFvQixDQUNyQixDQUNGOytCQUNpQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUM5QyxxQkFBcUIsRUFDckIsT0FDRSxnQkFBZ0IsQ0FDakIsQ0FDRjtLQUdJOzs7WUEvQk4sVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZ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