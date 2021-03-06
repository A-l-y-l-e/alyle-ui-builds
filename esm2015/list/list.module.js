import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LyCommonModule } from '@alyle/ui';
import { LyList, LyListItem, LyListIcon, LyLine } from './list';
let LyListModule = class LyListModule {
};
LyListModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [LyList, LyListItem, LyListIcon, LyLine],
        exports: [LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
    })
], LyListModule);
export { LyListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvbGlzdC8iLCJzb3VyY2VzIjpbImxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFTaEUsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUV4QixDQUFBO0FBRlksWUFBWTtJQVB4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7UUFDdEQsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztLQUNsRSxDQUFDO0dBQ1csWUFBWSxDQUV4QjtTQUZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlMaXN0LCBMeUxpc3RJdGVtLCBMeUxpc3RJY29uLCBMeUxpbmUgfSBmcm9tICcuL2xpc3QnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5TGlzdCwgTHlMaXN0SXRlbSwgTHlMaXN0SWNvbiwgTHlMaW5lXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uTW9kdWxlLCBMeUxpc3QsIEx5TGlzdEl0ZW0sIEx5TGlzdEljb24sIEx5TGluZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlMaXN0TW9kdWxlIHtcblxufVxuIl19