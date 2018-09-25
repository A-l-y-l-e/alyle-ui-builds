/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2, forwardRef, ContentChild } from '@angular/core';
import { LyTheme2, toBoolean, eachMedia } from '@alyle/ui';
/** @type {?} */
const DEFAULT_MODE = 'side';
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
const ɵ0 = styles;
/** @typedef {?} */
var position;
/** @typedef {?} */
var mode;
export class LyDrawerContainer {
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
if (false) {
    /** @type {?} */
    LyDrawerContainer.prototype.classes;
    /** @type {?} */
    LyDrawerContainer.prototype.drawerContent;
    /** @type {?} */
    LyDrawerContainer.prototype._theme;
    /** @type {?} */
    LyDrawerContainer.prototype._renderer;
    /** @type {?} */
    LyDrawerContainer.prototype._el;
}
export class LyDrawerContent {
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
if (false) {
    /** @type {?} */
    LyDrawerContent.prototype._theme;
    /** @type {?} */
    LyDrawerContent.prototype._renderer;
    /** @type {?} */
    LyDrawerContent.prototype._el;
}
export class LyDrawer {
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
        if (!this.position) {
            // this.position = DEFAULT_POSITION;
        }
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
if (false) {
    /** @type {?} */
    LyDrawer.prototype._opened;
    /** @type {?} */
    LyDrawer.prototype._openedClass;
    /** @type {?} */
    LyDrawer.prototype._mode;
    /** @type {?} */
    LyDrawer.prototype._modeClass;
    /** @type {?} */
    LyDrawer.prototype._width;
    /** @type {?} */
    LyDrawer.prototype._widthClass;
    /** @type {?} */
    LyDrawer.prototype._height;
    /** @type {?} */
    LyDrawer.prototype._heightClass;
    /** @type {?} */
    LyDrawer.prototype._position;
    /** @type {?} */
    LyDrawer.prototype._positionClass;
    /** @type {?} */
    LyDrawer.prototype._drawerRootClass;
    /** @type {?} */
    LyDrawer.prototype._drawerClass;
    /** @type {?} */
    LyDrawer.prototype._drawerContentClass;
    /**
     * @deprecated
     * @type {?}
     */
    LyDrawer.prototype.config;
    /** @type {?} */
    LyDrawer.prototype.mode;
    /** @type {?} */
    LyDrawer.prototype.spacingTop;
    /** @type {?} */
    LyDrawer.prototype.spacingBottom;
    /** @type {?} */
    LyDrawer.prototype.spacingStart;
    /** @type {?} */
    LyDrawer.prototype.spacingRight;
    /** @type {?} */
    LyDrawer.prototype.width;
    /** @type {?} */
    LyDrawer.prototype.height;
    /** @type {?} */
    LyDrawer.prototype._theme;
    /** @type {?} */
    LyDrawer.prototype._renderer;
    /** @type {?} */
    LyDrawer.prototype._el;
    /** @type {?} */
    LyDrawer.prototype._drawerContainer;
}
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
 * @param {?=} spacingTop
 * @param {?=} spacingBottom
 * @return {?}
 */
function valWithSpacing(spacingTop, spacingBottom) {
    if (spacingTop || spacingBottom) {
        /** @type {?} */
        let styl = 'calc(100%';
        if (spacingTop) {
            styl += ` - ${toPx(spacingTop)}`;
        }
        if (spacingBottom) {
            styl += ` - ${toPx(spacingBottom)}`;
        }
        styl += ')';
        return styl;
    }
    else {
        return '100%';
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBK0MsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSSxPQUFPLEVBQUUsUUFBUSxFQUFrQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUUzRSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7O0FBQzVCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQzs7QUFDekIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDOztBQUVqQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsNEJBQTRCLEVBQUUsT0FBTztLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDM0IsUUFBUSxFQUFFLE1BQU07S0FDakI7SUFDRCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSwwQkFBMEI7S0FDdEM7Q0FDRixDQUFDLENBQUM7Ozs7OztBQVFILE1BQU07Ozs7OztJQUdKLFlBQ1UsUUFDQSxXQUNBO1FBRkEsV0FBTSxHQUFOLE1BQU07UUFDTixjQUFTLEdBQVQsU0FBUztRQUNULFFBQUcsR0FBSCxHQUFHO3VCQUxILElB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMk1SLGNBQWMsR0FBb0I7SUFDaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDO0tBQ25CO1NBQU07UUFDTCxPQUFPLEdBQUcsQ0FBQztLQUNaO0NBQ0Y7Ozs7OztBQUVELHdCQUF3QixVQUE0QixFQUFFLGFBQStCO0lBQ25GLElBQUksVUFBVSxJQUFJLGFBQWEsRUFBRTs7UUFDL0IsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7U0FDbEM7UUFDRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxHQUFHLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCxPQUFPLE1BQU0sQ0FBQztLQUNmO0NBQ0Y7Ozs7Ozs7QUFFRCxzQ0FBc0MsTUFBYyxFQUFFLEdBQVcsRUFBRSxJQUFVO0lBQzNFLE9BQU8sR0FBRyxJQUFJLE1BQU07UUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCB0b0Jvb2xlYW4sIGVhY2hNZWRpYSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IERFRkFVTFRfTU9ERSA9ICdzaWRlJztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwKSdcbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nO1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInIHwgJ3B1c2gnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LWRyYXdlci1jb250YWluZXInLCBTVFlMRV9QUklPUklUWSk7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeURyYXdlckNvbnRlbnQpKSBkcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBkcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGRyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlckNvbnRlbnQpO1xuICB9XG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWRDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX21vZGU6IG1vZGU7XG4gIHByaXZhdGUgX21vZGVDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIHByaXZhdGUgX3dpZHRoQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVpZ2h0Q2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZHJhd2VyUm9vdENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNvbnRlbnRDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKSBjb25maWc6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGU7XG4gIEBJbnB1dCgpIHNwYWNpbmdUb3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nU3RhcnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGRyYXdlci5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBwb3NpdGlvblZhbDogc3RyaW5nO1xuICAgICAgICBpZiAodmFsID09PSAnc3RhcnQnIHx8IHZhbCA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IHRoZW1lLmdldERpcmVjdGlvbih2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW3Bvc2l0aW9uVmFsXTogMFxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBfZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IF9fbW9kZSA9IHRoaXMubW9kZTtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IF9fc3BhY2luZ1RvcCA9IHRoaXMuc3BhY2luZ1RvcDtcbiAgICBjb25zdCBfX3NwYWNpbmdCb3R0b20gPSB0aGlzLnNwYWNpbmdCb3R0b207XG4gICAgaWYgKF9fd2lkdGggJiYgX19oZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgd2lkdGhcXGAgYW5kIFxcYGhlaWdodFxcYCBhcmUgZGVmaW5lZCwgeW91IGNhbiBvbmx5IGRlZmluZSBvbmVgKTtcbiAgICB9IGVsc2UgaWYgKCFfX3dpZHRoKSB7XG4gICAgICBpZiAoIV9faGVpZ2h0KSB7XG4gICAgICAgIF9fd2lkdGggPSAnMjMwcHgnO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgX19tb2RlIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICBfX29wZW5lZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgX19oZWlnaHQgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgIGlmIChfX29wZW5lZCkge1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyT3BlbmVkLCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG5cbiAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleURyYXdlckNvbnRlbnQsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgIG1hcmdpbkxlZnQ/OiBzdHJpbmdcbiAgICAgICAgICBtYXJnaW5SaWdodD86IHN0cmluZ1xuICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgIG1hcmdpbkJvdHRvbT86IHN0cmluZ1xuICAgICAgICB9ID0ge307XG4gICAgICAgIGxldCBwb3NpdGlvblZhbCA9ICdtYXJnaW4tJztcbiAgICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCArPSB0aGVtZS5nZXREaXJlY3Rpb24oX19wb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgKz0gX19wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHRvUHgodmFsKTtcbiAgICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKGRyYXdlckNvbnRlbnRTdHlsZXMsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludFtwb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZHJhd2VyQ29udGVudFN0eWxlc1twb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcmF3ZXJDb250ZW50U3R5bGVzO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbnVsbCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyYXdlckNvbnRlbnROT3BlblN0eWxlczoge1xuICAgICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgICB9ID0ge307XG4gICAgICAgIGxldCBwb3NpdGlvblZhbDogc3RyaW5nO1xuICAgICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gX19wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBubm4gPSBwb3NpdGlvblZhbCA9PT0gJ2xlZnQnIHx8IHBvc2l0aW9uVmFsID09PSAndG9wJyA/ICctJyA6ICcrJztcbiAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVggPSBgdHJhbnNsYXRlWCgke25ubiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKGRyYXdlckNvbnRlbnROT3BlblN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50Tk9wZW5TdHlsZXMudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19oZWlnaHQpIHtcbiAgICAgICAgICBlYWNoTWVkaWEoX19oZWlnaHQsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVZID0gYHRyYW5zbGF0ZVkoJHtubm4gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhkcmF3ZXJDb250ZW50Tk9wZW5TdHlsZXMsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZHJhd2VyQ29udGVudE5PcGVuU3R5bGVzLnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRyYXdlckNvbnRlbnROT3BlblN0eWxlcztcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2RyYXdlclJvb3RDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1kcmF3ZXItcm9vdDoke19fd2lkdGh9wrcke19faGVpZ2h0fcK3JHtfX3NwYWNpbmdUb3B9wrcke19fc3BhY2luZ0JvdHRvbX1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNEcmF3ZXJSb290OiB7XG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIGhlaWdodD86IHN0cmluZ1xuICAgICAgICB0b3A/OiBzdHJpbmdcbiAgICAgICAgYm90dG9tPzogc3RyaW5nXG4gICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgIH0gPSB7IH07XG4gICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3Qud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19oZWlnaHQpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9faGVpZ2h0LCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlSGVpZ2h0ID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ1RvcCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdUb3AgPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQm90dG9tLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0JvdHRvbSA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmxlZnQgPSAwO1xuICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnJpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZXNEcmF3ZXJSb290O1xuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlclJvb3RDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAvLyB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG59XG5cbi8qKlxuICogQGRkZGRcbiAqL1xuZnVuY3Rpb24gdG9QeCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbFdpdGhTcGFjaW5nKHNwYWNpbmdUb3A/OiBzdHJpbmcgfCBudW1iZXIsIHNwYWNpbmdCb3R0b20/OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHNwYWNpbmdUb3AgfHwgc3BhY2luZ0JvdHRvbSkge1xuICAgIGxldCBzdHlsID0gJ2NhbGMoMTAwJSc7XG4gICAgaWYgKHNwYWNpbmdUb3ApIHtcbiAgICAgIHN0eWwgKz0gYCAtICR7dG9QeChzcGFjaW5nVG9wKX1gO1xuICAgIH1cbiAgICBpZiAoc3BhY2luZ0JvdHRvbSkge1xuICAgICAgc3R5bCArPSBgIC0gJHt0b1B4KHNwYWNpbmdCb3R0b20pfWA7XG4gICAgfVxuICAgIHN0eWwgKz0gJyknO1xuICAgIHJldHVybiBzdHlsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnMTAwJSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcsIF9uZXc/OiBhbnkpIHtcbiAgcmV0dXJuIGtleSBpbiBvYmplY3RcbiAgPyBvYmplY3Rba2V5XVxuICA6IG9iamVjdFtrZXldID0gX25ldyB8fCB7fTtcbn1cbiJdfQ==