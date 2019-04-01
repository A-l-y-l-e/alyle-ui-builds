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
    /** @type {?} */
    MinimaBase.prototype.toolbar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixHQUFHLEVBQ0osTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQXlMMUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXpMVixlQUFVLEdBQUc7WUFDWCxVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDRixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFlLENBQUM7UUFDekIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQUc7WUFDUCxhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLG1CQUFBLFFBQVEsRUFBWTthQUMzQjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUMxQixTQUFTLEVBQUUsTUFBTTtvQkFDakIs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cm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgaWNvbkJ1dHRvbiwgaWNvbiwgekluZGV4LCBhbmltYXRpb25zLCBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBCcmVha3BvaW50cyB9IGZyb20gJ0BhbHlsZS91aS9yZXNwb25zaXZlJztcblxuZXhwb3J0IGNsYXNzIE1pbmltYUJhc2UgZXh0ZW5kcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5ID0ge1xuICAgIGZvbnRGYW1pbHk6IGAnUm9ib3RvJywgc2Fucy1zZXJpZmAsXG4gICAgaHRtbEZvbnRTaXplOiAxNixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZ3V0dGVyVG9wOiAxLFxuICAgIGd1dHRlckJvdHRvbTogLjM1LFxuICAgIGx5VHlwOiB7fVxuICB9O1xuICBpY29uQnV0dG9uID0gaWNvbkJ1dHRvbjtcbiAgaWNvbiA9IGljb247XG4gIGJyZWFrcG9pbnRzID0gQnJlYWtwb2ludHM7XG4gIHpJbmRleCA9IHpJbmRleDtcbiAgcmlwcGxlID0gUmlwcGxlVmFyaWFibGVzO1xuICBhbmltYXRpb25zID0gYW5pbWF0aW9ucztcbiAgZGlyZWN0aW9uID0gRGlyLmx0cjtcbiAgYnV0dG9uID0ge1xuICAgIGRlZmF1bHRDb25maWc6IHtcbiAgICAgIHNpemU6ICdtZWRpdW0nIGFzICdtZWRpdW0nXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICBzbWFsbDogKHtcbiAgICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxMyksXG4gICAgICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgICAgICBtaW5XaWR0aDogJzQ4cHgnXG4gICAgICB9KSxcbiAgICAgIG1lZGl1bTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgICAgICBtaW5XaWR0aDogJzY0cHgnXG4gICAgICB9KSxcbiAgICAgIGxhcmdlOiAoe1xuICAgICAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNSksXG4gICAgICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgICAgICBtaW5XaWR0aDogJzk2cHgnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgaWNvbjoge1xuICAgICAgICBtaW5XaWR0aDogJzQwcHgnLFxuICAgICAgICB3aWR0aDogJzQwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIGZhYjoge1xuICAgICAgICBtaW5XaWR0aDogJzU2cHgnLFxuICAgICAgICB3aWR0aDogJzU2cHgnLFxuICAgICAgICBoZWlnaHQ6ICc1NnB4JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgICAgfSxcbiAgICAgIG1pbmlGYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICc0MHB4JyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGV4cGFuc2lvbiA9IHtcbiAgICByb290OiB7XG4gICAgICAnJiB7cGFuZWxIZWFkZXJ9Jzoge1xuICAgICAgICBoZWlnaHQ6ICc0OHB4J1xuICAgICAgfSxcbiAgICAgICcmIHtleHBhbmRlZH0ge3BhbmVsSGVhZGVyfSc6IHtcbiAgICAgICAgaGVpZ2h0OiAnNjRweCdcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBwb3BPdXQ6IHtcbiAgICAgICAgJyYge3BhbmVsfSc6IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgbWFyZ2luICR7dGhpcy5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoaXMuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9YFxuICAgICAgICB9LFxuICAgICAgICAnJiB7ZXhwYW5kZWR9e3BhbmVsfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxNnB4IDAnLFxuICAgICAgICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZpZWxkID0ge1xuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIG91dGxpbmVkOiB7XG4gICAgICAgICcmOm5vdCh7Zm9jdXNlZH0pOm5vdCh7ZGlzYWJsZWR9KTpob3ZlciB7ZmllbGRzZXR9Jzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgICAgICB9LFxuICAgICAgICAnJntmb2N1c2VkfSB7ZmllbGRzZXR9Jzoge1xuICAgICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2luaGVyaXQnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHRleHRhcmVhe2lucHV0TmF0aXZlfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2lucHV0TmF0aXZlfTpub3QodGV4dGFyZWEpJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2NvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7ZmllbGRzZXR9Jzoge1xuICAgICAgICAgIGJvcmRlcldpZHRoOiAnMXB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIC41ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtwcmVmaXh9Jzoge1xuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgcGFkZGluZzogJzAuMjVlbSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmIHN1ZmZpeCc6IHtcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiB7bGFiZWx9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7cGxhY2Vob2xkZXJ9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7ZmxvYXRpbmdMYWJlbH17bGFiZWx9Jzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEuNzVlbSknXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtoaW50Q29udGFpbmVyfSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmaWxsZWQ6IHtcbiAgICAgICAgJyY6bm90KHtmb2N1c2VkfSk6bm90KHtkaXNhYmxlZH0pIHtjb250YWluZXJ9OmhvdmVyOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgICB9LFxuICAgICAgICAndGV4dGFyZWF7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzEuNTkzNzVlbSAwIDAuNDA2MjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJ3tpbnB1dE5hdGl2ZX06bm90KHRleHRhcmVhKSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMS41OTM3NWVtIDAgMC40MDYyNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHggNXB4IDAgMCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJyxcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcwJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyZ7Zm9jdXNlZH0ge2NvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzJweCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmIHtwbGFjZWhvbGRlcn0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMS41OTM3NWVtIDAgMC40MDYyNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7bGFiZWx9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzFlbSAwJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7ZmxvYXRpbmdMYWJlbH17bGFiZWx9Jzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLS43NWVtKSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2hpbnRDb250YWluZXJ9Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0b29sYmFyID0ge1xuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGRlbnNlOiB7XG4gICAgICAgIGhlaWdodDogJzU2cHgnXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBvZ3JhcGh5Lmx5VHlwID0ge1xuICAgICAgZGlzcGxheTQ6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg5NiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKC0xLjUpXG4gICAgICB9LFxuICAgICAgZGlzcGxheTM6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg2MCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKC0wLjUpXG4gICAgICB9LFxuICAgICAgZGlzcGxheTI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSg0OCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgICAgfSxcbiAgICAgIGRpc3BsYXkxOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMzQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjI1KVxuICAgICAgfSxcbiAgICAgIGhlYWRsaW5lOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMjQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDBcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDIwKSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xNSlcbiAgICAgIH0sXG4gICAgICBzdWJoZWFkaW5nOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KSxcbiAgICAgICAgbGluZUhlaWdodDogMjRcbiAgICAgIH0sXG4gICAgICBzdWJoZWFkaW5nMjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMC4xKVxuICAgICAgfSxcbiAgICAgIGJvZHkyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTYpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KVxuICAgICAgfSxcbiAgICAgIGJvZHkxOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjI1KVxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDE0KSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9LFxuICAgICAgY2FwdGlvbjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEyKSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwLjRcbiAgICAgIH0sXG4gICAgICBvdmVybGluZToge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDEwKSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oMS41KSxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=