import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input, OnInit, OnChanges, } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, ThemeVariables, styleTemplateToString, StyleCollection, LyClasses, StyleTemplate, ThemeRef, StyleRenderer, LyHostClass } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_POSITION = 'fixed';
var DEFAULT_BG = 'background:tertiary';
var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{padding:0 16px;display:flex;box-sizing:border-box;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:64px;z-index:" + theme.zIndex.toolbar + ";}" + styleTemplateToString(((theme.toolbar
            && theme.toolbar.root
            && (theme.toolbar.root instanceof StyleCollection
                ? theme.toolbar.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.toolbar.root(__)))), "" + className) + className + " " + theme.getBreakpoint('XSmall') + "{height:56px;}"; }; }
    };
};
var ɵ0 = STYLES;
/** @docs-private */
var LyToolbarBase = /** @class */ (function () {
    function LyToolbarBase(_theme) {
        this._theme = _theme;
    }
    return LyToolbarBase;
}());
export { LyToolbarBase };
/** @docs-private */
export var LyToolbarMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(LyToolbarBase))))))));
var LyToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(LyToolbar, _super);
    function LyToolbar(_renderer, _el, theme, _sr) {
        var _this = _super.call(this, theme) || this;
        _this._el = _el;
        _this.theme = theme;
        _this._sr = _sr;
        /**
         * Styles
         * @docs-private
         */
        _this.classes = _this.theme.renderStyleSheet(STYLES);
        _this.setAutoContrast();
        _renderer.addClass(_this._el.nativeElement, _this.classes.root);
        return _this;
    }
    Object.defineProperty(LyToolbar.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (val) {
            this._position = val;
            this._positionClass = this.theme.addStyle("lyToolbar.position:" + val, "position:" + val, this._el.nativeElement, this._positionClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyToolbar.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                this._appearanceClass = this._sr.add("LyToolbar.appearance:" + val, function (theme, ref) {
                    var classes = ref.selectorsOf(STYLES);
                    if (theme.toolbar && theme.toolbar.appearance) {
                        var appearance = theme.toolbar.appearance[val];
                        if (appearance) {
                            return appearance instanceof StyleCollection
                                ? appearance.setTransformer(function (_) { return _(classes); }).css
                                : appearance(classes);
                        }
                    }
                    throw new Error(val + " not found in theme.field.appearance");
                }, STYLE_PRIORITY, this._appearanceClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyToolbar.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyToolbar.prototype.ngOnInit = function () {
        if (!this.position) {
            this.position = DEFAULT_POSITION;
        }
        if (!this.bg) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
        }
    };
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: StyleRenderer }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyToolbar.prototype, "position", null);
    tslib_1.__decorate([
        Input()
    ], LyToolbar.prototype, "appearance", null);
    LyToolbar = tslib_1.__decorate([
        Directive({
            selector: 'ly-toolbar',
            inputs: [
                'bg',
                'color',
                'raised',
                'outlined',
                'elevation',
                'shadowColor'
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
    ], LyToolbar);
    return LyToolbar;
}(LyToolbarMixinBase));
export { LyToolbar };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2IsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFFBQVEsRUFDUixhQUFhLEVBQ2IsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBZ0JqQyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztBQUNqQyxJQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQztBQUV6QyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQTBDLEVBQUUsR0FBYTtJQUN2RSxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLE9BQU87UUFDTCxTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsY0FBTSxPQUFBLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsbUpBQThJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFLLHFCQUFxQixDQUFDLENBQ3RPLENBQUMsS0FBSyxDQUFDLE9BQU87ZUFDVCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7ZUFDbEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxlQUFlO2dCQUMvQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENB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XG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBUaGVtZVJlZixcbiAgU3R5bGVSZW5kZXJlcixcbiAgTHlIb3N0Q2xhc3MgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5VG9vbGJhclRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgVG9vbGJhciBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGFwcGVhcmFuY2U/OiB7XG4gICAgW2tleTogc3RyaW5nXTogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5VG9vbGJhclZhcmlhYmxlcyB7XG4gIHRvb2xiYXI/OiBMeVRvb2xiYXJUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfUE9TSVRJT04gPSAnZml4ZWQnO1xuY29uc3QgREVGQVVMVF9CRyA9ICdiYWNrZ3JvdW5kOnRlcnRpYXJ5JztcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5VG9vbGJhclZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgcm9vdDogKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6ZmxleDtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDtoZWlnaHQ6NjRweDt6LWluZGV4OiR7dGhlbWUuekluZGV4LnRvb2xiYXJ9O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLnRvb2xiYXJcbiAgICAgICAgICAgICYmIHRoZW1lLnRvb2xiYXIucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnRvb2xiYXIucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLnRvb2xiYXIucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihfXykpLmNzc1xuICAgICAgICAgICAgICA6IHRoZW1lLnRvb2xiYXIucm9vdChfXykpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX0gJHt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKX17aGVpZ2h0OjU2cHg7fWBcbiAgfTtcbn07XG5cbnR5cGUgcG9zaXRpb24gPSAnc3RhdGljJyB8ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreScgfCAncmVsYXRpdmUnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VG9vbGJhckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VG9vbGJhck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgICAgbWl4aW5Db2xvcihcbiAgICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlUb29sYmFyQmFzZSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJ1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIGV4dGVuZHMgTHlUb29sYmFyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IHBvc2l0aW9uO1xuICBwcml2YXRlIF9wb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24odmFsOiBwb3NpdGlvbikge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsO1xuICAgIHRoaXMuX3Bvc2l0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRvb2xiYXIucG9zaXRpb246JHt2YWx9YCwgYHBvc2l0aW9uOiR7dmFsfWAsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3Bvc2l0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogcG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fc3IuYWRkKFxuICAgICAgICBgTHlUb29sYmFyLmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBMeVRvb2xiYXJWYXJpYWJsZXMsIHJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgICAgICAgICBpZiAodGhlbWUudG9vbGJhciAmJiB0aGVtZS50b29sYmFyLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS50b29sYmFyLmFwcGVhcmFuY2VbdmFsXTtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcHBlYXJhbmNlIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgPyBhcHBlYXJhbmNlLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKGNsYXNzZXMpKS5jc3NcbiAgICAgICAgICAgICAgICA6IGFwcGVhcmFuY2UoY2xhc3Nlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5maWVsZC5hcHBlYXJhbmNlYCk7XG4gICAgICAgIH0sXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfc3I6IFN0eWxlUmVuZGVyZXJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gREVGQVVMVF9QT1NJVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxufVxuIl19