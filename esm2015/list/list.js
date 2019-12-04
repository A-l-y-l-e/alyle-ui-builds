import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnInit, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform, ThemeVariables, StyleCollection, LyClasses, StyleTemplate, styleTemplateToString, ThemeRef } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
const STYLE_PRIORITY = 2;
const DISABLE_PADDING = false;
export const STYLES = (theme, ref) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsY0FBYyxFQUNkLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWTVDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBdUMsRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU87UUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDZixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsR0FBSSxFQUFFLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVB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U0ExQ1ksVUFBVTtBQStDdkIsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQUNqQixZQUNVLE1BQWdCLEVBQ2hCLEdBQWUsRUFDZixTQUFvQjtRQUZwQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hCLFFBQVEsRUFDUixDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUIsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM1QjtZQUNELGtCQUFrQixFQUFFO2dCQUNsQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQzVCO1NBQ0YsQ0FBQyxFQUNGLGNBQWMsQ0FDZixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUE3Qm1CLFFBQVE7WUFDWCxVQUFVO1lBQ0osU0FBUzs7QUFKbkIsTUFBTTtJQUhsQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztLQUN0QixDQUFDO0dBQ1csTUFBTSxDQStCbEI7U0EvQlksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBmb3J3YXJkUmVmLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nLFxuICBUaGVtZVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUF2YXRhciB9IGZyb20gJ0BhbHlsZS91aS9hdmF0YXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TGlzdFRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgTGlzdCBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlMaXN0VmFyaWFibGVzIHtcbiAgbGlzdD86IEx5TGlzdFRoZW1lO1xufVxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IDI7XG5jb25zdCBESVNBQkxFX1BBRERJTkcgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlMaXN0VmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlMaXN0LtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUubGlzdFxuICAgICAgICAgICAgJiYgdGhlbWUubGlzdC5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUubGlzdC5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUubGlzdC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGxpc3QpKVxuICAgICAgICAgICAgICA6IHRoZW1lLmxpc3Qucm9vdChsaXN0KSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgbGlzdEl0ZW06ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5idXR0b24pLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e2ZvbnQtZmFtaWx5OiR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5fTtmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKDE2KX07Y29sb3I6JHt0aGVtZS50ZXh0LmRlZmF1bHR9O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MCAxNnB4O21pbi1oZWlnaHQ6NDhweDtvdmVyZmxvdzpoaWRkZW47dGV4dC1hbGlnbjpsZWZ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Ym9yZGVyLXJhZGl1czowO30ke2NsYXNzTmFtZX06OmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YWZ0ZXJgKX0ke2NsYXNzTmFtZX06OmFmdGVyIH0sJHtjbGFzc05hbWV9OjphZnRlciR7bGlzdC5vbkZvY3VzQnlLZXlib2FyZH06OmFmdGVyLCR7Y2xhc3NOYW1lfTo6YWZ0ZXIke2xpc3QuYWN0aW9uTGlzdEl0ZW19OmhvdmVyOjphZnRlcntiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4xMztib3JkZXItcmFkaXVzOmluaGVyaXQ7fWAsXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgbGlzdEl0ZW1Db250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7YWxpZ24tY29udGVudDppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O31gLFxuICAgIG9uZUxpbmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O21pbi1oZWlnaHQ6NDhweDt9YCxcbiAgICB0d29MaW5lOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MTZweDttaW4taGVpZ2h0OjY0cHg7fSR7Y2xhc3NOYW1lfSAke2xpc3QubGluZXN9e21hcmdpbi1ib3R0b206LTRweDt9YCxcbiAgICBhY3Rpb25MaXN0SXRlbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmU7fWAsXG4gICAgbGluZXM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXthbGlnbi1zZWxmOnN0cmV0Y2g7bWluV2lkdGg6MDt3aWR0aDoxMDAlO2p1c3RpZnktY29udGVudDpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2Rpc3BsYXk6ZmxleDt9YCxcbiAgICBsaXN0SXRlbVdpdGhJY29uOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7bGlzdC5saW5lc317cGFkZGluZy1iZWZvcmU6MTZweDt9YCxcbiAgICB0d29MaW5lV2l0aEljb246ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cGFkZGluZy10b3A6MTZweDtwYWRkaW5nLWJvdHRvbToxNnB4O30ke2NsYXNzTmFtZX0gJHtsaXN0LmxpbmVzfXttYXJnaW4tYm90dG9tOi00cHg7fWBcbiAgfTtcbn07XG5cbi8qKiBMaXN0IGNvbnRhaW5lciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdCcsXG4gIGV4cG9ydEFzOiAnbHlMaXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NOYW1lXSc6ICdjbGFzc2VzLnJvb3QnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5TGlzdCc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUxpc3RJdGVtTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5TGlzdEl0ZW1CYXNlKSkpKSkpKSkpO1xuXG4vKiogTGlzdCBJdGVtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1saXN0LWl0ZW0sIGFbbHktbGlzdC1pdGVtXSwgYnV0dG9uW2x5LWxpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1pdGVtLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBleHBvcnRBczogJ2x5TGlzdEl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEl0ZW0gZXh0ZW5kcyBMeUxpc3RJdGVtTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fbGlzdC5jbGFzc2VzO1xuICByZWFkb25seSBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBwcml2YXRlIF9pc0FjdGlvbkxpc3RJdGVtOiBib29sZWFuO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlMaW5lKSkgX2xpbmVzOiBRdWVyeUxpc3Q8THlMaW5lPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5TGlzdEljb24pLCB7IHN0YXRpYzogZmFsc2UgfSkgX2ljb246IEx5TGlzdEljb24gJiB7IH07XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIsIHsgc3RhdGljOiBmYWxzZSB9KSBfYXZhdGFyOiBMeUF2YXRhcjtcbiAgZ2V0IF9saXN0SXRlbUNsYXNzZXMoKSB7XG4gICAgY29uc3QgeyBsaXN0SXRlbUNvbnRlbnQsIHR3b0xpbmUsIG9uZUxpbmUsIGxpc3RJdGVtV2l0aEljb24sIHR3b0xpbmVXaXRoSWNvbiB9ID0gdGhpcy5jbGFzc2VzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbbGlzdEl0ZW1Db250ZW50XTtcbiAgICBjb25zdCBoYXNJY29uID0gdGhpcy5faWNvbiB8fCB0aGlzLl9hdmF0YXI7XG4gICAgaWYgKGhhc0ljb24pIHtcbiAgICAgIGNsYXNzZXMucHVzaChsaXN0SXRlbVdpdGhJY29uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmVzICYmIHRoaXMuX2xpbmVzLmxlbmd0aCkge1xuICAgICAgaWYgKGhhc0ljb24gJiYgdGhpcy5fbGluZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2godHdvTGluZVdpdGhJY29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLl9saW5lcy5sZW5ndGggPiAxID8gdHdvTGluZSA6IG9uZUxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoJ2x5LWxpc3QtaXRlbScpXG4gIHNldCBpc0FjdGlvbkxpc3RJdGVtKHZhbDogYW55KSB7XG4gICAgdGhpcy5faXNBY3Rpb25MaXN0SXRlbSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc0FjdGlvbkxpc3RJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9saXN0OiBMeUxpc3QsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9saXN0LmNsYXNzZXMubGlzdEl0ZW0pO1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuaXNBY3Rpb25MaXN0SXRlbSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYWN0aW9uTGlzdEl0ZW0pO1xuICAgICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9saW5lcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGlzdC1pY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIERpc2FibGUgZXh0cmEgcGFkZGluZyAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBhZGRpbmcodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUGFkZGluZyA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlJY29uUGFkZGluZzoke25ld1ZhbC50b1N0cmluZygpfWAsICgpID0+IChcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZ1RvcDogbmV3VmFsID8gJzRweCcgOiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogbmV3VmFsID8gJzRweCcgOiAnOHB4J1xuICAgICAgfVxuICAgICkpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MpO1xuICB9XG4gIGdldCBkaXNhYmxlUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBhZGRpbmc7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaXN0SWNvbicsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgIHBhZGRpbmdBZnRlcjogJzE2cHgnXG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGFkZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVQYWRkaW5nID0gRElTQUJMRV9QQURESU5HO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGluZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGluZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGluZScsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2luaXRpYWwnLFxuICAgICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpudGgtY2hpbGQobisyKSc6IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19