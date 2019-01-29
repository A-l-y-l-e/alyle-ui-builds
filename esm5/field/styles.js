/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LY_COMMON_STYLES } from '@alyle/ui';
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
            '{infix}': {
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
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsic3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFrQixnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFDN0QsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCOztRQUNwQyxjQUFjLEdBQUc7UUFDckIsZUFBZSxFQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxnQkFBYTtRQUNuRCxLQUFLLEVBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLGdCQUFhO0tBQzNDO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxHQUFHO1lBQ2YscUJBQXFCLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsT0FBTztnQkFDakIsU0FBUyxFQUFFLE9BQU87YUFDbkI7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsZUFBYSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLFVBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxNQUFHO2FBQ3hHO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLFVBQVUsRUFBSyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLFVBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxNQUFHO2FBQzlGO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsVUFBVSxFQUFFLFFBQVE7WUFDcEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyx1QkFDSixnQkFBZ0Is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TyxXQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQWM7YUFDckc7WUFDRCw0QkFBNEIsRUFBRSxjQUFjO1lBQzVDLGlDQUFpQyxFQUFFLGNBQWM7U0FDbEQ7UUFDRCxTQUFTLEVBQUU7WUFDVCxZQUFZLEVBQUUsTUFBTTtTQUNyQjtRQUNELFVBQVUsRUFBRTtZQUNWLFdBQVcsRUFBRSxNQUFNO1NBQ3BCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBRTtvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsT0FBTyxFQUFFLElBQU07b0JBQ2YsS0FBSyxFQUFFLENBQUM7b0JBQ1IsTUFBTSxFQUFFLENBQUM7b0JBQ1QsVUFBVSxFQUFFLDRCQUE0QjtvQkFDeEMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLGdCQUFnQjtvQkFDM0IsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsS0FBSyxFQUFFLENBQUM7b0JBQ1IsU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLGFBQWEsRUFBRSxNQUFNO2lCQUN0QjthQUNGO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFO29CQUNELFlBQVksRUFBRSxDQUFDO2lCQUNoQjtnQkFDRCxFQUFFLEVBQUU7b0JBQ0YsWUFBWSxFQUFFLEtBQUs7aUJBQ3BCO2dCQUNELEVBQUUsRUFBRTtvQkFDRixZQUFZLEVBQUUsTUFBTTtpQkFDckI7Z0JBQ0QsRUFBRSxFQUFFO29CQUNGLFlBQVksRUFBRSxLQUFLO2lCQUNwQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgY29uc3Qgc2VsZWN0aW9uU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9ICFpbXBvcnRhbnRgLFxuICAgIGNvbG9yOiBgJHt0aGVtZS53YXJuLmNvbnRyYXN0fSAhaW1wb3J0YW50YFxuICB9O1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgJyYge2hpbnR9LCAmIHtlcnJvcn0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGZvbnRTaXplOiAnLjc1ZW0nLFxuICAgICAgICBtYXJnaW5Ub3A6ICcuMjVlbSdcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYGZvbnQtc2l6ZSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfSxcbiAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpZWxkc2V0OiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgfSxcbiAgICBmaWVsZHNldFNwYW46IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBoZWlnaHQ6ICcycHgnXG4gICAgfSxcbiAgICBsYWJlbFNwYW46IHtcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sXG4gICAgcHJlZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGluZml4OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICB3aWR0aDogJzE4MHB4JyxcbiAgICAgIGZsZXg6ICcxIDAnXG4gICAgfSxcbiAgICBzdWZmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWxDb250YWluZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiB7fSxcbiAgICBsYWJlbENlbnRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nRW5kOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5maWVsZC5sYWJlbENvbG9yLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaXNGbG9hdGluZ0xhYmVsOiB7fSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgZm9udFNpemU6ICc3NSUnXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGZvY3VzZWQ6IHt9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICByZXNpemU6ICd2ZXJ0aWNhbCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICdzZWxlY3QmJzoge1xuICAgICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZ0FmdGVyOiAnMWVtJyxcbiAgICAgICAgJ29wdGlvbjpub3QoW2Rpc2FibGVkXSknOiB7XG4gICAgICAgICAgY29sb3I6ICdpbml0aWFsJ1xuICAgICAgICB9LFxuICAgICAgICAnb3B0Z3JvdXA6bm90KFtkaXNhYmxlZF0pJzoge1xuICAgICAgICAgIGNvbG9yOiAnaW5pdGlhbCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdzZWxlY3QmOjotbXMtZXhwYW5kJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Jjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgYm9yZGVyOiAwXG4gICAgICB9LFxuICAgICAgJ3NlbGVjdCY6bm90KDpkaXNhYmxlZCknOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgJ3NlbGVjdCY6Oi1tcy12YWx1ZSc6IHtcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgICAgYmFja2dyb3VuZDogJzAgMCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGhpbnRDb250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogJzEuMjVlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yNScsXG4gICAgICAnPmRpdic6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4OiAnMSAwIGF1dG8nLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICAnJiwgJiB7bGFiZWx9LCAmIHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3QsXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBoaW50OiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGVycm9yU3RhdGU6IHtcbiAgICAgICcmIHtsYWJlbH0sICYge2hpbnRDb250YWluZXJ9LCAme3NlbGVjdEFycm93fSB7aW5maXh9OmFmdGVyJzoge1xuICAgICAgICBjb2xvcjogYCR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnRgXG4gICAgICB9LFxuICAgICAgJyYge2ZpZWxkc2V0fSwgJiB7Y29udGFpbmVyfTphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgICcmIHtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgIGNhcmV0Q29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgIC8vIGhpZGRlIGFsbCBoaW50cyBleGNlcHQgYWZ0ZXIgaGludFxuICAgICAgJyYge2hpbnRDb250YWluZXJ9IGx5LWhpbnQ6bm90KHtoaW50QWZ0ZXJ9KSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYHtzaGFrZX0gJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufWBcbiAgICAgIH0sXG4gICAgICAnJiB7aW5wdXROYXRpdmV9OjpzZWxlY3Rpb24nOiBzZWxlY3Rpb25TdHlsZSxcbiAgICAgICcmIHtpbnB1dE5hdGl2ZX06Oi1tb3otc2VsZWN0aW9uJzogc2VsZWN0aW9uU3R5bGVcbiAgICB9LFxuICAgIGhpbnRBZnRlcjoge1xuICAgICAgbWFyZ2luQmVmb3JlOiAnYXV0bydcbiAgICB9LFxuICAgIGhpbnRCZWZvcmU6IHtcbiAgICAgIG1hcmdpbkFmdGVyOiAnYXV0bydcbiAgICB9LFxuICAgIHNlbGVjdEFycm93OiB7XG4gICAgICAne2luZml4fSc6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIGJvcmRlckxlZnQ6ICcwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgICAgYm9yZGVyUmlnaHQ6ICcwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgICAgYm9yZGVyVG9wOiAnMC4zMTI1ZW0gc29saWQnLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgYWZ0ZXI6IDAsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnLTAuMTU2MjVlbScsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICRrZXlmcmFtZXM6IHtcbiAgICAgIHNoYWtlOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgNDA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICcycHgnXG4gICAgICAgIH0sXG4gICAgICAgIDUwOiB7XG4gICAgICAgICAgbWFyZ2luQmVmb3JlOiAnLTJweCdcbiAgICAgICAgfSxcbiAgICAgICAgNzA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICcycHgnXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDoge1xuICAgICAgICAgIG1hcmdpbkJlZm9yZTogMFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iXX0=