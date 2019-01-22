/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
export const styles = (theme) => {
    /** @type {?} */
    const typography = theme.typography;
    /** @type {?} */
    const _styles = ({
        root: Object.assign({ fontFamily: typography.fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: `rgba(0, 0, 0, 0)`, border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', fontSize: theme.pxToRem(14), '&::-moz-focus-inner': {
                border: 0
            } }, theme.button.root, { '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }), '&{onFocusByKeyboard}::after, &:hover::after': {
                background: 'currentColor',
                opacity: .13,
                borderRadius: 'inherit'
            } }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFrQixnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFN0QsTUFBTSxPQUFPLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTs7VUFDeEMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVOztVQUM3QixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksa0JBQ0YsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQ2pDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDekIsNkJBQTZCLEVBQUUsYUFBYSxFQUM1QyxlQUFlLEVBQUUsa0JBQWtCLEVBQ25DLE1BQU0sRUFBRSxDQUFDLEVBQ1QsT0FBTyxFQUFFLE9BQU8sRUFDaEIsaUJBQWlCLEVBQUUsTUFBTSxFQUN6QixNQUFNLEVBQUUsQ0FBQyxFQUNULFlBQVksRUFBRSxLQUFLLEVBQ25CLE9BQU8sRUFBRSxNQUFNLEVBQ2YsVUFBVSxFQUFFLEdBQUcsRUFDZixTQUFTLEVBQUUsWUFBWSxFQUN2QixRQUFRLEVBQUUsVUFBVSxFQUNwQixjQUFjLEVBQUUsUUFBUSxFQUN4QixVQUFVLEVBQUUsUUFBUSxFQUNwQixZQUFZLEVBQUUsUUFBUSxFQUN0QixPQUFPLEVBQUUsYUFBYSxFQUN0QixNQUFNLEVBQUUsU0FBUyxFQUNqQixxQkFBcUIsRUFBRSxNQUFNLEVBQzdCLGtCQUFrQixFQUFFLE1BQU0sRUFDMUIsaUJBQWlCLEVBQUUsTUFBTSxFQUN6QixVQUFVLEVBQUUsTUFBTSxFQUNsQixrQkFBa0IsRUFBRSxNQUFNLEVBQzFCLDhCQUE4QixFQUFFLE1BQU0sRUFDdEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQzNCLHFCQUFxQixFQUFFO2dCQUNyQixNQUFNLEVBQUUsQ0FBQzthQUNWLElBQ0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQ3BCLFVBQVUsa0JBQ1IsT0FBTyxFQUFFLElBQUksSUFDVixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxVQUFVLEVBQUUsYUFBYSxFQUN6QixPQUFPLEVBQUUsQ0FBQyxFQUNWLGFBQWEsRUFBRSxNQUFNLEtBRXZCLDZDQUE2QyxFQUFFO2dCQUM3QyxVQUFVLEVBQUUsY0FBYztnQkFDMUIsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osWUFBWSxFQUFFLFNBQVM7YUFDeEIsR0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLE1BQU07WUFDZixjQUFjLEVBQUUsU0FBUztZQUN6QixVQUFVLEVBQUUsU0FBUztZQUNyQixZQUFZLEVBQUUsU0FBUztZQUN2QixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFlBQVk7U0FDeEI7UUFDRCxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLFVBQVUsRUFBRTtZQUNWLFlBQVksRUFBRTtnQkFDWixVQUFVLEVBQUUsbUdBQW1HO2FBQ2hIO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgY29uc3QgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgcGFkZGluZzogJzAgMWVtJyxcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KSxcbiAgICAgICcmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgICBib3JkZXI6IDBcbiAgICAgIH0sXG4gICAgICAuLi50aGVtZS5idXR0b24ucm9vdCxcbiAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYCcnYCxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9OjphZnRlciwgJjpob3Zlcjo6YWZ0ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICB9LFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmLCY6OmFmdGVyJzoge1xuICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcydcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gX3N0eWxlcztcbn07XG4iXX0=