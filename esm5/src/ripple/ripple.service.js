/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LY_COMMON_STYLES } from '../styles/core-styles';
import { LyTheme2 } from '../theme/theme2.service';
import * as i0 from "@angular/core";
import * as i1 from "../theme/theme2.service";
/** @type {?} */
export var styles = function (theme) { return ({
    rippleContainer: {
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: 'currentColor',
        opacity: '.2',
        borderRadius: '50%',
        transform: 'scale(0)',
        transition: "opacity " + theme.ripple.transition.opacity + ",transform " + theme.ripple.transition.transform,
        pointerEvents: 'none'
    },
    container: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
}); };
var LyRippleService = /** @class */ (function () {
    function LyRippleService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
    LyRippleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyRippleService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(i1.LyTheme2)); }, token: LyRippleService, providedIn: "root" });
    return LyRippleService;
}());
export { LyRippleService };
if (false) {
    /** @type {?} */
    LyRippleService.prototype.classes;
    /** @type {?} */
    LyRippleService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcmlwcGxlL3JpcHBsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFbkQsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2hELGVBQWUsRUFBRTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixVQUFVLEVBQUUsY0FBYztRQUMxQixPQUFPLEVBQUUsSUFBSTtRQUNiLFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFVBQVUsRUFBRSxhQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sbUJBQWMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FDMUY7UUFDRixhQUFhLEVBQUUsTUFBTTtLQUN0QjtJQUNELFNBQVMsdUJBQ0osZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixRQUFRLEVBQUUsUUFBUSxFQUNsQixhQUFhLEVBQUUsTUFBTSxFQUNyQixZQUFZLEVBQUUsU0FBUyxHQUN4QjtDQUNGLENBQUMsRUFuQitDLENBbUIvQztBQUVGO0lBS0UseUJBQ1UsS0FBZTtRQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7UUFGekIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBR3ZDLENBQUM7O2dCQVBOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBekJRLFFBQVE7OzswQkFIakI7Q0FtQ0MsQUFURCxJQVNDO1NBTlksZUFBZTs7O0lBQzFCLGtDQUEyQzs7SUFFekMsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJy4uL3N0eWxlcy9jb3JlLXN0eWxlcyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMnB4JyxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6ICcuMicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi5vcGFjaXR5fSx0cmFuc2Zvcm0gJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi50cmFuc2Zvcm1cbiAgICB9YCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxufVxuIl19