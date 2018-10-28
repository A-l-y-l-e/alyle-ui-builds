import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, forwardRef, Input, Renderer2, TemplateRef, ViewChild, ViewContainerRef, NgModule } from '@angular/core';
import { eachMedia, LyTheme2, toBoolean, LY_COMMON_STYLES, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            },] }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZHJhd2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvZHJhd2VyL2RyYXdlci50cyIsIm5nOi8vQGFseWxlL3VpL2RyYXdlci9kcmF3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZWFjaE1lZGlhLFxuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgTFlfQ09NTU9OX1NUWUxFU1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IERFRkFVTFRfTU9ERSA9ICdzaWRlJztcbmNvbnN0IERFRkFVTFRfV0lEVEggPSAnMjMwcHgnO1xuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnc3RhcnQnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBkcmF3ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAnLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcnOiAndG91Y2gnXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgfSxcbiAgZHJhd2VyQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgZHJhd2VyT3BlbmVkOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDApJyxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgfSxcbiAgYmFja2Ryb3A6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kcmF3ZXIuYmFja2Ryb3BcbiAgfSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259YCxcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICd0cmFuc2Zvcm0sIG1hcmdpbiwgdmlzaWJpbGl0eSdcbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nO1xudHlwZSBtb2RlID0gJ3NpZGUnIHwgJ292ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXItY29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRhaW5lciB7XG4gIC8qKiBAaWdub3JlICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkgKyAxLjkpO1xuICBfb3BlbkRyYXdlcnMgPSAwO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSkgX2RyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRyYXdlckNvbnRhaW5lcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgZHJhd2VyQ29udGFpbmVyOiBMeURyYXdlckNvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBkcmF3ZXJDb250YWluZXIuY2xhc3Nlcy5kcmF3ZXJDb250ZW50KTtcbiAgfVxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlEcmF3ZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXM7XG4gIHByaXZhdGUgX2ZvcmNlTW9kZU92ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zyb21Ub2dnbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBwb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2JhY2tkcm9wOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogbW9kZSA9IERFRkFVTFRfTU9ERTtcbiAgQElucHV0KCkgc3BhY2luZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNwYWNpbmdTdGFydDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcGFjaW5nUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBkcmF3ZXIucG9zaXRpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgcG9zaXRpb25WYWw6IHN0cmluZztcbiAgICAgICAgaWYgKHZhbCA9PT0gJ3N0YXJ0JyB8fCB2YWwgPT09ICdlbmQnKSB7XG4gICAgICAgICAgcG9zaXRpb25WYWwgPSB0aGVtZS5nZXREaXJlY3Rpb24odmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblZhbCA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtwb3NpdGlvblZhbF06IDBcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBfZHJhd2VyQ29udGFpbmVyLmNsYXNzZXMuZHJhd2VyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3VwZGF0ZUJhY2tkcm9wKCk7XG4gICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9ucygpO1xuICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyICYmICF0aGlzLl9mcm9tVG9nZ2xlKSB7XG4gICAgICB0aGlzLl9yZXNldEZvcmNlTW9kZU92ZXIoKTtcbiAgICB9XG4gICAgY29uc3QgX19tb2RlID0gdGhpcy5tb2RlO1xuICAgIGNvbnN0IF9fZm9yY2VNb2RlT3ZlciA9IHRoaXMuX2ZvcmNlTW9kZU92ZXI7XG4gICAgY29uc3QgX19vcGVuZWQgPSB0aGlzLm9wZW5lZDtcbiAgICBsZXQgX193aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY29uc3QgX19oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjb25zdCBfX3Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCBfX3NwYWNpbmdUb3AgPSB0aGlzLnNwYWNpbmdUb3A7XG4gICAgY29uc3QgX19zcGFjaW5nQm90dG9tID0gdGhpcy5zcGFjaW5nQm90dG9tO1xuXG4gICAgaWYgKF9fd2lkdGggJiYgX19oZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgd2lkdGhcXGAgYW5kIFxcYGhlaWdodFxcYCBhcmUgZGVmaW5lZCwgeW91IGNhbiBvbmx5IGRlZmluZSBvbmVgKTtcbiAgICB9IGVsc2UgaWYgKCFfX3dpZHRoKSB7XG4gICAgICBpZiAoIV9faGVpZ2h0KSB7XG4gICAgICAgIC8qKiBzZXQgZGVmYXVsdCBfX3dpZHRoIGlmIGB3aWR0aGAgJiBgaGVpZ2h0YCBpcyBgdW5kZWZpbmVkYCAqL1xuICAgICAgICBfX3dpZHRoID0gREVGQVVMVF9XSURUSDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX19vcGVuZWQpIHtcbiAgICAgIC8qKiBjcmVhdGUgc3R5bGVzIGZvciBtb2RlIHNpZGUgKi9cbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlck9wZW5lZCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgaWYgKF9fbW9kZSA9PT0gJ3NpZGUnKSB7XG4gICAgICAgIGNvbnN0IG5ld0tleURyYXdlckNvbnRlbnQgPSBgbHktZHJhd2VyLWNvbnRlbnQtLS0tOiR7XG4gICAgICAgICAgX19vcGVuZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgIF9fd2lkdGggfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgX19wb3NpdGlvbiB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleURyYXdlckNvbnRlbnQsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBkcmF3ZXJDb250ZW50U3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0Pzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5SaWdodD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luVG9wPzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b20/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgbGV0IHBvc2l0aW9uVmFsID0gJ21hcmdpbi0nO1xuICAgICAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgICAgICBwb3NpdGlvblZhbCArPSB0aGVtZS5nZXREaXJlY3Rpb24oX19wb3NpdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uVmFsICs9IF9fcG9zaXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIGVhY2hNZWRpYShfX29wZW5lZCBhcyBhbnksICgpID0+IHt9KTtcbiAgICAgICAgICBpZiAoX193aWR0aCkge1xuICAgICAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhkcmF3ZXJDb250ZW50U3R5bGVzLCBicmVha1BvaW50KTtcbiAgICAgICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludFtwb3NpdGlvblZhbF0gPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRyYXdlckNvbnRlbnRTdHlsZXNbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkcmF3ZXJDb250ZW50U3R5bGVzO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogcmVtb3ZlIHN0eWxlcyBmb3IgPGx5LWRyYXdlci1jb250ZW50PiAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZHJhd2VyQ29udGVudENsYXNzKTtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IG51bGw7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJDbGFzcyk7XG4gICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIGRlZmF1bHQgc3R5bGVzICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMuX2RyYXdlclJvb3RDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1kcmF3ZXItcm9vdDoke19fd2lkdGh9w4LCtyR7X19oZWlnaHR9w4LCtyR7X19zcGFjaW5nVG9wfcOCwrcke19fc3BhY2luZ0JvdHRvbX3DgsK3JHtfX3NwYWNpbmdCb3R0b219w4LCtyR7X19wb3NpdGlvbn3DgsK3JHtfX21vZGV9w4LCtyR7X19mb3JjZU1vZGVPdmVyfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc0RyYXdlclJvb3Q6IHtcbiAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nXG4gICAgICAgIHRvcD86IHN0cmluZ1xuICAgICAgICBib3R0b20/OiBzdHJpbmdcbiAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgIH0gPSB7IH07XG4gICAgICBjb25zdCBwb3NpdGlvblNpZ24gPSBfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICd0b3AnID8gJy0nIDogJysnO1xuICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgZWFjaE1lZGlhKF9fd2lkdGgsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgaWYgKChfX21vZGUgPT09ICdvdmVyJyB8fCBfX2ZvcmNlTW9kZU92ZXIpICYmIHZhbCA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlV2lkdGggPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWCA9IGB0cmFuc2xhdGVYKCR7cG9zaXRpb25TaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC53aWR0aCA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QudHJhbnNmb3JtID0gbmV3VHJhbnNsYXRlWDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX2hlaWdodCkge1xuICAgICAgICBlYWNoTWVkaWEoX19oZWlnaHQsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVIZWlnaHQgPSB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3VHJhbnNsYXRlWSA9IGB0cmFuc2xhdGVZKCR7cG9zaXRpb25TaWduICsgdG9QeCh2YWwpfSlgO1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnc3RhcnQnIHx8IF9fcG9zaXRpb24gPT09ICdlbmQnKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdUb3AsICh2YWwsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nVG9wID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0JvdHRvbSwgKHZhbCwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdCb3R0b20gPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5sZWZ0ID0gMDtcbiAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5yaWdodCA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGVzRHJhd2VyUm9vdDtcbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJSb290Q2xhc3MsIF9fbW9kZSA9PT0gJ3NpZGUnID8gU1RZTEVfUFJJT1JJVFkgOiBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCkud2lkdGg7XG4gICAgdGhpcy5fZnJvbVRvZ2dsZSA9IHRydWU7XG4gICAgaWYgKHdpZHRoID09PSAnMHB4Jykge1xuICAgICAgdGhpcy5fZm9yY2VNb2RlT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9mb3JjZU1vZGVPdmVyICYmIHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0Rm9yY2VNb2RlT3ZlcigpIHtcbiAgICB0aGlzLl9mb3JjZU1vZGVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5fZm9yY2VNb2RlT3ZlcikpIHtcbiAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMrKztcbiAgICAgIHRoaXMuX3ZpZXdSZWYgPSB0aGlzLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2JhY2tkcm9wKTtcbiAgICAgICh0aGlzLl92aWV3UmVmLnJvb3ROb2Rlc1swXSBhcyBIVE1MRGl2RWxlbWVudCkuc3R5bGUuekluZGV4ID0gYCR7dGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vyc31gO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9vcGVuRHJhd2Vycy0tO1xuICAgICAgdGhpcy5fdmNyLmNsZWFyKCk7XG4gICAgICB0aGlzLl92aWV3UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbmltYXRpb25zKCkge1xuICAgIGlmICh0aGlzLl9mcm9tVG9nZ2xlICYmICF0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy5fZnJvbVRvZ2dsZSAmJiB0aGlzLl9pc0FuaW1hdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGNvbnZlcnQgbnVtYmVyIHRvIHB4XG4gKi9cbmZ1bmN0aW9uIHRvUHgodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGAke3ZhbH1weGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZywgX25ldz86IGFueSkge1xuICByZXR1cm4ga2V5IGluIG9iamVjdFxuICA/IG9iamVjdFtrZXldXG4gIDogb2JqZWN0W2tleV0gPSBfbmV3IHx8IHt9O1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudCB9IGZyb20gJy4vZHJhd2VyJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlEcmF3ZXIsIEx5RHJhd2VyQ29udGFpbmVyLCBMeURyYXdlckNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeURyYXdlciwgTHlEcmF3ZXJDb250YWluZXIsIEx5RHJhd2VyQ29udGVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5RHJhd2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQXVCQSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7O0FBQzVCLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQzs7QUFDOUIsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztBQUN6QixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0FBRWpDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN6QyxlQUFlLEVBQUU7UUFDZixPQUFPLEVBQUUsT0FBTztRQUNoQixR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