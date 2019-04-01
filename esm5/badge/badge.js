/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_POSITION = 'startTop';
/** @type {?} */
var DEFAULT_BG = 'primary';
/** @type {?} */
var DEFAULT_POSITION_VALUE = {
    after: '-11px',
    above: '-11px'
};
/** @type {?} */
export var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        position: 'absolute',
        display: 'flex',
        width: '22px',
        height: '22px',
        borderRadius: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        pointerEvents: 'none',
        zIndex: 1,
        fontSize: theme.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        justifyContent: 'center',
        alignItems: 'center',
        '&': theme.badge ? theme.badge.root : null
    },
    relative: {
        position: 'relative'
    }
}); };
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyBadgeBase = /** @class */ (function () {
    function LyBadgeBase(_theme) {
        this._theme = _theme;
    }
    return LyBadgeBase;
}());
/**
 * \@docs-private
 */
export { LyBadgeBase };
if (false) {
    /** @type {?} */
    LyBadgeBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
var LyBadge = /** @class */ (function (_super) {
    tslib_1.__extends(LyBadge, _super);
    function LyBadge(_el, _theme, _renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        /**
         * Styles
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        _this._badgeElementRef = _this._el.nativeElement;
        return _this;
    }
    Object.defineProperty(LyBadge.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        /** The content for the badge */
        set: /**
         * The content for the badge
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
         */
        function () {
            return this._position;
        },
        /** The position for the badge */
        set: /**
         * The position for the badge
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.position) {
                this._position = val;
                this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                    /** @type {?} */
                    var sty = (/** @type {?} */ (theme.badge)).position && (/** @type {?} */ ((/** @type {?} */ (theme.badge)).position))[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
                    if (sty) {
                        return sty;
                    }
                    else {
                        throw new Error("LyBadge.position `" + val + "` not found in `ThemeVariables`");
                    }
                }, this._badgeElementRef, this._positionClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "lyBadgeBg", {
        /** The color of the badge */
        get: /**
         * The color of the badge
         * @return {?}
         */
        function () {
            return this._lyBadgeBg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.lyBadgeBg) {
                this._lyBadgeBg = val;
                this._lyBadgeBgClass = this._theme.addStyle("ly-badge.bg:" + val, function (theme) { return ({
                    backgroundColor: theme.colorOf(val),
                    color: theme.colorOf(val + ":contrast")
                }); }, this._badgeElementRef, this._lyBadgeBgClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyBadge.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.content) {
            this.updateStyle(this._el);
        }
    };
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
        if (this.content && !this.lyBadgeBg) {
            this.lyBadgeBg = DEFAULT_BG;
        }
    };
    /**
     * @return {?}
     */
    LyBadge.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._elContainer) {
            this._renderer.removeChild(this._el.nativeElement, this._elContainer);
        }
    };
    /**
     * @private
     * @return {?}
     */
    LyBadge.prototype._createBadge = /**
     * @private
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
        { type: Directive, args: [{
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
                },] }
    ];
    /** @nocollapse */
    LyBadge.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: Renderer2 }
    ]; };
    LyBadge.propDecorators = {
        content: [{ type: Input, args: ['lyBadge',] }],
        position: [{ type: Input, args: ['lyBadgePosition',] }],
        lyBadgeBg: [{ type: Input }]
    };
    return LyBadge;
}(LyBadgeMixinBase));
export { LyBadge };
if (false) {
    /**
     * Styles
     * \@docs-private
     * @type {?}
     */
    LyBadge.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._content;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._position;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._positionClass;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._elContainer;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._badgeElementRef;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._lyBadgeBgClass;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._lyBadgeBg;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyBadge.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvIiwic291cmNlcyI6WyJiYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBRWhCLE1BQU0sV0FBVyxDQUFDOztJQUVmLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLGdCQUFnQixHQUFHLFVBQVU7O0lBQzdCLFVBQVUsR0FBRyxTQUFTOztJQUN0QixzQkFBc0IsR0FBRztJQUM3QixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0NBQ2Y7O0FBQ0QsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFlBQVksRUFBRSxVQUFVO1FBQ3hCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzNCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVU7UUFDdkMsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQzNDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQVU7S0FDckI7Q0FDRixDQUFDLEVBdEIrQyxDQXNCL0M7Ozs7QUFHRjs7OztJQUNFLHFCQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztJQUNQLGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFGRyw2QkFBdUI7Ozs7OztBQUszQixNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsaUJBQWlCLENBQ2pELE9BQU8sQ0FDTCxVQUFVLENBQ1IsV0FBVyxDQUNULGFBQWEsQ0FDWCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWhEO0lBWTZCLG1DQUFnQjtJQStEM0MsaUJBQ1UsR0FBZSxFQUN2QixNQUFnQixFQUNSLFNBQW9CO1FBSDlCLFlBS0Usa0JBQU0sTUFBTSxDQUFDLFNBR2Q7UUFQUyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBRWYsZUFBUyxHQUFULFNBQVMsQ0FBVzs7Ozs7UUE3RHJCLGFBQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQWdFbkQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQzs7SUFDakQsQ0FBQztJQXpERCxzQkFDSSw0QkFBTzs7OztRQU1YO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFWRCxnQ0FBZ0M7Ozs7OztRQUNoQyxVQUNZLEdBQW9CO1lBQzlCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDZCQUFROzs7O1FBZVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQztRQW5CRCxpQ0FBaUM7Ozs7OztRQUNqQyxVQUNhLEdBQVc7WUFDdEIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUJBQXFCLEdBQUssRUFBRSxVQUFDLEtBQXFCOzt3QkFDckYsR0FBRyxHQUFHLG1CQUFBLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQyxRQUFRLElBQUksbUJBQUEsbUJBQUEsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzVILElBQUksR0FBRyxFQUFFO3dCQUNQLE9BQU8sR0FBRyxDQUFDO3FCQUNaO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXNCLEdBQUcsb0NBQW9DLENBQUMsQ0FBQztxQkFDaEY7Z0JBQ0gsQ0FBQyxFQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzdEO1FBRUgsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSw4QkFBUztRQUZiLDZCQUE2Qjs7Ozs7UUFDN0I7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFDRCxVQUFjLEdBQVc7WUFDdkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWUsR0FBSyxFQUFFLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7b0JBQzVGLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztvQkFDbkMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUksR0FBRyxjQUFXLENBQUM7aUJBQ3hDLENBQUMsRUFIMkYsQ0FHM0YsRUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUM5RDtRQUNILENBQUM7OztPQVZBOzs7O0lBdUJELDZCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELDBCQUFROzs7SUFBUjtRQUVFLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRSwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztTQUNsQztRQUVELHFCQUFxQjtRQUNyQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELDZCQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7OztJQUVPLDhCQUFZOzs7O0lBQXBCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7O2dCQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUVsQyw0QkFBNEI7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEtBQUcsSUFBSSxDQUFDLE9BQVMsQ0FBQztJQUNwRCxDQUFDOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE1BQU0sRUFBRTt3QkFDTixJQUFJO3dCQUNKLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxhQUFhO3FCQUNkO2lCQUNGOzs7O2dCQS9FQyxVQUFVO2dCQVFWLFFBQVE7Z0JBSlIsU0FBUzs7OzBCQTBGUixLQUFLLFNBQUMsU0FBUzsyQkFZZixLQUFLLFNBQUMsaUJBQWlCOzRCQXFCdkIsS0FBSzs7SUFrRVIsY0FBQztDQUFBLEFBN0hELENBWTZCLGdCQUFnQixHQWlINUM7U0FqSFksT0FBTzs7Ozs7OztJQUtsQiwwQkFBcUQ7Ozs7O0lBQ3JELDJCQUFrQzs7Ozs7SUFDbEMsNEJBQTBCOzs7OztJQUMxQixpQ0FBK0I7Ozs7O0lBQy9CLCtCQUEwQjs7Ozs7SUFDMUIsbUNBQThCOzs7OztJQUM5QixrQ0FBZ0M7Ozs7O0lBa0RoQyw2QkFBMkI7Ozs7O0lBR3pCLHNCQUF1Qjs7Ozs7SUFFdkIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgT25EZXN0cm95XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXNcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdzdGFydFRvcCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTl9WQUxVRSA9IHtcbiAgYWZ0ZXI6ICctMTFweCcsXG4gIGFib3ZlOiAnLTExcHgnXG59O1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcyMnB4JyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTIpLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgJyYnOiB0aGVtZS5iYWRnZSA/IHRoZW1lLmJhZGdlLnJvb3QgOiBudWxsXG4gIH0sXG4gIHJlbGF0aXZlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlCYWRnZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QmFkZ2VNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUJhZGdlQmFzZSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1iYWRnZSwgW2x5QmFkZ2VdJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlCYWRnZSBleHRlbmRzIEx5QmFkZ2VNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcml2YXRlIF9jb250ZW50OiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZWxDb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBfYmFkZ2VFbGVtZW50UmVmOiBhbnk7XG4gIHByaXZhdGUgX2x5QmFkZ2VCZ0NsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb250ZW50IGZvciB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KCdseUJhZGdlJylcbiAgc2V0IGNvbnRlbnQodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuX2NvbnRlbnQgPSB2YWw7XG4gICAgICB0aGlzLl9jcmVhdGVCYWRnZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGVudCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgLyoqIFRoZSBwb3NpdGlvbiBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZVBvc2l0aW9uJylcbiAgc2V0IHBvc2l0aW9uKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5fcG9zaXRpb24gPSB2YWw7XG4gICAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWJhZGdlLnBvc2l0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5ID0gdGhlbWUuYmFkZ2UhLnBvc2l0aW9uICYmIHRoZW1lLmJhZGdlIS5wb3NpdGlvbiFbdmFsXSB8fCB2YWwgPT09IERFRkFVTFRfUE9TSVRJT04gPyBERUZBVUxUX1BPU0lUSU9OX1ZBTFVFIDogbnVsbDtcbiAgICAgICAgaWYgKHN0eSkge1xuICAgICAgICAgIHJldHVybiBzdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeUJhZGdlLnBvc2l0aW9uIFxcYCR7dmFsfVxcYCBub3QgZm91bmQgaW4gXFxgVGhlbWVWYXJpYWJsZXNcXGBgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICAvKiogVGhlIGNvbG9yIG9mIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlCYWRnZUJnKCkge1xuICAgIHJldHVybiB0aGlzLl9seUJhZGdlQmc7XG4gIH1cbiAgc2V0IGx5QmFkZ2VCZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMubHlCYWRnZUJnKSB7XG4gICAgICB0aGlzLl9seUJhZGdlQmcgPSB2YWw7XG4gICAgICB0aGlzLl9seUJhZGdlQmdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5iZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YoYCR7dmFsfTpjb250cmFzdGApXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5fbHlCYWRnZUJnQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbHlCYWRnZUJnOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLyoqIEFkZCByb290IHN0eWxlcyAqL1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2JhZGdlRWxlbWVudFJlZiwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgLyoqIFNldCBkZWZhdWx0IHBvc2l0aW9uICovXG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG5cbiAgICAvKiogU2V0IGRlZmF1bHQgYmcgKi9cbiAgICBpZiAodGhpcy5jb250ZW50ICYmICF0aGlzLmx5QmFkZ2VCZykge1xuICAgICAgdGhpcy5seUJhZGdlQmcgPSBERUZBVUxUX0JHO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9lbENvbnRhaW5lcikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZWxDb250YWluZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJhZGdlKCkge1xuICAgIGlmICghdGhpcy5fZWxDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsQ29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjb250YWluZXIpO1xuICAgICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gY29udGFpbmVyO1xuXG4gICAgICAvKiogQWRkIHBvc2l0aW9uIHJlbGF0aXZlICovXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucmVsYXRpdmUpO1xuICAgIH1cbiAgICB0aGlzLl9lbENvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3RoaXMuY29udGVudH1gO1xuICB9XG5cbn1cbiJdfQ==