import { __extends } from 'tslib';
import { Directive, ElementRef, Input, NgZone, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
/** @type {?} */
var DEFAULT_ASPECT_RATIO = '16:9';
/** @type {?} */
var STYLE_PRIORITY = -1;
/**
 * \@docs-private
 */
var  /**
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
 * @type {?}
 */
var LyCardMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCardBase)))))))));
var LyCard = /** @class */ (function (_super) {
    __extends(LyCard, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyCardModule = /** @class */ (function () {
    function LyCardModule() {
    }
    LyCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, LyCommonModule],
                    declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
                },] }
    ];
    return LyCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyCardModule, LyCardBase, LyCardMixinBase, LyCard, LyCardContent, LyCardActions, LyCardMedia };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzE2cHggMTZweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzhweCA0cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25zSXRlbToge1xuICAgIG1hcmdpbjogJzAgNHB4J1xuICB9XG59KTtcblxuY29uc3QgREVGQVVMVF9BU1BFQ1RfUkFUSU8gPSAnMTY6OSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDYXJkQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUNhcmRNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5Q2FyZEJhc2UpKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJyxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgZXh0ZW5kcyBMeUNhcmRNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHJlcXVpcmVPbkNoYW5nZXM6IGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gJ2JhY2tncm91bmQ6cHJpbWFyeSc7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSAyO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyZXF1aXJlT25DaGFuZ2VzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmNvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9ucyk7XG4gICAgaWYgKCF0b0Jvb2xlYW4odGhpcy5kaXNhYmxlQWN0aW9uU3BhY2luZykpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9uc0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtbWVkaWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYmdJbWc6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmdJbWdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JhdGlvQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYmdJbWcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnSW1nKSB7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy5fY3JlYXRlQmdJbWdDbGFzcyh2YWwsIHRoaXMuX2JnSW1nQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYmdJbWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnSW1nO1xuICB9XG5cbiAgLyoqIEFzcGVjdCByYXRpbyAqL1xuICBASW5wdXQoKVxuICBzZXQgcmF0aW8odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCByYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5yYXRpbyA9IERFRkFVTFRfQVNQRUNUX1JBVElPO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUJnSW1nQ2xhc3ModmFsOiBzdHJpbmcsIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZ0ltZyA9IHZhbDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYGJhY2tncm91bmQtaW1hZ2VgLCBgdXJsKFwiJHt2YWx9XCIpYCk7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhOiR7dmFsfWAsXG4gICAgICAoXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgICAgKSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQXNwZWN0UmF0aW9DbGFzcyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3JhdGlvID0gdmFsO1xuICAgIHRoaXMuX3JhdGlvQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5Q2FyZC1tZWRpYS1hcjoke3ZhbH1gLCAoe1xuICAgICAgICAnJjpiZWZvcmUnOiB2YWwuc3BsaXQoJzonKS5yZWR1Y2UoKHZhbG9yQW50ZXJpb3IsIHZhbG9yQWN0dWFsKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBgJHsrdmFsb3JBY3R1YWwgLyArdmFsb3JBbnRlcmlvciAqIDEwMH0lYCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH0pIGFzIGFueTtcbiAgICAgICAgfSlcbiAgICAgIH0pLFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fcmF0aW9DbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWEsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYV1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBeUJNLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztJQUFLLFFBQUM7UUFDekMsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7UUFDRCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsV0FBVzs7WUFDcEIsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFHO2dCQUMvQixPQUFPLEVBQUUsV0FBVzthQUNyQjtlQUNGO1FBQ0QsT0FBTztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFVBQVU7O1lBQ25CLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQkFDL0IsT0FBTyxFQUFFLFNBQVM7YUFDbkI7ZUFDRjtRQUNELFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO0tBQ0Y7Q0FBQzs7SUFFSSxvQkFBb0IsR0FBRyxNQUFNOztJQUU3QixjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBR3pCOzs7O0lBQ0Usb0JBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtLQUNuQjtJQUNQLGlCQUFDO0NBQUEsSUFBQTs7Ozs7QUFHRCxJQUFhLGVBQWUsR0FBRyxpQkFBaUIsQ0FDaEQsT0FBTyxDQUNMLFVBQVUsQ0FDUixXQUFXLENBQ1QsYUFBYSxDQUNYLGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQ2Qsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRDtJQVk0QkEsMEJBQWU7SUFNekMsZ0JBQ1UsS0FBZSxFQUNmLEdBQWUsRUFDZixRQUFtQixFQUMzQixNQUFjO1FBSmhCLFlBTUUsa0JBQU0sS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUVyQjtRQVBTLFdBQUssR0FBTCxLQUFLLENBQVU7UUFDZixTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUSxHQUFSLFFBQVEsQ0FBVzs7Ozs7UUFKN0IsYUFBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQVF6RCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O0tBQ3hCOzs7O0lBRUQsNEJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCx5QkFBUTs7O0lBQVI7O1lBQ00sZ0JBQXlCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztZQUMvQixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNuQixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELDRCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixNQUFNLEVBQUU7d0JBQ04sSUFBSTt3QkFDSixPQUFPO3dCQUNQLFFBQVE7d0JBQ1IsVUFBVTt3QkFDVixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7aUJBQ0Y7Ozs7Z0JBekVDLFFBQVE7Z0JBVFIsVUFBVTtnQkFNVixTQUFTO2dCQUpULE1BQU07O0lBd0hSLGFBQUM7Q0FBQSxDQXZDMkIsZUFBZSxHQXVDMUM7O0lBT0MsdUJBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLElBQVk7UUFGWixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO0tBQ2pCOzs7O0lBRUwsZ0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUU7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkE5SEMsVUFBVTtnQkFNVixTQUFTO2dCQThITyxNQUFNOztJQU14QixvQkFBQztDQWRELElBY0M7O0lBT0MsdUJBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLElBQVk7UUFGWixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO0tBQ2pCOzs7O0lBQ0wsZ0NBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkE5SUMsVUFBVTtnQkFNVixTQUFTO2dCQThJTyxNQUFNOzs7dUNBSnJCLEtBQUs7O0lBY1Isb0JBQUM7Q0FsQkQsSUFrQkM7O0lBaUNDLHFCQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixLQUFlO1FBRmYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBVTtLQUNwQjtJQXpCTCxzQkFDSSw4QkFBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1UsR0FBVztZQUNuQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQ0ksOEJBQUs7Ozs7UUFLVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7OztRQVJELFVBQ1UsR0FBVztZQUNuQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN0QixJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkM7U0FDRjs7O09BQUE7Ozs7SUFXRCw4QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7U0FDbkM7S0FDRjs7Ozs7O0lBRU8sdUNBQWlCOzs7OztJQUF6QixVQUEwQixHQUFXLEVBQUUsUUFBZ0I7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsV0FBUSxHQUFHLFFBQUksQ0FBQyxDQUFDO1FBQ25GLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3hCLGtCQUFnQixHQUFLLEdBRW5CLGdCQUFnQjtZQUNoQix5QkFBeUI7WUFDekIsK0JBQStCO1lBQy9CLDhCQUE4QixHQUVoQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsUUFBUSxFQUNSLGNBQWMsQ0FDZixDQUFDO0tBQ0g7Ozs7O0lBRU8sNkNBQXVCOzs7O0lBQS9CLFVBQWdDLEdBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDcEMscUJBQW1CLEdBQUssR0FBRztZQUN6QixVQUFVLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxhQUFhLEVBQUUsV0FBVztnQkFDM0QsMkJBQVE7b0JBQ04sVUFBVSxFQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsTUFBRztvQkFDckQsT0FBTyxFQUFFLElBQU07b0JBQ2YsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLElBQVM7YUFDWCxDQUFDO1NBQ0gsR0FDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsY0FBYyxDQUNmLENBQUM7S0FDSDs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBbEtDLFVBQVU7Z0JBTVYsU0FBUztnQkFHVCxRQUFROzs7d0JBaUtQLEtBQUs7d0JBV0wsS0FBSzs7SUF3RFIsa0JBQUM7Q0E3RUQ7Ozs7OztBQ2xLQTtJQUtBO0tBTzZCOztnQkFQNUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUM7b0JBQzVFLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztpQkFDbEU7O0lBQzJCLG1CQUFDO0NBUDdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9