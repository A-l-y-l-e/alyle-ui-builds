import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform } from '../platform/index';
import { LyTheme2 } from '../theme/theme2.service';
import * as i0 from "@angular/core";
import * as i1 from "../theme/theme2.service";
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
let LyOverlayContainer = class LyOverlayContainer {
    constructor(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles);
        this._items = new Set();
        if (Platform.isBrowser) {
            const container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    get overlayLen() {
        return this._items.size;
    }
    get containerElement() {
        return this._containerElement;
    }
    /**
     * Add instance
     * @ignore
     */
    _add(item) {
        this._items.add(item);
        this.containerElement.insertBefore(item, this.containerElement.firstChild);
        this._update();
    }
    /**
   * Remove instance
   * @ignore
   */
    _remove(item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    }
    /**
     * Update styles for overlay container
     * @ignore
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
};
LyOverlayContainer.ctorParameters = () => [
    { type: LyTheme2 }
];
LyOverlayContainer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(i0.ɵɵinject(i1.LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
LyOverlayContainer = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LyOverlayContainer);
export { LyOverlayContainer };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUduRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzVCLGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0NBQ0YsQ0FBQyxDQUFDOztBQUtILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBUTdCLFlBQ1UsS0FBZTtRQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7UUFSakIsYUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1FBUTlCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFaRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFXRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLElBQUk7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFQzs7O0tBR0M7SUFDSCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUNuQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUEvQ2tCLFFBQVE7OztBQVRkLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0JBQWtCLENBd0Q5QjtTQXhEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm92ZXJsYXksXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIGdldCBvdmVybGF5TGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5zaXplO1xuICB9XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5pbnNlcnRCZWZvcmUoaXRlbSwgdGhpcy5jb250YWluZXJFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9yZW1vdmUoaXRlbSkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0eWxlcyBmb3Igb3ZlcmxheSBjb250YWluZXJcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5vdmVybGF5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheSk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==