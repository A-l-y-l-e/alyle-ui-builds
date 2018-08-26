import { Injectable, NgModule, Directive, Renderer2, ElementRef, Input, Optional, defineInjectable, inject } from '@angular/core';
import { LyTheme2, LyCommon, toBoolean } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = {
    root: {
        display: 'block',
        overflow: 'hidden',
        borderRadius: '2px'
    },
    content: {
        display: 'block',
        padding: '16px 24px'
    },
    actions: {
        display: 'block',
        padding: '8px 12px'
    },
    actionsItem: {
        margin: '0 4px'
    }
};
class LyCardService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyCard');
    }
}
LyCardService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LyCardService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyCardService.ngInjectableDef = defineInjectable({ factory: function LyCardService_Factory() { return new LyCardService(inject(LyTheme2)); }, token: LyCardService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_ASPECT_RATIO = '16:9';
class LyCard {
    /**
     * @param {?} cardService
     * @param {?} el
     * @param {?} renderer
     * @param {?} common
     */
    constructor(cardService, el, renderer, common) {
        this.cardService = cardService;
        this.el = el;
        this.renderer = renderer;
        this.common = common;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        if (!this.common.shadowColor) {
            this.common.shadowColor = 'colorShadow';
            requireOnChanges = true;
        }
        if (requireOnChanges) {
            this.common.ngOnChanges();
        }
        this.renderer.addClass(this.el.nativeElement, this.cardService.classes.root);
        // if (this.elevation === void 0) {
        //   this.elevation = DEFAULT_ELEVATION;
        // }
    }
}
LyCard.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card'
            },] },
];
/** @nocollapse */
LyCard.ctorParameters = () => [
    { type: LyCardService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
class LyCardContent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} cardService
     */
    constructor(el, renderer, cardService) {
        this.el = el;
        this.renderer = renderer;
        this.cardService = cardService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.cardService.classes.content);
    }
}
LyCardContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-card-content'
            },] },
];
/** @nocollapse */
LyCardContent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCardService }
];
class LyCardActions {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} cardService
     */
    constructor(el, renderer, cardService) {
        this.el = el;
        this.renderer = renderer;
        this.cardService = cardService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.cardService.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(element => {
                this.renderer.addClass(element, this.cardService.classes.actionsItem);
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
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyCardService }
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
            /** @type {?} */
            const newClass = this._createBgImgClass(val);
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
            /** @type {?} */
            const newClass = this._createAspectRatioClass(val);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

export { LyCardModule, LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCardService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2FyZC9jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCdcbiAgfSxcbiAgYWN0aW9uc0l0ZW06IHtcbiAgICBtYXJnaW46ICcwIDRweCdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUNhcmQnKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlDYXJkU2VydmljZSB9IGZyb20gJy4vY2FyZC5zZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9BU1BFQ1RfUkFUSU8gPSAnMTY6OSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHByaXZhdGUgX2VsZXZhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xuICAvLyBwcml2YXRlIF9lbGV2YXRpb25DbGFzczogc3RyaW5nO1xuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgZWxldmF0aW9uKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIC8vICAgaWYgKHRoaXMuZWxldmF0aW9uICE9PSB2YWwpIHtcbiAgLy8gICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsKTtcbiAgLy8gICAgIHRoaXMuX2VsZXZhdGlvbkNsYXNzID0gdGhpcy5zdHlsZXIudXBkYXRlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZWxldmF0aW9uQ2xhc3MpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBnZXQgZWxldmF0aW9uKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9lbGV2YXRpb247XG4gIC8vIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcmRTZXJ2aWNlOiBMeUNhcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29tbW9uOiBMeUNvbW1vblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCByZXF1aXJlT25DaGFuZ2VzOiBib29sZWFuO1xuICAgIGlmICghdGhpcy5jb21tb24uYmcpIHtcbiAgICAgIHRoaXMuY29tbW9uLmJnID0gJ2JhY2tncm91bmQ6cHJpbWFyeSc7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuY29tbW9uLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5zaGFkb3dDb2xvcikge1xuICAgICAgdGhpcy5jb21tb24uc2hhZG93Q29sb3IgPSAnY29sb3JTaGFkb3cnO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyZXF1aXJlT25DaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNvbW1vbi5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIC8vIGlmICh0aGlzLmVsZXZhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgLy8gICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIHByaXZhdGUgX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIC8vICAgdGhpcy5fZWxldmF0aW9uID0gZGVmYXVsdEVudHJ5KHZhbCwgREVGQVVMVF9FTEVWQVRJT04pO1xuICAvLyAgIGNvbnNvbGUubG9nKCdlbGUnLCB0aGlzLmVsZXZhdGlvbik7XG4gIC8vICAgcmV0dXJuIHRoaXMuc3R5bGVyLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55PihcbiAgLy8gICAgIGBrLWNhcmQtZToke3RoaXMuZWxldmF0aW9ufWAsXG4gIC8vICAgICB0aGVtZSA9PiAoXG4gIC8vICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgICtcbiAgLy8gICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAvLyAgICAgICAvLyBgcGFkZGluZzoyNHB4O2AgKyAvLyByZW1vdmUgdGhpc1xuICAvLyAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gIC8vICAgICAgIGAke3NoYWRvd0J1aWxkZXJEZXByZWNhdGVkKHRoaXMuZWxldmF0aW9uKX1gXG4gIC8vICAgICApXG4gIC8vICAgKTtcbiAgLy8gfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZFNlcnZpY2U6IEx5Q2FyZFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkU2VydmljZS5jbGFzc2VzLmNvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmRTZXJ2aWNlOiBMeUNhcmRTZXJ2aWNlXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmRTZXJ2aWNlLmNsYXNzZXMuYWN0aW9ucyk7XG4gICAgaWYgKCF0b0Jvb2xlYW4odGhpcy5kaXNhYmxlQWN0aW9uU3BhY2luZykpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jYXJkU2VydmljZS5jbGFzc2VzLmFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2JnSW1nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnSW1nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuICBwcml2YXRlIF9yYXRpb0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGJnSW1nKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZ0ltZykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9iZ0ltZ0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJnSW1nKCkge1xuICAgIHJldHVybiB0aGlzLl9iZ0ltZztcbiAgfVxuXG4gIC8qKiBBc3BlY3QgcmF0aW8gKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9yYXRpb0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9yYXRpb0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgay1jYXJkLW1lZGlhOiR7dmFsfWAsXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBrLWNhcmQtbWVkaWEtYXI6JHt2YWx9YCwge1xuICAgICAgICAnOmJlZm9yZSc6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdmFsLnNwbGl0KCc6JykucmVkdWNlKCh2YWxvckFudGVyaW9yLCB2YWxvckFjdHVhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGBwYWRkaW5nLXRvcDokeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSU7YCArXG4gICAgICAgICAgICAgICAgYGNvbnRlbnQ6Jyc7YCArXG4gICAgICAgICAgICAgICAgYGRpc3BsYXk6YmxvY2s7YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWFdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBLE1BQU0sTUFBTSxHQUFHO0lBQ2IsSUFBSSxFQUFF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