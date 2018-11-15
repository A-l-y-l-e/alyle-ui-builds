/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
/** @type {?} */
export const LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
/** @type {?} */
const HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
export class LyHammerGestureConfig extends HammerGestureConfig {
    /**
     * @param {?} _hammerOptions
     */
    constructor(_hammerOptions) {
        super();
        this._hammerOptions = _hammerOptions;
        this.events = HAMMER_GESTURES_EVENTS;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        const recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(item => recognizer.recognizeWith(item));
        return recognizer;
    }
}
LyHammerGestureConfig.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LyHammerGestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] }] }
];
if (false) {
    /** @type {?} */
    LyHammerGestureConfig.prototype.events;
    /** @type {?} */
    LyHammerGestureConfig.prototype._hammerOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFHaEUsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFnQixtQkFBbUIsQ0FBQzs7TUFFakYsc0JBQXNCLEdBQUc7SUFDN0IsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7Q0FDWjtBQUdELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7Ozs7SUFFNUQsWUFDaUQsY0FBNkI7UUFFNUUsS0FBSyxFQUFFLENBQUM7UUFGdUMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFGOUUsV0FBTSxHQUFhLHNCQUFzQixDQUFDO0lBSzFDLENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQW9COztjQUN4QixNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJOztjQUN0RSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDOztjQUUxRCxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFOztjQUN0QixLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFOztjQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxFQUFFLEtBQUssQ0FBQztRQUVoRixHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLDRDQUE0QztRQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7Ozs7SUFHTyxpQkFBaUIsQ0FBQyxJQUFTLEVBQUUsT0FBWSxFQUFFLEdBQUcsWUFBbUI7O2NBQ2pFLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUVsRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFN0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBL0JGLFVBQVU7Ozs7NENBSU4sUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFGdkMsdUNBQTBDOztJQUV4QywrQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0J1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyBoYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgaGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIl19