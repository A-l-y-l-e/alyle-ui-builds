import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LyTooltip } from './tooltip';
import { LyOverlayModule } from '@alyle/ui';
var LyTooltipModule = /** @class */ (function () {
    function LyTooltipModule() {
    }
    LyTooltipModule = tslib_1.__decorate([
        NgModule({
            imports: [LyOverlayModule],
            declarations: [LyTooltip],
            exports: [LyTooltip]
        })
    ], LyTooltipModule);
    return LyTooltipModule;
}());
export { LyTooltipModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdG9vbHRpcC8iLCJzb3VyY2VzIjpbInRvb2x0aXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU81QztJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQUwzQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDMUIsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUNyQixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUb29sdGlwXSxcbiAgZXhwb3J0czogW0x5VG9vbHRpcF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwTW9kdWxlIHsgfVxuIl19