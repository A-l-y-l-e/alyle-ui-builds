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
        /**
         * @ignore
         */
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
    _drawerContent: [{ type: ContentChild, args: [forwardRef(() => LyDrawerContent),] }]
};
if (false) {
    /**
     * @ignore
     * @type {?}
     */
    LyDrawerContainer.prototype.classes;
    /** @type {?} */
    LyDrawerContainer.prototype._openDrawers;
    /** @type {?} */
    LyDrawerContainer.prototype._drawerContent;
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
                }, this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
            }
            else {
                /** remove styles for <ly-drawer-content> */
                this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                this._drawerContentClass = null;
            }
        }
        else {
            this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
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
            this._renderer.addClass(this._drawerContainer._drawerContent._getHostElement(), this.classes.transition);
            this._isAnimation = true;
        }
        else if (!this._fromToggle && this._isAnimation) {
            this._renderer.removeClass(this._el.nativeElement, this.classes.transition);
            this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this.classes.transition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBRVYsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFFUixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2YsTUFBTSxXQUFXLENBQUM7O0FBRXJCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQzs7QUFDNUIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDOztBQUM5QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7O0FBQ3pCLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUMxQixNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzs7QUFFakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLDRCQUE0QixFQUFFLE9BQU87S0FDdEM7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsT0FBTztRQUNqQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQzNCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFVBQVUs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QUFXO3FCQUVyQixLQUFLO21CQVNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBRUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFPUixTQUFTLElBQUksQ0FBQyxHQUFvQjtJQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDbkI7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDO0tBQ1o7Q0FDRjs7Ozs7OztBQUVELFNBQVMsNEJBQTRCLENBQUMsTUFBYyxFQUFFLEdBQVcsRUFBRSxJQUFVO0lBQzNFLE9BQU8sR0FBRyxJQUFJLE1BQU07UUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Q0FDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGVhY2hNZWRpYSxcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBERUZBVUxUX01PREUgPSAnc2lkZSc7XG5jb25zdCBERUZBVUxUX1dJRFRIID0gJzIzMHB4JztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ3N0YXJ0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwKScsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gIH0sXG4gIGJhY2tkcm9wOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZHJhd2VyLmJhY2tkcm9wXG4gIH0sXG4gIHRyYW5zaXRpb246IHtcbiAgICB0cmFuc2l0aW9uOiBgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufWAsXG4gICAgdHJhbnNpdGlvblByb3BlcnR5OiAndHJhbnNmb3JtLCBtYXJnaW4sIHZpc2liaWxpdHknXG4gIH1cbn0pO1xuXG50eXBlIHBvc2l0aW9uID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ3RvcCcgfCAnYm90dG9tJztcbnR5cGUgbW9kZSA9ICdzaWRlJyB8ICdvdmVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZICsgMS45KTtcbiAgX29wZW5EcmF3ZXJzID0gMDtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RHJhd2VyQ29udGVudCkpIF9kcmF3ZXJDb250ZW50OiBMeURyYXdlckNvbnRlbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kcmF3ZXJDb250YWluZXIpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIGRyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyQ29udGVudCk7XG4gIH1cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmF3ZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5RHJhd2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzO1xuICBwcml2YXRlIF9mb3JjZU1vZGVPdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF9mcm9tVG9nZ2xlOiBib29sZWFuO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9pc0FuaW1hdGlvbjogYm9vbGVhbjtcblxuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZHJhd2VyUm9vdENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNvbnRlbnRDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF9iYWNrZHJvcDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgb3BlbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG4gIEBJbnB1dCgpIG1vZGU6IG1vZGUgPSBERUZBVUxUX01PREU7XG4gIEBJbnB1dCgpIHNwYWNpbmdUb3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nU3RhcnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgZHJhd2VyLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsOiBzdHJpbmc7XG4gICAgICAgIGlmICh2YWwgPT09ICdzdGFydCcgfHwgdmFsID09PSAnZW5kJykge1xuICAgICAgICAgIHBvc2l0aW9uVmFsID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbcG9zaXRpb25WYWxdOiAwXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9kcmF3ZXJDb250YWluZXI6IEx5RHJhd2VyQ29udGFpbmVyLFxuICAgIHByaXZhdGUgX3ZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVCYWNrZHJvcCgpO1xuICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbnMoKTtcbiAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiAhdGhpcy5fZnJvbVRvZ2dsZSkge1xuICAgICAgdGhpcy5fcmVzZXRGb3JjZU1vZGVPdmVyKCk7XG4gICAgfVxuICAgIGNvbnN0IF9fbW9kZSA9IHRoaXMubW9kZTtcbiAgICBjb25zdCBfX2ZvcmNlTW9kZU92ZXIgPSB0aGlzLl9mb3JjZU1vZGVPdmVyO1xuICAgIGNvbnN0IF9fb3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgbGV0IF9fd2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IF9faGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgY29uc3QgX19zcGFjaW5nVG9wID0gdGhpcy5zcGFjaW5nVG9wO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JvdHRvbSA9IHRoaXMuc3BhY2luZ0JvdHRvbTtcblxuICAgIGlmIChfX3dpZHRoICYmIF9faGVpZ2h0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHdpZHRoXFxgIGFuZCBcXGBoZWlnaHRcXGAgYXJlIGRlZmluZWQsIHlvdSBjYW4gb25seSBkZWZpbmUgb25lYCk7XG4gICAgfSBlbHNlIGlmICghX193aWR0aCkge1xuICAgICAgaWYgKCFfX2hlaWdodCkge1xuICAgICAgICAvKiogc2V0IGRlZmF1bHQgX193aWR0aCBpZiBgd2lkdGhgICYgYGhlaWdodGAgaXMgYHVuZGVmaW5lZGAgKi9cbiAgICAgICAgX193aWR0aCA9IERFRkFVTFRfV0lEVEg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9fb3BlbmVkKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlcyBmb3IgbW9kZSBzaWRlICovXG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIGlmIChfX21vZGUgPT09ICdzaWRlJykge1xuICAgICAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgICAgIF9fb3BlbmVkIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgX193aWR0aCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgICAgX19wb3NpdGlvbiB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleURyYXdlckNvbnRlbnQsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBkcmF3ZXJDb250ZW50U3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0Pzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5SaWdodD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luVG9wPzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b20/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgbGV0IHBvc2l0aW9uVmFsID0gJ21hcmdpbi0nO1xuICAgICAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgICAgICBwb3NpdGlvblZhbCArPSB0aGVtZS5nZXREaXJlY3Rpb24oX19wb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVmFsICs9IF9fcG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIGVhY2hNZWRpYShfX29wZW5lZCBhcyBhbnksICgpID0+IHt9KTtcbiAgICAgICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhkcmF3ZXJDb250ZW50U3R5bGVzLCBicmVha1BvaW50KTtcbiAgICAgICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludFtwb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdlckNvbnRlbnRTdHlsZXNbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkcmF3ZXJDb250ZW50U3R5bGVzO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogcmVtb3ZlIHN0eWxlcyBmb3IgPGx5LWRyYXdlci1jb250ZW50PiAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIGRlZmF1bHQgc3R5bGVzICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMuX2RyYXdlclJvb3RDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1kcmF3ZXItcm9vdDoke19fd2lkdGh9wrcke19faGVpZ2h0fcK3JHtfX3NwYWNpbmdUb3B9wrcke19fc3BhY2luZ0JvdHRvbX3CtyR7X19zcGFjaW5nQm90dG9tfcK3JHtfX3Bvc2l0aW9ufcK3JHtfX21vZGV9wrcke19fZm9yY2VNb2RlT3Zlcn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNEcmF3ZXJSb290OiB7XG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIGhlaWdodD86IHN0cmluZ1xuICAgICAgICB0b3A/OiBzdHJpbmdcbiAgICAgICAgYm90dG9tPzogc3RyaW5nXG4gICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICB9ID0geyB9O1xuICAgICAgY29uc3QgcG9zaXRpb25TaWduID0gX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAndG9wJyA/ICctJyA6ICcrJztcbiAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGlmICgoX19tb2RlID09PSAnb3ZlcicgfHwgX19mb3JjZU1vZGVPdmVyKSAmJiB2YWwgPT09ICcwJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVggPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX19oZWlnaHQpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9faGVpZ2h0LCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlSGVpZ2h0ID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVkgPSBgdHJhbnNsYXRlWSgke3Bvc2l0aW9uU2lnbiArIHRvUHgodmFsKX0pYDtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nVG9wLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCb3R0b20sICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQm90dG9tID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QubGVmdCA9IDA7XG4gICAgICAgIHN0eWxlc0RyYXdlclJvb3QucmlnaHQgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcmNlTW9kZU92ZXIoKSB7XG4gICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgKHRoaXMubW9kZSA9PT0gJ292ZXInIHx8IHRoaXMuX2ZvcmNlTW9kZU92ZXIpKSB7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzKys7XG4gICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAodGhpcy5fdmlld1JlZi5yb290Tm9kZXNbMF0gYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLnpJbmRleCA9IGAke3RoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnN9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMtLTtcbiAgICAgIHRoaXMuX3Zjci5jbGVhcigpO1xuICAgICAgdGhpcy5fdmlld1JlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQW5pbWF0aW9ucygpIHtcbiAgICBpZiAodGhpcy5fZnJvbVRvZ2dsZSAmJiAhdGhpcy5faXNBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Zyb21Ub2dnbGUgJiYgdGhpcy5faXNBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IG51bWJlciB0byBweFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcsIF9uZXc/OiBhbnkpIHtcbiAgcmV0dXJuIGtleSBpbiBvYmplY3RcbiAgPyBvYmplY3Rba2V5XVxuICA6IG9iamVjdFtrZXldID0gX25ldyB8fCB7fTtcbn1cbiJdfQ==