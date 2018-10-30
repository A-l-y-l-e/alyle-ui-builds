/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LyStyleUtils, // Do not delete this, this is necessary to generate the types correctly
Dir } from '@alyle/ui';
import { typography, iconButton, icon, zIndex, animations } from './variables';
import { Breakpoints } from '@alyle/ui/responsive';
import { RippleVariables } from '@alyle/ui/ripple';
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxZQUFZLEVBRU0sd0VBQXdFO0FBQzFGLEdBQUcsRUFDSixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5ELElBQUE7SUFBZ0Msc0NBQVk7OztRQUMxQyxtQkFBYSxVQUFVLENBQUM7UUFDeEIsbUJBQWEsVUFBVSxDQUFDO1FBQ3hCLGFBQU8sSUFBSSxDQUFDO1FBQ1osb0JBQWMsV0FBVyxDQUFDO1FBQzFCLGVBQVMsTUFBTSxDQUFDO1FBQ2hCLGVBQVMsZUFBZSxDQUFDO1FBQ3pCLG1CQUFhLFVBQVUsQ0FBQztRQUN4QixrQkFBWSxHQUFHLENBQUMsR0FBRyxDQUFDOzs7cUJBbEJ0QjtFQVVnQyxZQUFZLEVBUzNDLENBQUE7QUFURCxzQkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgVHlwb2dyYXBoeUNvbmZpZywgLy8gRG8gbm90IGRlbGV0ZSB0aGlzLCB0aGlzIGlzIG5lY2Vzc2FyeSB0byBnZW5lcmF0ZSB0aGUgdHlwZXMgY29ycmVjdGx5XG4gIElSaXBwbGVWYXJpYWJsZXMsIC8vIERvIG5vdCBkZWxldGUgdGhpcywgdGhpcyBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIHR5cGVzIGNvcnJlY3RseVxuICBEaXJcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHR5cG9ncmFwaHksIGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHR5cG9ncmFwaHk7XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xufVxuIl19