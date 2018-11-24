/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyIconService } from './icon.service';
import { take } from 'rxjs/operators';
import { Platform, LyTheme2, mixinStyleUpdater, mixinBg, mixinFlat, mixinColor, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/**
 * \@docs-private
 */
export class LyIconBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
if (false) {
    /** @type {?} */
    LyIconBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyIconMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(LyIconBase))))))));
export class LyIcon extends LyIconMixinBase {
    /**
     * @param {?} iconService
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} theme
     */
    constructor(iconService, _el, _renderer, theme) {
        super(theme);
        this.iconService = iconService;
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
    }
    /**
     * deprecated
     * @param {?} val
     * @return {?}
     */
    set src(val) {
        this._src = val;
        if (Platform.isBrowser) {
            if (val) {
                /** @type {?} */
                const key = `_url:${val}`;
                this.iconService.setSvg(key, val);
                this._prepareSvgIcon(this.iconService.getSvg(key));
            }
        }
        else {
            this._appendDefaultSvgIcon();
        }
    }
    /**
     * @return {?}
     */
    get src() {
        return this._src;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set icon(val) {
        this._icon = val;
        if (Platform.isBrowser) {
            this._prepareSvgIcon(this.iconService.getSvg(val));
        }
        else {
            this._appendDefaultSvgIcon();
        }
    }
    /**
     * @return {?}
     */
    get fontSet() {
        return this._fontSet;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set fontSet(key) {
        this._fontSet = key;
    }
    /**
     * @return {?}
     */
    get fontIcon() {
        return this._fontIcon;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set fontIcon(key) {
        this._fontIcon = key;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.fontSet || this.fontIcon) {
            this._updateFontClass();
        }
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    _isDefault() {
        return !(this.src || this.icon || this.fontSet);
    }
    /**
     * @param {?} svgIcon
     * @return {?}
     */
    _prepareSvgIcon(svgIcon) {
        if (svgIcon.svg) {
            this._cleanIcon();
            this._appendChild((/** @type {?} */ (svgIcon.svg.cloneNode(true))));
        }
        else {
            svgIcon.obs
                .pipe(take(1))
                .subscribe((svgElement) => {
                this._cleanIcon();
                this._appendChild((/** @type {?} */ (svgElement.cloneNode(true))));
            });
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _appendChild(svg) {
        this._renderer.addClass(svg, this.iconService.classes.svg);
        this._renderer.appendChild(this._el.nativeElement, svg);
    }
    /**
     * @return {?}
     */
    _appendDefaultSvgIcon() {
        this._appendChild(this.iconService.defaultSvgIcon);
    }
    /**
     * @return {?}
     */
    _updateClass() {
        if (this._isDefault()) {
            this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateClass();
        this._theme.addStyle('lyIconRoot', theme => (`font-size:${theme.icon.fontSize};` +
            `width:1em;` +
            `height:1em;` +
            `display:inline-flex;`), this._el.nativeElement, undefined, STYLE_PRIORITY);
    }
    /**
     * run only browser
     * remove current icon
     * @return {?}
     */
    _cleanIcon() {
        /** @type {?} */
        const icon = this._el.nativeElement.querySelector('svg');
        if (icon) {
            this._renderer.removeChild(this._el, icon);
        }
    }
    /**
     * @return {?}
     */
    _updateFontClass() {
        /** @type {?} */
        const currentClass = this._currentClass;
        /** @type {?} */
        const fontSetKey = this.fontSet;
        /** @type {?} */
        const icon = this.fontIcon;
        /** @type {?} */
        const el = this._el.nativeElement;
        /** @type {?} */
        const iconClass = this.iconService.getFontClass(fontSetKey);
        if (currentClass) {
            this._renderer.removeClass(el, currentClass);
        }
        if (this._previousFontSet) {
            if (this._previousFontSet.class) {
                this._renderer.removeClass(el, this._previousFontSet.class);
            }
        }
        if (iconClass) {
            this._previousFontSet = iconClass;
        }
        else {
            Error(`Icon with key${fontSetKey} not found`);
        }
        this._currentClass = `${iconClass.prefix}${icon}`;
        this._renderer.addClass(el, this._currentClass);
    }
}
LyIcon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-icon',
                inputs: [
                    'bg',
                    'flat',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                ],
            },] }
];
/** @nocollapse */
LyIcon.ctorParameters = () => [
    { type: LyIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 }
];
LyIcon.propDecorators = {
    src: [{ type: Input }],
    icon: [{ type: Input }],
    fontSet: [{ type: Input }],
    fontIcon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyIcon.prototype._src;
    /** @type {?} */
    LyIcon.prototype._icon;
    /** @type {?} */
    LyIcon.prototype._fontSet;
    /** @type {?} */
    LyIcon.prototype._previousFontSet;
    /** @type {?} */
    LyIcon.prototype._currentClass;
    /** @type {?} */
    LyIcon.prototype._fontIcon;
    /** @type {?} */
    LyIcon.prototype.iconService;
    /** @type {?} */
    LyIcon.prototype._el;
    /** @type {?} */
    LyIcon.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBNkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7O01BRTFKLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7QUFHekIsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFDUyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQ3JCLENBQUM7Q0FDTjs7O0lBRkcsNEJBQXVCOzs7Ozs7QUFLM0IsTUFBTSxPQUFPLGVBQWUsR0FBRyxpQkFBaUIsQ0FDaEQsT0FBTyxDQUNMLFNBQVMsQ0FDUCxVQUFVLENBQ1IsV0FBVyxDQUNULGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFlL0MsTUFBTSxPQUFPLE1BQU8sU0FBUSxlQUFlOzs7Ozs7O0lBdUR6QyxZQUNVLFdBQTBCLEVBQzFCLEdBQWUsRUFDZixTQUFvQixFQUM1QixLQUFlO1FBRWYsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTEwsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFJNUIsSUFB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OztJQUNyQix1QkFBc0I7O0lBQ3RCLDBCQUF5Qjs7SUFDekIsa0NBQTJDOztJQUMzQywrQkFBOEI7O0lBQzlCLDJCQUEwQjs7SUFrRHhCLDZCQUFrQzs7SUFDbEMscUJBQXVCOztJQUN2QiwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUljb25TZXJ2aWNlLCBTdmdJY29uLCBGb250Q2xhc3NPcHRpb25zIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgbWl4aW5TdHlsZVVwZGF0ZXIsIG1peGluQmcsIG1peGluRmxhdCwgbWl4aW5Db2xvciwgbWl4aW5SYWlzZWQsIG1peGluT3V0bGluZWQsIG1peGluRWxldmF0aW9uLCBtaXhpblNoYWRvd0NvbG9yIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUljb25CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUljb25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluRmxhdChcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5SWNvbkJhc2UpKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbiBleHRlbmRzIEx5SWNvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udFNldDogc3RyaW5nO1xuICBwcml2YXRlIF9wcmV2aW91c0ZvbnRTZXQ6IEZvbnRDbGFzc09wdGlvbnM7XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mb250SWNvbjogc3RyaW5nO1xuXG4gIC8qKiBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBzcmModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjb25zdCBrZXkgPSBgX3VybDoke3ZhbH1gO1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLnNldFN2ZyhrZXksIHZhbCk7XG4gICAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgc3JjKCkge1xuICAgIHJldHVybiB0aGlzLl9zcmM7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRTZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFNldDtcbiAgfVxuICBzZXQgZm9udFNldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRTZXQgPSBrZXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9udEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udEljb247XG4gIH1cbiAgc2V0IGZvbnRJY29uKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9udEljb24gPSBrZXk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25TZXJ2aWNlOiBMeUljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZm9udFNldCB8fCB0aGlzLmZvbnRJY29uKSB7XG4gICAgICB0aGlzLl91cGRhdGVGb250Q2xhc3MoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBwcml2YXRlIF9pc0RlZmF1bHQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5zcmMgfHwgdGhpcy5pY29uIHx8IHRoaXMuZm9udFNldCk7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0ljb24uc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnSWNvbi5vYnNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHN2Z0VsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ2hpbGQoc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCB0aGlzLmljb25TZXJ2aWNlLmNsYXNzZXMuc3ZnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBzdmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRGVmYXVsdFN2Z0ljb24oKSB7XG4gICAgdGhpcy5fYXBwZW5kQ2hpbGQodGhpcy5pY29uU2VydmljZS5kZWZhdWx0U3ZnSWNvbik7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5faXNEZWZhdWx0KCkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseUljb25Sb290JywgdGhlbWUgPT4gKFxuICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLmljb24uZm9udFNpemV9O2AgK1xuICAgICAgYHdpZHRoOjFlbTtgICtcbiAgICAgIGBoZWlnaHQ6MWVtO2AgK1xuICAgICAgYGRpc3BsYXk6aW5saW5lLWZsZXg7YFxuICAgICksIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1biBvbmx5IGJyb3dzZXJcbiAgICogcmVtb3ZlIGN1cnJlbnQgaWNvblxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYW5JY29uKCkge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9lbCwgaWNvbik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRm9udENsYXNzKCkge1xuXG4gICAgY29uc3QgY3VycmVudENsYXNzID0gdGhpcy5fY3VycmVudENsYXNzO1xuICAgIGNvbnN0IGZvbnRTZXRLZXkgPSB0aGlzLmZvbnRTZXQ7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuZm9udEljb247XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGljb25DbGFzcyA9IHRoaXMuaWNvblNlcnZpY2UuZ2V0Rm9udENsYXNzKGZvbnRTZXRLZXkpO1xuICAgIGlmIChjdXJyZW50Q2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBjdXJyZW50Q2xhc3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJldmlvdXNGb250U2V0KSB7XG4gICAgICBpZiAodGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCB0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaWNvbkNsYXNzKSB7XG4gICAgICB0aGlzLl9wcmV2aW91c0ZvbnRTZXQgPSBpY29uQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIEVycm9yKGBJY29uIHdpdGgga2V5JHtmb250U2V0S2V5fSBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudENsYXNzID0gYCR7aWNvbkNsYXNzLnByZWZpeH0ke2ljb259YDtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbCwgdGhpcy5fY3VycmVudENsYXNzKTtcbiAgfVxufVxuIl19