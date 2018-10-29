/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input, Optional } from '@angular/core';
import { LyTheme2, toBoolean, LyCommon } from '@alyle/ui';
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
var LyCard = /** @class */ (function () {
    function LyCard(theme, el, renderer, common) {
        this.theme = theme;
        this.el = el;
        this.renderer = renderer;
        this.common = common;
        /**
         * styles
         * @ignore
         */
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
        if (requireOnChanges) {
            this.common.ngOnChanges();
        }
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
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
    LyCard.prototype.el;
    /** @type {?} */
    LyCard.prototype.renderer;
    /** @type {?} */
    LyCard.prototype.common;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztBQUUxRSxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztJQUFLLE9BQUEsQ0FBQztRQUN6QyxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxXQUFXOztZQUNwQixHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUc7Z0JBQy9CLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO2VBQ0Y7UUFDRCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsVUFBVTs7WUFDbkIsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFHO2dCQUMvQixPQUFPLEVBQUUsU0FBUzthQUNuQjtlQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLE9BQU87U0FDaEI7S0FDRixDQUFDO0FBdkJ3QyxDQXVCeEMsQ0FBQzs7O0FBRUgsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUM7O0FBRXBDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQVd4QixnQkFDVSxPQUNBLElBQ0EsVUFDWSxNQUFnQjtRQUg1QixVQUFLLEdBQUwsS0FBSztRQUNMLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFB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Qjs7OztjQUFDLEdBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDcEMscUJBQW1CLEdBQUssRUFBRSxDQUFDO1lBQ3pCLFVBQVUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGFBQWEsRUFBRSxXQUFXO2dCQUMzRCx5QkFBTyxDQUFDO29CQUNOLFVBQVUsRUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLE1BQUc7b0JBQ3JELE9BQU8sRUFBRSxJQUFNO29CQUNmLE9BQU8sRUFBRSxPQUFPO2lCQUNqQixDQUFRLEVBQUM7YUFDWCxDQUFDO1NBQ0gsQ0FBQyxFQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsV0FBVyxFQUNoQixjQUFjLENBQ2YsQ0FBQzs7O2dCQTNFTCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQXhHOEIsVUFBVTtnQkFBckIsU0FBUztnQkFDcEIsUUFBUTs7O3dCQStHZCxLQUFLO3dCQVdMLEtBQUs7O3NCQTNIUjs7U0F5R2EsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiwgTHlDb21tb24sIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzE2cHggMjRweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzE2cHggMTZweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzhweCA0cHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb25zSXRlbToge1xuICAgIG1hcmdpbjogJzAgNHB4J1xuICB9XG59KTtcblxuY29uc3QgREVGQVVMVF9BU1BFQ1RfUkFUSU8gPSAnMTY6OSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb21tb246IEx5Q29tbW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgbGV0IHJlcXVpcmVPbkNoYW5nZXM6IGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5iZykge1xuICAgICAgdGhpcy5jb21tb24uYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tbW9uLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5jb21tb24uZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZU9uQ2hhbmdlcykge1xuICAgICAgdGhpcy5jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZENvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmNvbnRlbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtYWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9ucyk7XG4gICAgaWYgKCF0b0Jvb2xlYW4odGhpcy5kaXNhYmxlQWN0aW9uU3BhY2luZykpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuYWN0aW9uc0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtbWVkaWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYmdJbWc6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmdJbWdDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JhdGlvQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYmdJbWcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmJnSW1nKSB7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy5fY3JlYXRlQmdJbWdDbGFzcyh2YWwsIHRoaXMuX2JnSW1nQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgYmdJbWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnSW1nO1xuICB9XG5cbiAgLyoqIEFzcGVjdCByYXRpbyAqL1xuICBASW5wdXQoKVxuICBzZXQgcmF0aW8odmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgfVxuICB9XG4gIGdldCByYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJhdGlvKSB7XG4gICAgICB0aGlzLnJhdGlvID0gREVGQVVMVF9BU1BFQ1RfUkFUSU87XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQmdJbWdDbGFzcyh2YWw6IHN0cmluZywgaW5zdGFuY2U6IHN0cmluZykge1xuICAgIHRoaXMuX2JnSW1nID0gdmFsO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgYmFja2dyb3VuZC1pbWFnZWAsIGB1cmwoXCIke3ZhbH1cIilgKTtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUNhcmQtbWVkaWE6JHt2YWx9YCxcbiAgICAgIChcbiAgICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtgXG4gICAgICApLFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgaW5zdGFuY2UsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgdGhpcy5fcmF0aW9DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlDYXJkLW1lZGlhLWFyOiR7dmFsfWAsICh7XG4gICAgICAgICcmOmJlZm9yZSc6IHZhbC5zcGxpdCgnOicpLnJlZHVjZSgodmFsb3JBbnRlcmlvciwgdmFsb3JBY3R1YWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGAkeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSVgLFxuICAgICAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfSkgYXMgYW55O1xuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9yYXRpb0NsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iXX0=