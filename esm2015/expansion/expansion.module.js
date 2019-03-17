/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTranscludeModule, LyExpansionIconModule } from '@alyle/ui';
import { LyAccordion } from './accordion';
import { LyExpansionPanel } from './expansion-panel';
import { LyExpansionPanelHeader } from './expansion-panel-header';
import { LyExpansionPanelContent } from './expansion-panel-content';
import { LyExpansionPanelTitle } from './expansion-panel-title';
import { LyExpansionPanelDescription } from './expansion-panel-description';
import { LyExpansionPanelAction } from './expansion-panel-action-row';
export class LyExpansionModule {
}
LyExpansionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LyAccordion,
                    LyExpansionPanel,
                    LyExpansionPanelHeader,
                    LyExpansionPanelContent,
                    LyExpansionPanelTitle,
                    LyExpansionPanelDescription,
                    LyExpansionPanelAction
                ],
                imports: [
                    CommonModule,
                    LyExpansionIconModule,
                    NgTranscludeModule
                ],
                exports: [
                    LyAccordion,
                    LyExpansionPanel,
                    LyExpansionPanelHeader,
                    LyExpansionPanelContent,
                    LyExpansionPanelTitle,
                    LyExpansionPanelDescription,
                    LyExpansionPanelAction
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9leHBhbnNpb24vIiwic291cmNlcyI6WyJleHBhbnNpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQTJCdEUsTUFBTSxPQUFPLGlCQUFpQjs7O1lBekI3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQiwyQkFBMkI7b0JBQzNCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsMkJBQTJCO29CQUMzQixzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nVHJhbnNjbHVkZU1vZHVsZSwgTHlFeHBhbnNpb25JY29uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBMeUV4cGFuc2lvblBhbmVsIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbEhlYWRlciB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlcic7XG5pbXBvcnQgeyBMeUV4cGFuc2lvblBhbmVsQ29udGVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbFRpdGxlIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtdGl0bGUnO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbEFjdGlvbiB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMeUFjY29yZGlvbixcbiAgICBMeUV4cGFuc2lvblBhbmVsLFxuICAgIEx5RXhwYW5zaW9uUGFuZWxIZWFkZXIsXG4gICAgTHlFeHBhbnNpb25QYW5lbENvbnRlbnQsXG4gICAgTHlFeHBhbnNpb25QYW5lbFRpdGxlLFxuICAgIEx5RXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbixcbiAgICBMeUV4cGFuc2lvblBhbmVsQWN0aW9uXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlFeHBhbnNpb25JY29uTW9kdWxlLFxuICAgIE5nVHJhbnNjbHVkZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTHlBY2NvcmRpb24sXG4gICAgTHlFeHBhbnNpb25QYW5lbCxcbiAgICBMeUV4cGFuc2lvblBhbmVsSGVhZGVyLFxuICAgIEx5RXhwYW5zaW9uUGFuZWxDb250ZW50LFxuICAgIEx5RXhwYW5zaW9uUGFuZWxUaXRsZSxcbiAgICBMeUV4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24sXG4gICAgTHlFeHBhbnNpb25QYW5lbEFjdGlvblxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uTW9kdWxlIHsgfVxuIl19