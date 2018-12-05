import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef, NgModule } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES, XPosition, DirPosition, YPosition, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
class LyDrawerContent {
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
class LyDrawer {
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
            if (val === 'start' || val === 'end') {
                console.warn(`LyDrawer: position ${val} is deprecated, use \`before\` or \`after\` instead`);
            }
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
        const __spacingTop = this.spacingTop;
        /** @type {?} */
        const __spacingBottom = this.spacingBottom;
        /** @type {?} */
        const __spacingAbove = this.spacingAbove;
        /** @type {?} */
        const __spacingBelow = this.spacingBelow;
        /** @type {?} */
        const __spacingBefore = this.spacingBefore;
        /** @type {?} */
        const __spacingAfter = this.spacingAfter;
        /** @type {?} */
        const __spacingRight = this.spacingRight;
        /** @type {?} */
        const __spacingLeft = this.spacingLeft;
        if (__spacingTop || __spacingBottom) {
            console.warn(`LyDrawer: \`spacingTop\` and spacingBottom is deprecated use \`spacingAbove\` or \`spacingBelow\` instead`);
        }
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
    spacingTop: [{ type: Input }],
    spacingBelow: [{ type: Input }],
    spacingBottom: [{ type: Input }],
    spacingBefore: [{ type: Input }],
    spacingAfter: [{ type: Input }],
    spacingRight: [{ type: Input }],
    spacingLeft: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    hasBackdrop: [{ type: Input }],
    position: [{ type: Input }]
};
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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

export { LyDrawerContainer, LyDrawerContent, LyDrawer, LyDrawerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZWFjaE1lZGlhLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgUGxhY2VtZW50LFxuICBYUG9zaXRpb24sXG4gIERpclBvc2l0aW9uLFxuICBZUG9zaXRpb25cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBERUZBVUxUX01PREUgPSAnc2lkZSc7XG5jb25zdCBERUZBVUxUX1dJRFRIID0gJzIzMHB4JztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gWFBvc2l0aW9uLmJlZm9yZTtcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZHJhd2VyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJ1xuICB9LFxuICBkcmF3ZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH0sXG4gIGRyYXdlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGRyYXdlck9wZW5lZDoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCknLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICB9LFxuICBiYWNrZHJvcDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRyYXdlci5iYWNrZHJvcFxuICB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn1gLFxuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ3RyYW5zZm9ybSwgbWFyZ2luLCB2aXNpYmlsaXR5J1xuICB9XG59KTtcblxuZXhwb3J0IHR5cGUgcG9zaXRpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nIHwgUGxhY2VtZW50O1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkgKyAxLjkpO1xuICBfb3BlbkRyYXdlcnMgPSAwO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSkgX2RyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRyYXdlckNvbnRhaW5lcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBkcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJDb250ZW50KTtcbiAgfVxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXM7XG4gIHByaXZhdGUgX2ZvcmNlTW9kZU92ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zyb21Ub2dnbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uOiBib29sZWFuO1xuICBwcml2YXRlIF9oYXNCYWNrZHJvcDogYm9vbGVhbiB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfcG9zaXRpb246IHBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RyYXdlclJvb3RDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kcmF3ZXJDb250ZW50Q2xhc3M6IHN0cmluZztcblxuICAvKiogQGlnbm9yZSAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfYmFja2Ryb3A6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fb3BlbmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCBvcGVuZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbiAgfVxuICBASW5wdXQoKSBtb2RlOiBtb2RlID0gREVGQVVMVF9NT0RFO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdBYm92ZTogc3RyaW5nIHwgbnVtYmVyO1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgc3BhY2luZ0Fib3ZlYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgpIHNwYWNpbmdUb3A6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nQmVsb3c6IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYHNwYWNpbmdCZWxvd2AgaW5zdGVhZCAqL1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgc3BhY2luZ0JlZm9yZTogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdBZnRlcjogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdSaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNCYWNrZHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQmFja2Ryb3A7XG4gIH1cbiAgc2V0IGhhc0JhY2tkcm9wKHZhbDogYW55KSB7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB2YWwgPT0gbnVsbCA/IG51bGwgOiB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgaWYgKHZhbCA9PT0gJ3N0YXJ0JyB8fCB2YWwgPT09ICdlbmQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTHlEcmF3ZXI6IHBvc2l0aW9uICR7dmFsfSBpcyBkZXByZWNhdGVkLCB1c2UgXFxgYmVmb3JlXFxgIG9yIFxcYGFmdGVyXFxgIGluc3RlYWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGRyYXdlci5wb3NpdGlvbjoke3ZhbH1gLFxuICAgICAgLy8gdGhlIHN0eWxlIG5lZWRzIHRvIGJlIGEgZnVuY3Rpb24gc28gdGhhdCBpdCBjYW4gYmUgY2hhbmdlZCBkeW5hbWljYWxseVxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgW3ZhbF06IDBcbiAgICAgIH0pLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpOiBwb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lcixcbiAgICBwcml2YXRlIF92Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIF9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlQmFja2Ryb3AoKTtcbiAgICB0aGlzLl91cGRhdGVBbmltYXRpb25zKCk7XG4gICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgIXRoaXMuX2Zyb21Ub2dnbGUpIHtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpO1xuICAgIH1cbiAgICBjb25zdCBfX21vZGUgPSB0aGlzLm1vZGU7XG4gICAgY29uc3QgX19mb3JjZU1vZGVPdmVyID0gdGhpcy5fZm9yY2VNb2RlT3ZlcjtcbiAgICBjb25zdCBfX29wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGxldCBfX3dpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBfX2hlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IF9fcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IF9fc3BhY2luZ1RvcCA9IHRoaXMuc3BhY2luZ1RvcDtcbiAgICBjb25zdCBfX3NwYWNpbmdCb3R0b20gPSB0aGlzLnNwYWNpbmdCb3R0b207XG5cbiAgICBjb25zdCBfX3NwYWNpbmdBYm92ZSA9IHRoaXMuc3BhY2luZ0Fib3ZlO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JlbG93ID0gdGhpcy5zcGFjaW5nQmVsb3c7XG4gICAgY29uc3QgX19zcGFjaW5nQmVmb3JlID0gdGhpcy5zcGFjaW5nQmVmb3JlO1xuICAgIGNvbnN0IF9fc3BhY2luZ0FmdGVyID0gdGhpcy5zcGFjaW5nQWZ0ZXI7XG4gICAgY29uc3QgX19zcGFjaW5nUmlnaHQgPSB0aGlzLnNwYWNpbmdSaWdodDtcbiAgICBjb25zdCBfX3NwYWNpbmdMZWZ0ID0gdGhpcy5zcGFjaW5nTGVmdDtcblxuICAgIGlmIChfX3NwYWNpbmdUb3AgfHwgX19zcGFjaW5nQm90dG9tKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEx5RHJhd2VyOiBcXGBzcGFjaW5nVG9wXFxgIGFuZCBzcGFjaW5nQm90dG9tIGlzIGRlcHJlY2F0ZWQgdXNlIFxcYHNwYWNpbmdBYm92ZVxcYCBvciBcXGBzcGFjaW5nQmVsb3dcXGAgaW5zdGVhZGApO1xuICAgIH1cblxuICAgIGlmIChfX3dpZHRoICYmIF9faGVpZ2h0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHdpZHRoXFxgIGFuZCBcXGBoZWlnaHRcXGAgYXJlIGRlZmluZWQsIHlvdSBjYW4gb25seSBkZWZpbmUgb25lYCk7XG4gICAgfSBlbHNlIGlmICghX193aWR0aCkge1xuICAgICAgaWYgKCFfX2hlaWdodCkge1xuICAgICAgICAvKiogc2V0IGRlZmF1bHQgX193aWR0aCBpZiBgd2lkdGhgICYgYGhlaWdodGAgaXMgYHVuZGVmaW5lZGAgKi9cbiAgICAgICAgX193aWR0aCA9IERFRkFVTFRfV0lEVEg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9fb3BlbmVkKSB7XG4gICAgICAvKiogY3JlYXRlIHN0eWxlcyBmb3IgbW9kZSBzaWRlICovXG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCB0aGlzLl9kcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJPcGVuZWQsIHRoaXMuX2RyYXdlckNsYXNzKTtcbiAgICAgIGlmIChfX21vZGUgPT09ICdzaWRlJykge1xuICAgICAgICBjb25zdCBuZXdLZXlEcmF3ZXJDb250ZW50ID0gYGx5LWRyYXdlci1jb250ZW50LS0tLToke1xuICAgICAgICAgIF9fb3BlbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fcG9zaXRpb24gfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXlEcmF3ZXJDb250ZW50LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHJhd2VyQ29udGVudFN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmdcbiAgICAgICAgICAgIG1hcmdpblRvcD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVmFsID0gYG1hcmdpbi0ke19fcG9zaXRpb259YDtcbiAgICAgICAgICAvLyBpZiAoX19wb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBfX3Bvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgIC8vICAgcG9zaXRpb25WYWwgKz0gdGhlbWUuZ2V0RGlyZWN0aW9uKF9fcG9zaXRpb24pO1xuICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgLy8gICBwb3NpdGlvblZhbCArPSBfX3Bvc2l0aW9uO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBlYWNoTWVkaWEoX19vcGVuZWQgYXMgYW55LCAoKSA9PiB7fSk7XG4gICAgICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgdGhpcy5fZHJhd2VyQ2xhc3MgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBkZWZhdWx0IHN0eWxlcyAqL1xuICAgIHRoaXMuX2RyYXdlclJvb3RDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5LWRyYXdlci1yb290OiR7X193aWR0aH3DgsK3JHtfX2hlaWdodH3DgsK3JHtfX3NwYWNpbmdBYm92ZX3DgsK3JHtfX3NwYWNpbmdCZWxvd33DgsK3JHtfX3NwYWNpbmdCZWZvcmV9w4LCtyR7X19zcGFjaW5nQWZ0ZXJ9w4LCtyR7X19wb3NpdGlvbn3DgsK3JHtfX21vZGV9w4LCtyR7X19mb3JjZU1vZGVPdmVyfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNEcmF3ZXJSb290OiB7XG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIGhlaWdodD86IHN0cmluZ1xuICAgICAgICB0b3A/OiBzdHJpbmdcbiAgICAgICAgYm90dG9tPzogc3RyaW5nXG4gICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgYmVmb3JlPzogc3RyaW5nXG4gICAgICAgIGFmdGVyPzogc3RyaW5nXG4gICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgfSA9IHsgfTtcbiAgICAgIGNvbnN0IHBvcyA9IHRoZW1lLmdldERpcmVjdGlvbihfX3Bvc2l0aW9uIGFzIGFueSk7XG4gICAgICBjb25zdCBwb3NpdGlvblNpZ24gPSBfX3Bvc2l0aW9uID09PSAnYWJvdmUnID8gJy0nIDogJysnO1xuICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgY29uc3QgZGlyWFNpZ24gPSBwb3MgPT09IERpclBvc2l0aW9uLmxlZnQgPyAnLScgOiAnKyc7XG4gICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGlmICgoX19tb2RlID09PSAnb3ZlcicgfHwgX19mb3JjZU1vZGVPdmVyKSAmJiB2YWwgPT09ICcwJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVdpZHRoID0gdG9QeCh2YWwpO1xuICAgICAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZVggPSBgdHJhbnNsYXRlWCgke2RpclhTaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX2hlaWdodCkge1xuICAgICAgICBlYWNoTWVkaWEoX19oZWlnaHQsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVIZWlnaHQgPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWSA9IGB0cmFuc2xhdGVZKCR7cG9zaXRpb25TaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnYmVmb3JlJyB8fCBfX3Bvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdBYm92ZSwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdUb3AgPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQudG9wID0gbmV3U3R5bGVTcGFjaW5nVG9wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQmVsb3csICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQm90dG9tID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5ib3R0b20gPSBuZXdTdHlsZVNwYWNpbmdCb3R0b207XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoX19wb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IF9fcG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICBlYWNoTWVkaWEoX19zcGFjaW5nQmVmb3JlLCAodmFsLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0JlZm9yZSA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5iZWZvcmUgPSBuZXdTdHlsZVNwYWNpbmdCZWZvcmU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYmVmb3JlID0gbmV3U3R5bGVTcGFjaW5nQmVmb3JlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdBZnRlciwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdBZnRlciA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5hZnRlciA9IG5ld1N0eWxlU3BhY2luZ0FmdGVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmFmdGVyID0gbmV3U3R5bGVTcGFjaW5nQWZ0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZXNEcmF3ZXJSb290O1xuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RyYXdlclJvb3RDbGFzcywgX19tb2RlID09PSAnc2lkZScgPyBTVFlMRV9QUklPUklUWSA6IFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgdGhpcy5fZnJvbVRvZ2dsZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS53aWR0aDtcbiAgICB0aGlzLl9mcm9tVG9nZ2xlID0gdHJ1ZTtcbiAgICBpZiAod2lkdGggPT09ICcwcHgnKSB7XG4gICAgICB0aGlzLl9mb3JjZU1vZGVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXIgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRGb3JjZU1vZGVPdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRGb3JjZU1vZGVPdmVyKCkge1xuICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQmFja2Ryb3AoKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmICh0aGlzLmhhc0JhY2tkcm9wICE9IG51bGwgPyB0aGlzLmhhc0JhY2tkcm9wIDogKHRoaXMubW9kZSA9PT0gJ292ZXInIHx8IHRoaXMuX2ZvcmNlTW9kZU92ZXIpKSkge1xuICAgICAgaWYgKCF0aGlzLl92aWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMrKztcbiAgICAgICAgdGhpcy5fdmlld1JlZiA9IHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICAodGhpcy5fdmlld1JlZi5yb290Tm9kZXNbMF0gYXMgSFRNTERpdkVsZW1lbnQpLnN0eWxlLnpJbmRleCA9IGAke3RoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnN9YDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMtLTtcbiAgICAgIHRoaXMuX3Zjci5jbGVhcigpO1xuICAgICAgdGhpcy5fdmlld1JlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQW5pbWF0aW9ucygpIHtcbiAgICBpZiAodGhpcy5fZnJvbVRvZ2dsZSAmJiAhdGhpcy5faXNBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2Zyb21Ub2dnbGUgJiYgdGhpcy5faXNBbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5faXNBbmltYXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0IG51bWJlciB0byBweFxuICovXG5mdW5jdGlvbiB0b1B4KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBgJHt2YWx9cHhgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcsIF9uZXc/OiBhbnkpIHtcbiAgcmV0dXJuIGtleSBpbiBvYmplY3RcbiAgPyBvYmplY3Rba2V5XVxuICA6IG9iamVjdFtrZXldID0gX25ldyB8fCB7fTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnQgfSBmcm9tICcuL2RyYXdlcic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5RHJhd2VyLCBMeURyYXdlckNvbnRhaW5lciwgTHlEcmF3ZXJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7TUEyQk0sWUFBWSxHQUFHLE1BQU07O01BQ3JCLGFBQWEsR0FBRyxPQUFPOztNQUN2QixhQUFhLEdBQUcsRUFBRTs7TUFDbEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE1BQU07O01BRW5DLE1BQU0sR0FBRyxDQUFDLEtBQXFCLE1BQU07SUFDekMsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsNEJBQTRCLEVBQUUsT0FBTztLQUN0QztJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDM0IsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLFNBQVMsRUFBRSxxQkFBcUI7UUFDaEMsVUFBVSxFQUFFLFNBQVM7S0FDdEI7SUFDRCxRQUFRLG9CQUNILGdCQUFnQixDQUFDLElBQUksSUFDeEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUN2QztJQUNELFVBQVUsRUFBRTtRQUNWLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxD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