import * as tslib_1 from "tslib";
import { LY_COMMON_STYLES } from '@alyle/ui';
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
export var STYLES = function (theme) {
    var field = theme.field;
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
            '&': theme.field ? theme.field.root : null
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
            '&:after': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: field.borderColor })
        },
        fieldset: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: field.borderColor, borderWidth: 0 }),
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
        labelContainer: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: field.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: field.labelColor, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: field.labelColor }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsic3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTdELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLENBQUM7SUFDakMsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLElBQU07UUFDZixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsVUFBVSxFQUFFLDRCQUE0QjtRQUN4QyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsR0FBRyxFQUFFLEtBQUs7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7SUFDMUMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQU0sQ0FBQztJQUMzQixJQUFNLGNBQWMsR0FBRztRQUNyQixlQUFlLEVBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLGdCQUFhO1FBQ25ELEtBQUssRUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsZ0JBQWE7S0FDM0MsQ0FBQztJQUNGLE9BQU87UUFDTCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsR0FBRztZQUNmLHFCQUFxQixFQUFFO2dCQUNyQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2FBQ25CO1lBQ0QsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFL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QUNoQjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgU1RZTEVfU0VMRUNUX0FSUk9XID0gKHtcbiAgJyY6YWZ0ZXInOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGJvcmRlckxlZnQ6ICcwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyUmlnaHQ6ICcwLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyVG9wOiAnMC4zMTI1ZW0gc29saWQnLFxuICAgIHRvcDogJzUwJScsXG4gICAgYWZ0ZXI6IDAsXG4gICAgbWFyZ2luVG9wOiAnLTAuMTU2MjVlbScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCBmaWVsZCA9IHRoZW1lLmZpZWxkITtcbiAgY29uc3Qgc2VsZWN0aW9uU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9ICFpbXBvcnRhbnRgLFxuICAgIGNvbG9yOiBgJHt0aGVtZS53YXJuLmNvbnRyYXN0fSAhaW1wb3J0YW50YFxuICB9O1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5Ub3A6ICcxZW0nLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgJyYge2hpbnR9LCAmIHtlcnJvcn0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGZvbnRTaXplOiAnLjc1ZW0nLFxuICAgICAgICBtYXJnaW5Ub3A6ICcuMjVlbSdcbiAgICAgIH0sXG4gICAgICAnJic6IHRoZW1lLmZpZWxkID8gdGhlbWUuZmllbGQucm9vdCA6IG51bGxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogZmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6ICcxODBweCcsXG4gICAgICBmbGV4OiAnMSAwJ1xuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmJvcmRlckNvbG9yXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdTdGFydDoge30sXG4gICAgbGFiZWxDZW50ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ0VuZDoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBjb2xvcjogZmllbGQubGFiZWxDb2xvcixcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGlzRmxvYXRpbmdMYWJlbDoge30sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnNzUlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiBmaWVsZC5sYWJlbENvbG9yXG4gICAgfSxcbiAgICBmb2N1c2VkOiB7fSxcbiAgICBpbnB1dE5hdGl2ZToge1xuICAgICAgcmVzaXplOiAndmVydGljYWwnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnc2VsZWN0Jic6IHtcbiAgICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmdBZnRlcjogJzFlbScsXG4gICAgICAgICdvcHRpb246bm90KFtkaXNhYmxlZF0pJzoge1xuICAgICAgICAgIGNvbG9yOiAnaW5pdGlhbCdcbiAgICAgICAgfSxcbiAgICAgICAgJ29wdGdyb3VwOm5vdChbZGlzYWJsZWRdKSc6IHtcbiAgICAgICAgICBjb2xvcjogJ2luaXRpYWwnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Jjo6LW1zLWV4cGFuZCc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJ3NlbGVjdCY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICAgIGJvcmRlcjogMFxuICAgICAgfSxcbiAgICAgICdzZWxlY3QmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgICdzZWxlY3QmOjotbXMtdmFsdWUnOiB7XG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcwIDAnXG4gICAgICB9XG4gICAgfSxcbiAgICBoaW50Q29udGFpbmVyOiB7XG4gICAgICBtaW5IZWlnaHQ6ICcxLjI1ZW0nLFxuICAgICAgbGluZUhlaWdodDogJzEuMjUnLFxuICAgICAgJz5kaXYnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgJyYsICYge2xhYmVsfSwgJiB7Y29udGFpbmVyfTphZnRlcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmRpc2FibGVkLmNvbnRyYXN0LFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaGludDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBlcnJvclN0YXRlOiB7XG4gICAgICAnJiB7bGFiZWx9LCAmIHtoaW50Q29udGFpbmVyfSwgJntzZWxlY3RBcnJvd30ge2luZml4fTphZnRlcic6IHtcbiAgICAgICAgY29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgICcmIHtmaWVsZHNldH0sICYge2NvbnRhaW5lcn06YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAnJiB7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICBjYXJldENvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAvLyBoaWRkZSBhbGwgaGludHMgZXhjZXB0IGFmdGVyIGhpbnRcbiAgICAgICcmIHtoaW50Q29udGFpbmVyfSBseS1oaW50Om5vdCh7aGludEFmdGVyfSknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBhbmltYXRpb246IGB7c2hha2V9ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn1gXG4gICAgICB9LFxuICAgICAgJyYge2lucHV0TmF0aXZlfTo6c2VsZWN0aW9uJzogc2VsZWN0aW9uU3R5bGUsXG4gICAgICAnJiB7aW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbic6IHNlbGVjdGlvblN0eWxlXG4gICAgfSxcbiAgICBoaW50QWZ0ZXI6IHtcbiAgICAgIG1hcmdpbkJlZm9yZTogJ2F1dG8nXG4gICAgfSxcbiAgICBoaW50QmVmb3JlOiB7XG4gICAgICBtYXJnaW5BZnRlcjogJ2F1dG8nXG4gICAgfSxcbiAgICBzZWxlY3RBcnJvdzoge1xuICAgICAgJ3tpbmZpeH0nOiBTVFlMRV9TRUxFQ1RfQVJST1dcbiAgICB9LFxuICAgICRrZXlmcmFtZXM6IHtcbiAgICAgIHNoYWtlOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6IDBcbiAgICAgICAgfSxcbiAgICAgICAgNDA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICcycHgnXG4gICAgICAgIH0sXG4gICAgICAgIDUwOiB7XG4gICAgICAgICAgbWFyZ2luQmVmb3JlOiAnLTJweCdcbiAgICAgICAgfSxcbiAgICAgICAgNzA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICcycHgnXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDoge1xuICAgICAgICAgIG1hcmdpbkJlZm9yZTogMFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iXX0=