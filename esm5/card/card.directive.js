import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, toBoolean, styleTemplateToString, StyleCollection, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleRenderer } from '@alyle/ui';
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
var LyCardMedia = /** @class */ (function () {
    function LyCardMedia(el, renderer, styleRenderer) {
        this.el = el;
        this.renderer = renderer;
        this.styleRenderer = styleRenderer;
    }
    LyCardMedia_1 = LyCardMedia;
    Object.defineProperty(LyCardMedia.prototype, "bgImg", {
        get: function () {
            return this._bgImg;
        },
        set: function (val) {
            if (val !== this.bgImg) {
                this._bgImg = val;
                this[0x1] = this.styleRenderer.add(LyCardMedia_1.и + "--bgImg-" + val, function () { return function (className) { return className + "{display:block;background-size:cover;background-repeat:no-repeat;background-position:center;}"; }; }, STYLE_PRIORITY, this[0x1]);
                this.renderer.setStyle(this.el.nativeElement, "background-image", "url(\"" + val + "\")");
            }
        },
        enumerable: true,
        configurable: true
    });
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
                this[0x2] = this.styleRenderer.add(LyCardMedia_1.и + "--ratio-" + val, function () { return function (className) { return className + "::before{content:'';display:block;padding-top:" + val
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
    LyCardMedia.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: StyleRenderer }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyCardMedia.prototype, "bgImg", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2FyZC8iLCJzb3VyY2VzIjpbImNhcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDUixXQUFXLEVBQ1gsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBYW5DLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXVDLEVBQUUsR0FBYTtJQUMzRSxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLE9BQU87UUFDTCxTQUFTLEVBQUUsY0FBYztRQUN6QixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDZixJQUFJLEVBQUUsY0FBTyxPQUFBLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsMERBQXFELHFCQUFxQixDQUFDLENBQ3ZILENBQUMsS0FBSyxDQUFDLElBQUk7ZUFDTixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7ZUFDZixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLGVBQWU7Z0JBQzVDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENB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QUFVO2dCQUNKLFNBQVM7Z0JBQ0osYUFBYTs7SUEvQ3RDO1FBREMsS0FBSyxFQUFFOzRDQVlQO0lBZUQ7UUFEQyxLQUFLLEVBQUU7NENBYVA7SUE3Q1UsV0FBVztRQVB2QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsYUFBYTtnQkFDYixXQUFXO2FBQ1o7U0FDRixDQUFDO09BQ1csV0FBVyxDQThEdkI7SUFBRCxrQkFBQztDQUFBLEFBOURELElBOERDO1NBOURZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgVGhlbWVSZWYsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUNhcmRUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIENhcmQgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUNhcmRWYXJpYWJsZXMge1xuICBjYXJkPzogTHlDYXJkVGhlbWU7XG59XG5cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUNhcmRWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgY2FyZCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJG5hbWU6IEx5Q2FyZC7QuCxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MnB4O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICh0aGVtZS5jYXJkXG4gICAgICAgICAgJiYgdGhlbWUuY2FyZC5yb290XG4gICAgICAgICAgJiYgKHRoZW1lLmNhcmQucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgPyB0aGVtZS5jYXJkLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oY2FyZCkpXG4gICAgICAgICAgICA6IHRoZW1lLmNhcmQucm9vdChjYXJkKSlcbiAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX1gLFxuICAgIGNvbnRlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTZweCAyNHB4O30ke2NsYXNzTmFtZX0gJHt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKX17cGFkZGluZzoxNnB4IDE2cHg7fWAsXG4gICAgYWN0aW9uczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7cGFkZGluZzo4cHggMTJweDt9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e3BhZGRpbmc6OHB4IDRweDt9YCxcbiAgICBhY3Rpb25zSXRlbTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbjowIDRweDt9YFxuICB9O1xufTtcblxuY29uc3QgREVGQVVMVF9BU1BFQ1RfUkFUSU8gPSAnMTY6OSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDYXJkQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUNhcmRNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5Q2FyZEJhc2UpKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWNhcmQnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU3R5bGVSZW5kZXJlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGV4dGVuZHMgTHlDYXJkTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUNhcmQnO1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCByZXF1aXJlT25DaGFuZ2VzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9ICdiYWNrZ3JvdW5kOnByaW1hcnknO1xuICAgICAgcmVxdWlyZU9uQ2hhbmdlcyA9IHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVPbkNoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZU9uQ2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZC1jb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNhcmQ6IEx5Q2FyZFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhcmQuY2xhc3Nlcy5jb250ZW50KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLWFjdGlvbnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZEFjdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaXNhYmxlQWN0aW9uU3BhY2luZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjYXJkOiBMeUNhcmRcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmFjdGlvbnMpO1xuICAgIGlmICghdG9Cb29sZWFuKHRoaXMuZGlzYWJsZUFjdGlvblNwYWNpbmcpKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY2FyZC5jbGFzc2VzLmFjdGlvbnNJdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkLW1lZGlhJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3R5bGVSZW5kZXJlcixcbiAgICBMeUhvc3RDbGFzc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1lZGlhIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5Q2FyZE1lZGlhJztcbiAgcHJpdmF0ZSBfYmdJbWc6IHN0cmluZztcblxuICBwcml2YXRlIF9yYXRpbzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBiZ0ltZyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYmdJbWcpIHtcbiAgICAgIHRoaXMuX2JnSW1nID0gdmFsO1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5zdHlsZVJlbmRlcmVyLmFkZChcbiAgICAgICAgYCR7THlDYXJkTWVkaWEu0Lh9LS1iZ0ltZy0ke3ZhbH1gLFxuICAgICAgICAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO31gLFxuICAgICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgICAgdGhpc1sweDFdXG4gICAgICApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGBiYWNrZ3JvdW5kLWltYWdlYCwgYHVybChcIiR7dmFsfVwiKWApO1xuICAgIH1cbiAgfVxuICBnZXQgYmdJbWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnSW1nO1xuICB9XG4gIC8qKiBiZ0ltZyBjbGFzcyBuYW1lICovXG4gIFsweDFdOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFzcGVjdCByYXRpb1xuICAgKlxuICAgKiBlLmc6XG4gICAqIDQ6M1xuICAgKiAxOjFcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCByYXRpbyh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMuX3JhdGlvID0gdmFsO1xuICAgICAgdGhpc1sweDJdID0gdGhpcy5zdHlsZVJlbmRlcmVyLmFkZChcbiAgICAgICAgYCR7THlDYXJkTWVkaWEu0Lh9LS1yYXRpby0ke3ZhbH1gLFxuICAgICAgICAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX06OmJlZm9yZXtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7cGFkZGluZy10b3A6JHt2YWxcbiAgICAgICAgICAgICAgLnNwbGl0KCc6JylcbiAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKCtjdXJyZW50IC8gK3ByZXYgKiAxMDApLnRvU3RyaW5nKCkpfSU7fWAsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgICB0aGlzWzB4Ml1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCByYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF0aW87XG4gIH1cbiAgWzB4Ml06IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHN0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmF0aW8pIHtcbiAgICAgIHRoaXMucmF0aW8gPSBERUZBVUxUX0FTUEVDVF9SQVRJTztcbiAgICB9XG4gIH1cbn1cbiJdfQ==