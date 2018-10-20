/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Optional, Renderer2, ElementRef, Input } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_POSITION = 'fixed';
/** @type {?} */
const DEFAULT_BG = 'background:tertiary';
/** @type {?} */
const styles = (theme) => ({
    root: {
        padding: '0 16px',
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        height: '64px',
        zIndex: theme.zIndex.toolbar,
        [theme.getBreakpoint('XSmall')]: {
            height: '56px'
        }
    }
});
const ɵ0 = styles;
/** @typedef {?} */
var position;
export class LyToolbar {
    /**
     * @param {?} renderer
     * @param {?} _el
     * @param {?} theme
     * @param {?} _common
     */
    constructor(renderer, _el, theme, _common) {
        this._el = _el;
        this.theme = theme;
        this._common = _common;
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        renderer.addClass(this._el.nativeElement, this.classes.root);
        if (this._common) {
            this._common.setAutoContrast();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set position(val) {
        this._position = val;
        this._positionClass = this.theme.addStyle(`ly-toolbar-position:${val}`, `position:${val}`, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this._common.bg) {
            this._common.bg = DEFAULT_BG;
            this._common.ngOnChanges();
        }
    }
}
LyToolbar.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar'
            },] }
];
/** @nocollapse */
LyToolbar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
LyToolbar.propDecorators = {
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyToolbar.prototype.classes;
    /** @type {?} */
    LyToolbar.prototype._position;
    /** @type {?} */
    LyToolbar.prototype._positionClass;
    /** @type {?} */
    LyToolbar.prototype._el;
    /** @type {?} */
    LyToolbar.prototype.theme;
    /** @type {?} */
    LyToolbar.prototype._common;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztBQUUvRCxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFDMUIsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7O0FBQ2pDLE1BQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDOztBQUV6QyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUUsTUFBTTtRQUNiLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztRQUM1QixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUMvQixNQUFNLEVBQUUsTUFBTTtTQUNmO0tBQ0Y7Q0FDRixDQUFDLENBQUM7Ozs7QUFPSCxNQUFNLE9BQU8sU0FBUzs7Ozs7OztJQVlwQixZQUNFLFFBQW1CLEVBQ1gsS0FDQSxPQUNZLE9BQWlCO1FBRjdCLFFBQUcsR0FBSCxHQUFHO1FBQ0gsVUFBSyxHQUFMLEtBQUs7UUFDTyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBZnZDLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBaUJ6RCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDaEM7S0FDRjs7Ozs7SUFsQkQsSUFDSSxRQUFRLENBQUMsR0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsRUFBRSxZQUFZLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDeko7Ozs7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFhRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtLQUNGOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBaENDLFNBQVM7WUFDVCxVQUFVO1lBSU8sUUFBUTtZQUFsQixRQUFRLHVCQTRDWixRQUFROzs7dUJBWlYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9QT1NJVElPTiA9ICdmaXhlZCc7XG5jb25zdCBERUZBVUxUX0JHID0gJ2JhY2tncm91bmQ6dGVydGlhcnknO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgaGVpZ2h0OiAnNjRweCcsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgudG9vbGJhcixcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBoZWlnaHQ6ICc1NnB4J1xuICAgIH1cbiAgfVxufSk7XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhdGljJyB8ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreScgfCAncmVsYXRpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9wb3NpdGlvbjogcG9zaXRpb247XG4gIHByaXZhdGUgX3Bvc2l0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbDogcG9zaXRpb24pIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbDtcbiAgICB0aGlzLl9wb3NpdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktdG9vbGJhci1wb3NpdGlvbjoke3ZhbH1gLCBgcG9zaXRpb246JHt2YWx9YCwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcG9zaXRpb25DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9jb21tb246IEx5Q29tbW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAodGhpcy5fY29tbW9uKSB7XG4gICAgICB0aGlzLl9jb21tb24uc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb21tb24uYmcpIHtcbiAgICAgIHRoaXMuX2NvbW1vbi5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLl9jb21tb24ubmdPbkNoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==