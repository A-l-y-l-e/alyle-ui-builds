import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnInit, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform, ThemeVariables, StyleCollection, LyClasses, StyleTemplate, styleTemplateToString, ThemeRef } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
var STYLE_PRIORITY = 2;
var DISABLE_PADDING = false;
export var STYLES = function (theme, ref) {
    var list = ref.selectorsOf(STYLES);
    var before = theme.before;
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
        lines: function (className) { return className + "{align-self:stretch;min-width:0;width:100%;justify-content:center;flex-direction:column;display:flex;}"; },
        listItemWithIcon: function () { return function (className) { return className + " " + list.lines + "{padding-" + before + ":16px;}"; }; },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsY0FBYyxFQUNkLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWTVDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBdUMsRUFBRSxHQUFhO0lBQzNFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsSUFBQSxxQkFBTSxDQUFVO0lBQ3hCLE9BQU87UUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDZixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsY0FBTyxPQUFBLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsNkVBQXdFLHFCQUFxQixDQUFDLENBQ3hJLENBQUMsS0FBSyxDQUFDLElBQUk7ZUFDTixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7ZUFDZixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLGVBQWU7Z0JBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUSxDQUFDO2dCQUNoRCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDM0IsQ0FBQyxFQUFFLEtBQUcsU0FBVyxDQUFHLEVBTlMsQ0FNVCxFQU5kLENBTWM7UUFDM0IsUUFBUSxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBQSxLQUFHLHFCQUFxQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBRyxTQUFXLENBQUMsR0FBRyxTQUFTLHFCQUFnQixLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsbUJBQWMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZUFBVSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8scUxBQWdMLFNBQVMsd0dBQW1HLHFCQUFxQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUssU0FBUyxZQUFTLENBQUMsR0FBRyxTQUFTLGtCQUFhLFNBQVMsZUFBVSxJQUFJLENBQUMsaUJBQWlCLGdCQUFXLFNBQVMsZUFBVSxJQUFJLENBQUMsY0FBYyw4RUFBMkUsRUFBcHRCLENBQW90QixFQUEzdUIsQ0FBMnVCO1FBQzV2QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLGVBQWUsRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLHFKQUFrSixFQUE5SixDQUE4SjtRQUN0TSxPQUFPLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUywwREFBdUQsRUFBbkUsQ0FBbUU7UUFDbkcsT0FBTyxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLCtEQUEwRCxTQUFTLFNBQUksSUFBSSxDQUFDLEtBQUssMEJBQXVCLEVBQXBILENBQW9ILEVBQTNJLENBQTJJO1FBQzNKLGNBQWMsRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLHVDQUFvQyxFQUFoRCxDQUFnRDtRQUN2RixLQUFLLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUywyR0FBd0csRUFBcEgsQ0FBb0g7UUFDbEosZ0JBQWdCLEVBQUUsY0FBTyxPQUFBLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsU0FBSSxJQUFJLENBQUMsS0FBSyxpQkFBWSxNQUFNLFlBQVMsRUFBckQsQ0FBcUQsRUFBNUUsQ0FBNEU7UUFDckcsZUFBZSxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLCtDQUEwQyxTQUFTLFNBQUksSUFBSSxDQUFDLEtBQUssMEJBQXVCLEVBQXBHLENBQW9HLEVBQTNILENBQTJIO0tBQ3BKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixxQkFBcUI7QUFRckI7SUFJRSxnQkFDVSxLQUFlO1FBQWYsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQUh6QixvQkFBb0I7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHaEQsQ0FBQztJQUxXLFFBQUMsR0FBRyxRQUFRLENBQUM7O2dCQUlaLFFBQVE7O0lBTGQsTUFBTTtRQVBsQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUU7Z0JBQ0osYUFBYSxFQUFFLGNBQWM7YUFDOUI7U0FDRixDQUFDO09BQ1csTUFBTSxDQU9sQjtJQUFELGFBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxNQUFNO0FBU25CLG9CQUFvQjtBQUNwQjtJQUNFLHdCQUNTLE1BQWdCLEVBQ2hCLE9BQWU7UUFEZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDcEIsQ0FBQztJQUNQLHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUNwRCxPQUFPLENBQ0gsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FDZCxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFM0QsZ0JBQWdCO0FBaUJoQjtJQUFnQyxzQ0FBbUI7SUFtQ2pELG9CQUNVLEdBQWUsRUFDZixTQUFvQixFQUM1QixLQUFlLEVBQ2YsTUFBYyxFQUNQLGNBQStCLEVBQzlCLFdBQXlCLEVBQ3pCLEtBQWEsRUFDYixHQUFzQjtRQVJoQyxZQVVFLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsU0FHckI7UUFaUyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUdyQixvQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDOUIsaUJBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUNoQyxvQkFBb0I7UUFDWCxhQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsZ0JBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBMkN2QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7O0lBQzdCLENBQUM7SUFyQ0Qsc0JBQUksd0NBQWdCO2FBQXBCO1lBQ1EsSUFBQSxpQkFBdUYsRUFBckYsb0NBQWUsRUFBRSxvQkFBTyxFQUFFLG9CQUFPLEVBQUUsc0NBQWdCLEVBQUUsb0NBQWdDLENBQUM7WUFDOUYsSUFBTSxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQy9CO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxRDthQUNGO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSx3Q0FBZ0I7YUFHcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDO1FBUEQsb0JBQW9CO2FBRXBCLFVBQXFCLEdBQVE7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQW1CRCw2QkFBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JELElBQUksVUFBVSxFQUFFO29CQUNkLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO3dCQUN6QixJQUFJLEtBQUksQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7NEJBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDbkYsS0FBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQzt5QkFDdEM7d0JBQ0QsSUFBSSxLQUFLLEtBQUssVUFBVSxFQUFFOzRCQUN4QixLQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDOzRCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7eUJBQ2pGO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCx1Q0FBa0IsR0FBbEI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQTNDYyxVQUFVO2dCQUNKLFNBQVM7Z0JBQ3JCLFFBQVE7Z0JBQ1AsTUFBTTtnQkFDUyxlQUFlO2dCQUNqQixZQUFZO2dCQUNsQixNQUFNO2dCQUNSLGlCQUFpQjs7SUFwQ2lCO1FBQWhELFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt3REFBOEI7SUFDbkM7UUFBMUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQyxDQUFDOzhDQUEyQjtJQUNOO1FBQTlELFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLFVBQVUsRUFBVixDQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs2Q0FBeUI7SUFDNUM7UUFBMUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FBbUI7SUFtQjdEO1FBREMsS0FBSyxDQUFDLGNBQWMsQ0FBQztzREFHckI7SUEvQlUsVUFBVTtRQWhCdEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFEQUFxRDtZQUMvRCx5VEFBK0I7WUFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsTUFBTSxFQUFFO2dCQUNOLElBQUk7Z0JBQ0osT0FBTztnQkFDUCxRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsZUFBZTthQUNoQjtZQUNELFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7T0FDVyxVQUFVLENBZ0Z0QjtJQUFELGlCQUFDO0NBQUEsQUFoRkQsQ0FBZ0MsbUJBQW1CLEdBZ0ZsRDtTQWhGWSxVQUFVO0FBcUZ2QjtJQW1CRSxvQkFDVSxNQUFnQixFQUNoQixHQUFlLEVBQ2YsU0FBb0I7UUFGcEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUU1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUN4QixZQUFZLEVBQ1osVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQzNCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsRUFIeUIsQ0FHekIsRUFDRixjQUFjLENBQ2YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQTdCRCxzQkFBSSxzQ0FBYzthQVVsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBZEQsNEJBQTRCO2FBRTVCLFVBQW1CLEdBQVE7WUFDekIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFpQixNQUFNLENBQUMsUUFBUSxFQUFJLEVBQUUsY0FBTSxPQUFBLENBQzNGO2dCQUNFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDbEMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ3RDLENBQ0YsRUFMNEYsQ0FLNUYsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0UsQ0FBQzs7O09BQUE7SUFzQkQsNkJBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7U0FDdkM7SUFDSCxDQUFDOztnQkFyQmlCLFFBQVE7Z0JBQ1gsVUFBVTtnQkFDSixTQUFTOztJQWhCOUI7UUFEQyxLQUFLLEVBQUU7b0RBVVA7SUFmVSxVQUFVO1FBSHRCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztPQUNXLFVBQVUsQ0EwQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxVQUFVO0FBK0N2QjtJQUNFLGdCQUNVLE1BQWdCLEVBQ2hCLEdBQWUsRUFDZixTQUFvQjtRQUZwQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hCLFFBQVEsRUFDUixVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixVQUFVLEVBQUUsQ0FBQztnQkFDYixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDNUI7WUFDRCxrQkFBa0IsRUFBRTtnQkFDbEIsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUM1QjtTQUNGLENBQUMsRUFoQnlCLENBZ0J6QixFQUNGLGNBQWMsQ0FDZixDQUNGLENBQUM7SUFDSixDQUFDOztnQkE1QmlCLFFBQVE7Z0JBQ1gsVUFBVTtnQkFDSixTQUFTOztJQUpuQixNQUFNO1FBSGxCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1NBQ3RCLENBQUM7T0FDVyxNQUFNLENBK0JsQjtJQUFELGFBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgdG9Cb29sZWFuLFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFRoZW1lUmVmIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QXZhdGFyIH0gZnJvbSAnQGFseWxlL3VpL2F2YXRhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlMaXN0VGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBMaXN0IENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUxpc3RWYXJpYWJsZXMge1xuICBsaXN0PzogTHlMaXN0VGhlbWU7XG59XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gMjtcbmNvbnN0IERJU0FCTEVfUEFERElORyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUxpc3RWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgbGlzdCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCB7IGJlZm9yZX0gPSB0aGVtZTtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlMaXN0LtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUubGlzdFxuICAgICAgICAgICAgJiYgdGhlbWUubGlzdC5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUubGlzdC5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUubGlzdC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGxpc3QpKVxuICAgICAgICAgICAgICA6IHRoZW1lLmxpc3Qucm9vdChsaXN0KSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgbGlzdEl0ZW06ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5idXR0b24pLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e2ZvbnQtZmFtaWx5OiR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5fTtmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKDE2KX07Y29sb3I6JHt0aGVtZS50ZXh0LmRlZmF1bHR9O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MCAxNnB4O21pbi1oZWlnaHQ6NDhweDtvdmVyZmxvdzpoaWRkZW47dGV4dC1hbGlnbjpsZWZ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Ym9yZGVyLXJhZGl1czowO30ke2NsYXNzTmFtZX06OmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YWZ0ZXJgKX0ke2NsYXNzTmFtZX06OmFmdGVyIH0sJHtjbGFzc05hbWV9OjphZnRlciR7bGlzdC5vbkZvY3VzQnlLZXlib2FyZH06OmFmdGVyLCR7Y2xhc3NOYW1lfTo6YWZ0ZXIke2xpc3QuYWN0aW9uTGlzdEl0ZW19OmhvdmVyOjphZnRlcntiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4xMztib3JkZXItcmFkaXVzOmluaGVyaXQ7fWAsXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgbGlzdEl0ZW1Db250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDppbmhlcml0O2FsaWduLWl0ZW1zOmluaGVyaXQ7YWxpZ24tY29udGVudDppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O31gLFxuICAgIG9uZUxpbmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O21pbi1oZWlnaHQ6NDhweDt9YCxcbiAgICB0d29MaW5lOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MTZweDttaW4taGVpZ2h0OjY0cHg7fSR7Y2xhc3NOYW1lfSAke2xpc3QubGluZXN9e21hcmdpbi1ib3R0b206LTRweDt9YCxcbiAgICBhY3Rpb25MaXN0SXRlbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmU7fWAsXG4gICAgbGluZXM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXthbGlnbi1zZWxmOnN0cmV0Y2g7bWluLXdpZHRoOjA7d2lkdGg6MTAwJTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtkaXNwbGF5OmZsZXg7fWAsXG4gICAgbGlzdEl0ZW1XaXRoSWNvbjogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2xpc3QubGluZXN9e3BhZGRpbmctJHtiZWZvcmV9OjE2cHg7fWAsXG4gICAgdHdvTGluZVdpdGhJY29uOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MTZweDt9JHtjbGFzc05hbWV9ICR7bGlzdC5saW5lc317bWFyZ2luLWJvdHRvbTotNHB4O31gXG4gIH07XG59O1xuXG4vKiogTGlzdCBjb250YWluZXIgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QnLFxuICBleHBvcnRBczogJ2x5TGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzTmFtZV0nOiAnY2xhc3Nlcy5yb290J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdCB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUxpc3QnO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlMaXN0SXRlbU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUxpc3RJdGVtQmFzZSkpKSkpKSkpKTtcblxuLyoqIExpc3QgSXRlbSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdC1pdGVtLCBhW2x5LWxpc3QtaXRlbV0sIGJ1dHRvbltseS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtaXRlbS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUxpc3RJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtIGV4dGVuZHMgTHlMaXN0SXRlbU1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2xpc3QuY2xhc3NlcztcbiAgcmVhZG9ubHkgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgcHJpdmF0ZSBfaXNBY3Rpb25MaXN0SXRlbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5TGluZSkpIF9saW5lczogUXVlcnlMaXN0PEx5TGluZT47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUxpc3RJY29uKSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9pY29uOiBMeUxpc3RJY29uICYgeyB9O1xuICBAQ29udGVudENoaWxkKEx5QXZhdGFyLCB7IHN0YXRpYzogZmFsc2UgfSkgX2F2YXRhcjogTHlBdmF0YXI7XG4gIGdldCBfbGlzdEl0ZW1DbGFzc2VzKCkge1xuICAgIGNvbnN0IHsgbGlzdEl0ZW1Db250ZW50LCB0d29MaW5lLCBvbmVMaW5lLCBsaXN0SXRlbVdpdGhJY29uLCB0d29MaW5lV2l0aEljb24gfSA9IHRoaXMuY2xhc3NlcztcbiAgICBjb25zdCBjbGFzc2VzID0gW2xpc3RJdGVtQ29udGVudF07XG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMuX2ljb24gfHwgdGhpcy5fYXZhdGFyO1xuICAgIGlmIChoYXNJY29uKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobGlzdEl0ZW1XaXRoSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lcyAmJiB0aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChoYXNJY29uICYmIHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHR3b0xpbmVXaXRoSWNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5fbGluZXMubGVuZ3RoID4gMSA/IHR3b0xpbmUgOiBvbmVMaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQElucHV0KCdseS1saXN0LWl0ZW0nKVxuICBzZXQgaXNBY3Rpb25MaXN0SXRlbSh2YWw6IGFueSkge1xuICAgIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW0gPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNBY3Rpb25MaXN0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3Rpb25MaXN0SXRlbTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgcHJpdmF0ZSBfbGlzdDogTHlMaXN0LFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbGlzdC5jbGFzc2VzLmxpc3RJdGVtKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aW9uTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFjdGlvbkxpc3RJdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fbGluZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2QubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpc3QtaWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEljb24gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEaXNhYmxlIGV4dHJhIHBhZGRpbmcgKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQYWRkaW5nKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVBhZGRpbmcgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5SWNvblBhZGRpbmc6JHtuZXdWYWwudG9TdHJpbmcoKX1gLCAoKSA9PiAoXG4gICAgICB7XG4gICAgICAgIHBhZGRpbmdUb3A6IG5ld1ZhbCA/ICc0cHgnIDogJzhweCcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5ld1ZhbCA/ICc0cHgnIDogJzhweCdcbiAgICAgIH1cbiAgICApKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlUGFkZGluZ0NsYXNzKTtcbiAgfVxuICBnZXQgZGlzYWJsZVBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQYWRkaW5nO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGlzdEljb24nLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICBwYWRkaW5nQWZ0ZXI6ICcxNnB4J1xuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUGFkZGluZyA9IERJU0FCTEVfUEFERElORztcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWxpbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpbmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpbmUnLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdpbml0aWFsJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE2KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bnRoLWNoaWxkKG4rMiknOiB7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNClcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==