/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
export class LyTabsClassesService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.tabs = this.theme.setUpStyle('k-tabs', () => (`display:block;` +
            `overflow:hidden;`));
        this.tabsLabels = this.theme.setUpStyle('k-tab-labels', () => (`display: flex;` +
            `position: relative;` +
            `flex-grow: 1;` +
            `overflow: hidden;`));
        this.tab = this.theme.setUpStyle('k-tab', () => (`position: relative;` +
            `display: inline-flex;`));
        this.tabLabel = this.theme.setUpStyle('k-tab-label', () => (`min-width: 72px;` +
            `padding: 0 24px;` +
            `cursor: pointer;` +
            `height: 48px;` +
            `display: inline-flex;` +
            `justify-content: center;` +
            `align-items: center;`));
        this.tabContents = this.theme.setUpStyle('k-tab-contents', () => (`display: flex;` +
            `transition: 450ms cubic-bezier(.1, 1, 0.5, 1);` +
            `will-change: transform;`));
        this.tabContent = this.theme.setUpStyle('k-tab-content', () => (`width: 100%;` +
            `flex-shrink: 0;` +
            `position: relative;`));
        this.tabsIndicator = this.theme.setUpStyle('k-tabs-indicator', () => (`position: absolute;` +
            `transition: 450ms cubic-bezier(.1, 1, 0.5, 1);` +
            `bottom: 0;` +
            `height: 2px;` +
            `left: 0;` +
            `background: currentColor;`));
        this.tabsIndicatorForServer = this.theme.setUpStyle('k-tabs-indicator-server', () => (`width: 100%;`));
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
    LyTabsClassesService.prototype.tabs;
    /** @type {?} */
    LyTabsClassesService.prototype.tabsLabels;
    /** @type {?} */
    LyTabsClassesService.prototype.tab;
    /** @type {?} */
    LyTabsClassesService.prototype.tabLabel;
    /** @type {?} */
    LyTabsClassesService.prototype.tabContents;
    /** @type {?} */
    LyTabsClassesService.prototype.tabContent;
    /** @type {?} */
    LyTabsClassesService.prototype.tabsIndicator;
    /** @type {?} */
    LyTabsClassesService.prototype.tabsIndicatorForServer;
    /** @type {?} */
    LyTabsClassesService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jbGFzZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuY2xhc2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUtyQyxNQUFNOzs7O0lBcUVKLFlBQ1U7UUFBQSxVQUFLLEdBQUwsS0FBSztvQkFyRVIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzFCLFFBQVEsRUFDUixHQUFHLEVBQUUsQ0FBQyxDQUNKLGdCQUFnQjtZQUNoQixrQkFBa0IsQ0FDbkIsQ0FDRjswQkFDWSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDaEMsY0FBYyxFQUNkLEdBQUcsRUFBRSxDQUFDLENBQ0osZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YsbUJBQW1CLENBQ3BCLENBQ0Y7bUJBQ0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ3pCLE9BQU8sRUFDUCxHQUFHLEVBQUUsQ0FBQyxDQUNKLHFCQUFxQjtZQUNyQix1QkFBdUIsQ0FDeEIsQ0FDRjt3QkFDVSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDOUIsYUFBYSxFQUNiLEdBQUcsRUFBRSxDQUFDLENBQ0osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLHVCQUF1QjtZQUN2QiwwQkFBMEI7WUFDMUIsc0JBQXNCLENBQ3ZCLENBQ0Y7MkJBQ2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2pDLGdCQUFnQixFQUNoQixHQUFHLEVBQUUsQ0FBQyxDQUNKLGdCQUFnQjtZQUNoQixnREFBZ0Q7WUFDaEQseUJBQXlCLENBQzFCLENBQ0Y7MEJBQ1ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2hDLGVBQWUsRUFDZixHQUFHLEVBQUUsQ0FBQyxDQUNKLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIscUJBQXFCLENBQ3RCLENBQ0Y7NkJBQ2UsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ25DLGtCQUFrQixFQUNsQixHQUFHLEVBQUUsQ0FBQyxDQUNKLHFCQUFxQjtZQUNyQixnREFBZ0Q7WUFDaEQsWUFBWTtZQUNaLGNBQWM7WUFDZCxVQUFVO1lBQ1YsMkJBQTJCLENBQzVCLENBQ0Y7c0NBQ3dCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUM1Qyx5QkFBeUIsRUFDekIsR0FBRyxFQUFFLENBQUMsQ0FDSixjQUFjLENBQ2YsQ0FDRjtLQUdJOzs7WUExRU4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzQ2xhc3Nlc1NlcnZpY2Uge1xuICB0YWJzID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYnMnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgYG92ZXJmbG93OmhpZGRlbjtgXG4gICAgKVxuICApO1xuICB0YWJzTGFiZWxzID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYi1sYWJlbHMnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgIGBmbGV4LWdyb3c6IDE7YCArXG4gICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgXG4gICAgKVxuICApO1xuICB0YWIgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFiJyxcbiAgICAoKSA9PiAoXG4gICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgYGRpc3BsYXk6IGlubGluZS1mbGV4O2BcbiAgICApXG4gICk7XG4gIHRhYkxhYmVsID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYi1sYWJlbCcsXG4gICAgKCkgPT4gKFxuICAgICAgYG1pbi13aWR0aDogNzJweDtgICtcbiAgICAgIGBwYWRkaW5nOiAwIDI0cHg7YCArXG4gICAgICBgY3Vyc29yOiBwb2ludGVyO2AgK1xuICAgICAgYGhlaWdodDogNDhweDtgICtcbiAgICAgIGBkaXNwbGF5OiBpbmxpbmUtZmxleDtgICtcbiAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgICtcbiAgICAgIGBhbGlnbi1pdGVtczogY2VudGVyO2BcbiAgICApXG4gICk7XG4gIHRhYkNvbnRlbnRzID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYi1jb250ZW50cycsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICBgdHJhbnNpdGlvbjogNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07YFxuICAgIClcbiAgKTtcbiAgdGFiQ29udGVudCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItY29udGVudCcsXG4gICAgKCkgPT4gKFxuICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgYGZsZXgtc2hyaW5rOiAwO2AgK1xuICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgXG4gICAgKVxuICApO1xuICB0YWJzSW5kaWNhdG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYnMtaW5kaWNhdG9yJyxcbiAgICAoKSA9PiAoXG4gICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgYHRyYW5zaXRpb246IDQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGBib3R0b206IDA7YCArXG4gICAgICBgaGVpZ2h0OiAycHg7YCArXG4gICAgICBgbGVmdDogMDtgICtcbiAgICAgIGBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7YFxuICAgIClcbiAgKTtcbiAgdGFic0luZGljYXRvckZvclNlcnZlciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWJzLWluZGljYXRvci1zZXJ2ZXInLFxuICAgICgpID0+IChcbiAgICAgIGB3aWR0aDogMTAwJTtgXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIl19