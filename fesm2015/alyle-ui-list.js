import { __decorate } from 'tslib';
import { Directive, ElementRef, Renderer2, NgZone, ChangeDetectorRef, ViewChild, ContentChildren, forwardRef, ContentChild, Input, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, LY_COMMON_STYLES, LyTheme2, mixinStyleUpdater, mixinBg, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, Platform, toBoolean, LyRippleService, LyFocusState, LyCommonModule } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
import { CommonModule } from '@angular/common';

const STYLE_PRIORITY = 2;
const DISABLE_PADDING = false;
const STYLES = (theme, ref) => {
    const list = ref.selectorsOf(STYLES);
    return {
        $name: LyList.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{display:block;position:relative;padding-top:8px;padding-bottom:8px;}${styleTemplateToString(((theme.list
            && theme.list.root
            && (theme.list.root instanceof StyleCollection
                ? theme.list.root.setTransformer(fn => fn(list))
                : theme.list.root(list)))), `${className}`)}`,
        listItem: () => (className) => `${styleTemplateToString((LY_COMMON_STYLES.button), `${className}`)}${className}{font-family:${theme.typography.fontFamily};font-size:${theme.pxToRem(16)};color:${theme.text.default};display:flex;width:100%;position:relative;padding:0 16px;min-height:48px;overflow:hidden;text-align:left;align-items:flex-start;justify-content:flex-start;border-radius:0;}${className}::after{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}::after`)}${className}::after },${className}::after${list.onFocusByKeyboard}::after,${className}::after${list.actionListItem}:hover::after{background:currentColor;opacity:.13;border-radius:inherit;}`,
        onFocusByKeyboard: null,
        listItemContent: (className) => `${className}{display:flex;justify-content:inherit;align-items:inherit;align-content:inherit;font-size:inherit;width:100%;height:100%;box-sizing:border-box;}`,
        oneLine: (className) => `${className}{padding-top:8px;padding-bottom:8px;min-height:48px;}`,
        twoLine: () => (className) => `${className}{padding-top:16px;padding-bottom:16px;min-height:64px;}${className} ${list.lines}{margin-bottom:-4px;}`,
        actionListItem: (className) => `${className}{cursor:pointer;user-select:none;}`,
        lines: (className) => `${className}{align-self:stretch;minWidth:0;width:100%;justify-content:center;flex-direction:column;display:flex;}`,
        listItemWithIcon: () => (className) => `${className} ${list.lines}{padding-before:16px;}`,
        twoLineWithIcon: () => (className) => `${className}{padding-top:16px;padding-bottom:16px;}${className} ${list.lines}{margin-bottom:-4px;}`
    };
};
/** List container */
let LyList = class LyList {
    constructor(theme) {
        this.theme = theme;
        /** @docs-private */
        this.classes = this.theme.addStyleSheet(STYLES);
    }
};
LyList.и = 'LyList';
LyList.ctorParameters = () => [
    { type: LyTheme2 }
];
LyList = __decorate([
    Directive({
        selector: 'ly-list',
        exportAs: 'lyList',
        host: {
            '[className]': 'classes.root'
        }
    })
], LyList);
/** @docs-private */
class LyListItemBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
/** List Item */
let LyListItem = class LyListItem extends LyListItemMixinBase {
    constructor(_el, _renderer, theme, ngZone, _rippleService, _focusState, _list, _cd) {
        super(theme, ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this._rippleService = _rippleService;
        this._focusState = _focusState;
        this._list = _list;
        this._cd = _cd;
        /** @docs-private */
        this.classes = this._list.classes;
        this._isBrowser = Platform.isBrowser;
        this.setAutoContrast();
        this._triggerElement = _el;
    }
    get _listItemClasses() {
        const { listItemContent, twoLine, oneLine, listItemWithIcon, twoLineWithIcon } = this.classes;
        const classes = [listItemContent];
        const hasIcon = this._icon || this._avatar;
        if (hasIcon) {
            classes.push(listItemWithIcon);
        }
        if (this._lines && this._lines.length) {
            if (hasIcon && this._lines.length > 1) {
                classes.push(twoLineWithIcon);
            }
            else {
                classes.push(this._lines.length > 1 ? twoLine : oneLine);
            }
        }
        return classes;
    }
    /** @docs-private */
    set isActionListItem(val) {
        this._isActionListItem = toBoolean(val);
    }
    get isActionListItem() {
        return this._isActionListItem;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
        if (this.disableRipple == null) {
            if (this.isActionListItem) {
                this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                this.disableRipple = false;
                const focusState = this._focusState.listen(this._el);
                if (focusState) {
                    focusState.subscribe((event) => {
                        if (this._onFocusByKeyboardState === true) {
                            this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                            this._onFocusByKeyboardState = false;
                        }
                        if (event === 'keyboard') {
                            this._onFocusByKeyboardState = true;
                            this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                        }
                    });
                }
            }
        }
    }
    ngAfterContentInit() {
        this._lines.changes.subscribe(() => this._cd.markForCheck());
    }
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
    }
};
LyListItem.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState },
    { type: LyList },
    { type: ChangeDetectorRef }
];
__decorate([
    ViewChild('rippleContainer', { static: false })
], LyListItem.prototype, "_rippleContainer", void 0);
__decorate([
    ContentChildren(forwardRef(() => LyLine))
], LyListItem.prototype, "_lines", void 0);
__decorate([
    ContentChild(forwardRef(() => LyListIcon), { static: false })
], LyListItem.prototype, "_icon", void 0);
__decorate([
    ContentChild(LyAvatar, { static: false })
], LyListItem.prototype, "_avatar", void 0);
__decorate([
    Input('ly-list-item')
], LyListItem.prototype, "isActionListItem", null);
LyListItem = __decorate([
    Component({
        selector: 'ly-list-item, a[ly-list-item], button[ly-list-item]',
        template: "<span [ngClass]=\"_listItemClasses\">\n  <ng-content></ng-content>\n  <div *ngIf=\"_lines?.length\" [className]=\"classes.lines\">\n    <ng-content select=\"[ly-line]\"></ng-content>\n  </div>\n</span>\n<div *ngIf=\"_isBrowser\" #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        inputs: [
            'bg',
            'color',
            'raised',
            'disabled',
            'outlined',
            'elevation',
            'shadowColor',
            'disableRipple'
        ],
        exportAs: 'lyListItem'
    })
], LyListItem);
let LyListIcon = class LyListIcon {
    constructor(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyListIcon', (theme) => ({
            color: theme.text.secondary,
            paddingAfter: '16px'
        }), STYLE_PRIORITY));
    }
    /** Disable extra padding */
    set disablePadding(val) {
        const newVal = this._disablePadding = toBoolean(val);
        this._disablePaddingClass = this._theme.addStyle(`lyIconPadding:${newVal.toString()}`, () => ({
            paddingTop: newVal ? '4px' : '8px',
            paddingBottom: newVal ? '4px' : '8px'
        }));
        this._renderer.addClass(this._el.nativeElement, this._disablePaddingClass);
    }
    get disablePadding() {
        return this._disablePadding;
    }
    ngOnInit() {
        if (this.disablePadding == null) {
            this.disablePadding = DISABLE_PADDING;
        }
    }
};
LyListIcon.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], LyListIcon.prototype, "disablePadding", null);
LyListIcon = __decorate([
    Directive({
        selector: '[ly-list-icon]'
    })
], LyListIcon);
let LyLine = class LyLine {
    constructor(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyLine', (theme) => ({
            margin: 0,
            padding: 0,
            fontWeight: 400,
            textAlign: 'initial',
            '&:first-child': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1,
                fontSize: theme.pxToRem(16)
            },
            '&:nth-child(n+2)': {
                lineHeight: '20px',
                fontSize: theme.pxToRem(14)
            }
        }), STYLE_PRIORITY));
    }
};
LyLine.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
LyLine = __decorate([
    Directive({
        selector: '[ly-line]'
    })
], LyLine);

let LyListModule = class LyListModule {
};
LyListModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [LyList, LyListItem, LyListIcon, LyLine],
        exports: [LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
    })
], LyListModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyLine, LyList, LyListIcon, LyListItem, LyListItemBase, LyListItemMixinBase, LyListModule, STYLES };
//# sourceMappingURL=alyle-ui-list.js.map
