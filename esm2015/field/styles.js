/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
export const STYLES = (theme) => {
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginBottom: '.5em',
            lineHeight: 1.125,
            '& {hint}, & {error}': {
                display: 'block',
                fontSize: '.75em',
                marginTop: '8px'
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
            width: '100%'
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
            width: '100%'
        },
        hintContainer: {
            display: 'flex',
            flex: '1 0 auto',
            maxWidth: '100%',
            overflow: 'hidden',
            justifyContent: 'space-between'
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
            '& {label}, & {hintContainer}': {
                color: `${theme.warn.default}!important`
            },
            '& {fieldset}, & {container}:after': {
                borderColor: `${theme.warn.default}!important`
            },
            '& {inputNative}': {
                caretColor: `${theme.warn.default}!important`
            },
            // hidde all hints except after hint
            '& {hintContainer} ly-hint:last-child': {
                display: 'none'
            }
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ZpZWxkLyIsInNvdXJjZXMiOlsic3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUM3RCxNQUFNLE9BQU8sTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFO0lBQzlDLE9BQU87UUFDTCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsVUFBVTtZQUNwQixZQUFZLEVBQUUsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSztZQUNqQixxQkFBcUIsRUFBRTtnQkFDckIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsS0FBSzthQUNqQjtTQUNGO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsZUFBZSxFQUFFO2dCQUNmLFVBQVUsRUFBRSxhQUFhLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUc7YUFDeEc7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRzthQUM5RjtTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsb0JBQ0osZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxNQUFNLEVBQ3JCLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FDckM7U0FD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QUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sWUFBWTthQUMvQztZQUNELGlCQUFpQixFQUFFO2dCQUNqQixVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sWUFBWTthQUM5Qzs7WUFFRCxzQ0FBc0MsRUFBRTtnQkFDdEMsT0FBTyxFQUFFLE1BQU07YUFDaEI7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnLjVlbScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjEyNSxcbiAgICAgICcmIHtoaW50fSwgJiB7ZXJyb3J9Jzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBmb250U2l6ZTogJy43NWVtJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnOHB4J1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgZmllbGRzZXQ6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICB9LFxuICAgIGZpZWxkc2V0U3Bhbjoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGhlaWdodDogJzJweCdcbiAgICB9LFxuICAgIGxhYmVsU3Bhbjoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaW5maXg6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBzdWZmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWxDb250YWluZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiB7fSxcbiAgICBsYWJlbENlbnRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nRW5kOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5maWVsZC5sYWJlbENvbG9yLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaXNGbG9hdGluZ0xhYmVsOiB7fSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgZm9udFNpemU6ICc3NSUnXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGZvY3VzZWQ6IHt9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICByZXNpemU6ICd2ZXJ0aWNhbCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaGludENvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgJyYsICYge2xhYmVsfSwgJiB7Y29udGFpbmVyfTphZnRlcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmRpc2FibGVkLmNvbnRyYXN0LFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaGludDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBlcnJvclN0YXRlOiB7XG4gICAgICAnJiB7bGFiZWx9LCAmIHtoaW50Q29udGFpbmVyfSc6IHtcbiAgICAgICAgY29sb3I6IGAke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50YFxuICAgICAgfSxcbiAgICAgICcmIHtmaWVsZHNldH0sICYge2NvbnRhaW5lcn06YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAnJiB7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICBjYXJldENvbG9yOiBgJHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudGBcbiAgICAgIH0sXG4gICAgICAvLyBoaWRkZSBhbGwgaGludHMgZXhjZXB0IGFmdGVyIGhpbnRcbiAgICAgICcmIHtoaW50Q29udGFpbmVyfSBseS1oaW50Omxhc3QtY2hpbGQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iXX0=