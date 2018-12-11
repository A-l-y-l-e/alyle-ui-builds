/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule } from '@alyle/ui';
import { LyField, LyInputNative } from './field';
import { LyPlaceholder } from './placeholder';
import { LyLabel } from './label';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { LyHint } from './hint';
export class LyFieldModule {
}
LyFieldModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    LyCommonModule
                ],
                exports: [
                    LyField,
                    LyPlaceholder,
                    LyLabel,
                    LyInputNative,
                    LyPrefix,
                    LySuffix,
                    LyHint,
                    LyCommonModule
                ],
                declarations: [LyField, LyPlaceholder, LyLabel, LyInputNative, LyPrefix, LySuffix, LyHint]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsiZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQW1CaEMsTUFBTSxPQUFPLGFBQWE7OztZQWpCekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU87b0JBQ1AsYUFBYTtvQkFDYixPQUFPO29CQUNQLGFBQWE7b0JBQ2IsUUFBUTtvQkFDUixRQUFRO29CQUNSLE1BQU07b0JBQ04sY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUU7YUFDN0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5RmllbGQsIEx5SW5wdXROYXRpdmUgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUZpZWxkLFxuICAgIEx5UGxhY2Vob2xkZXIsXG4gICAgTHlMYWJlbCxcbiAgICBMeUlucHV0TmF0aXZlLFxuICAgIEx5UHJlZml4LFxuICAgIEx5U3VmZml4LFxuICAgIEx5SGludCxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTHlGaWVsZCwgTHlQbGFjZWhvbGRlciwgTHlMYWJlbCwgTHlJbnB1dE5hdGl2ZSwgTHlQcmVmaXgsIEx5U3VmZml4LCBMeUhpbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkTW9kdWxlIHsgfVxuIl19