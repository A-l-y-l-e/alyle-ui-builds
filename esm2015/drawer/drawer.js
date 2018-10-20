/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
const DEFAULT_MODE = 'side';
/** @type {?} */
const DEFAULT_WIDTH = '230px';
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
        overflow: 'auto',
        visibility: 'hidden'
    },
    drawerContent: {
        display: 'block'
    },
    drawerOpened: {
        transform: 'translate3d(0px, 0px, 0)',
        visibility: 'visible'
    },
    backdrop: Object.assign({}, LY_COMMON_STYLES.fill, { backgroundColor: theme.drawer.backdrop }),
    transition: {
        transition: `${theme.animations.durations.complex}ms ${theme.animations.curves.deceleration}`,
        transitionProperty: 'transform, margin, visibility'
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
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY + 1.9);
        this._openDrawers = 0;
        this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
    }
}
LyDrawerContainer.decorators = [
    { type: Directive, args: [{
                selector: 'ly-drawer-container'
            },] }
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
    LyDrawerContainer.prototype._openDrawers;
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
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} drawerContainer
     */
    constructor(_renderer, _el, drawerContainer) {
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
            },] }
];
/** @nocollapse */
LyDrawerContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyDrawerContainer }
];
if (false) {
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
     * @param {?} _vcr
     */
    constructor(_theme, _renderer, _el, _drawerContainer, _vcr) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this._drawerContainer = _drawerContainer;
        this._vcr = _vcr;
        /**
         * Styles
         * @ignore
         */
        this.classes = this._drawerContainer.classes;
        this._position = DEFAULT_POSITION;
        this.mode = DEFAULT_MODE;
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
        this._updateBackdrop();
        this._updateAnimations();
        if (this._forceModeOver && !this._fromToggle) {
            this._resetForceModeOver();
        }
        /** @type {?} */
        const __mode = this.mode;
        /** @type {?} */
        const __forceModeOver = this._forceModeOver;
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
                /** set default __width if `width` & `height` is `undefined` */
                __width = DEFAULT_WIDTH;
            }
        }
        if (__opened) {
            /** create styles for mode side */
            this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
            if (__mode === 'side') {
                /** @type {?} */
                const newKeyDrawerContent = `ly-drawer-content----:${__opened || DEFAULT_VALUE}·${__width || DEFAULT_VALUE}·${__position || DEFAULT_VALUE}`;
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
                    eachMedia(/** @type {?} */ (__opened), () => { });
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
                /** remove styles for <ly-drawer-content> */
                this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
                this._drawerContentClass = null;
            }
        }
        else {
            this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this._drawerContentClass);
            this._drawerContentClass = null;
            this._renderer.removeClass(this._el.nativeElement, this._drawerClass);
            this._drawerClass = null;
        }
        /** default styles */
        // tslint:disable-next-line:max-line-length
        this._drawerRootClass = this._theme.addStyle(`ly-drawer-root:${__width}·${__height}·${__spacingTop}·${__spacingBottom}·${__spacingBottom}·${__position}·${__mode}·${__forceModeOver}`, (theme) => {
            /** @type {?} */
            const stylesDrawerRoot = {};
            /** @type {?} */
            const positionSign = __position === 'start' || __position === 'top' ? '-' : '+';
            if (__width) {
                eachMedia(__width, (val, media, isMedia) => {
                    if ((__mode === 'over' || __forceModeOver) && val === '0') {
                        return;
                    }
                    /** @type {?} */
                    const newStyleWidth = toPx(val);
                    /** @type {?} */
                    const newTranslateX = `translateX(${positionSign + toPx(val)})`;
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.width = newStyleWidth;
                        styleOfBreakPoint.transform = newTranslateX;
                    }
                    else {
                        stylesDrawerRoot.width = newStyleWidth;
                        stylesDrawerRoot.transform = newTranslateX;
                    }
                });
            }
            else if (__height) {
                eachMedia(__height, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleHeight = toPx(val);
                    /** @type {?} */
                    const newTranslateY = `translateY(${positionSign + toPx(val)})`;
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.height = newStyleHeight;
                        styleOfBreakPoint.transform = newTranslateY;
                    }
                    else {
                        stylesDrawerRoot.height = newStyleHeight;
                        stylesDrawerRoot.transform = newTranslateY;
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
        }, this._el.nativeElement, this._drawerRootClass, __mode === 'side' ? STYLE_PRIORITY : STYLE_PRIORITY + 1);
        this._fromToggle = false;
    }
    /**
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        const width = getComputedStyle(this._el.nativeElement).width;
        this._fromToggle = true;
        if (width === '0px') {
            this._forceModeOver = true;
            this.opened = true;
        }
        else {
            if (this._forceModeOver && this.opened) {
                this._resetForceModeOver();
            }
            else {
                this.opened = !this.opened;
            }
        }
        this.ngOnChanges();
    }
    /**
     * @return {?}
     */
    _resetForceModeOver() {
        this._forceModeOver = false;
        this.opened = false;
    }
    /**
     * @return {?}
     */
    _updateBackdrop() {
        if (this.opened && (this.mode === 'over' || this._forceModeOver)) {
            this._drawerContainer._openDrawers++;
            this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
            (/** @type {?} */ (this._viewRef.rootNodes[0])).style.zIndex = `${this._drawerContainer._openDrawers}`;
        }
        else if (this._viewRef) {
            this._drawerContainer._openDrawers--;
            this._vcr.clear();
            this._viewRef = null;
        }
    }
    /**
     * @return {?}
     */
    _updateAnimations() {
        if (this._fromToggle && !this._isAnimation) {
            this._renderer.addClass(this._el.nativeElement, this.classes.transition);
            this._renderer.addClass(this._drawerContainer.drawerContent._getHostElement(), this.classes.transition);
            this._isAnimation = true;
        }
        else if (!this._fromToggle && this._isAnimation) {
            this._renderer.removeClass(this._el.nativeElement, this.classes.transition);
            this._renderer.removeClass(this._drawerContainer.drawerContent._getHostElement(), this.classes.transition);
            this._isAnimation = false;
        }
    }
}
LyDrawer.decorators = [
    { type: Component, args: [{
                selector: 'ly-drawer',
                template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'lyDrawer'
            }] }
];
/** @nocollapse */
LyDrawer.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyDrawerContainer },
    { type: ViewContainerRef }
];
LyDrawer.propDecorators = {
    _backdrop: [{ type: ViewChild, args: [TemplateRef,] }],
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
    /**
     * Styles
     * @ignore
     * @type {?}
     */
    LyDrawer.prototype.classes;
    /** @type {?} */
    LyDrawer.prototype._forceModeOver;
    /** @type {?} */
    LyDrawer.prototype._fromToggle;
    /** @type {?} */
    LyDrawer.prototype._opened;
    /** @type {?} */
    LyDrawer.prototype._viewRef;
    /** @type {?} */
    LyDrawer.prototype._isAnimation;
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
     * @ignore
     * @type {?}
     */
    LyDrawer.prototype._backdrop;
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
    /** @type {?} */
    LyDrawer.prototype._vcr;
}
/**
 * convert number to px
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBRVYsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFFUixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2YsTUFBTSxXQUFXLENBQUM7O0FBRXJCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQzs7QUFDNUIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDOztBQUM5QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7O0FBQ3pCLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUMxQixNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzs7QUFFakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLDRCQUE0QixFQUFFLE9BQU87S0FDdEM7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsT0FBTztRQUNqQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQzNCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFVBQVUs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QUVyQixLQUFLO21CQVNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBRUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFPUixTQUFTLElBQUksQ0FBQyxHQUFvQjtJQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDbkI7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDO0tBQ1o7Q0FDRjs7Ozs7OztBQUVELFNBQVMsNEJBQTRCLENBQUMsTUFBYyxFQUFFLEdBQVcsRUFBRSxJQUFVO0lBQzNFLE9BQU8sR0FBRyxJQUFJLE1BQU07UUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGVhY2hNZWRpYSxcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBERUZBVUxUX01PREUgPSAnc2lkZSc7XG5jb25zdCBERUZBVUxUX1dJRFRIID0gJzIzMHB4JztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwKScsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gIH0sXG4gIGJhY2tkcm9wOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZHJhd2VyLmJhY2tkcm9wXG4gIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufWAsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiAndHJhbnNmb3JtLCBtYXJnaW4sIHZpc2liaWxpdHknXG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ3RvcCcgfCAnYm90dG9tJztcbnR5cGUgbW9kZSA9ICdzaWRlJyB8ICdvdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZICsgMS45KTtcbiAgX29wZW5EcmF3ZXJzID0gMDtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIGRyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRyYXdlckNvbnRhaW5lcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBkcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJDb250ZW50KTtcbiAgfVxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXM7XG4gIHByaXZhdGUgX2ZvcmNlTW9kZU92ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zyb21Ub2dnbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2JhY2tkcm9wOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZSA9IERFRkFVTFRfTU9ERTtcbiAgQElucHV0KCkgc3BhY2luZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdTdGFydDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBkcmF3ZXIucG9zaXRpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgcG9zaXRpb25WYWw6IHN0cmluZztcbiAgICAgICAgaWYgKHZhbCA9PT0gJ3N0YXJ0JyB8fCB2YWwgPT09ICdlbmQnKSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB0aGVtZS5nZXREaXJlY3Rpb24odmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtwb3NpdGlvblZhbF06IDBcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBfZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3VwZGF0ZUJhY2tkcm9wKCk7XG4gICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9ucygpO1xuICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyICYmICF0aGlzLl9mcm9tVG9nZ2xlKSB7XG4gICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICB9XG4gICAgY29uc3QgX19tb2RlID0gdGhpcy5tb2RlO1xuICAgIGNvbnN0IF9fZm9yY2VNb2RlT3ZlciA9IHRoaXMuX2ZvcmNlTW9kZU92ZXI7XG4gICAgY29uc3QgX19vcGVuZWQgPSB0aGlzLm9wZW5lZDtcbiAgICBsZXQgX193aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgX19oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCBfX3Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCBfX3NwYWNpbmdUb3AgPSB0aGlzLnNwYWNpbmdUb3A7XG4gICAgY29uc3QgX19zcGFjaW5nQm90dG9tID0gdGhpcy5zcGFjaW5nQm90dG9tO1xuXG4gICAgaWYgKF9fd2lkdGggJiYgX19oZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgd2lkdGhcXGAgYW5kIFxcYGhlaWdodFxcYCBhcmUgZGVmaW5lZCwgeW91IGNhbiBvbmx5IGRlZmluZSBvbmVgKTtcbiAgICB9IGVsc2UgaWYgKCFfX3dpZHRoKSB7XG4gICAgICBpZiAoIV9faGVpZ2h0KSB7XG4gICAgICAgIC8qKiBzZXQgZGVmYXVsdCBfX3dpZHRoIGlmIGB3aWR0aGAgJiBgaGVpZ2h0YCBpcyBgdW5kZWZpbmVkYCAqL1xuICAgICAgICBfX3dpZHRoID0gREVGQVVMVF9XSURUSDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX19vcGVuZWQpIHtcbiAgICAgIC8qKiBjcmVhdGUgc3R5bGVzIGZvciBtb2RlIHNpZGUgKi9cbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlck9wZW5lZCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgaWYgKF9fbW9kZSA9PT0gJ3NpZGUnKSB7XG4gICAgICAgIGNvbnN0IG5ld0tleURyYXdlckNvbnRlbnQgPSBgbHktZHJhd2VyLWNvbnRlbnQtLS0tOiR7XG4gICAgICAgICAgX19vcGVuZWQgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgICBfX3Bvc2l0aW9uIHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUobmV3S2V5RHJhd2VyQ29udGVudCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IGRyYXdlckNvbnRlbnRTdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0Pzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5Ub3A/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT86IHN0cmluZ1xuICAgICAgICAgIH0gPSB7fTtcbiAgICAgICAgICBsZXQgcG9zaXRpb25WYWwgPSAnbWFyZ2luLSc7XG4gICAgICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdzdGFydCcgfHwgX19wb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVmFsICs9IHRoZW1lLmdldERpcmVjdGlvbihfX3Bvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25WYWwgKz0gX19wb3NpdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWFjaE1lZGlhKF9fb3BlbmVkIGFzIGFueSwgKCkgPT4ge30pO1xuICAgICAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHRvUHgodmFsKTtcbiAgICAgICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKGRyYXdlckNvbnRlbnRTdHlsZXMsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50W3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyQ29udGVudFN0eWxlc1twb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRyYXdlckNvbnRlbnRTdHlsZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKiogZGVmYXVsdCBzdHlsZXMgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5fZHJhd2VyUm9vdENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWRyYXdlci1yb290OiR7X193aWR0aH3CtyR7X19oZWlnaHR9wrcke19fc3BhY2luZ1RvcH3CtyR7X19zcGFjaW5nQm90dG9tfcK3JHtfX3NwYWNpbmdCb3R0b219wrcke19fcG9zaXRpb259wrcke19fbW9kZX3CtyR7X19mb3JjZU1vZGVPdmVyfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc0RyYXdlclJvb3Q6IHtcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nXG4gICAgICAgIHRvcD86IHN0cmluZ1xuICAgICAgICBib3R0b20/OiBzdHJpbmdcbiAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgIH0gPSB7IH07XG4gICAgICBjb25zdCBwb3NpdGlvblNpZ24gPSBfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICd0b3AnID8gJy0nIDogJysnO1xuICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgaWYgKChfX21vZGUgPT09ICdvdmVyJyB8fCBfX2ZvcmNlTW9kZU92ZXIpICYmIHZhbCA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGB0cmFuc2xhdGVYKCR7cG9zaXRpb25TaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX2hlaWdodCkge1xuICAgICAgICBlYWNoTWVkaWEoX19oZWlnaHQsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVIZWlnaHQgPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWSA9IGB0cmFuc2xhdGVZKCR7cG9zaXRpb25TaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdUb3AsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nVG9wID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0JvdHRvbSwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdCb3R0b20gPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5sZWZ0ID0gMDtcbiAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5yaWdodCA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGVzRHJhd2VyUm9vdDtcbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJSb290Q2xhc3MsIF9fbW9kZSA9PT0gJ3NpZGUnID8gU1RZTEVfUFJJT1JJVFkgOiBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCkud2lkdGg7XG4gICAgdGhpcy5fZnJvbVRvZ2dsZSA9IHRydWU7XG4gICAgaWYgKHdpZHRoID09PSAnMHB4Jykge1xuICAgICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpIHtcbiAgICB0aGlzLl9mb3JjZU1vZGVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5fZm9yY2VNb2RlT3ZlcikpIHtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMrKztcbiAgICAgIHRoaXMuX3ZpZXdSZWYgPSB0aGlzLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2JhY2tkcm9wKTtcbiAgICAgICh0aGlzLl92aWV3UmVmLnJvb3ROb2Rlc1swXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuekluZGV4ID0gYCR7dGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vyc31gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vycy0tO1xuICAgICAgdGhpcy5fdmNyLmNsZWFyKCk7XG4gICAgICB0aGlzLl92aWV3UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbmltYXRpb25zKCkge1xuICAgIGlmICh0aGlzLl9mcm9tVG9nZ2xlICYmICF0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLmRyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9mcm9tVG9nZ2xlICYmIHRoaXMuX2lzQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IG51bWJlciB0byBweFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcsIF9uZXc/OiBhbnkpIHtcbiAgcmV0dXJuIGtleSBpbiBvYmplY3RcbiAgPyBvYmplY3Rba2V5XVxuICA6IG9iamVjdFtrZXldID0gX25ldyB8fCB7fTtcbn1cbiJdfQ==