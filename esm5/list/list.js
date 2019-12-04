import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnInit, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform, ThemeVariables, StyleCollection, LyClasses, StyleTemplate, styleTemplateToString, ThemeRef } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
var STYLE_PRIORITY = 2;
var DISABLE_PADDING = false;
export var STYLES = function (theme, ref) {
    var list = ref.selectorsOf(STYLES);
    return {
        $name: LyList.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:block;position:relative;padding-top:8px;padding-bottom:8px;}" + styleTemplateToString(((theme.list
            && theme.list.root
            && (theme.list.root instanceof StyleCollection
                ? theme.list.root.setTransformer(function (fn) { return fn(list); })
                : theme.list.root(list)))), "" + className); }; },
        listItem: function () { return function (className) { return "" + styleTemplateToString((LY_COMMON_STYLES.button), "" + className) + className + "{font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(16) + ";color:" + theme.text.default + ";display:flex;width:100%;position:relative;padding:0 16px;min-height:48px;overflow:hidden;text-align:left;align-items:flex-start;justify-content:flex-start;border-radius:0;}" + className + "::after{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}" + styleTemplateToString((LY_COMMON_STYLES.fill), className + "::after") + className + "::after }," + className + "::after" + list.onFocusByKeyboard + "::after," + className + "::after" + list.actionListItem + ":hover::after{background:currentColor;opacity:.13;border-radius:inherit;}"; }; },
        onFocusByKeyboard: null,
        listItemContent: function (className) { return className + "{display:flex;justify-content:inherit;align-items:inherit;align-content:inherit;font-size:inherit;width:100%;height:100%;box-sizing:border-box;}"; },
        oneLine: function (className) { return className + "{padding-top:8px;padding-bottom:8px;min-height:48px;}"; },
        twoLine: function () { return function (className) { return className + "{padding-top:16px;padding-bottom:16px;min-height:64px;}" + className + " " + list.lines + "{margin-bottom:-4px;}"; }; },
        actionListItem: function (className) { return className + "{cursor:pointer;user-select:none;}"; },
        lines: function (className) { return className + "{align-self:stretch;minWidth:0;width:100%;justify-content:center;flex-direction:column;display:flex;}"; },
        listItemWithIcon: function () { return function (className) { return className + " " + list.lines + "{padding-before:16px;}"; }; },
        twoLineWithIcon: function () { return function (className) { return className + "{padding-top:16px;padding-bottom:16px;}" + className + " " + list.lines + "{margin-bottom:-4px;}"; }; }
    };
};
/** List container */
var LyList = /** @class */ (function () {
    function LyList(theme) {
        this.theme = theme;
        /** @docs-private */
        this.classes = this.theme.addStyleSheet(STYLES);
    }
    LyList.и = 'LyList';
    LyList.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    LyList = tslib_1.__decorate([
        Directive({
            selector: 'ly-list',
            exportAs: 'lyList',
            host: {
                '[className]': 'classes.root'
            }
        })
    ], LyList);
    return LyList;
}());
export { LyList };
/** @docs-private */
var LyListItemBase = /** @class */ (function () {
    function LyListItemBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyListItemBase;
}());
export { LyListItemBase };
/** @docs-private */
export var LyListItemMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyListItemBase)))))))));
/** List Item */
var LyListItem = /** @class */ (function (_super) {
    tslib_1.__extends(LyListItem, _super);
    function LyListItem(_el, _renderer, theme, ngZone, _rippleService, _focusState, _list, _cd) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._rippleService = _rippleService;
        _this._focusState = _focusState;
        _this._list = _list;
        _this._cd = _cd;
        /** @docs-private */
        _this.classes = _this._list.classes;
        _this._isBrowser = Platform.isBrowser;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        return _this;
    }
    Object.defineProperty(LyListItem.prototype, "_listItemClasses", {
        get: function () {
            var _a = this.classes, listItemContent = _a.listItemContent, twoLine = _a.twoLine, oneLine = _a.oneLine, listItemWithIcon = _a.listItemWithIcon, twoLineWithIcon = _a.twoLineWithIcon;
            var classes = [listItemContent];
            var hasIcon = this._icon || this._avatar;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyListItem.prototype, "isActionListItem", {
        get: function () {
            return this._isActionListItem;
        },
        /** @docs-private */
        set: function (val) {
            this._isActionListItem = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyListItem.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
        if (this.disableRipple == null) {
            if (this.isActionListItem) {
                this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                this.disableRipple = false;
                var focusState = this._focusState.listen(this._el);
                if (focusState) {
                    focusState.subscribe(function (event) {
                        if (_this._onFocusByKeyboardState === true) {
                            _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                            _this._onFocusByKeyboardState = false;
                        }
                        if (event === 'keyboard') {
                            _this._onFocusByKeyboardState = true;
                            _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                        }
                    });
                }
            }
        }
    };
    LyListItem.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._lines.changes.subscribe(function () { return _this._cd.markForCheck(); });
    };
    LyListItem.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._el);
    };
    LyListItem.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState },
        { type: LyList },
        { type: ChangeDetectorRef }
    ]; };
    tslib_1.__decorate([
        ViewChild('rippleContainer', { static: false })
    ], LyListItem.prototype, "_rippleContainer", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return LyLine; }))
    ], LyListItem.prototype, "_lines", void 0);
    tslib_1.__decorate([
        ContentChild(forwardRef(function () { return LyListIcon; }), { static: false })
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
    return LyListItem;
}(LyListItemMixinBase));
export { LyListItem };
var LyListIcon = /** @class */ (function () {
    function LyListIcon(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyListIcon', function (theme) { return ({
            color: theme.text.secondary,
            paddingAfter: '16px'
        }); }, STYLE_PRIORITY));
    }
    Object.defineProperty(LyListIcon.prototype, "disablePadding", {
        get: function () {
            return this._disablePadding;
        },
        /** Disable extra padding */
        set: function (val) {
            var newVal = this._disablePadding = toBoolean(val);
            this._disablePaddingClass = this._theme.addStyle("lyIconPadding:" + newVal.toString(), function () { return ({
                paddingTop: newVal ? '4px' : '8px',
                paddingBottom: newVal ? '4px' : '8px'
            }); });
            this._renderer.addClass(this._el.nativeElement, this._disablePaddingClass);
        },
        enumerable: true,
        configurable: true
    });
    LyListIcon.prototype.ngOnInit = function () {
        if (this.disablePadding == null) {
            this.disablePadding = DISABLE_PADDING;
        }
    };
    LyListIcon.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyListIcon.prototype, "disablePadding", null);
    LyListIcon = tslib_1.__decorate([
        Directive({
            selector: '[ly-list-icon]'
        })
    ], LyListIcon);
    return LyListIcon;
}());
export { LyListIcon };
var LyLine = /** @class */ (function () {
    function LyLine(_theme, _el, _renderer) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyLine', function (theme) { return ({
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
        }); }, STYLE_PRIORITY));
    }
    LyLine.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyLine = tslib_1.__decorate([
        Directive({
            selector: '[ly-line]'
        })
    ], LyLine);
    return LyLine;
}());
export { LyLine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsY0FBYyxFQUNkLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWTVDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBdUMsRUFBRSxHQUFhO0lBQzNFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTztRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNmLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElBQUksRUFBRSxjQUFPLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyw2RUFBd0Us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QU0sQ0ErQmxCO0lBQUQsYUFBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3lcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICB0b0Jvb2xlYW4sXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgVGhlbWVSZWYgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlBdmF0YXIgfSBmcm9tICdAYWx5bGUvdWkvYXZhdGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUxpc3RUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIExpc3QgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5TGlzdFZhcmlhYmxlcyB7XG4gIGxpc3Q/OiBMeUxpc3RUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAyO1xuY29uc3QgRElTQUJMRV9QQURESU5HID0gZmFsc2U7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5TGlzdFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBsaXN0ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5TGlzdC7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLmxpc3RcbiAgICAgICAgICAgICYmIHRoZW1lLmxpc3Qucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmxpc3Qucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLmxpc3Qucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihsaXN0KSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5saXN0LnJvb3QobGlzdCkpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX1gLFxuICAgIGxpc3RJdGVtOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuYnV0dG9uKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07Zm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSgxNil9O2NvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjAgMTZweDttaW4taGVpZ2h0OjQ4cHg7b3ZlcmZsb3c6aGlkZGVuO3RleHQtYWxpZ246bGVmdDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2JvcmRlci1yYWRpdXM6MDt9JHtjbGFzc05hbWV9OjphZnRlcntjb250ZW50OicnO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06OmFmdGVyYCl9JHtjbGFzc05hbWV9OjphZnRlciB9LCR7Y2xhc3NOYW1lfTo6YWZ0ZXIke2xpc3Qub25Gb2N1c0J5S2V5Ym9hcmR9OjphZnRlciwke2NsYXNzTmFtZX06OmFmdGVyJHtsaXN0LmFjdGlvbkxpc3RJdGVtfTpob3Zlcjo6YWZ0ZXJ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7b3BhY2l0eTouMTM7Ym9yZGVyLXJhZGl1czppbmhlcml0O31gLFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGxpc3RJdGVtQ29udGVudDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0O2FsaWduLWNvbnRlbnQ6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9YCxcbiAgICBvbmVMaW5lOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDttaW4taGVpZ2h0OjQ4cHg7fWAsXG4gICAgdHdvTGluZTogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwYWRkaW5nLXRvcDoxNnB4O3BhZGRpbmctYm90dG9tOjE2cHg7bWluLWhlaWdodDo2NHB4O30ke2NsYXNzTmFtZX0gJHtsaXN0LmxpbmVzfXttYXJnaW4tYm90dG9tOi00cHg7fWAsXG4gICAgYWN0aW9uTGlzdEl0ZW06IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lO31gLFxuICAgIGxpbmVzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17YWxpZ24tc2VsZjpzdHJldGNoO21pbldpZHRoOjA7d2lkdGg6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtkaXNwbGF5OmZsZXg7fWAsXG4gICAgbGlzdEl0ZW1XaXRoSWNvbjogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2xpc3QubGluZXN9e3BhZGRpbmctYmVmb3JlOjE2cHg7fWAsXG4gICAgdHdvTGluZVdpdGhJY29uOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MTZweDt9JHtjbGFzc05hbWV9ICR7bGlzdC5saW5lc317bWFyZ2luLWJvdHRvbTotNHB4O31gXG4gIH07XG59O1xuXG4vKiogTGlzdCBjb250YWluZXIgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QnLFxuICBleHBvcnRBczogJ2x5TGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzTmFtZV0nOiAnY2xhc3Nlcy5yb290J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdCB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUxpc3QnO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2xpc3QuY2xhc3NlcztcbiAgcmVhZG9ubHkgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgcHJpdmF0ZSBfaXNBY3Rpb25MaXN0SXRlbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5TGluZSkpIF9saW5lczogUXVlcnlMaXN0PEx5TGluZT47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUxpc3RJY29uKSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9pY29uOiBMeUxpc3RJY29uICYgeyB9O1xuICBAQ29udGVudENoaWxkKEx5QXZhdGFyLCB7IHN0YXRpYzogZmFsc2UgfSkgX2F2YXRhcjogTHlBdmF0YXI7XG4gIGdldCBfbGlzdEl0ZW1DbGFzc2VzKCkge1xuICAgIGNvbnN0IHsgbGlzdEl0ZW1Db250ZW50LCB0d29MaW5lLCBvbmVMaW5lLCBsaXN0SXRlbVdpdGhJY29uLCB0d29MaW5lV2l0aEljb24gfSA9IHRoaXMuY2xhc3NlcztcbiAgICBjb25zdCBjbGFzc2VzID0gW2xpc3RJdGVtQ29udGVudF07XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMuX2ljb24gfHwgdGhpcy5fYXZhdGFyO1xuICAgIGlmIChoYXNJY29uKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobGlzdEl0ZW1XaXRoSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lcyAmJiB0aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChoYXNJY29uICYmIHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHR3b0xpbmVXaXRoSWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5fbGluZXMubGVuZ3RoID4gMSA/IHR3b0xpbmUgOiBvbmVMaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCdseS1saXN0LWl0ZW0nKVxuICBzZXQgaXNBY3Rpb25MaXN0SXRlbSh2YWw6IGFueSkge1xuICAgIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW0gPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNBY3Rpb25MaXN0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3Rpb25MaXN0SXRlbTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgcHJpdmF0ZSBfbGlzdDogTHlMaXN0LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbGlzdC5jbGFzc2VzLmxpc3RJdGVtKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aW9uTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFjdGlvbkxpc3RJdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fbGluZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2QubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpc3QtaWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEljb24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEaXNhYmxlIGV4dHJhIHBhZGRpbmcgKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQYWRkaW5nKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVBhZGRpbmcgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5SWNvblBhZGRpbmc6JHtuZXdWYWwudG9TdHJpbmcoKX1gLCAoKSA9PiAoXG4gICAgICB7XG4gICAgICAgIHBhZGRpbmdUb3A6IG5ld1ZhbCA/ICc0cHgnIDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5ld1ZhbCA/ICc0cHgnIDogJzhweCdcbiAgICAgIH1cbiAgICApKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzKTtcbiAgfVxuICBnZXQgZGlzYWJsZVBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQYWRkaW5nO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGlzdEljb24nLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICBwYWRkaW5nQWZ0ZXI6ICcxNnB4J1xuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUGFkZGluZyA9IERJU0FCTEVfUEFERElORztcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpbmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpbmUnLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdpbml0aWFsJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bnRoLWNoaWxkKG4rMiknOiB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNClcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==