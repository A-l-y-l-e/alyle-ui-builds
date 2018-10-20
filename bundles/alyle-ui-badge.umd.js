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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvYmFkZ2UudHMiLCJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdlbmQgdG9wJztcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzIycHgnLFxuICAgIGhlaWdodDogJzIycHgnLFxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIHpJbmRleDogMSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxMiksXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5XG4gIH0sXG4gIHJlbGF0aXZlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfVxufSk7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1iYWRnZSwgW2x5QmFkZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9wb3NpdGlvbjogJ3N0YXJ0IHRvcCcgfCAnc3RhcnQgYm90dG9tJyB8ICdlbmQgdG9wJyB8ICdlbmQgYm90dG9tJztcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9lbENvbnRhaW5lcjogYW55O1xuICBwcml2YXRlIF9iYWRnZUVsZW1lbnRSZWY6IGFueTtcbiAgcHJpdmF0ZSBfYmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY29udGVudCBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZScpXG4gIHNldCBjb250ZW50KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlQmFkZ2UoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIC8qKiBUaGUgcG9zaXRpb24gZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2VQb3NpdGlvbicpXG4gIHNldCBwb3NpdGlvbih2YWw6ICdzdGFydCB0b3AnIHwgJ3N0YXJ0IGJvdHRvbScgfCAnZW5kIHRvcCcgfCAnZW5kIGJvdHRvbScpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UucG9zaXRpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvblN0eWxlczoge1xuICAgICAgICAgIHRvcD86IG51bWJlclxuICAgICAgICAgIGxlZnQ/OiBudW1iZXJcbiAgICAgICAgICByaWdodD86IG51bWJlclxuICAgICAgICAgIGJvdHRvbT86IG51bWJlclxuICAgICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgICB9ID0ge307XG4gICAgICAgIGNvbnN0IGRpciA9IHRoZW1lLmdldERpcmVjdGlvbih2YWwuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgPyAnc3RhcnQnIDogJ2VuZCcpO1xuICAgICAgICBwb3NpdGlvblN0eWxlc1tkaXJdID0gMDtcbiAgICAgICAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDUwJSknO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwuaW5kZXhPZigndG9wJykgIT09IC0xKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudG9wID0gMDtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gKz0gJ3RyYW5zbGF0ZVkoLTUwJSknO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbC5pbmRleE9mKCdib3R0b20nKSAhPT0gLTEpIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy5ib3R0b20gPSAwO1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSArPSAndHJhbnNsYXRlWSg1MCUpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb25TdHlsZXM7XG4gICAgICB9LFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9wb3NpdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIC8qKiBUaGUgY29sb3Igb2YgdGhlIGJhZGdlICAqL1xuICBASW5wdXQoJ2x5QmFkZ2VCZycpXG4gIGdldCBiZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmc7XG4gIH1cbiAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZykge1xuICAgICAgdGhpcy5fYmcgPSB2YWw7XG4gICAgICB0aGlzLl9iZ0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLmJnOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZihgJHt2YWx9OmNvbnRyYXN0YClcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLl9iZ0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2JnOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgX2NvbW1vbjogTHlDb21tb25cbiAgKSB7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoX2NvbW1vbikge1xuICAgICAgX2NvbW1vbi5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8qKiBBZGQgcm9vdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9lbENvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxDb250YWluZXIgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSBjb250YWluZXI7XG5cbiAgICAgIC8qKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yZWxhdGl2ZSk7XG4gICAgfVxuICAgIHRoaXMuX2VsQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7dGhpcy5jb250ZW50fWA7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJhZGdlIH0gZnJvbSAnLi9iYWRnZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5QmFkZ2UsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCYWRnZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiTHlUaGVtZTIiLCJSZW5kZXJlcjIiLCJMeUNvbW1vbiIsIk9wdGlvbmFsIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHQSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7O0lBQ25DLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFFN0IsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQjtRQUFLLFFBQUM7WUFDekMsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsTUFBTTtnQkFDZCxZQUFZLEVBQUUsTUFBTTtnQkFDcEIsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixhQUFhLEVBQUUsTUFBTTtnQkFDckIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMzQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVO2FBQ3hDO1lBQ0QsUUFBUSxF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