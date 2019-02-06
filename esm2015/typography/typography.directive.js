/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LyTheme2, toBoolean, mixinStyleUpdater, mixinColor } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -1;
/** @type {?} */
const styles = (theme) => ({
    root: Object.assign({ margin: 0, display: 'block' }, theme.typography.root)
});
const ɵ0 = styles;
/** @enum {number} */
const Gutter = {
    default: 0,
    top: 1,
    bottom: 2,
};
Gutter[Gutter.default] = 'default';
Gutter[Gutter.top] = 'top';
Gutter[Gutter.bottom] = 'bottom';
/**
 * \@docs-private
 */
export class LyTypographyBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
if (false) {
    /** @type {?} */
    LyTypographyBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyTypographyMixinBase = mixinStyleUpdater(mixinColor((LyTypographyBase)));
export class LyTypography extends LyTypographyMixinBase {
    /**
     * @param {?} _theme
     * @param {?} _el
     * @param {?} renderer
     */
    constructor(_theme, _el, renderer) {
        super(_theme);
        this._el = _el;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.renderer.addClass(this._el.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyTyp(val) {
        if (val !== this.lyTyp) {
            if (val) {
                this._lyTypClass = this._createTypClass(val, this._lyTypClass);
            }
            else if (this._lyTypClass) {
                this.renderer.removeClass(this._el.nativeElement, this._lyTypClass);
                this._lyTypClass = undefined;
            }
        }
    }
    /**
     * @return {?}
     */
    get lyTyp() {
        return this._lyTyp;
    }
    /**
     * The text will truncate with an ellipsis.
     * @param {?} val
     * @return {?}
     */
    set noWrap(val) {
        /** @type {?} */
        const newValue = toBoolean(val);
        if (newValue) {
            this._noWrapClass = this._theme.addSimpleStyle('lyTyp.noWrap', {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            });
            this.renderer.addClass(this._el.nativeElement, this._noWrapClass);
        }
        else if (this._noWrapClass) {
            this.renderer.removeClass(this._el.nativeElement, this._noWrapClass);
            this._noWrapClass = undefined;
        }
    }
    /**
     * @return {?}
     */
    get noWrap() {
        return this._noWrap;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutter(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.gutter) {
            this._gutter = newVal;
            this._gutterClass = this._createGutterClass(Gutter.default, newVal, this._gutterClass);
        }
    }
    /**
     * @return {?}
     */
    get gutter() {
        return this._gutter;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutterTop(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.gutterTop) {
            this._gutterTop = newVal;
            // const newClass = this._createGutterClass(Gutter.top, newVal);
            this._gutterTopClass = this._createGutterClass(Gutter.top, newVal, this._gutterTopClass);
        }
    }
    /**
     * @return {?}
     */
    get gutterTop() {
        return this._gutterTop;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set gutterBottom(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal !== this.gutterBottom) {
            this._gutterBottom = newVal;
            this._gutterBottomClass = this._createGutterClass(Gutter.bottom, newVal, this._gutterBottomClass);
        }
    }
    /**
     * @return {?}
     */
    get gutterBottom() {
        return this._gutterBottom;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ((this.gutterTop && this.gutterBottom)) {
            throw new Error(`use '<element lyTyp gutter>' instead of '<element lyTyp gutterTop gutterBottom>'`);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el.nativeElement);
    }
    /**
     * @private
     * @param {?} key
     * @param {?=} instance
     * @return {?}
     */
    _createTypClass(key, instance) {
        /** @type {?} */
        const newKey = `k-typ:${key}`;
        return this._theme.addStyle(newKey, (theme) => {
            const { typography } = theme;
            /** @type {?} */
            const styl = Object.assign({}, typography.lyTyp[key || 'body1']);
            if (styl.lineHeight) {
                styl.lineHeight = theme.pxToRem((/** @type {?} */ (styl.lineHeight)));
            }
            if (typeof styl.letterSpacing === 'number') {
                styl.letterSpacing = `${styl.letterSpacing}px`;
            }
            // set default fontFamily
            styl.fontFamily = styl.fontFamily || typography.fontFamily;
            return styl;
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    }
    /**
     * @private
     * @param {?} name
     * @param {?} val
     * @param {?} instance
     * @return {?}
     */
    _createGutterClass(name, val, instance) {
        return this._theme.addStyle(`k-typ-gutter:${name}:${val}`, (theme) => {
            /** @type {?} */
            const gutter = name === Gutter.default;
            return (`margin-top:${val && (gutter || name === Gutter.top) ? theme.typography.gutterTop : 0}em;` +
                `margin-bottom:${val && (gutter || name === Gutter.bottom) ? theme.typography.gutterBottom : 0}em;`);
        }, this._el.nativeElement, instance, STYLE_PRIORITY);
    }
}
LyTypography.decorators = [
    { type: Directive, args: [{
                selector: `[lyTyp]`,
                inputs: [
                    'color'
                ]
            },] }
];
/** @nocollapse */
LyTypography.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 }
];
LyTypography.propDecorators = {
    lyTyp: [{ type: Input }],
    noWrap: [{ type: Input }],
    gutter: [{ type: Input }],
    gutterTop: [{ type: Input }],
    gutterBottom: [{ type: Input }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyTypography.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._lyTyp;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._lyTypClass;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._gutter;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._gutterClass;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._gutterTop;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._gutterTopClass;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._gutterBottom;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._gutterBottomClass;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._noWrap;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._noWrapClass;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyTypography.prototype.renderer;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBa0MsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDOztNQUV6RyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUNuQixNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLElBQUksa0JBQ0YsTUFBTSxFQUFFLENBQUMsRUFDVCxPQUFPLEVBQUUsT0FBTyxJQUNiLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QjtDQUNGLENBQUM7Ozs7SUFJQSxVQUFPO0lBQ1AsTUFBRztJQUNILFNBQU07Ozs7Ozs7O0FBSVIsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztDQUNOOzs7SUFGRyxrQ0FBdUI7Ozs7OztBQUszQixNQUFNLE9BQU8scUJBQXFCLEdBQUcsaUJBQWlCLENBQ2xELFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQVFuQyxNQUFNLE9BQU8sWUFBYSxTQUFRLHFCQUFxQjs7Ozs7O0lBeUZyRCxZQUNFLE1BQWdCLEVBQ1IsR0FBZSxFQUNmLFFBQW1CO1FBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUhOLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFXOzs7O1FBMUZwQixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBNkZuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBL0VELElBQ0ksS0FBSyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoRTtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBR0QsSUFDSSxNQUFNLENBQUMsR0FBWTs7Y0FDZixRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFO2dCQUM3RCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFlBQVksRUFBRSxVQUFVO2FBQ3pCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuRTthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFDSSxNQUFNLENBQUMsR0FBWTs7Y0FDZixNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RjtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxHQUFZOztjQUNsQixNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLGdFQUFnRTtZQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFDSSxZQUFZLENBQUMsR0FBWTs7Y0FDckIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDN0IsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25HO0lBQ0gsQ0FBQzs7OztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBV0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUM7U0FDckc7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEdBQVcsRUFBRSxRQUFpQjs7Y0FDOUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxFQUFFO1FBRTdCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUNoQyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtrQkFDbEIsRUFBRSxVQUFVLEVBQUUsR0FBRyxLQUFLOztrQkFDdEIsSUFBSSxHQUFtQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQztZQUNqRixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUFVLENBQUMsQ0FBQzthQUM1RDtZQUNELElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQzthQUNoRDtZQUNELHlCQUF5QjtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsUUFBUSxFQUNSLGNBQWMsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsR0FBWSxFQUFFLFFBQWdCO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ3pCLGdCQUFnQixJQUFJLElBQUksR0FBRyxFQUFFLEVBQzdCLENBQUMsS0FBcUIsRUFBRSxFQUFFOztrQkFDbEIsTUFBTSxHQUFHLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTztZQUN0QyxPQUFPLENBQ0wsY0FBZSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSztnQkFDNUYsaUJBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLLENBQ3RHLENBQUM7UUFDSixDQUFDLEVBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLFFBQVEsRUFDUixjQUFjLENBQ2YsQ0FBQztJQUNKLENBQUM7OztZQXZKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLE1BQU0sRUFBRTtvQkFDTixPQUFPO2lCQUNSO2FBQ0Y7Ozs7WUFsQ1EsUUFBUTtZQURHLFVBQVU7WUFBRSxTQUFTOzs7b0JBcUR0QyxLQUFLO3FCQWdCTCxLQUFLO3FCQW1CTCxLQUFLO3dCQVlMLEtBQUs7MkJBYUwsS0FBSzs7Ozs7OztJQTNFTiwrQkFBcUU7Ozs7O0lBQ3JFLDhCQUF1Qjs7Ozs7SUFDdkIsbUNBQTZCOzs7OztJQUU3QiwrQkFBeUI7Ozs7O0lBQ3pCLG9DQUE2Qjs7Ozs7SUFFN0Isa0NBQTRCOzs7OztJQUM1Qix1Q0FBZ0M7Ozs7O0lBRWhDLHFDQUErQjs7Ozs7SUFDL0IsMENBQW1DOzs7OztJQUNuQywrQkFBeUI7Ozs7O0lBQ3pCLG9DQUE4Qjs7Ozs7SUE0RTVCLDJCQUF1Qjs7Ozs7SUFDdkIsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHRvQm9vbGVhbiwgVGhlbWVWYXJpYWJsZXMsIFN0eWxlQ29udGFpbmVyLCBtaXhpblN0eWxlVXBkYXRlciwgbWl4aW5Db2xvciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5yb290XG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZW51bSBHdXR0ZXIge1xuICBkZWZhdWx0LFxuICB0b3AsXG4gIGJvdHRvbVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeUJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VHlwb2dyYXBoeU1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICAgIG1peGluQ29sb3IoKEx5VHlwb2dyYXBoeUJhc2UpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gLFxuICBpbnB1dHM6IFtcbiAgICAnY29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUeXBvZ3JhcGh5IGV4dGVuZHMgTHlUeXBvZ3JhcGh5TWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfbHlUeXA6IHN0cmluZztcbiAgcHJpdmF0ZSBfbHlUeXBDbGFzcz86IHN0cmluZztcblxuICBwcml2YXRlIF9ndXR0ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2d1dHRlckNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyVG9wOiBib29sZWFuO1xuICBwcml2YXRlIF9ndXR0ZXJUb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2d1dHRlckJvdHRvbTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ3V0dGVyQm90dG9tQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbm9XcmFwOiBib29sZWFuO1xuICBwcml2YXRlIF9ub1dyYXBDbGFzcz86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSB0aGlzLl9jcmVhdGVUeXBDbGFzcyh2YWwsIHRoaXMuX2x5VHlwQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9seVR5cENsYXNzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbHlUeXBDbGFzcyk7XG4gICAgICAgIHRoaXMuX2x5VHlwQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBseVR5cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUeXA7XG4gIH1cblxuICAvKiogVGhlIHRleHQgd2lsbCB0cnVuY2F0ZSB3aXRoIGFuIGVsbGlwc2lzLiAqL1xuICBASW5wdXQoKVxuICBzZXQgbm9XcmFwKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl9ub1dyYXBDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseVR5cC5ub1dyYXAnLCB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25vV3JhcENsYXNzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX25vV3JhcENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25vV3JhcENsYXNzKTtcbiAgICAgIHRoaXMuX25vV3JhcENsYXNzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnZXQgbm9XcmFwKCkge1xuICAgIHJldHVybiB0aGlzLl9ub1dyYXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3V0dGVyKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZ3V0dGVyKSB7XG4gICAgICB0aGlzLl9ndXR0ZXIgPSBuZXdWYWw7XG4gICAgICB0aGlzLl9ndXR0ZXJDbGFzcyA9IHRoaXMuX2NyZWF0ZUd1dHRlckNsYXNzKEd1dHRlci5kZWZhdWx0LCBuZXdWYWwsIHRoaXMuX2d1dHRlckNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlclRvcCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlclRvcCkge1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wID0gbmV3VmFsO1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwpO1xuICAgICAgdGhpcy5fZ3V0dGVyVG9wQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIudG9wLCBuZXdWYWwsIHRoaXMuX2d1dHRlclRvcENsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlclRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyVG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGd1dHRlckJvdHRvbSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmd1dHRlckJvdHRvbSkge1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tID0gbmV3VmFsO1xuICAgICAgdGhpcy5fZ3V0dGVyQm90dG9tQ2xhc3MgPSB0aGlzLl9jcmVhdGVHdXR0ZXJDbGFzcyhHdXR0ZXIuYm90dG9tLCBuZXdWYWwsIHRoaXMuX2d1dHRlckJvdHRvbUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGd1dHRlckJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3V0dGVyQm90dG9tO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICgodGhpcy5ndXR0ZXJUb3AgJiYgdGhpcy5ndXR0ZXJCb3R0b20pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyPicgaW5zdGVhZCBvZiAnPGVsZW1lbnQgbHlUeXAgZ3V0dGVyVG9wIGd1dHRlckJvdHRvbT4nYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVR5cENsYXNzKGtleTogc3RyaW5nLCBpbnN0YW5jZT86IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0tleSA9IGBrLXR5cDoke2tleX1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleSxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBvZ3JhcGh5IH0gPSB0aGVtZTtcbiAgICAgICAgY29uc3Qgc3R5bDogU3R5bGVDb250YWluZXIgPSBPYmplY3QuYXNzaWduKHsgfSwgdHlwb2dyYXBoeS5seVR5cFtrZXkgfHwgJ2JvZHkxJ10pO1xuICAgICAgICBpZiAoc3R5bC5saW5lSGVpZ2h0KSB7XG4gICAgICAgICAgc3R5bC5saW5lSGVpZ2h0ID0gdGhlbWUucHhUb1JlbShzdHlsLmxpbmVIZWlnaHQgYXMgbnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHN0eWwubGV0dGVyU3BhY2luZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzdHlsLmxldHRlclNwYWNpbmcgPSBgJHtzdHlsLmxldHRlclNwYWNpbmd9cHhgO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGZvbnRGYW1pbHlcbiAgICAgICAgc3R5bC5mb250RmFtaWx5ID0gc3R5bC5mb250RmFtaWx5IHx8IHR5cG9ncmFwaHkuZm9udEZhbWlseTtcbiAgICAgICAgcmV0dXJuIHN0eWw7XG4gICAgICB9LFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlR3V0dGVyQ2xhc3MobmFtZTogR3V0dGVyLCB2YWw6IGJvb2xlYW4sIGluc3RhbmNlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgay10eXAtZ3V0dGVyOiR7bmFtZX06JHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gbmFtZSA9PT0gR3V0dGVyLmRlZmF1bHQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgYG1hcmdpbi10b3A6JHsgdmFsICYmIChndXR0ZXIgfHwgbmFtZSA9PT0gR3V0dGVyLnRvcCkgPyB0aGVtZS50eXBvZ3JhcGh5Lmd1dHRlclRvcCA6IDAgfWVtO2AgK1xuICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiR7IHZhbCAmJiAoZ3V0dGVyIHx8IG5hbWUgPT09IEd1dHRlci5ib3R0b20pID8gdGhlbWUudHlwb2dyYXBoeS5ndXR0ZXJCb3R0b20gOiAwIH1lbTtgXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGluc3RhbmNlLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG59XG4iXX0=