/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyShadowService } from './shadow.service';
import { LyTheme2 } from './theme2.service';
var LyNewRaised = /** @class */ (function () {
    function LyNewRaised(theme, elementRef, renderer, shadow) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.shadow = shadow;
        this.elevation = 3;
    }
    Object.defineProperty(LyNewRaised.prototype, "newRaised", {
        /** Default raised  */
        set: /**
         * Default raised
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.currentClassName = this.shadow.setShadow(this.theme, this.elementRef, this.renderer, [value[0] || this.elevation, value[1]], this.currentClassName);
        },
        enumerable: true,
        configurable: true
    });
    LyNewRaised.decorators = [
        { type: Directive, args: [{ selector: ':not([raised])[newRaised]' },] },
    ];
    /** @nocollapse */
    LyNewRaised.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyShadowService }
    ]; };
    LyNewRaised.propDecorators = {
        newRaised: [{ type: Input }]
    };
    return LyNewRaised;
}());
export { LyNewRaised };
if (false) {
    /** @type {?} */
    LyNewRaised.prototype.elevation;
    /** @type {?} */
    LyNewRaised.prototype.currentClassName;
    /** @type {?} */
    LyNewRaised.prototype.theme;
    /** @type {?} */
    LyNewRaised.prototype.elementRef;
    /** @type {?} */
    LyNewRaised.prototype.renderer;
    /** @type {?} */
    LyNewRaised.prototype.shadow;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9yYWlzZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsVUFBVSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFZMUMscUJBQ1UsT0FDQSxZQUNBLFVBQ0E7UUFIQSxVQUFLLEdBQUwsS0FBSztRQUNMLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixXQUFNLEdBQU4sTUFBTTt5QkFaSixDQUFDO0tBYVI7SUFWTCxzQkFDSSxrQ0FBUztRQUZiLHNCQUFzQjs7Ozs7O1FBQ3RCLFVBQ2MsS0FBdUI7WUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDNUo7OztPQUFBOztnQkFSRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUU7Ozs7Z0JBRjNDLFFBQVE7Z0JBSG9DLFVBQVU7Z0JBQUUsU0FBUztnQkFDakUsZUFBZTs7OzRCQVNyQixLQUFLOztzQkFWUjs7U0FNYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U2hhZG93U2VydmljZSB9IGZyb20gJy4vc2hhZG93LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi9hbHlsZS1jb25maWctc2VydmljZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICc6bm90KFtyYWlzZWRdKVtuZXdSYWlzZWRdJyB9KVxuZXhwb3J0IGNsYXNzIEx5TmV3UmFpc2VkIHtcbiAgZWxldmF0aW9uID0gMztcbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIC8qKiBEZWZhdWx0IHJhaXNlZCAgKi9cbiAgQElucHV0KClcbiAgc2V0IG5ld1JhaXNlZCh2YWx1ZTogW251bWJlciwgc3RyaW5nXSkge1xuICAgIHRoaXMuY3VycmVudENsYXNzTmFtZSA9IHRoaXMuc2hhZG93LnNldFNoYWRvdyh0aGlzLnRoZW1lLCB0aGlzLmVsZW1lbnRSZWYsIHRoaXMucmVuZGVyZXIsIFsgdmFsdWVbMF0gfHwgdGhpcy5lbGV2YXRpb24sIHZhbHVlWzFdIF0sIHRoaXMuY3VycmVudENsYXNzTmFtZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc2hhZG93OiBMeVNoYWRvd1NlcnZpY2VcbiAgKSB7IH1cbn1cbiJdfQ==