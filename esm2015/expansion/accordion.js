import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { toBoolean, ThemeVariables, LyTheme2, getLyThemeVariableUndefinedError, ThemeRef, LyClasses, StyleTemplate } from '@alyle/ui';
import { Subject } from 'rxjs';
const STYLE_PRIORITY = -0.9;
export const STYLES = (theme, ref) => {
    const classes = ref.selectorsOf(STYLES);
    const { after } = theme;
    return {
        $priority: STYLE_PRIORITY,
        $name: LyAccordion.и,
        $global: () => (className) => `${className} ${classes.panelTitle},${className} ${classes.panelDescription}{display:flex;margin-${after}:16px;}${className} ${classes.panel}:not(${classes.disabled}) ${classes.panelTitle}{color:${theme.text.default};}${className} ${classes.panel}:not(${classes.disabled}) ${classes.panelDescription}{color:${theme.text.secondary};}`,
        root: (theme.expansion && theme.expansion.root) ? () => theme.expansion.root(classes) : null,
        panel: () => (className) => `${className}{display:block;overflow:hidden;position:relative;}${className}:not(${classes.disabled}) ${classes.panelHeader}{cursor:pointer;}`,
        panelHeader: () => (className) => `${className}{display:flex;position:relative;flex-direction:row;align-items:center;padding:0 24px;transition:height ${theme.animations.durations.entering}ms ${theme.animations.curves.standard};font-family:${theme.typography.fontFamily};font-size:${theme.pxToRem(15)};font-weight:400;}${classes.panel}:not(${classes.expanded}):not(${classes.disabled}) ${className}:hover{background:${theme.hover};}@media (hover: none){${classes.panel}:not(${classes.expanded}):not(${classes.disabled}) ${className}:hover{background:none;}}`,
        panelHeaderContent: (className) => `${className}{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden;}`,
        panelContent: (className) => `${className}{display:flex;flex-direction:column;overflow:visible;}`,
        panelBody: (className) => `${className}{visibility:hidden;padding:0 24px 16px;transition:visibility ${theme.animations.durations.entering}ms ${theme.animations.curves.standard};font-family:${theme.typography.fontFamily};font-size:${theme.pxToRem(14)};font-weight:400;line-height:${theme.pxToRem(20)};}`,
        panelTitle: (className) => `${className}{flex-grow:1;}`,
        panelDescription: (className) => `${className}{flex-grow:2;}`,
        panelActionRow: (className) => `${className}{border-top:1px solid ${theme.divider};display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;}`,
        expanded: () => (className) => `${className} ${classes.panelBody}{visibility:visible;}`,
        disabled: (className) => `${className}{color:${theme.disabled.contrast};}`
    };
};
let LyAccordion = class LyAccordion {
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        this._hasToggle = true;
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new Subject();
    }
    set appearance(val) {
        this._appearance = val;
        this._appearanceClass = this._theme.addStyle(`lyAccordion.appearance:${val}`, (theme, ref) => {
            if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            const classes = ref.selectorsOf(STYLES);
            return theme.expansion.appearance[val](classes);
        }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
    }
    get appearance() {
        return this._appearance;
    }
    set multiple(val) {
        this._multiple = toBoolean(val);
    }
    get multiple() {
        return this._multiple;
    }
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    get hasToggle() {
        return this._hasToggle;
    }
    ngOnInit() {
        const { expansion } = this._theme.variables;
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
    }
    closeAll() {
        this._openCloseAll(true);
    }
    openAll() {
        this._openCloseAll(false);
    }
    _openCloseAll(expanded) {
        if (this.multiple) {
            this._openCloseAllActions.next(expanded);
        }
    }
};
/** @docs-private */
LyAccordion.и = 'LyAccordion';
LyAccordion.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
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
export { LyAccordion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUNMLFNBQVMsRUFDVCxjQUFjLEVBQ2QsUUFBUSxFQUNSLGdDQUFnQyxFQUNoQyxRQUFRLEVBQ1IsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZS9CLE1BQU0sY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTBDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFbEYsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRXhCLE9BQU87UUFDTCxTQUFTLEVBQUUsY0FBYztRQUN6QixLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEIsT0FBTyxFQUFFLEdBQUksRUFBRSxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksT0FBTyxDQUFDLGdCQUFnQix3QkFBd0IsS0FBSyxVQUFVLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLFVBQVUsVUFBVSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8s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QUFjO1FBQ3hCLFFBQVEsRUFBRSxhQUFhO0tBQ3hCLENBQUM7R0FDVyxXQUFXLENBd0Z2QjtTQXhGWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRvQm9vbGVhbixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEx5VGhlbWUyLFxuICBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvcixcbiAgVGhlbWVSZWYsXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwYW5zaW9uQ29uZmlnIHtcbiAgcm9vdD86IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGU7XG4gIGRlZmF1bHRDb25maWc/OiB7XG4gICAgYXBwZWFyYW5jZT86IGtleW9mIEV4cGFuc2lvbkNvbmZpZ1snYXBwZWFyYW5jZSddXG4gIH07XG4gIGFwcGVhcmFuY2U6IHtcbiAgICBwb3BPdXQ6IChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGVcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXhwYW5zaW9uVmFyaWFibGVzIHtcbiAgZXhwYW5zaW9uPzogRXhwYW5zaW9uQ29uZmlnO1xufVxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0wLjk7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgRXhwYW5zaW9uVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCB7IGFmdGVyIH0gPSB0aGVtZTtcblxuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJG5hbWU6IEx5QWNjb3JkaW9uLtC4LFxuICAgICRnbG9iYWw6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLnBhbmVsVGl0bGV9LCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMucGFuZWxEZXNjcmlwdGlvbn17ZGlzcGxheTpmbGV4O21hcmdpbi0ke2FmdGVyfToxNnB4O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLnBhbmVsfTpub3QoJHtjbGFzc2VzLmRpc2FibGVkfSkgJHtjbGFzc2VzLnBhbmVsVGl0bGV9e2NvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5wYW5lbH06bm90KCR7Y2xhc3Nlcy5kaXNhYmxlZH0pICR7Y2xhc3Nlcy5wYW5lbERlc2NyaXB0aW9ufXtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9YCxcbiAgICByb290OiAodGhlbWUuZXhwYW5zaW9uICYmIHRoZW1lLmV4cGFuc2lvbi5yb290KSA/ICgpID0+IHRoZW1lLmV4cGFuc2lvbiEucm9vdCEoY2xhc3NlcykgOiBudWxsLFxuICAgIHBhbmVsOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO30ke2NsYXNzTmFtZX06bm90KCR7Y2xhc3Nlcy5kaXNhYmxlZH0pICR7Y2xhc3Nlcy5wYW5lbEhlYWRlcn17Y3Vyc29yOnBvaW50ZXI7fWAsXG4gICAgcGFuZWxIZWFkZXI6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowIDI0cHg7dHJhbnNpdGlvbjpoZWlnaHQgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfTtmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07Zm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSgxNSl9O2ZvbnQtd2VpZ2h0OjQwMDt9JHtjbGFzc2VzLnBhbmVsfTpub3QoJHtjbGFzc2VzLmV4cGFuZGVkfSk6bm90KCR7Y2xhc3Nlcy5kaXNhYmxlZH0pICR7Y2xhc3NOYW1lfTpob3ZlcntiYWNrZ3JvdW5kOiR7dGhlbWUuaG92ZXJ9O31AbWVkaWEgKGhvdmVyOiBub25lKXske2NsYXNzZXMucGFuZWx9Om5vdCgke2NsYXNzZXMuZXhwYW5kZWR9KTpub3QoJHtjbGFzc2VzLmRpc2FibGVkfSkgJHtjbGFzc05hbWV9OmhvdmVye2JhY2tncm91bmQ6bm9uZTt9fWAsXG4gICAgcGFuZWxIZWFkZXJDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O2ZsZXg6MTtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbjt9YCxcbiAgICBwYW5lbENvbnRlbnQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OnZpc2libGU7fWAsXG4gICAgcGFuZWxCb2R5OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17dmlzaWJpbGl0eTpoaWRkZW47cGFkZGluZzowIDI0cHggMTZweDt0cmFuc2l0aW9uOnZpc2liaWxpdHkgJHtcbiAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHtcbiAgICAgICAgdGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9O2ZvbnQtZmFtaWx5OiR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5fTtmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKDE0KX07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OiR7dGhlbWUucHhUb1JlbSgyMCl9O31gLFxuICAgIHBhbmVsVGl0bGU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtmbGV4LWdyb3c6MTt9YCxcbiAgICBwYW5lbERlc2NyaXB0aW9uOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZmxleC1ncm93OjI7fWAsXG4gICAgcGFuZWxBY3Rpb25Sb3c6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtib3JkZXItdG9wOjFweCBzb2xpZCAke3RoZW1lLmRpdmlkZXJ9O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3BhZGRpbmc6MTZweCA4cHggMTZweCAyNHB4O31gLFxuICAgIGV4cGFuZGVkOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5wYW5lbEJvZHl9e3Zpc2liaWxpdHk6dmlzaWJsZTt9YCxcbiAgICBkaXNhYmxlZDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuY29udHJhc3R9O31gXG4gIH07XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hY2NvcmRpb24nLFxuICBleHBvcnRBczogJ2x5QWNjb3JkaW9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUFjY29yZGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5QWNjb3JkaW9uJztcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1RvZ2dsZSA9IHRydWU7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB0cnVlL2ZhbHNlIHdoZW4gb3BlbkFsbC9jbG9zZUFsbCBpcyB0cmlnZ2VyZWQuICovXG4gIHJlYWRvbmx5IF9vcGVuQ2xvc2VBbGxBY3Rpb25zOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlBY2NvcmRpb24uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEV4cGFuc2lvblZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICAgICAgICBpZiAoISh0aGVtZS5leHBhbnNpb24hLmFwcGVhcmFuY2UgJiYgdGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlW3ZhbF0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBleHBhbnNpb24uYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICByZXR1cm4gdGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlW3ZhbF0hKGNsYXNzZXMpO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWVxuICAgICk7XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbXVsdGlwbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc1RvZ2dsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNUb2dnbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaGFzVG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUb2dnbGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBleHBhbnNpb24gfSA9IDxFeHBhbnNpb25WYXJpYWJsZXM+dGhpcy5fdGhlbWUudmFyaWFibGVzO1xuICAgIGlmIChleHBhbnNpb24pIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcblxuICAgICAgLy8gQXBwbHkgZGVmYXVsdCBjb25maWdcbiAgICAgIGlmIChleHBhbnNpb24uZGVmYXVsdENvbmZpZyAmJiBleHBhbnNpb24uZGVmYXVsdENvbmZpZy5hcHBlYXJhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGVhcmFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IGV4cGFuc2lvbi5kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IoJ2V4cGFuc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbCh0cnVlKTtcbiAgfVxuXG4gIG9wZW5BbGwoKSB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5DbG9zZUFsbChleHBhbmRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLm5leHQoZXhwYW5kZWQpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=