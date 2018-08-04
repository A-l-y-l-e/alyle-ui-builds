/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, shadowBuilder, defaultEntry, toBoolean } from '@alyle/ui';
import { LyCardClasses } from './card.service';
var /** @type {?} */ DEFAULT_ELEVATION = 2;
var /** @type {?} */ DEFAULT_ASPECT_RATIO = '16:9';
var LyCard = /** @class */ (function () {
    function LyCard(classes, styler, el, renderer) {
        this.classes = classes;
        this.styler = styler;
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(LyCard.prototype, "elevation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elevation;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.elevation !== val) {
                var /** @type {?} */ newClass = this._createElevationClass(val);
                this._elevationClass = this.styler.updateClass(this.el.nativeElement, this.renderer, newClass, this._elevationClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyCard.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, this.classes.card);
        if (this.elevation === void 0) {
            this.elevation = DEFAULT_ELEVATION;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyCard.prototype._createElevationClass = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        this._elevation = defaultEntry(val, DEFAULT_ELEVATION);
        return this.styler.setUpStyleSecondary("k-card-e:" + this.elevation, function (theme) {
            return ("background-color:" + theme.background.primary + ";" +
                "position:relative;" +
                // `padding:24px;` + // remove this
                "border-radius:2px;" +
                ("" + shadowBuilder(_this.elevation)));
        });
    };
    LyCard.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card'
                },] },
    ];
    /** @nocollapse */
    LyCard.ctorParameters = function () { return [
        { type: LyCardClasses, },
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    LyCard.propDecorators = {
        "elevation": [{ type: Input },],
    };
    return LyCard;
}());
export { LyCard };
function LyCard_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCard.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCard.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCard.propDecorators;
    /** @type {?} */
    LyCard.prototype._elevation;
    /** @type {?} */
    LyCard.prototype._elevationClass;
    /** @type {?} */
    LyCard.prototype.classes;
    /** @type {?} */
    LyCard.prototype.styler;
    /** @type {?} */
    LyCard.prototype.el;
    /** @type {?} */
    LyCard.prototype.renderer;
}
var LyCardContent = /** @class */ (function () {
    function LyCardContent(el, renderer, classes) {
        this.el = el;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    LyCardContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, this.classes.cardContent);
    };
    LyCardContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-content'
                },] },
    ];
    /** @nocollapse */
    LyCardContent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyCardClasses, },
    ]; };
    return LyCardContent;
}());
export { LyCardContent };
function LyCardContent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardContent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardContent.ctorParameters;
    /** @type {?} */
    LyCardContent.prototype.el;
    /** @type {?} */
    LyCardContent.prototype.renderer;
    /** @type {?} */
    LyCardContent.prototype.classes;
}
var LyCardActions = /** @class */ (function () {
    function LyCardActions(el, renderer, classes) {
        this.el = el;
        this.renderer = renderer;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    LyCardActions.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.addClass(this.el.nativeElement, this.classes.cardActions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(function (element) {
                _this.renderer.addClass(element, _this.classes.cardActionsItem);
            });
        }
    };
    LyCardActions.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-actions'
                },] },
    ];
    /** @nocollapse */
    LyCardActions.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyCardClasses, },
    ]; };
    LyCardActions.propDecorators = {
        "disableActionSpacing": [{ type: Input },],
    };
    return LyCardActions;
}());
export { LyCardActions };
function LyCardActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardActions.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCardActions.propDecorators;
    /** @type {?} */
    LyCardActions.prototype.disableActionSpacing;
    /** @type {?} */
    LyCardActions.prototype.el;
    /** @type {?} */
    LyCardActions.prototype.renderer;
    /** @type {?} */
    LyCardActions.prototype.classes;
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
                var /** @type {?} */ newClass = this._createBgImgClass(val);
                this._bgImgClass = this.theme.updateClass(this.el.nativeElement, this.renderer, newClass, this._bgImgClass);
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
        set: /**
         * Aspect ratio
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.ratio) {
                var /** @type {?} */ newClass = this._createAspectRatioClass(val);
                this._ratioClass = this.theme.updateClass(this.el.nativeElement, this.renderer, newClass, this._ratioClass);
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
     * @return {?}
     */
    LyCardMedia.prototype._createBgImgClass = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._bgImg = val;
        this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
        return this.theme.setUpStyle("k-card-media:" + val, function () {
            return ("display:block;" +
                "background-size: cover;" +
                "background-repeat: no-repeat;" +
                "background-position: center;");
        });
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
        return this.theme.setUpStyle("k-card-media-ar:" + val, {
            ':before': function () {
                return (val.split(':').reduce(function (valorAnterior, valorActual) {
                    return ("padding-top:" + +valorActual / +valorAnterior * 100 + "%;" +
                        "content:'';" +
                        "display:block;");
                }));
            }
        });
    };
    LyCardMedia.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card-media'
                },] },
    ];
    /** @nocollapse */
    LyCardMedia.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyTheme2, },
    ]; };
    LyCardMedia.propDecorators = {
        "bgImg": [{ type: Input },],
        "ratio": [{ type: Input },],
    };
    return LyCardMedia;
}());
export { LyCardMedia };
function LyCardMedia_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardMedia.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardMedia.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCardMedia.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLHFCQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixxQkFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUM7O0lBbUJsQyxnQkFDVSxTQUNBLFFBQ0EsSUFDQTtRQUhBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07UUFDTixPQUFFLEdBQUYsRUFBRTtRQUNGLGFBQVEsR0FBUixRQUFRO0tBQ2I7MEJBZkQsNkJBQVM7Ozs7UUFNYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7a0JBUmEsR0FBb0I7WUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEdBQUcsRUFBRTtnQkFDMUIscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDdEg7Ozs7Ozs7O0lBYUgseUJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FB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QjtRQUxLLENBS0wsQ0FDRixDQUFDOzs7Ozs7SUFHSSw2Q0FBdUI7Ozs7Y0FBQyxHQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzFCLHFCQUFtQixHQUFLLEVBQUU7WUFDeEIsU0FBUyxFQUFFO2dCQUNULE9BQU8sQ0FDTCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGFBQWEsRUFBRSxXQUFXO29CQUMvQyxPQUFPLENBQ0wsaUJBQWUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxPQUFJO3dCQUN0RCxhQUFhO3dCQUNiLGdCQUFnQixDQUNqQixDQUFDO2lCQUNILENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRixDQUNGLENBQUM7OztnQkEzRUwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkEzRjhCLFVBQVU7Z0JBQXJCLFNBQVM7Z0JBQ3BCLFFBQVE7OzswQkFrR2QsS0FBSzswQkFZTCxLQUFLOztzQkEvR1I7O1NBNEZhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIGRlZmF1bHRFbnRyeSwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5Q2FyZENsYXNzZXMgfSBmcm9tICcuL2NhcmQuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gMjtcbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9lbGV2YXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVsZXZhdGlvbih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh0aGlzLmVsZXZhdGlvbiAhPT0gdmFsKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9lbGV2YXRpb25DbGFzcyA9IHRoaXMuc3R5bGVyLnVwZGF0ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsZXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzLFxuICAgIHByaXZhdGUgc3R5bGVyOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZCk7XG4gICAgaWYgKHRoaXMuZWxldmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxldmF0aW9uQ2xhc3ModmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB0aGlzLl9lbGV2YXRpb24gPSBkZWZhdWx0RW50cnkodmFsLCBERUZBVUxUX0VMRVZBVElPTik7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGVyLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55PihcbiAgICAgIGBrLWNhcmQtZToke3RoaXMuZWxldmF0aW9ufWAsXG4gICAgICB0aGVtZSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICAvLyBgcGFkZGluZzoyNHB4O2AgKyAvLyByZW1vdmUgdGhpc1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeUNhcmRDbGFzc2VzXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jYXJkQ29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlDYXJkQ2xhc3Nlc1xuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNhcmRBY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNsYXNzZXMuY2FyZEFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2JnSW1nOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnSW1nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuICBwcml2YXRlIF9yYXRpb0NsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGJnSW1nKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5iZ0ltZykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVCZ0ltZ0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9iZ0ltZ0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9iZ0ltZ0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGJnSW1nKCkge1xuICAgIHJldHVybiB0aGlzLl9iZ0ltZztcbiAgfVxuXG4gIC8qKiBBc3BlY3QgcmF0aW8gKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9yYXRpb0NsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9yYXRpb0NsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCZ0ltZ0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmdJbWcgPSB2YWw7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgay1jYXJkLW1lZGlhOiR7dmFsfWAsXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtgICtcbiAgICAgICAgYGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YCArXG4gICAgICAgIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBc3BlY3RSYXRpb0NsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBrLWNhcmQtbWVkaWEtYXI6JHt2YWx9YCwge1xuICAgICAgICAnOmJlZm9yZSc6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdmFsLnNwbGl0KCc6JykucmVkdWNlKCh2YWxvckFudGVyaW9yLCB2YWxvckFjdHVhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGBwYWRkaW5nLXRvcDokeyt2YWxvckFjdHVhbCAvICt2YWxvckFudGVyaW9yICogMTAwfSU7YCArXG4gICAgICAgICAgICAgICAgYGNvbnRlbnQ6Jyc7YCArXG4gICAgICAgICAgICAgICAgYGRpc3BsYXk6YmxvY2s7YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19