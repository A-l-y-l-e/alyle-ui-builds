import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { toBoolean, ThemeVariables, LyTheme2, getLyThemeVariableUndefinedError, ThemeRef, LyClasses, StyleTemplate } from '@alyle/ui';
import { Subject } from 'rxjs';
var STYLE_PRIORITY = -0.9;
export var STYLES = function (theme, ref) {
    var classes = ref.selectorsOf(STYLES);
    var after = theme.after;
    return {
        $priority: STYLE_PRIORITY,
        $name: LyAccordion.и,
        $global: function () { return function (className) { return className + " " + classes.panelTitle + "," + className + " " + classes.panelDescription + "{display:flex;margin-" + after + ":16px;}" + className + " " + classes.panel + ":not(" + classes.disabled + ") " + classes.panelTitle + "{color:" + theme.text.default + ";}" + className + " " + classes.panel + ":not(" + classes.disabled + ") " + classes.panelDescription + "{color:" + theme.text.secondary + ";}"; }; },
        root: (theme.expansion && theme.expansion.root) ? function () { return theme.expansion.root(classes); } : null,
        panel: function () { return function (className) { return className + "{display:block;overflow:hidden;position:relative;}" + className + ":not(" + classes.disabled + ") " + classes.panelHeader + "{cursor:pointer;}"; }; },
        panelHeader: function () { return function (className) { return className + "{display:flex;position:relative;flex-direction:row;align-items:center;padding:0 24px;transition:height " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard + ";font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(15) + ";font-weight:400;}" + classes.panel + ":not(" + classes.expanded + "):not(" + classes.disabled + ") " + className + ":hover{background:" + theme.hover + ";}@media (hover: none){" + classes.panel + ":not(" + classes.expanded + "):not(" + classes.disabled + ") " + className + ":hover{background:none;}}"; }; },
        panelHeaderContent: function (className) { return className + "{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden;}"; },
        panelContent: function (className) { return className + "{display:flex;flex-direction:column;overflow:visible;}"; },
        panelBody: function (className) { return className + "{visibility:hidden;padding:0 24px 16px;transition:visibility " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard + ";font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(14) + ";font-weight:400;line-height:" + theme.pxToRem(20) + ";}"; },
        panelTitle: function (className) { return className + "{flex-grow:1;}"; },
        panelDescription: function (className) { return className + "{flex-grow:2;}"; },
        panelActionRow: function (className) { return className + "{border-top:1px solid " + theme.divider + ";display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;}"; },
        expanded: function () { return function (className) { return className + " " + classes.panelBody + "{visibility:visible;}"; }; },
        disabled: function (className) { return className + "{color:" + theme.disabled.contrast + ";}"; }
    };
};
var LyAccordion = /** @class */ (function () {
    function LyAccordion(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._hasToggle = true;
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new Subject();
    }
    Object.defineProperty(LyAccordion.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        set: function (val) {
            this._appearance = val;
            this._appearanceClass = this._theme.addStyle("lyAccordion.appearance:" + val, function (theme, ref) {
                if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                    throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                }
                var classes = ref.selectorsOf(STYLES);
                return theme.expansion.appearance[val](classes);
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (val) {
            this._multiple = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyAccordion.prototype, "hasToggle", {
        get: function () {
            return this._hasToggle;
        },
        set: function (val) {
            this._hasToggle = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyAccordion.prototype.ngOnInit = function () {
        var expansion = this._theme.variables.expansion;
        if (expansion) {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // Apply default config
            if (expansion.defaultConfig && expansion.defaultConfig.appearance) {
                if (this.appearance == null) {
                    this.appearance = expansion.defaultConfig.appearance;
                }
            }
        }
        else {
            throw getLyThemeVariableUndefinedError('expansion');
        }
    };
    LyAccordion.prototype.closeAll = function () {
        this._openCloseAll(true);
    };
    LyAccordion.prototype.openAll = function () {
        this._openCloseAll(false);
    };
    LyAccordion.prototype._openCloseAll = function (expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    };
    /** @docs-private */
    LyAccordion.и = 'LyAccordion';
    LyAccordion.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyAccordion.prototype, "appearance", null);
    tslib_1.__decorate([
        Input()
    ], LyAccordion.prototype, "multiple", null);
    tslib_1.__decorate([
        Input()
    ], LyAccordion.prototype, "hasToggle", null);
    LyAccordion = tslib_1.__decorate([
        Directive({
            selector: 'ly-accordion',
            exportAs: 'lyAccordion'
        })
    ], LyAccordion);
    return LyAccordion;
}());
export { LyAccordion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUNMLFNBQVMsRUFDVCxjQUFjLEVBQ2QsUUFBUSxFQUNSLGdDQUFnQyxFQUNoQyxRQUFRLEVBQ1IsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZS9CLElBQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQTBDLEVBQUUsR0FBYTtJQUU5RSxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLElBQUEsbUJBQUssQ0FBVztJQUV4QixPQUFPO1FBQ0wsU0FBUyxFQUFFLGNBQWM7UUFDekIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxjQUFPLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxTQUFJLE9BQU8sQ0FBQyxVQUFVLFNBQUksU0FBUyxTQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsNkJBQXdCLEtBQUssZUFBVSxTQUFTLFNBQUksT0FBTyxDQUFDLEtBQUssYUFBUSxPQUFPLENBQUMsUUFBUSxVQUFLLE9BQU8sQ0FBQyxVQUFVLGVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQUssU0FBUyxTQUFJLE9BQU8sQ0FBQyxLQUFLLGFBQVEsT0FBTyxDQUFDLFFBQVEsVUFBSyxPQUFPLENBQUMsZ0JBQWdCLGVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLE9B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LFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUM7T0FDVyxXQUFXLENBd0Z2QjtJQUFELGtCQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0F4RlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0b0Jvb2xlYW4sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBMeVRoZW1lMixcbiAgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IsXG4gIFRoZW1lUmVmLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cGFuc2lvbkNvbmZpZyB7XG4gIHJvb3Q/OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlO1xuICBkZWZhdWx0Q29uZmlnPzoge1xuICAgIGFwcGVhcmFuY2U/OiBrZXlvZiBFeHBhbnNpb25Db25maWdbJ2FwcGVhcmFuY2UnXVxuICB9O1xuICBhcHBlYXJhbmNlOiB7XG4gICAgcG9wT3V0OiAoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlXG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIEV4cGFuc2lvblZhcmlhYmxlcyB7XG4gIGV4cGFuc2lvbj86IEV4cGFuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMC45O1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEV4cGFuc2lvblZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3QgeyBhZnRlciB9ID0gdGhlbWU7XG5cbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgICRuYW1lOiBMeUFjY29yZGlvbi7QuCxcbiAgICAkZ2xvYmFsOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5wYW5lbFRpdGxlfSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLnBhbmVsRGVzY3JpcHRpb259e2Rpc3BsYXk6ZmxleDttYXJnaW4tJHthZnRlcn06MTZweDt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5wYW5lbH06bm90KCR7Y2xhc3Nlcy5kaXNhYmxlZH0pICR7Y2xhc3Nlcy5wYW5lbFRpdGxlfXtjb2xvcjoke3RoZW1lLnRleHQuZGVmYXVsdH07fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMucGFuZWx9Om5vdCgke2NsYXNzZXMuZGlzYWJsZWR9KSAke2NsYXNzZXMucGFuZWxEZXNjcmlwdGlvbn17Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fWAsXG4gICAgcm9vdDogKHRoZW1lLmV4cGFuc2lvbiAmJiB0aGVtZS5leHBhbnNpb24ucm9vdCkgPyAoKSA9PiB0aGVtZS5leHBhbnNpb24hLnJvb3QhKGNsYXNzZXMpIDogbnVsbCxcbiAgICBwYW5lbDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt9JHtjbGFzc05hbWV9Om5vdCgke2NsYXNzZXMuZGlzYWJsZWR9KSAke2NsYXNzZXMucGFuZWxIZWFkZXJ9e2N1cnNvcjpwb2ludGVyO31gLFxuICAgIHBhbmVsSGVhZGVyOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MCAyNHB4O3RyYW5zaXRpb246aGVpZ2h0ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH07Zm9udC1mYW1pbHk6JHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oMTUpfTtmb250LXdlaWdodDo0MDA7fSR7Y2xhc3Nlcy5wYW5lbH06bm90KCR7Y2xhc3Nlcy5leHBhbmRlZH0pOm5vdCgke2NsYXNzZXMuZGlzYWJsZWR9KSAke2NsYXNzTmFtZX06aG92ZXJ7YmFja2dyb3VuZDoke3RoZW1lLmhvdmVyfTt9QG1lZGlhIChob3Zlcjogbm9uZSl7JHtjbGFzc2VzLnBhbmVsfTpub3QoJHtjbGFzc2VzLmV4cGFuZGVkfSk6bm90KCR7Y2xhc3Nlcy5kaXNhYmxlZH0pICR7Y2xhc3NOYW1lfTpob3ZlcntiYWNrZ3JvdW5kOm5vbmU7fX1gLFxuICAgIHBhbmVsSGVhZGVyQ29udGVudDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtmbGV4OjE7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47fWAsXG4gICAgcGFuZWxDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdzp2aXNpYmxlO31gLFxuICAgIHBhbmVsQm9keTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Zpc2liaWxpdHk6aGlkZGVuO3BhZGRpbmc6MCAyNHB4IDE2cHg7dHJhbnNpdGlvbjp2aXNpYmlsaXR5ICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7XG4gICAgICAgIHRoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfTtmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07Zm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSgxNCl9O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoke3RoZW1lLnB4VG9SZW0oMjApfTt9YCxcbiAgICBwYW5lbFRpdGxlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZmxleC1ncm93OjE7fWAsXG4gICAgcGFuZWxEZXNjcmlwdGlvbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2ZsZXgtZ3JvdzoyO31gLFxuICAgIHBhbmVsQWN0aW9uUm93OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Ym9yZGVyLXRvcDoxcHggc29saWQgJHt0aGVtZS5kaXZpZGVyfTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtwYWRkaW5nOjE2cHggOHB4IDE2cHggMjRweDt9YCxcbiAgICBleHBhbmRlZDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMucGFuZWxCb2R5fXt2aXNpYmlsaXR5OnZpc2libGU7fWAsXG4gICAgZGlzYWJsZWQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjb2xvcjoke3RoZW1lLmRpc2FibGVkLmNvbnRyYXN0fTt9YFxuICB9O1xufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICdseUFjY29yZGlvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlBY2NvcmRpb24gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUFjY29yZGlvbic7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcblxuICBwcml2YXRlIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuO1xuICBwcml2YXRlIF9oYXNUb2dnbGUgPSB0cnVlO1xuICBwcml2YXRlIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdHJ1ZS9mYWxzZSB3aGVuIG9wZW5BbGwvY2xvc2VBbGwgaXMgdHJpZ2dlcmVkLiAqL1xuICByZWFkb25seSBfb3BlbkNsb3NlQWxsQWN0aW9uczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5QWNjb3JkaW9uLmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBFeHBhbnNpb25WYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgICAgaWYgKCEodGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlICYmIHRoZW1lLmV4cGFuc2lvbiEuYXBwZWFyYW5jZVt2YWxdKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgZXhwYW5zaW9uLmFwcGVhcmFuY2VbJyR7dmFsfSddIG5vdCBmb3VuZCBpbiBUaGVtZVZhcmlhYmxlc2ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgICAgICAgcmV0dXJuIHRoZW1lLmV4cGFuc2lvbiEuYXBwZWFyYW5jZVt2YWxdIShjbGFzc2VzKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG11bHRpcGxlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNUb2dnbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzVG9nZ2xlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzVG9nZ2xlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsgZXhwYW5zaW9uIH0gPSA8RXhwYW5zaW9uVmFyaWFibGVzPnRoaXMuX3RoZW1lLnZhcmlhYmxlcztcbiAgICBpZiAoZXhwYW5zaW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG5cbiAgICAgIC8vIEFwcGx5IGRlZmF1bHQgY29uZmlnXG4gICAgICBpZiAoZXhwYW5zaW9uLmRlZmF1bHRDb25maWcgJiYgZXhwYW5zaW9uLmRlZmF1bHRDb25maWcuYXBwZWFyYW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hcHBlYXJhbmNlID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBleHBhbnNpb24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yKCdleHBhbnNpb24nKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGwodHJ1ZSk7XG4gIH1cblxuICBvcGVuQWxsKCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuQ2xvc2VBbGwoZXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5fb3BlbkNsb3NlQWxsQWN0aW9ucy5uZXh0KGV4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxufVxuIl19