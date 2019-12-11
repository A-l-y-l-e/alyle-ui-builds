import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, toBoolean, styleTemplateToString, StyleCollection, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleRenderer, WithStyles, Style } from '@alyle/ui';
export var STYLES = function (theme, ref) {
    var card = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        $name: LyCard.и,
        root: function () { return function (className) { return className + "{display:block;overflow:hidden;border-radius:2px;}" + styleTemplateToString(((theme.card
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDUixXQUFXLEVBQ1gsYUFBYSxFQUNiLFVBQVUsRUFDVixLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFhM0IsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBdUMsRUFBRSxHQUFhO0lBQzNFLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsT0FBTztRQUNMLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNmLElBQUksRUFBRSxjQUFPLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUywwREFBcUQscUJBQXFCLENBQUMsQ0FDdkgsQ0FBQyxLQUFLLENBQUMsSUFBSTtlQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTtlQUNmLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDNUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFBLEVB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dCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgVGhlbWVSZWYsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICBXaXRoU3R5bGVzLFxuICBTdHlsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDYXJkVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBDYXJkIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlDYXJkVmFyaWFibGVzIHtcbiAgY2FyZD86IEx5Q2FyZFRoZW1lO1xufVxuXG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlDYXJkVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgICRuYW1lOiBMeUNhcmQu0LgsXG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjJweDt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAodGhlbWUuY2FyZFxuICAgICAgICAgICYmIHRoZW1lLmNhcmQucm9vdFxuICAgICAgICAgICYmICh0aGVtZS5jYXJkLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgID8gdGhlbWUuY2FyZC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNhcmQpKVxuICAgICAgICAgICAgOiB0aGVtZS5jYXJkLnJvb3QoY2FyZCkpXG4gICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBiZ0ltZzogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjt9YCxcbiAgICBjb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztwYWRkaW5nOjE2cHggMjRweDt9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e3BhZGRpbmc6MTZweCAxNnB4O31gLFxuICAgIGFjdGlvbnM6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDEycHg7fSR7Y2xhc3NOYW1lfSAke3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpfXtwYWRkaW5nOjhweCA0cHg7fWAsXG4gICAgYWN0aW9uc0l0ZW06IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW46MCA0cHg7fWBcbiAgfTtcbn07XG5cbmNvbnN0IERFRkFVTFRfQVNQRUNUX1JBVElPID0gJzE2OjknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5Q2FyZEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDYXJkTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUNhcmRCYXNlKSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZScsXG4gIF0sXG4gIHByb3ZpZGVyczogW1N0eWxlUmVuZGVyZXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZCBleHRlbmRzIEx5Q2FyZE1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlDYXJkJztcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcmVxdWlyZU9uQ2hhbmdlczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMuYmcpIHtcbiAgICAgIHRoaXMuYmcgPSAnYmFja2dyb3VuZDpwcmltYXJ5JztcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlT25DaGFuZ2VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlcXVpcmVPbkNoYW5nZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQtY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jYXJkLmNsYXNzZXMuY29udGVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1hY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZUFjdGlvblNwYWNpbmc6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2FyZDogTHlDYXJkXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zKTtcbiAgICBpZiAoIXRvQm9vbGVhbih0aGlzLmRpc2FibGVBY3Rpb25TcGFjaW5nKSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5hY3Rpb25zSXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAZHluYW1pY1xuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3R5bGVSZW5kZXJlcixcbiAgICBMeUhvc3RDbGFzc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgV2l0aFN0eWxlcywgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5Q2FyZE1lZGlhJztcbiAgc3RhdGljIHJlYWRvbmx5ICRwcmlvcml0eSA9IFNUWUxFX1BSSU9SSVRZO1xuXG4gIHByaXZhdGUgX3JhdGlvOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgQFN0eWxlPHN0cmluZz4oKHZhbCkgPT4gKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2JhY2tncm91bmQtaW1hZ2U6dXJsKCcke3ZhbH0nKTt9YClcbiAgYmdJbWc6IHN0cmluZztcblxuICAvKipcbiAgICogQXNwZWN0IHJhdGlvXG4gICAqXG4gICAqIGUuZzpcbiAgICogNDozXG4gICAqIDE6MVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHJhdGlvKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5fcmF0aW8gPSB2YWw7XG4gICAgICB0aGlzWzB4Ml0gPSB0aGlzLnNSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5Q2FyZE1lZGlhLtC4fS0tcmF0aW8tJHt2YWx9YCxcbiAgICAgICAgKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjpiZWZvcmV7Y29udGVudDonJztkaXNwbGF5OmJsb2NrO3BhZGRpbmctdG9wOiR7dmFsXG4gICAgICAgICAgICAgIC5zcGxpdCgnOicpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+ICgrY3VycmVudCAvICtwcmV2ICogMTAwKS50b1N0cmluZygpKX0lO31gLFxuICAgICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgICAgdGhpc1sweDJdXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgcmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICB9XG4gIFsweDJdOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgc1JlbmRlcmVyOiBTdHlsZVJlbmRlcmVyLFxuICAgIGNhcmQ6IEx5Q2FyZFxuICApIHtcbiAgICBzUmVuZGVyZXIuYWRkQ2xhc3MoY2FyZC5jbGFzc2VzLmJnSW1nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5yYXRpbyA9IERFRkFVTFRfQVNQRUNUX1JBVElPO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9iZ0ltZzogc3RyaW5nO1xufVxuIl19