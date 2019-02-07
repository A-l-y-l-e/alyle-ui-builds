/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Platform } from '../platform/index';
import { LyTheme2 } from '../theme/theme2.service';
import * as i0 from "@angular/core";
import * as i1 from "../theme/theme2.service";
/** @type {?} */
const styles = (theme) => ({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay,
        pointerEvents: 'none'
    }
});
const ɵ0 = styles;
export class LyOverlayContainer {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles);
        this._items = new Set();
        if (Platform.isBrowser) {
            /** @type {?} */
            const container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    /**
     * @return {?}
     */
    get overlayLen() {
        return this._items.size;
    }
    /**
     * @return {?}
     */
    get containerElement() {
        return this._containerElement;
    }
    /**
     * Add instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    _add(item) {
        this._items.add(item);
        this.containerElement.appendChild(item);
        this._update();
    }
    /**
     * Remove instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    _remove(item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    }
    /**
     * Update styles for overlay container
     * @ignore
     * @private
     * @return {?}
     */
    _update() {
        if (this._items.size) {
            if (!this._isActiveOverlayContainer) {
                this._isActiveOverlayContainer = true;
                this._containerElement.classList.add(this._classes.overlay);
            }
        }
        else if (this._isActiveOverlayContainer) {
            this._containerElement.classList.remove(this._classes.overlay);
            this._isActiveOverlayContainer = false;
        }
    }
}
LyOverlayContainer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyOverlayContainer.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyOverlayContainer.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(i0.inject(i1.LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyOverlayContainer.prototype._classes;
    /**
     * @type {?}
     * @protected
     */
    LyOverlayContainer.prototype._containerElement;
    /**
     * @type {?}
     * @private
     */
    LyOverlayContainer.prototype._items;
    /**
     * @type {?}
     * @private
     */
    LyOverlayContainer.prototype._isActiveOverlayContainer;
    /**
     * @type {?}
     * @private
     */
    LyOverlayContainer.prototype.theme;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7TUFHN0MsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDNUIsYUFBYSxFQUFFLE1BQU07S0FDdEI7Q0FDRixDQUFDOztBQUtGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFRN0IsWUFDVSxLQUFlO1FBQWYsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQVJqQixhQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFPLENBQUM7UUFROUIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztrQkFDaEIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7WUFDaEUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFaRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFXRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLElBQUk7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBTUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBTU8sT0FBTztRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3RDtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7O1lBMURGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWpCUSxRQUFROzs7Ozs7OztJQW1CZixzQ0FBb0Q7Ozs7O0lBQ3BELCtDQUFrRDs7Ozs7SUFDbEQsb0NBQWdDOzs7OztJQUloQyx1REFBMkM7Ozs7O0lBRXpDLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgU2V0PGFueT4oKTtcbiAgZ2V0IG92ZXJsYXlMZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNpemU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNBY3RpdmVPdmVybGF5Q29udGFpbmVyOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfYWRkKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5hZGQoaXRlbSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9yZW1vdmUoaXRlbSkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0eWxlcyBmb3Igb3ZlcmxheSBjb250YWluZXJcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5vdmVybGF5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheSk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==