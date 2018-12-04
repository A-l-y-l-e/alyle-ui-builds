import { __extends } from 'tslib';
import { Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, LyCommonModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_SIZE = 40;
/** @type {?} */
var DEFAULT_BG = 'background:base';
/** @type {?} */
var STYLES = ({
    root: {
        display: 'inline-flex',
        position: 'relative',
        fontSize: '1.25em',
        flexShrink: 0,
        alignItems: 'center',
        userSelect: 'none',
        borderRadius: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        '&>img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        }
    }
});
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyAvatarBase = /** @class */ (function () {
    function LyAvatarBase(_theme) {
        this._theme = _theme;
    }
    return LyAvatarBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyAvatarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyAvatarBase)))))));
var LyAvatar = /** @class */ (function (_super) {
    __extends(LyAvatar, _super);
    function LyAvatar(theme, renderer, _elementRef) {
        var _this = _super.call(this, theme) || this;
        _this._elementRef = _elementRef;
        /**
         * \@docs-private
         */
        _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _this.setAutoContrast();
        renderer.addClass(_elementRef.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyAvatar.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.size) {
                this._size = val;
                this._sizeClass = this._theme.addStyle("lyAvatar.size:" + val, {
                    width: val + "px",
                    height: val + "px",
                }, this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyAvatar.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateStyle(this._elementRef.nativeElement);
    };
    /**
     * @return {?}
     */
    LyAvatar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.ngOnChanges();
        }
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    LyAvatar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-avatar',
                    inputs: [
                        'bg',
                        'color',
                        'raised',
                        'outlined',
                        'elevation',
                        'shadowColor',
                    ]
                },] }
    ];
    /** @nocollapse */
    LyAvatar.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyAvatar.propDecorators = {
        size: [{ type: Input }]
    };
    return LyAvatar;
}(LyAvatarMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyAvatarModule = /** @class */ (function () {
    function LyAvatarModule() {
    }
    LyAvatarModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LyAvatar, LyCommonModule],
                    declarations: [LyAvatar]
                },] }
    ];
    return LyAvatarModule;
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

export { LyAvatarBase, LyAvatarMixinBase, LyAvatar, LyAvatarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYXZhdGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYXZhdGFyL2F2YXRhci50cyIsIm5nOi8vQGFseWxlL3VpL2F2YXRhci9hdmF0YXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfU0laRSA9IDQwO1xuY29uc3QgREVGQVVMVF9CRyA9ICdiYWNrZ3JvdW5kOmJhc2UnO1xuY29uc3QgU1RZTEVTID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udFNpemU6ICcxLjI1ZW0nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyY+aW1nJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgIH1cbiAgfVxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlBdmF0YXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUF2YXRhck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlBdmF0YXJCYXNlKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYXZhdGFyJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUF2YXRhciBleHRlbmRzIEx5QXZhdGFyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlBdmF0YXIuc2l6ZToke3ZhbH1gLCB7XG4gICAgICAgIHdpZHRoOiBgJHt2YWx9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke3ZhbH1weGAsXG4gICAgICB9LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NpemVDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZykge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlBdmF0YXIgfSBmcm9tICcuL2F2YXRhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUF2YXRhciwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUF2YXRhcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlBdmF0YXJNb2R1bGUgeyB9XG4i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