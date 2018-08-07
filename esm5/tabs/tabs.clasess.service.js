/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var LyTabsClassesService = /** @class */ (function () {
    function LyTabsClassesService(theme) {
        this.theme = theme;
        this.tabs = this.theme.setUpStyle('k-tabs', function () {
            return ("display:block;" +
                "overflow:hidden;");
        });
        this.tabsLabels = this.theme.setUpStyle('k-tab-labels', function () {
            return ("display: flex;" +
                "position: relative;" +
                "flex-grow: 1;" +
                "overflow: hidden;");
        });
        this.tab = this.theme.setUpStyle('k-tab', function () {
            return ("position: relative;" +
                "display: inline-flex;");
        });
        this.tabLabel = this.theme.setUpStyle('k-tab-label', function () {
            return ("min-width: 72px;" +
                "padding: 0 24px;" +
                "cursor: pointer;" +
                "height: 48px;" +
                "display: inline-flex;" +
                "justify-content: center;" +
                "align-items: center;");
        });
        this.tabContents = this.theme.setUpStyle('k-tab-contents', function () {
            return ("display: flex;" +
                "transition: 450ms cubic-bezier(.1, 1, 0.5, 1);" +
                "will-change: transform;");
        });
        this.tabContent = this.theme.setUpStyle('k-tab-content', function () {
            return ("width: 100%;" +
                "flex-shrink: 0;" +
                "position: relative;");
        });
        this.tabsIndicator = this.theme.setUpStyle('k-tabs-indicator', function () {
            return ("position: absolute;" +
                "transition: 450ms cubic-bezier(.1, 1, 0.5, 1);" +
                "bottom: 0;" +
                "height: 2px;" +
                "left: 0;" +
                "background: currentColor;");
        });
        this.tabsIndicatorForServer = this.theme.setUpStyle('k-tabs-indicator-server', function () {
            return ("width: 100%;");
        });
    }
    LyTabsClassesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyTabsClassesService.ctorParameters = function () { return [
        { type: LyTheme2, },
    ]; };
    /** @nocollapse */ LyTabsClassesService.ngInjectableDef = i0.defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(i0.inject(i1.LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });
    return LyTabsClassesService;
}());
export { LyTabsClassesService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jbGFzZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuY2xhc2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7SUEwRW5DLDhCQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7b0JBckVSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUMxQixRQUFRLEVBQ1I7WUFBTSxPQUFBLENBQ0osZ0JBQWdCO2dCQUNoQixrQkFBa0IsQ0FDbkI7UUFISyxDQUdMLENBQ0Y7MEJBQ1ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2hDLGNBQWMsRUFDZDtZQUFNLE9BQUEsQ0FDSixnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjtnQkFDckIsZUFBZTtnQkFDZixtQkFBbUIsQ0FDcEI7UUFMSyxDQUtMLENBQ0Y7bUJBQ0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ3pCLE9BQU8sRUFDUDtZQUFNLE9BQUEsQ0FDSixxQkFBcUI7Z0JBQ3JCLHVCQUF1QixDQUN4QjtRQUhLLENBR0wsQ0FDRjt3QkFDVSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDOUIsYUFBYSxFQUNiO1lBQU0sT0FBQSxDQUNKLGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixrQkFBa0I7Z0JBQ2xCLGVBQWU7Z0JBQ2YsdUJBQXVCO2dCQUN2QiwwQkFBMEI7Z0JBQzFCLHNCQUFzQixDQUN2QjtRQVJLLENBUUwsQ0FDRjsyQkFDYSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDakMsZ0JBQWdCLEVBQ2hCO1lBQU0sT0FBQSxDQUNKLGdCQUFnQjtnQkFDaEIsZ0RBQWdEO2dCQUNoRCx5QkFBeUIsQ0FDMUI7UUFKSyxDQUlMLENBQ0Y7MEJBQ1ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2hDLGVBQWUsRUFDZjtZQUFNLE9BQUEsQ0FDSixjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIscUJBQXFCLENBQ3RCO1FBSkssQ0FJTCxDQUNGOzZCQUNlLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUNuQyxrQkFBa0IsRUFDbEI7WUFBTSxPQUFBLENBQ0oscUJBQXFCO2dCQUNyQixnREFBZ0Q7Z0JBQ2hELFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxVQUFVO2dCQUNWLDJCQUEyQixDQUM1QjtRQVBLLENBT0wsQ0FDRjtzQ0FDd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzVDLHlCQUF5QixFQUN6QjtZQUFNLE9BQUEsQ0FDSixjQUFjLENBQ2Y7UUFGSyxDQUVMLENBQ0Y7S0FHSTs7Z0JBMUVOLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsUUFBUTs7OytCQURqQjs7U0FNYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic0NsYXNzZXNTZXJ2aWNlIHtcbiAgdGFicyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWJzJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgIGBvdmVyZmxvdzpoaWRkZW47YFxuICAgIClcbiAgKTtcbiAgdGFic0xhYmVscyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItbGFiZWxzJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICBgZmxleC1ncm93OiAxO2AgK1xuICAgICAgYG92ZXJmbG93OiBoaWRkZW47YFxuICAgIClcbiAgKTtcbiAgdGFiID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYicsXG4gICAgKCkgPT4gKFxuICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgIGBkaXNwbGF5OiBpbmxpbmUtZmxleDtgXG4gICAgKVxuICApO1xuICB0YWJMYWJlbCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItbGFiZWwnLFxuICAgICgpID0+IChcbiAgICAgIGBtaW4td2lkdGg6IDcycHg7YCArXG4gICAgICBgcGFkZGluZzogMCAyNHB4O2AgK1xuICAgICAgYGN1cnNvcjogcG9pbnRlcjtgICtcbiAgICAgIGBoZWlnaHQ6IDQ4cHg7YCArXG4gICAgICBgZGlzcGxheTogaW5saW5lLWZsZXg7YCArXG4gICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgXG4gICAgKVxuICApO1xuICB0YWJDb250ZW50cyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItY29udGVudHMnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgYHRyYW5zaXRpb246IDQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2BcbiAgICApXG4gICk7XG4gIHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFiLWNvbnRlbnQnLFxuICAgICgpID0+IChcbiAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgIGBmbGV4LXNocmluazogMDtgICtcbiAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgIClcbiAgKTtcbiAgdGFic0luZGljYXRvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWJzLWluZGljYXRvcicsXG4gICAgKCkgPT4gKFxuICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiA0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgYGhlaWdodDogMnB4O2AgK1xuICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICBgYmFja2dyb3VuZDogY3VycmVudENvbG9yO2BcbiAgICApXG4gICk7XG4gIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFicy1pbmRpY2F0b3Itc2VydmVyJyxcbiAgICAoKSA9PiAoXG4gICAgICBgd2lkdGg6IDEwMCU7YFxuICAgIClcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiJdfQ==