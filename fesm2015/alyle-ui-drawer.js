import { Directive, Input, ElementRef, Renderer2, forwardRef, ContentChild, NgModule } from '@angular/core';
import { LyTheme2, toBoolean, eachMedia, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE = '';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = 'start';
/** @type {?} */
const styles = (theme) => ({
    drawerContainer: {
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        '-webkit-overflow-scrolling': 'touch'
    },
    drawer: {
        display: 'block',
        position: 'fixed',
        zIndex: theme.zIndex.drawer,
        overflow: 'auto'
    },
    drawerContent: {
        display: 'block'
    },
    drawerOpened: {
        transform: 'translate3d(0px, 0px, 0)'
    }
});
class LyDrawerContainer {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(styles, 'ly-drawer-container', STYLE_PRIORITY);
        this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
    }
}
LyDrawerContainer.decorators = [
    { type: Directive, args: [{
                selector: 'ly-drawer-container'
            },] },
];
/** @nocollapse */
LyDrawerContainer.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
LyDrawerContainer.propDecorators = {
    drawerContent: [{ type: ContentChild, args: [forwardRef(() => LyDrawerContent),] }]
};
class LyDrawerContent {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} drawerContainer
     */
    constructor(_theme, _renderer, _el, drawerContainer) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this._renderer.addClass(this._el.nativeElement, drawerContainer.classes.drawerContent);
    }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this._el.nativeElement;
    }
}
LyDrawerContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-drawer-content'
            },] },
];
/** @nocollapse */
LyDrawerContent.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyDrawerContainer }
];
class LyDrawer {
    /**
     * @param {?} _theme
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _drawerContainer
     */
    constructor(_theme, _renderer, _el, _drawerContainer) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this._drawerContainer = _drawerContainer;
        this._position = DEFAULT_POSITION;
        this._renderer.addClass(this._el.nativeElement, _drawerContainer.classes.drawer);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set opened(val) {
        if (val !== this.opened) {
            this._opened = toBoolean(val);
        }
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set position(val) {
        if (val !== this.position) {
            this._position = val;
            this._theme.addStyle(`drawer.position:${val}`, (theme) => {
                /** @type {?} */
                let positionVal;
                if (val === 'start' || val === 'end') {
                    positionVal = theme.getDirection(val);
                }
                else {
                    positionVal = val;
                }
                return {
                    [positionVal]: 0
                };
            }, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        const __mode = this.mode;
        /** @type {?} */
        const __opened = this.opened;
        /** @type {?} */
        let __width = this.width;
        /** @type {?} */
        const __height = this.height;
        /** @type {?} */
        const __position = this.position;
        /** @type {?} */
        const __spacingTop = this.spacingTop;
        /** @type {?} */
        const __spacingBottom = this.spacingBottom;
        if (__width && __height) {
            throw new Error(`\`width\` and \`height\` are defined, you can only define one`);
        }
        else if (!__width) {
            if (!__height) {
                __width = '230px';
            }
        }
        /** @type {?} */
        const newKeyDrawerContent = `ly-drawer-content----:${__mode || DEFAULT_VALUE}·${__opened || DEFAULT_VALUE}·${__width || DEFAULT_VALUE}·${__height || DEFAULT_VALUE}·${__position || DEFAULT_VALUE}`;
        if (__opened) {
            this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
            this._drawerContentClass = this._theme.addStyle(newKeyDrawerContent, (theme) => {
                /** @type {?} */
                const drawerContentStyles = {};
                /** @type {?} */
                let positionVal = 'margin-';
                if (__position === 'start' || __position === 'end') {
                    positionVal += theme.getDirection(__position);
                }
                else {
                    positionVal += __position;
                }
                if (__width) {
                    eachMedia(__width, (val, media, isMedia) => {
                        /** @type {?} */
                        const newStyleWidth = toPx(val);
                        if (isMedia) {
                            /** @type {?} */
                            const breakPoint = theme.getBreakpoint(media);
                            /** @type {?} */
                            const styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentStyles, breakPoint);
                            styleOfBreakPoint[positionVal] = newStyleWidth;
                        }
                        else {
                            drawerContentStyles[positionVal] = newStyleWidth;
                        }
                    });
                }
                return drawerContentStyles;
            }, this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
        }
        else {
            // this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, null, this._drawerClass);
            this._drawerClass = this._theme.addStyle(newKeyDrawerContent, (theme) => {
                /** @type {?} */
                const drawerContentNOpenStyles = {};
                /** @type {?} */
                let positionVal;
                if (__position === 'start' || __position === 'end') {
                    positionVal = theme.getDirection(__position);
                }
                else {
                    positionVal = __position;
                }
                /** @type {?} */
                const nnn = positionVal === 'left' || positionVal === 'top' ? '-' : '+';
                if (__width) {
                    eachMedia(__width, (val, media, isMedia) => {
                        /** @type {?} */
                        const newTranslateX = `translateX(${nnn + toPx(val)})`;
                        if (isMedia) {
                            /** @type {?} */
                            const breakPoint = theme.getBreakpoint(media);
                            /** @type {?} */
                            const styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentNOpenStyles, breakPoint);
                            styleOfBreakPoint.transform = newTranslateX;
                        }
                        else {
                            drawerContentNOpenStyles.transform = newTranslateX;
                        }
                    });
                }
                if (__height) {
                    eachMedia(__height, (val, media, isMedia) => {
                        /** @type {?} */
                        const newTranslateY = `translateY(${nnn + toPx(val)})`;
                        if (isMedia) {
                            /** @type {?} */
                            const breakPoint = theme.getBreakpoint(media);
                            /** @type {?} */
                            const styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentNOpenStyles, breakPoint);
                            styleOfBreakPoint.transform = newTranslateY;
                        }
                        else {
                            drawerContentNOpenStyles.transform = newTranslateY;
                        }
                    });
                }
                return drawerContentNOpenStyles;
            }, this._el.nativeElement, this._drawerClass, STYLE_PRIORITY);
            this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
            this._drawerContentClass = null;
        }
        this._drawerRootClass = this._theme.addStyle(`ly-drawer-root:${__width}·${__height}·${__spacingTop}·${__spacingBottom}`, (theme) => {
            /** @type {?} */
            const stylesDrawerRoot = {};
            if (__width) {
                eachMedia(__width, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleWidth = toPx(val);
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.width = newStyleWidth;
                    }
                    else {
                        stylesDrawerRoot.width = newStyleWidth;
                    }
                });
            }
            if (__height) {
                eachMedia(__height, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleHeight = toPx(val);
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.height = newStyleHeight;
                    }
                    else {
                        stylesDrawerRoot.height = newStyleHeight;
                    }
                });
            }
            if (__position === 'start' || __position === 'end') {
                eachMedia(__spacingTop, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleSpacingTop = toPx(val || 0);
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.top = newStyleSpacingTop;
                    }
                    else {
                        stylesDrawerRoot.top = newStyleSpacingTop;
                    }
                });
                eachMedia(__spacingBottom, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleSpacingBottom = toPx(val || 0);
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.bottom = newStyleSpacingBottom;
                    }
                    else {
                        stylesDrawerRoot.bottom = newStyleSpacingBottom;
                    }
                });
            }
            else {
                stylesDrawerRoot.left = 0;
                stylesDrawerRoot.right = 0;
            }
            return stylesDrawerRoot;
        }, this._el.nativeElement, this._drawerRootClass, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** Set default position */
        if (!this.position) ;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.opened = !this.opened;
        this.ngOnChanges();
    }
}
LyDrawer.decorators = [
    { type: Directive, args: [{
                selector: 'ly-drawer',
                exportAs: 'lyDrawer'
            },] },
];
/** @nocollapse */
LyDrawer.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyDrawerContainer }
];
LyDrawer.propDecorators = {
    config: [{ type: Input }],
    opened: [{ type: Input }],
    mode: [{ type: Input }],
    spacingTop: [{ type: Input }],
    spacingBottom: [{ type: Input }],
    spacingStart: [{ type: Input }],
    spacingRight: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    position: [{ type: Input }]
};
/**
 * \@dddd
 * @param {?} val
 * @return {?}
 */
