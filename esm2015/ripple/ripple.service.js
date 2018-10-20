/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2, LY_COMMON_STYLES } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
export const styles = (theme) => ({
    rippleContainer: {
        position: 'absolute',
        width: '5px',
        height: '5px',
        background: 'currentColor',
        opacity: '.19',
        borderRadius: '100%',
        transform: 'scale(0)',
        transition: `opacity ${theme.ripple.transition.opacity},transform ${theme.ripple.transition.transform}`,
        pointerEvents: 'none'
    },
    container: Object.assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
});
export class LyRippleService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
}
LyRippleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyRippleService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(i1.LyTheme2)); }, token: LyRippleService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyRippleService.prototype.classes;
    /** @type {?} */
    LyRippleService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmlwcGxlLyIsInNvdXJjZXMiOlsicmlwcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxXQUFXLENBQUM7Ozs7QUFFdkUsYUFBYSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELGVBQWUsRUFBRTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixVQUFVLEVBQUUsY0FBYztRQUMxQixPQUFPLEVBQUUsS0FBSztRQUNkLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFVBQVUsRUFBRSxXQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sY0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUM1RixFQUFFO1FBQ0YsYUFBYSxFQUFFLE1BQU07S0FDdEI7SUFDRCxTQUFTLG9CQUNKLGdCQUFnQixDQUFDLElBQUksSUFDeEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsYUFBYSxFQUFFLE1BQU0sRUFDckIsWUFBWSxFQUFFLFNBQVMsR0FDeEI7Q0FDRixDQUFDLENBQUM7QUFLSCxNQUFNLE9BQU8sZUFBZTs7OztJQUUxQixZQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7UUFGZixlQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBR3RDOzs7WUFQTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF6QlEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMWV9DT01NT05fU1RZTEVTLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByaXBwbGVDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzVweCcsXG4gICAgaGVpZ2h0OiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICBvcGFjaXR5OiAnLjE5JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi5vcGFjaXR5fSx0cmFuc2Zvcm0gJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi50cmFuc2Zvcm1cbiAgICB9YCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxufVxuIl19