/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from './theme2.service';
var LyThemeContainer = /** @class */ (function () {
    function LyThemeContainer(theme, elementRef, renderer) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(LyThemeContainer.prototype, "lyTheme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lyTheme;
        },
        set: /**
         * set theme
         * @param {?} nam
         * @return {?}
         */
        function (nam) {
            console.log("this.theme.config.name", this.theme.config.name, nam);
            this._lyTheme = nam;
            this.theme.setUpTheme(name);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyThemeContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setContainerStyle(this.elementRef.nativeElement, this.renderer);
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    LyThemeContainer.prototype._setContainerStyle = /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    function (element, renderer) {
        var _this = this;
        var /** @type {?} */ classname = this.theme.setUpStyle("theme:" + this.theme.config.name, {
            '': function () {
                return ("background-color:" + _this.theme.config["background"].default + ";" +
                    ("color:" + _this.theme.config["text"].default + ";") +
                    ("font-family:" + _this.theme.config["typography"].fontFamily + ";"));
            }
        });
        renderer.addClass(element, classname);
    };
    LyThemeContainer.decorators = [
        { type: Directive, args: [{
                    selector: '[lyTheme]',
                    providers: [LyTheme2],
                    exportAs: 'lyTheme'
                },] },
    ];
    /** @nocollapse */
    LyThemeContainer.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    LyThemeContainer.propDecorators = {
        "lyTheme": [{ type: Input },],
        "shared": [{ type: Input },],
    };
    return LyThemeContainer;
}());
export { LyThemeContainer };
function LyThemeContainer_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyThemeContainer.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyThemeContainer.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyThemeContainer.propDecorators;
    /** @type {?} */
    LyThemeContainer.prototype._lyTheme;
    /** @type {?} */
    LyThemeContainer.prototype.shared;
    /** @type {?} */
    LyThemeContainer.prototype.theme;
    /** @type {?} */
    LyThemeContainer.prototype.elementRef;
    /** @type {?} */
    LyThemeContainer.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL3RoZW1lLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBMkIxQywwQkFDUyxPQUNDLFlBQ0E7UUFGRCxVQUFLLEdBQUwsS0FBSztRQUNKLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjswQkFmRCxxQ0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7Ozs7a0JBUFcsR0FBVztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7SUFjOUIsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2RTs7Ozs7O0lBRU8sNkNBQWtCOzs7OztjQUFDLE9BQU8sRUFBRSxRQUFtQjs7UUFDckQscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBTSxFQUFFO1lBQ3pFLEVBQUUsRUFBRTtnQkFBTSxPQUFBLENBQ1Isc0JBQW9CLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxlQUFZLE9BQU8sTUFBRztxQkFDM0QsV0FBUyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sU0FBTSxPQUFPLE1BQUcsQ0FBQTtxQkFDMUMsaUJBQWUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksVUFBVSxNQUFHLENBQUEsQ0FDMUQ7WUFKUyxDQUlUO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7OztnQkF4Q3pDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNyQixRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBVFEsUUFBUTtnQkFEcUIsVUFBVTtnQkFBckIsU0FBUzs7OzRCQWdCakMsS0FBSzsyQkFVTCxLQUFLOzsyQkExQlI7O1NBV2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUaGVtZV0nLFxuICBwcm92aWRlcnM6IFtMeVRoZW1lMl0sXG4gIGV4cG9ydEFzOiAnbHlUaGVtZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlUaGVtZUNvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2x5VGhlbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIHNldCB0aGVtZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGx5VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhgdGhpcy50aGVtZS5jb25maWcubmFtZWAsIHRoaXMudGhlbWUuY29uZmlnLm5hbWUsIG5hbSk7XG4gICAgdGhpcy5fbHlUaGVtZSA9IG5hbTtcbiAgICB0aGlzLnRoZW1lLnNldFVwVGhlbWUobmFtZSk7XG4gIH1cbiAgZ2V0IGx5VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VGhlbWU7XG4gIH1cblxuICBASW5wdXQoKSBzaGFyZWQ6IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q29udGFpbmVyU3R5bGUoZWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgdGhlbWU6JHt0aGlzLnRoZW1lLmNvbmZpZy5uYW1lfWAsIHtcbiAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuYmFja2dyb3VuZC5kZWZhdWx0fTtgICtcbiAgICAgICAgYGNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kZWZhdWx0fTtgICtcbiAgICAgICAgYGZvbnQtZmFtaWx5OiR7dGhpcy50aGVtZS5jb25maWcudHlwb2dyYXBoeS5mb250RmFtaWx5fTtgXG4gICAgICApXG4gICAgfSk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iXX0=