/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LyStyleUtils, Dir } from '@alyle/ui';
import { iconButton, icon, zIndex, animations, RippleVariables } from './variables';
import { Breakpoints } from '@alyle/ui/responsive';
export class MinimaBase extends LyStyleUtils {
    constructor() {
        super();
        this.typography = {
            fontFamily: `'Roboto', sans-serif`,
            htmlFontSize: 16,
            fontSize: 14,
            gutterTop: 1,
            gutterBottom: .35,
            lyTyp: {}
        };
        this.iconButton = iconButton;
        this.icon = icon;
        this.breakpoints = Breakpoints;
        this.zIndex = zIndex;
        this.ripple = RippleVariables;
        this.animations = animations;
        this.direction = Dir.ltr;
        this.button = {
            size: {
                small: ({
                    padding: '0 8px',
                    fontSize: this.pxToRem(13),
                    minHeight: '32px',
                    minWidth: '48px'
                }),
                medium: ({
                    padding: '0 14px',
                    minHeight: '36px',
                    minWidth: '64px'
                }),
                large: ({
                    padding: '0 21px',
                    fontSize: this.pxToRem(15),
                    minHeight: '40px',
                    minWidth: '96px'
                })
            },
            appearance: {
                icon: {
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                },
                fab: {
                    minWidth: '56px',
                    width: '56px',
                    height: '56px',
                    padding: 0,
                    borderRadius: '50%'
                },
                miniFab: {
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    padding: 0,
                    borderRadius: '50%'
                }
            }
        };
        this.expansion = {
            root: {
                '& {panelHeader}': {
                    height: '48px'
                },
                '& {expanded} {panelHeader}': {
                    height: '64px'
                },
            },
            appearance: {
                popOut: {
                    '& {panel}': {
                        transition: `margin ${this.animations.durations.entering}ms ${this.animations.curves.standard}`
                    },
                    '& {expanded}{panel}': {
                        margin: '16px 0',
                        '&:first-child': {
                            marginTop: 0
                        },
                        '&:last-child': {
                            marginBottom: 0
                        }
                    }
                }
            }
        };
        this.typography.lyTyp = {
            display4: {
                fontSize: this.pxToRem(96),
                fontWeight: 300,
                letterSpacing: this.pxToRem(-1.5)
            },
            display3: {
                fontSize: this.pxToRem(60),
                fontWeight: 300,
                letterSpacing: this.pxToRem(-0.5)
            },
            display2: {
                fontSize: this.pxToRem(48),
                fontWeight: 400,
                letterSpacing: 0
            },
            display1: {
                fontSize: this.pxToRem(34),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.25)
            },
            headline: {
                fontSize: this.pxToRem(24),
                fontWeight: 400,
                letterSpacing: 0
            },
            title: {
                fontSize: this.pxToRem(20),
                fontWeight: 500,
                letterSpacing: this.pxToRem(0.15)
            },
            subheading: {
                fontSize: this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.15),
                lineHeight: 24
            },
            subheading2: {
                fontSize: this.pxToRem(14),
                fontWeight: 500,
                letterSpacing: this.pxToRem(0.1)
            },
            body2: {
                fontSize: this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.15)
            },
            body1: {
                fontSize: this.pxToRem(14),
                fontWeight: 400,
                letterSpacing: this.pxToRem(0.25)
            },
            button: {
                fontSize: this.pxToRem(14),
                fontWeight: 500
            },
            caption: {
                fontSize: this.pxToRem(12),
                fontWeight: 400,
                letterSpacing: 0.4
            },
            overline: {
                fontSize: this.pxToRem(10),
                fontWeight: 400,
                letterSpacing: this.pxToRem(1.5),
                textTransform: 'uppercase'
            }
        };
    }
}
if (false) {
    /** @type {?} */
    MinimaBase.prototype.typography;
    /** @type {?} */
    MinimaBase.prototype.iconButton;
    /** @type {?} */
    MinimaBase.prototype.icon;
    /** @type {?} */
    MinimaBase.prototype.breakpoints;
    /** @type {?} */
    MinimaBase.prototype.zIndex;
    /** @type {?} */
    MinimaBase.prototype.ripple;
    /** @type {?} */
    MinimaBase.prototype.animations;
    /** @type {?} */
    MinimaBase.prototype.direction;
    /** @type {?} */
    MinimaBase.prototype.button;
    /** @type {?} */
    MinimaBase.prototype.expansion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixHQUFHLEVBQ0osTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQXNGMUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXRGVixlQUFVLEdBQUc7WUFDWCxVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDRixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFlLENBQUM7UUFDekIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQUc7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixDQUFDO2dCQUNGLE1BQU0sRUFBRSxDQUFDO29CQUNQ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QUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDaEMsYUFBYSxFQUFFLFdBQVc7YUFDM0I7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7SUE1SkMsZ0NBT0U7O0lBQ0YsZ0NBQXdCOztJQUN4QiwwQkFBWTs7SUFDWixpQ0FBMEI7O0lBQzFCLDRCQUFnQjs7SUFDaEIsNEJBQXlCOztJQUN6QixnQ0FBd0I7O0lBQ3hCLCtCQUFvQjs7SUFDcEIsNEJBMkNFOztJQUNGLCtCQXlCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgRGlyXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMsIFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB7XG4gICAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgICBodG1sRm9udFNpemU6IDE2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBndXR0ZXJUb3A6IDEsXG4gICAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gICAgbHlUeXA6IHt9XG4gIH07XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xuICBidXR0b24gPSB7XG4gICAgc2l6ZToge1xuICAgICAgc21hbGw6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTMpLFxuICAgICAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc0OHB4J1xuICAgICAgfSksXG4gICAgICBtZWRpdW06ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc2NHB4J1xuICAgICAgfSksXG4gICAgICBsYXJnZTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTUpLFxuICAgICAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc5NnB4J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgbWluV2lkdGg6ICc0MHB4JyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBmYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICc1NnB4JyxcbiAgICAgICAgd2lkdGg6ICc1NnB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNTZweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBtaW5pRmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBleHBhbnNpb24gPSB7XG4gICAgcm9vdDoge1xuICAgICAgJyYge3BhbmVsSGVhZGVyfSc6IHtcbiAgICAgICAgaGVpZ2h0OiAnNDhweCdcbiAgICAgIH0sXG4gICAgICAnJiB7ZXhwYW5kZWR9IHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICAgIGhlaWdodDogJzY0cHgnXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgcG9wT3V0OiB7XG4gICAgICAgICcmIHtwYW5lbH0nOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYG1hcmdpbiAke3RoaXMuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGlzLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWBcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2V4cGFuZGVkfXtwYW5lbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMTZweCAwJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cG9ncmFwaHkubHlUeXAgPSB7XG4gICAgICBkaXNwbGF5NDoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDk2KSxcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oLTEuNSlcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5Mzoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDYwKSxcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oLTAuNSlcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5Mjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDQ4KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgICB9LFxuICAgICAgZGlzcGxheTE6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgzNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMjUpXG4gICAgICB9LFxuICAgICAgaGVhZGxpbmU6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgyNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMjApLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KVxuICAgICAgfSxcbiAgICAgIHN1YmhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpLFxuICAgICAgICBsaW5lSGVpZ2h0OiAyNFxuICAgICAgfSxcbiAgICAgIHN1YmhlYWRpbmcyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjEpXG4gICAgICB9LFxuICAgICAgYm9keTI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpXG4gICAgICB9LFxuICAgICAgYm9keTE6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMjUpXG4gICAgICB9LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICAgIH0sXG4gICAgICBjYXB0aW9uOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTIpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAuNFxuICAgICAgfSxcbiAgICAgIG92ZXJsaW5lOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTApLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgxLjUpLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==