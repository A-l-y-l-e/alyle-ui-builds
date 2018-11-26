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
            `position:relative;` +
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pY29uLyIsInNvdXJjZXMiOlsiaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBNkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7O01BRTFKLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7QUFHekIsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsWUFDUyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQ3JCLENBQUM7Q0FDTjs7O0lBRkcsNEJBQXVCOzs7Ozs7QUFLM0IsTUFBTSxPQUFPLGVBQWUsR0FBRyxpQkFBaUIsQ0FDaEQsT0FBTyxDQUNMLFNBQVMsQ0FDUCxVQUFVLENBQ1IsV0FBVyxDQUNULGFBQWEsQ0FDWCxjQUFjLENBQ1osZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFlL0MsTUFBTSxPQUFPLE1BQU8sU0FBUSxlQUFlOzs7Ozs7O0lBdUR6QyxZQUNVLFdBQTBCLEVBQzFCLEdBQWUsRUFDZixTQUFvQixFQUM1QixLQUFlO1FBRWYsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTEwsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFJNUIsSUFB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O0lBOUNOLHNCQUFxQjs7SUFDckIsdUJBQXNCOztJQUN0QiwwQkFBeUI7O0lBQ3pCLGtDQUEyQzs7SUFDM0MsK0JBQThCOztJQUM5QiwyQkFBMEI7O0lBa0R4Qiw2QkFBa0M7O0lBQ2xDLHFCQUF1Qjs7SUFDdkIsMkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlJY29uU2VydmljZSwgU3ZnSWNvbiwgRm9udENsYXNzT3B0aW9ucyB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTHlUaGVtZTIsIG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpbkZsYXQsIG1peGluQ29sb3IsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlJY29uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlJY29uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUljb25CYXNlKSkpKSkpKSk7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaWNvbicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUljb24gZXh0ZW5kcyBMeUljb25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgX3NyYzogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRTZXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJldmlvdXNGb250U2V0OiBGb250Q2xhc3NPcHRpb25zO1xuICBwcml2YXRlIF9jdXJyZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udEljb246IHN0cmluZztcblxuICAvKiogZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoKVxuICBzZXQgc3JjKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3JjID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYF91cmw6JHt2YWx9YDtcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS5zZXRTdmcoa2V5LCB2YWwpO1xuICAgICAgICB0aGlzLl9wcmVwYXJlU3ZnSWNvbih0aGlzLmljb25TZXJ2aWNlLmdldFN2ZyhrZXkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwZW5kRGVmYXVsdFN2Z0ljb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3JjO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRTZXQ7XG4gIH1cbiAgc2V0IGZvbnRTZXQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250U2V0ID0ga2V5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRJY29uO1xuICB9XG4gIHNldCBmb250SWNvbihrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRJY29uID0ga2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmZvbnRTZXQgfHwgdGhpcy5mb250SWNvbikge1xuICAgICAgdGhpcy5fdXBkYXRlRm9udENsYXNzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuc3JjIHx8IHRoaXMuaWNvbiB8fCB0aGlzLmZvbnRTZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsIHRoZW1lID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2BcbiAgICApLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwsIGljb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvbnRDbGFzcygpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzcyA9IHRoaXMuX2N1cnJlbnRDbGFzcztcbiAgICBjb25zdCBmb250U2V0S2V5ID0gdGhpcy5mb250U2V0O1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmZvbnRJY29uO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmljb25TZXJ2aWNlLmdldEZvbnRDbGFzcyhmb250U2V0S2V5KTtcbiAgICBpZiAoY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldCkge1xuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgdGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGljb25DbGFzcykge1xuICAgICAgdGhpcy5fcHJldmlvdXNGb250U2V0ID0gaWNvbkNsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvcihgSWNvbiB3aXRoIGtleSR7Zm9udFNldEtleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDbGFzcyA9IGAke2ljb25DbGFzcy5wcmVmaXh9JHtpY29ufWA7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIHRoaXMuX2N1cnJlbnRDbGFzcyk7XG4gIH1cbn1cbiJdfQ==