/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES, XPosition, DirPosition, YPosition } from '@alyle/ui';
/** @type {?} */
const DEFAULT_MODE = 'side';
/** @type {?} */
const DEFAULT_WIDTH = '230px';
/** @type {?} */
const DEFAULT_VALUE = '';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = XPosition.before;
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
        transform: 'translate(0px, 0px)',
        visibility: 'visible'
    },
    backdrop: Object.assign({}, LY_COMMON_STYLES.fill, { backgroundColor: theme.drawer.backdrop }),
    transition: {
        transition: `${theme.animations.durations.complex}ms ${theme.animations.curves.deceleration}`,
        transitionProperty: 'transform, margin, visibility'
    }
});
const ɵ0 = styles;
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
         * \@docs-private
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
     * \@docs-private
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
         * \@docs-private
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
     * @return {?}
     */
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasBackdrop(val) {
        this._hasBackdrop = val == null ? null : toBoolean(val);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set position(val) {
        if (val !== this.position) {
            this._position = val;
            this._theme.addStyle(`drawer.position:${val}`, 
            // the style needs to be a function so that it can be changed dynamically
            () => ({
                [val]: 0
            }), this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
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
        const __spacingAbove = this.spacingAbove;
        /** @type {?} */
        const __spacingBelow = this.spacingBelow;
        /** @type {?} */
        const __spacingBefore = this.spacingBefore;
        /** @type {?} */
        const __spacingAfter = this.spacingAfter;
        // const __spacingRight = this.spacingRight;
        // const __spacingLeft = this.spacingLeft;
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
                    const positionVal = `margin-${__position}`;
                    // if (__position === 'start' || __position === 'end') {
                    //   positionVal += theme.getDirection(__position);
                    // } else {
                    //   positionVal += __position;
                    // }
                    eachMedia((/** @type {?} */ (__opened)), () => { });
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
        this._drawerRootClass = this._theme.addStyle(`ly-drawer-root:${__width}·${__height}·${__spacingAbove}·${__spacingBelow}·${__spacingBefore}·${__spacingAfter}·${__position}·${__mode}·${__forceModeOver}`, (theme) => {
            /** @type {?} */
            const stylesDrawerRoot = {};
            /** @type {?} */
            const pos = theme.getDirection((/** @type {?} */ (__position)));
            /** @type {?} */
            const positionSign = __position === 'above' ? '-' : '+';
            if (__width) {
                /** @type {?} */
                const dirXSign = pos === DirPosition.left ? '-' : '+';
                eachMedia(__width, (val, media, isMedia) => {
                    if ((__mode === 'over' || __forceModeOver) && val === '0') {
                        return;
                    }
                    /** @type {?} */
                    const newStyleWidth = toPx(val);
                    /** @type {?} */
                    const newTranslateX = `translateX(${dirXSign + toPx(val)})`;
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
            if (__position === 'before' || __position === 'after') {
                eachMedia(__spacingAbove, (val, media, isMedia) => {
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
                eachMedia(__spacingBelow, (val, media, isMedia) => {
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
            else if (__position === YPosition.above || __position === YPosition.below) {
                eachMedia(__spacingBefore, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleSpacingBefore = toPx(val || 0);
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.before = newStyleSpacingBefore;
                    }
                    else {
                        stylesDrawerRoot.before = newStyleSpacingBefore;
                    }
                });
                eachMedia(__spacingAfter, (val, media, isMedia) => {
                    /** @type {?} */
                    const newStyleSpacingAfter = toPx(val || 0);
                    if (isMedia) {
                        /** @type {?} */
                        const breakPoint = theme.getBreakpoint(media);
                        /** @type {?} */
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.after = newStyleSpacingAfter;
                    }
                    else {
                        stylesDrawerRoot.after = newStyleSpacingAfter;
                    }
                });
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
        if (this.opened && (this.hasBackdrop != null ? this.hasBackdrop : (this.mode === 'over' || this._forceModeOver))) {
            if (!this._viewRef) {
                this._drawerContainer._openDrawers++;
                this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
                ((/** @type {?} */ (this._viewRef.rootNodes[0]))).style.zIndex = `${this._drawerContainer._openDrawers}`;
            }
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
    spacingAbove: [{ type: Input }],
    spacingBelow: [{ type: Input }],
    spacingBefore: [{ type: Input }],
    spacingAfter: [{ type: Input }],
    spacingRight: [{ type: Input }],
    spacingLeft: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    hasBackdrop: [{ type: Input }],
    position: [{ type: Input }]
};
if (false) {
    /**
     * Styles
     * \@docs-private
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
    LyDrawer.prototype._hasBackdrop;
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
    LyDrawer.prototype.spacingAbove;
    /** @type {?} */
    LyDrawer.prototype.spacingBelow;
    /** @type {?} */
    LyDrawer.prototype.spacingBefore;
    /** @type {?} */
    LyDrawer.prototype.spacingAfter;
    /** @type {?} */
    LyDrawer.prototype.spacingRight;
    /** @type {?} */
    LyDrawer.prototype.spacingLeft;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBRVYsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDZixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFFUixTQUFTLEVBQ1QsZ0JBQWdCLEVBRWhCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNSLE1BQU0sV0FBVyxDQUFDOztNQUVmLFlBQVksR0FBRyxNQUFNOztNQUNyQixhQUFhLEdBQUcsT0FBTzs7TUFDdkIsYUFBYSxHQUFHLEVBQUU7O01BQ2xCLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNOztNQUVuQyxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLDRCQUE0QixFQUFFLE9BQU87S0FDdEM7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsT0FBTztRQUNqQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQzNCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUscUJBQXFCO1FBQ2hDLFVBQVUsRUFBRSxTQUFTO0tBQ3RC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QUFTLDRCQUE0QixDQUFDLE1BQWMsRUFBRSxHQUFXLEVBQUUsSUFBVTtJQUMzRSxPQUFPLEdBQUcsSUFBSSxNQUFNO1FBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGVhY2hNZWRpYSxcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFBsYWNlbWVudCxcbiAgWFBvc2l0aW9uLFxuICBEaXJQb3NpdGlvbixcbiAgWVBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9NT0RFID0gJ3NpZGUnO1xuY29uc3QgREVGQVVMVF9XSURUSCA9ICcyMzBweCc7XG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9IFhQb3NpdGlvbi5iZWZvcmU7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRyYXdlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCdcbiAgfSxcbiAgZHJhd2VyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICB9LFxuICBkcmF3ZXJDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICBkcmF3ZXJPcGVuZWQ6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpJyxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgfSxcbiAgYmFja2Ryb3A6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kcmF3ZXIuYmFja2Ryb3BcbiAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259YCxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd0cmFuc2Zvcm0sIG1hcmdpbiwgdmlzaWJpbGl0eSdcbiAgfVxufSk7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gUGxhY2VtZW50O1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkgKyAxLjkpO1xuICBfb3BlbkRyYXdlcnMgPSAwO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSkgX2RyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRyYXdlckNvbnRhaW5lcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBkcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJDb250ZW50KTtcbiAgfVxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXM7XG4gIHByaXZhdGUgX2ZvcmNlTW9kZU92ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zyb21Ub2dnbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uOiBib29sZWFuO1xuICBwcml2YXRlIF9oYXNCYWNrZHJvcDogYm9vbGVhbiB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfcG9zaXRpb246IHBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RyYXdlclJvb3RDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDb250ZW50Q2xhc3M6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfYmFja2Ryb3A6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCBvcGVuZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbiAgfVxuICBASW5wdXQoKSBtb2RlOiBtb2RlID0gREVGQVVMVF9NT0RFO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdBYm92ZTogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdCZWxvdzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdCZWZvcmU6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nQWZ0ZXI6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3BhY2luZ0xlZnQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgaGFzQmFja2Ryb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0JhY2tkcm9wO1xuICB9XG4gIHNldCBoYXNCYWNrZHJvcCh2YWw6IGFueSkge1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdmFsID09IG51bGwgPyBudWxsIDogdG9Cb29sZWFuKHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGRyYXdlci5wb3NpdGlvbjoke3ZhbH1gLFxuICAgICAgLy8gdGhlIHN0eWxlIG5lZWRzIHRvIGJlIGEgZnVuY3Rpb24gc28gdGhhdCBpdCBjYW4gYmUgY2hhbmdlZCBkeW5hbWljYWxseVxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgW3ZhbF06IDBcbiAgICAgIH0pLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpOiBwb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lcixcbiAgICBwcml2YXRlIF92Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlQmFja2Ryb3AoKTtcbiAgICB0aGlzLl91cGRhdGVBbmltYXRpb25zKCk7XG4gICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgIXRoaXMuX2Zyb21Ub2dnbGUpIHtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpO1xuICAgIH1cbiAgICBjb25zdCBfX21vZGUgPSB0aGlzLm1vZGU7XG4gICAgY29uc3QgX19mb3JjZU1vZGVPdmVyID0gdGhpcy5fZm9yY2VNb2RlT3ZlcjtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuXG4gICAgY29uc3QgX19zcGFjaW5nQWJvdmUgPSB0aGlzLnNwYWNpbmdBYm92ZTtcbiAgICBjb25zdCBfX3NwYWNpbmdCZWxvdyA9IHRoaXMuc3BhY2luZ0JlbG93O1xuICAgIGNvbnN0IF9fc3BhY2luZ0JlZm9yZSA9IHRoaXMuc3BhY2luZ0JlZm9yZTtcbiAgICBjb25zdCBfX3NwYWNpbmdBZnRlciA9IHRoaXMuc3BhY2luZ0FmdGVyO1xuICAgIC8vIGNvbnN0IF9fc3BhY2luZ1JpZ2h0ID0gdGhpcy5zcGFjaW5nUmlnaHQ7XG4gICAgLy8gY29uc3QgX19zcGFjaW5nTGVmdCA9IHRoaXMuc3BhY2luZ0xlZnQ7XG5cbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgLyoqIHNldCBkZWZhdWx0IF9fd2lkdGggaWYgYHdpZHRoYCAmIGBoZWlnaHRgIGlzIGB1bmRlZmluZWRgICovXG4gICAgICAgIF9fd2lkdGggPSBERUZBVUxUX1dJRFRIO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfX29wZW5lZCkge1xuICAgICAgLyoqIGNyZWF0ZSBzdHlsZXMgZm9yIG1vZGUgc2lkZSAqL1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyT3BlbmVkLCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICBpZiAoX19tb2RlID09PSAnc2lkZScpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5RHJhd2VyQ29udGVudCA9IGBseS1kcmF3ZXItY29udGVudC0tLS06JHtcbiAgICAgICAgICBfX29wZW5lZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgIF9fd2lkdGggfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVmFsID0gYG1hcmdpbi0ke19fcG9zaXRpb259YDtcbiAgICAgICAgICAvLyBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgIC8vICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIHRoaXMuX2RyYXdlclJvb3RDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWRyYXdlci1yb290OiR7X193aWR0aH3CtyR7X19oZWlnaHR9wrcke19fc3BhY2luZ0Fib3ZlfcK3JHtfX3NwYWNpbmdCZWxvd33CtyR7X19zcGFjaW5nQmVmb3JlfcK3JHtfX3NwYWNpbmdBZnRlcn3CtyR7X19wb3NpdGlvbn3CtyR7X19tb2RlfcK3JHtfX2ZvcmNlTW9kZU92ZXJ9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc0RyYXdlclJvb3Q6IHtcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nXG4gICAgICAgIHRvcD86IHN0cmluZ1xuICAgICAgICBib3R0b20/OiBzdHJpbmdcbiAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICBiZWZvcmU/OiBzdHJpbmdcbiAgICAgICAgYWZ0ZXI/OiBzdHJpbmdcbiAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICB9ID0geyB9O1xuICAgICAgY29uc3QgcG9zID0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24gYXMgYW55KTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uU2lnbiA9IF9fcG9zaXRpb24gPT09ICdhYm92ZScgPyAnLScgOiAnKyc7XG4gICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICBjb25zdCBkaXJYU2lnbiA9IHBvcyA9PT0gRGlyUG9zaXRpb24ubGVmdCA/ICctJyA6ICcrJztcbiAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgaWYgKChfX21vZGUgPT09ICdvdmVyJyB8fCBfX2ZvcmNlTW9kZU92ZXIpICYmIHZhbCA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGB0cmFuc2xhdGVYKCR7ZGlyWFNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3Qud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZUhlaWdodCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVZID0gYHRyYW5zbGF0ZVkoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmhlaWdodCA9IG5ld1N0eWxlSGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF9fcG9zaXRpb24gPT09ICdiZWZvcmUnIHx8IF9fcG9zaXRpb24gPT09ICdhZnRlcicpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0Fib3ZlLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ1RvcCA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCZWxvdywgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdCb3R0b20gPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX3Bvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUgfHwgX19wb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCZWZvcmUsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQmVmb3JlID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJlZm9yZSA9IG5ld1N0eWxlU3BhY2luZ0JlZm9yZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5iZWZvcmUgPSBuZXdTdHlsZVNwYWNpbmdCZWZvcmU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0FmdGVyLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0FmdGVyID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmFmdGVyID0gbmV3U3R5bGVTcGFjaW5nQWZ0ZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYWZ0ZXIgPSBuZXdTdHlsZVNwYWNpbmdBZnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlc0RyYXdlclJvb3Q7XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyUm9vdENsYXNzLCBfX21vZGUgPT09ICdzaWRlJyA/IFNUWUxFX1BSSU9SSVRZIDogU1RZTEVfUFJJT1JJVFkgKyAxKTtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZm9yY2VNb2RlT3ZlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcmNlTW9kZU92ZXIoKSB7XG4gICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgKHRoaXMuaGFzQmFja2Ryb3AgIT0gbnVsbCA/IHRoaXMuaGFzQmFja2Ryb3AgOiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5fZm9yY2VNb2RlT3ZlcikpKSB7XG4gICAgICBpZiAoIXRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2VycysrO1xuICAgICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgICh0aGlzLl92aWV3UmVmLnJvb3ROb2Rlc1swXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuekluZGV4ID0gYCR7dGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vyc31gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vycy0tO1xuICAgICAgdGhpcy5fdmNyLmNsZWFyKCk7XG4gICAgICB0aGlzLl92aWV3UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbmltYXRpb25zKCkge1xuICAgIGlmICh0aGlzLl9mcm9tVG9nZ2xlICYmICF0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZnJvbVRvZ2dsZSAmJiB0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGNvbnZlcnQgbnVtYmVyIHRvIHB4XG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZywgX25ldz86IGFueSkge1xuICByZXR1cm4ga2V5IGluIG9iamVjdFxuICA/IG9iamVjdFtrZXldXG4gIDogb2JqZWN0W2tleV0gPSBfbmV3IHx8IHt9O1xufVxuIl19