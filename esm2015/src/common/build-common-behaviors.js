/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { shadowBuilder } from '../shadow';
import { getNativeElement } from '../minimal/common';
/** @type {?} */
const DEFAULT_VALUE = '';
/** @type {?} */
const STYLE_PRIORITY = -1;
/**
 * @record
 */
export function RequireParamsStyleUpdater() { }
if (false) {
    /** @type {?} */
    RequireParamsStyleUpdater.prototype._theme;
}
/**
 * @record
 */
export function CanStyleUpdater() { }
if (false) {
    /** @type {?} */
    CanStyleUpdater.prototype._theme;
    /** @type {?} */
    CanStyleUpdater.prototype.updateStyle;
    /** @type {?} */
    CanStyleUpdater.prototype.setAutoContrast;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinStyleUpdater(base) {
    return class extends base {
        /**
         * @return {?}
         */
        setAutoContrast() {
            this._autoContrast = true;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        updateStyle(element) {
            /** @type {?} */
            const __bg = this._superHyperInternalPropertyBg;
            /** @type {?} */
            const __color = this._superHyperInternalPropertyColor;
            /** @type {?} */
            const __raised = this._superHyperInternalPropertyRaised;
            /** @type {?} */
            const __elevation = this._superHyperInternalPropertyElevation;
            /** @type {?} */
            const __disabled = this._superHyperInternalPropertyDisabled;
            /** @type {?} */
            const __outlined = this._superHyperInternalPropertyOutlined;
            /** @type {?} */
            const __shadowColor = this._superHyperInternalPropertyShadowColor;
            /** @type {?} */
            const __isContrast = this._autoContrast && !__color || __color === 'auto';
            /** @type {?} */
            const newKey = `common----:${__bg || DEFAULT_VALUE}·${__color || DEFAULT_VALUE}·${__raised || DEFAULT_VALUE}·${__elevation || DEFAULT_VALUE}·${__disabled || DEFAULT_VALUE}·${__outlined || DEFAULT_VALUE}·${__shadowColor || DEFAULT_VALUE}·${__isContrast || DEFAULT_VALUE}`;
            this._classNameAnonymous = this._theme.addStyle(newKey, (theme) => {
                /** @type {?} */
                const style = {};
                if (__outlined) {
                    style.border = '1px solid currentColor';
                }
                if (__disabled) {
                    style.color = theme.disabled.contrast;
                    style.pointerEvents = 'none';
                    if (__bg) {
                        style.background = theme.disabled.default;
                    }
                }
                else {
                    if (__bg) {
                        style.background = theme.colorOf(__bg);
                        if (__isContrast) {
                            style.color = theme.colorOf(`${__bg}:contrast`);
                        }
                    }
                    if (!style.color && __color) {
                        style.color = theme.colorOf(__color);
                    }
                    if (__raised || __elevation) {
                        if (!__bg) {
                            style.background = theme.background.primary.default;
                        }
                        /** @type {?} */
                        const backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                        /** @type {?} */
                        const shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
                        style.boxShadow = shadowBuilder(__elevation || 3, shadowColor);
                        if (!__elevation) {
                            style['&:active'] = {
                                boxShadow: shadowBuilder(8, shadowColor)
                            };
                        }
                    }
                }
                return (/** @type {?} */ (style));
            }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
        }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtY29tbW9uLWJlaGF2aW9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vYnVpbGQtY29tbW9uLWJlaGF2aW9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVUxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFHL0MsYUFBYSxHQUFHLEVBQUU7O01BQ2xCLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7QUFFekIsK0NBRUM7OztJQURDLDJDQUFpQjs7Ozs7QUFHbkIscUNBSUM7OztJQUhDLGlDQUFpQjs7SUFDakIsc0NBQXFEOztJQUNyRCwwQ0FBNEI7Ozs7Ozs7QUFJOUIsTUFBTSxVQUFVLGlCQUFpQixDQUFnQyxJQUFPO0lBQ3RFLE9BQU8sS0FBTSxTQUFRLElBQUk7Ozs7UUFHdkIsZUFBZTtZQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsV0FBVyxDQUFDLE9BQXNDOztrQkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyw2QkFBNkI7O2tCQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdDQUFnQzs7a0JBQy9DLFFBQVEsR0FBRyxJQUFJLENBQUMsaUNBQWlDOztrQkFDakQsV0FBVyxHQUFHLElBQUksQ0FBQyxvQ0FBb0M7O2tCQUN2RCxVQUFVLEdBQUcsSUFBSSxDQUFDLG1DQUFtQzs7a0JBQ3JELFVBQVUsR0FBRyxJQUFJLENBQUMsbUNBQW1DOztrQkFDckQsYUFBYSxHQUFHLElBQUksQ0FBQyxzQ0FBc0M7O2tCQUMzRCxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEtBQUssTUFBTTs7a0JBQ25FLE1BQU0sR0FBRyxjQUNiLElBQUksSUFBSSxhQUFhLElBQ25CLE9BQU8sSUFBSSxhQUFhLElBQ3RCLFFBQVEsSUFBSSxhQUFhLElBQ3ZCLFdBQVcsSUFBSSxhQUFhLElBQzFCLFVBQVUsSUFBSSxhQUFhLElBQ3pCLFVBQVUsSUFBSSxhQUFhLElBQ3pCLGFBQWEsSUFBSSxhQUFhLElBQzVCLFlBQVksSUFBSSxhQUFhLEVBQUU7WUFDL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRTs7c0JBQzFFLEtBQUssR0FZUCxFQUFFO2dCQUNOLElBQUksVUFBVSxFQUFFO29CQUNkLEtBQUssQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7aUJBQ3pDO2dCQUNELElBQUksVUFBVSxFQUFFO29CQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ3RDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO29CQUM3QixJQUFJLElBQUksRUFBRTt3QkFDUixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUMzQztpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksRUFBRTt3QkFDUixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLElBQUksWUFBWSxFQUFFOzRCQUNoQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDO3lCQUNqRDtxQkFDRjtvQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7d0JBQzNCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDdEM7b0JBQ0QsSUFBSSxRQUFRLElBQUksV0FBVyxFQUFFO3dCQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNULEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUNyRDs7OEJBQ0ssa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksb0JBQW9CLEVBQUUsUUFBUSxDQUFDOzs4QkFDdkcsV0FBVyxHQUFHLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU07d0JBQzVJLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQy9ELElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQ2hCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRztnQ0FDbEIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDOzZCQUN6QyxDQUFDO3lCQUNIO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sbUJBQUEsS0FBSyxFQUFPLENBQUM7WUFDdEIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7O1FBRUQsWUFBWSxHQUFHLElBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5pbXBvcnQgeyBDYW5Db2xvciB9IGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgQ2FuQmcgfSBmcm9tICcuL2JnJztcbmltcG9ydCB7IENhbkRpc2FibGUgfSBmcm9tICcuL2Rpc2FibGVkJztcbmltcG9ydCB7IENhblJhaXNlZCB9IGZyb20gJy4vcmFpc2VkJztcbmltcG9ydCB7IENhbkVsZXZhdGlvbiB9IGZyb20gJy4vZWxldmF0aW9uJztcbmltcG9ydCB7IENhbk91dGxpbmVkIH0gZnJvbSAnLi9vdXRsaW5lZCc7XG5pbXBvcnQgeyBDYW5TaGFkb3dDb2xvciB9IGZyb20gJy4vc2hhZG93LWNvbG9yJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TmF0aXZlRWxlbWVudCB9IGZyb20gJy4uL21pbmltYWwvY29tbW9uJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5TdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICB1cGRhdGVTdHlsZTogKGVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBFbGVtZW50KSA9PiB2b2lkO1xuICBzZXRBdXRvQ29udHJhc3Q6ICgpID0+IHZvaWQ7XG59XG5leHBvcnQgdHlwZSBDYW5TdHlsZVVwZGF0ZXJDdG9yID0gQ29uc3RydWN0b3I8UmVxdWlyZVBhcmFtc1N0eWxlVXBkYXRlciAmIFBhcnRpYWw8Q2FuQ29sb3IgJiBDYW5CZyAmIENhbkRpc2FibGUgJiBDYW5SYWlzZWQgJiBDYW5FbGV2YXRpb24gJiBDYW5PdXRsaW5lZCAmIENhblNoYWRvd0NvbG9yPj47XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblN0eWxlVXBkYXRlcjxUIGV4dGVuZHMgQ2FuU3R5bGVVcGRhdGVyQ3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblN0eWxlVXBkYXRlcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX2NsYXNzTmFtZUFub255bW91czogc3RyaW5nO1xuICAgIF9hdXRvQ29udHJhc3Q6IGJvb2xlYW47XG4gICAgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlU3R5bGUoZWxlbWVudDogRWxlbWVudFJlZjxhbnk+IHwgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IF9fYmcgPSB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUJnO1xuICAgICAgY29uc3QgX19jb2xvciA9IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Q29sb3I7XG4gICAgICBjb25zdCBfX3JhaXNlZCA9IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5UmFpc2VkO1xuICAgICAgY29uc3QgX19lbGV2YXRpb24gPSB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUVsZXZhdGlvbjtcbiAgICAgIGNvbnN0IF9fZGlzYWJsZWQgPSB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eURpc2FibGVkO1xuICAgICAgY29uc3QgX19vdXRsaW5lZCA9IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5T3V0bGluZWQ7XG4gICAgICBjb25zdCBfX3NoYWRvd0NvbG9yID0gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlTaGFkb3dDb2xvcjtcbiAgICAgIGNvbnN0IF9faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhX19jb2xvciB8fCBfX2NvbG9yID09PSAnYXV0byc7XG4gICAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgICBfX2JnIHx8IERFRkFVTFRfVkFMVUV9wrcke1xuICAgICAgICAgIF9fY29sb3IgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICBfX3JhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgICAgX19lbGV2YXRpb24gfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgX19kaXNhYmxlZCB8fCBERUZBVUxUX1ZBTFVFfcK3JHtcbiAgICAgICAgICAgICAgICAgIF9fb3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgICAgIF9fc2hhZG93Q29sb3IgfHwgREVGQVVMVF9WQUxVRX3CtyR7XG4gICAgICAgICAgICAgICAgICAgICAgX19pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZUFub255bW91cyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleSwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZToge1xuICAgICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICAgIGNvbG9yPzogc3RyaW5nLFxuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAgICcmOmhvdmVyJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YWN0aXZlJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuZGlzYWJsZWQuY29udHJhc3Q7XG4gICAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmRpc2FibGVkLmRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICAgIGlmIChfX2lzQ29udHJhc3QpIHtcbiAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKGAke19fYmd9OmNvbnRyYXN0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghc3R5bGUuY29sb3IgJiYgX19jb2xvcikge1xuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX19yYWlzZWQgfHwgX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAoX19zaGFkb3dDb2xvciAmJiB0aGVtZS5jb2xvck9mKF9fc2hhZG93Q29sb3IpKSB8fCBiYWNrZ3JvdW5kQ29sb3JDc3MgfHwgc3R5bGUuYmFja2dyb3VuZCB8fCBzdHlsZS5jb2xvciB8fCB0aGVtZS5zaGFkb3c7XG4gICAgICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKF9fZWxldmF0aW9uIHx8IDMsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgICAgc3R5bGVbJyY6YWN0aXZlJ10gPSB7XG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGUgYXMgYW55O1xuICAgICAgfSwgZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KSwgdGhpcy5fY2xhc3NOYW1lQW5vbnltb3VzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiJdfQ==