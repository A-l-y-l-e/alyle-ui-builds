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
            defaultConfig: {
                size: (/** @type {?} */ ('medium'))
            },
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
        this.field = {
            appearance: {
                outlined: {
                    '&:not({focused}):not({disabled}):hover {fieldset}': {
                        borderColor: 'currentColor'
                    },
                    '&{focused} {fieldset}': {
                        borderWidth: '2px',
                        borderColor: 'inherit'
                    },
                    '& textarea{inputNative}': {
                        margin: '1em 0'
                    },
                    '& {inputNative}:not(textarea)': {
                        padding: '1em 0'
                    },
                    '& {container}': {
                        padding: '0 0.75em'
                    },
                    '& {fieldset}': {
                        borderWidth: '1px',
                        borderRadius: '5px',
                        padding: '0 .5em'
                    },
                    '& {prefix}': {
                        '&:after': {
                            padding: '0.25em'
                        }
                    },
                    '& suffix': {
                        '&:after': {
                            padding: '0.25em'
                        }
                    },
                    '& {label}': {
                        margin: '1em 0'
                    },
                    '& {placeholder}': {
                        margin: '1em 0'
                    },
                    '& {floatingLabel}{label}': {
                        transform: 'translateY(-1.75em)'
                    },
                    '& {hintContainer}': {
                        padding: '0 0.75em'
                    }
                },
                filled: {
                    '&:not({focused}):not({disabled}) {container}:hover:after': {
                        borderBottomWidth: '1px'
                    },
                    'textarea{inputNative}': {
                        margin: '1.59375em 0 0.40625em'
                    },
                    '{inputNative}:not(textarea)': {
                        padding: '1.59375em 0 0.40625em'
                    },
                    '& {container}': {
                        borderRadius: '5px 5px 0 0',
                        padding: '0 0.75em',
                        '&:after': {
                            borderBottomStyle: 'solid',
                            borderBottomColor: 'currentColor',
                            borderBottomWidth: '0'
                        }
                    },
                    '&{focused} {container}': {
                        '&:after': {
                            borderBottomWidth: '2px'
                        }
                    },
                    '& {placeholder}': {
                        margin: '1.59375em 0 0.40625em'
                    },
                    '& {label}': {
                        margin: '1em 0'
                    },
                    '& {floatingLabel}{label}': {
                        transform: 'translateY(-.75em)'
                    },
                    '& {hintContainer}': {
                        padding: '0 0.75em'
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
    /** @type {?} */
    MinimaBase.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixHQUFHLEVBQ0osTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQWlMMUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWpMVixlQUFVLEdBQUc7WUFDWCxVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDRixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFlLENBQUM7UUFDekIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQUc7WUFDUCxhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLG1CQUFBLFFBQVEsRUFBWTthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUMxQixTQUFTLEVBQUUsTUFBTTtvQkFDakIs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QUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEM7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRzthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxHQUFHO2FBQ25CO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxhQUFhLEVBQUUsV0FBVzthQUMzQjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQXZQQyxnQ0FPRTs7SUFDRixnQ0FBd0I7O0lBQ3hCLDBCQUFZOztJQUNaLGlDQUEwQjs7SUFDMUIsNEJBQWdCOztJQUNoQiw0QkFBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFDeEIsK0JBQW9COztJQUNwQiw0QkE4Q0U7O0lBQ0YsK0JBeUJFOztJQUVGLDJCQXFGRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgRGlyXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMsIFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB7XG4gICAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgICBodG1sRm9udFNpemU6IDE2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBndXR0ZXJUb3A6IDEsXG4gICAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gICAgbHlUeXA6IHt9XG4gIH07XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xuICBidXR0b24gPSB7XG4gICAgZGVmYXVsdENvbmZpZzoge1xuICAgICAgc2l6ZTogJ21lZGl1bScgYXMgJ21lZGl1bSdcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHNtYWxsOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEzKSxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgICAgIG1pbldpZHRoOiAnNDhweCdcbiAgICAgIH0pLFxuICAgICAgbWVkaXVtOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgICAgIG1pbldpZHRoOiAnNjRweCdcbiAgICAgIH0pLFxuICAgICAgbGFyZ2U6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE1KSxcbiAgICAgICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIG1pbldpZHRoOiAnOTZweCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9LFxuICAgICAgZmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNTZweCcsXG4gICAgICAgIHdpZHRoOiAnNTZweCcsXG4gICAgICAgIGhlaWdodDogJzU2cHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9LFxuICAgICAgbWluaUZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzQwcHgnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZXhwYW5zaW9uID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgICcmIHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICAgIGhlaWdodDogJzQ4cHgnXG4gICAgICB9LFxuICAgICAgJyYge2V4cGFuZGVkfSB7cGFuZWxIZWFkZXJ9Jzoge1xuICAgICAgICBoZWlnaHQ6ICc2NHB4J1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIHBvcE91dDoge1xuICAgICAgICAnJiB7cGFuZWx9Jzoge1xuICAgICAgICAgIHRyYW5zaXRpb246IGBtYXJnaW4gJHt0aGlzLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhpcy5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtleHBhbmRlZH17cGFuZWx9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzE2cHggMCcsXG4gICAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZmllbGQgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgJyY6bm90KHtmb2N1c2VkfSk6bm90KHtkaXNhYmxlZH0pOmhvdmVyIHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH0sXG4gICAgICAgICcme2ZvY3VzZWR9IHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnaW5oZXJpdCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgdGV4dGFyZWF7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aW5wdXROYXRpdmV9Om5vdCh0ZXh0YXJlYSknOiB7XG4gICAgICAgICAgcGFkZGluZzogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgLjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge3ByZWZpeH0nOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYgc3VmZml4Jzoge1xuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtwbGFjZWhvbGRlcn0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmbG9hdGluZ0xhYmVsfXtsYWJlbH0nOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS43NWVtKSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2hpbnRDb250YWluZXJ9Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICAnJjpub3Qoe2ZvY3VzZWR9KTpub3Qoe2Rpc2FibGVkfSkge2NvbnRhaW5lcn06aG92ZXI6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcxcHgnXG4gICAgICAgIH0sXG4gICAgICAgICd0ZXh0YXJlYXtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMS41OTM3NWVtIDAgMC40MDYyNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAne2lucHV0TmF0aXZlfTpub3QodGV4dGFyZWEpJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCA1cHggMCAwJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nLFxuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzAnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJntmb2N1c2VkfSB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYge3BsYWNlaG9sZGVyfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmbG9hdGluZ0xhYmVsfXtsYWJlbH0nOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtLjc1ZW0pJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aGludENvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBvZ3JhcGh5Lmx5VHlwID0ge1xuICAgICAgZGlzcGxheTQ6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg5NiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKC0xLjUpXG4gICAgICB9LFxuICAgICAgZGlzcGxheTM6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg2MCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKC0wLjUpXG4gICAgICB9LFxuICAgICAgZGlzcGxheTI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg0OCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgICAgfSxcbiAgICAgIGRpc3BsYXkxOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMzQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjI1KVxuICAgICAgfSxcbiAgICAgIGhlYWRsaW5lOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMjQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDIwKSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xNSlcbiAgICAgIH0sXG4gICAgICBzdWJoZWFkaW5nOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KSxcbiAgICAgICAgbGluZUhlaWdodDogMjRcbiAgICAgIH0sXG4gICAgICBzdWJoZWFkaW5nMjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xKVxuICAgICAgfSxcbiAgICAgIGJvZHkyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KVxuICAgICAgfSxcbiAgICAgIGJvZHkxOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjI1KVxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9LFxuICAgICAgY2FwdGlvbjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEyKSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgICAgIH0sXG4gICAgICBvdmVybGluZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEwKSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMS41KSxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=