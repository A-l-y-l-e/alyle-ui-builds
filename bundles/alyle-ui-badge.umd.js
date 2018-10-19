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
            this.classes = this._theme.addStyleSheet(styles, 'lyBadge', STYLE_PRIORITY);
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
                        var dir = theme.getDirection(val.indexOf('start') !== -1 ? 'start' : 'end');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvYmFkZ2UudHMiLCJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdlbmQgdG9wJztcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzIycHgnLFxuICAgIGhlaWdodDogJzIycHgnLFxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIHpJbmRleDogMSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxMiksXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5XG4gIH0sXG4gIHJlbGF0aXZlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfVxufSk7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1iYWRnZSwgW2x5QmFkZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUJhZGdlJywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9iZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgLyoqIFRoZSBwb3NpdGlvbiBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZVBvc2l0aW9uJylcbiAgc2V0IHBvc2l0aW9uKHZhbDogJ3N0YXJ0IHRvcCcgfCAnc3RhcnQgYm90dG9tJyB8ICdlbmQgdG9wJyB8ICdlbmQgYm90dG9tJykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgbGVmdD86IG51bWJlclxuICAgICAgICAgIHJpZ2h0PzogbnVtYmVyXG4gICAgICAgICAgYm90dG9tPzogbnVtYmVyXG4gICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nXG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgY29uc3QgZGlyID0gdGhlbWUuZ2V0RGlyZWN0aW9uKHZhbC5pbmRleE9mKCdzdGFydCcpICE9PSAtMSA/ICdzdGFydCcgOiAnZW5kJyk7XG4gICAgICAgIHBvc2l0aW9uU3R5bGVzW2Rpcl0gPSAwO1xuICAgICAgICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtNTAlKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbC5pbmRleE9mKCd0b3AnKSAhPT0gLTEpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSArPSAndHJhbnNsYXRlWSgtNTAlKSc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsLmluZGV4T2YoJ2JvdHRvbScpICE9PSAtMSkge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtICs9ICd0cmFuc2xhdGVZKDUwJSknO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvblN0eWxlcztcbiAgICAgIH0sXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgICovXG4gIEBJbnB1dCgnbHlCYWRnZUJnJylcbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9iZztcbiAgfVxuICBzZXQgYmcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnKSB7XG4gICAgICB0aGlzLl9iZyA9IHZhbDtcbiAgICAgIHRoaXMuX2JnQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UuYmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX2JnQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBfY29tbW9uOiBMeUNvbW1vblxuICApIHtcbiAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChfY29tbW9uKSB7XG4gICAgICBfY29tbW9uLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLyoqIEFkZCByb290IHN0eWxlcyAqL1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYmcgKi9cbiAgICBpZiAodGhpcy5jb250ZW50ICYmICF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCYWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IGNvbnRhaW5lcjtcblxuICAgICAgLyoqIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJlbGF0aXZlKTtcbiAgICB9XG4gICAgdGhpcy5fZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QmFkZ2UgfSBmcm9tICcuL2JhZGdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCYWRnZSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJhZGdlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIkx5Q29tbW9uIiwiT3B0aW9uYWwiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUdBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUMxQixJQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQzs7SUFDbkMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDOztJQUU3QixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCO1FBQUssUUFBQztZQUN6QyxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFlBQVksRUFBRSxNQUFNO2dCQUNwQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVU7YUFDeEM7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLFVBQVU7YUFDckI7U0FDRjtJQW5CeUMsQ0FtQnhDLENBQUM7O1FBbUZELGlCQUNVLEtBQ0EsUUFDQSxXQUNJLE9BQWlCO1lBSHJCLFFBQUcsR0FBSCxHQUFHO1lBQ0gsV0FBTSxHQUFOLE1BQU07WUFDTixjQUFTLEdBQVQsU0FBUzs7Ozs7WUE3RW5CLGVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQWdGckUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQy9DLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMzQjtTQUNGO1FBM0VELHNCQUNJLDRCQUFPOzs7Z0JBTVg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7Ozs7Z0JBVEQsVUFDWSxHQUFvQjtnQkFDOUIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7YUFDRjs7O1dBQUE7UUFNRCxzQkFDSSw2QkFBUTs7O2dCQStCWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7Ozs7OztnQkFsQ0QsVUFDYSxHQUE0RDtnQkFDdkUsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXFCLEdBQUssRUFBRSxVQUFDLEtBQXFCOzt3QkFDM0YsSUFBTSxjQUFjLEdBTWhCLEVBQUUsQ0FBQzs7d0JBQ1AsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQzt3QkFDOUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFOzRCQUNsQixjQUFjLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO3lCQUMvQzs2QkFBTTs0QkFDTCxjQUFjLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO3lCQUM5Qzt3QkFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQzdCLGNBQWMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDOzRCQUN2QixjQUFjLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDO3lCQUNoRDs2QkFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQ3ZDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUMxQixjQUFjLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDO3lCQUMvQzt3QkFDRCxPQUFPLGNBQWMsQ0FBQztxQkFDdkIsRUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztpQkFDN0Q7YUFFRjs7O1dBQUE7UUFNRCxzQkFDSSx1QkFBRTs7Ozs7Z0JBRE47Z0JBRUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2pCOzs7O2dCQUNELFVBQU8sR0FBVztnQkFDaEIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBZSxHQUFLLEVBQUUsVUFBQyxLQUFxQjt3QkFBSyxRQUFDOzRCQUNyRixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7NEJBQ25DLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFJLEdBQUcsY0FBVyxDQUFDO3lCQUN4QztxQkFBQyxFQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2lCQUN2RDthQUNGOzs7V0FWQTs7OztRQXlCRCwwQkFBUTs7O1lBQVI7O2dCQUdFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFHbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7aUJBQ2xDOztnQkFHRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztpQkFDdEI7YUFDRjs7OztRQUVPLDhCQUFZOzs7O2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTs7b0JBQ3RCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDOztvQkFHbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEU7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsS0FBRyxJQUFJLENBQUMsT0FBUyxDQUFDOzs7b0JBdkhyREEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7cUJBQ2hDOzs7Ozt3QkE3QjBCQyxlQUFVO3dCQUNGQyxXQUFRO3dCQURNQyxjQUFTO3dCQUNqQ0MsV0FBUSx1QkFnSDVCQyxhQUFROzs7OzhCQXJFVkMsVUFBSyxTQUFDLFNBQVM7K0JBWWZBLFVBQUssU0FBQyxpQkFBaUI7eUJBcUN2QkEsVUFBSyxTQUFDLFdBQVc7O3NCQTdGcEI7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxFQUFFQyxpQkFBYyxDQUFDO3dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUVBLGlCQUFjLENBQUM7d0JBQ2xDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztxQkFDeEI7OzRCQVREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==