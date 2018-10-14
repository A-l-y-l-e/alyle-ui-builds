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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYmFkZ2UudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvYmFkZ2UudHMiLCJuZzovL0BhbHlsZS91aS9iYWRnZS9iYWRnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdlbmQgdG9wJztcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzIycHgnLFxuICAgIGhlaWdodDogJzIycHgnLFxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIHpJbmRleDogMSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSgxMiksXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5XG4gIH0sXG4gIHJlbGF0aXZlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfVxufSk7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1iYWRnZSwgW2x5QmFkZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlCYWRnZScsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9wb3NpdGlvbjogJ3N0YXJ0IHRvcCcgfCAnc3RhcnQgYm90dG9tJyB8ICdlbmQgdG9wJyB8ICdlbmQgYm90dG9tJztcbiAgcHJpdmF0ZSBfcG9zaXRpb25DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9lbENvbnRhaW5lcjogYW55O1xuICBwcml2YXRlIF9iYWRnZUVsZW1lbnRSZWY6IGFueTtcbiAgcHJpdmF0ZSBfYmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY29udGVudCBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZScpXG4gIHNldCBjb250ZW50KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlQmFkZ2UoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICAvKiogVGhlIHBvc2l0aW9uIGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlUG9zaXRpb24nKVxuICBzZXQgcG9zaXRpb24odmFsOiAnc3RhcnQgdG9wJyB8ICdzdGFydCBib3R0b20nIHwgJ2VuZCB0b3AnIHwgJ2VuZCBib3R0b20nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHlsZXM6IHtcbiAgICAgICAgICB0b3A/OiBudW1iZXJcbiAgICAgICAgICBsZWZ0PzogbnVtYmVyXG4gICAgICAgICAgcmlnaHQ/OiBudW1iZXJcbiAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBjb25zdCBkaXIgPSB0aGVtZS5nZXREaXJlY3Rpb24odmFsLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xID8gJ3N0YXJ0JyA6ICdlbmQnKTtcbiAgICAgICAgcG9zaXRpb25TdHlsZXNbZGlyXSA9IDA7XG4gICAgICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCg1MCUpJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsLmluZGV4T2YoJ3RvcCcpICE9PSAtMSkge1xuICAgICAgICAgIHBvc2l0aW9uU3R5bGVzLnRvcCA9IDA7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMudHJhbnNmb3JtICs9ICd0cmFuc2xhdGVZKC01MCUpJztcbiAgICAgICAgfSBlbHNlIGlmICh2YWwuaW5kZXhPZignYm90dG9tJykgIT09IC0xKSB7XG4gICAgICAgICAgcG9zaXRpb25TdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICBwb3NpdGlvblN0eWxlcy50cmFuc2Zvcm0gKz0gJ3RyYW5zbGF0ZVkoNTAlKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uU3R5bGVzO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIHRoZSBiYWRnZSAgKi9cbiAgQElucHV0KCdseUJhZGdlQmcnKVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmcpIHtcbiAgICAgIHRoaXMuX2JnID0gdmFsO1xuICAgICAgdGhpcy5fYmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5iZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YoYCR7dmFsfTpjb250cmFzdGApXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fYmdDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9iZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIF9jb21tb246IEx5Q29tbW9uXG4gICkge1xuICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKF9jb21tb24pIHtcbiAgICAgIF9jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvKiogQWRkIHJvb3Qgc3R5bGVzICovXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fYmFkZ2VFbGVtZW50UmVmLCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgcG9zaXRpb24gKi9cbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBERUZBVUxUX1BPU0lUSU9OO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBiZyAqL1xuICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJhZGdlKCkge1xuICAgIGlmICghdGhpcy5fZWxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsQ29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjb250YWluZXIpO1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gY29udGFpbmVyO1xuXG4gICAgICAvKiogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucmVsYXRpdmUpO1xuICAgIH1cbiAgICB0aGlzLl9lbENvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3RoaXMuY29udGVudH1gO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCYWRnZSB9IGZyb20gJy4vYmFkZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJhZGdlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5QmFkZ2VdXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2VNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIkx5VGhlbWUyIiwiUmVuZGVyZXIyIiwiTHlDb21tb24iLCJPcHRpb25hbCIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBR0EsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBQzFCLElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDOztJQUNuQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUM7O0lBRTdCLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7UUFBSyxRQUFDO1lBQ3pDLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLE1BQU0sRUFBRSxDQUFDO2dCQUNULFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVTthQUN4QztZQUNELFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUUsVUFBVTthQUNyQjtTQUNGO0lBbkJ5QyxDQW1C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