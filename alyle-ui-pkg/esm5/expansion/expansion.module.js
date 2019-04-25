import * as tslib_1 from "tslib";
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
var LyExpansionModule = /** @class */ (function () {
    function LyExpansionModule() {
    }
    LyExpansionModule = tslib_1.__decorate([
        NgModule({
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
        })
    ], LyExpansionModule);
    return LyExpansionModule;
}());
export { LyExpansionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9leHBhbnNpb24vIiwic291cmNlcyI6WyJleHBhbnNpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQTJCdEU7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQXpCN0IsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLHVCQUF1QjtnQkFDdkIscUJBQXFCO2dCQUNyQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIsa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLHVCQUF1QjtnQkFDdkIscUJBQXFCO2dCQUNyQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjthQUN2QjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUsIEx5RXhwYW5zaW9uSWNvbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5QWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsJztcbmltcG9ydCB7IEx5RXhwYW5zaW9uUGFuZWxIZWFkZXIgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbENvbnRlbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1jb250ZW50JztcbmltcG9ydCB7IEx5RXhwYW5zaW9uUGFuZWxUaXRsZSB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLXRpdGxlJztcbmltcG9ydCB7IEx5RXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbiB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uJztcbmltcG9ydCB7IEx5RXhwYW5zaW9uUGFuZWxBY3Rpb24gfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1hY3Rpb24tcm93JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTHlBY2NvcmRpb24sXG4gICAgTHlFeHBhbnNpb25QYW5lbCxcbiAgICBMeUV4cGFuc2lvblBhbmVsSGVhZGVyLFxuICAgIEx5RXhwYW5zaW9uUGFuZWxDb250ZW50LFxuICAgIEx5RXhwYW5zaW9uUGFuZWxUaXRsZSxcbiAgICBMeUV4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24sXG4gICAgTHlFeHBhbnNpb25QYW5lbEFjdGlvblxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5RXhwYW5zaW9uSWNvbk1vZHVsZSxcbiAgICBOZ1RyYW5zY2x1ZGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5QWNjb3JkaW9uLFxuICAgIEx5RXhwYW5zaW9uUGFuZWwsXG4gICAgTHlFeHBhbnNpb25QYW5lbEhlYWRlcixcbiAgICBMeUV4cGFuc2lvblBhbmVsQ29udGVudCxcbiAgICBMeUV4cGFuc2lvblBhbmVsVGl0bGUsXG4gICAgTHlFeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uLFxuICAgIEx5RXhwYW5zaW9uUGFuZWxBY3Rpb25cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvbk1vZHVsZSB7IH1cbiJdfQ==