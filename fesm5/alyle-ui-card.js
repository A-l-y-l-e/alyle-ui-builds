import { Directive, Renderer2, ElementRef, Input, Optional, NgModule } from '@angular/core';
import { LyTheme2, toBoolean, LyCommon, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
var LyCard = /** @class */ (function () {
    function LyCard(theme, el, renderer, common) {
        this.theme = theme;
        this.el = el;
        this.renderer = renderer;
        this.common = common;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.common.setAutoContrast();
        /** @type {?} */
        var requireOnChanges;
        if (!this.common.bg) {
            this.common.bg = 'background:primary';
            requireOnChanges = true;
        }
        if (!this.common.elevation) {
            this.common.elevation = 2;
            requireOnChanges = true;
        }
        // if (!this.common.shadowColor) {
        //   this.common.shadowColor = 'colorShadow';
        //   requireOnChanges = true;
        // }
        if (requireOnChanges) {
            this.common.ngOnChanges();
        }
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
        // if (this.elevation === void 0) {
        //   this.elevation = DEFAULT_ELEVATION;
        // }
    };
    LyCard.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card'
                },] }
    ];
    /** @nocollapse */
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    return LyCard;
}());
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
                return /** @type {?} */ (({
                    paddingTop: +valorActual / +valorAnterior * 100 + "%",
                    content: "''",
                    display: 'block'
                }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

export { LyCardModule, LyCard, LyCardContent, LyCardActions, LyCardMedia };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiwgTHlDb21tb24sIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzE2cHggMTZweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzhweCA0cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25zSXRlbToge1xuICAgIG1hcmdpbjogJzAgNHB4J1xuICB9XG59KTtcblxuY29uc3QgREVGQVVMVF9BU1BFQ1RfUkFUSU8gPSAnMTY6OSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY29tbW9uOiBMeUNvbW1vblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29tbW9uLnNldEF1dG9Db250cmFzdCgpO1xuICAgIGxldCByZXF1aXJlT25DaGFuZ2VzOiBib29sZWFuO1xuICAgIGlmICghdGhpcy5jb21tb24uYmcpIHtcbiAgICAgIHRoaXMuY29tbW9uLmJnID0gJ2JhY2tncm91bmQ6cHJpbWFyeSc7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuY29tbW9uLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gaWYgKCF0aGlzLmNvbW1vbi5zaGFkb3dDb2xvcikge1xuICAgIC8vICAgdGhpcy5jb21tb24uc2hhZG93Q29sb3IgPSAnY29sb3JTaGFkb3cnO1xuICAgIC8vICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgLy8gfVxuICAgIGlmIChyZXF1aXJlT25DaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNvbW1vbi5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIC8vIGlmICh0aGlzLmVsZXZhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgLy8gICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIC8vIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmNvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9ucyk7XG4gICAgaWYgKCF0b0Jvb2xlYW4odGhpcy5kaXNhYmxlQWN0aW9uU3BhY2luZykpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9uc0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtbWVkaWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYmdJbWc6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmdJbWdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JhdGlvQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYmdJbWcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnSW1nKSB7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy5fY3JlYXRlQmdJbWdDbGFzcyh2YWwsIHRoaXMuX2JnSW1nQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYmdJbWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnSW1nO1xuICB9XG5cbiAgLyoqIEFzcGVjdCByYXRpbyAqL1xuICBASW5wdXQoKVxuICBzZXQgcmF0aW8odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCByYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLnJhdGlvID0gREVGQVVMVF9BU1BFQ1RfUkFUSU87XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmdJbWdDbGFzcyh2YWw6IHN0cmluZywgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHRoaXMuX2JnSW1nID0gdmFsO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgYmFja2dyb3VuZC1pbWFnZWAsIGB1cmwoXCIke3ZhbH1cIilgKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUNhcmQtbWVkaWE6JHt2YWx9YCxcbiAgICAgIChcbiAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgXG4gICAgICApLFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgdGhpcy5fcmF0aW9DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhLWFyOiR7dmFsfWAsICh7XG4gICAgICAgICcmOmJlZm9yZSc6IHZhbC5zcGxpdCgnOicpLnJlZHVjZSgodmFsb3JBbnRlcmlvciwgdmFsb3JBY3R1YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGAkeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSVgLFxuICAgICAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yYXRpb0NsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2FyZCwgTHlDYXJkQ29udGVudCwgTHlDYXJkQWN0aW9ucywgTHlDYXJkTWVkaWEgfSBmcm9tICcuL2NhcmQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlDYXJkLCBMeUNhcmRDb250ZW50LCBMeUNhcmRBY3Rpb25zLCBMeUNhcmRNZWRpYSwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcmQsIEx5Q2FyZENvbnRlbnQsIEx5Q2FyZEFjdGlvbnMsIEx5Q2FyZE1lZGlhXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7O0lBQUssUUFBQztRQUN6QyxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxXQUFXOztZQUNwQixHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUc7Z0JBQy9CLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO2VBQ0Y7UUFDRCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUs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