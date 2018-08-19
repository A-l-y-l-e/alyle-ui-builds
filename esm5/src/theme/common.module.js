/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LyCommon } from './common.directive';
import { LY_GLOBAL_CONTRAST } from './contrast';
import { LyNewRaised } from './raised.directive';
import { LyThemeContainer } from './theme.directive';
import { LyWithClass } from './with-class.directive';
var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyCommon, LyNewRaised, LyThemeContainer, LyWithClass],
                    exports: [LyCommon, LyNewRaised, LyThemeContainer, LyWithClass],
                    providers: [
                        { provide: LY_GLOBAL_CONTRAST, useValue: false }
                    ]
                },] },
    ];
    return LyCommonModule;
}());
export { LyCommonModule };
function LyCommonModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCommonModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCommonModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Z0JBRXBELFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztvQkFDcEUsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7b0JBQy9ELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO3FCQUNqRDtpQkFDRjs7eUJBZEQ7O1NBZWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5Q29tbW9uIH0gZnJvbSAnLi9jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IExZX0dMT0JBTF9DT05UUkFTVCB9IGZyb20gJy4vY29udHJhc3QnO1xuaW1wb3J0IHsgTHlOZXdSYWlzZWQgfSBmcm9tICcuL3JhaXNlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5V2l0aENsYXNzIH0gZnJvbSAnLi93aXRoLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5Q29tbW9uLCBMeU5ld1JhaXNlZCwgTHlUaGVtZUNvbnRhaW5lciwgTHlXaXRoQ2xhc3NdLFxuICBleHBvcnRzOiBbTHlDb21tb24sIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyLCBMeVdpdGhDbGFzc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTFlfR0xPQkFMX0NPTlRSQVNULCB1c2VWYWx1ZTogZmFsc2UgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIl19