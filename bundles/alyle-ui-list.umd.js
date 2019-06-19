(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/avatar'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/list', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/avatar', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.list = {}), global.ng.core, global.ly.core, global.ly.avatar, global.ng.common));
}(this, function (exports, core, ui, avatar, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var STYLE_PRIORITY = 2;
    var DISABLE_PADDING = false;
    var STYLES = function (theme) { return ({
        $priority: STYLE_PRIORITY,
        root: {
            display: 'block',
            position: 'relative',
            paddingTop: '8px',
            paddingBottom: '8px',
            '&': theme.list ? theme.list.root : null
        },
        listItem: __assign({}, ui.LY_COMMON_STYLES.button, { fontFamily: theme.typography.fontFamily, fontSize: theme.pxToRem(16), color: theme.text.default, display: 'flex', width: '100%', position: 'relative', padding: '0 16px', minHeight: '48px', overflow: 'hidden', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 0, '&::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &{actionListItem}:hover::after': {
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
        LyList = __decorate([
            core.Directive({
                selector: 'ly-list',
                exportAs: 'lyList',
                host: {
                    '[className]': 'classes.root'
                }
            }),
            __metadata("design:paramtypes", [ui.LyTheme2])
        ], LyList);
        return LyList;
    }());
    /** @docs-private */
    var LyListItemBase = /** @class */ (function () {
        function LyListItemBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyListItemBase;
    }());
    /** @docs-private */
    var LyListItemMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyListItemBase)))))))));
    /** List Item */
    var LyListItem = /** @class */ (function (_super) {
        __extends(LyListItem, _super);
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
            _this._isBrowser = ui.Platform.isBrowser;
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
                this._isActionListItem = ui.toBoolean(val);
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
        __decorate([
            core.ViewChild('rippleContainer', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyListItem.prototype, "_rippleContainer", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyLine; })),
            __metadata("design:type", core.QueryList)
        ], LyListItem.prototype, "_lines", void 0);
        __decorate([
            core.ContentChild(core.forwardRef(function () { return LyListIcon; }), { static: false }),
            __metadata("design:type", Object)
        ], LyListItem.prototype, "_icon", void 0);
        __decorate([
            core.ContentChild(avatar.LyAvatar, { static: false }),
            __metadata("design:type", avatar.LyAvatar)
        ], LyListItem.prototype, "_avatar", void 0);
        __decorate([
            core.Input('ly-list-item'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyListItem.prototype, "isActionListItem", null);
        LyListItem = __decorate([
            core.Component({
                selector: 'ly-list-item, a[ly-list-item], button[ly-list-item]',
                template: "<span [ngClass]=\"_listItemClasses\">\n  <ng-content></ng-content>\n  <div *ngIf=\"_lines?.length\" [className]=\"classes.lines\">\n    <ng-content select=\"[ly-line]\"></ng-content>\n  </div>\n</span>\n<div *ngIf=\"_isBrowser\" #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
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
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                ui.LyTheme2,
                core.NgZone,
                ui.LyRippleService,
                ui.LyFocusState,
                LyList,
                core.ChangeDetectorRef])
        ], LyListItem);
        return LyListItem;
    }(LyListItemMixinBase));
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
                var newVal = this._disablePadding = ui.toBoolean(val);
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
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyListIcon.prototype, "disablePadding", null);
        LyListIcon = __decorate([
            core.Directive({
                selector: '[ly-list-icon]'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef,
                core.Renderer2])
        ], LyListIcon);
        return LyListIcon;
    }());
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
        LyLine = __decorate([
            core.Directive({
                selector: '[ly-line]'
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.ElementRef,
                core.Renderer2])
        ], LyLine);
        return LyLine;
    }());

    var LyListModule = /** @class */ (function () {
        function LyListModule() {
        }
        LyListModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [LyList, LyListItem, LyListIcon, LyLine],
                exports: [ui.LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
            })
        ], LyListModule);
        return LyListModule;
    }());

    exports.LyLine = LyLine;
    exports.LyList = LyList;
    exports.LyListIcon = LyListIcon;
    exports.LyListItem = LyListItem;
    exports.LyListItemBase = LyListItemBase;
    exports.LyListItemMixinBase = LyListItemMixinBase;
    exports.LyListModule = LyListModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-list.umd.js.map
