import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnInit, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform, ThemeVariables, StyleCollection, LyClasses, StyleTemplate, styleTemplateToString, ThemeRef } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
const STYLE_PRIORITY = 2;
const DISABLE_PADDING = false;
export const STYLES = (theme, ref) => {
    const list = ref.selectorsOf(STYLES);
    const { before } = theme;
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
        lines: (className) => `${className}{align-self:stretch;min-width:0;width:100%;justify-content:center;flex-direction:column;display:flex;}`,
        listItemWithIcon: () => (className) => `${className} ${list.lines}{padding-${before}:16px;}`,
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
LyList = tslib_1.__decorate([
    Directive({
        selector: 'ly-list',
        exportAs: 'lyList',
        host: {
            '[className]': 'classes.root'
        }
    })
], LyList);
export { LyList };
/** @docs-private */
export class LyListItemBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
export const LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
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
tslib_1.__decorate([
    ViewChild('rippleContainer', { static: false })
], LyListItem.prototype, "_rippleContainer", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyLine))
], LyListItem.prototype, "_lines", void 0);
tslib_1.__decorate([
    ContentChild(forwardRef(() => LyListIcon), { static: false })
], LyListItem.prototype, "_icon", void 0);
tslib_1.__decorate([
    ContentChild(LyAvatar, { static: false })
], LyListItem.prototype, "_avatar", void 0);
tslib_1.__decorate([
    Input('ly-list-item')
], LyListItem.prototype, "isActionListItem", null);
LyListItem = tslib_1.__decorate([
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
export { LyListItem };
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
tslib_1.__decorate([
    Input()
], LyListIcon.prototype, "disablePadding", null);
LyListIcon = tslib_1.__decorate([
    Directive({
        selector: '[ly-list-icon]'
    })
], LyListIcon);
export { LyListIcon };
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
LyLine = tslib_1.__decorate([
    Directive({
        selector: '[ly-line]'
    })
], LyLine);
export { LyLine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsY0FBYyxFQUNkLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWTVDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBdUMsRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEIsT0FBTztRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNmLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElB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ZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3lcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICB0b0Jvb2xlYW4sXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgVGhlbWVSZWYgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlBdmF0YXIgfSBmcm9tICdAYWx5bGUvdWkvYXZhdGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUxpc3RUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIExpc3QgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5TGlzdFZhcmlhYmxlcyB7XG4gIGxpc3Q/OiBMeUxpc3RUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAyO1xuY29uc3QgRElTQUJMRV9QQURESU5HID0gZmFsc2U7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5TGlzdFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBsaXN0ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYmVmb3JlfSA9IHRoZW1lO1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeUxpc3Qu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5saXN0XG4gICAgICAgICAgICAmJiB0aGVtZS5saXN0LnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5saXN0LnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5saXN0LnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4obGlzdCkpXG4gICAgICAgICAgICAgIDogdGhlbWUubGlzdC5yb290KGxpc3QpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBsaXN0SXRlbTogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmJ1dHRvbiksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17Zm9udC1mYW1pbHk6JHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oMTYpfTtjb2xvcjoke3RoZW1lLnRleHQuZGVmYXVsdH07ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowIDE2cHg7bWluLWhlaWdodDo0OHB4O292ZXJmbG93OmhpZGRlbjt0ZXh0LWFsaWduOmxlZnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtib3JkZXItcmFkaXVzOjA7fSR7Y2xhc3NOYW1lfTo6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjphZnRlcmApfSR7Y2xhc3NOYW1lfTo6YWZ0ZXIgfSwke2NsYXNzTmFtZX06OmFmdGVyJHtsaXN0Lm9uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsJHtjbGFzc05hbWV9OjphZnRlciR7bGlzdC5hY3Rpb25MaXN0SXRlbX06aG92ZXI6OmFmdGVye2JhY2tncm91bmQ6Y3VycmVudENvbG9yO29wYWNpdHk6LjEzO2JvcmRlci1yYWRpdXM6aW5oZXJpdDt9YCxcbiAgICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgICBsaXN0SXRlbUNvbnRlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmluaGVyaXQ7YWxpZ24taXRlbXM6aW5oZXJpdDthbGlnbi1jb250ZW50OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fWAsXG4gICAgb25lTGluZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7bWluLWhlaWdodDo0OHB4O31gLFxuICAgIHR3b0xpbmU6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cGFkZGluZy10b3A6MTZweDtwYWRkaW5nLWJvdHRvbToxNnB4O21pbi1oZWlnaHQ6NjRweDt9JHtjbGFzc05hbWV9ICR7bGlzdC5saW5lc317bWFyZ2luLWJvdHRvbTotNHB4O31gLFxuICAgIGFjdGlvbkxpc3RJdGVtOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y3Vyc29yOnBvaW50ZXI7dXNlci1zZWxlY3Q6bm9uZTt9YCxcbiAgICBsaW5lczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2FsaWduLXNlbGY6c3RyZXRjaDttaW4td2lkdGg6MDt3aWR0aDoxMDAlO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2Rpc3BsYXk6ZmxleDt9YCxcbiAgICBsaXN0SXRlbVdpdGhJY29uOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7bGlzdC5saW5lc317cGFkZGluZy0ke2JlZm9yZX06MTZweDt9YCxcbiAgICB0d29MaW5lV2l0aEljb246ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cGFkZGluZy10b3A6MTZweDtwYWRkaW5nLWJvdHRvbToxNnB4O30ke2NsYXNzTmFtZX0gJHtsaXN0LmxpbmVzfXttYXJnaW4tYm90dG9tOi00cHg7fWBcbiAgfTtcbn07XG5cbi8qKiBMaXN0IGNvbnRhaW5lciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdCcsXG4gIGV4cG9ydEFzOiAnbHlMaXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NOYW1lXSc6ICdjbGFzc2VzLnJvb3QnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5TGlzdCc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUxpc3RJdGVtTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5TGlzdEl0ZW1CYXNlKSkpKSkpKSkpO1xuXG4vKiogTGlzdCBJdGVtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1saXN0LWl0ZW0sIGFbbHktbGlzdC1pdGVtXSwgYnV0dG9uW2x5LWxpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1pdGVtLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBleHBvcnRBczogJ2x5TGlzdEl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEl0ZW0gZXh0ZW5kcyBMeUxpc3RJdGVtTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fbGlzdC5jbGFzc2VzO1xuICByZWFkb25seSBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBwcml2YXRlIF9pc0FjdGlvbkxpc3RJdGVtOiBib29sZWFuO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlMaW5lKSkgX2xpbmVzOiBRdWVyeUxpc3Q8THlMaW5lPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5TGlzdEljb24pLCB7IHN0YXRpYzogZmFsc2UgfSkgX2ljb246IEx5TGlzdEljb24gJiB7IH07XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIsIHsgc3RhdGljOiBmYWxzZSB9KSBfYXZhdGFyOiBMeUF2YXRhcjtcbiAgZ2V0IF9saXN0SXRlbUNsYXNzZXMoKSB7XG4gICAgY29uc3QgeyBsaXN0SXRlbUNvbnRlbnQsIHR3b0xpbmUsIG9uZUxpbmUsIGxpc3RJdGVtV2l0aEljb24sIHR3b0xpbmVXaXRoSWNvbiB9ID0gdGhpcy5jbGFzc2VzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbbGlzdEl0ZW1Db250ZW50XTtcbiAgICBjb25zdCBoYXNJY29uID0gdGhpcy5faWNvbiB8fCB0aGlzLl9hdmF0YXI7XG4gICAgaWYgKGhhc0ljb24pIHtcbiAgICAgIGNsYXNzZXMucHVzaChsaXN0SXRlbVdpdGhJY29uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmVzICYmIHRoaXMuX2xpbmVzLmxlbmd0aCkge1xuICAgICAgaWYgKGhhc0ljb24gJiYgdGhpcy5fbGluZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2godHdvTGluZVdpdGhJY29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLl9saW5lcy5sZW5ndGggPiAxID8gdHdvTGluZSA6IG9uZUxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoJ2x5LWxpc3QtaXRlbScpXG4gIHNldCBpc0FjdGlvbkxpc3RJdGVtKHZhbDogYW55KSB7XG4gICAgdGhpcy5faXNBY3Rpb25MaXN0SXRlbSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc0FjdGlvbkxpc3RJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9saXN0OiBMeUxpc3QsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9saXN0LmNsYXNzZXMubGlzdEl0ZW0pO1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuaXNBY3Rpb25MaXN0SXRlbSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYWN0aW9uTGlzdEl0ZW0pO1xuICAgICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9saW5lcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGlzdC1pY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIERpc2FibGUgZXh0cmEgcGFkZGluZyAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBhZGRpbmcodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUGFkZGluZyA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlJY29uUGFkZGluZzoke25ld1ZhbC50b1N0cmluZygpfWAsICgpID0+IChcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZ1RvcDogbmV3VmFsID8gJzRweCcgOiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogbmV3VmFsID8gJzRweCcgOiAnOHB4J1xuICAgICAgfVxuICAgICkpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MpO1xuICB9XG4gIGdldCBkaXNhYmxlUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBhZGRpbmc7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaXN0SWNvbicsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgIHBhZGRpbmdBZnRlcjogJzE2cHgnXG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGFkZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVQYWRkaW5nID0gRElTQUJMRV9QQURESU5HO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGluZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGluZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGluZScsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2luaXRpYWwnLFxuICAgICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpudGgtY2hpbGQobisyKSc6IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19