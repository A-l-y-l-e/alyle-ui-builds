import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, toBoolean, st2c, StyleCollection, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleRenderer, WithStyles, Style } from '@alyle/ui';
export var STYLES = function (theme, ref) {
    var card = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyCard.и,
        root: function () { return function (className) { return className + "{display:block;overflow:hidden;border-radius:2px;}" + st2c(((theme.card
            && theme.card.root
            && (theme.card.root instanceof StyleCollection
                ? theme.card.root.setTransformer(function (fn) { return fn(card); })
                : theme.card.root(card)))), "" + className); }; },
        bgImg: function (className) { return className + "{display:block;background-size:cover;background-repeat:no-repeat;background-position:center;}"; },
        content: function (className) { return className + "{display:block;padding:16px 24px;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:16px 16px;}"; },
        actions: function (className) { return className + "{display:block;padding:8px 12px;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:8px 4px;}"; },
        actionsItem: function (className) { return className + "{margin:0 4px;}"; }
    };
};
var DEFAULT_ASPECT_RATIO = '16:9';
var STYLE_PRIORITY = -1;
/** @docs-private */
var LyCardBase = /** @class */ (function () {
    function LyCardBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCardBase;
}());
export { LyCardBase };
/** @docs-private */
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
         * @docs-private
         */
        _this.classes = _this.theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        return _this;
    }
    LyCard.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyCard.prototype.ngOnInit = function () {
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
    LyCard.prototype.ngOnDestroy = function () {
        this._removeRippleEvents();
    };
    LyCard.и = 'LyCard';
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    LyCard = tslib_1.__decorate([
        Directive({
            selector: 'ly-card',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor',
                'disableRipple',
            ],
            providers: [StyleRenderer]
        })
    ], LyCard);
    return LyCard;
}(LyCardMixinBase));
export { LyCard };
var LyCardContent = /** @class */ (function () {
    function LyCardContent(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    LyCardContent.prototype.ngOnInit = function () {
        this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
    };
    LyCardContent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    LyCardContent = tslib_1.__decorate([
        Directive({
            selector: 'ly-card-content'
        })
    ], LyCardContent);
    return LyCardContent;
}());
export { LyCardContent };
var LyCardActions = /** @class */ (function () {
    function LyCardActions(el, renderer, card) {
        this.el = el;
        this.renderer = renderer;
        this.card = card;
    }
    LyCardActions.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
        if (!toBoolean(this.disableActionSpacing)) {
            this.el.nativeElement.childNodes.forEach(function (element) {
                _this.renderer.addClass(element, _this.card.classes.actionsItem);
            });
        }
    };
    LyCardActions.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyCard }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyCardActions.prototype, "disableActionSpacing", void 0);
    LyCardActions = tslib_1.__decorate([
        Directive({
            selector: 'ly-card-actions'
        })
    ], LyCardActions);
    return LyCardActions;
}());
export { LyCardActions };
var ɵ0 = function (val) { return function () { return function (className) { return className + "{background-image:url('" + val + "');}"; }; }; };
/**
 * @dynamic
 */
