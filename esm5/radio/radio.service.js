/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
var styles = ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    labelContent: {
        padding: '0 0.5em'
    }
});
var LyRadioService = /** @class */ (function () {
    function LyRadioService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyRadioStatic');
    }
    LyRadioService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRadioService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyRadioService.ngInjectableDef = i0.defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(i0.inject(i1.LyTheme2)); }, token: LyRadioService, providedIn: "root" });
    return LyRadioService;
}());
export { LyRadioService };
if (false) {
    /** @type {?} */
    LyRadioService.prototype.classes;
    /** @type {?} */
    LyRadioService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yYWRpby8iLCJzb3VyY2VzIjpbInJhZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUVyQyxJQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0NBQ0YsQ0FBQyxDQUFDOztJQU9ELHdCQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7dUJBRkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQztLQUd0RDs7Z0JBUE4sVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFkUSxRQUFROzs7eUJBRGpCOztTQWdCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcbiAgbGFiZWxDb250ZW50OiB7XG4gICAgcGFkZGluZzogJzAgMC41ZW0nXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlSYWRpb1N0YXRpYycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIl19