import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, Renderer2, Component, ViewChild, forwardRef, QueryList, ContentChildren, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyRippleService, LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, Platform } from '@alyle/ui';
import { LyAvatar } from '@alyle/ui/avatar';
const STYLE_PRIORITY = 2;
const DISABLE_PADDING = false;
export const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'block',
        position: 'relative',
        paddingTop: '8px',
        paddingBottom: '8px',
        '&': theme.list ? theme.list.root : null
    },
    listItem: Object.assign({}, LY_COMMON_STYLES.button, { fontFamily: theme.typography.fontFamily, fontSize: theme.pxToRem(16), color: theme.text.default, display: 'flex', width: '100%', position: 'relative', padding: '0 16px', minHeight: '48px', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 0, '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
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
});
/** List container */
let LyList = class LyList {
    constructor(theme) {
        this.theme = theme;
        /** @docs-private */
        this.classes = this.theme.addStyleSheet(STYLES);
    }
};
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
tslib_1.__decorate([
    ViewChild('rippleContainer', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], LyListItem.prototype, "_rippleContainer", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyLine)),
    tslib_1.__metadata("design:type", QueryList)
], LyListItem.prototype, "_lines", void 0);
tslib_1.__decorate([
    ContentChild(forwardRef(() => LyListIcon), { static: false }),
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
LyLine = tslib_1.__decorate([
    Directive({
        selector: '[ly-line]'
    }),
    tslib_1.__metadata("design:paramtypes", [LyTheme2,
        ElementRef,
        Renderer2])
], LyLine);
export { LyLine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9saXN0LyIsInNvdXJjZXMiOlsibGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBRVAsTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxTQUFTLEVBQUUsY0FBYztJQUN6QixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVLEVBQUUsS0FBSztRQUNqQixhQUFhLEVBQUUsS0FBSztRQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7S0FDekM7SUFDRCxRQUFRLG9CQUNILGdCQUFnQixDQUFDLE1BQU0sSUFDMUIsVUFBVSxF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bGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgdG9Cb29sZWFuLFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlBdmF0YXIgfSBmcm9tICdAYWx5bGUvdWkvYXZhdGFyJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAyO1xuY29uc3QgRElTQUJMRV9QQURESU5HID0gZmFsc2U7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgJyYnOiB0aGVtZS5saXN0ID8gdGhlbWUubGlzdC5yb290IDogbnVsbFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuYnV0dG9uLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNiksXG4gICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICcmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9OjphZnRlciwgJnthY3Rpb25MaXN0SXRlbX06aG92ZXI6OmFmdGVyJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgIH1cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gIGxpc3RJdGVtQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH0sXG4gIG9uZUxpbmU6IHtcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICBtaW5IZWlnaHQ6ICc0OHB4J1xuICB9LFxuICB0d29MaW5lOiB7XG4gICAgcGFkZGluZ1RvcDogJzE2cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxNnB4JyxcbiAgICBtaW5IZWlnaHQ6ICc2NHB4JyxcbiAgICAne2xpbmVzfSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJy00cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25MaXN0SXRlbToge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9LFxuICBsaW5lczoge1xuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICBsaXN0SXRlbVdpdGhJY29uOiB7XG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBwYWRkaW5nQmVmb3JlOiAnMTZweCdcbiAgICB9XG4gIH0sXG4gIHR3b0xpbmVXaXRoSWNvbjoge1xuICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTZweCcsXG4gICAgJ3tsaW5lc30nOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNHB4J1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBMaXN0IGNvbnRhaW5lciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGlzdCcsXG4gIGV4cG9ydEFzOiAnbHlMaXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NOYW1lXSc6ICdjbGFzc2VzLnJvb3QnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5TGlzdEl0ZW1CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5TGlzdEl0ZW1NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlMaXN0SXRlbUJhc2UpKSkpKSkpKSk7XG5cbi8qKiBMaXN0IEl0ZW0gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWxpc3QtaXRlbSwgYVtseS1saXN0LWl0ZW1dLCBidXR0b25bbHktbGlzdC1pdGVtXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIGV4cG9ydEFzOiAnbHlMaXN0SXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0SXRlbSBleHRlbmRzIEx5TGlzdEl0ZW1NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9saXN0LmNsYXNzZXM7XG4gIHJlYWRvbmx5IF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIHByaXZhdGUgX2lzQWN0aW9uTGlzdEl0ZW06IGJvb2xlYW47XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeUxpbmUpKSBfbGluZXM6IFF1ZXJ5TGlzdDxMeUxpbmU+O1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlMaXN0SWNvbiksIHsgc3RhdGljOiBmYWxzZSB9KSBfaWNvbjogTHlMaXN0SWNvbiAmIHsgfTtcbiAgQENvbnRlbnRDaGlsZChMeUF2YXRhciwgeyBzdGF0aWM6IGZhbHNlIH0pIF9hdmF0YXI6IEx5QXZhdGFyO1xuICBnZXQgX2xpc3RJdGVtQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IGxpc3RJdGVtQ29udGVudCwgdHdvTGluZSwgb25lTGluZSwgbGlzdEl0ZW1XaXRoSWNvbiwgdHdvTGluZVdpdGhJY29uIH0gPSB0aGlzLmNsYXNzZXM7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtsaXN0SXRlbUNvbnRlbnRdO1xuICAgIGNvbnN0IGhhc0ljb24gPSB0aGlzLl9pY29uIHx8IHRoaXMuX2F2YXRhcjtcbiAgICBpZiAoaGFzSWNvbikge1xuICAgICAgY2xhc3Nlcy5wdXNoKGxpc3RJdGVtV2l0aEljb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZXMgJiYgdGhpcy5fbGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoaGFzSWNvbiAmJiB0aGlzLl9saW5lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0d29MaW5lV2l0aEljb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuX2xpbmVzLmxlbmd0aCA+IDEgPyB0d29MaW5lIDogb25lTGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBJbnB1dCgnbHktbGlzdC1pdGVtJylcbiAgc2V0IGlzQWN0aW9uTGlzdEl0ZW0odmFsOiBhbnkpIHtcbiAgICB0aGlzLl9pc0FjdGlvbkxpc3RJdGVtID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzQWN0aW9uTGlzdEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aW9uTGlzdEl0ZW07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX2xpc3Q6IEx5TGlzdCxcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2xpc3QuY2xhc3Nlcy5saXN0SXRlbSk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGlvbkxpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hY3Rpb25MaXN0SXRlbSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5fZWwpO1xuICAgICAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2xpbmVzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1saXN0LWljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxpc3RJY29uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZVBhZGRpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVQYWRkaW5nQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGlzYWJsZSBleHRyYSBwYWRkaW5nICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGFkZGluZyh2YWw6IGFueSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVQYWRkaW5nID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fZGlzYWJsZVBhZGRpbmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseUljb25QYWRkaW5nOiR7bmV3VmFsLnRvU3RyaW5nKCl9YCwgKCkgPT4gKFxuICAgICAge1xuICAgICAgICBwYWRkaW5nVG9wOiBuZXdWYWwgPyAnNHB4JyA6ICc4cHgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBuZXdWYWwgPyAnNHB4JyA6ICc4cHgnXG4gICAgICB9XG4gICAgKSk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZVBhZGRpbmdDbGFzcyk7XG4gIH1cbiAgZ2V0IGRpc2FibGVQYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGFkZGluZztcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseUxpc3RJY29uJyxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5zZWNvbmRhcnksXG4gICAgICAgICAgcGFkZGluZ0FmdGVyOiAnMTZweCdcbiAgICAgICAgfSksXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQYWRkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVBhZGRpbmcgPSBESVNBQkxFX1BBRERJTkc7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1saW5lXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlMaW5lIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlMaW5lJyxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgdGV4dEFsaWduOiAnaW5pdGlhbCcsXG4gICAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxNilcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOm50aC1jaGlsZChuKzIpJzoge1xuICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=