var LyCardMedia = /** @class */ (function () {
    function LyCardMedia(sRenderer, card) {
        this.sRenderer = sRenderer;
        sRenderer.addClass(card.classes.bgImg);
    }
    LyCardMedia_1 = LyCardMedia;
    Object.defineProperty(LyCardMedia.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        /**
         * Aspect ratio
         *
         * e.g:
         * 4:3
         * 1:1
         */
        set: function (val) {
            if (val !== this.ratio) {
                this._ratio = val;
                this[0x2] = this.sRenderer.add(LyCardMedia_1.и + "--ratio-" + val, function () { return function (className) { return className + "::before{content:'';display:block;padding-top:" + val
                    .split(':')
                    .reduce(function (prev, current) { return (+current / +prev * 100).toString(); }) + "%;}"; }; }, STYLE_PRIORITY, this[0x2]);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyCardMedia.prototype.ngOnInit = function () {
        if (!this.ratio) {
            this.ratio = DEFAULT_ASPECT_RATIO;
        }
    };
    var LyCardMedia_1;
    LyCardMedia.и = 'LyCardMedia';
    LyCardMedia.$priority = STYLE_PRIORITY;
    LyCardMedia.ctorParameters = function () { return [
        { type: StyleRenderer },
        { type: LyCard }
    ]; };
    tslib_1.__decorate([
        Input(),
        Style(ɵ0)
    ], LyCardMedia.prototype, "bgImg", void 0);
    tslib_1.__decorate([
        Input()
    ], LyCardMedia.prototype, "ratio", null);
    LyCardMedia = LyCardMedia_1 = tslib_1.__decorate([
        Directive({
            selector: 'ly-card-media',
            providers: [
                StyleRenderer,
                LyHostClass
            ]
        })
    ], LyCardMedia);
    return LyCardMedia;
}());
export { LyCardMedia };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxTQUFTLEVBQ1QsSUFBSSxFQUNKLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDUixXQUFXLEVBQ1gsYUFBYSxFQUNiLFVBQVUsRUFDVixLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFhM0IsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBdUMsRUFBRSxHQUFhO0lBQzNFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTztRQUNMLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNmLElBQUksRUFBRSxjQUFPLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUywwREFBcUQsSUFBSSxDQUFDLENBQ3RHLENBQUMsS0FBSyxDQUFDLElBQUk7ZUFDTixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7ZUFDZixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLGVBQWU7Z0JBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBQSxFQUFFLElB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aW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIHN0MmMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZixcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIFdpdGhTdHlsZXMsXG4gIFN0eWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUNhcmRUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIENhcmQgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUNhcmRWYXJpYWJsZXMge1xuICBjYXJkPzogTHlDYXJkVGhlbWU7XG59XG5cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUNhcmRWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgY2FyZCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJG5hbWU6IEx5Q2FyZC7QuCxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MnB4O30ke3N0MmMoKFxuICAgICAgICAodGhlbWUuY2FyZFxuICAgICAgICAgICYmIHRoZW1lLmNhcmQucm9vdFxuICAgICAgICAgICYmICh0aGVtZS5jYXJkLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgID8gdGhlbWUuY2FyZC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNhcmQpKVxuICAgICAgICAgICAgOiB0aGVtZS5jYXJkLnJvb3QoY2FyZCkpXG4gICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBiZ0ltZzogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjt9YCxcbiAgICBjb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztwYWRkaW5nOjE2cHggMjRweDt9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e3BhZGRpbmc6MTZweCAxNnB4O31gLFxuICAgIGFjdGlvbnM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDEycHg7fSR7Y2xhc3NOYW1lfSAke3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpfXtwYWRkaW5nOjhweCA0cHg7fWAsXG4gICAgYWN0aW9uc0l0ZW06IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW46MCA0cHg7fWBcbiAgfTtcbn07XG5cbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5Q2FyZEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDYXJkTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUNhcmRCYXNlKSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZScsXG4gIF0sXG4gIHByb3ZpZGVyczogW1N0eWxlUmVuZGVyZXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBleHRlbmRzIEx5Q2FyZE1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlDYXJkJztcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcmVxdWlyZU9uQ2hhbmdlczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVpcmVPbkNoYW5nZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuY29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAZHluYW1pY1xuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3R5bGVSZW5kZXJlcixcbiAgICBMeUhvc3RDbGFzc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgV2l0aFN0eWxlcywgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5Q2FyZE1lZGlhJztcbiAgc3RhdGljIHJlYWRvbmx5ICRwcmlvcml0eSA9IFNUWUxFX1BSSU9SSVRZO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZz4oKHZhbCkgPT4gKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JhY2tncm91bmQtaW1hZ2U6dXJsKCcke3ZhbH0nKTt9YClcbiAgYmdJbWc6IHN0cmluZztcblxuICAvKipcbiAgICogQXNwZWN0IHJhdGlvXG4gICAqXG4gICAqIGUuZzpcbiAgICogNDozXG4gICAqIDE6MVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgICB0aGlzWzB4Ml0gPSB0aGlzLnNSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5Q2FyZE1lZGlhLtC4fS0tcmF0aW8tJHt2YWx9YCxcbiAgICAgICAgKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztkaXNwbGF5OmJsb2NrO3BhZGRpbmctdG9wOiR7dmFsXG4gICAgICAgICAgICAgIC5zcGxpdCgnOicpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+ICgrY3VycmVudCAvICtwcmV2ICogMTAwKS50b1N0cmluZygpKX0lO31gLFxuICAgICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgICAgdGhpc1sweDJdXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICB9XG4gIFsweDJdOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgc1JlbmRlcmVyOiBTdHlsZVJlbmRlcmVyLFxuICAgIGNhcmQ6IEx5Q2FyZFxuICApIHtcbiAgICBzUmVuZGVyZXIuYWRkQ2xhc3MoY2FyZC5jbGFzc2VzLmJnSW1nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5yYXRpbyA9IERFRkFVTFRfQVNQRUNUX1JBVElPO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9iZ0ltZzogc3RyaW5nO1xufVxuIl19