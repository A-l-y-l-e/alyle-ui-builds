import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { toBoolean, LyTheme2, getLyThemeVariableUndefinedError } from '@alyle/ui';
import { Subject } from 'rxjs';
const STYLE_PRIORITY = -0.9;
export const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    $name: 'expansion',
    '@global': {
        '{panelTitle},{panelDescription}': {
            display: 'flex',
            marginAfter: '16px',
        },
        '{panel}:not({disabled})': {
            '{panelTitle}': {
                color: theme.text.default
            },
            '{panelDescription}': {
                color: theme.text.secondary
            }
        },
    },
    root: {
        '&': theme.expansion ? theme.expansion.root : null
    },
    panel: {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        '&:not({disabled}) {panelHeader}': {
            cursor: 'pointer'
        }
    },
    panelHeader: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 24px',
        transition: `height ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.pxToRem(15),
        fontWeight: 400,
        '{panel}:not({expanded}):not({disabled}) &:hover': {
            background: theme.hover,
            '@media (hover: none)': {
                background: 'none'
            }
        }
    },
    panelHeaderContent: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    panelContent: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible'
    },
    panelBody: {
        visibility: 'hidden',
        padding: '0 24px 16px',
        transition: `visibility ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.pxToRem(14),
        fontWeight: 400,
        lineHeight: theme.pxToRem(20)
    },
    panelTitle: {
        flexGrow: 1
    },
    panelDescription: {
        flexGrow: 2
    },
    panelActionRow: {
        borderTop: `1px solid ${theme.divider}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '16px 8px 16px 24px'
    },
    expanded: {
        '{panelBody}': {
            visibility: 'visible'
        }
    },
    disabled: {
        color: theme.disabled.contrast
    }
});
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
        this._appearanceClass = this._theme.addStyle(`lyAccordion.appearance:${val}`, (theme) => {
            if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                throw new Error(`Value expansion.appearance['${val}'] not found in ThemeVariables`);
            }
            return theme.expansion.appearance[val];
        }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyAccordion.prototype, "appearance", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyAccordion.prototype, "multiple", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyAccordion.prototype, "hasToggle", null);
LyAccordion = tslib_1.__decorate([
    Directive({
        selector: 'ly-accordion',
        exportAs: 'lyAccordion'
    }),
    tslib_1.__metadata("design:paramtypes", [LyTheme2,
        Renderer2,
        ElementRef])
], LyAccordion);
export { LyAccordion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImFjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFrQixRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUU1QixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFNBQVMsRUFBRTtRQUNULGlDQUFpQyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsV0FBVyxFQUFFLE1BQU07U0FDcEI7UUFDRCx5QkFBeUIsRUFBRTtZQUN6QixjQUFjLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzthQUMxQjtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO2FBQzVCO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUNuRDtJQUNELEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGlDQUFpQyxFQUFFO1lBQ2pDLE1BQU0sRUFBRSxT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Q0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7aUJBQ3REO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsTUFBTSxnQ0FBZ0MsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxRQUFpQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7Q0FFRixDQUFBO0FBdkVDO0lBREMsS0FBSyxFQUFFOzs7NkNBZ0JQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OzsyQ0FHUDtBQU1EO0lBREMsS0FBSyxFQUFFOzs7NENBR1A7QUE3Q1UsV0FBVztJQUp2QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsYUFBYTtLQUN4QixDQUFDOzZDQW9Ea0IsUUFBUTtRQUNMLFNBQVM7UUFDZixVQUFVO0dBckRkLFdBQVcsQ0FxRnZCO1NBckZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBUaGVtZVZhcmlhYmxlcywgTHlUaGVtZTIsIGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMC45O1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgJG5hbWU6ICdleHBhbnNpb24nLFxuICAnQGdsb2JhbCc6IHtcbiAgICAne3BhbmVsVGl0bGV9LHtwYW5lbERlc2NyaXB0aW9ufSc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbkFmdGVyOiAnMTZweCcsXG4gICAgfSxcbiAgICAne3BhbmVsfTpub3Qoe2Rpc2FibGVkfSknOiB7XG4gICAgICAne3BhbmVsVGl0bGV9Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgJ3twYW5lbERlc2NyaXB0aW9ufSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnRleHQuc2Vjb25kYXJ5XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgcm9vdDoge1xuICAgICcmJzogdGhlbWUuZXhwYW5zaW9uID8gdGhlbWUuZXhwYW5zaW9uLnJvb3QgOiBudWxsXG4gIH0sXG4gIHBhbmVsOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyY6bm90KHtkaXNhYmxlZH0pIHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH1cbiAgfSxcbiAgcGFuZWxIZWFkZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgdHJhbnNpdGlvbjogYGhlaWdodCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YCxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTUpLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAne3BhbmVsfTpub3Qoe2V4cGFuZGVkfSk6bm90KHtkaXNhYmxlZH0pICY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5ob3ZlcixcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwYW5lbEhlYWRlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgcGFuZWxDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgfSxcbiAgcGFuZWxCb2R5OiB7XG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogJzAgMjRweCAxNnB4JyxcbiAgICB0cmFuc2l0aW9uOiBgdmlzaWJpbGl0eSAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YCxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5weFRvUmVtKDIwKVxuICB9LFxuICBwYW5lbFRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgcGFuZWxEZXNjcmlwdGlvbjoge1xuICAgIGZsZXhHcm93OiAyXG4gIH0sXG4gIHBhbmVsQWN0aW9uUm93OiB7XG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUuZGl2aWRlcn1gLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBwYWRkaW5nOiAnMTZweCA4cHggMTZweCAyNHB4J1xuICB9LFxuICBleHBhbmRlZDoge1xuICAgICd7cGFuZWxCb2R5fSc6IHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgIH1cbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3RcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWFjY29yZGlvbicsXG4gIGV4cG9ydEFzOiAnbHlBY2NvcmRpb24nXG59KVxuZXhwb3J0IGNsYXNzIEx5QWNjb3JkaW9uIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuXG4gIHByaXZhdGUgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1RvZ2dsZSA9IHRydWU7XG4gIHByaXZhdGUgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB0cnVlL2ZhbHNlIHdoZW4gb3BlbkFsbC9jbG9zZUFsbCBpcyB0cmlnZ2VyZWQuICovXG4gIHJlYWRvbmx5IF9vcGVuQ2xvc2VBbGxBY3Rpb25zOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlBY2NvcmRpb24uYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAoISh0aGVtZS5leHBhbnNpb24hLmFwcGVhcmFuY2UgJiYgdGhlbWUuZXhwYW5zaW9uIS5hcHBlYXJhbmNlW3ZhbF0pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBleHBhbnNpb24uYXBwZWFyYW5jZVsnJHt2YWx9J10gbm90IGZvdW5kIGluIFRoZW1lVmFyaWFibGVzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoZW1lLmV4cGFuc2lvbiEuYXBwZWFyYW5jZVt2YWxdITtcbiAgICAgIH0sXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFksXG4gICAgICBTVFlMRVNcbiAgICApO1xuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG11bHRpcGxlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNUb2dnbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzVG9nZ2xlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzVG9nZ2xlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsgZXhwYW5zaW9uIH0gPSB0aGlzLl90aGVtZS52YXJpYWJsZXM7XG4gICAgaWYgKGV4cGFuc2lvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuXG4gICAgICAvLyBBcHBseSBkZWZhdWx0IGNvbmZpZ1xuICAgICAgaWYgKGV4cGFuc2lvbi5kZWZhdWx0Q29uZmlnICYmIGV4cGFuc2lvbi5kZWZhdWx0Q29uZmlnLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwZWFyYW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gZXhwYW5zaW9uLmRlZmF1bHRDb25maWcuYXBwZWFyYW5jZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvcignZXhwYW5zaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsKHRydWUpO1xuICB9XG5cbiAgb3BlbkFsbCgpIHtcbiAgICB0aGlzLl9vcGVuQ2xvc2VBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkNsb3NlQWxsKGV4cGFuZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX29wZW5DbG9zZUFsbEFjdGlvbnMubmV4dChleHBhbmRlZCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==