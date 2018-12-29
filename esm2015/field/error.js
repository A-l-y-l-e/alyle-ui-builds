/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { STYLES } from './styles';
/**
 * LyError
 * @type {?}
 */
const STYLE_PRIORITY = -2;
export class LyError {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} _theme
     */
    constructor(renderer, el, _theme) {
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        /** @type {?} */
        const className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).error;
        renderer.addClass(el.nativeElement, className);
    }
}
LyError.decorators = [
    { type: Directive, args: [{
                selector: 'ly-error'
            },] }
];
/** @nocollapse */
LyError.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
if (false) {
    /** @type {?} */
    LyError.prototype.classes;
    /** @type {?} */
    LyError.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7TUFHNUIsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUt6QixNQUFNLE9BQU8sT0FBTzs7Ozs7O0lBRWxCLFlBQ0UsUUFBbUIsRUFDbkIsRUFBYyxFQUNOLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFKakIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQzs7Y0FNN0QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLEtBQUs7UUFDcEUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQVRtQixTQUFTO1lBQUUsVUFBVTtZQUNoQyxRQUFROzs7O0lBVWYsMEJBQXFFOztJQUluRSx5QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU1RZTEVTIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4vKiogTHlFcnJvciAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZXJyb3InXG59KVxuZXhwb3J0IGNsYXNzIEx5RXJyb3Ige1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgICApIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBfdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKS5lcnJvcjtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG59XG4iXX0=