function toPx(val) {
    if (typeof val === 'number') {
        return `${val}px`;
    }
    else {
        return val;
    }
}
/**
 * @param {?} object
 * @param {?} key
 * @param {?=} _new
 * @return {?}
 */
function createEmptyPropOrUseExisting(object, key, _new) {
    return key in object
        ? object[key]
        : object[key] = _new || {};
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyDrawerModule {
}
LyDrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LyCommonModule
                ],
                exports: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
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

export { LyDrawerContainer, LyDrawerContent, LyDrawer, LyDrawerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIHRvQm9vbGVhbiwgZWFjaE1lZGlhIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnc3RhcnQnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBkcmF3ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAnLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcnOiAndG91Y2gnXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxuICAgIG92ZXJmbG93OiAnYXV0bydcbiAgfSxcbiAgZHJhd2VyQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgZHJhd2VyT3BlbmVkOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDApJ1xuICB9XG59KTtcblxudHlwZSBwb3NpdGlvbiA9ICdzdGFydCcgfCAnZW5kJyB8ICd0b3AnIHwgJ2JvdHRvbSc7XG50eXBlIG1vZGUgPSAnc2lkZScgfCAnb3ZlcicgfCAncHVzaCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGFpbmVyIHtcbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHktZHJhd2VyLWNvbnRhaW5lcicsIFNUWUxFX1BSSU9SSVRZKTtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIGRyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRyYXdlckNvbnRhaW5lcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIGRyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyQ29udGVudCk7XG4gIH1cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlcicsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZENsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbW9kZTogbW9kZTtcbiAgcHJpdmF0ZSBfbW9kZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgcHJpdmF0ZSBfd2lkdGhDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICBwcml2YXRlIF9oZWlnaHRDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZTtcbiAgQElucHV0KCkgc3BhY2luZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdTdGFydDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgZHJhd2VyLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsOiBzdHJpbmc7XG4gICAgICAgIGlmICh2YWwgPT09ICdzdGFydCcgfHwgdmFsID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbcG9zaXRpb25WYWxdOiAwXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgX19tb2RlID0gdGhpcy5tb2RlO1xuICAgIGNvbnN0IF9fb3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgbGV0IF9fd2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IF9faGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY29uc3QgX19zcGFjaW5nVG9wID0gdGhpcy5zcGFjaW5nVG9wO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JvdHRvbSA9IHRoaXMuc3BhY2luZ0JvdHRvbTtcbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgX193aWR0aCA9ICcyMzBweCc7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5ld0tleURyYXdlckNvbnRlbnQgPSBgbHktZHJhd2VyLWNvbnRlbnQtLS0tOiR7XG4gICAgICBfX21vZGUgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgX19vcGVuZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX2hlaWdodCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX3Bvc2l0aW9uIHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICBpZiAoX19vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlck9wZW5lZCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuXG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyYXdlckNvbnRlbnRTdHlsZXM6IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0Pzogc3RyaW5nXG4gICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICBtYXJnaW5Ub3A/OiBzdHJpbmdcbiAgICAgICAgICBtYXJnaW5Cb3R0b20/OiBzdHJpbmdcbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBsZXQgcG9zaXRpb25WYWwgPSAnbWFyZ2luLSc7XG4gICAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uVmFsICs9IF9fcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhkcmF3ZXJDb250ZW50U3R5bGVzLCBicmVha1BvaW50KTtcbiAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRyYXdlckNvbnRlbnRTdHlsZXNbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgIH0sXG4gICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSxcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuX2RyYXdlckNsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG51bGwsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUobmV3S2V5RHJhd2VyQ29udGVudCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBkcmF3ZXJDb250ZW50Tk9wZW5TdHlsZXM6IHtcbiAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBsZXQgcG9zaXRpb25WYWw6IHN0cmluZztcbiAgICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IHRoZW1lLmdldERpcmVjdGlvbihfX3Bvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IF9fcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm5uID0gcG9zaXRpb25WYWwgPT09ICdsZWZ0JyB8fCBwb3NpdGlvblZhbCA9PT0gJ3RvcCcgPyAnLScgOiAnKyc7XG4gICAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVYID0gYHRyYW5zbGF0ZVgoJHtubm4gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhkcmF3ZXJDb250ZW50Tk9wZW5TdHlsZXMsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZHJhd2VyQ29udGVudE5PcGVuU3R5bGVzLnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgICAgZWFjaE1lZGlhKF9faGVpZ2h0LCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWSA9IGB0cmFuc2xhdGVZKCR7bm5uICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudE5PcGVuU3R5bGVzLCBicmVha1BvaW50KTtcbiAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRyYXdlckNvbnRlbnROT3BlblN0eWxlcy50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcmF3ZXJDb250ZW50Tk9wZW5TdHlsZXM7XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9kcmF3ZXJSb290Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZHJhd2VyLXJvb3Q6JHtfX3dpZHRofcOCwrcke19faGVpZ2h0fcOCwrcke19fc3BhY2luZ1RvcH3DgsK3JHtfX3NwYWNpbmdCb3R0b219YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzRHJhd2VyUm9vdDoge1xuICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICAgICAgdG9wPzogc3RyaW5nXG4gICAgICAgIGJvdHRvbT86IHN0cmluZ1xuICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICB9ID0geyB9O1xuICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZUhlaWdodCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdUb3AsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nVG9wID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0JvdHRvbSwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdCb3R0b20gPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5sZWZ0ID0gMDtcbiAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5yaWdodCA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGVzRHJhd2VyUm9vdDtcbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJSb290Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgLy8gdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBkZGRkXG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxXaXRoU3BhY2luZyhzcGFjaW5nVG9wPzogc3RyaW5nIHwgbnVtYmVyLCBzcGFjaW5nQm90dG9tPzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmIChzcGFjaW5nVG9wIHx8IHNwYWNpbmdCb3R0b20pIHtcbiAgICBsZXQgc3R5bCA9ICdjYWxjKDEwMCUnO1xuICAgIGlmIChzcGFjaW5nVG9wKSB7XG4gICAgICBzdHlsICs9IGAgLSAke3RvUHgoc3BhY2luZ1RvcCl9YDtcbiAgICB9XG4gICAgaWYgKHNwYWNpbmdCb3R0b20pIHtcbiAgICAgIHN0eWwgKz0gYCAtICR7dG9QeChzcGFjaW5nQm90dG9tKX1gO1xuICAgIH1cbiAgICBzdHlsICs9ICcpJztcbiAgICByZXR1cm4gc3R5bDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJzEwMCUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nLCBfbmV3PzogYW55KSB7XG4gIHJldHVybiBrZXkgaW4gb2JqZWN0XG4gID8gb2JqZWN0W2tleV1cbiAgOiBvYmplY3Rba2V5XSA9IF9uZXcgfHwge307XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9kcmF3ZXInO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBSUEsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztBQUN6QixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0FBRWpDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN6QyxlQUFlLEVBQUU7UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQiw0QkFBNEIsRUFBRSxPQUFPO0tBQ3RDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLE9BQU87UUFDakIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUMzQixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELGFBQWEsRUFBRTtRQUNiLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLDBCQUEwQjtLQUN0QztDQUNGLENBQUMsQ0FBQzs7Ozs7OztJQVdELFlBQ1UsUUFDQSxXQUNBO1FBRkEsV0FBTSxHQUFOLE1BQU07UUFDTixjQUFTLEdBQVQsU0FBUztRQUNULFFBQUcsR0FBSCxHQUFHO3VCQUxILElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxjQUFjLENBQUM7UUFPaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMvRTs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFD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