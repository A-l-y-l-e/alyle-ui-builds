import { LyStyleUtils, Dir } from '@alyle/ui';
import { iconButton, icon, zIndex, animations, RippleVariables } from './variables';
import { Breakpoints } from '@alyle/ui/responsive';
import * as _chroma from 'chroma-js';
const chroma = _chroma;
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
        this.slider = {
            defaultConfig: {
                appearance: 'standard'
            },
            appearance: {
                standard: {
                    appearance: _theme => ({}),
                    color: (_theme, color) => ({
                        '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                            backgroundColor: color
                        },
                        '&:not({disabled}) {thumbContentFocused} {thumb}::before, &:not({disabled}) {thumb}:hover::before': {
                            boxShadow: `0 0 0 8px ${chroma(color).alpha(.13).css()}`
                        },
                        '&{sliding} {thumbContentFocused} {thumb}::before': {
                            boxShadow: `0 0 0 16px ${chroma(color).alpha(.13).css()}`
                        },
                        '{tickActive}': {
                            backgroundColor: chroma(color).luminance(0.6).css()
                        },
                        '{bg}': {
                            opacity: .3
                        },
                        '& {thumbContent}::before': {
                            background: color
                        },
                        '&:not({disabled})': [['horizontal', 0], ['vertical', 90]].reduce((prev, orientation) => {
                            prev[`&{${orientation[0]}}`] = {
                                [[
                                    // always show visible thumb, when {thumbVisible} is available
                                    '&{thumbVisible} {thumbContent}::before',
                                    // on hover
                                    '&:not({thumbNotVisible}) {thumbContent}:hover::before',
                                    // on focused
                                    '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused}::before'
                                ].join()]: {
                                    background: `linear-gradient(${orientation[1]}deg, ${color} 0%, rgba(0, 0, 0, 0) 50%, ${color} 100%);`
                                },
                            };
                            return prev;
                        }, {})
                    }),
                    disabled: (theme, color) => {
                        const colorDisabled = chroma(color).darken(2)
                            .desaturate(2.5);
                        return ({
                            '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                                backgroundColor: colorDisabled.luminance(.4).css()
                            },
                            '{tickActive}': {
                                backgroundColor: colorDisabled.luminance(.6).css()
                            },
                            '&': [['horizontal', 0], ['vertical', 90]].reduce((prev, orientation) => {
                                prev[`&{${orientation[0]}}`] = {
                                    '& {thumbContent}::before': {
                                        background: `linear-gradient(${orientation[1]}deg, ${colorDisabled.luminance(.4).css()} 0%, rgba(0, 0, 0, 0) 50%, ${colorDisabled.luminance(.4).css()} 100%);`
                                    },
                                };
                                return prev;
                            }, {}),
                            '{bg}': {
                                opacity: .3
                            },
                            '&{horizontal} {thumbContainer}::before': {
                                background: theme.disabled.default
                            },
                            '&{vertical} {thumbContainer}::before': {
                                background: theme.disabled.default
                            }
                        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNaLEdBQUcsRUFFSixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFFckMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBRXZCLE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQStRMUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQS9RVixlQUFVLEdBQUc7WUFDWCxVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDRixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFlLENBQUM7UUFDekIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQUc7WUFDUCxhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLFFBQW9CO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxDQUFDO29CQUNOLE9BQU8sRUFBRSxPQUFPO29CQUNoQixRQUFRLEVBQUUsSUFBSSxD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QUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLGFBQWEsRUFBRSxXQUFXO2FBQzNCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5U3R5bGVVdGlscyxcbiAgRGlyLFxuICBTdHlsZUNvbnRhaW5lclxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgaWNvbkJ1dHRvbiwgaWNvbiwgekluZGV4LCBhbmltYXRpb25zLCBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBCcmVha3BvaW50cyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcbmltcG9ydCB7IFNsaWRlclZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aS9zbGlkZXInO1xuaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuXG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5leHBvcnQgY2xhc3MgTWluaW1hQmFzZSBleHRlbmRzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHkgPSB7XG4gICAgZm9udEZhbWlseTogYCdSb2JvdG8nLCBzYW5zLXNlcmlmYCxcbiAgICBodG1sRm9udFNpemU6IDE2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBndXR0ZXJUb3A6IDEsXG4gICAgZ3V0dGVyQm90dG9tOiAuMzUsXG4gICAgbHlUeXA6IHt9XG4gIH07XG4gIGljb25CdXR0b24gPSBpY29uQnV0dG9uO1xuICBpY29uID0gaWNvbjtcbiAgYnJlYWtwb2ludHMgPSBCcmVha3BvaW50cztcbiAgekluZGV4ID0gekluZGV4O1xuICByaXBwbGUgPSBSaXBwbGVWYXJpYWJsZXM7XG4gIGFuaW1hdGlvbnMgPSBhbmltYXRpb25zO1xuICBkaXJlY3Rpb24gPSBEaXIubHRyO1xuICBidXR0b24gPSB7XG4gICAgZGVmYXVsdENvbmZpZzoge1xuICAgICAgc2l6ZTogJ21lZGl1bScgYXMgJ21lZGl1bSdcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHNtYWxsOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEzKSxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgICAgIG1pbldpZHRoOiAnNDhweCdcbiAgICAgIH0pLFxuICAgICAgbWVkaXVtOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgICAgIG1pbldpZHRoOiAnNjRweCdcbiAgICAgIH0pLFxuICAgICAgbGFyZ2U6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE1KSxcbiAgICAgICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIG1pbldpZHRoOiAnOTZweCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9LFxuICAgICAgZmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNTZweCcsXG4gICAgICAgIHdpZHRoOiAnNTZweCcsXG4gICAgICAgIGhlaWdodDogJzU2cHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9LFxuICAgICAgbWluaUZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzQwcHgnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZXhwYW5zaW9uID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgICcmIHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICAgIGhlaWdodDogJzQ4cHgnXG4gICAgICB9LFxuICAgICAgJyYge2V4cGFuZGVkfSB7cGFuZWxIZWFkZXJ9Jzoge1xuICAgICAgICBoZWlnaHQ6ICc2NHB4J1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIHBvcE91dDoge1xuICAgICAgICAnJiB7cGFuZWx9Jzoge1xuICAgICAgICAgIHRyYW5zaXRpb246IGBtYXJnaW4gJHt0aGlzLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhpcy5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH1gXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtleHBhbmRlZH17cGFuZWx9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzE2cHggMCcsXG4gICAgICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZmllbGQgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgJyY6bm90KHtmb2N1c2VkfSk6bm90KHtkaXNhYmxlZH0pOmhvdmVyIHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH0sXG4gICAgICAgICcme2ZvY3VzZWR9IHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnaW5oZXJpdCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgdGV4dGFyZWF7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aW5wdXROYXRpdmV9Om5vdCh0ZXh0YXJlYSknOiB7XG4gICAgICAgICAgcGFkZGluZzogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmaWVsZHNldH0nOiB7XG4gICAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgLjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge3ByZWZpeH0nOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYgc3VmZml4Jzoge1xuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtwbGFjZWhvbGRlcn0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmbG9hdGluZ0xhYmVsfXtsYWJlbH0nOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS43NWVtKSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2hpbnRDb250YWluZXJ9Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICAnJjpub3Qoe2ZvY3VzZWR9KTpub3Qoe2Rpc2FibGVkfSkge2NvbnRhaW5lcn06aG92ZXI6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcxcHgnXG4gICAgICAgIH0sXG4gICAgICAgICd0ZXh0YXJlYXtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMS41OTM3NWVtIDAgMC40MDYyNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAne2lucHV0TmF0aXZlfTpub3QodGV4dGFyZWEpJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCA1cHggMCAwJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nLFxuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzAnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJntmb2N1c2VkfSB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMnB4J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYge3BsYWNlaG9sZGVyfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtmbG9hdGluZ0xhYmVsfXtsYWJlbH0nOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtLjc1ZW0pJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aGludENvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRvb2xiYXIgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgZGVuc2U6IHtcbiAgICAgICAgaGVpZ2h0OiAnNTZweCdcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2xpZGVyOiBTbGlkZXJWYXJpYWJsZXMgPSB7XG4gICAgZGVmYXVsdENvbmZpZzoge1xuICAgICAgYXBwZWFyYW5jZTogJ3N0YW5kYXJkJ1xuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgc3RhbmRhcmQ6IHtcbiAgICAgICAgYXBwZWFyYW5jZTogX3RoZW1lID0+ICh7XG5cbiAgICAgICAgfSksXG4gICAgICAgIGNvbG9yOiAoX3RoZW1lLCBjb2xvcikgPT4gKHtcbiAgICAgICAgICAnJiB7dHJhY2t9LCAmIHt0aHVtYn0sICYge3RodW1iTGFiZWx9LCAmIHtiZ30sICYge3RpY2t9Jzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bm90KHtkaXNhYmxlZH0pIHt0aHVtYkNvbnRlbnRGb2N1c2VkfSB7dGh1bWJ9OjpiZWZvcmUsICY6bm90KHtkaXNhYmxlZH0pIHt0aHVtYn06aG92ZXI6OmJlZm9yZSc6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDhweCAke2Nocm9tYShjb2xvcikuYWxwaGEoLjEzKS5jc3MoKX1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJntzbGlkaW5nfSB7dGh1bWJDb250ZW50Rm9jdXNlZH0ge3RodW1ifTo6YmVmb3JlJzoge1xuICAgICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMTZweCAke2Nocm9tYShjb2xvcikuYWxwaGEoLjEzKS5jc3MoKX1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICAne3RpY2tBY3RpdmV9Jzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaHJvbWEoY29sb3IpLmx1bWluYW5jZSgwLjYpLmNzcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAne2JnfSc6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IC4zXG4gICAgICAgICAgfSxcblxuICAgICAgICAgICcmIHt0aHVtYkNvbnRlbnR9OjpiZWZvcmUnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bm90KHtkaXNhYmxlZH0pJzogW1snaG9yaXpvbnRhbCcsIDBdLCBbJ3ZlcnRpY2FsJywgOTBdXS5yZWR1Y2UoKHByZXYsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBwcmV2W2AmeyR7b3JpZW50YXRpb25bMF19fWBdID0ge1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLy8gYWx3YXlzIHNob3cgdmlzaWJsZSB0aHVtYiwgd2hlbiB7dGh1bWJWaXNpYmxlfSBpcyBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICcme3RodW1iVmlzaWJsZX0ge3RodW1iQ29udGVudH06OmJlZm9yZScsXG4gICAgICAgICAgICAgICAgICAvLyBvbiBob3ZlclxuICAgICAgICAgICAgICAgICAgJyY6bm90KHt0aHVtYk5vdFZpc2libGV9KSB7dGh1bWJDb250ZW50fTpob3Zlcjo6YmVmb3JlJyxcbiAgICAgICAgICAgICAgICAgIC8vIG9uIGZvY3VzZWRcbiAgICAgICAgICAgICAgICAgICcmOm5vdCh7dGh1bWJOb3RWaXNpYmxlfSkge3RodW1iQ29udGVudH17dGh1bWJDb250ZW50Rm9jdXNlZH06OmJlZm9yZSdcbiAgICAgICAgICAgICAgICBdLmpvaW4oKVxuICAgICAgICAgICAgICBdOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgke29yaWVudGF0aW9uWzFdfWRlZywgJHtjb2xvcn0gMCUsIHJnYmEoMCwgMCwgMCwgMCkgNTAlLCAke2NvbG9yfSAxMDAlKTtgXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgfSwgeyB9IGFzIFN0eWxlQ29udGFpbmVyKVxuICAgICAgICB9KSxcbiAgICAgICAgZGlzYWJsZWQ6ICh0aGVtZSwgY29sb3IpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2xvckRpc2FibGVkID0gY2hyb21hKGNvbG9yKS5kYXJrZW4oMilcbiAgICAgICAgICAuZGVzYXR1cmF0ZSgyLjUpO1xuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgJyYge3RyYWNrfSwgJiB7dGh1bWJ9LCAmIHt0aHVtYkxhYmVsfSwgJiB7Ymd9LCAmIHt0aWNrfSc6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvckRpc2FibGVkLmx1bWluYW5jZSguNCkuY3NzKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAne3RpY2tBY3RpdmV9Jzoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yRGlzYWJsZWQubHVtaW5hbmNlKC42KS5jc3MoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmJzogW1snaG9yaXpvbnRhbCcsIDBdLCBbJ3ZlcnRpY2FsJywgOTBdXS5yZWR1Y2UoKHByZXYsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIHByZXZbYCZ7JHtvcmllbnRhdGlvblswXX19YF0gPSB7XG4gICAgICAgICAgICAgICAgJyYge3RodW1iQ29udGVudH06OmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoJHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb25bMV1cbiAgICAgICAgICAgICAgICAgIH1kZWcsICR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGlzYWJsZWQubHVtaW5hbmNlKC40KS5jc3MoKVxuICAgICAgICAgICAgICAgICAgfSAwJSwgcmdiYSgwLCAwLCAwLCAwKSA1MCUsICR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGlzYWJsZWQubHVtaW5hbmNlKC40KS5jc3MoKVxuICAgICAgICAgICAgICAgICAgfSAxMDAlKTtgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7IH0gYXMgU3R5bGVDb250YWluZXIpLFxuICAgICAgICAgICAgJ3tiZ30nOiB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IC4zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyZ7aG9yaXpvbnRhbH0ge3RodW1iQ29udGFpbmVyfTo6YmVmb3JlJzoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5kaXNhYmxlZC5kZWZhdWx0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyZ7dmVydGljYWx9IHt0aHVtYkNvbnRhaW5lcn06OmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuZGlzYWJsZWQuZGVmYXVsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBvZ3JhcGh5Lmx5VHlwID0ge1xuICAgICAgZGlzcGxheTQ6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg5NiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKC0xLjUpXG4gICAgICB9LFxuICAgICAgZGlzcGxheTM6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg2MCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKC0wLjUpXG4gICAgICB9LFxuICAgICAgZGlzcGxheTI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg0OCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgICAgfSxcbiAgICAgIGRpc3BsYXkxOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMzQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjI1KVxuICAgICAgfSxcbiAgICAgIGhlYWRsaW5lOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMjQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDIwKSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xNSlcbiAgICAgIH0sXG4gICAgICBzdWJoZWFkaW5nOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KSxcbiAgICAgICAgbGluZUhlaWdodDogMjRcbiAgICAgIH0sXG4gICAgICBzdWJoZWFkaW5nMjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xKVxuICAgICAgfSxcbiAgICAgIGJvZHkyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KVxuICAgICAgfSxcbiAgICAgIGJvZHkxOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjI1KVxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9LFxuICAgICAgY2FwdGlvbjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEyKSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgICAgIH0sXG4gICAgICBvdmVybGluZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEwKSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMS41KSxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=