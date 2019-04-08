import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input, isDevMode, } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, getLyThemeVariableUndefinedError } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'fixed';
var DEFAULT_BG = 'background:tertiary';
var styles = function (theme) {
    var _a;
    return ({
        root: (_a = {
                padding: '0 16px',
                display: 'flex',
                boxSizing: 'border-box',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                height: '64px',
                zIndex: theme.zIndex.toolbar
            },
            _a[theme.getBreakpoint('XSmall')] = {
                height: '56px'
            },
            _a['&'] = theme.toolbar ? theme.toolbar.root : null,
            _a),
        dense: {
            height: '56px'
        }
    });
};
var ɵ0 = styles;
/** @docs-private */
var LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
export { LyToolbarBase };
/** @docs-private */
export var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
var LyToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(LyToolbar, _super);
    function LyToolbar(_renderer, _el, theme) {
        var _this = _super.call(this, theme) || this;
        _this._renderer = _renderer;
        _this._el = _el;
        _this.theme = theme;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.setAutoContrast();
        _renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "dense", {
        get: function () {
            return this._dense;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (isDevMode() && newVal !== this.dense) {
                console.warn(this._el.nativeElement, "LyToolbar.appearance: `dense` is deprecated, instead use `appearance=\"dense\"`");
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.dense);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.dense);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("LyToolbar.appearance:" + val, function (theme) {
                    if (!theme.toolbar) {
                        throw getLyThemeVariableUndefinedError('toolbar');
                    }
                    if (!(theme.toolbar.appearance && theme.toolbar.appearance[val])) {
                        throw new Error("Value toolbar.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    return theme.toolbar.appearance[val];
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyToolbar.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyToolbar.prototype.ngOnInit = function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyToolbar.prototype, "position", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyToolbar.prototype, "dense", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyToolbar.prototype, "appearance", null);
    LyToolbar = tslib_1.__decorate([
        Directive({
            selector: 'ly-toolbar',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor'
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyToolbar);
    return LyToolbar;
}(LyToolbarMixinBase));
export { LyToolbar };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBRWpCLFNBQVMsRUFDVCxnQ0FBZ0MsRUFDakMsTUFBTSxXQUFXLENBQUM7QUFFbkIsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcscUJBQXFCLENBQUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQjs7SUFBSyxPQUFBLENBQUM7UUFDekMsSUFBSTtnQkFDRixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLEtBQUssRUFBRSxNQUFNO2dCQUNiLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87O1lBQzVCLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQkFDL0IsTUFBTSxFQUFFLE1BQU07YUFDZjtZQUNELE9BQUcsR0FBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtlQUMvQztRQUNE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QVU7Z0JBQ1YsV0FBVztnQkFDWCxhQUFhO2FBQ2Q7U0FDRixDQUFDO2lEQTZEcUIsU0FBUztZQUNmLFVBQVU7WUFDUixRQUFRO09BOURkLFNBQVMsQ0FrRnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWxGRCxDQUErQixrQkFBa0IsR0FrRmhEO1NBbEZZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBpc0Rldk1vZGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yXG59IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2ZpeGVkJztcbmNvbnN0IERFRkFVTFRfQkcgPSAnYmFja2dyb3VuZDp0ZXJ0aWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC50b29sYmFyLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIGhlaWdodDogJzU2cHgnXG4gICAgfSxcbiAgICAnJic6IHRoZW1lLnRvb2xiYXIgPyB0aGVtZS50b29sYmFyLnJvb3QgOiBudWxsXG4gIH0sXG4gIGRlbnNlOiB7XG4gICAgaGVpZ2h0OiAnNTZweCdcbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhdGljJyB8ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreScgfCAncmVsYXRpdmUnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VG9vbGJhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VG9vbGJhck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgICAgbWl4aW5Db2xvcihcbiAgICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlUb29sYmFyQmFzZSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciBleHRlbmRzIEx5VG9vbGJhck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb247XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGVuc2U6IGJvb2xlYW47XG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbih2YWw6IHBvc2l0aW9uKSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5VG9vbGJhci5wb3NpdGlvbjoke3ZhbH1gLCBgcG9zaXRpb246JHt2YWx9YCwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBwb3NpdGlvbigpOiBwb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlbnNlKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBuZXdWYWwgIT09IHRoaXMuZGVuc2UpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBgTHlUb29sYmFyLmFwcGVhcmFuY2U6IFxcYGRlbnNlXFxgIGlzIGRlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIFxcYGFwcGVhcmFuY2U9XCJkZW5zZVwiXFxgYCk7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kZW5zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGVuc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGVuc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbnNlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYEx5VG9vbGJhci5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXRoZW1lLnRvb2xiYXIpIHtcbiAgICAgICAgICAgIHRocm93IGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yKCd0b29sYmFyJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKHRoZW1lLnRvb2xiYXIuYXBwZWFyYW5jZSAmJiB0aGVtZS50b29sYmFyLmFwcGVhcmFuY2UhW3ZhbF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHRvb2xiYXIuYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGVtZS50b29sYmFyLmFwcGVhcmFuY2UgIVt2YWxdITtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxufVxuIl19