import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'startTop';
var DEFAULT_BG = 'primary';
var DEFAULT_POSITION_VALUE = {
    after: '-11px',
    above: '-11px'
};
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
        boxSizing: 'border-box',
        '&': theme.badge ? theme.badge.root : null
    },
    relative: {
        position: 'relative'
    }
}); };
/** @docs-private */
var LyBadgeBase = /** @class */ (function () {
    function LyBadgeBase(_theme) {
        this._theme = _theme;
    }
    return LyBadgeBase;
}());
export { LyBadgeBase };
/** @docs-private */
export var LyBadgeMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyBadgeBase))))))));
var LyBadge = /** @class */ (function (_super) {
    tslib_1.__extends(LyBadge, _super);
    function LyBadge(_el, _theme, _renderer) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES);
        _this.setAutoContrast();
        _this._badgeElementRef = _this._el.nativeElement;
        return _this;
    }
    Object.defineProperty(LyBadge.prototype, "content", {
        get: function () {
            return this._content;
        },
        /** The content for the badge */
        set: function (val) {
            if (val !== this.content) {
                this._content = val;
                this._createBadge();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBadge.prototype, "position", {
        get: function () {
            return this._position;
        },
        /** The position for the badge */
        set: function (val) {
            if (val !== this.position) {
                this._position = val;
                this._positionClass = this._theme.addStyle("ly-badge.position:" + val, function (theme) {
                    var sty = theme.badge.position && theme.badge.position[val] || val === DEFAULT_POSITION ? DEFAULT_POSITION_VALUE : null;
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
        get: function () {
            return this._lyBadgeBg;
        },
        set: function (val) {
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
    LyBadge.prototype.ngOnChanges = function () {
        if (!this.content) {
            this.updateStyle(this._el);
        }
    };
    LyBadge.prototype.ngOnInit = function () {
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
    LyBadge.prototype.ngOnDestroy = function () {
        if (this._elContainer) {
            this._renderer.removeChild(this._el.nativeElement, this._elContainer);
        }
    };
    LyBadge.prototype._createBadge = function () {
        if (!this._elContainer) {
            var container = this._elContainer = this._renderer.createElement('div');
            this._renderer.appendChild(this._el.nativeElement, container);
            this._badgeElementRef = container;
            /** Add position relative */
            this._renderer.addClass(this._el.nativeElement, this.classes.relative);
        }
        this._elContainer.textContent = "" + this.content;
    };
    tslib_1.__decorate([
        Input('lyBadge'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LyBadge.prototype, "content", null);
    tslib_1.__decorate([
        Input('lyBadgePosition'),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyBadge.prototype, "position", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyBadge.prototype, "lyBadgeBg", null);
    LyBadge = tslib_1.__decorate([
        Directive({
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
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            LyTheme2,
            Renderer2])
    ], LyBadge);
    return LyBadge;
}(LyBadgeMixinBase));
export { LyBadge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvYmFkZ2UvIiwic291cmNlcyI6WyJiYWRnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFFaEIsTUFBTSxXQUFXLENBQUM7QUFFckIsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7QUFDcEMsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzdCLElBQU0sc0JBQXNCLEdBQUc7SUFDN0IsS0FBSyxFQUFFLE9BQU87SUFDZCxLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFDRixNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztJQUNoRCxTQUFTLEVBQUUsY0FBYztJQUN6QixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsTUFBTTtRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsUUFBUTtRQUNwQixZQUFZLEVBQUUsVUFBVTtRQUN4QixhQUFhLEVBQUUsTUFBTTtRQUNyQixNQUFNLEVBQUUsQ0FBQztRQUNULFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUMzQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVO1FBQ3ZDLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVB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biAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnc3RhcnRUb3AnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcbmNvbnN0IERFRkFVTFRfUE9TSVRJT05fVkFMVUUgPSB7XG4gIGFmdGVyOiAnLTExcHgnLFxuICBhYm92ZTogJy0xMXB4J1xufTtcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMjJweCcsXG4gICAgaGVpZ2h0OiAnMjJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgekluZGV4OiAxLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDEyKSxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICcmJzogdGhlbWUuYmFkZ2UgPyB0aGVtZS5iYWRnZS5yb290IDogbnVsbFxuICB9LFxuICByZWxhdGl2ZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5QmFkZ2VCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUJhZGdlTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlCYWRnZUJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYmFkZ2UsIFtseUJhZGdlXScsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5QmFkZ2UgZXh0ZW5kcyBMeUJhZGdlTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2VsQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgX2JhZGdlRWxlbWVudFJlZjogYW55O1xuICBwcml2YXRlIF9seUJhZGdlQmdDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY29udGVudCBmb3IgdGhlIGJhZGdlICovXG4gIEBJbnB1dCgnbHlCYWRnZScpXG4gIHNldCBjb250ZW50KHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLl9jb250ZW50ID0gdmFsO1xuICAgICAgdGhpcy5fY3JlYXRlQmFkZ2UoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIC8qKiBUaGUgcG9zaXRpb24gZm9yIHRoZSBiYWRnZSAqL1xuICBASW5wdXQoJ2x5QmFkZ2VQb3NpdGlvbicpXG4gIHNldCBwb3NpdGlvbih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fcG9zaXRpb25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1iYWRnZS5wb3NpdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eSA9IHRoZW1lLmJhZGdlIS5wb3NpdGlvbiAmJiB0aGVtZS5iYWRnZSEucG9zaXRpb24hW3ZhbF0gfHwgdmFsID09PSBERUZBVUxUX1BPU0lUSU9OID8gREVGQVVMVF9QT1NJVElPTl9WQUxVRSA6IG51bGw7XG4gICAgICAgIGlmIChzdHkpIHtcbiAgICAgICAgICByZXR1cm4gc3R5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlCYWRnZS5wb3NpdGlvbiBcXGAke3ZhbH1cXGAgbm90IGZvdW5kIGluIFxcYFRoZW1lVmFyaWFibGVzXFxgYCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgYmFkZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5QmFkZ2VCZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlCYWRnZUJnO1xuICB9XG4gIHNldCBseUJhZGdlQmcodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5QmFkZ2VCZykge1xuICAgICAgdGhpcy5fbHlCYWRnZUJnID0gdmFsO1xuICAgICAgdGhpcy5fbHlCYWRnZUJnQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktYmFkZ2UuYmc6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKVxuICAgICAgfSksXG4gICAgICB0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuX2x5QmFkZ2VCZ0NsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2x5QmFkZ2VCZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fYmFkZ2VFbGVtZW50UmVmID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8qKiBBZGQgcm9vdCBzdHlsZXMgKi9cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9iYWRnZUVsZW1lbnRSZWYsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgIC8qKiBTZXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xuICAgIGlmICghdGhpcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IERFRkFVTFRfUE9TSVRJT047XG4gICAgfVxuXG4gICAgLyoqIFNldCBkZWZhdWx0IGJnICovXG4gICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5seUJhZGdlQmcpIHtcbiAgICAgIHRoaXMubHlCYWRnZUJnID0gREVGQVVMVF9CRztcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZWxDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2VsQ29udGFpbmVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVCYWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbENvbnRhaW5lciA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2JhZGdlRWxlbWVudFJlZiA9IGNvbnRhaW5lcjtcblxuICAgICAgLyoqIEFkZCBwb3NpdGlvbiByZWxhdGl2ZSAqL1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJlbGF0aXZlKTtcbiAgICB9XG4gICAgdGhpcy5fZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmNvbnRlbnR9YDtcbiAgfVxuXG59XG4iXX0=