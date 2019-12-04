import { __decorate, __param } from 'tslib';
import { Renderer2, ElementRef, Inject, forwardRef, Directive, ContentChild, ViewContainerRef, ChangeDetectorRef, NgZone, ViewChild, TemplateRef, Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { XPosition, StyleCollection, styleTemplateToString, LY_COMMON_STYLES, LyTheme2, toBoolean, eachMedia, DirPosition, YPosition, Platform, StyleRenderer, WinResize, LyHostClass, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

var LyDrawer_1;
const DEFAULT_MODE = 'side';
const DEFAULT_WIDTH = '230px';
const DEFAULT_VALUE = '';
const STYLE_PRIORITY = -2;
const DEFAULT_POSITION = XPosition.before;
const STYLES = (theme, ref) => {
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
        backdrop: (className) => `${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}`)}${className}{background-color:${theme.drawer.backdrop};}`,
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
LyDrawerContent = __decorate([
    Directive({
        selector: 'ly-drawer-content'
    }),
    __param(2, Inject(forwardRef(() => LyDrawerContainer)))
], LyDrawerContent);
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
__decorate([
    ContentChild(forwardRef(() => LyDrawerContent), { static: true })
], LyDrawerContainer.prototype, "_drawerContent", void 0);
LyDrawerContainer = __decorate([
    Directive({
        selector: 'ly-drawer-container'
    })
], LyDrawerContainer);
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
__decorate([
    ViewChild(TemplateRef, { static: false })
], LyDrawer.prototype, "_backdrop", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "opened", null);
__decorate([
    Input()
], LyDrawer.prototype, "mode", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "spacingAbove", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "spacingBelow", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "spacingBefore", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "spacingAfter", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "width", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "height", void 0);
__decorate([
    Input()
], LyDrawer.prototype, "hasBackdrop", null);
__decorate([
    Input()
], LyDrawer.prototype, "position", null);
LyDrawer = LyDrawer_1 = __decorate([
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

let LyDrawerModule = class LyDrawerModule {
};
LyDrawerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LyCommonModule
        ],
        exports: [LyDrawer, LyDrawerContainer, LyDrawerContent],
        declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
    })
], LyDrawerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyDrawer, LyDrawerContainer, LyDrawerContent, LyDrawerModule, STYLES };
//# sourceMappingURL=alyle-ui-drawer.js.map
