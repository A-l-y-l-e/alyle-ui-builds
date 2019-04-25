import * as tslib_1 from "tslib";
import { LyStyleUtils, Dir } from '@alyle/ui';
import { iconButton, icon, zIndex, animations, RippleVariables } from './variables';
import { Breakpoints } from '@alyle/ui/responsive';
var MinimaBase = /** @class */ (function (_super) {
    tslib_1.__extends(MinimaBase, _super);
    function MinimaBase() {
        var _this = _super.call(this) || this;
        _this.typography = {
            fontFamily: "'Roboto', sans-serif",
            htmlFontSize: 16,
            fontSize: 14,
            gutterTop: 1,
            gutterBottom: .35,
            lyTyp: {}
        };
        _this.iconButton = iconButton;
        _this.icon = icon;
        _this.breakpoints = Breakpoints;
        _this.zIndex = zIndex;
        _this.ripple = RippleVariables;
        _this.animations = animations;
        _this.direction = Dir.ltr;
        _this.button = {
            defaultConfig: {
                size: 'medium'
            },
            size: {
                small: ({
                    padding: '0 8px',
                    fontSize: _this.pxToRem(13),
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
                    fontSize: _this.pxToRem(15),
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
        _this.expansion = {
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
                        transition: "margin " + _this.animations.durations.entering + "ms " + _this.animations.curves.standard
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
        _this.field = {
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
        _this.toolbar = {
            appearance: {
                dense: {
                    height: '56px'
                }
            }
        };
        _this.typography.lyTyp = {
            display4: {
                fontSize: _this.pxToRem(96),
                fontWeight: 300,
                letterSpacing: _this.pxToRem(-1.5)
            },
            display3: {
                fontSize: _this.pxToRem(60),
                fontWeight: 300,
                letterSpacing: _this.pxToRem(-0.5)
            },
            display2: {
                fontSize: _this.pxToRem(48),
                fontWeight: 400,
                letterSpacing: 0
            },
            display1: {
                fontSize: _this.pxToRem(34),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.25)
            },
            headline: {
                fontSize: _this.pxToRem(24),
                fontWeight: 400,
                letterSpacing: 0
            },
            title: {
                fontSize: _this.pxToRem(20),
                fontWeight: 500,
                letterSpacing: _this.pxToRem(0.15)
            },
            subheading: {
                fontSize: _this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.15),
                lineHeight: 24
            },
            subheading2: {
                fontSize: _this.pxToRem(14),
                fontWeight: 500,
                letterSpacing: _this.pxToRem(0.1)
            },
            body2: {
                fontSize: _this.pxToRem(16),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.15)
            },
            body1: {
                fontSize: _this.pxToRem(14),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(0.25)
            },
            button: {
                fontSize: _this.pxToRem(14),
                fontWeight: 500
            },
            caption: {
                fontSize: _this.pxToRem(12),
                fontWeight: 400,
                letterSpacing: 0.4
            },
            overline: {
                fontSize: _this.pxToRem(10),
                fontWeight: 400,
                letterSpacing: _this.pxToRem(1.5),
                textTransform: 'uppercase'
            }
        };
        return _this;
    }
    return MinimaBase;
}(LyStyleUtils));
export { MinimaBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixHQUFHLEVBQ0osTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5EO0lBQWdDLHNDQUFZO0lBeUwxQztRQUFBLFlBQ0UsaUJBQU8sU0FxRVI7UUE5UEQsZ0JBQVUsR0FBRztZQUNYLFVBQVUsRUFBRSxzQkFBc0I7WUFDbEMsWUFBWSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLFlBQVksRUFBRSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUNGLGdCQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixpQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixZQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxlQUFlLENBQUM7UUFDekIsZ0JBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsZUFBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDcEIsWUFBTSxHQUFHO1lBQ1AsYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxRQUFvQjthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUMxQixTQUFTLEVBQUUsTUFBTTtvQkFDakIsUUFBUSxFQUFFLE1BQU07aUJBQ2pC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QUNqQztZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsYUFBYSxFQUFFLEdBQUc7YUFDbkI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLGFBQWEsRUFBRSxXQUFXO2FBQzNCO1NBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBaFFELENBQWdDLFlBQVksR0FnUTNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTHlTdHlsZVV0aWxzLFxuICBEaXJcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IGljb25CdXR0b24sIGljb24sIHpJbmRleCwgYW5pbWF0aW9ucywgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHtcbiAgICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICAgIGh0bWxGb250U2l6ZTogMTYsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGd1dHRlclRvcDogMSxcbiAgICBndXR0ZXJCb3R0b206IC4zNSxcbiAgICBseVR5cDoge31cbiAgfTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xuICBicmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xuICB6SW5kZXggPSB6SW5kZXg7XG4gIHJpcHBsZSA9IFJpcHBsZVZhcmlhYmxlcztcbiAgYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gIGRpcmVjdGlvbiA9IERpci5sdHI7XG4gIGJ1dHRvbiA9IHtcbiAgICBkZWZhdWx0Q29uZmlnOiB7XG4gICAgICBzaXplOiAnbWVkaXVtJyBhcyAnbWVkaXVtJ1xuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgc21hbGw6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTMpLFxuICAgICAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc0OHB4J1xuICAgICAgfSksXG4gICAgICBtZWRpdW06ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc2NHB4J1xuICAgICAgfSksXG4gICAgICBsYXJnZTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTUpLFxuICAgICAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc5NnB4J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgbWluV2lkdGg6ICc0MHB4JyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBmYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICc1NnB4JyxcbiAgICAgICAgd2lkdGg6ICc1NnB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNTZweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBtaW5pRmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBleHBhbnNpb24gPSB7XG4gICAgcm9vdDoge1xuICAgICAgJyYge3BhbmVsSGVhZGVyfSc6IHtcbiAgICAgICAgaGVpZ2h0OiAnNDhweCdcbiAgICAgIH0sXG4gICAgICAnJiB7ZXhwYW5kZWR9IHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICAgIGhlaWdodDogJzY0cHgnXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgcG9wT3V0OiB7XG4gICAgICAgICcmIHtwYW5lbH0nOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYG1hcmdpbiAke3RoaXMuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGlzLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWBcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2V4cGFuZGVkfXtwYW5lbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMTZweCAwJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmaWVsZCA9IHtcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBvdXRsaW5lZDoge1xuICAgICAgICAnJjpub3Qoe2ZvY3VzZWR9KTpub3Qoe2Rpc2FibGVkfSk6aG92ZXIge2ZpZWxkc2V0fSc6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfSxcbiAgICAgICAgJyZ7Zm9jdXNlZH0ge2ZpZWxkc2V0fSc6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdpbmhlcml0J1xuICAgICAgICB9LFxuICAgICAgICAnJiB0ZXh0YXJlYXtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtpbnB1dE5hdGl2ZX06bm90KHRleHRhcmVhKSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2ZpZWxkc2V0fSc6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAuNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7cHJlZml4fSc6IHtcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiBzdWZmaXgnOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge3BsYWNlaG9sZGVyfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2Zsb2F0aW5nTGFiZWx9e2xhYmVsfSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjc1ZW0pJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aGludENvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmlsbGVkOiB7XG4gICAgICAgICcmOm5vdCh7Zm9jdXNlZH0pOm5vdCh7ZGlzYWJsZWR9KSB7Y29udGFpbmVyfTpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgICAgfSxcbiAgICAgICAgJ3RleHRhcmVhe2lucHV0TmF0aXZlfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICd7aW5wdXROYXRpdmV9Om5vdCh0ZXh0YXJlYSknOiB7XG4gICAgICAgICAgcGFkZGluZzogJzEuNTkzNzVlbSAwIDAuNDA2MjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2NvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbScsXG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcme2ZvY3VzZWR9IHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiB7cGxhY2Vob2xkZXJ9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzEuNTkzNzVlbSAwIDAuNDA2MjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2Zsb2F0aW5nTGFiZWx9e2xhYmVsfSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0uNzVlbSknXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtoaW50Q29udGFpbmVyfSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdG9vbGJhciA9IHtcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBkZW5zZToge1xuICAgICAgICBoZWlnaHQ6ICc1NnB4J1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwb2dyYXBoeS5seVR5cCA9IHtcbiAgICAgIGRpc3BsYXk0OiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oOTYpLFxuICAgICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgtMS41KVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXkzOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oNjApLFxuICAgICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgtMC41KVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXkyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oNDgpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5MToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDM0KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4yNSlcbiAgICAgIH0sXG4gICAgICBoZWFkbGluZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDI0KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgyMCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpXG4gICAgICB9LFxuICAgICAgc3ViaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE2KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xNSksXG4gICAgICAgIGxpbmVIZWlnaHQ6IDI0XG4gICAgICB9LFxuICAgICAgc3ViaGVhZGluZzI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMSlcbiAgICAgIH0sXG4gICAgICBib2R5Mjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE2KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xNSlcbiAgICAgIH0sXG4gICAgICBib2R5MToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4yNSlcbiAgICAgIH0sXG4gICAgICBidXR0b246IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfSxcbiAgICAgIGNhcHRpb246IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxMiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMC40XG4gICAgICB9LFxuICAgICAgb3ZlcmxpbmU6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxMCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDEuNSksXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19