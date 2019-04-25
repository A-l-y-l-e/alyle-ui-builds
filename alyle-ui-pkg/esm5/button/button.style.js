import * as tslib_1 from "tslib";
import { LY_COMMON_STYLES } from '@alyle/ui';
export var STYLES = function (theme) {
    var typography = theme.typography;
    var _styles = ({
        root: {
            fontFamily: typography.fontFamily,
            color: theme.text.default,
            '-webkit-tap-highlight-color': 'transparent',
            backgroundColor: "rgba(0, 0, 0, 0)",
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
            '&::after': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '100%', height: '100%', background: 'transparent', opacity: 0, pointerEvents: 'none' }),
            '&{onFocusByKeyboard}::after, &:hover::after': {
                background: 'currentColor',
                opacity: .13,
                borderRadius: 'inherit'
            },
            '&': theme.button ? theme.button.root : null
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFrQixnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFxQjtJQUMxQyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQU0sT0FBTyxHQUFHLENBQUM7UUFDZixJQUFJLEVBQUU7WUFDSixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztZQUN6Qiw2QkFBNkIsRUFBRSxhQUFhO1lBQzVDLGVBQWUsRUFBRSxrQkFBa0I7WUFDbkMsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsT0FBTztZQUNoQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGNBQWMsRUFBRSxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLHFCQUFxQixFQUFFLE1BQU07WUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtZQUMxQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGtCQUFrQixFQUFFLE1BQU07WUFDMUIsOEJBQThCLEVBQUUsTUFBTTtZQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IscUJBQXFCLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxDQUFDO2FBQ1Y7WUFDRCxVQUFVLHFCQUNSLE9BQU8sRUFBRSxJQUFJLElBQ1YsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsVUFBVSxFQUFFLGFBQWEsRUFDekIsT0FBTyxFQUFFLENBQUMsRUFDVixhQUFhLEVBQUUsTUFBTSxHQUN0QjtZQUNELDZDQUE2QyxFQUFFO2dCQUM3QyxVQUFVLEVBQUUsY0FBYztnQkFDMUIsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osWUFBWSxFQUFFLFNBQVM7YUFDeEI7WUFDRCxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDN0M7UUFDRCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxNQUFNO1lBQ2YsY0FBYyxFQUFFLFNBQVM7WUFDekIsVUFBVSxFQUFFLFNBQVM7WUFDckIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxZQUFZO1NBQ3hCO1FBQ0QsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixVQUFVLEVBQUU7WUFDVixZQUFZLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLG1HQUFtRzthQUNoSDtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICBjb25zdCB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTtcbiAgY29uc3QgX3N0eWxlcyA9ICh7XG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogdHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLCAwLCAwLCAwKWAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBwYWRkaW5nOiAnMCAxZW0nLFxuICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJyxcbiAgICAgICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lJzogJ25vbmUnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0oMTQpLFxuICAgICAgJyY6Oi1tb3otZm9jdXMtaW5uZXInOiB7XG4gICAgICAgIGJvcmRlcjogMFxuICAgICAgfSxcbiAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYCcnYCxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9OjphZnRlciwgJjpob3Zlcjo6YWZ0ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9LFxuICAgICAgJyYnOiB0aGVtZS5idXR0b24gPyB0aGVtZS5idXR0b24ucm9vdCA6IG51bGxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH0sXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgYW5pbWF0aW9uczoge1xuICAgICAgJyYsJjo6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIDM3NW1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXMsIGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSkgMG1zJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfc3R5bGVzO1xufTtcbiJdfQ==