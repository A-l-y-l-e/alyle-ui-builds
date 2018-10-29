(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/badge', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.badge = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_POSITION = 'end top';
    /** @type {?} */
    var DEFAULT_BG = 'primary';
    /** @type {?} */
    var styles = function (theme) {
        return ({
            root: {
                position: 'absolute',
                width: '22px',
                height: '22px',
                borderRadius: '100%',
                lineHeight: '22px',
                textAlign: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                pointerEvents: 'none',
                zIndex: 1,
                fontSize: theme.pxToRem(12),
                fontFamily: theme.typography.fontFamily
            },
            relative: {
                position: 'relative'
            }
        });
    };
    var LyBadge = /** @class */ (function () {
        function LyBadge(_el, _theme, _renderer, _common) {
            this._el = _el;
            this._theme = _theme;
            this._renderer = _renderer;
            /**
             * Styles
             * @ignore
             */
            this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
            this._badgeElementRef = this._el.nativeElement;
            if (_common) {
                _common.setAutoContrast();
            }
        }
        Object.defineProperty(LyBadge.prototype, "content", {
            get: /**
             * @return {?}
             */ function () {
                return this._content;
            },
            /** The content for the badge */
            set: /**
             * The content for the badge
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.content) {
                    this._content = val;
                    this._createBadge();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "position", {
            get: /**
             * @return {?}
             */ function () {
                return this._position;
            },
            /** The position for the badge */
            set: /**
             * The position for the badge
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.position) {
                    this._position = val;
                    this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                        /** @type {?} */
                        var positionStyles = {};
                        /** @type {?} */
                        var dir = theme.getDirection(val.indexOf(ui.Dir.start) !== -1 ? ui.Dir.start : ui.Dir.end);
                        positionStyles[dir] = 0;
                        if (dir === 'left') {
                            positionStyles.transform = 'translateX(-50%)';
                        }
                        else {
                            positionStyles.transform = 'translateX(50%)';
                        }
                        if (val.indexOf('top') !== -1) {
                            positionStyles.top = 0;
                            positionStyles.transform += 'translateY(-50%)';
                        }
                        else if (val.indexOf('bottom') !== -1) {
                            positionStyles.bottom = 0;
                            positionStyles.transform += 'translateY(50%)';
                        }
                        return positionStyles;
                    }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "bg", {
            /** The color of the badge  */
            get: /**
             * The color of the badge
             * @return {?}
             */ function () {
                return this._bg;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.bg) {
                    this._bg = val;
                    this._bgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) {
                        return ({
                            backgroundColor: theme.colorOf(val),
                            color: theme.colorOf(val + ":contrast")
                        });
                    }, this._badgeElementRef, this._bgClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyBadge.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** Add root styles */
                this._renderer.addClass(this._badgeElementRef, this.classes.root);
                /** Set default position */
                if (!this.position) {
                    this.position = DEFAULT_POSITION;
                }
                /** Set default bg */
                if (this.content && !this.bg) {
                    this.bg = DEFAULT_BG;
                }
            };
        /**
         * @return {?}
         */
        LyBadge.prototype._createBadge = /**
         * @return {?}
         */
            function () {
                if (!this._elContainer) {
                    /** @type {?} */
                    var container = this._elContainer = this._renderer.createElement('div');
                    this._renderer.appendChild(this._el.nativeElement, container);
                    this._badgeElementRef = container;
                    /** Add position relative */
                    this._renderer.addClass(this._el.nativeElement, this.classes.relative);
                }
                this._elContainer.textContent = "" + this.content;
            };
        LyBadge.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-badge, [lyBadge]'
                    },] }
        ];
        /** @nocollapse */
        LyBadge.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: ui.LyCommon, decorators: [{ type: core.Optional }] }
            ];
        };
        LyBadge.propDecorators = {
            content: [{ type: core.Input, args: ['lyBadge',] }],
            position: [{ type: core.Input, args: ['lyBadgePosition',] }],
            bg: [{ type: core.Input, args: ['lyBadgeBg',] }]
        };
        return LyBadge;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyBadgeModule = /** @class */ (function () {
        function LyBadgeModule() {
        }
        LyBadgeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ui.LyCommonModule],
                        exports: [LyBadge, ui.LyCommonModule],
                        declarations: [LyBadge]
                    },] }
        ];
        return LyBadgeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyBadge = LyBadge;
    exports.LyBadgeModule = LyBadgeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvYmFkZ2UudHMiLCJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMeUNvbW1vbiwgTHlUaGVtZTIsIERpciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1BPU0lUSU9OID0gJ2VuZCB0b3AnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgekluZGV4OiAxLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDEyKSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlcbiAgfSxcbiAgcmVsYXRpdmU6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9XG59KTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9iZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgLyoqIFRoZSBwb3NpdGlvbiBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZVBvc2l0aW9uJylcbiAgc2V0IHBvc2l0aW9uKHZhbDogJ3N0YXJ0IHRvcCcgfCAnc3RhcnQgYm90dG9tJyB8ICdlbmQgdG9wJyB8ICdlbmQgYm90dG9tJykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICAgICAgYm90dG9tPzogbnVtYmVyXG4gICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgY29uc3QgZGlyID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbC5pbmRleE9mKERpci5zdGFydCkgIT09IC0xID8gRGlyLnN0YXJ0IDogRGlyLmVuZCk7XG4gICAgICAgIHBvc2l0aW9uU3R5bGVzW2Rpcl0gPSAwO1xuICAgICAgICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNTAlKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbC5pbmRleE9mKCd0b3AnKSAhPT0gLTEpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSArPSAndHJhbnNsYXRlWSgtNTAlKSc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsLmluZGV4T2YoJ2JvdHRvbScpICE9PSAtMSkge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtICs9ICd0cmFuc2xhdGVZKDUwJSknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvblN0eWxlcztcbiAgICAgIH0sXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgICovXG4gIEBJbnB1dCgnbHlCYWRnZUJnJylcbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9iZztcbiAgfVxuICBzZXQgYmcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnKSB7XG4gICAgICB0aGlzLl9iZyA9IHZhbDtcbiAgICAgIHRoaXMuX2JnQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UuYmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX2JnQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBfY29tbW9uOiBMeUNvbW1vblxuICApIHtcbiAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChfY29tbW9uKSB7XG4gICAgICBfY29tbW9uLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLyoqIEFkZCByb290IHN0eWxlcyAqL1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYmcgKi9cbiAgICBpZiAodGhpcy5jb250ZW50ICYmICF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCYWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IGNvbnRhaW5lcjtcblxuICAgICAgLyoqIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJlbGF0aXZlKTtcbiAgICB9XG4gICAgdGhpcy5fZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QmFkZ2UgfSBmcm9tICcuL2JhZGdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCYWRnZSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJhZGdlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkRpciIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIkx5Q29tbW9uIiwiT3B0aW9uYWwiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUdBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUMxQixJQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzs7SUFDbkMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDOztJQUU3QixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCO1FBQUssUUFBQztZQUN6QyxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFlBQVksRUFBRSxNQUFNO2dCQUNwQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVU7YUFDeEM7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLFVBQVU7YUFDckI7U0FDRjtJQW5CeUMsQ0FtQnhDLENBQUM7O1FBbUZELGlCQUNVLEtBQ0EsUUFDQSxXQUNJLE9BQWlCO1lBSHJCLFFBQUcsR0FBSCxHQUFHO1lBQ0gsV0FBTSxHQUFOLE1BQU07WUFDTixjQUFTLEdBQVQsU0FBUzs7Ozs7WUE3RW5CLGVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBZ0YxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDL0MsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzNCO1NBQ0Y7UUEzRUQsc0JBQ0ksNEJBQU87OztnQkFNWDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7OztnQkFURCxVQUNZLEdBQW9CO2dCQUM5QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjthQUNGOzs7V0FBQTtRQU1ELHNCQUNJLDZCQUFROzs7Z0JBK0JaO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2Qjs7Ozs7O2dCQWxDRCxVQUNhLEdBQTREO2dCQUN2RSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBcUIsR0FBSyxFQUFFLFVBQUMsS0FBcUI7O3dCQUMzRixJQUFNLGNBQWMsR0FNaEIsRUFBRSxDQUFDOzt3QkFDUCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUNBLE1BQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBR0EsTUFBRyxDQUFDLEtBQUssR0FBR0EsTUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNwRixjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7NEJBQ2xCLGNBQWMsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7eUJBQy9DOzZCQUFNOzRCQUNMLGNBQWMsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7eUJBQzlDO3dCQUNELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDN0IsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7NEJBQ3ZCLGNBQWMsQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUM7eUJBQ2hEOzZCQUFNLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDdkMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7NEJBQzFCLGNBQWMsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUM7eUJBQy9DO3dCQUNELE9BQU8sY0FBYyxDQUFDO3FCQUN2QixFQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUM3RDthQUVGOzs7V0FBQTtRQU1ELHNCQUNJLHVCQUFFOzs7OztnQkFETjtnQkFFRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDakI7Ozs7Z0JBQ0QsVUFBTyxHQUFXO2dCQUNoQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGlCQUFlLEdBQUssRUFBRSxVQUFDLEtBQXFCO3dCQUFLLFFBQUM7NEJBQ3JGLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs0QkFDbkMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUksR0FBRyxjQUFXLENBQUM7eUJBQ3hDO3FCQUFDLEVBQ0YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7OztXQVZBOzs7O1FBeUJELDBCQUFROzs7WUFBUjs7Z0JBR0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUdsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztpQkFDbEM7O2dCQUdELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO2lCQUN0QjthQUNGOzs7O1FBRU8sOEJBQVk7Ozs7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFOztvQkFDdEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7O29CQUdsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4RTtnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxLQUFHLElBQUksQ0FBQyxPQUFTLENBQUM7OztvQkF2SHJEQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtxQkFDaEM7Ozs7O3dCQTdCMEJDLGVBQVU7d0JBQ0ZDLFdBQVE7d0JBRE1DLGNBQVM7d0JBQ2pDQyxXQUFRLHVCQWdINUJDLGFBQVE7Ozs7OEJBckVWQyxVQUFLLFNBQUMsU0FBUzsrQkFZZkEsVUFBSyxTQUFDLGlCQUFpQjt5QkFxQ3ZCQSxVQUFLLFNBQUMsV0FBVzs7c0JBN0ZwQjs7Ozs7OztBQ0FBOzs7O29CQUtDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLEVBQUVDLGlCQUFjLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRUEsaUJBQWMsQ0FBQzt3QkFDbEMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDO3FCQUN4Qjs7NEJBVEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9