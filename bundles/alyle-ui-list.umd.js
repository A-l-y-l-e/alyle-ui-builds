(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui/avatar'), require('@angular/common'), require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/list', ['exports', '@alyle/ui/avatar', '@angular/common', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.list = {}),global.ly.avatar,global.ng.common,global.ng.core,global.ly.core));
}(this, (function (exports,avatar,common,core,ui) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = 2;
    /** @type {?} */
    var DISABLE_PADDING = false;
    /** @type {?} */
    var styles = function (theme) {
        return ({
            list: {
                display: 'block',
                position: 'relative',
                paddingTop: '8px',
                paddingBottom: '8px'
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
        });
    };
    /**
     * List container
     */
    var LyList = /** @class */ (function () {
        function LyList(theme) {
            this.theme = theme;
            /**
             * \@docs-private
             */
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        }
        LyList.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-list',
                        exportAs: 'lyList',
                        host: {
                            '[className]': 'classes.list'
                        }
                    },] }
        ];
        /** @nocollapse */
        LyList.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 }
            ];
        };
        return LyList;
    }());
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyListItemBase = /** @class */ (function () {
        function LyListItemBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyListItemBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyListItemMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyListItemBase)))))))));
    /**
     * List Item
     */
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
            /**
             * \@docs-private
             */
            _this.classes = _this._list.classes;
            _this._isBrowser = ui.Platform.isBrowser;
            _this.setAutoContrast();
            _this._triggerElement = _el;
            return _this;
        }
        Object.defineProperty(LyListItem.prototype, "_listItemClasses", {
            get: /**
             * @return {?}
             */ function () {
                var _a = this.classes, listItemContent = _a.listItemContent, twoLine = _a.twoLine, oneLine = _a.oneLine, listItemWithIcon = _a.listItemWithIcon, twoLineWithIcon = _a.twoLineWithIcon;
                /** @type {?} */
                var classes = [listItemContent];
                /** @type {?} */
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
            get: /**
             * @return {?}
             */ function () {
                return this._isActionListItem;
            },
            /** @docs-private */
            set: /**
             * \@docs-private
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._isActionListItem = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyListItem.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
                if (this.disableRipple == null) {
                    if (this.isActionListItem) {
                        this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                        this.disableRipple = false;
                        /** @type {?} */
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
        /**
         * @return {?}
         */
        LyListItem.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._lines.changes.subscribe(function () { return _this._cd.markForCheck(); });
            };
        /**
         * @return {?}
         */
        LyListItem.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._focusState.unlisten(this._el);
            };
        LyListItem.decorators = [
            { type: core.Component, args: [{
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
                    }] }
        ];
        /** @nocollapse */
        LyListItem.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.NgZone },
                { type: ui.LyRippleService },
                { type: ui.LyFocusState },
                { type: LyList },
                { type: core.ChangeDetectorRef }
            ];
        };
        LyListItem.propDecorators = {
            _rippleContainer: [{ type: core.ViewChild, args: ['rippleContainer',] }],
            _lines: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyLine; }),] }],
            _icon: [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyListIcon; }),] }],
            _avatar: [{ type: core.ContentChild, args: [avatar.LyAvatar,] }],
            isActionListItem: [{ type: core.Input, args: ['ly-list-item',] }]
        };
        return LyListItem;
    }(LyListItemMixinBase));
    var LyListIcon = /** @class */ (function () {
        function LyListIcon(_theme, _el, _renderer) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyListIcon', function (theme) {
                return ({
                    color: theme.text.secondary,
                    paddingAfter: '16px'
                });
            }, STYLE_PRIORITY));
        }
        Object.defineProperty(LyListIcon.prototype, "disablePadding", {
            get: /**
             * @return {?}
             */ function () {
                return this._disablePadding;
            },
            /** Disable extra padding */
            set: /**
             * Disable extra padding
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newVal = this._disablePadding = ui.toBoolean(val);
                this._disablePaddingClass = this._theme.addStyle("lyIconPadding:" + newVal.toString(), function () {
                    return ({
                        paddingTop: newVal ? '4px' : '8px',
                        paddingBottom: newVal ? '4px' : '8px'
                    });
                });
                this._renderer.addClass(this._el.nativeElement, this._disablePaddingClass);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyListIcon.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.disablePadding == null) {
                    this.disablePadding = DISABLE_PADDING;
                }
            };
        LyListIcon.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ly-list-icon]'
                    },] }
        ];
        /** @nocollapse */
        LyListIcon.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        LyListIcon.propDecorators = {
            disablePadding: [{ type: core.Input }]
        };
        return LyListIcon;
    }());
    var LyLine = /** @class */ (function () {
        function LyLine(_theme, _el, _renderer) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyLine', function (theme) {
                return ({
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
                });
            }, STYLE_PRIORITY));
        }
        LyLine.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ly-line]'
                    },] }
        ];
        /** @nocollapse */
        LyLine.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        return LyLine;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LyListModule = /** @class */ (function () {
        function LyListModule() {
        }
        LyListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [LyList, LyListItem, LyListIcon, LyLine],
                        exports: [ui.LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
                    },] }
        ];
        return LyListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LyList = LyList;
    exports.LyListItemBase = LyListItemBase;
    exports.LyListItemMixinBase = LyListItemMixinBase;
    exports.LyListItem = LyListItem;
    exports.LyListIcon = LyListIcon;
    exports.LyLine = LyLine;
    exports.LyListModule = LyListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-list.umd.js.map