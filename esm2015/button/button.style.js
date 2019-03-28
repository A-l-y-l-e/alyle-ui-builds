/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
export const STYLES = (theme) => {
    /** @type {?} */
    const typography = theme.typography;
    /** @type {?} */
    const _styles = ({
        root: {
            fontFamily: typography.fontFamily,
            color: theme.text.default,
            '-webkit-tap-highlight-color': 'transparent',
            backgroundColor: `rgba(0, 0, 0, 0)`,
            border: 0,
            padding: '0 1em',
            '-moz-appearance': 'none',
            margin: 0,
            borderRadius: '3px',
            outline: 'none',
            fontWeight: 500,
            boxSizing: 'border-box',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            display: 'inline-flex',
            cursor: 'pointer',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            userSelect: 'none',
            textDecorationLine: 'none',
            '-webkit-text-decoration-line': 'none',
            fontSize: theme.pxToRem(14),
            '&::-moz-focus-inner': {
                border: 0
            },
            '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }),
            '&{onFocusByKeyboard}::after, &:hover::after': {
                background: 'currentColor',
                opacity: .13,
                borderRadius: 'inherit'
            }
        },
        content: {
            padding: 0,
            display: 'flex',
            justifyContent: 'inherit',
            alignItems: 'inherit',
            alignContent: 'inherit',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box'
        },
        onFocusByKeyboard: null,
        animations: {
            '&,&::after': {
                transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms'
            }
        }
    });
    return _styles;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQixnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFN0QsTUFBTSxPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTs7VUFDeEMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVOztVQUM3QixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksRUFBRTtZQUNKLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtZQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3pCLDZCQUE2QixFQUFFLGFBQWE7WUFDNUMsZUFBZSxFQUFFLGtCQUFrQjtZQUNuQyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGlCQUFpQixFQUFFLE1BQU07WUFDekIsTUFBTSxFQUFFLENBQUM7WUFDVCxZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsU0FBUyxFQUFFLFlBQVk7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsY0FBYyxFQUFFLFFBQVE7WUFDeEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsWUFBWSxFQUFFLFFBQVE7WUFDdEIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsTUFBTSxFQUFFLFNBQVM7WUFDakIscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixrQkFBa0IsRUFBRSxNQUFNO1lBQzFCLGlCQUFpQixFQUFFLE1BQU07WUFDekIsVUFBVSxFQUFFLE1BQU07WUFDbEIsa0JBQWtCLEVBQUUsTUFBTTtZQUMxQiw4QkFBOEIsRUFBRSxNQUFNO1lBQ3RDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzQixxQkFBcUIsRUFBRTtnQkFDckIsTUFBTSxFQUFFLENBQUM7YUFDVjtZQUNELFVBQVUsa0JBQ1IsT0FBTyxFQUFFLElBQUksSUFDVixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxVQUFVLEVBQUUsYUFBYSxFQUN6QixPQUFPLEVBQUUsQ0FBQyxFQUNWLGFBQWEsRUFBRSxNQUFNLEdBQ3RCO1lBQ0QsNkNBQTZDLEVBQUU7Z0JBQzdDLFVBQVUsRUFBRSxjQUFjO2dCQUMxQixPQUFPLEVBQUUsR0FBRztnQkFDWixZQUFZLEVBQUUsU0FBUzthQUN4QjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsWUFBWTtTQUN4QjtRQUNELGlCQUFpQixFQUFFLElBQUk7UUFDdkIsVUFBVSxFQUFFO1lBQ1YsWUFBWSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxtR0FBbUc7YUFDaEg7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTtcbiAgY29uc3QgX3N0eWxlcyA9ICh7XG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogdHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLCAwLCAwLCAwKWAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBwYWRkaW5nOiAnMCAxZW0nLFxuICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJyxcbiAgICAgICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lJzogJ25vbmUnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpLFxuICAgICAgJyY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICAgIGJvcmRlcjogMFxuICAgICAgfSxcbiAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYCcnYCxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9OjphZnRlciwgJjpob3Zlcjo6YWZ0ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICB9LFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmLCY6OmFmdGVyJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gX3N0eWxlcztcbn07XG4iXX0=