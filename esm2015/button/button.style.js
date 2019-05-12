import { LY_COMMON_STYLES } from '@alyle/ui';
export const STYLES = (theme) => {
    const typography = theme.typography;
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
            [['&:hover',
                '&:hover::after',
                '&:focus',
                '&:focus::after',
                '{onFocusByKeyboard}'].join()]: {
                transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms',
            }
        }
    });
    return _styles;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTdELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtJQUM5QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLENBQUM7UUFDZixJQUFJLEVBQUU7WUFDSixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztZQUN6Qiw2QkFBNkIsRUFBRSxhQUFhO1lBQzVDLGVBQWUsRUFBRSxrQkFBa0I7WUFDbkMsTUFBTSxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsT0FBTztZQUNoQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGNBQWMsRUFBRSxRQUFRO1lBQ3hCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLHFCQUFxQixFQUFFLE1BQU07WUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtZQUMxQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGtCQUFrQixFQUFFLE1BQU07WUFDMUIsOEJBQThCLEVBQUUsTUFBTTtZQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IscUJBQXFCLEVBQUU7Z0JBQ3JCLE1BQU0sRUFBRSxDQUFDO2FBQ1Y7WUFDRCxVQUFVLGtCQUNSLE9BQU8sRUFBRSxJQUFJLElBQ1YsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFBRSxNQUFNLEVBQ2QsVUFBVSxFQUFFLGFBQWEsRUFDekIsT0FBTyxFQUFFLENBQUMsRUFDVixhQUFhLEVBQUUsTUFBTSxHQUN0QjtZQUNELDZDQUE2QyxFQUFFO2dCQUM3QyxVQUFVLEVBQUUsY0FBYztnQkFDMUIsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osWUFBWSxFQUFFLFNBQVM7YUFDeEI7WUFDRCxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDN0M7UUFDRCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxNQUFNO1lBQ2YsY0FBYyxFQUFFLFNBQVM7WUFDekIsVUFBVSxFQUFFLFNBQVM7WUFDckIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxZQUFZO1NBQ3hCO1FBQ0QsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixVQUFVLEVBQUU7WUFDVixDQUNFLENBQUUsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixxQkFBcUIsQ0FBRSxDQUFDLElBQUksRUFBRSxDQUNqQyxFQUFFO2dCQUNELFVBQVUsRUFBRSxtR0FBbUc7YUFDaEg7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgY29uc3QgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgcGFkZGluZzogJzAgMWVtJyxcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKDE0KSxcbiAgICAgICcmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgICBib3JkZXI6IDBcbiAgICAgIH0sXG4gICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcme29uRm9jdXNCeUtleWJvYXJkfTo6YWZ0ZXIsICY6aG92ZXI6OmFmdGVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgICAgfSxcbiAgICAgICcmJzogdGhlbWUuYnV0dG9uID8gdGhlbWUuYnV0dG9uLnJvb3QgOiBudWxsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICB9LFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgIFtcbiAgICAgICAgWyAnJjpob3ZlcicsXG4gICAgICAgICAgJyY6aG92ZXI6OmFmdGVyJyxcbiAgICAgICAgICAnJjpmb2N1cycsXG4gICAgICAgICAgJyY6Zm9jdXM6OmFmdGVyJyxcbiAgICAgICAgICAne29uRm9jdXNCeUtleWJvYXJkfScgXS5qb2luKClcbiAgICAgIF06IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcywgYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXMnLFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfc3R5bGVzO1xufTtcbiJdfQ==