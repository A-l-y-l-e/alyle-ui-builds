import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule } from '@alyle/ui';
import { LyField, LyNativeControl } from './field';
import { LyPlaceholder } from './placeholder';
import { LyLabel } from './label';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { LyHint } from './hint';
import { LyError } from './error';
var LyFieldModule = /** @class */ (function () {
    function LyFieldModule() {
    }
    LyFieldModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                LyCommonModule
            ],
            exports: [
                LyField,
                LyPlaceholder,
                LyLabel,
                LyNativeControl,
                LyPrefix,
                LySuffix,
                LyHint,
                LyError,
                LyCommonModule
            ],
            declarations: [LyField, LyPlaceholder, LyLabel, LyNativeControl, LyPrefix, LySuffix, LyHint, LyError]
        })
    ], LyFieldModule);
    return LyFieldModule;
}());
export { LyFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsiZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBb0JsQztJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWxCekIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osY0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE9BQU87Z0JBQ1AsYUFBYTtnQkFDYixPQUFPO2dCQUNQLGVBQWU7Z0JBQ2YsUUFBUTtnQkFDUixRQUFRO2dCQUNSLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxjQUFjO2FBQ2Y7WUFDRCxZQUFZLEVBQUUsQ0FBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFFO1NBQ3hHLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5RmllbGQsIEx5TmF0aXZlQ29udHJvbCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5RmllbGQsXG4gICAgTHlQbGFjZWhvbGRlcixcbiAgICBMeUxhYmVsLFxuICAgIEx5TmF0aXZlQ29udHJvbCxcbiAgICBMeVByZWZpeCxcbiAgICBMeVN1ZmZpeCxcbiAgICBMeUhpbnQsXG4gICAgTHlFcnJvcixcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTHlGaWVsZCwgTHlQbGFjZWhvbGRlciwgTHlMYWJlbCwgTHlOYXRpdmVDb250cm9sLCBMeVByZWZpeCwgTHlTdWZmaXgsIEx5SGludCwgTHlFcnJvciBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGRNb2R1bGUgeyB9XG4iXX0=