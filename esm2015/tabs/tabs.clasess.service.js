/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
const /** @type {?} */ tabsStyles = {
    root: {
        display: 'block',
        overflow: 'hidden'
    },
    tab: {
        position: 'relative',
        display: 'inline-flex'
    },
    tabsLabels: {
        display: 'flex',
        position: 'relative',
        'flex-grow': 1,
        overflow: 'hidden'
    },
    tabLabel: {
        'min-width': '72px',
        padding: '0 24px',
        cursor: 'pointer',
        height: '48px',
        display: 'inline-flex',
        'justify-content': 'center',
        'align-items': 'center'
    },
    tabContents: {
        display: 'flex',
        transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
        'will-change': 'transform'
    },
    tabContent: {
        width: '100%',
        'flex-shrink': 0,
        position: 'relative'
    },
    tabsIndicator: {
        position: 'absolute',
        transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
        bottom: 0,
        height: '2px',
        left: 0,
        background: 'currentColor'
    },
    tabsIndicatorForServer: {
        width: '100%'
    }
};
export class LyTabsClassesService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        console.log('name', theme.config.name);
        this.classes = theme.addStyleSheet(tabsStyles, 'lyTabs');
    }
}
LyTabsClassesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyTabsClassesService.ctorParameters = () => [
    { type: LyTheme2, },
];
/** @nocollapse */ LyTabsClassesService.ngInjectableDef = i0.defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(i0.inject(i1.LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });
function LyTabsClassesService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTabsClassesService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTabsClassesService.ctorParameters;
    /** @type {?} */
    LyTabsClassesService.prototype.classes;
    /** @type {?} */
    LyTabsClassesService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jbGFzZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuY2xhc2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUVyQyx1QkFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxHQUFHLEVBQUU7UUFDSCxRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsYUFBYTtLQUN2QjtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNSLFdBQVcsRUFBRSxNQUFNO1FBQ25CLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLGFBQWE7UUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixhQUFhLEVBQUUsUUFBUTtLQUN4QjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxhQUFhLEVBQUUsV0FBVztLQUMzQjtJQUNELFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxNQUFNO1FBQ2IsYUFBYSxFQUFFLENBQUM7UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDRCxhQUFhLEVBQUU7UUFDYixRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsQ0FBQztRQUNQLFVBQVUsRUFBRSxjQUFjO0tBQzNCO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDdEIsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUM7QUFLRixNQUFNOzs7O0lBc0VKLFlBQ1U7UUFBQSxVQUFLLEdBQUwsS0FBSztRQUViLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxRDs7O1lBOUVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQW5EUSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCB0YWJzU3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICB9LFxuICB0YWJzTGFiZWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICdmbGV4LWdyb3cnOiAxLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWJMYWJlbDoge1xuICAgICdtaW4td2lkdGgnOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcidcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgJ3dpbGwtY2hhbmdlJzogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgJ2ZsZXgtc2hyaW5rJzogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYm90dG9tOiAwLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNDbGFzc2VzU2VydmljZSB7XG4gIC8vIHRhYnMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFicycsXG4gIC8vICAgKCkgPT4gKFxuICAvLyAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gIC8vICAgICBgb3ZlcmZsb3c6aGlkZGVuO2BcbiAgLy8gICApXG4gIC8vICk7XG4gIC8vIHRhYnNMYWJlbHMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFiLWxhYmVscycsXG4gIC8vICAgKCkgPT4gKFxuICAvLyAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gIC8vICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAvLyAgICAgYGZsZXgtZ3JvdzogMTtgICtcbiAgLy8gICAgIGBvdmVyZmxvdzogaGlkZGVuO2BcbiAgLy8gICApXG4gIC8vICk7XG4gIC8vIHRhYiA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgLy8gICAnay10YWInLFxuICAvLyAgICgpID0+IChcbiAgLy8gICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gIC8vICAgICBgZGlzcGxheTogaW5saW5lLWZsZXg7YFxuICAvLyAgIClcbiAgLy8gKTtcbiAgLy8gdGFiTGFiZWwgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFiLWxhYmVsJyxcbiAgLy8gICAoKSA9PiAoXG4gIC8vICAgICBgbWluLXdpZHRoOiA3MnB4O2AgK1xuICAvLyAgICAgYHBhZGRpbmc6IDAgMjRweDtgICtcbiAgLy8gICAgIGBjdXJzb3I6IHBvaW50ZXI7YCArXG4gIC8vICAgICBgaGVpZ2h0OiA0OHB4O2AgK1xuICAvLyAgICAgYGRpc3BsYXk6IGlubGluZS1mbGV4O2AgK1xuICAvLyAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAvLyAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YFxuICAvLyAgIClcbiAgLy8gKTtcbiAgLy8gdGFiQ29udGVudHMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFiLWNvbnRlbnRzJyxcbiAgLy8gICAoKSA9PiAoXG4gIC8vICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgLy8gICAgIGB0cmFuc2l0aW9uOiA0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gIC8vICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgXG4gIC8vICAgKVxuICAvLyApO1xuICAvLyB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAvLyAgICdrLXRhYi1jb250ZW50JyxcbiAgLy8gICAoKSA9PiAoXG4gIC8vICAgICBgd2lkdGg6IDEwMCU7YCArXG4gIC8vICAgICBgZmxleC1zaHJpbms6IDA7YCArXG4gIC8vICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgLy8gICApXG4gIC8vICk7XG4gIC8vIHRhYnNJbmRpY2F0b3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFicy1pbmRpY2F0b3InLFxuICAvLyAgICgpID0+IChcbiAgLy8gICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gIC8vICAgICBgdHJhbnNpdGlvbjogNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAvLyAgICAgYGJvdHRvbTogMDtgICtcbiAgLy8gICAgIGBoZWlnaHQ6IDJweDtgICtcbiAgLy8gICAgIGBsZWZ0OiAwO2AgK1xuICAvLyAgICAgYGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtgXG4gIC8vICAgKVxuICAvLyApO1xuICAvLyB0YWJzSW5kaWNhdG9yRm9yU2VydmVyID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAvLyAgICdrLXRhYnMtaW5kaWNhdG9yLXNlcnZlcicsXG4gIC8vICAgKCkgPT4gKFxuICAvLyAgICAgYHdpZHRoOiAxMDAlO2BcbiAgLy8gICApXG4gIC8vICk7XG4gIGNsYXNzZXM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCduYW1lJywgdGhlbWUuY29uZmlnLm5hbWUpO1xuICAgIHRoaXMuY2xhc3NlcyA9IHRoZW1lLmFkZFN0eWxlU2hlZXQodGFic1N0eWxlcywgJ2x5VGFicycpO1xuICB9XG59XG4iXX0=