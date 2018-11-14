/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const styles = (theme) => {
    /** @type {?} */
    const typography = theme.typography;
    /** @type {?} */
    const _styles = ({
        root: Object.assign({ fontFamily: typography.fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: `rgba(0, 0, 0, 0)`, border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', '&::-moz-focus-inner, &::-moz-focus-inner': {
                border: 0
            } }, typography.lyTyp["button"]),
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
        animations: {
            '&': {
                transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms'
            }
        }
    });
    if (typeof _styles.root.fontSize === 'number') {
        _styles.root.fontSize = /** @type {?} */ (theme.pxToRem(_styles.root.fontSize));
    }
    if (typeof _styles.root.letterSpacing === 'number') {
        _styles.root.letterSpacing = /** @type {?} */ (theme.pxToRem(_styles.root.letterSpacing));
    }
    return _styles;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0eWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi5zdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGFBQWEsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFOztJQUM5QyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDOztJQUNwQyxNQUFNLE9BQU8sR0FBRyxDQUFDO1FBQ2YsSUFBSSxrQkFDRixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUN6Qiw2QkFBNkIsRUFBRSxhQUFhLEVBQzVDLGVBQWUsRUFBRSxrQkFBa0IsRUFDbkMsTUFBTSxFQUFFLENBQUMsRUFDVCxPQUFPLEVBQUUsT0FBTyxFQUNoQixpQkFBaUIsRUFBRSxNQUFNLEVBQ3pCLE1BQU0sRUFBRSxDQUFDLEVBQ1QsWUFBWSxFQUFFLEtBQUssRUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFDZixVQUFVLEVBQUUsR0FBRyxFQUNmLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLGNBQWMsRUFBRSxRQUFRLEVBQ3hCLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLFlBQVksRUFBRSxRQUFRLEVBQ3RCLE9BQU8sRUFBRSxhQUFhLEVBQ3RCLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLHFCQUFxQixFQUFFLE1BQU0sRUFDN0Isa0JBQWtCLEVBQUUsTUFBTSxFQUMxQixpQkFBaUIsRUFBRSxNQUFNLEVBQ3pCLFVBQVUsRUFBRSxNQUFNLEVBQ2xCLGtCQUFrQixFQUFFLE1BQU0sRUFDMUIsOEJBQThCLEVBQUUsTUFBTSxFQUN0QywwQ0FBMEMsRUFBRTtnQkFDMUMsTUFBTSxFQUFFLENBQUM7YUFDVixJQUNFLFVBQVUsQ0FBQyxLQUFLLFdBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsTUFBTTtZQUNmLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsWUFBWTtTQUN4QjtRQUNELFVBQVUsRUFBRTtZQUNWLEdBQUcsRUFBRTtnQkFDSCxVQUFVLEVBQUUsbUdBQW1HO2FBQ2hIO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxxQkFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFRLENBQUEsQ0FBQztLQUNyRTtJQUNELElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUU7UUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLHFCQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQVEsQ0FBQSxDQUFDO0tBQy9FO0lBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgY29uc3QgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgcGFkZGluZzogJzAgMWVtJyxcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAgICcmOjotbW96LWZvY3VzLWlubmVyLCAmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgICBib3JkZXI6IDBcbiAgICAgIH0sXG4gICAgICAuLi50eXBvZ3JhcGh5Lmx5VHlwLmJ1dHRvblxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgfSxcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAnJic6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcywgYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXMnXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QuZm9udFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QuZm9udFNpemUpIGFzIGFueTtcbiAgfVxuICBpZiAodHlwZW9mIF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nID09PSAnbnVtYmVyJykge1xuICAgIF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZykgYXMgYW55O1xuICB9XG4gIHJldHVybiBfc3R5bGVzO1xufTtcbiJdfQ==