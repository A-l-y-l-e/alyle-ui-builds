/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean } from '@alyle/ui';
/** @type {?} */
var styles = function (theme) {
    var _a, _b;
    return ({
        root: {
            display: 'block',
            overflow: 'hidden',
            borderRadius: '2px'
        },
        content: (_a = {
                display: 'block',
                padding: '16px 24px'
            },
            _a[theme.getBreakpoint('XSmall')] = {
                padding: '16px 16px'
            },
            _a),
        actions: (_b = {
                display: 'block',
                padding: '8px 12px'
            },
            _b[theme.getBreakpoint('XSmall')] = {
                padding: '8px 4px'
            },
            _b),
        actionsItem: {
            margin: '0 4px'
        }
    });
};
var ɵ0 = styles;
/** @type {?} */
var DEFAULT_ASPECT_RATIO = '16:9';
/** @type {?} */
var STYLE_PRIORITY = -1;
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyCardBase = /** @class */ (function () {
    function LyCardBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCardBase;
}());
/**
 * \@docs-private
 */
export { LyCardBase };
if (false) {
    /** @type {?} */
    LyCardBase.prototype._theme;
    /** @type {?} */
    LyCardBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyCardMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCardBase)))))))));
var LyCard = /** @class */ (function (_super) {
    tslib_1.__extends(LyCard, _super);
    function LyCard(theme, _el, renderer, ngZone) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this.theme = theme;
        _this._el = _el;
        _this.renderer = renderer;
        /**
         * styles
         * @ignore
         */
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this.setAutoContrast();
        return _this;
    }
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._el);
    };
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var requireOnChanges;
        if (!this.bg) {
            this.bg = 'background:primary';
            requireOnChanges = true;
        }
        if (!this.elevation) {
            this.elevation = 2;
            requireOnChanges = true;
        }
        if (requireOnChanges) {
            this.updateStyle(this._el);
        }
        this.renderer.addClass(this._el.nativeElement, this.classes.root);
    };
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeRippleEvents();
    };
    LyCard.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                        'disableRipple',
                    ]
                },] }
    ];
    /** @nocollapse */
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    return LyCard;
}(LyCardMixinBase));
export { LyCard };
if (false) {
    /**
     * styles
     * @ignore
     * @type {?}
     */
    LyCard.prototype.classes;
    /** @type {?} */
    LyCard.prototype.theme;
    /** @type {?} */
    LyCard.prototype._el;
    /** @type {?} */
    LyCard.prototype.renderer;
}
var LyCardContent = /** @class */ (function () {
    function LyCardContent(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    LyCardContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    };
    LyCardContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-content'
                },] }
    ];
    /** @nocollapse */
    LyCardContent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    return LyCardContent;
}());
export { LyCardContent };
if (false) {
    /** @type {?} */
    LyCardContent.prototype.el;
    /** @type {?} */
    LyCardContent.prototype.renderer;
    /** @type {?} */
    LyCardContent.prototype.card;
}
var LyCardActions = /** @class */ (function () {
    function LyCardActions(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    /**
     * @return {?}
     */
    LyCardActions.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(function (element) {
                _this.renderer.addClass(element, _this.card.classes.actionsItem);
            });
        }
    };
    LyCardActions.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-actions'
                },] }
    ];
    /** @nocollapse */
    LyCardActions.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    LyCardActions.propDecorators = {
        disableActionSpacing: [{ type: Input }]
    };
    return LyCardActions;
}());
export { LyCardActions };
if (false) {
    /** @type {?} */
    LyCardActions.prototype.disableActionSpacing;
    /** @type {?} */
    LyCardActions.prototype.el;
    /** @type {?} */
    LyCardActions.prototype.renderer;
    /** @type {?} */
    LyCardActions.prototype.card;
}
var LyCardMedia = /** @class */ (function () {
    function LyCardMedia(el, renderer, theme) {
        this.el = el;
        this.renderer = renderer;
        this.theme = theme;
    }
    Object.defineProperty(LyCardMedia.prototype, "bgImg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bgImg;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.bgImg) {
                this._bgImgClass = this._createBgImgClass(val, this._bgImgClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCardMedia.prototype, "ratio", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ratio;
        },
        /** Aspect ratio */
        set: /**
         * Aspect ratio
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.ratio) {
                this._createAspectRatioClass(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyCardMedia.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    };
    /**
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    LyCardMedia.prototype._createBgImgClass = /**
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    function (val, instance) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
        return this.theme.addStyle("lyCard-media:" + val, ("display:block;" +
            "background-size: cover;" +
            "background-repeat: no-repeat;" +
            "background-position: center;"), this.el.nativeElement, instance, STYLE_PRIORITY);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyCardMedia.prototype._createAspectRatioClass = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._ratio = val;
        this._ratioClass = this.theme.addStyle("lyCard-media-ar:" + val, ({
            '&:before': val.split(':').reduce(function (valorAnterior, valorActual) {
                return (/** @type {?} */ (({
                    paddingTop: +valorActual / +valorAnterior * 100 + "%",
                    content: "''",
                    display: 'block'
                })));
            })
        }), this.el.nativeElement, this._ratioClass, STYLE_PRIORITY);
    };
    LyCardMedia.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-media'
                },] }
    ];
    /** @nocollapse */
    LyCardMedia.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 }
    ]; };
    LyCardMedia.propDecorators = {
        bgImg: [{ type: Input }],
        ratio: [{ type: Input }]
    };
    return LyCardMedia;
}());
export { LyCardMedia };
if (false) {
    /** @type {?} */
    LyCardMedia.prototype._bgImg;
    /** @type {?} */
    LyCardMedia.prototype._bgImgClass;
    /** @type {?} */
    LyCardMedia.prototype._ratio;
    /** @type {?} */
    LyCardMedia.prototype._ratioClass;
    /** @type {?} */
    LyCardMedia.prototype.el;
    /** @type {?} */
    LyCardMedia.prototype.renderer;
    /** @type {?} */
    LyCardMedia.prototype.theme;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUVqQixTQUFTLEVBQ1IsTUFBTSxXQUFXLENBQUM7O0lBRWYsTUFBTSxHQUFHLFVBQUMsS0FBcUI7O0lBQUssT0FBQSxDQUFDO1FBQ3pDLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO1FBQ0QsT0FBTztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFdBQVc7O1lBQ3BCLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQkFDL0IsT0FBTyxFQUFFLFdBQVc7YUFDckI7ZUFDRjtRQUNELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxVQUFVOztZQUNuQixHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUc7Z0JBQy9CLE9BQU8sRUFBRSxTQUFTO2FBQ25CO2VBQ0Y7UUFDRCxXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsT0FBTztTQUNoQjtLQUNGLENBQUM7QUF2QndDLENBdUJ4Qzs7O0lBRUksb0JBQW9CLEdBQUcsTUFBTTs7SUFFN0IsY0FBYyxHQUFHLENBQUMsQ0FBQzs7OztBQUd6Qjs7OztJQUNFLG9CQUNTLE1B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LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMTZweCAyNHB4JyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMTZweCAxNnB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzhweCAxMnB4JyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnOHB4IDRweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnNJdGVtOiB7XG4gICAgbWFyZ2luOiAnMCA0cHgnXG4gIH1cbn0pO1xuXG5jb25zdCBERUZBVUxUX0FTUEVDVF9SQVRJTyA9ICcxNjo5JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUNhcmRCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5Q2FyZE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlDYXJkQmFzZSkpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBleHRlbmRzIEx5Q2FyZE1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcmVxdWlyZU9uQ2hhbmdlczogYm9vbGVhbjtcbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVpcmVPbkNoYW5nZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuY29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1tZWRpYSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTWVkaWEgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9iZ0ltZzogc3RyaW5nO1xuICBwcml2YXRlIF9iZ0ltZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF0aW86IHN0cmluZztcbiAgcHJpdmF0ZSBfcmF0aW9DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBiZ0ltZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmdJbWcpIHtcbiAgICAgIHRoaXMuX2JnSW1nQ2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCwgdGhpcy5fYmdJbWdDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBiZ0ltZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdJbWc7XG4gIH1cblxuICAvKiogQXNwZWN0IHJhdGlvICovXG4gIEBJbnB1dCgpXG4gIHNldCByYXRpbyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLnJhdGlvID0gREVGQVVMVF9BU1BFQ1RfUkFUSU87XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmdJbWdDbGFzcyh2YWw6IHN0cmluZywgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHRoaXMuX2JnSW1nID0gdmFsO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgYmFja2dyb3VuZC1pbWFnZWAsIGB1cmwoXCIke3ZhbH1cIilgKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUNhcmQtbWVkaWE6JHt2YWx9YCxcbiAgICAgIChcbiAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgXG4gICAgICApLFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgdGhpcy5fcmF0aW9DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhLWFyOiR7dmFsfWAsICh7XG4gICAgICAgICcmOmJlZm9yZSc6IHZhbC5zcGxpdCgnOicpLnJlZHVjZSgodmFsb3JBbnRlcmlvciwgdmFsb3JBY3R1YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGAkeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSVgLFxuICAgICAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yYXRpb0NsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iXX0=