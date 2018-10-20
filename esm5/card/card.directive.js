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
export { LyCard };
if (false) {
    /** @type {?} */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztBQUUxRSxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztJQUFLLE9BQUEsQ0FBQztRQUN6QyxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxXQUFXOztZQUNwQixHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUc7Z0JBQy9CLE9BQU8sRUFBRSxXQUFXO2FBQ3JCO2VBQ0Y7UUFDRCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsVUFBVTs7WUFDbkIsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFHO2dCQUMvQixPQUFPLEVBQUUsU0FBUzthQUNuQjtlQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLE9BQU87U0FDaEI7S0FDRixDQUFDO0FBdkJ3QyxDQXVCeEMsQ0FBQzs7O0FBRUgsSUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUM7O0FBRXBDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQU94QixnQkFDVSxPQUNBLElBQ0EsVUFDWSxNQUFnQjtRQUg1QixVQUFLLEdBQUwsS0FBSztRQUNMLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFB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Ozs7O2NBQUMsR0FBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNwQyxxQkFBbUIsR0FBSyxFQUFFLENBQUM7WUFDekIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsYUFBYSxFQUFFLFdBQVc7Z0JBQzNELHlCQUFPLENBQUM7b0JBQ04sVUFBVSxFQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsTUFBRztvQkFDckQsT0FBTyxFQUFFLElBQU07b0JBQ2YsT0FBTyxFQUFFLE9BQU87aUJBQ2pCLENBQVEsRUFBQzthQUNYLENBQUM7U0FDSCxDQUFDLEVBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLGNBQWMsQ0FDZixDQUFDOzs7Z0JBM0VMLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBM0c4QixVQUFVO2dCQUFyQixTQUFTO2dCQUNwQixRQUFROzs7d0JBa0hkLEtBQUs7d0JBV0wsS0FBSzs7c0JBOUhSOztTQTRHYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgdG9Cb29sZWFuLCBMeUNvbW1vbiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xuICB9LFxuICBjb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwYWRkaW5nOiAnMTZweCAyNHB4JyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMTZweCAxNnB4J1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogJzhweCAxMnB4JyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnOHB4IDRweCdcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnNJdGVtOiB7XG4gICAgbWFyZ2luOiAnMCA0cHgnXG4gIH1cbn0pO1xuXG5jb25zdCBERUZBVUxUX0FTUEVDVF9SQVRJTyA9ICcxNjo5JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb21tb246IEx5Q29tbW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgbGV0IHJlcXVpcmVPbkNoYW5nZXM6IGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmNvbW1vbi5iZykge1xuICAgICAgdGhpcy5jb21tb24uYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29tbW9uLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5jb21tb24uZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBpZiAoIXRoaXMuY29tbW9uLnNoYWRvd0NvbG9yKSB7XG4gICAgLy8gICB0aGlzLmNvbW1vbi5zaGFkb3dDb2xvciA9ICdjb2xvclNoYWRvdyc7XG4gICAgLy8gICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICAvLyB9XG4gICAgaWYgKHJlcXVpcmVPbkNoYW5nZXMpIHtcbiAgICAgIHRoaXMuY29tbW9uLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gaWYgKHRoaXMuZWxldmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAvLyAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgLy8gfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuY29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1tZWRpYSdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTWVkaWEgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9iZ0ltZzogc3RyaW5nO1xuICBwcml2YXRlIF9iZ0ltZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmF0aW86IHN0cmluZztcbiAgcHJpdmF0ZSBfcmF0aW9DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBiZ0ltZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmdJbWcpIHtcbiAgICAgIHRoaXMuX2JnSW1nQ2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCwgdGhpcy5fYmdJbWdDbGFzcyk7XG4gICAgfVxuICB9XG4gIGdldCBiZ0ltZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdJbWc7XG4gIH1cblxuICAvKiogQXNwZWN0IHJhdGlvICovXG4gIEBJbnB1dCgpXG4gIHNldCByYXRpbyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nLCBpbnN0YW5jZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5Q2FyZC1tZWRpYToke3ZhbH1gLFxuICAgICAgKFxuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYGJhY2tncm91bmQtc2l6ZTogY292ZXI7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2BcbiAgICAgICksXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUFzcGVjdFJhdGlvQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yYXRpbyA9IHZhbDtcbiAgICB0aGlzLl9yYXRpb0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseUNhcmQtbWVkaWEtYXI6JHt2YWx9YCwgKHtcbiAgICAgICAgJyY6YmVmb3JlJzogdmFsLnNwbGl0KCc6JykucmVkdWNlKCh2YWxvckFudGVyaW9yLCB2YWxvckFjdHVhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogYCR7K3ZhbG9yQWN0dWFsIC8gK3ZhbG9yQW50ZXJpb3IgKiAxMDB9JWAsXG4gICAgICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX3JhdGlvQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cbn1cbiJdfQ==