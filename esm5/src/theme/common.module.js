import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LyPaper } from './paper';
import { LyWithClass } from './with-class.directive';
import { LyStyle } from './style.directive';
var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule = tslib_1.__decorate([
        NgModule({
            declarations: [LyStyle, LyWithClass, LyPaper],
            exports: [LyStyle, LyWithClass, LyPaper]
        })
    ], LyCommonModule);
    return LyCommonModule;
}());
export { LyCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU01QztJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQUoxQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQztZQUM3QyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQztTQUN6QyxDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlQYXBlciB9IGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5U3R5bGUgfSBmcm9tICcuL3N0eWxlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5U3R5bGUsIEx5V2l0aENsYXNzLCBMeVBhcGVyXSxcbiAgZXhwb3J0czogW0x5U3R5bGUsIEx5V2l0aENsYXNzLCBMeVBhcGVyXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiJdfQ==