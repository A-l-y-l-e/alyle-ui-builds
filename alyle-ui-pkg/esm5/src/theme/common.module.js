import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LyPaper } from './paper';
import { LyWithClass } from './with-class.directive';
var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule = tslib_1.__decorate([
        NgModule({
            declarations: [LyWithClass, LyPaper],
            exports: [LyWithClass, LyPaper]
        })
    ], LyCommonModule);
    return LyCommonModule;
}());
export { LyCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTXJEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBSjFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7WUFDcEMsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztTQUNoQyxDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlQYXBlciB9IGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdLFxuICBleHBvcnRzOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIl19