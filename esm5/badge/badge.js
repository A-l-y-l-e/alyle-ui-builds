import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, OnDestroy, InjectionToken } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, styleTemplateToString, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleCollection } from '@alyle/ui';
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
        root: function () { return function (className) { return className + "{position:absolute;display:flex;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:" + theme.pxToRem(12) + ";font-family:" + theme.typography.fontFamily + ";justify-content:center;align-items:center;box-sizing:border-box;z-index:1;}" + styleTemplateToString(((theme.badge
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvIiwic291cmNlcyI6WyJiYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxjQUFjLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIsU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxFQUNYLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWlCckMsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxjQUFjLENBQWUsdUJBQXVCLENBQUMsQ0FBQztBQUVsRyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUNuQyxJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztBQUNuQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDN0IsSUFBTSxrQkFBa0IsR0FBRyxTQUFTLENBQUM7QUFDckMsSUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXdDLEVBQUUsR0FBYTtJQUM1RSxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLE9BQU87UUFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLGNBQU8sT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLDRHQUF1RyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxxQkFBZ0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLG9GQUErRSxxQkFBcUIsQ0FBQyxDQUNsVCxDQUFDLEtBQUssQ0FBQyxLQUFLO2VBQ1AsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO2VBQ2hCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDN0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBVCxDQUFTLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM3QixDQUFDLEVBQUUsS0FBRyxTQUFXLENBQUcsRUFOUyxDQU1ULEVBTmQsQ0FNYztRQUMzQixRQUFRLEVBQUUsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyx5QkFBc0IsRUFBbEMsQ0FBa0M7S0FDcEUsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLG9CQUFvQjtBQUNwQjtJQUNFLHFCQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztJQUNQLGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLGlCQUFpQixDQUNqRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsYUFBYSxDQUNYLGNBQWMsQ0FDWixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBY2pEO0lBQTZCLG1DQUFnQjtJQW1KM0MsaUJBQ1UsR0FBNEIsRUFDcEMsTUFBZ0IsRUFDUixTQUFvQjtRQUg5QixZQUtFLGtCQUFNLE1BQU0sQ0FBQyxTQUdkO1FBUFMsU0FBRyxHQUFILEdBQUcsQ0FBeUI7UUFFNUIsZUFBUyxHQUFULFNBQVMsQ0FBVztRQXBKOUI7OztXQUdHO1FBQ00sYUFBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFtSnRELEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7O0lBQ2pELENBQUM7Z0JBM0pVLE9BQU87SUFnQmxCLHNCQUFJLDRCQUFPO2FBTVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQztRQVZELGdDQUFnQzthQUVoQyxVQUFZLEdBQW9CO1lBQzlCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDhCQUFTO2FBY2I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzthQWhCRCxVQUFjLFNBQXNCO1lBQ2xDLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBSSxTQUFPLENBQUMsQ0FBQyxnQ0FBNkIsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBSSxTQUFPLENBQUMsQ0FBQyxzREFBbUQsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUksU0FBTyxDQUFDLENBQUMseURBQXNELENBQUMsQ0FBQzthQUNyRjtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhFLENBQUM7OztPQUFBO0lBVUQsc0JBQUksNEJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBWSxHQUEyQjtZQUF2QyxpQkFpQkM7WUFoQkMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBRXBCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQ3BCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7b0JBQzFCLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7b0JBRTFCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFJLFNBQU8sQ0FBQyxDQUFDLGlCQUFZLEdBQUcsU0FBSSxFQUFFLFNBQUksRUFBSSxFQUFFLFVBQUMsS0FBcUI7d0JBQ3hHLElBQU0sQ0FBQyxHQUFHLE9BQU8sS0FBSyxRQUFROzRCQUM1QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsT0FBTyxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLFNBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBSSxDQUFDLFVBQUssS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBSSxDQUFDLFFBQUssRUFBaEYsQ0FBZ0YsQ0FBQztvQkFDakgsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzVFLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDOzs7T0FsQkE7SUF3QkQsc0JBQUksdUJBQUU7UUFGTiw2QkFBNkI7YUFFN0I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQU8sR0FBVztZQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUN0QjtRQUNILENBQUM7OztPQUxBO0lBU0Qsc0JBQUksOEJBQVM7UUFGYiw2QkFBNkI7YUFFN0I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQWMsR0FBVztZQUF6QixpQkFhQztZQVpDLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUV0QixJQUFNLFVBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBSSxTQUFPLENBQUMsQ0FBQyxhQUFRLEdBQUssRUFDbEUsVUFBQyxLQUFxQixJQUFLLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUywwQkFBcUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBVSxLQUFLLENBQUMsT0FBTyxDQUFJLEdBQUcsY0FBVyxDQUFDLE9BQUksRUFBakcsQ0FBaUcsRUFBeEgsQ0FBd0gsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFFckssT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO2FBR0o7UUFDSCxDQUFDOzs7T0FkQTtJQWtCRCxzQkFBSSwrQkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFlLEdBQVc7WUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQUxBO0lBUUQsc0JBQUksc0NBQWlCO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFzQixHQUFXO1lBQWpDLGlCQXNCQztZQXJCQyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsSUFBTSxTQUFPLEdBQU0sU0FBTyxDQUFDLENBQUMscUJBQWdCLEdBQUssQ0FBQztnQkFDbEQsSUFBTSxVQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQ3RDLFNBQU8sRUFDUCxVQUFDLEtBQXVCO29CQUN0QixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSzsyQkFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVOzJCQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7MkJBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsT0FBTyxVQUFVLENBQUM7cUJBQ25CO29CQUNELE1BQU0sSUFBSSxLQUFLLENBQUksU0FBTyxrQ0FBK0IsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDLEVBQ0QsY0FBYyxDQUNmLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFRLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2xGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDOzs7T0F2QkE7SUFzQ0QsNkJBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBRUUsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxFLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7U0FDckM7UUFDRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7UUFFRCw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO1NBQzdDO1FBRUQsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVPLGlDQUFlLEdBQXZCO1FBQUEsaUJBNkJDO1FBNUJDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUUxQixJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDWixJQUFJLEdBQVMsQ0FBQztZQUNkLElBQUksR0FBUyxDQUFDO1lBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNaLElBQUksRUFBRSxLQUFLLE9BQU8sRUFBRTtvQkFDbEIsR0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDUjtxQkFBTTtvQkFDTCxHQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0QsSUFBSSxFQUFFLEtBQUssT0FBTyxFQUFFO29CQUNsQixHQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ1Q7cUJBQU07b0JBQ0wsR0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDUjthQUNGO1lBRUQsSUFBTSxVQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUksU0FBTyxDQUFDLENBQUMsbUJBQWMsRUFBRSxTQUFJLEVBQUksRUFDN0UsVUFBQyxLQUFxQixJQUFLLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyw4QkFBd0IsS0FBSyxDQUFDLEtBQUssS0FBSyxPQUFPO2dCQUN6RyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsWUFBTSxHQUFDLFNBQU0sRUFEeUIsQ0FDekIsRUFERSxDQUNGLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFFM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBUSxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5RSxDQUFDLENBQUMsQ0FBQztTQUVKO0lBQ0gsQ0FBQztJQUVPLDhCQUFZLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXpFLDRCQUE0QjtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBRyxJQUFJLENBQUMsT0FBUyxDQUFDO0lBQ2hELENBQUM7O0lBelBlLFNBQUMsR0FBRyxTQUFTLENBQUM7O2dCQW1KZixVQUFVO2dCQUNmLFFBQVE7Z0JBQ0csU0FBUzs7SUF0STlCO1FBREMsS0FBSyxDQUFDLFNBQVMsQ0FBQzswQ0FNaEI7SUFNRDtRQURDLEtBQUssRUFBRTs0Q0FjUDtJQU1RO1FBQVIsS0FBSyxFQUFFOzhDQUErQjtJQUM5QjtRQUFSLEtBQUssRUFBRTs4Q0FBOEI7SUFHdEM7UUFEQyxLQUFLLEVBQUU7MENBR1A7SUF3QkQ7UUFEQyxLQUFLLEVBQUU7cUNBR1A7SUFTRDtRQURDLEtBQUssRUFBRTs0Q0FHUDtJQWtCRDtRQURDLEtBQUssRUFBRTs2Q0FHUDtJQVFEO1FBREMsS0FBSyxFQUFFO29EQUdQO0lBdkhVLE9BQU87UUFabkIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixNQUFNLEVBQUU7Z0JBQ04sSUFBSTtnQkFDSixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixVQUFVO2dCQUNWLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1NBQ0YsQ0FBQztPQUNXLE9BQU8sQ0E0UG5CO0lBQUQsY0FBQztDQUFBLEFBNVBELENBQTZCLGdCQUFnQixHQTRQNUM7U0E1UFksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbiAgSW5qZWN0aW9uVG9rZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZixcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlQ29sbGVjdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBMeUJhZGdlVmFyaWFibGVzIHtcbiAgYmFkZ2U/OiBMeUJhZGdlVGhlbWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlCYWRnZVRoZW1lIHtcbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGFwcGVhcmFuY2U/OiB7XG4gICAgZGVmYXVsdD86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgICBkb3Q/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlXG4gICAgW25hbWU6IHN0cmluZ106ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTFlfQkFER0VfREVGQVVMVF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEx5QmFkZ2VUaGVtZT4oJ0JBREdFX0RFRkFVTFRfT1BUSU9OUycpO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9IX1BPU0lUSU9OID0gJ2FmdGVyJztcbmNvbnN0IERFRkFVTFRfVl9QT1NJVElPTiA9ICdhYm92ZSc7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFID0gJ2RlZmF1bHQnO1xuY29uc3QgREVGQVVMVF9PVkVSTEFQID0gJ3JlY3RhbmdsZSc7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlCYWRnZVZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBiYWRnZSA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeUJhZGdlLtC4LFxuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oMTIpfTtmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5iYWRnZVxuICAgICAgICAgICAgJiYgdGhlbWUuYmFkZ2Uucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmJhZGdlLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5iYWRnZS5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGJhZGdlKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5iYWRnZS5yb290KGJhZGdlKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgcmVsYXRpdmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTt9YFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUJhZGdlQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCYWRnZU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5QmFkZ2VCYXNlKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWJhZGdlLCBbbHlCYWRnZV0nLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJhZGdlIGV4dGVuZHMgTHlCYWRnZU1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlCYWRnZSc7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICAvLyBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JhZGdlRWw6IGFueTtcbiAgcHJpdmF0ZSBfYmFkZ2VFbGVtZW50UmVmOiBhbnk7XG4gIHByaXZhdGUgX2hvc3RDbGFzczogTHlIb3N0Q2xhc3M7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbnRhaW5lcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGNvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlCYWRnZS7QuH06IFtjb250YWluZXJdIGlzIHVuZGVmaW5lZC5gKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlCYWRnZS7QuH06IFtjb250YWluZXJdIHdpdGggW2NvbnRlbnRdIGRvbid0IHdvcmsgdG9nZXRoZXIuYCk7XG4gICAgfVxuICAgIGlmICghY29udGFpbmVyLnRhZ05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMeUJhZGdlLtC4fTogdGhlIHZhbHVlIGdpdmVuIHRvIGNvbnRhaW5lciBpcyBub3QgYW4gSFRNTEVsZW1lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lciwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG5cbiAgfVxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cbiAgcHJpdmF0ZSBfY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBASW5wdXQoKSBoUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJztcbiAgQElucHV0KCkgdlBvc2l0aW9uOiAnYWJvdmUnIHwgJ2JlbG93JztcblxuICBASW5wdXQoKVxuICBnZXQgb3ZlcmxhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxhcDtcbiAgfVxuICBzZXQgb3ZlcmxhcCh2YWw6ICdjaXJjbGUnIHwgJ3JlY3RhbmdsZScpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm92ZXJsYXApIHtcbiAgICAgIHRoaXMuX292ZXJsYXAgPSB2YWw7XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsISkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXAgPSB2YWw7XG4gICAgICAgIGNvbnN0IGhwID0gdGhpcy5oUG9zaXRpb247XG4gICAgICAgIGNvbnN0IHZwID0gdGhpcy52UG9zaXRpb247XG5cbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShgJHtMeUJhZGdlLtC4fS1vdmVybGFwLSR7dmFsfSYke2hwfSYke3ZwfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBwID0gb3ZlcmxhcCA9PT0gJ2NpcmNsZSdcbiAgICAgICAgICAgID8gMTQgOiAwO1xuICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17JHt0aGVtZS5nZXREaXJlY3Rpb24odnApfToke3B9JTske3RoZW1lLmdldERpcmVjdGlvbihocCl9OiR7cH0lO31gO1xuICAgICAgICB9LCBTVFlMRV9QUklPUklUWSk7XG4gICAgICAgIHRoaXMuX292ZXJsYXBDbGFzcyA9IHRoaXMuX2hvc3RDbGFzcy51cGRhdGUobmV3Q2xhc3MsIHRoaXMuX292ZXJsYXBDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfb3ZlcmxhcDogJ2NpcmNsZScgfCAncmVjdGFuZ2xlJztcbiAgcHJpdmF0ZSBfb3ZlcmxhcENsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9seUJhZGdlQmc7XG4gIH1cbiAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VCZyA9IHZhbDtcbiAgICB9XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlCYWRnZUJnKCkge1xuICAgIHJldHVybiB0aGlzLl9seUJhZGdlQmc7XG4gIH1cbiAgc2V0IGx5QmFkZ2VCZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlCYWRnZUJnKSB7XG4gICAgICB0aGlzLl9seUJhZGdlQmcgPSB2YWw7XG5cbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoYCR7THlCYWRnZS7QuH0tLWJnLSR7dmFsfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17YmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07Y29sb3I6JHt0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKX07fWAsIFNUWUxFX1BSSU9SSVRZKTtcblxuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwhKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpc1sweDFdID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpc1sweDFdKTtcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbHlCYWRnZUJnOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5jb250ZW50ID09IG51bGwpIHtcbiAgICAgIHRoaXMubHlCYWRnZUFwcGVhcmFuY2UgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGx5QmFkZ2VBcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG4gIHNldCBseUJhZGdlQXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIGNvbnN0IHN0eWxlSUQgPSBgJHtMeUJhZGdlLtC4fS0tYXBwZWFyYW5jZS0ke3ZhbH1gO1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShcbiAgICAgICAgc3R5bGVJRCxcbiAgICAgICAgKHRoZW1lOiBMeUJhZGdlVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IHRoZW1lLmJhZGdlXG4gICAgICAgICAgICAmJiB0aGVtZS5iYWRnZS5hcHBlYXJhbmNlXG4gICAgICAgICAgICAmJiB0aGVtZS5iYWRnZS5hcHBlYXJhbmNlW3ZhbF1cbiAgICAgICAgICAgICYmIHRoZW1lLmJhZGdlLmFwcGVhcmFuY2VbdmFsXSEodGhpcy5jbGFzc2VzKTtcbiAgICAgICAgICBpZiAoYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGVhcmFuY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzdHlsZUlEfSBpcyBub3QgZGVmaW5lZCBpbiB0aGUgdGhlbWUuYCk7XG4gICAgICAgIH0sXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwhKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5faG9zdENsYXNzLnVwZGF0ZShuZXdDbGFzcywgdGhpcy5fYXBwZWFyYW5jZUNsYXNzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgaWYgKCF0aGlzLl9ob3N0Q2xhc3MpIHtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcyA9IG5ldyBMeUhvc3RDbGFzcyh0aGlzLl9lbCwgdGhpcy5fcmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLyoqIEFkZCByb290IHN0eWxlcyAqL1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VCZyA9IERFRkFVTFRfQkc7XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgbGV0IHJlcXVpcmVVcGRhdGUgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaFBvc2l0aW9uKSB7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaFBvc2l0aW9uID0gREVGQVVMVF9IX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudlBvc2l0aW9uKSB7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMudlBvc2l0aW9uID0gREVGQVVMVF9WX1BPU0lUSU9OO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYXBwZWFyYW5jZSAqL1xuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmx5QmFkZ2VBcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIH1cblxuICAgIC8qKiBTZXQgZGVmYXVsdCBvdmVybGFwICovXG4gICAgaWYgKCF0aGlzLm92ZXJsYXApIHtcbiAgICAgIHRoaXMub3ZlcmxhcCA9IERFRkFVTFRfT1ZFUkxBUDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYmFkZ2VFbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYmFkZ2VFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgY29uc3QgaHAgPSB0aGlzLmhQb3NpdGlvbjtcbiAgICBjb25zdCB2cCA9IHRoaXMudlBvc2l0aW9uO1xuXG4gICAgaWYgKGhwICYmIHZwKSB7XG4gICAgICBsZXQgeTogbnVtYmVyO1xuICAgICAgbGV0IHg6IG51bWJlcjtcbiAgICAgIGlmIChocCAmJiB2cCkge1xuICAgICAgICBpZiAoaHAgPT09ICdhZnRlcicpIHtcbiAgICAgICAgICB4ID0gNTA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9IC01MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodnAgPT09ICdhYm92ZScpIHtcbiAgICAgICAgICB5ID0gLTUwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSA1MDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKGAke0x5QmFkZ2Uu0Lh9LS1wb3NpdGlvbi0ke2hwfS0ke3ZwfWAsXG4gICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17dHJhbnNmb3JtOnRyYW5zbGF0ZSgke3RoZW1lLmFmdGVyID09PSAncmlnaHQnXG4gICAgICAgICAgPyB4IDogLXh9JSwgJHt5fSUpO31gLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsISkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLl9ob3N0Q2xhc3MudXBkYXRlKG5ld0NsYXNzLCB0aGlzLl9wb3NpdGlvbkNsYXNzKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmFkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLl9iYWRnZUVsKSB7XG4gICAgICBjb25zdCBiYWRnZSA9IHRoaXMuX2JhZGdlRWwgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKCh0aGlzLmNvbnRhaW5lcikgfHwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgYmFkZ2UpO1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gYmFkZ2U7XG4gICAgICB0aGlzLl9ob3N0Q2xhc3MgPSBuZXcgTHlIb3N0Q2xhc3MobmV3IEVsZW1lbnRSZWYoYmFkZ2UpLCB0aGlzLl9yZW5kZXJlcik7XG5cbiAgICAgIC8qKiBBZGQgcG9zaXRpb24gcmVsYXRpdmUgKi9cbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yZWxhdGl2ZSk7XG4gICAgfVxuICAgIHRoaXMuX2JhZGdlRWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iXX0=