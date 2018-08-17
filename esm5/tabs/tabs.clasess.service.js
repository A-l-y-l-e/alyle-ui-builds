/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var /** @type {?} */ tabsStyles = {
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
var LyTabsClassesService = /** @class */ (function () {
    function LyTabsClassesService(theme) {
        this.theme = theme;
        console.log('name', theme.config.name);
        this.classes = theme.addStyleSheet(tabsStyles, 'lyTabs');
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
    LyTabsClassesService.prototype.classes;
    /** @type {?} */
    LyTabsClassesService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jbGFzZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuY2xhc2Vzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUVyQyxxQkFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxHQUFHLEVBQUU7UUFDSCxRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsYUFBYTtLQUN2QjtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNSLFdBQVcsRUFBRSxNQUFNO1FBQ25CLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLGFBQWE7UUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixhQUFhLEVBQUUsUUFBUTtLQUN4QjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxhQUFhLEVBQUUsV0FBVztLQUMzQjtJQUNELFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxNQUFNO1FBQ2IsYUFBYSxFQUFFLENBQUM7UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDRCxhQUFhLEVBQUU7UUFDYixRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsQ0FBQztRQUNQLFVBQVUsRUFBRSxjQUFjO0tBQzNCO0lBQ0Qsc0JBQXNCLEVBQUU7UUFDdEIsS0FBSyxFQUFFLE1BQU07S0FDZDtDQUNGLENBQUM7O0lBMkVBLDhCQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7UUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDMUQ7O2dCQTlFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQW5EUSxRQUFROzs7K0JBRGpCOztTQXFEYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHRhYnNTdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJ2ZsZXgtZ3Jvdyc6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHRhYkxhYmVsOiB7XG4gICAgJ21pbi13aWR0aCc6ICc3MnB4JyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJyxcbiAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJ1xuICB9LFxuICB0YWJDb250ZW50czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICAnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJ1xuICB9LFxuICB0YWJDb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAnZmxleC1zaHJpbmsnOiAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3I6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICBib3R0b206IDAsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic0NsYXNzZXNTZXJ2aWNlIHtcbiAgLy8gdGFicyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgLy8gICAnay10YWJzJyxcbiAgLy8gICAoKSA9PiAoXG4gIC8vICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgLy8gICAgIGBvdmVyZmxvdzpoaWRkZW47YFxuICAvLyAgIClcbiAgLy8gKTtcbiAgLy8gdGFic0xhYmVscyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgLy8gICAnay10YWItbGFiZWxzJyxcbiAgLy8gICAoKSA9PiAoXG4gIC8vICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgLy8gICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gIC8vICAgICBgZmxleC1ncm93OiAxO2AgK1xuICAvLyAgICAgYG92ZXJmbG93OiBoaWRkZW47YFxuICAvLyAgIClcbiAgLy8gKTtcbiAgLy8gdGFiID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAvLyAgICdrLXRhYicsXG4gIC8vICAgKCkgPT4gKFxuICAvLyAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgLy8gICAgIGBkaXNwbGF5OiBpbmxpbmUtZmxleDtgXG4gIC8vICAgKVxuICAvLyApO1xuICAvLyB0YWJMYWJlbCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgLy8gICAnay10YWItbGFiZWwnLFxuICAvLyAgICgpID0+IChcbiAgLy8gICAgIGBtaW4td2lkdGg6IDcycHg7YCArXG4gIC8vICAgICBgcGFkZGluZzogMCAyNHB4O2AgK1xuICAvLyAgICAgYGN1cnNvcjogcG9pbnRlcjtgICtcbiAgLy8gICAgIGBoZWlnaHQ6IDQ4cHg7YCArXG4gIC8vICAgICBgZGlzcGxheTogaW5saW5lLWZsZXg7YCArXG4gIC8vICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gIC8vICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgXG4gIC8vICAgKVxuICAvLyApO1xuICAvLyB0YWJDb250ZW50cyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgLy8gICAnay10YWItY29udGVudHMnLFxuICAvLyAgICgpID0+IChcbiAgLy8gICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAvLyAgICAgYHRyYW5zaXRpb246IDQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgLy8gICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2BcbiAgLy8gICApXG4gIC8vICk7XG4gIC8vIHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFiLWNvbnRlbnQnLFxuICAvLyAgICgpID0+IChcbiAgLy8gICAgIGB3aWR0aDogMTAwJTtgICtcbiAgLy8gICAgIGBmbGV4LXNocmluazogMDtgICtcbiAgLy8gICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAvLyAgIClcbiAgLy8gKTtcbiAgLy8gdGFic0luZGljYXRvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgLy8gICAnay10YWJzLWluZGljYXRvcicsXG4gIC8vICAgKCkgPT4gKFxuICAvLyAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgLy8gICAgIGB0cmFuc2l0aW9uOiA0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gIC8vICAgICBgYm90dG9tOiAwO2AgK1xuICAvLyAgICAgYGhlaWdodDogMnB4O2AgK1xuICAvLyAgICAgYGxlZnQ6IDA7YCArXG4gIC8vICAgICBgYmFja2dyb3VuZDogY3VycmVudENvbG9yO2BcbiAgLy8gICApXG4gIC8vICk7XG4gIC8vIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gIC8vICAgJ2stdGFicy1pbmRpY2F0b3Itc2VydmVyJyxcbiAgLy8gICAoKSA9PiAoXG4gIC8vICAgICBgd2lkdGg6IDEwMCU7YFxuICAvLyAgIClcbiAgLy8gKTtcbiAgY2xhc3NlcztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ25hbWUnLCB0aGVtZS5jb25maWcubmFtZSk7XG4gICAgdGhpcy5jbGFzc2VzID0gdGhlbWUuYWRkU3R5bGVTaGVldCh0YWJzU3R5bGVzLCAnbHlUYWJzJyk7XG4gIH1cbn1cbiJdfQ==