var LyDrawer_1;
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Directive, ElementRef, EmbeddedViewRef, forwardRef, Input, OnChanges, Renderer2, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone, Inject } from '@angular/core';
import { eachMedia, LyTheme2, ThemeVariables, toBoolean, LY_COMMON_STYLES, Placement, XPosition, DirPosition, YPosition, WinResize, Platform, st2c, StyleRenderer, LyHostClass, ThemeRef, StyleCollection, StyleTemplate, LyClasses } from '@alyle/ui';
const DEFAULT_MODE = 'side';
const DEFAULT_WIDTH = '230px';
const DEFAULT_VALUE = '';
const STYLE_PRIORITY = -2;
const DEFAULT_POSITION = XPosition.before;
export const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    return {
        $name: LyDrawerContent.и,
        $priority: STYLE_PRIORITY + 1.9,
        root: () => (theme.drawer
            && theme.drawer.root
            && (theme.drawer.root instanceof StyleCollection
                ? theme.drawer.root.setTransformer(fn => fn(__)).css
                : theme.drawer.root(__))),
        drawerContainer: (className) => `${className}{display:block;position:relative;overflow:hidden;-webkit-overflow-scrolling:touch;}`,
        drawer: (className) => `${className}{display:block;position:fixed;z-index:${theme.zIndex.drawer};overflow:auto;visibility:hidden;}`,
        drawerContent: (className) => `${className}{display:block;}`,
        drawerOpened: (className) => `${className}{transform:translate(0px, 0px);visibility:visible;}`,
        drawerClosed: null,
        backdrop: (className) => `${st2c((LY_COMMON_STYLES.fill), `${className}`)}${className}{background-color:${theme.drawer.backdrop};}`,
        transition: (className) => `${className}{transition:${theme.animations.durations.complex}ms ${theme.animations.curves.deceleration};transition-property:transform, margin, visibility;}`
    };
};
let LyDrawerContent = class LyDrawerContent {
    constructor(_renderer, _el, drawerContainer) {
        this._renderer = _renderer;
        this._el = _el;
        this._renderer.addClass(this._el.nativeElement, drawerContainer.classes.drawerContent);
    }
    _getHostElement() {
        return this._el.nativeElement;
    }
};
LyDrawerContent.и = 'LyDrawerContent';
LyDrawerContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef(() => LyDrawerContainer),] }] }
];
LyDrawerContent = tslib_1.__decorate([
    Directive({
        selector: 'ly-drawer-content'
    }),
    tslib_1.__param(2, Inject(forwardRef(() => LyDrawerContainer)))
], LyDrawerContent);
export { LyDrawerContent };
let LyDrawerContainer = class LyDrawerContainer {
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        this._openDrawers = 0;
        this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
    }
    _getHostElement() {
        return this._el.nativeElement;
    }
};
LyDrawerContainer.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
tslib_1.__decorate([
    ContentChild(forwardRef(() => LyDrawerContent), { static: true })
], LyDrawerContainer.prototype, "_drawerContent", void 0);
LyDrawerContainer = tslib_1.__decorate([
    Directive({
        selector: 'ly-drawer-container'
    })
], LyDrawerContainer);
export { LyDrawerContainer };
let LyDrawer = LyDrawer_1 = class LyDrawer {
    constructor(_theme, _styleRenderer, _renderer, _el, _drawerContainer, _vcr, _winResize, _cd, _zone) {
        this._theme = _theme;
        this._styleRenderer = _styleRenderer;
        this._renderer = _renderer;
        this._el = _el;
        this._drawerContainer = _drawerContainer;
        this._vcr = _vcr;
        this._winResize = _winResize;
        this._cd = _cd;
        this._zone = _zone;
        /**
         * Styles
         * @docs-private
         */
        this.classes = this._drawerContainer.classes;
        this._position = DEFAULT_POSITION;
        this.mode = DEFAULT_MODE;
        this._renderer.addClass(this._el.nativeElement, _drawerContainer.classes.drawer);
    }
    set opened(val) {
        if (val !== this.opened) {
            this._opened = toBoolean(val);
            this._isOpen = this._opened;
        }
    }
    get opened() {
        return this._opened;
    }
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(val) {
        this._hasBackdrop = val == null ? null : toBoolean(val);
    }
    set position(val) {
        if (val !== this.position) {
            this._position = val;
            this[0x1] = this._styleRenderer.add(`${LyDrawer_1.и}--position-${val}`, (theme) => (className) => `${className}{${theme.getDirection(val)}:0;}`, STYLE_PRIORITY, this[0x1]);
        }
    }
    get position() {
        return this._position;
    }
    ngOnChanges() {
        this._updateBackdrop();
        this._updateAnimations();
        const __mode = this.mode;
        const __forceModeOverOpened = this._forceModeOverOpened;
        const __opened = this.opened;
        let __width = this.width;
        const __height = this.height;
        const __position = this.position;
        const __spacingAbove = this.spacingAbove;
        const __spacingBelow = this.spacingBelow;
        const __spacingBefore = this.spacingBefore;
        const __spacingAfter = this.spacingAfter;
        if (__width && __height) {
            throw new Error(`\`width\` and \`height\` are defined, you can only define one`);
        }
        else if (!__width) {
            if (!__height) {
                /** set default __width if `width` & `height` is `undefined` */
                __width = DEFAULT_WIDTH;
            }
        }
        if ((this._isOpen && __opened) || (this._isOpen) || __forceModeOverOpened) {
            /** create styles for mode side */
            this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
            // styles for <ly-drawer-content>
            if (__mode === 'side') {
                const newKeyDrawerContent = `ly-drawer-content----:${__width || DEFAULT_VALUE}·${__position || DEFAULT_VALUE}`;
                this._drawerContentClass = this._theme.addStyle(newKeyDrawerContent, (theme) => {
                    const drawerContentStyles = {};
                    const positionVal = `margin-${__position}`;
                    if (__width) {
                        eachMedia(__width, (val, media) => {
                            const newStyleWidth = val === 'over' ? '0px' : toPx(val);
                            if (media) {
                                const breakPoint = theme.getBreakpoint(media);
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
            else if (this._drawerContentClass) {
                /** remove styles for <ly-drawer-content> */
                this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                this._drawerContentClass = undefined;
            }
        }
        else {
            if (this._drawerContentClass) {
                this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                this._drawerContentClass = undefined;
            }
            if (this._drawerClass) {
                this._renderer.removeClass(this._el.nativeElement, this._drawerClass);
                this._drawerClass = undefined;
            }
        }
        /** default styles */
        this._drawerRootClass = this._theme.addStyle(`ly-drawer-root:${__width}·${__height}·${__spacingAbove}·${__spacingBelow}·${__spacingBefore}·${__spacingAfter}·${__position}·${__mode}·${__forceModeOverOpened}`, (theme) => {
            const stylesDrawerRoot = {};
            const pos = theme.getDirection(__position);
            const positionSign = __position === 'above' ? '-' : '+';
            if (__width) {
                const dirXSign = pos === DirPosition.left ? '-' : '+';
                eachMedia(__width, (val, media) => {
                    if ((__mode === 'over' || __forceModeOverOpened) && (val === '0' || val === 'over')) {
                        return;
                    }
                    const newVal = val === 'over' ? '0px' : toPx(val);
                    const newStyleWidth = newVal;
                    const newTranslateX = `translateX(${dirXSign + newVal})`;
                    if (media) {
                        const breakPoint = theme.getBreakpoint(media);
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
                eachMedia(__height, (val, media) => {
                    const newStyleHeight = toPx(val);
                    const newTranslateY = `translateY(${positionSign + toPx(val)})`;
                    if (media) {
                        const breakPoint = theme.getBreakpoint(media);
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
                eachMedia(__spacingAbove, (val, media) => {
                    const newStyleSpacingTop = toPx(val || 0);
                    if (media) {
                        const breakPoint = theme.getBreakpoint(media);
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.top = newStyleSpacingTop;
                    }
                    else {
                        stylesDrawerRoot.top = newStyleSpacingTop;
                    }
                });
                eachMedia(__spacingBelow, (val, media) => {
                    const newStyleSpacingBottom = toPx(val || 0);
                    if (media) {
                        const breakPoint = theme.getBreakpoint(media);
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.bottom = newStyleSpacingBottom;
                    }
                    else {
                        stylesDrawerRoot.bottom = newStyleSpacingBottom;
                    }
                });
            }
            else if (__position === YPosition.above || __position === YPosition.below) {
                eachMedia(__spacingBefore, (val, media) => {
                    const newStyleSpacingBefore = toPx(val || 0);
                    if (media) {
                        const breakPoint = theme.getBreakpoint(media);
                        const styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                        styleOfBreakPoint.before = newStyleSpacingBefore;
                    }
                    else {
                        stylesDrawerRoot.before = newStyleSpacingBefore;
                    }
                });
                eachMedia(__spacingAfter, (val, media) => {
                    const newStyleSpacingAfter = toPx(val || 0);
                    if (media) {
                        const breakPoint = theme.getBreakpoint(media);
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
    ngAfterViewInit() {
        if (Platform.isBrowser) {
            this._tabResizeSub = this._winResize.resize$.subscribe(() => {
                this.ngOnChanges();
            });
        }
    }
    ngOnDestroy() {
        if (this._tabResizeSub) {
            this._tabResizeSub.unsubscribe();
        }
    }
    toggle() {
        const width = getComputedStyle(this._el.nativeElement).width;
        this._fromToggle = true;
        if (width === '0px') {
            this._forceModeOverOpened = true;
            this._isOpen = true;
        }
        else {
            if (this._forceModeOverOpened) {
                this._forceModeOverOpened = false;
                this._isOpen = this.opened;
            }
            else {
                this._isOpen = !this._isOpen;
            }
        }
        this.ngOnChanges();
    }
    _contentHasMargin() {
        const content = this._drawerContainer._drawerContent._getHostElement();
        const container = this._drawerContainer._getHostElement();
        return (content.offsetWidth === container.offsetWidth);
    }
    _updateBackdrop() {
        if (((this._isOpen && this.opened) || this._isOpen) &&
            (this.hasBackdrop != null
                ? this.hasBackdrop
                : (this.mode === 'over' || (this._forceModeOverOpened && this._contentHasMargin())))) {
            // create only if is necessary
            if (!this._viewRef) {
                this._zone.run(() => {
                    this._drawerContainer._openDrawers++;
                    this._viewRef = this._vcr.createEmbeddedView(this._backdrop);
                    this._cd.markForCheck();
                    this._viewRef.rootNodes[0].style.zIndex = `${this._drawerContainer._openDrawers}`;
                });
            }
        }
        else if (this._viewRef) {
            this._zone.run(() => {
                this._drawerContainer._openDrawers--;
                this._vcr.clear();
                this._viewRef = undefined;
                this._cd.markForCheck();
                if (this._forceModeOverOpened) {
                    this._forceModeOverOpened = false;
                    this._isOpen = this.opened;
                }
            });
        }
    }
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
};
LyDrawer.и = 'LyDrawer';
LyDrawer.ctorParameters = () => [
    { type: LyTheme2 },
    { type: StyleRenderer },
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyDrawerContainer },
    { type: ViewContainerRef },
    { type: WinResize },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
tslib_1.__decorate([
    ViewChild(TemplateRef, { static: false })
], LyDrawer.prototype, "_backdrop", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "opened", null);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "mode", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "spacingAbove", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "spacingBelow", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "spacingBefore", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "spacingAfter", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "width", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "height", void 0);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "hasBackdrop", null);
tslib_1.__decorate([
    Input()
], LyDrawer.prototype, "position", null);
LyDrawer = LyDrawer_1 = tslib_1.__decorate([
    Component({
        selector: 'ly-drawer',
        template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        exportAs: 'lyDrawer',
        providers: [
            LyHostClass,
            StyleRenderer
        ]
    })
], LyDrawer);
export { LyDrawer };
/**
 * convert number to px
 */
function toPx(val) {
    if (typeof val === 'number') {
        return `${val}px`;
    }
    else {
        return val;
    }
}
function createEmptyPropOrUseExisting(object, key, _new) {
    return key in object
        ? object[key]
        : object[key] = _new || {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RyYXdlci8iLCJzb3VyY2VzIjpbImRyYXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLE1BQU0sRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixjQUFjLEVBQ2QsU0FBUyxFQUNULGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULFFBQVEsRUFDUixJQUFJLEVBQ0osYUFBYSxFQUNiLFdBQVcsRUFDWCxRQUFRLEVBQ1IsZUFBZSxFQUNmLGFBQWEsRUFDYixTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFlL0IsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDO0FBQzVCLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDekIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXlDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakYsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsRUFBRSxj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QUU5QjtJQUFSLEtBQUssRUFBRTs4Q0FBK0I7QUFFOUI7SUFBUixLQUFLLEVBQUU7K0NBQWdDO0FBRS9CO0lBQVIsS0FBSyxFQUFFOzhDQUErQjtBQUU5QjtJQUFSLEtBQUssRUFBRTt1Q0FBd0I7QUFFdkI7SUFBUixLQUFLLEVBQUU7d0NBQXlCO0FBR2pDO0lBREMsS0FBSyxFQUFFOzJDQUdQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7d0NBT1A7QUEvRFUsUUFBUTtJQVZwQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQix5SUFBNEI7UUFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsUUFBUSxFQUFFLFVBQVU7UUFDcEIsU0FBUyxFQUFFO1lBQ1QsV0FBVztZQUNYLGFBQWE7U0FDZDtLQUNGLENBQUM7R0FDVyxRQUFRLENBNFVwQjtTQTVVWSxRQUFRO0FBOFVyQjs7R0FFRztBQUNILFNBQVMsSUFBSSxDQUFDLEdBQW9CO0lBQ2hDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQztLQUNuQjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUM7QUFFRCxTQUFTLDRCQUE0QixDQUFDLE1BQWMsRUFBRSxHQUFXLEVBQUUsSUFBVTtJQUMzRSxPQUFPLEdBQUcsSUFBSSxNQUFNO1FBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE5nWm9uZSxcbiAgSW5qZWN0XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBlYWNoTWVkaWEsXG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBQbGFjZW1lbnQsXG4gIFhQb3NpdGlvbixcbiAgRGlyUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgV2luUmVzaXplLFxuICBQbGF0Zm9ybSxcbiAgc3QyYyxcbiAgU3R5bGVSZW5kZXJlcixcbiAgTHlIb3N0Q2xhc3MsXG4gIFRoZW1lUmVmLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5Q2xhc3NlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBMeURyYXdlclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgQnV0dG9uIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeURyYXdlclZhcmlhYmxlcyB7XG4gIGRyYXdlcj86IEx5RHJhd2VyVGhlbWU7XG59XG5cbmV4cG9ydCB0eXBlIEx5RHJhd2VyUG9zaXRpb24gPSBQbGFjZW1lbnQ7XG5leHBvcnQgdHlwZSBMeURyYXdlck1vZGUgPSAnc2lkZScgfCAnb3Zlcic7XG5jb25zdCBERUZBVUxUX01PREUgPSAnc2lkZSc7XG5jb25zdCBERUZBVUxUX1dJRFRIID0gJzIzMHB4JztcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gWFBvc2l0aW9uLmJlZm9yZTtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeURyYXdlclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeURyYXdlckNvbnRlbnQu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSArIDEuOSxcbiAgICByb290OiAoKSA9PiAodGhlbWUuZHJhd2VyXG4gICAgICAmJiB0aGVtZS5kcmF3ZXIucm9vdFxuICAgICAgJiYgKHRoZW1lLmRyYXdlci5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgID8gdGhlbWUuZHJhd2VyLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oX18pKS5jc3NcbiAgICAgICAgOiB0aGVtZS5kcmF3ZXIucm9vdChfXykpXG4gICAgKSxcbiAgICBkcmF3ZXJDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt9YCxcbiAgICBkcmF3ZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6JHt0aGVtZS56SW5kZXguZHJhd2VyfTtvdmVyZmxvdzphdXRvO3Zpc2liaWxpdHk6aGlkZGVuO31gLFxuICAgIGRyYXdlckNvbnRlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO31gLFxuICAgIGRyYXdlck9wZW5lZDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAwcHgpO3Zpc2liaWxpdHk6dmlzaWJsZTt9YCxcbiAgICBkcmF3ZXJDbG9zZWQ6IG51bGwsXG4gICAgYmFja2Ryb3A6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuZHJhd2VyLmJhY2tkcm9wfTt9YCxcbiAgICB0cmFuc2l0aW9uOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17dHJhbnNpdGlvbjoke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCBtYXJnaW4sIHZpc2liaWxpdHk7fWBcbiAgfTtcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRyYXdlci1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlckNvbnRlbnQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlEcmF3ZXJDb250ZW50JztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250YWluZXIpKSBkcmF3ZXJDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgKGRyYXdlckNvbnRhaW5lciBhcyBMeURyYXdlckNvbnRhaW5lcikuY2xhc3Nlcy5kcmF3ZXJDb250ZW50KTtcbiAgfVxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZHJhd2VyLWNvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEcmF3ZXJDb250YWluZXIge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBfb3BlbkRyYXdlcnMgPSAwO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlEcmF3ZXJDb250ZW50KSwgeyBzdGF0aWM6IHRydWUgfSkgX2RyYXdlckNvbnRlbnQ6IEx5RHJhd2VyQ29udGVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRyYXdlckNvbnRhaW5lcik7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1kcmF3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJhd2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseURyYXdlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeURyYXdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5RHJhd2VyJztcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fZHJhd2VyQ29udGFpbmVyLmNsYXNzZXM7XG4gIHByaXZhdGUgX2ZvcmNlTW9kZU92ZXJPcGVuZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zyb21Ub2dnbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX29wZW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdmlld1JlZj86IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9pc0FuaW1hdGlvbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzQmFja2Ryb3A6IGJvb2xlYW4gfCBudWxsO1xuXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBMeURyYXdlclBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcblxuICBwcml2YXRlIF9kcmF3ZXJSb290Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZHJhd2VyQ2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RyYXdlckNvbnRlbnRDbGFzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFiUmVzaXplU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgX2JhY2tkcm9wOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvcGVuZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgdGhpcy5faXNPcGVuID0gdGhpcy5fb3BlbmVkO1xuICAgIH1cbiAgfVxuICBnZXQgb3BlbmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XG4gIH1cbiAgQElucHV0KCkgbW9kZTogTHlEcmF3ZXJNb2RlID0gREVGQVVMVF9NT0RFO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdBYm92ZTogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdCZWxvdzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNwYWNpbmdCZWZvcmU6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSBzcGFjaW5nQWZ0ZXI6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNCYWNrZHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQmFja2Ryb3A7XG4gIH1cbiAgc2V0IGhhc0JhY2tkcm9wKHZhbDogYW55KSB7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB2YWwgPT0gbnVsbCA/IG51bGwgOiB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IEx5RHJhd2VyUG9zaXRpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXNbMHgxXSA9IHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKGAke0x5RHJhd2VyLtC4fS0tcG9zaXRpb24tJHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXske3RoZW1lLmdldERpcmVjdGlvbih2YWwgYXMgYW55KX06MDt9YCwgU1RZTEVfUFJJT1JJVFksIHRoaXNbMHgxXSk7XG4gICAgfVxuICB9XG4gIGdldCBwb3NpdGlvbigpOiBMeURyYXdlclBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgWzB4MV06IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfc3R5bGVSZW5kZXJlcjogU3R5bGVSZW5kZXJlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RyYXdlckNvbnRhaW5lcjogTHlEcmF3ZXJDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3dpblJlc2l6ZTogV2luUmVzaXplLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVCYWNrZHJvcCgpO1xuICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGlvbnMoKTtcblxuICAgIGNvbnN0IF9fbW9kZSA9IHRoaXMubW9kZTtcbiAgICBjb25zdCBfX2ZvcmNlTW9kZU92ZXJPcGVuZWQgPSB0aGlzLl9mb3JjZU1vZGVPdmVyT3BlbmVkO1xuICAgIGNvbnN0IF9fb3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgbGV0IF9fd2lkdGggPSB0aGlzLndpZHRoO1xuICAgIGNvbnN0IF9faGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3QgX19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG5cbiAgICBjb25zdCBfX3NwYWNpbmdBYm92ZSA9IHRoaXMuc3BhY2luZ0Fib3ZlO1xuICAgIGNvbnN0IF9fc3BhY2luZ0JlbG93ID0gdGhpcy5zcGFjaW5nQmVsb3c7XG4gICAgY29uc3QgX19zcGFjaW5nQmVmb3JlID0gdGhpcy5zcGFjaW5nQmVmb3JlO1xuICAgIGNvbnN0IF9fc3BhY2luZ0FmdGVyID0gdGhpcy5zcGFjaW5nQWZ0ZXI7XG5cbiAgICBpZiAoX193aWR0aCAmJiBfX2hlaWdodCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB3aWR0aFxcYCBhbmQgXFxgaGVpZ2h0XFxgIGFyZSBkZWZpbmVkLCB5b3UgY2FuIG9ubHkgZGVmaW5lIG9uZWApO1xuICAgIH0gZWxzZSBpZiAoIV9fd2lkdGgpIHtcbiAgICAgIGlmICghX19oZWlnaHQpIHtcbiAgICAgICAgLyoqIHNldCBkZWZhdWx0IF9fd2lkdGggaWYgYHdpZHRoYCAmIGBoZWlnaHRgIGlzIGB1bmRlZmluZWRgICovXG4gICAgICAgIF9fd2lkdGggPSBERUZBVUxUX1dJRFRIO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5faXNPcGVuICYmIF9fb3BlbmVkKSB8fCAodGhpcy5faXNPcGVuKSB8fCBfX2ZvcmNlTW9kZU92ZXJPcGVuZWQpIHtcbiAgICAgIC8qKiBjcmVhdGUgc3R5bGVzIGZvciBtb2RlIHNpZGUgKi9cbiAgICAgIHRoaXMuX2RyYXdlckNsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIHRoaXMuX2RyYXdlckNvbnRhaW5lci5jbGFzc2VzLmRyYXdlck9wZW5lZCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgLy8gc3R5bGVzIGZvciA8bHktZHJhd2VyLWNvbnRlbnQ+XG4gICAgICBpZiAoX19tb2RlID09PSAnc2lkZScpIHtcbiAgICAgICAgY29uc3QgbmV3S2V5RHJhd2VyQ29udGVudCA9IGBseS1kcmF3ZXItY29udGVudC0tLS06JHtcbiAgICAgICAgICBfX3dpZHRoIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgICAgX19wb3NpdGlvbiB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgICAgIHRoaXMuX2RyYXdlckNvbnRlbnRDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleURyYXdlckNvbnRlbnQsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBkcmF3ZXJDb250ZW50U3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0Pzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5SaWdodD86IHN0cmluZ1xuICAgICAgICAgICAgbWFyZ2luVG9wPzogc3RyaW5nXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b20/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgY29uc3QgcG9zaXRpb25WYWwgPSBgbWFyZ2luLSR7X19wb3NpdGlvbn1gO1xuICAgICAgICAgIGlmIChfX3dpZHRoKSB7XG4gICAgICAgICAgICBlYWNoTWVkaWEoX193aWR0aCwgKHZhbCwgbWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IHZhbCA9PT0gJ292ZXInID8gJzBweCcgOiB0b1B4KHZhbCk7XG4gICAgICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3RpbmcoZHJhd2VyQ29udGVudFN0eWxlcywgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnRbcG9zaXRpb25WYWxdID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJDb250ZW50U3R5bGVzW3Bvc2l0aW9uVmFsXSA9IG5ld1N0eWxlV2lkdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHJhd2VyQ29udGVudFN0eWxlcztcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpIHtcbiAgICAgICAgLyoqIHJlbW92ZSBzdHlsZXMgZm9yIDxseS1kcmF3ZXItY29udGVudD4gKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZHJhd2VyQ29udGFpbmVyLl9kcmF3ZXJDb250ZW50Ll9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250ZW50Q2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZHJhd2VyQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZHJhd2VyQ2xhc3MpO1xuICAgICAgICB0aGlzLl9kcmF3ZXJDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogZGVmYXVsdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9kcmF3ZXJSb290Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseS1kcmF3ZXItcm9vdDoke19fd2lkdGh9wrcke19faGVpZ2h0fcK3JHtfX3NwYWNpbmdBYm92ZX3CtyR7X19zcGFjaW5nQmVsb3d9wrcke19fc3BhY2luZ0JlZm9yZX3CtyR7X19zcGFjaW5nQWZ0ZXJ9wrcke19fcG9zaXRpb259wrcke19fbW9kZX3CtyR7X19mb3JjZU1vZGVPdmVyT3BlbmVkfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNEcmF3ZXJSb290OiB7XG4gICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgIGhlaWdodD86IHN0cmluZ1xuICAgICAgICB0b3A/OiBzdHJpbmdcbiAgICAgICAgYm90dG9tPzogc3RyaW5nXG4gICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgYmVmb3JlPzogc3RyaW5nXG4gICAgICAgIGFmdGVyPzogc3RyaW5nXG4gICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgfSA9IHsgfTtcbiAgICAgIGNvbnN0IHBvcyA9IHRoZW1lLmdldERpcmVjdGlvbihfX3Bvc2l0aW9uIGFzIGFueSk7XG4gICAgICBjb25zdCBwb3NpdGlvblNpZ24gPSBfX3Bvc2l0aW9uID09PSAnYWJvdmUnID8gJy0nIDogJysnO1xuICAgICAgaWYgKF9fd2lkdGgpIHtcbiAgICAgICAgY29uc3QgZGlyWFNpZ24gPSBwb3MgPT09IERpclBvc2l0aW9uLmxlZnQgPyAnLScgOiAnKyc7XG4gICAgICAgIGVhY2hNZWRpYShfX3dpZHRoLCAodmFsLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGlmICgoX19tb2RlID09PSAnb3ZlcicgfHwgX19mb3JjZU1vZGVPdmVyT3BlbmVkKSAmJiAodmFsID09PSAnMCcgfHwgdmFsID09PSAnb3ZlcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IHZhbCA9PT0gJ292ZXInID8gJzBweCcgOiB0b1B4KHZhbCk7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVXaWR0aCA9IG5ld1ZhbDtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVYID0gYHRyYW5zbGF0ZVgoJHtkaXJYU2lnbiArIG5ld1ZhbH0pYDtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LndpZHRoID0gbmV3U3R5bGVXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3Qud2lkdGggPSBuZXdTdHlsZVdpZHRoO1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50cmFuc2Zvcm0gPSBuZXdUcmFuc2xhdGVYO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF9faGVpZ2h0KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX2hlaWdodCwgKHZhbCwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZUhlaWdodCA9IHRvUHgodmFsKTtcbiAgICAgICAgICBjb25zdCBuZXdUcmFuc2xhdGVZID0gYHRyYW5zbGF0ZVkoJHtwb3NpdGlvblNpZ24gKyB0b1B4KHZhbCl9KWA7XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5oZWlnaHQgPSBuZXdTdHlsZUhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuaGVpZ2h0ID0gbmV3U3R5bGVIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LnRyYW5zZm9ybSA9IG5ld1RyYW5zbGF0ZVk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfX3Bvc2l0aW9uID09PSAnYmVmb3JlJyB8fCBfX3Bvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdBYm92ZSwgKHZhbCwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdUb3AgPSB0b1B4KHZhbCB8fCAwKTtcbiAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJyZWFrUG9pbnQgPSB0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlT2ZCcmVha1BvaW50ID0gY3JlYXRlRW1wdHlQcm9wT3JVc2VFeGlzdGluZyhzdHlsZXNEcmF3ZXJSb290LCBicmVha1BvaW50KTtcbiAgICAgICAgICAgIHN0eWxlT2ZCcmVha1BvaW50LnRvcCA9IG5ld1N0eWxlU3BhY2luZ1RvcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC50b3AgPSBuZXdTdHlsZVNwYWNpbmdUb3A7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWFjaE1lZGlhKF9fc3BhY2luZ0JlbG93LCAodmFsLCBtZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1N0eWxlU3BhY2luZ0JvdHRvbSA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYm90dG9tID0gbmV3U3R5bGVTcGFjaW5nQm90dG9tO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNEcmF3ZXJSb290LmJvdHRvbSA9IG5ld1N0eWxlU3BhY2luZ0JvdHRvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChfX3Bvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUgfHwgX19wb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdCZWZvcmUsICh2YWwsIG1lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVTcGFjaW5nQmVmb3JlID0gdG9QeCh2YWwgfHwgMCk7XG4gICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBjb25zdCBicmVha1BvaW50ID0gdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZU9mQnJlYWtQb2ludCA9IGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcoc3R5bGVzRHJhd2VyUm9vdCwgYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBzdHlsZU9mQnJlYWtQb2ludC5iZWZvcmUgPSBuZXdTdHlsZVNwYWNpbmdCZWZvcmU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc0RyYXdlclJvb3QuYmVmb3JlID0gbmV3U3R5bGVTcGFjaW5nQmVmb3JlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hNZWRpYShfX3NwYWNpbmdBZnRlciwgKHZhbCwgbWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZVNwYWNpbmdBZnRlciA9IHRvUHgodmFsIHx8IDApO1xuICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtQb2ludCA9IHRoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVPZkJyZWFrUG9pbnQgPSBjcmVhdGVFbXB0eVByb3BPclVzZUV4aXN0aW5nKHN0eWxlc0RyYXdlclJvb3QsIGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgc3R5bGVPZkJyZWFrUG9pbnQuYWZ0ZXIgPSBuZXdTdHlsZVNwYWNpbmdBZnRlcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzRHJhd2VyUm9vdC5hZnRlciA9IG5ld1N0eWxlU3BhY2luZ0FmdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGVzRHJhd2VyUm9vdDtcbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kcmF3ZXJSb290Q2xhc3MsIF9fbW9kZSA9PT0gJ3NpZGUnID8gU1RZTEVfUFJJT1JJVFkgOiBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSBmYWxzZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIgPSB0aGlzLl93aW5SZXNpemUucmVzaXplJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdGFiUmVzaXplU3ViKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICAgIHRoaXMuX2Zyb21Ub2dnbGUgPSB0cnVlO1xuICAgIGlmICh3aWR0aCA9PT0gJzBweCcpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTW9kZU92ZXJPcGVuZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXJPcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fZm9yY2VNb2RlT3Zlck9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB0aGlzLm9wZW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9ICF0aGlzLl9pc09wZW47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRlbnRIYXNNYXJnaW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuX2RyYXdlckNvbnRhaW5lci5fZHJhd2VyQ29udGVudC5fZ2V0SG9zdEVsZW1lbnQoKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9kcmF3ZXJDb250YWluZXIuX2dldEhvc3RFbGVtZW50KCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgcmV0dXJuIChjb250ZW50Lm9mZnNldFdpZHRoID09PSBjb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQmFja2Ryb3AoKSB7XG4gICAgaWYgKCgodGhpcy5faXNPcGVuICYmIHRoaXMub3BlbmVkKSB8fCB0aGlzLl9pc09wZW4pICYmXG4gICAgICAodGhpcy5oYXNCYWNrZHJvcCAhPSBudWxsXG4gICAgICAgID8gdGhpcy5oYXNCYWNrZHJvcFxuICAgICAgICA6ICh0aGlzLm1vZGUgPT09ICdvdmVyJyB8fCAodGhpcy5fZm9yY2VNb2RlT3Zlck9wZW5lZCAmJiB0aGlzLl9jb250ZW50SGFzTWFyZ2luKCkpKSkpIHtcblxuICAgICAgLy8gY3JlYXRlIG9ubHkgaWYgaXMgbmVjZXNzYXJ5XG4gICAgICBpZiAoIXRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2RyYXdlckNvbnRhaW5lci5fb3BlbkRyYXdlcnMrKztcbiAgICAgICAgICB0aGlzLl92aWV3UmVmID0gdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgKHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzWzBdIGFzIEhUTUxEaXZFbGVtZW50KS5zdHlsZS56SW5kZXggPSBgJHt0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzfWA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9kcmF3ZXJDb250YWluZXIuX29wZW5EcmF3ZXJzLS07XG4gICAgICAgIHRoaXMuX3Zjci5jbGVhcigpO1xuICAgICAgICB0aGlzLl92aWV3UmVmID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgaWYgKHRoaXMuX2ZvcmNlTW9kZU92ZXJPcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLl9mb3JjZU1vZGVPdmVyT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5faXNPcGVuID0gdGhpcy5vcGVuZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuX2Zyb21Ub2dnbGUgJiYgIXRoaXMuX2lzQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9mcm9tVG9nZ2xlICYmIHRoaXMuX2lzQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudHJhbnNpdGlvbik7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9kcmF3ZXJDb250YWluZXIuX2RyYXdlckNvbnRlbnQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy50cmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuX2lzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogY29udmVydCBudW1iZXIgdG8gcHhcbiAqL1xuZnVuY3Rpb24gdG9QeCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsfXB4YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UHJvcE9yVXNlRXhpc3Rpbmcob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nLCBfbmV3PzogYW55KSB7XG4gIHJldHVybiBrZXkgaW4gb2JqZWN0XG4gID8gb2JqZWN0W2tleV1cbiAgOiBvYmplY3Rba2V5XSA9IF9uZXcgfHwge307XG59XG4iXX0=