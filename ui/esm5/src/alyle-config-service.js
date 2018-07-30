/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
export var /** @type {?} */ THEME_VARIABLES = new InjectionToken('ly.theme.variables');
export var /** @type {?} */ IS_CORE_THEME = new InjectionToken('ly.is.root');
var StyleMap = /** @class */ (function () {
    function StyleMap(themeName) {
        this.themeName = themeName;
    }
    return StyleMap;
}());
export { StyleMap };
function StyleMap_tsickle_Closure_declarations() {
    /** @type {?} */
    StyleMap.prototype.styleMap;
    /** @type {?} */
    StyleMap.prototype.themeName;
}
/**
 * @record
 */
export function Default() { }
function Default_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: any;
    */
}
var ThemeVariables = /** @class */ (function () {
    function ThemeVariables() {
    }
    return ThemeVariables;
}());
export { ThemeVariables };
function ThemeVariables_tsickle_Closure_declarations() {
    /**
     * Theme name
     * @type {?}
     */
    ThemeVariables.prototype.name;
    /** @type {?} */
    ThemeVariables.prototype.primary;
    /** @type {?} */
    ThemeVariables.prototype.accent;
    /**
     * warn or error color
     * @type {?}
     */
    ThemeVariables.prototype.warn;
    /** @type {?} */
    ThemeVariables.prototype.scheme;
    /** @type {?} */
    ThemeVariables.prototype.colorSchemes;
}
/**
 * @record
 */
export function PaletteVariables() { }
function PaletteVariables_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    PaletteVariables.prototype.default;
    /** @type {?|undefined} */
    PaletteVariables.prototype.contrast;
    /* TODO: handle strange member:
    [key: string]: string;
    */
}
/**
 * @record
 */
export function ColorScheme() { }
function ColorScheme_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ColorScheme.prototype.background;
    /** @type {?|undefined} */
    ColorScheme.prototype.text;
    /** @type {?|undefined} */
    ColorScheme.prototype.divider;
    /**
     * Components variables
     * @type {?|undefined}
     */
    ColorScheme.prototype.colorShadow;
    /** @type {?|undefined} */
    ColorScheme.prototype.bar;
    /** @type {?|undefined} */
    ColorScheme.prototype.input;
    /* TODO: handle strange member:
    [key: string]: any;
    */
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtY29uZmlnLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0MsTUFBTSxDQUFDLHFCQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsb0JBQW9CLENBQUMsQ0FBQztBQUMxRixNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFPLFlBQVksQ0FBQyxDQUFDO0FBRXBFLElBQUE7SUFFRSxrQkFBb0IsU0FBaUI7UUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtLQUFJO21CQVIzQztJQVNDLENBQUE7QUFIRCxvQkFHQzs7Ozs7Ozs7Ozs7Ozs7OztBQUtELElBQUE7Ozt5QkFkQTtJQTJCQyxDQUFBO0FBYkQsMEJBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdHlsZURhdGEgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWxldHRlVmFyaWFibGVzPignbHkudGhlbWUudmFyaWFibGVzJyk7XHJcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVNYXAge1xyXG4gIHByaXZhdGUgc3R5bGVNYXA6IE1hcDxzdHJpbmcsIFN0eWxlRGF0YT47XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZU5hbWU6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRoZW1lVmFyaWFibGVzIHtcclxuICAvKiogVGhlbWUgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbiAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgc2NoZW1lPzogc3RyaW5nO1xyXG4gIGNvbG9yU2NoZW1lcz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIl19