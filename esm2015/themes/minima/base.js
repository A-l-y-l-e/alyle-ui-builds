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
                size: 'medium'
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
        this.toolbar = {
            appearance: {
                dense: {
                    height: '56px'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLEdBQUcsRUFDSixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxPQUFPLFVBQVcsU0FBUSxZQUFZO0lBeUwxQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBekxWLGVBQVUsR0FBRztZQUNYLFVBQVUsRUFBRSxzQkFBc0I7WUFDbEMsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLFlBQVksRUFBRSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUNGLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsV0FBTSxHQUFHLGVBQWUsQ0FBQztRQUN6QixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLFdBQU0sR0FBRztZQUNQLGFBQWEsRUFBRTtnQkFDYixJQUFJLEVBQUUsUUFBb0I7YUFDM0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxNQUFN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LEdBQUcsQ0FBQzthQUNqQztZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsYUFBYSxFQUFFLEdBQUc7YUFDbkI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLGFBQWEsRUFBRSxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgRGlyXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMsIFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB7XG4gICAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgICBodG1sRm9udFNpemU6IDE2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBndXR0ZXJUb3A6IDEsXG4gICAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gICAgbHlUeXA6IHt9XG4gIH07XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xuICBidXR0b24gPSB7XG4gICAgZGVmYXVsdENvbmZpZzoge1xuICAgICAgc2l6ZTogJ21lZGl1bScgYXMgJ21lZGl1bSdcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHNtYWxsOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEzKSxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgICAgIG1pbldpZHRoOiAnNDhweCdcbiAgICAgIH0pLFxuICAgICAgbWVkaXVtOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgICAgIG1pbldpZHRoOiAnNjRweCdcbiAgICAgIH0pLFxuICAgICAgbGFyZ2U6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE1KSxcbiAgICAgICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIG1pbldpZHRoOiAnOTZweCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9LFxuICAgICAgZmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNTZweCcsXG4gICAgICAgIHdpZHRoOiAnNTZweCcsXG4gICAgICAgIGhlaWdodDogJzU2cHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9LFxuICAgICAgbWluaUZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzQwcHgnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZXhwYW5zaW9uID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgICcmIHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICAgIGhlaWdodDogJzQ4cHgnXG4gICAgICB9LFxuICAgICAgJyYge2V4cGFuZGVkfSB7cGFuZWxIZWFkZXJ9Jzoge1xuICAgICAgICBoZWlnaHQ6ICc2NHB4J1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIHBvcE91dDoge1xuICAgICAgICAnJiB7cGFuZWx9Jzoge1xuICAgICAgICAgIHRyYW5zaXRpb246IGBtYXJnaW4gJHt0aGlzLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhpcy5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtleHBhbmRlZH17cGFuZWx9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzE2cHggMCcsXG4gICAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZmllbGQgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgJyY6bm90KHtmb2N1c2VkfSk6bm90KHtkaXNhYmxlZH0pOmhvdmVyIHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH0sXG4gICAgICAgICcme2ZvY3VzZWR9IHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnaW5oZXJpdCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgdGV4dGFyZWF7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aW5wdXROYXRpdmV9Om5vdCh0ZXh0YXJlYSknOiB7XG4gICAgICAgICAgcGFkZGluZzogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgLjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge3ByZWZpeH0nOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYgc3VmZml4Jzoge1xuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtwbGFjZWhvbGRlcn0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmbG9hdGluZ0xhYmVsfXtsYWJlbH0nOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS43NWVtKSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2hpbnRDb250YWluZXJ9Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICAnJjpub3Qoe2ZvY3VzZWR9KTpub3Qoe2Rpc2FibGVkfSkge2NvbnRhaW5lcn06aG92ZXI6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcxcHgnXG4gICAgICAgIH0sXG4gICAgICAgICd0ZXh0YXJlYXtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMS41OTM3NWVtIDAgMC40MDYyNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAne2lucHV0TmF0aXZlfTpub3QodGV4dGFyZWEpJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCA1cHggMCAwJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nLFxuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzAnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJntmb2N1c2VkfSB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYge3BsYWNlaG9sZGVyfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmbG9hdGluZ0xhYmVsfXtsYWJlbH0nOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtLjc1ZW0pJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aGludENvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRvb2xiYXIgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZGVuc2U6IHtcbiAgICAgICAgaGVpZ2h0OiAnNTZweCdcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cG9ncmFwaHkubHlUeXAgPSB7XG4gICAgICBkaXNwbGF5NDoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDk2KSxcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oLTEuNSlcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5Mzoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDYwKSxcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oLTAuNSlcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5Mjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDQ4KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgICB9LFxuICAgICAgZGlzcGxheTE6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgzNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMjUpXG4gICAgICB9LFxuICAgICAgaGVhZGxpbmU6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgyNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMjApLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KVxuICAgICAgfSxcbiAgICAgIHN1YmhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpLFxuICAgICAgICBsaW5lSGVpZ2h0OiAyNFxuICAgICAgfSxcbiAgICAgIHN1YmhlYWRpbmcyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjEpXG4gICAgICB9LFxuICAgICAgYm9keTI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpXG4gICAgICB9LFxuICAgICAgYm9keTE6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMjUpXG4gICAgICB9LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICAgIH0sXG4gICAgICBjYXB0aW9uOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTIpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAuNFxuICAgICAgfSxcbiAgICAgIG92ZXJsaW5lOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTApLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgxLjUpLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==