import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule } from '@alyle/ui';
import { LyField, LyNativeControl, STYLES } from './field';
import { LyPlaceholder } from './placeholder';
import { LyLabel } from './label';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { LyHint } from './hint';
import { LyError } from './error';
import { LY_FIELD_STYLES_TOKEN } from './field-styles-token';
const ɵ0 = STYLES;
let LyFieldModule = class LyFieldModule {
};
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
        providers: [
            {
                provide: LY_FIELD_STYLES_TOKEN,
                useValue: ɵ0
            }
        ],
        declarations: [LyField, LyPlaceholder, LyLabel, LyNativeControl, LyPrefix, LySuffix, LyHint, LyError]
    })
], LyFieldModule);
export { LyFieldModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsiZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztXQXFCN0MsTUFBTTtBQUt0QixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0NBQUksQ0FBQTtBQUFqQixhQUFhO0lBeEJ6QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osY0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTztZQUNQLGFBQWE7WUFDYixPQUFPO1lBQ1AsZUFBZTtZQUNmLFFBQVE7WUFDUixRQUFRO1lBQ1IsTUFBTTtZQUNOLE9BQU87WUFDUCxjQUFjO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixRQUFRLElBQVE7YUFDakI7U0FDRjtRQUNELFlBQVksRUFBRSxDQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUU7S0FDeEcsQ0FBQztHQUNXLGFBQWEsQ0FBSTtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUZpZWxkLCBMeU5hdGl2ZUNvbnRyb2wsIFNUWUxFUyB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBMWV9GSUVMRF9TVFlMRVNfVE9LRU4gfSBmcm9tICcuL2ZpZWxkLXN0eWxlcy10b2tlbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5RmllbGQsXG4gICAgTHlQbGFjZWhvbGRlcixcbiAgICBMeUxhYmVsLFxuICAgIEx5TmF0aXZlQ29udHJvbCxcbiAgICBMeVByZWZpeCxcbiAgICBMeVN1ZmZpeCxcbiAgICBMeUhpbnQsXG4gICAgTHlFcnJvcixcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBMWV9GSUVMRF9TVFlMRVNfVE9LRU4sXG4gICAgICB1c2VWYWx1ZTogU1RZTEVTXG4gICAgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTHlGaWVsZCwgTHlQbGFjZWhvbGRlciwgTHlMYWJlbCwgTHlOYXRpdmVDb250cm9sLCBMeVByZWZpeCwgTHlTdWZmaXgsIEx5SGludCwgTHlFcnJvciBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGRNb2R1bGUgeyB9XG4iXX0=