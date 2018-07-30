/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyTypographyClasses } from './typography.service';
export class LyTypography {
    /**
     * @param {?} style
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} classes
     */
    constructor(style, elementRef, renderer, classes) {
        this.style = style;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyTyp(val) {
        if (val !== this.lyTyp) {
            const /** @type {?} */ newClass = this._createTypClass(val);
            this.style.updateClassName(this.elementRef.nativeElement, this.renderer, newClass, this._lyTypClass);
            this._lyTypClass = newClass;
        }
    }
    /**
     * @return {?}
     */
    get lyTyp() {
        return this._lyTyp;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    _createTypClass(key) {
        const /** @type {?} */ newKey = `k-typ:${key}`;
        return this.style.setUpStyleSecondary(newKey, theme => {
            const { typography } = theme;
            const { fontSize, fontWeight, letterSpacing, textTransform, lineHeight } = typography[key || 'body1'];
            let /** @type {?} */ style = (`font-size:${theme.pxToRem(fontSize)};` +
                `font-weight:${fontWeight};` +
                `letter-spacing:${theme.pxToRem(letterSpacing)};`);
            if (lineHeight) {
                style += `line-height:${theme.pxToRem(lineHeight)};`;
            }
            if (textTransform) {
                style += `text-transform:${textTransform};`;
            }
            return style;
        });
    }
}
LyTypography.decorators = [
    { type: Directive, args: [{
                selector: `[lyTyp]`
            },] },
];
/** @nocollapse */
LyTypography.ctorParameters = () => [
    { type: LyTheme2, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyTypographyClasses, },
];
LyTypography.propDecorators = {
    "lyTyp": [{ type: Input },],
};
function LyTypography_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTypography.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTypography.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTypography.propDecorators;
    /** @type {?} */
    LyTypography.prototype._lyTyp;
    /** @type {?} */
    LyTypography.prototype._lyTypClass;
    /** @type {?} */
    LyTypography.prototype.style;
    /** @type {?} */
    LyTypography.prototype.elementRef;
    /** @type {?} */
    LyTypography.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdHlwb2dyYXBoeS8iLCJzb3VyY2VzIjpbInR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLM0QsTUFBTTs7Ozs7OztJQWVKLFlBQ1UsT0FDQSxZQUNBLFVBQ1IsT0FBNEI7UUFIcEIsVUFBSyxHQUFMLEtBQUs7UUFDTCxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBR2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyRTs7Ozs7UUFqQkcsS0FBSyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0Qix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckcsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7U0FDN0I7Ozs7O0lBRUgsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQVVPLGVBQWUsQ0FBQyxHQUFXO1FBQ2pDLHVCQUFNLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBeUIsTUFBTSxFQUNsRSxLQUFLLENBQUMsRUFBRTtZQUNOLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDN0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsR0FBRyxVQUFVLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQ3RHLHFCQUFJLEtBQUssR0FBRyxDQUNWLGFBQWEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDdkMsZUFBZSxVQUFVLEdBQUc7Z0JBQzVCLGtCQUFrQixLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ2xELENBQUM7WUFDRixJQUFJLFVBQVUsRUFBRTtnQkFDZCxLQUFLLElBQUksZUFBZSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDdEQ7WUFDRCxJQUFJLGFBQWEsRUFBRTtnQkFDakIsS0FBSyxJQUFJLGtCQUFrQixhQUFhLEdBQUcsQ0FBQzthQUM3QztZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2QsQ0FDRixDQUFDOzs7O1lBL0NMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUzthQUNwQjs7OztZQU5RLFFBQVE7WUFERyxVQUFVO1lBQUUsU0FBUztZQUdoQyxtQkFBbUI7OztzQkFTekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuLy8gaW1wb3J0IHsgSU1pbmltYVRoZW1lIH0gZnJvbSAnLi4vdGhlbWVzJztcbmltcG9ydCB7IEx5VHlwb2dyYXBoeUNsYXNzZXMgfSBmcm9tICcuL3R5cG9ncmFwaHkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtseVR5cF1gXG59KVxuZXhwb3J0IGNsYXNzIEx5VHlwb2dyYXBoeSB7XG4gIHByaXZhdGUgX2x5VHlwOiBzdHJpbmc7XG4gIHByaXZhdGUgX2x5VHlwQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbHlUeXAodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmx5VHlwKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVR5cENsYXNzKHZhbCk7XG4gICAgICB0aGlzLnN0eWxlLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2x5VHlwQ2xhc3MpO1xuICAgICAgdGhpcy5fbHlUeXBDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuICBnZXQgbHlUeXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VHlwO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY2xhc3NlczogTHlUeXBvZ3JhcGh5Q2xhc3Nlc1xuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHlwQ2xhc3Moa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdLZXkgPSBgay10eXA6JHtrZXl9YDtcblxuICAgIHJldHVybiB0aGlzLnN0eWxlLnNldFVwU3R5bGVTZWNvbmRhcnk8YW55LyoqIElNaW5pbWFUaGVtZSAqLz4obmV3S2V5LFxuICAgICAgdGhlbWUgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cG9ncmFwaHkgfSA9IHRoZW1lO1xuICAgICAgICBjb25zdCB7IGZvbnRTaXplLCBmb250V2VpZ2h0LCBsZXR0ZXJTcGFjaW5nLCB0ZXh0VHJhbnNmb3JtLCBsaW5lSGVpZ2h0IH0gPSB0eXBvZ3JhcGh5W2tleSB8fCAnYm9keTEnXTtcbiAgICAgICAgbGV0IHN0eWxlID0gKFxuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7Zm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShsZXR0ZXJTcGFjaW5nKX07YFxuICAgICAgICApO1xuICAgICAgICBpZiAobGluZUhlaWdodCkge1xuICAgICAgICAgIHN0eWxlICs9IGBsaW5lLWhlaWdodDoke3RoZW1lLnB4VG9SZW0obGluZUhlaWdodCl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzdHlsZSArPSBgdGV4dC10cmFuc2Zvcm06JHt0ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiJdfQ==