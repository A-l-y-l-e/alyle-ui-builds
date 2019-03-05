/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
export var STYLE_SELECT_ARROW = ({
    '&:after': {
        position: 'absolute',
        content: "''",
        width: 0,
        height: 0,
        borderLeft: '0.3125em solid transparent',
        borderRight: '0.3125em solid transparent',
        borderTop: '0.3125em solid',
        top: '50%',
        after: 0,
        marginTop: '-0.15625em',
        pointerEvents: 'none'
    }
});
/** @type {?} */
export var STYLES = function (theme) {
    /** @type {?} */
    var selectionStyle = {
        backgroundColor: theme.warn.default + " !important",
        color: theme.warn.contrast + " !important"
    };
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginTop: '1em',
            lineHeight: 1.5,
            '& {hint}, & {error}': {
                display: 'block',
                fontSize: '.75em',
                marginTop: '.25em'
            },
        },
        animations: {
            '& {labelSpan}': {
                transition: "font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
            },
            '& {label}': {
                transition: theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
            }
        },
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '-webkit-tap-highlight-color': 'transparent',
            '&:after': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: theme.field.borderColor })
        },
        fieldset: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.field.borderColor, borderWidth: 0 }),
        fieldsetSpan: {
            padding: 0,
            height: '2px'
        },
        labelSpan: {
            maxWidth: '100%',
            display: 'inline-block'
        },
        prefix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center'
        },
        infix: {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'baseline',
            minWidth: 0,
            width: '180px',
            flex: '1 0'
        },
        suffix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center'
        },
        labelContainer: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.field.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.field.labelColor, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.field.labelColor }),
        focused: {},
        inputNative: {
            resize: 'vertical',
            padding: 0,
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            font: 'inherit',
            width: '100%',
            'select&': {
                '-moz-appearance': 'none',
                '-webkit-appearance': 'none',
                position: 'relative',
                backgroundColor: 'transparent',
                display: 'inline-flex',
                boxSizing: 'border-box',
                paddingAfter: '1em',
                'option:not([disabled])': {
                    color: 'initial'
                },
                'optgroup:not([disabled])': {
                    color: 'initial'
                }
            },
            'select&::-ms-expand': {
                display: 'none'
            },
            'select&::-moz-focus-inner': {
                border: 0
            },
            'select&:not(:disabled)': {
                cursor: 'pointer'
            },
            'select&::-ms-value': {
                color: 'inherit',
                background: '0 0'
            }
        },
        hintContainer: {
            minHeight: '1.25em',
            lineHeight: '1.25',
            '>div': {
                display: 'flex',
                flex: '1 0 auto',
                maxWidth: '100%',
                overflow: 'hidden',
                justifyContent: 'space-between'
            }
        },
        disabled: {
            '&, & {label}, & {container}:after': {
                color: theme.disabled.contrast,
                cursor: 'default'
            }
        },
        hint: null,
        error: null,
        errorState: {
            '& {label}, & {hintContainer}, &{selectArrow} {infix}:after': {
                color: theme.warn.default + "!important"
            },
            '& {fieldset}, & {container}:after': {
                borderColor: theme.warn.default + "!important"
            },
            '& {inputNative}': {
                caretColor: theme.warn.default + "!important"
            },
            // hidde all hints except after hint
            '& {hintContainer} ly-hint:not({hintAfter})': {
                display: 'none'
            },
            '& {labelSpan}': {
                animation: "{shake} " + theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration
            },
            '& {inputNative}::selection': selectionStyle,
            '& {inputNative}::-moz-selection': selectionStyle
        },
        hintAfter: {
            marginBefore: 'auto'
        },
        hintBefore: {
            marginAfter: 'auto'
        },
        selectArrow: {
            '{infix}': STYLE_SELECT_ARROW
        },
        $keyframes: {
            shake: {
                0: {
                    marginBefore: 0
                },
                40: {
                    marginBefore: '2px'
                },
                50: {
                    marginBefore: '-2px'
                },
                70: {
                    marginBefore: '2px'
                },
                100: {
                    marginBefore: 0
                },
            }
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsic3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFrQixnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLGtCQUFrQixHQUFHLENBQUM7SUFDakMsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLElBQU07UUFDZixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsVUFBVSxFQUFFLDRCQUE0QjtRQUN4QyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0NBQ0YsQ0FBQzs7QUFFRixNQUFNLEtBQU8sTUFBTSxHQUFHLFVBQUMsS0FBcUI7O1FBQ3BDLGNBQWMsR0FBRztRQUNyQixlQUFlLEVBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLGdCQUFhO1FBQ25ELEtBQUssRUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsZ0JBQWE7S0FDM0M7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLEdBQUc7WUFDZixxQkFBcUIsRUFBRTtnQkFDckIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsT0FBTzthQUNuQjtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxlQUFhLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlB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REFBNEQsRUFBRTtnQkFDNUQsS0FBSyxFQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxlQUFZO2FBQ3pDO1lBQ0QsbUNBQW1DLEVBQUU7Z0JBQ25DLFdBQVcsRUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sZUFBWTthQUMvQztZQUNELGlCQUFpQixFQUFFO2dCQUNqQixVQUFVLEVBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLGVBQVk7YUFDOUM7O1lBRUQsNENBQTRDLEVBQUU7Z0JBQzVDLE9BQU8sRUFBRSxNQUFNO2FBQ2hCO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxhQUFXLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sV0FBTSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFjO2FBQ3JHO1lBQ0QsNEJBQTRCLEVBQUUsY0FBYztZQUM1QyxpQ0FBaUMsRUFBRSxjQUFjO1NBQ2xEO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsWUFBWSxFQUFFLE1BQU07U0FDckI7UUFDRCxVQUFVLEVBQUU7WUFDVixXQUFXLEVBQUUsTUFBTTtTQUNwQjtRQUNELFdBQVcsRUFBRTtZQUNYLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUI7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFO29CQUNELFlBQVksRUFBRSxDQUFDO2lCQUNoQjtnQkFDRCxFQUFFLEVBQUU7b0JBQ0YsWUFBWSxFQUFFLEtBQUs7aUJBQ3BCO2dCQUNELEVBQUUsRUFBRTtvQkFDRixZQUFZLEVBQUUsTUFBTTtpQkFDckI7Z0JBQ0QsRUFBRSxFQUFFO29CQUNGLFlBQVksRUFBRSxLQUFLO2lCQUNwQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgU1RZTEVfU0VMRUNUX0FSUk9XID0gKHtcbiAgJyY6YWZ0ZXInOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGJvcmRlckxlZnQ6ICcwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyUmlnaHQ6ICcwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyVG9wOiAnMC4zMTI1ZW0gc29saWQnLFxuICAgIHRvcDogJzUwJScsXG4gICAgYWZ0ZXI6IDAsXG4gICAgbWFyZ2luVG9wOiAnLTAuMTU2MjVlbScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCBzZWxlY3Rpb25TdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0gIWltcG9ydGFudGAsXG4gICAgY29sb3I6IGAke3RoZW1lLndhcm4uY29udHJhc3R9ICFpbXBvcnRhbnRgXG4gIH07XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG1hcmdpblRvcDogJzFlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICAnJiB7aGludH0sICYge2Vycm9yfSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgZm9udFNpemU6ICcuNzVlbScsXG4gICAgICAgIG1hcmdpblRvcDogJy4yNWVtJ1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6ICcxODBweCcsXG4gICAgICBmbGV4OiAnMSAwJ1xuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdTdGFydDoge30sXG4gICAgbGFiZWxDZW50ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ0VuZDoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBjb2xvcjogdGhlbWUuZmllbGQubGFiZWxDb2xvcixcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGlzRmxvYXRpbmdMYWJlbDoge30sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnNzUlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5maWVsZC5sYWJlbENvbG9yXG4gICAgfSxcbiAgICBmb2N1c2VkOiB7fSxcbiAgICBpbnB1dE5hdGl2ZToge1xuICAgICAgcmVzaXplOiAndmVydGljYWwnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnc2VsZWN0Jic6IHtcbiAgICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmdBZnRlcjogJzFlbScsXG4gICAgICAgICdvcHRpb246bm90KFtkaXNhYmxlZF0pJzoge1xuICAgICAgICAgIGNvbG9yOiAnaW5pdGlhbCdcbiAgICAgICAgfSxcbiAgICAgICAgJ29wdGdyb3VwOm5vdChbZGlzYWJsZWRdKSc6IHtcbiAgICAgICAgICBjb2xvcjogJ2luaXRpYWwnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Jjo6LW1zLWV4cGFuZCc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJ3NlbGVjdCY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICAgIGJvcmRlcjogMFxuICAgICAgfSxcbiAgICAgICdzZWxlY3QmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgICdzZWxlY3QmOjotbXMtdmFsdWUnOiB7XG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcwIDAnXG4gICAgICB9XG4gICAgfSxcbiAgICBoaW50Q29udGFpbmVyOiB7XG4gICAgICBtaW5IZWlnaHQ6ICcxLjI1ZW0nLFxuICAgICAgbGluZUhlaWdodDogJzEuMjUnLFxuICAgICAgJz5kaXYnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgJyYsICYge2xhYmVsfSwgJiB7Y29udGFpbmVyfTphZnRlcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmRpc2FibGVkLmNvbnRyYXN0LFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaGludDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBlcnJvclN0YXRlOiB7XG4gICAgICAnJiB7bGFiZWx9LCAmIHtoaW50Q29udGFpbmVyfSwgJntzZWxlY3RBcnJvd30ge2luZml4fTphZnRlcic6IHtcbiAgICAgICAgY29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgICcmIHtmaWVsZHNldH0sICYge2NvbnRhaW5lcn06YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAnJiB7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICBjYXJldENvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAvLyBoaWRkZSBhbGwgaGludHMgZXhjZXB0IGFmdGVyIGhpbnRcbiAgICAgICcmIHtoaW50Q29udGFpbmVyfSBseS1oaW50Om5vdCh7aGludEFmdGVyfSknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBhbmltYXRpb246IGB7c2hha2V9ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn1gXG4gICAgICB9LFxuICAgICAgJyYge2lucHV0TmF0aXZlfTo6c2VsZWN0aW9uJzogc2VsZWN0aW9uU3R5bGUsXG4gICAgICAnJiB7aW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbic6IHNlbGVjdGlvblN0eWxlXG4gICAgfSxcbiAgICBoaW50QWZ0ZXI6IHtcbiAgICAgIG1hcmdpbkJlZm9yZTogJ2F1dG8nXG4gICAgfSxcbiAgICBoaW50QmVmb3JlOiB7XG4gICAgICBtYXJnaW5BZnRlcjogJ2F1dG8nXG4gICAgfSxcbiAgICBzZWxlY3RBcnJvdzoge1xuICAgICAgJ3tpbmZpeH0nOiBTVFlMRV9TRUxFQ1RfQVJST1dcbiAgICB9LFxuICAgICRrZXlmcmFtZXM6IHtcbiAgICAgIHNoYWtlOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgNDA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICcycHgnXG4gICAgICAgIH0sXG4gICAgICAgIDUwOiB7XG4gICAgICAgICAgbWFyZ2luQmVmb3JlOiAnLTJweCdcbiAgICAgICAgfSxcbiAgICAgICAgNzA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICcycHgnXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDoge1xuICAgICAgICAgIG1hcmdpbkJlZm9yZTogMFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iXX0=