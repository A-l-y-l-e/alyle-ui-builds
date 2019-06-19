import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
var STYLE_PRIORITY = 2;
var DISABLE_PADDING = false;
export var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px',
        '&': theme.list ? theme.list.root : null
    },
    listItem: tslib_1.__assign({}, LY_COMMON_STYLES.button, { fontFamily: theme.typography.fontFamily, fontSize: theme.pxToRem(16), color: theme.text.default, display: 'flex', width: '100%', position: 'relative', padding: '0 16px', minHeight: '48px', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 0, '&::after': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
            background: 'currentColor',
            opacity: .13,
            borderRadius: 'inherit'
        } }),
    onFocusByKeyboard: null,
    listItemContent: {
        display: 'flex',
        justifyContent: 'inherit',
        alignItems: 'inherit',
        alignContent: 'inherit',
        fontSize: 'inherit',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
    },
    oneLine: {
        paddingTop: '8px',
        paddingBottom: '8px',
        minHeight: '48px'
    },
    twoLine: {
        paddingTop: '16px',
        paddingBottom: '16px',
        minHeight: '64px',
        '{lines}': {
            marginBottom: '-4px'
        }
    },
    actionListItem: {
        cursor: 'pointer',
        userSelect: 'none'
    },
    lines: {
        alignSelf: 'stretch',
        minWidth: 0,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex'
    },
    listItemWithIcon: {
        '{lines}': {
            paddingBefore: '16px'
        }
    },
    twoLineWithIcon: {
        paddingTop: '16px',
        paddingBottom: '16px',
        '{lines}': {
            marginBottom: '-4px'
        }
    }
}); };
/** List container */
var LyList = /** @class */ (function () {
    function LyList(theme) {
        this.theme = theme;
        /** @docs-private */
        this.classes = this.theme.addStyleSheet(STYLES);
    }
    LyList = tslib_1.__decorate([
        Directive({
            selector: 'ly-list',
            exportAs: 'lyList',
            host: {
                '[className]': 'classes.root'
            }
        }),
        tslib_1.__metadata("design:paramtypes", [LyTheme2])
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
    tslib_1.__decorate([
        ViewChild('rippleContainer', { static: false }),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyListItem.prototype, "_rippleContainer", void 0);
    tslib_1.__decorate([
        ContentChildren(forwardRef(function () { return LyLine; })),
        tslib_1.__metadata("design:type", QueryList)
    ], LyListItem.prototype, "_lines", void 0);
    tslib_1.__decorate([
        ContentChild(forwardRef(function () { return LyListIcon; }), { static: false }),
        tslib_1.__metadata("design:type", Object)
    ], LyListItem.prototype, "_icon", void 0);
    tslib_1.__decorate([
        ContentChild(LyAvatar, { static: false }),
        tslib_1.__metadata("design:type", LyAvatar)
    ], LyListItem.prototype, "_avatar", void 0);
    tslib_1.__decorate([
        Input('ly-list-item'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
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
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyTheme2,
            NgZone,
            LyRippleService,
            LyFocusState,
            LyList,
            ChangeDetectorRef])
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LyListIcon.prototype, "disablePadding", null);
    LyListIcon = tslib_1.__decorate([
        Directive({
            selector: '[ly-list-icon]'
        }),
        tslib_1.__metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2])
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
    LyLine = tslib_1.__decorate([
        Directive({
            selector: '[ly-line]'
        }),
        tslib_1.__metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2])
    ], LyLine);
    return LyLine;
}());
export { LyLine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBRVAsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDaEQsU0FBUyxFQUFFLGNBQWM7SUFDekIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3pDO0lBQ0QsUUFBUSx1QkFDSCxnQkFBZ0IsQ0FBQyxNQUFNLElBQzFCLFVBQVUsRUFBRSxL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bkIsTUFBTSxDQStCbEI7SUFBRCxhQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EvQlksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBmb3J3YXJkUmVmLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QXZhdGFyIH0gZnJvbSAnQGFseWxlL3VpL2F2YXRhcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gMjtcbmNvbnN0IERJU0FCTEVfUEFERElORyA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgICcmJzogdGhlbWUubGlzdCA/IHRoZW1lLmxpc3Qucm9vdCA6IG51bGxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmJ1dHRvbixcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpLFxuICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsICZ7YWN0aW9uTGlzdEl0ZW19OmhvdmVyOjphZnRlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICBsaXN0SXRlbUNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBvbmVMaW5lOiB7XG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCdcbiAgfSxcbiAgdHdvTGluZToge1xuICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNjRweCcsXG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNHB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uTGlzdEl0ZW06IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfSxcbiAgbGluZXM6IHtcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBtaW5XaWR0aDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgbGlzdEl0ZW1XaXRoSWNvbjoge1xuICAgICd7bGluZXN9Jzoge1xuICAgICAgcGFkZGluZ0JlZm9yZTogJzE2cHgnXG4gICAgfVxuICB9LFxuICB0d29MaW5lV2l0aEljb246IHtcbiAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzE2cHgnLFxuICAgICd7bGluZXN9Jzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnLTRweCdcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiogTGlzdCBjb250YWluZXIgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QnLFxuICBleHBvcnRBczogJ2x5TGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzTmFtZV0nOiAnY2xhc3Nlcy5yb290J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdCB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUxpc3RJdGVtQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUxpc3RJdGVtTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5TGlzdEl0ZW1CYXNlKSkpKSkpKSkpO1xuXG4vKiogTGlzdCBJdGVtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1saXN0LWl0ZW0sIGFbbHktbGlzdC1pdGVtXSwgYnV0dG9uW2x5LWxpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1pdGVtLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBleHBvcnRBczogJ2x5TGlzdEl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGlzdEl0ZW0gZXh0ZW5kcyBMeUxpc3RJdGVtTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fbGlzdC5jbGFzc2VzO1xuICByZWFkb25seSBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBwcml2YXRlIF9pc0FjdGlvbkxpc3RJdGVtOiBib29sZWFuO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlMaW5lKSkgX2xpbmVzOiBRdWVyeUxpc3Q8THlMaW5lPjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5TGlzdEljb24pLCB7IHN0YXRpYzogZmFsc2UgfSkgX2ljb246IEx5TGlzdEljb24gJiB7IH07XG4gIEBDb250ZW50Q2hpbGQoTHlBdmF0YXIsIHsgc3RhdGljOiBmYWxzZSB9KSBfYXZhdGFyOiBMeUF2YXRhcjtcbiAgZ2V0IF9saXN0SXRlbUNsYXNzZXMoKSB7XG4gICAgY29uc3QgeyBsaXN0SXRlbUNvbnRlbnQsIHR3b0xpbmUsIG9uZUxpbmUsIGxpc3RJdGVtV2l0aEljb24sIHR3b0xpbmVXaXRoSWNvbiB9ID0gdGhpcy5jbGFzc2VzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbbGlzdEl0ZW1Db250ZW50XTtcbiAgICBjb25zdCBoYXNJY29uID0gdGhpcy5faWNvbiB8fCB0aGlzLl9hdmF0YXI7XG4gICAgaWYgKGhhc0ljb24pIHtcbiAgICAgIGNsYXNzZXMucHVzaChsaXN0SXRlbVdpdGhJY29uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmVzICYmIHRoaXMuX2xpbmVzLmxlbmd0aCkge1xuICAgICAgaWYgKGhhc0ljb24gJiYgdGhpcy5fbGluZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2godHdvTGluZVdpdGhJY29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLl9saW5lcy5sZW5ndGggPiAxID8gdHdvTGluZSA6IG9uZUxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoJ2x5LWxpc3QtaXRlbScpXG4gIHNldCBpc0FjdGlvbkxpc3RJdGVtKHZhbDogYW55KSB7XG4gICAgdGhpcy5faXNBY3Rpb25MaXN0SXRlbSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc0FjdGlvbkxpc3RJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9saXN0OiBMeUxpc3QsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9saXN0LmNsYXNzZXMubGlzdEl0ZW0pO1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuaXNBY3Rpb25MaXN0SXRlbSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYWN0aW9uTGlzdEl0ZW0pO1xuICAgICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2VsKTtcbiAgICAgICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9saW5lcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGlzdC1pY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SWNvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlUGFkZGluZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIERpc2FibGUgZXh0cmEgcGFkZGluZyAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBhZGRpbmcodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUGFkZGluZyA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlJY29uUGFkZGluZzoke25ld1ZhbC50b1N0cmluZygpfWAsICgpID0+IChcbiAgICAgIHtcbiAgICAgICAgcGFkZGluZ1RvcDogbmV3VmFsID8gJzRweCcgOiAnOHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogbmV3VmFsID8gJzRweCcgOiAnOHB4J1xuICAgICAgfVxuICAgICkpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVQYWRkaW5nQ2xhc3MpO1xuICB9XG4gIGdldCBkaXNhYmxlUGFkZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBhZGRpbmc7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaXN0SWNvbicsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgICAgIHBhZGRpbmdBZnRlcjogJzE2cHgnXG4gICAgICAgIH0pLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGFkZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVQYWRkaW5nID0gRElTQUJMRV9QQURESU5HO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbGluZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TGluZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5TGluZScsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2luaXRpYWwnLFxuICAgICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpudGgtY2hpbGQobisyKSc6IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19