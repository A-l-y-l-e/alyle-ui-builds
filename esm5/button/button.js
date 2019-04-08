import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, NgZone, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, mixinDisabled, mixinColor, mixinBg, mixinShadowColor, mixinOutlined, mixinElevation, mixinRaised, mixinDisableRipple, mixinStyleUpdater, LyRippleService, LyFocusState, getLyThemeVariableUndefinedError } from '@alyle/ui';
import { STYLES } from './button.style';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
/** @docs-private */
var LyButtonBase = /** @class */ (function () {
    function LyButtonBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyButtonBase;
}());
export { LyButtonBase };
/** @docs-private */
export var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyButtonBase)))))))));
var LyButton = /** @class */ (function (_super) {
    tslib_1.__extends(LyButton, _super);
    function LyButton(_el, _renderer, _theme, _ngZone, _rippleService, _focusState) {
        var _this = _super.call(this, _theme, _ngZone) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._rippleService = _rippleService;
        _this._focusState = _focusState;
        /**
         * Style
         * @docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _this._rippleSensitive = false;
        _this.setAutoContrast();
        _this._triggerElement = _el;
        if (Platform.FIREFOX) {
            _this._theme.addStyle('button-ff', {
                '&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner,&::-moz-focus-inner': {
                    border: 0
                }
            }, _this._el.nativeElement, undefined, STYLE_PRIORITY);
        }
        _this._renderer.addClass(_this._el.nativeElement, _this.classes.animations);
        if (!_theme.variables.button) {
            throw getLyThemeVariableUndefinedError('button');
        }
        return _this;
    }
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        /** @docs-private */
        get: function () {
            return this._rippleSensitive;
        },
        set: function (value) {
            var newVal = this._rippleSensitive = toBoolean(value);
            this._rippleConfig.sensitive = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "size", {
        /** Button size */
        get: function () {
            return this._size;
        },
        set: function (val) {
            if (val !== this.size) {
                this._size = val;
                this._sizeClass = this._theme.addStyle("lyButton.size:" + val, function (theme) {
                    if (theme.button && theme.button.size && theme.button.size[val]) {
                        return theme.button.size[val];
                    }
                    throw new Error("Value button.size['" + val + "'] not found in ThemeVariables");
                }, this._el.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "appearance", {
        /** Button appearance */
        get: function () { return this._appearance; },
        set: function (val) {
            if (val !== this.appearance) {
                if (val === 'icon' && !this._rippleConfig.centered) {
                    this._rippleConfig.centered = true;
                }
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("lyButton.appearance:" + val, function (theme) {
                    if (!(theme.button.appearance && theme.button.appearance[val])) {
                        throw new Error("Value button.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    return theme.button.appearance[val];
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyButton.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
        var isDisabled = this.disabled;
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    };
    LyButton.prototype.ngOnInit = function () {
        var button = this._theme.variables.button;
        if (button) {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // Apply default config
            if (this.size == null && this.appearance == null) {
                this.size = button.defaultConfig.size;
            }
            else {
                if (button.defaultConfig && button.defaultConfig.appearance) {
                    if (this.appearance == null) {
                        this.appearance = button.defaultConfig.appearance;
                    }
                }
            }
        }
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    LyButton.prototype.ngAfterViewInit = function () {
        // this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        var _this = this;
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
    };
    LyButton.prototype.focus = function () {
        this._el.nativeElement.focus();
    };
    LyButton.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    };
    tslib_1.__decorate([
        ViewChild('rippleContainer'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyButton.prototype, "_rippleContainer", void 0);
    tslib_1.__decorate([
        Input('sensitive'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyButton.prototype, "rippleSensitive", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyButton.prototype, "size", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyButton.prototype, "appearance", null);
    LyButton = tslib_1.__decorate([
        Component({
            selector: 'button[ly-button], a[ly-button]',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<span [className]=\"classes.content\">\n  <ng-content></ng-content>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
            inputs: [
                'bg',
                'color',
                'raised',
                'disabled',
                'outlined',
                'elevation',
                'shadowColor',
                'disableRipple'
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyTheme2,
            NgZone,
            LyRippleService,
            LyFocusState])
    ], LyButton);
    return LyButton;
}(LyButtonMixinBase));
export { LyButton };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUdOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVIsYUFBYSxFQUNiLFVBQVUsRUFDVixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixjQUFjLEVBQ2QsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFlBQVksRUFDWixnQ0FBZ0MsRUFDakMsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLElBQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBSTFCLG9CQUFvQjtBQUNwQjtJQUNFLHNCQUNTLE1BQWdCLEVBQ2hCLE9BQWU7UUFEZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDcEIsQ0FBQztJQUNQLG1CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUNsRCxPQUFPLENBQ0gsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FDZCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFpQnpEO0lBQThCLG9DQUFpQjtJQXVFN0Msa0JBQ1ksR0FBZSxFQUNmLFNBQW9CLEVBQzlCLE1BQWdCLEVBQ2hCLE9BQWUsRUFDUixjQUErQixFQUM5QixXQUF5QjtRQU5uQyxZQVFFLGtCQUFNLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FjdkI7UUFyQlcsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFHdkIsb0JBQWMsR0FBZCxjQUFjLENBQWlCO1FBQzlCLGlCQUFXLEdBQVgsV0FBVyxDQUFjO1FBNUVuQzs7O1dBR0c7UUFDTSxhQUFPLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzdELHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQTBFL0IsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hDLGlGQUFpRixFQUFFO29CQUNqRixNQUFNLEVBQUUsQ0FBQztpQkFDVjthQUNGLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDNUIsTUFBTSxnQ0FBZ0MsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDs7SUFDSCxDQUFDO0lBNUVELHNCQUFJLHFDQUFlO1FBRm5CLG9CQUFvQjthQUVwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFDRCxVQUFvQixLQUFjO1lBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hDLENBQUM7OztPQUpBO0lBUUQsc0JBQUksMEJBQUk7UUFGUixrQkFBa0I7YUFFbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUNELFVBQVMsR0FBaUI7WUFDeEIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ3BDLG1CQUFpQixHQUFLLEVBQ3RCLFVBQUMsS0FBcUI7b0JBQ3BCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDL0QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztxQkFDaEM7b0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBc0IsR0FBRyxtQ0FBZ0MsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLEVBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNmLENBQUM7YUFDSDtRQUNILENBQUM7OztPQWpCQTtJQXFCRCxzQkFBSSxnQ0FBVTtRQUZkLHdCQUF3QjthQUV4QixjQUEyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ3JELFVBQWUsR0FBVztZQUN4QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMzQixJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2lCQUNwQztnQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUMxQyx5QkFBdUIsR0FBSyxFQUM1QixVQUFDLEtBQXFCO29CQUNwQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsTUFBTyxDQUFDLFVBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE0QixHQUFHLG1DQUFnQyxDQUFDLENBQUM7cUJBQ2xGO29CQUNELE9BQU8sS0FBSyxDQUFDLE1BQU8sQ0FBQyxVQUFXLENBQUMsR0FBRyxDQUFFLENBQUM7Z0JBQ3pDLENBQUMsRUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FuQm9EO0lBNENyRCw4QkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDVSxJQUFBLHFDQUFNLENBQTJCO1FBQ3pDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRSx1QkFBdUI7WUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxJQUFJLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7b0JBQzNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7d0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7cUJBQ25EO2lCQUNGO2FBRUY7U0FDRjtRQUNELDZCQUE2QjtRQUM3QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsa0NBQWUsR0FBZjtRQUVFLDRFQUE0RTtRQUY5RSxpQkFpQkM7UUFiQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztnQkFDekIsSUFBSSxLQUFJLENBQUMsdUJBQXVCLEtBQUssSUFBSSxFQUFFO29CQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ25GLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7aUJBQ3RDO2dCQUNELElBQUksS0FBSyxLQUFLLFVBQVUsRUFBRTtvQkFDdEIsS0FBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztvQkFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNuRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF4STZCO1FBQTdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQzswQ0FBbUIsVUFBVTtzREFBQztJQUkzRDtRQURDLEtBQUssQ0FBQyxXQUFXLENBQUM7OzttREFHbEI7SUFRRDtRQURDLEtBQUssRUFBRTs7O3dDQUdQO0lBcUJEO1FBREMsS0FBSyxFQUFFOzs7OENBQzZDO0lBbEQxQyxRQUFRO1FBZnBCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsdUtBQTBCO1lBQzFCLE1BQU0sRUFBRTtnQkFDTixJQUFJO2dCQUNKLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxhQUFhO2dCQUNiLGVBQWU7YUFDaEI7U0FDRixDQUFDO2lEQXlFaUIsVUFBVTtZQUNKLFNBQVM7WUFDdEIsUUFBUTtZQUNQLE1BQU07WUFDUSxlQUFlO1lBQ2pCLFlBQVk7T0E3RXhCLFFBQVEsQ0FzSnBCO0lBQUQsZUFBQztDQUFBLEFBdEpELENBQThCLGlCQUFpQixHQXNKOUM7U0F0SlksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkJnLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlGb2N1c1N0YXRlLFxuICBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvclxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU1RZTEVTIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgdHlwZSBMeUJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QnV0dG9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUJ1dHRvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUJ1dHRvbkJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltseS1idXR0b25dLCBhW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24uaHRtbCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBleHRlbmRzIEx5QnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3NpemU6IEx5QnV0dG9uU2l6ZTtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcuc2Vuc2l0aXZlID0gbmV3VmFsO1xuICB9XG5cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IEx5QnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsOiBMeUJ1dHRvblNpemUpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLnNpemU6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICAgIGlmICh0aGVtZS5idXR0b24gJiYgdGhlbWUuYnV0dG9uLnNpemUgJiYgdGhlbWUuYnV0dG9uLnNpemVbdmFsXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoZW1lLmJ1dHRvbi5zaXplW3ZhbF0hO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGJ1dHRvbi5zaXplWycke3ZhbH0nXSBub3QgZm91bmQgaW4gVGhlbWVWYXJpYWJsZXNgKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQnV0dG9uIGFwcGVhcmFuY2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7IH1cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIGlmICh2YWwgPT09ICdpY29uJyAmJiAhdGhpcy5fcmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZUNvbmZpZy5jZW50ZXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBpZiAoISh0aGVtZS5idXR0b24hLmFwcGVhcmFuY2UgJiYgdGhlbWUuYnV0dG9uIS5hcHBlYXJhbmNlIVt2YWxdKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBidXR0b24uYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGVtZS5idXR0b24hLmFwcGVhcmFuY2UhW3ZhbF0hO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9lbDogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIF9uZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBfZWw7XG4gICAgaWYgKFBsYXRmb3JtLkZJUkVGT1gpIHtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdidXR0b24tZmYnLCB7XG4gICAgICAgICcmOjotbW96LWZvY3VzLWlubmVyLCY6Oi1tb3otZm9jdXMtaW5uZXIsJjo6LW1vei1mb2N1cy1pbm5lciwmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgICAgIGJvcmRlcjogMFxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICAgIGlmICghX3RoZW1lLnZhcmlhYmxlcy5idXR0b24pIHtcbiAgICAgIHRocm93IGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yKCdidXR0b24nKTtcbiAgICB9XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGJ1dHRvbiB9ID0gdGhpcy5fdGhlbWUudmFyaWFibGVzO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgICAgLy8gQXBwbHkgZGVmYXVsdCBjb25maWdcbiAgICAgIGlmICh0aGlzLnNpemUgPT0gbnVsbCAmJiB0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNpemUgPSBidXR0b24uZGVmYXVsdENvbmZpZy5zaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGJ1dHRvbi5kZWZhdWx0Q29uZmlnICYmIGJ1dHRvbi5kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IGJ1dHRvbi5kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuXG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2VsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iXX0=