import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, OnDestroy, InjectionToken } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, st2c, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleCollection } from '@alyle/ui';
export var LY_BADGE_DEFAULT_OPTIONS = new InjectionToken('BADGE_DEFAULT_OPTIONS');
var STYLE_PRIORITY = -2;
var DEFAULT_H_POSITION = 'after';
var DEFAULT_V_POSITION = 'above';
var DEFAULT_BG = 'primary';
var DEFAULT_APPEARANCE = 'default';
var DEFAULT_OVERLAP = 'rectangle';
export var STYLES = function (theme, ref) {
    var badge = ref.selectorsOf(STYLES);
    return {
        $name: LyBadge.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{position:absolute;display:flex;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:" + theme.pxToRem(12) + ";font-family:" + theme.typography.fontFamily + ";justify-content:center;align-items:center;box-sizing:border-box;z-index:1;}" + st2c(((theme.badge
            && theme.badge.root
            && (theme.badge.root instanceof StyleCollection
                ? theme.badge.root.setTransformer(function (fn) { return fn(badge); })
                : theme.badge.root(badge)))), "" + className); }; },
        relative: function (className) { return className + "{position:relative;}"; }
    };
};
/** @docs-private */
var LyBadgeBase = /** @class */ (function () {
    function LyBadgeBase(_theme) {
        this._theme = _theme;
    }
    return LyBadgeBase;
}());
export { LyBadgeBase };
/** @docs-private */
export var LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
var LyBadge = /** @class */ (function (_super) {
    tslib_1.__extends(LyBadge, _super);
    function LyBadge(_el, _theme, _renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this._theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        _this._badgeElementRef = _this._el.nativeElement;
        return _this;
    }
    LyBadge_1 = LyBadge;
    Object.defineProperty(LyBadge.prototype, "content", {
        get: function () {
            return this._content;
        },
        /** The content for the badge */
        set: function (val) {
            if (val !== this.content) {
                this._content = val;
                this._createBadge();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (container) {
            if (container == null) {
                throw new Error(LyBadge_1.и + ": [container] is undefined.");
            }
            if (this.content != null) {
                throw new Error(LyBadge_1.и + ": [container] with [content] don't work together.");
            }
            if (!container.tagName) {
                throw new Error(LyBadge_1.и + ": the value given to container is not an HTMLElement");
            }
            this._container = container;
            this._renderer.appendChild(container, this._el.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "overlap", {
        get: function () {
            return this._overlap;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.overlap) {
                this._overlap = val;
                Promise.resolve(null).then(function () {
                    var overlap = val;
                    var hp = _this.hPosition;
                    var vp = _this.vPosition;
                    var newClass = _this._theme.renderStyle(LyBadge_1.и + "-overlap-" + val + "&" + hp + "&" + vp, function (theme) {
                        var p = overlap === 'circle'
                            ? 14 : 0;
                        return function (className) { return className + "{" + theme.getDirection(vp) + ":" + p + "%;" + theme.getDirection(hp) + ":" + p + "%;}"; };
                    }, STYLE_PRIORITY);
                    _this._overlapClass = _this._hostClass.update(newClass, _this._overlapClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "bg", {
        /** The color of the badge */
        get: function () {
            return this._lyBadgeBg;
        },
        set: function (val) {
            if (this.content == null) {
                this.lyBadgeBg = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "lyBadgeBg", {
        /** The color of the badge */
        get: function () {
            return this._lyBadgeBg;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.lyBadgeBg) {
                this._lyBadgeBg = val;
                var newClass_1 = this._theme.renderStyle(LyBadge_1.и + "--bg-" + val, function (theme) { return function (className) { return className + "{background-color:" + theme.colorOf(val) + ";color:" + theme.colorOf(val + ":contrast") + ";}"; }; }, STYLE_PRIORITY);
                Promise.resolve(null).then(function () {
                    _this[0x1] = _this._hostClass.update(newClass_1, _this[0x1]);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (this.content == null) {
                this.lyBadgeAppearance = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "lyBadgeAppearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.appearance) {
                this._appearance = val;
                var styleID_1 = LyBadge_1.и + "--appearance-" + val;
                var newClass_2 = this._theme.renderStyle(styleID_1, function (theme) {
                    var appearance = theme.badge
                        && theme.badge.appearance
                        && theme.badge.appearance[val]
                        && theme.badge.appearance[val](_this.classes);
                    if (appearance) {
                        return appearance;
                    }
                    throw new Error(styleID_1 + " is not defined in the theme.");
                }, STYLE_PRIORITY);
                Promise.resolve(null).then(function () {
                    _this._appearanceClass = _this._hostClass.update(newClass_2, _this._appearanceClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    LyBadge.prototype.ngOnChanges = function () {
        if (this.content == null) {
            this.updateStyle(this._el);
        }
        this._updatePosition();
        if (!this._hostClass) {
            this._hostClass = new LyHostClass(this._el, this._renderer);
        }
    };
    LyBadge.prototype.ngOnInit = function () {
        /** Add root styles */
        this._renderer.addClass(this._badgeElementRef, this.classes.root);
        /** Set default bg */
        if (!this.bg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
        /** Set default position */
        var requireUpdate = false;
        if (!this.hPosition) {
            requireUpdate = true;
            this.hPosition = DEFAULT_H_POSITION;
        }
        if (!this.vPosition) {
            requireUpdate = true;
            this.vPosition = DEFAULT_V_POSITION;
        }
        if (requireUpdate) {
            this._updatePosition();
        }
        /** Set default appearance */
        if (!this.appearance) {
            this.lyBadgeAppearance = DEFAULT_APPEARANCE;
        }
        /** Set default overlap */
        if (!this.overlap) {
            this.overlap = DEFAULT_OVERLAP;
        }
    };
    LyBadge.prototype.ngOnDestroy = function () {
        if (this._badgeEl) {
            this._renderer.removeChild(this._el.nativeElement, this._badgeEl);
        }
    };
    LyBadge.prototype._updatePosition = function () {
        var _this = this;
        var hp = this.hPosition;
        var vp = this.vPosition;
        if (hp && vp) {
            var y_1;
            var x_1;
            if (hp && vp) {
                if (hp === 'after') {
                    x_1 = 50;
                }
                else {
                    x_1 = -50;
                }
                if (vp === 'above') {
                    y_1 = -50;
                }
                else {
                    y_1 = 50;
                }
            }
            var newClass_3 = this._theme.renderStyle(LyBadge_1.и + "--position-" + hp + "-" + vp, function (theme) { return function (className) { return className + "{transform:translate(" + (theme.after === 'right'
                ? x_1 : -x_1) + "%, " + y_1 + "%);}"; }; }, STYLE_PRIORITY);
            Promise.resolve(null).then(function () {
                _this._positionClass = _this._hostClass.update(newClass_3, _this._positionClass);
            });
        }
    };
    LyBadge.prototype._createBadge = function () {
        if (!this._badgeEl) {
            var badge = this._badgeEl = this._renderer.createElement('div');
            this._renderer.appendChild((this.container) || this._el.nativeElement, badge);
            this._badgeElementRef = badge;
            this._hostClass = new LyHostClass(new ElementRef(badge), this._renderer);
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._badgeEl.textContent = "" + this.content;
    };
    var LyBadge_1;
    LyBadge.и = 'LyBadge';
    LyBadge.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    tslib_1.__decorate([
        Input('lyBadge')
    ], LyBadge.prototype, "content", null);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "container", null);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "hPosition", void 0);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "vPosition", void 0);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "overlap", null);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "bg", null);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "lyBadgeBg", null);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "appearance", null);
    tslib_1.__decorate([
        Input()
    ], LyBadge.prototype, "lyBadgeAppearance", null);
    LyBadge = LyBadge_1 = tslib_1.__decorate([
        Directive({
            selector: 'ly-badge, [lyBadge]',
            inputs: [
                'bg',
                'color',
                'raised',
                'disabled',
                'outlined',
                'elevation',
                'shadowColor'
            ]
        })
    ], LyBadge);
    return LyBadge;
}(LyBadgeMixinBase));
export { LyBadge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvIiwic291cmNlcyI6WyJiYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxjQUFjLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxJQUFJLEVBQ0osU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxFQUNYLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWlCckMsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxjQUFjLENBQWUsdUJBQXVCLENBQUMsQ0FBQztBQUVsRyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUNuQyxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUNuQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDN0IsSUFBTSxrQkFBa0IsR0FBRyxTQUFTLENBQUM7QUFDckMsSUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXdDLEVBQUUsR0FBYTtJQUM1RSxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLE9BQU87UUFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FB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ZixRQUFRO2dCQUNHLFNBQVM7O0lBdEk5QjtRQURDLEtBQUssQ0FBQyxTQUFTLENBQUM7MENBTWhCO0lBTUQ7UUFEQyxLQUFLLEVBQUU7NENBY1A7SUFNUTtRQUFSLEtBQUssRUFBRTs4Q0FBK0I7SUFDOUI7UUFBUixLQUFLLEVBQUU7OENBQThCO0lBR3RDO1FBREMsS0FBSyxFQUFFOzBDQUdQO0lBd0JEO1FBREMsS0FBSyxFQUFFO3FDQUdQO0lBU0Q7UUFEQyxLQUFLLEVBQUU7NENBR1A7SUFrQkQ7UUFEQyxLQUFLLEVBQUU7NkNBR1A7SUFRRDtRQURDLEtBQUssRUFBRTtvREFHUDtJQXZIVSxPQUFPO1FBWm5CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsTUFBTSxFQUFFO2dCQUNOLElBQUk7Z0JBQ0osT0FBTztnQkFDUCxRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxPQUFPLENBNFBuQjtJQUFELGNBQUM7Q0FBQSxBQTVQRCxDQUE2QixnQkFBZ0IsR0E0UDVDO1NBNVBZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG4gIEluamVjdGlvblRva2VuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdDJjLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFRoZW1lUmVmLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVDb2xsZWN0aW9uIH0gZnJvbSAnQGFseWxlL3VpJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEx5QmFkZ2VWYXJpYWJsZXMge1xuICBiYWRnZT86IEx5QmFkZ2VUaGVtZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUJhZGdlVGhlbWUge1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgYXBwZWFyYW5jZT86IHtcbiAgICBkZWZhdWx0PzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZVxuICAgIGRvdD86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgICBbbmFtZTogc3RyaW5nXTogKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpIHwgdW5kZWZpbmVkXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBMWV9CQURHRV9ERUZBVUxUX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlCYWRnZVRoZW1lPignQkFER0VfREVGQVVMVF9PUFRJT05TJyk7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0hfUE9TSVRJT04gPSAnYWZ0ZXInO1xuY29uc3QgREVGQVVMVF9WX1BPU0lUSU9OID0gJ2Fib3ZlJztcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnZGVmYXVsdCc7XG5jb25zdCBERUZBVUxUX09WRVJMQVAgPSAncmVjdGFuZ2xlJztcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUJhZGdlVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGJhZGdlID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5QmFkZ2Uu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7Zm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSgxMil9O2ZvbnQtZmFtaWx5OiR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5fTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5iYWRnZVxuICAgICAgICAgICAgJiYgdGhlbWUuYmFkZ2Uucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmJhZGdlLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5iYWRnZS5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGJhZGdlKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5iYWRnZS5yb290KGJhZGdlKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgcmVsYXRpdmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUJhZGdlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCYWRnZU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5QmFkZ2VCYXNlKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGV4dGVuZHMgTHlCYWRnZU1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlCYWRnZSc7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICAvLyBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JhZGdlRWw6IGFueTtcbiAgcHJpdmF0ZSBfYmFkZ2VFbGVtZW50UmVmOiBhbnk7XG4gIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3M7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGNvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlCYWRnZS7QuH06IFtjb250YWluZXJdIGlzIHVuZGVmaW5lZC5gKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlCYWRnZS7QuH06IFtjb250YWluZXJdIHdpdGggW2NvbnRlbnRdIGRvbid0IHdvcmsgdG9nZXRoZXIuYCk7XG4gICAgfVxuICAgIGlmICghY29udGFpbmVyLnRhZ05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMeUJhZGdlLtC4fTogdGhlIHZhbHVlIGdpdmVuIHRvIGNvbnRhaW5lciBpcyBub3QgYW4gSFRNTEVsZW1lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG5cbiAgfVxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cbiAgcHJpdmF0ZSBfY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBASW5wdXQoKSBoUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJztcbiAgQElucHV0KCkgdlBvc2l0aW9uOiAnYWJvdmUnIHwgJ2JlbG93JztcblxuICBASW5wdXQoKVxuICBnZXQgb3ZlcmxhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxhcDtcbiAgfVxuICBzZXQgb3ZlcmxhcCh2YWw6ICdjaXJjbGUnIHwgJ3JlY3RhbmdsZScpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm92ZXJsYXApIHtcbiAgICAgIHRoaXMuX292ZXJsYXAgPSB2YWw7XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsISkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXAgPSB2YWw7XG4gICAgICAgIGNvbnN0IGhwID0gdGhpcy5oUG9zaXRpb247XG4gICAgICAgIGNvbnN0IHZwID0gdGhpcy52UG9zaXRpb247XG5cbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShgJHtMeUJhZGdlLtC4fS1vdmVybGFwLSR7dmFsfSYke2hwfSYke3ZwfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBwID0gb3ZlcmxhcCA9PT0gJ2NpcmNsZSdcbiAgICAgICAgICAgID8gMTQgOiAwO1xuICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17JHt0aGVtZS5nZXREaXJlY3Rpb24odnApfToke3B9JTske3RoZW1lLmdldERpcmVjdGlvbihocCl9OiR7cH0lO31gO1xuICAgICAgICB9LCBTVFlMRV9QUklPUklUWSk7XG4gICAgICAgIHRoaXMuX292ZXJsYXBDbGFzcyA9IHRoaXMuX2hvc3RDbGFzcy51cGRhdGUobmV3Q2xhc3MsIHRoaXMuX292ZXJsYXBDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfb3ZlcmxhcDogJ2NpcmNsZScgfCAncmVjdGFuZ2xlJztcbiAgcHJpdmF0ZSBfb3ZlcmxhcENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9seUJhZGdlQmc7XG4gIH1cbiAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VCZyA9IHZhbDtcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlCYWRnZUJnKCkge1xuICAgIHJldHVybiB0aGlzLl9seUJhZGdlQmc7XG4gIH1cbiAgc2V0IGx5QmFkZ2VCZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlCYWRnZUJnKSB7XG4gICAgICB0aGlzLl9seUJhZGdlQmcgPSB2YWw7XG5cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoYCR7THlCYWRnZS7QuH0tLWJnLSR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17YmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07Y29sb3I6JHt0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKX07fWAsIFNUWUxFX1BSSU9SSVRZKTtcblxuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwhKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpc1sweDFdID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpc1sweDFdKTtcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbHlCYWRnZUJnOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jb250ZW50ID09IG51bGwpIHtcbiAgICAgIHRoaXMubHlCYWRnZUFwcGVhcmFuY2UgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGx5QmFkZ2VBcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG4gIHNldCBseUJhZGdlQXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIGNvbnN0IHN0eWxlSUQgPSBgJHtMeUJhZGdlLtC4fS0tYXBwZWFyYW5jZS0ke3ZhbH1gO1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShcbiAgICAgICAgc3R5bGVJRCxcbiAgICAgICAgKHRoZW1lOiBMeUJhZGdlVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IHRoZW1lLmJhZGdlXG4gICAgICAgICAgICAmJiB0aGVtZS5iYWRnZS5hcHBlYXJhbmNlXG4gICAgICAgICAgICAmJiB0aGVtZS5iYWRnZS5hcHBlYXJhbmNlW3ZhbF1cbiAgICAgICAgICAgICYmIHRoZW1lLmJhZGdlLmFwcGVhcmFuY2VbdmFsXSEodGhpcy5jbGFzc2VzKTtcbiAgICAgICAgICBpZiAoYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGVhcmFuY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzdHlsZUlEfSBpcyBub3QgZGVmaW5lZCBpbiB0aGUgdGhlbWUuYCk7XG4gICAgICAgIH0sXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwhKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpcy5fYXBwZWFyYW5jZUNsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9ob3N0Q2xhc3MpIHtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcyA9IG5ldyBMeUhvc3RDbGFzcyh0aGlzLl9lbCwgdGhpcy5fcmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLyoqIEFkZCByb290IHN0eWxlcyAqL1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VCZyA9IERFRkFVTFRfQkc7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgbGV0IHJlcXVpcmVVcGRhdGUgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaFBvc2l0aW9uKSB7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaFBvc2l0aW9uID0gREVGQVVMVF9IX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudlBvc2l0aW9uKSB7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMudlBvc2l0aW9uID0gREVGQVVMVF9WX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VBcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBvdmVybGFwICovXG4gICAgaWYgKCF0aGlzLm92ZXJsYXApIHtcbiAgICAgIHRoaXMub3ZlcmxhcCA9IERFRkFVTFRfT1ZFUkxBUDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYmFkZ2VFbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYmFkZ2VFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgY29uc3QgaHAgPSB0aGlzLmhQb3NpdGlvbjtcbiAgICBjb25zdCB2cCA9IHRoaXMudlBvc2l0aW9uO1xuXG4gICAgaWYgKGhwICYmIHZwKSB7XG4gICAgICBsZXQgeTogbnVtYmVyO1xuICAgICAgbGV0IHg6IG51bWJlcjtcbiAgICAgIGlmIChocCAmJiB2cCkge1xuICAgICAgICBpZiAoaHAgPT09ICdhZnRlcicpIHtcbiAgICAgICAgICB4ID0gNTA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9IC01MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodnAgPT09ICdhYm92ZScpIHtcbiAgICAgICAgICB5ID0gLTUwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSA1MDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKGAke0x5QmFkZ2Uu0Lh9LS1wb3NpdGlvbi0ke2hwfS0ke3ZwfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17dHJhbnNmb3JtOnRyYW5zbGF0ZSgke3RoZW1lLmFmdGVyID09PSAncmlnaHQnXG4gICAgICAgICAgPyB4IDogLXh9JSwgJHt5fSUpO31gLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsISkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLl9ob3N0Q2xhc3MudXBkYXRlKG5ld0NsYXNzLCB0aGlzLl9wb3NpdGlvbkNsYXNzKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9iYWRnZUVsKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IHRoaXMuX2JhZGdlRWwgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKCh0aGlzLmNvbnRhaW5lcikgfHwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgYmFkZ2UpO1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gYmFkZ2U7XG4gICAgICB0aGlzLl9ob3N0Q2xhc3MgPSBuZXcgTHlIb3N0Q2xhc3MobmV3IEVsZW1lbnRSZWYoYmFkZ2UpLCB0aGlzLl9yZW5kZXJlcik7XG5cbiAgICAgIC8qKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yZWxhdGl2ZSk7XG4gICAgfVxuICAgIHRoaXMuX2JhZGdlRWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iXX0=