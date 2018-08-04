/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, shadowBuilder, defaultEntry, toBoolean } from '@alyle/ui';
import { LyCardClasses } from './card.service';
const /** @type {?} */ DEFAULT_ELEVATION = 2;
const /** @type {?} */ DEFAULT_ASPECT_RATIO = '16:9';
export class LyCard {
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
function LyCard_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCard.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCard.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCard.propDecorators;
    /** @type {?} */
    LyCard.prototype._elevation;
    /** @type {?} */
    LyCard.prototype._elevationClass;
    /** @type {?} */
    LyCard.prototype.classes;
    /** @type {?} */
    LyCard.prototype.styler;
    /** @type {?} */
    LyCard.prototype.el;
    /** @type {?} */
    LyCard.prototype.renderer;
}
export class LyCardContent {
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
function LyCardContent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardContent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardContent.ctorParameters;
    /** @type {?} */
    LyCardContent.prototype.el;
    /** @type {?} */
    LyCardContent.prototype.renderer;
    /** @type {?} */
    LyCardContent.prototype.classes;
}
export class LyCardActions {
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
function LyCardActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardActions.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCardActions.propDecorators;
    /** @type {?} */
    LyCardActions.prototype.disableActionSpacing;
    /** @type {?} */
    LyCardActions.prototype.el;
    /** @type {?} */
    LyCardActions.prototype.renderer;
    /** @type {?} */
    LyCardActions.prototype.classes;
}
export class LyCardMedia {
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
function LyCardMedia_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardMedia.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardMedia.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCardMedia.propDecorators;
    /** @type {?} */
    LyCardMedia.prototype._bgImg;
    /** @type {?} */
    LyCardMedia.prototype._bgImgClass;
    /** @type {?} */
    LyCardMedia.prototype._ratio;
    /** @type {?} */
    LyCardMedia.prototype._ratioClass;
    /** @type {?} */
    LyCardMedia.prototype.el;
    /** @type {?} */
    LyCardMedia.prototype.renderer;
    /** @type {?} */
    LyCardMedia.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLHVCQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1Qix1QkFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUM7QUFLcEMsTUFBTTs7Ozs7OztJQWNKLFlBQ1UsU0FDQSxRQUNBLElBQ0E7UUFIQSxZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBQ04sT0FBRSxHQUFGLEVBQUU7UUFDRixhQUFRLEdBQVIsUUFBUTtLQUNiOzs7OztRQWZELFNBQVMsQ0FBQyxHQUFvQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFO1lBQzFCLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdEg7Ozs7O0lBRUgsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxF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QUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzFCLG1CQUFtQixHQUFHLEVBQUUsRUFBRTtZQUN4QixTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUNkLE9BQU8sQ0FDTCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsRUFBRTtvQkFDbkQsT0FBTyxDQUNMLGVBQWUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxJQUFJO3dCQUN0RCxhQUFhO3dCQUNiLGdCQUFnQixDQUNqQixDQUFDO2lCQUNILENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRixDQUNGLENBQUM7Ozs7WUEzRUwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBM0Y4QixVQUFVO1lBQXJCLFNBQVM7WUFDcEIsUUFBUTs7O3NCQWtHZCxLQUFLO3NCQVlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIGRlZmF1bHRFbnRyeSwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5Q2FyZENsYXNzZXMgfSBmcm9tICcuL2NhcmQuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gMjtcbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9lbGV2YXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVsZXZhdGlvbih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh0aGlzLmVsZXZhdGlvbiAhPT0gdmFsKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9lbGV2YXRpb25DbGFzcyA9IHRoaXMuc3R5bGVyLnVwZGF0ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsZXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzLFxuICAgIHByaXZhdGUgc3R5bGVyOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZCk7XG4gICAgaWYgKHRoaXMuZWxldmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLl9lbGV2YXRpb24gPSBkZWZhdWx0RW50cnkodmFsLCBERUZBVUxUX0VMRVZBVElPTik7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVyLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55PihcbiAgICAgIGBrLWNhcmQtZToke3RoaXMuZWxldmF0aW9ufWAsXG4gICAgICB0aGVtZSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICAvLyBgcGFkZGluZzoyNHB4O2AgKyAvLyByZW1vdmUgdGhpc1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jYXJkQ29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlDYXJkQ2xhc3Nlc1xuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZEFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2JnSW1nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnSW1nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuICBwcml2YXRlIF9yYXRpb0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGJnSW1nKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZ0ltZykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9iZ0ltZ0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJnSW1nKCkge1xuICAgIHJldHVybiB0aGlzLl9iZ0ltZztcbiAgfVxuXG4gIC8qKiBBc3BlY3QgcmF0aW8gKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9yYXRpb0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9yYXRpb0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgay1jYXJkLW1lZGlhOiR7dmFsfWAsXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBrLWNhcmQtbWVkaWEtYXI6JHt2YWx9YCwge1xuICAgICAgICAnOmJlZm9yZSc6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdmFsLnNwbGl0KCc6JykucmVkdWNlKCh2YWxvckFudGVyaW9yLCB2YWxvckFjdHVhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGBwYWRkaW5nLXRvcDokeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSU7YCArXG4gICAgICAgICAgICAgICAgYGNvbnRlbnQ6Jyc7YCArXG4gICAgICAgICAgICAgICAgYGRpc3BsYXk6YmxvY2s7YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19