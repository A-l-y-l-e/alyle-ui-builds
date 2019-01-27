/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
export const STYLES = (theme) => {
    /** @type {?} */
    const selectionStyle = {
        backgroundColor: `${theme.warn.default} !important`,
        color: `${theme.warn.contrast} !important`
    };
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginTop: '1em',
            lineHeight: 1.125,
            '& {hint}, & {error}': {
                display: 'block',
                fontSize: '.75em',
                marginTop: '.5em'
            },
        },
        animations: {
            '& {labelSpan}': {
                transition: `font-size ${theme.animations.curves.deceleration} .${theme.animations.durations.complex}s`
            },
            '& {label}': {
                transition: `${theme.animations.curves.deceleration} .${theme.animations.durations.complex}s`
            }
        },
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '&:after': Object.assign({}, LY_COMMON_STYLES.fill, { content: `\'\'`, pointerEvents: 'none', borderColor: theme.field.borderColor })
        },
        fieldset: Object.assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.field.borderColor, borderWidth: 0 }),
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
        labelContainer: Object.assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.field.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: Object.assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.field.labelColor, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: Object.assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.field.labelColor }),
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
                color: `${theme.warn.default}!important`
            },
            '& {fieldset}, & {container}:after': {
                borderColor: `${theme.warn.default}!important`
            },
            '& {inputNative}': {
                caretColor: `${theme.warn.default}!important`
            },
            // hidde all hints except after hint
            '& {hintContainer} ly-hint:not({hintAfter})': {
                display: 'none'
            },
            '& {labelSpan}': {
                animation: `{shake} ${theme.animations.durations.complex}ms ${theme.animations.curves.deceleration}`
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
                    content: `\'\'`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsic3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUM3RCxNQUFNLE9BQU8sTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFOztVQUN4QyxjQUFjLEdBQUc7UUFDckIsZUFBZSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLGFBQWE7UUFDbkQsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLGFBQWE7S0FDM0M7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLEtBQUs7WUFDakIscUJBQXFCLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsT0FBTztnQkFDakIsU0FBUyxFQUFFLE1BQU07YUFDbEI7U0FDRjtRQUNELFVBQVUsRUFBRTtZQUNWLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsYUFBYSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHO2FBQ3hHO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUc7YUFDOUY7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsUUFBUTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLG9CQUNKLGdCQUFnQixDQUFDLElBQUksSUFDeEIsT0FBTyxFQUFFLE1BQU0sRUFDZixhQUFhLEVBQUUsTUFBTSxFQUNyQixXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQ3JDO1NBQ0Y7UUFDRCxRQUFRLG9CQUNILGdCQUFnQixDQUFDLElBQUksSUFDeEIsTUFBTSxFQUFFLENBQUMsRUFDVCxXQUFXLEVBQUUsT0FBTyxFQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ3BDLFdBQVcsRUFBRSxDQUFDLEdBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsY0FBYztTQUN4QjtRQUNELE1BQU0sRUFBRTtZQUNOLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsYUFBYTtZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEtBQUs7U0FDWjtRQUNELE1BQU0sRUFBRTtZQUNOLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxjQUFjLG9CQUNULGdCQUFnQixDQUFDLElBQUksSUFDeEIsYUFBYSxFQUFFLE1BQU0sRUFDckIsT0FBTyxFQUFFLE1BQU0sRUFDZixLQUFLLEVBQUUsTUFBTSxFQUNiLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FDckM7UUFDRCxpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE1BQU07U0FDakI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsQ0FBQztTQUNSO1FBQ0QsS0FBSyxvQkFDQSxnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQ1QsTUFBTSxFQUFFLE1BQU0sRUFDZCxhQUFhLEVBQUUsTUFBTSxFQUNyQixVQUFVLEVBQUUsUUFBUSxFQUNwQixZQUFZLEVBQUUsVUFBVSxFQUN4QixRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQzdCLEtBQUssRUFBRSxNQUFNLEdBQ2Q7UUFDRCxlQUFlLEVBQUUsRUFBRTtRQUNuQixhQUFhLEVBQUU7WUFDYixlQUFlLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFLEtBQUs7YUFDaEI7U0FDRjtRQUNELFdBQVcsb0JBQ04sZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixhQUFhLEVBQUUsTUFBTSxFQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQzlCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsVUFBVTtZQUNsQixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxNQUFNO1lBQ2YsTUFBTSxFQUFFLE1BQU07WUFDZCxlQUFlLEVBQUUsYUFBYTtZQUM5QixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxNQUFNO1lBQ2IsU0FBUyxFQUFFO2dCQUNULGlCQUFpQixFQUFFLE1BQU07Z0JBQ3pCLG9CQUFvQixFQUFFLE1BQU07Z0JBQzVCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixlQUFlLEVBQUUsYUFBYTtnQkFDOUIsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixZQUFZLEVBQUUsS0FBSztnQkFDbkIsd0JBQXdCLEVBQUU7b0JBQ3hCLEtBQUssRUFBRSxTQUFTO2lCQUNqQjtnQkFDRCwwQkFBMEIsRUFBRTtvQkFDMUIsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2FBQ0Y7WUFDRCxxQkFBcUIsRUFBRTtnQkFDckIsT0FBTyxFQUFFLE1BQU07YUFDaEI7WUFDRCwyQkFBMkIsRUFBRTtnQkFDM0IsTUFBTSxFQUFFLENBQUM7YUFDVjtZQUNELHdCQUF3QixFQUFFO2dCQUN4QixNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNELG9CQUFvQixFQUFFO2dCQUNwQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsVUFBVSxFQUFFLEtBQUs7YUFDbEI7U0FDRjtRQUNELGFBQWEsRUFBRTtZQUNiLFNBQVMsRUFBRSxRQUFRO1lBQ25CLE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUUsTUFBTTtnQkFDZixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixjQUFjLEVBQUUsZUFBZTthQUNoQztTQUNGO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsbUNBQW1DLEVBQUU7Z0JBQ25DLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVE7Z0JBQzlCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxJQUFJO1FBQ1gsVUFBVSxFQUFFO1lBQ1YsNERBQTRELEVBQUU7Z0JBQzVELEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZO2FBQ3pDO1lBQ0QsbUNBQW1DLEVBQUU7Z0JBQ25DLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZO2FBQy9DO1lBQ0QsaUJBQWlCLEVBQUU7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZO2FBQzlDOztZQUVELDRDQUE0QyxFQUFFO2dCQUM1QyxPQUFPLEVBQUUsTUFBTTthQUNoQjtZQUNELGVBQWUsRUFBRTtnQkFDZixTQUFTLEVBQUUsV0FBVyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO2FBQ3JHO1lBQ0QsNEJBQTRCLEVBQUUsY0FBYztZQUM1QyxpQ0FBaUMsRUFBRSxjQUFjO1NBQ2xEO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsWUFBWSxFQUFFLE1BQU07U0FDckI7UUFDRCxVQUFVLEVBQUU7WUFDVixXQUFXLEVBQUUsTUFBTTtTQUNwQjtRQUNELFdBQVcsRUFBRTtZQUNYLFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUU7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLE9BQU8sRUFBRSxNQUFNO29CQUNmLEtBQUssRUFBRSxDQUFDO29CQUNSLE1BQU0sRUFBRSxDQUFDO29CQUNULFVBQVUsRUFBRSw0QkFBNEI7b0JBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLEdBQUcsRUFBRSxLQUFLO29CQUNWLEtBQUssRUFBRSxDQUFDO29CQUNSLFNBQVMsRUFBRSxZQUFZO29CQUN2QixhQUFhLEVBQUUsTUFBTTtpQkFDdEI7YUFDRjtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFO2dCQUNMLENBQUMsRUFBRTtvQkFDRCxZQUFZLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0QsRUFBRSxFQUFFO29CQUNGLFlBQVksRUFBRSxLQUFLO2lCQUNwQjtnQkFDRCxFQUFFLEVBQUU7b0JBQ0YsWUFBWSxFQUFFLE1BQU07aUJBQ3JCO2dCQUNELEVBQUUsRUFBRTtvQkFDRixZQUFZLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILFlBQVksRUFBRSxDQUFDO2lCQUNoQjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGlvblN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhlbWUud2Fybi5kZWZhdWx0fSAhaW1wb3J0YW50YCxcbiAgICBjb2xvcjogYCR7dGhlbWUud2Fybi5jb250cmFzdH0gIWltcG9ydGFudGBcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luVG9wOiAnMWVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMTI1LFxuICAgICAgJyYge2hpbnR9LCAmIHtlcnJvcn0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGZvbnRTaXplOiAnLjc1ZW0nLFxuICAgICAgICBtYXJnaW5Ub3A6ICcuNWVtJ1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgZmllbGRzZXQ6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICB9LFxuICAgIGZpZWxkc2V0U3Bhbjoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGhlaWdodDogJzJweCdcbiAgICB9LFxuICAgIGxhYmVsU3Bhbjoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaW5maXg6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgICBtaW5XaWR0aDogMCxcbiAgICAgIHdpZHRoOiAnMTgwcHgnLFxuICAgICAgZmxleDogJzEgMCdcbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBsYWJlbENvbnRhaW5lcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nU3RhcnQ6IHt9LFxuICAgIGxhYmVsQ2VudGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdFbmQ6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3IsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBpc0Zsb2F0aW5nTGFiZWw6IHt9LFxuICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBmb250U2l6ZTogJzc1JSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUuZmllbGQubGFiZWxDb2xvclxuICAgIH0sXG4gICAgZm9jdXNlZDoge30sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIHJlc2l6ZTogJ3ZlcnRpY2FsJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgJ3NlbGVjdCYnOiB7XG4gICAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nQWZ0ZXI6ICcxZW0nLFxuICAgICAgICAnb3B0aW9uOm5vdChbZGlzYWJsZWRdKSc6IHtcbiAgICAgICAgICBjb2xvcjogJ2luaXRpYWwnXG4gICAgICAgIH0sXG4gICAgICAgICdvcHRncm91cDpub3QoW2Rpc2FibGVkXSknOiB7XG4gICAgICAgICAgY29sb3I6ICdpbml0aWFsJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3NlbGVjdCY6Oi1tcy1leHBhbmQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICdzZWxlY3QmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgICBib3JkZXI6IDBcbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Jjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICAnc2VsZWN0Jjo6LW1zLXZhbHVlJzoge1xuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnMCAwJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaGludENvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnMS4yNWVtJyxcbiAgICAgICc+ZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgICcmLCAmIHtsYWJlbH0sICYge2NvbnRhaW5lcn06YWZ0ZXInOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5kaXNhYmxlZC5jb250cmFzdCxcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGhpbnQ6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZXJyb3JTdGF0ZToge1xuICAgICAgJyYge2xhYmVsfSwgJiB7aGludENvbnRhaW5lcn0sICZ7c2VsZWN0QXJyb3d9IHtpbmZpeH06YWZ0ZXInOiB7XG4gICAgICAgIGNvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAnJiB7ZmllbGRzZXR9LCAmIHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogYCR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnRgXG4gICAgICB9LFxuICAgICAgJyYge2lucHV0TmF0aXZlfSc6IHtcbiAgICAgICAgY2FyZXRDb2xvcjogYCR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnRgXG4gICAgICB9LFxuICAgICAgLy8gaGlkZGUgYWxsIGhpbnRzIGV4Y2VwdCBhZnRlciBoaW50XG4gICAgICAnJiB7aGludENvbnRhaW5lcn0gbHktaGludDpub3Qoe2hpbnRBZnRlcn0pJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBge3NoYWtlfSAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259YFxuICAgICAgfSxcbiAgICAgICcmIHtpbnB1dE5hdGl2ZX06OnNlbGVjdGlvbic6IHNlbGVjdGlvblN0eWxlLFxuICAgICAgJyYge2lucHV0TmF0aXZlfTo6LW1vei1zZWxlY3Rpb24nOiBzZWxlY3Rpb25TdHlsZVxuICAgIH0sXG4gICAgaGludEFmdGVyOiB7XG4gICAgICBtYXJnaW5CZWZvcmU6ICdhdXRvJ1xuICAgIH0sXG4gICAgaGludEJlZm9yZToge1xuICAgICAgbWFyZ2luQWZ0ZXI6ICdhdXRvJ1xuICAgIH0sXG4gICAgc2VsZWN0QXJyb3c6IHtcbiAgICAgICd7aW5maXh9Jzoge1xuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgYm9yZGVyTGVmdDogJzAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgICBib3JkZXJSaWdodDogJzAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgICBib3JkZXJUb3A6ICcwLjMxMjVlbSBzb2xpZCcsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICBhZnRlcjogMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICctMC4xNTYyNWVtJyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJGtleWZyYW1lczoge1xuICAgICAgc2hha2U6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIG1hcmdpbkJlZm9yZTogMFxuICAgICAgICB9LFxuICAgICAgICA0MDoge1xuICAgICAgICAgIG1hcmdpbkJlZm9yZTogJzJweCdcbiAgICAgICAgfSxcbiAgICAgICAgNTA6IHtcbiAgICAgICAgICBtYXJnaW5CZWZvcmU6ICctMnB4J1xuICAgICAgICB9LFxuICAgICAgICA3MDoge1xuICAgICAgICAgIG1hcmdpbkJlZm9yZTogJzJweCdcbiAgICAgICAgfSxcbiAgICAgICAgMTAwOiB7XG4gICAgICAgICAgbWFyZ2luQmVmb3JlOiAwXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbiJdfQ==