/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LyStyleUtils, Dir } from '@alyle/ui';
import { typography, iconButton, icon, zIndex, animations, RippleVariables } from './variables';
import { Breakpoints } from '@alyle/ui/responsive';
var MinimaBase = /** @class */ (function (_super) {
    tslib_1.__extends(MinimaBase, _super);
    function MinimaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typography = typography;
        _this.iconButton = iconButton;
        _this.icon = icon;
        _this.breakpoints = Breakpoints;
        _this.zIndex = zIndex;
        _this.ripple = RippleVariables;
        _this.animations = animations;
        _this.direction = Dir.ltr;
        _this.button = {
            size: {
                small: {
                    fontSize: _this.pxToRem(16)
                },
                medium: {
                    fontSize: _this.pxToRem(16)
                },
                large: {
                    fontSize: _this.pxToRem(16)
                }
            },
            appearance: {
                icon: {
                    minWidth: '0',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                },
                fab: {
                    minWidth: '0',
                    width: '56px',
                    height: '56px',
                    padding: 0,
                    borderRadius: '50%'
                },
                miniFab: {
                    minWidth: '0',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                }
            }
        };
        return _this;
    }
    return MinimaBase;
}(LyStyleUtils));
export { MinimaBase };
if (false) {
    /** @type {?} */
    MinimaBase.prototype.typography;
    /** @type {?} */
    MinimaBase.prototype.iconButton;
    /** @type {?} */
    MinimaBase.prototype.icon;
    /** @type {?} */
    MinimaBase.prototype.breakpoints;
    /** @type {?} */
    MinimaBase.prototype.zIndex;
    /** @type {?} */
    MinimaBase.prototype.ripple;
    /** @type {?} */
    MinimaBase.prototype.animations;
    /** @type {?} */
    MinimaBase.prototype.direction;
    /** @type {?} */
    MinimaBase.prototype.button;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osR0FBRyxFQUNKLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQ7SUFBZ0Msc0NBQVk7SUFBNUM7UUFBQSxxRUE2Q0M7UUE1Q0MsZ0JBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsZ0JBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLGlCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLFlBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsWUFBTSxHQUFHLGVBQWUsQ0FBQztRQUN6QixnQkFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixlQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixZQUFNLEdBQUc7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDM0I7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDM0I7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztpQkFDM0I7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLENBQUM7b0JBQ1YsWUFBWSxFQUFFLEtBQUs7aUJBQ3BCO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxDQUFDO29CQUNWLFlBQVksRUFBRSxLQUFLO2lCQUNwQjthQUNGO1NBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBN0NELENBQWdDLFlBQVksR0E2QzNDOzs7O0lBNUNDLGdDQUF3Qjs7SUFDeEIsZ0NBQXdCOztJQUN4QiwwQkFBWTs7SUFDWixpQ0FBMEI7O0lBQzFCLDRCQUFnQjs7SUFDaEIsNEJBQXlCOztJQUN6QixnQ0FBd0I7O0lBQ3hCLCtCQUFvQjs7SUFDcEIsNEJBbUNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTHlTdHlsZVV0aWxzLFxuICBEaXJcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucywgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xuICBidXR0b24gPSB7XG4gICAgc2l6ZToge1xuICAgICAgc21hbGw6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNilcbiAgICAgIH0sXG4gICAgICBtZWRpdW06IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNilcbiAgICAgIH0sXG4gICAgICBsYXJnZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE2KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgaWNvbjoge1xuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIGZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzAnLFxuICAgICAgICB3aWR0aDogJzU2cHgnLFxuICAgICAgICBoZWlnaHQ6ICc1NnB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIG1pbmlGYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICcwJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iXX0=