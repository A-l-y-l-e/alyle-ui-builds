import * as tslib_1 from "tslib";
import { LyStyleUtils, Dir } from '@alyle/ui';
import { iconButton, icon, zIndex, animations, RippleVariables } from './variables';
import { Breakpoints } from '@alyle/ui/responsive';
import * as _chroma from 'chroma-js';
var chroma = _chroma;
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
        _this.slider = {
            defaultConfig: {
                appearance: 'standard'
            },
            appearance: {
                standard: {
                    appearance: function (_theme) { return ({}); },
                    color: function (_theme, color) { return ({
                        '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                            backgroundColor: color
                        },
                        '&:not({disabled}) {thumbContentFocused} {thumb}::before, &:not({disabled}) {thumb}:hover::before': {
                            boxShadow: "0 0 0 8px " + chroma(color).alpha(.13).css()
                        },
                        '&{sliding} {thumbContentFocused} {thumb}::before': {
                            boxShadow: "0 0 0 16px " + chroma(color).alpha(.13).css()
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
                        '&:not({disabled})': [['horizontal', 0], ['vertical', 90]].reduce(function (prev, orientation) {
                            var _a;
                            prev["&{" + orientation[0] + "}"] = (_a = {},
                                _a[[
                                    // always show visible thumb, when {thumbVisible} is available
                                    '&{thumbVisible} {thumbContent}::before',
                                    // on hover
                                    '&:not({thumbNotVisible}) {thumbContent}:hover::before',
                                    // on focused
                                    '&:not({thumbNotVisible}) {thumbContent}{thumbContentFocused}::before'
                                ].join()] = {
                                    background: "linear-gradient(" + orientation[1] + "deg, " + color + " 0%, rgba(0, 0, 0, 0) 50%, " + color + " 100%);"
                                },
                                _a);
                            return prev;
                        }, {})
                    }); },
                    disabled: function (theme, color) {
                        var colorDisabled = chroma(color).darken(2)
                            .desaturate(2.5);
                        return ({
                            '& {track}, & {thumb}, & {thumbLabel}, & {bg}, & {tick}': {
                                backgroundColor: colorDisabled.luminance(.4).css()
                            },
                            '{tickActive}': {
                                backgroundColor: colorDisabled.luminance(.6).css()
                            },
                            '&': [['horizontal', 0], ['vertical', 90]].reduce(function (prev, orientation) {
                                prev["&{" + orientation[0] + "}"] = {
                                    '& {thumbContent}::before': {
                                        background: "linear-gradient(" + orientation[1] + "deg, " + colorDisabled.luminance(.4).css() + " 0%, rgba(0, 0, 0, 0) 50%, " + colorDisabled.luminance(.4).css() + " 100%);"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90aGVtZXMvbWluaW1hLyIsInNvdXJjZXMiOlsiYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixHQUFHLEVBRUosTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBRXJDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2QjtJQUFnQyxzQ0FBWTtJQStRMUM7UUFBQSxZQUNFLGlCQUFPLFNBcUVSO1FBcFZELGdCQUFVLEdBQUc7WUFDWCxVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixZQUFZLEVBQUUsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDRixnQkFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osaUJBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsWUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixZQUFNLEdBQUcsZUFBZSxDQUFDO1FBQ3pCLGdCQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGVBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3BCLFlBQU0sR0FBRztZQUNQLGFBQWEsRUFBRTtnQkFDYixJQUFJLEVBQUUsUUFBb0I7YUFDM0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixDQUFDO2dCQUNGLE1BQU0sRUFBRSxDQUFDO29CQUNQLE9BQU8sRUFBRSxRQUFRO29CQUNqQixTQUFTLEVBQUUsTUFBTTtvQkFDakIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7b0JBQ04sT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixDQUFDO2FBQ0g7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxNQUFNO29CQUNoQixLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILFFBQVEsRUFBRSxNQUFNO29CQUNoQixLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsS0FBSztpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFFBQVEsRUFBRSxNQUFNO29CQUNoQixLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsQ0FBQztvQkFDVixZQUFZLEVBQUUsS0FBSztpQkFDcEI7YUFDRjtTQUNGLENBQUM7UUFDRixlQUFTLEdBQUc7WUFDVixJQUFJLEVBQUU7Z0JBQ0osaUJBQWlCLEVBQUU7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2lCQUNmO2dCQUNELDRCQUE0QixFQUFFO29CQUM1QixNQUFNLEVBQUUsTUFBTTtpQkFDZjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUU7d0JBQ1gsVUFBVSxFQUFFLFlBQVUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxXQUFNLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVU7cUJBQ2hHO29CQUNELHFCQUFxQixFQUFFO3dCQUNyQixNQUFNLEVBQUUsUUFBUTt3QkFDaEIsZUFBZSxFQUFFOzRCQUNmLFNBQVMsRUFBRSxDQUFDO3lCQUNiO3dCQUNELGNBQWMsRUFBRTs0QkFDZCxZQUFZLEVBQUUsQ0FBQzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7UUFFRixXQUFLLEdBQUc7WUFDTixVQUFVLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFO29CQUNSLG1EQUFtRCxFQUFFO3dCQUNuRCxXQUFXLEVBQUUsY0FBYztxQkFDNUI7b0JBQ0QsdUJBQXVCLEVBQUU7d0JBQ3ZCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixXQUFXLEVBQUUsU0FBUztxQkFDdkI7b0JBQ0QseUJBQXlCLEVBQUU7d0JBQ3pCLE1BQU0sRUFBRSxPQUFPO3FCQUNoQjtvQkFDRCwrQkFBK0IsRUFBRTt3QkFDL0IsT0FBTyxFQUFFLE9BQU87cUJBQ2pCO29CQUNELGVBQWUsRUFBRTt3QkFDZixPQUFPLEVBQUUsVUFBVTtxQkFDcEI7b0JBQ0QsY0FBYyxFQUFFO3dCQUNkLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixZQUFZLEVBQUUsS0FBSzt3QkFDbkIsT0FBTyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELFlBQVksRUFBRTt3QkFDWixTQUFTLEVBQUU7NEJBQ1QsT0FBTyxFQUFFLFFBQVE7eUJBQ2xCO3FCQUNGO29CQUNELFVBQVUsRUFBRTt3QkFDVixTQUFTLEVBQUU7NEJBQ1QsT0FBTyxFQUFFLFFBQVE7eUJBQ2xCO3FCQUNGO29CQUNELFdBQVcsRUFBRTt3QkFDWCxNQUFNLEVBQUUsT0FBTztxQkFDaEI7b0JBQ0QsaUJBQWlCLEVBQUU7d0JBQ2pCLE1BQU0sRUFBRSxPQUFPO3FCQUNoQjtvQkFDRCwwQkFBMEIsRUFBRTt3QkFDMUIsU0FBUyxFQUFFLHFCQUFxQjtxQkFDakM7b0JBQ0QsbUJBQW1CLEVBQUU7d0JBQ25CLE9BQU8sRUFBRSxVQUFVO3FCQUNwQjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sMERBQTBELEVBQUU7d0JBQzFELGlCQUFpQixFQUFFLEtBQUs7cUJBQ3pCO29CQUNELHVCQUF1QixFQUFFO3dCQUN2QixNQUFNLEVBQUUsdUJBQXVCO3FCQUNoQztvQkFDRCw2QkFBNkIsRUFBRTt3QkFDN0IsT0FBTyxFQUFFLHVCQUF1QjtxQkFDakM7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLFlBQVksRUFBRSxhQUFhO3dCQUMzQixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsU0FBUyxFQUFFOzRCQUNULGlCQUFpQixFQUFFLE9BQU87NEJBQzFCLGlCQUFpQixFQUFFLGNBQWM7NEJBQ2pDLGlCQUFpQixFQUFFLEdBQUc7eUJBQ3ZCO3FCQUNGO29CQUNELHdCQUF3QixFQUFFO3dCQUN4QixTQUFTLEVBQUU7NEJBQ1QsaUJBQWlCLEVBQUUsS0FBSzt5QkFDekI7cUJBQ0Y7b0JBQ0QsaUJBQWlCLEVBQUU7d0JBQ2pCLE1BQU0sRUFBRSx1QkFBdUI7cUJBQ2hDO29CQUNELFdBQVcsRUFBRTt3QkFDWCxNQUFNLEVBQUUsT0FBTztxQkFDaEI7b0JBQ0QsMEJBQTBCLEVBQUU7d0JBQzFCLFNBQVMsRUFBRSxvQkFBb0I7cUJBQ2hDO29CQUNELG1CQUFtQixFQUFFO3dCQUNuQixPQUFPLEVBQUUsVUFBVTtxQkFDcEI7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7UUFFRixhQUFPLEdBQUc7WUFDUixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLE1BQU0sRUFBRSxNQUFNO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO1FBRUYsWUFBTSxHQUFvQjtZQUN4QixhQUFhLEVBQUU7Z0JBQ2IsVUFBVSxFQUFFLFVBQVU7YUFDdkI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFO29CQUNSLFVBQVUsRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsRUFFdEIsQ0FBQyxFQUZvQixDQUVwQjtvQkFDRixLQUFLLEVBQUUsVUFBQyxNQUFNLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FBQzt3QkFDekIsd0RBQXdELEVBQUU7NEJBQ3hELGVBQWUsRUFBRSxLQUFLO3lCQUN2Qjt3QkFDRCxrR0FBa0csRUFBRTs0QkFDbEcsU0FBUyxFQUFFLGVBQWEsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUk7eUJBQ3pEO3dCQUNELGtEQUFrRCxFQUFFOzRCQUNsRCxTQUFTLEVBQUUsZ0JBQWMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUk7eUJBQzFEO3dCQUNELGNBQWMsRUFBRTs0QkFDZCxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7eUJBQ3BEO3dCQUNELE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsRUFBRTt5QkFDWjt3QkFFRCwwQkFBMEIsRUFBRTs0QkFDMUIsVUFBVSxFQUFFLEtBQUs7eUJBQ2xCO3dCQUNELG1CQUFtQixFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsV0FBVzs7NEJBQ2xGLElBQUksQ0FBQyxPQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDO2dDQUMxQixHQUNFO29DQUNFLDhEQUE4RDtvQ0FDOUQsd0NBQXdDO29DQUN4QyxXQUFXO29DQUNYLHVEQUF1RDtvQ0FDdkQsYUFBYTtvQ0FDYixzRUFBc0U7aUNBQ3ZFLENBQUMsSUFBSSxFQUFFLElBQ1A7b0NBQ0QsVUFBVSxFQUFFLHFCQUFtQixXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQVEsS0FBSyxtQ0FBOEIsS0FBSyxZQUFTO2lDQUN2RzttQ0FDRixDQUFDOzRCQUNGLE9BQU8sSUFBSSxDQUFDO3dCQUNkLENBQUMsRUFBRSxFQUFxQixDQUFDO3FCQUMxQixDQUFDLEVBckN3QixDQXFDeEI7b0JBQ0YsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUs7d0JBQ3JCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzZCQUM1QyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pCLE9BQU8sQ0FBQzs0QkFDTix3REFBd0QsRUFBRTtnQ0FDeEQsZUFBZSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFOzZCQUNuRDs0QkFDRCxjQUFjLEVBQUU7Z0NBQ2QsZUFBZSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFOzZCQUNuRDs0QkFDRCxHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxXQUFXO2dDQUNsRSxJQUFJLENBQUMsT0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQyxHQUFHO29DQUM3QiwwQkFBMEIsRUFBRTt3Q0FDMUIsVUFBVSxFQUFFLHFCQUNWLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFFZCxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxtQ0FFakMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsWUFDMUI7cUNBQ1Y7aUNBQ0YsQ0FBQztnQ0FDRixPQUFPLElBQUksQ0FBQzs0QkFDZCxDQUFDLEVBQUUsRUFBcUIsQ0FBQzs0QkFDekIsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxFQUFFOzZCQUNaOzRCQUNELHdDQUF3QyxFQUFFO2dDQUN4QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzZCQUNuQzs0QkFDRCxzQ0FBc0MsRUFBRTtnQ0FDdEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTzs2QkFDbkM7eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUM7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7UUFJQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRztZQUN0QixRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNsQztZQUNELFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ2xDO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsYUFBYSxFQUFFLENBQUM7YUFDakI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEM7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsQ0FBQzthQUNqQjtZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDakMsVUFBVSxFQUFFLEVBQUU7YUFDZjtZQUNELFdBQVcsRUFBRTtnQkFDWCxRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUNqQztZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxHQUFHO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDMUIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsYUFBYSxFQUFFLEdBQUc7YUFDbkI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLGFBQWEsRUFBRSxXQUFXO2FBQzNCO1NBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBdFZELENBQWdDLFlBQVksR0FzVjNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTHlTdHlsZVV0aWxzLFxuICBEaXIsXG4gIFN0eWxlQ29udGFpbmVyXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBpY29uQnV0dG9uLCBpY29uLCB6SW5kZXgsIGFuaW1hdGlvbnMsIFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuaW1wb3J0IHsgU2xpZGVyVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpL3NsaWRlcic7XG5pbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5cbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmV4cG9ydCBjbGFzcyBNaW5pbWFCYXNlIGV4dGVuZHMgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeSA9IHtcbiAgICBmb250RmFtaWx5OiBgJ1JvYm90bycsIHNhbnMtc2VyaWZgLFxuICAgIGh0bWxGb250U2l6ZTogMTYsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGd1dHRlclRvcDogMSxcbiAgICBndXR0ZXJCb3R0b206IC4zNSxcbiAgICBseVR5cDoge31cbiAgfTtcbiAgaWNvbkJ1dHRvbiA9IGljb25CdXR0b247XG4gIGljb24gPSBpY29uO1xuICBicmVha3BvaW50cyA9IEJyZWFrcG9pbnRzO1xuICB6SW5kZXggPSB6SW5kZXg7XG4gIHJpcHBsZSA9IFJpcHBsZVZhcmlhYmxlcztcbiAgYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnM7XG4gIGRpcmVjdGlvbiA9IERpci5sdHI7XG4gIGJ1dHRvbiA9IHtcbiAgICBkZWZhdWx0Q29uZmlnOiB7XG4gICAgICBzaXplOiAnbWVkaXVtJyBhcyAnbWVkaXVtJ1xuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgc21hbGw6ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTMpLFxuICAgICAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc0OHB4J1xuICAgICAgfSksXG4gICAgICBtZWRpdW06ICh7XG4gICAgICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgICAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc2NHB4J1xuICAgICAgfSksXG4gICAgICBsYXJnZTogKHtcbiAgICAgICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTUpLFxuICAgICAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgbWluV2lkdGg6ICc5NnB4J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGljb246IHtcbiAgICAgICAgbWluV2lkdGg6ICc0MHB4JyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBmYWI6IHtcbiAgICAgICAgbWluV2lkdGg6ICc1NnB4JyxcbiAgICAgICAgd2lkdGg6ICc1NnB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNTZweCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH0sXG4gICAgICBtaW5pRmFiOiB7XG4gICAgICAgIG1pbldpZHRoOiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnNDBweCcsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBleHBhbnNpb24gPSB7XG4gICAgcm9vdDoge1xuICAgICAgJyYge3BhbmVsSGVhZGVyfSc6IHtcbiAgICAgICAgaGVpZ2h0OiAnNDhweCdcbiAgICAgIH0sXG4gICAgICAnJiB7ZXhwYW5kZWR9IHtwYW5lbEhlYWRlcn0nOiB7XG4gICAgICAgIGhlaWdodDogJzY0cHgnXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgcG9wT3V0OiB7XG4gICAgICAgICcmIHtwYW5lbH0nOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYG1hcmdpbiAke3RoaXMuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGlzLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfWBcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2V4cGFuZGVkfXtwYW5lbH0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMTZweCAwJyxcbiAgICAgICAgICAnJjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmaWVsZCA9IHtcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBvdXRsaW5lZDoge1xuICAgICAgICAnJjpub3Qoe2ZvY3VzZWR9KTpub3Qoe2Rpc2FibGVkfSk6aG92ZXIge2ZpZWxkc2V0fSc6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgICAgfSxcbiAgICAgICAgJyZ7Zm9jdXNlZH0ge2ZpZWxkc2V0fSc6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzJweCcsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdpbmhlcml0J1xuICAgICAgICB9LFxuICAgICAgICAnJiB0ZXh0YXJlYXtpbnB1dE5hdGl2ZX0nOiB7XG4gICAgICAgICAgbWFyZ2luOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtpbnB1dE5hdGl2ZX06bm90KHRleHRhcmVhKSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMWVtIDAnXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2ZpZWxkc2V0fSc6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzFweCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAuNWVtJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7cHJlZml4fSc6IHtcbiAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjI1ZW0nXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiBzdWZmaXgnOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC4yNWVtJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge3BsYWNlaG9sZGVyfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2Zsb2F0aW5nTGFiZWx9e2xhYmVsfSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjc1ZW0pJ1xuICAgICAgICB9LFxuICAgICAgICAnJiB7aGludENvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAgMC43NWVtJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmlsbGVkOiB7XG4gICAgICAgICcmOm5vdCh7Zm9jdXNlZH0pOm5vdCh7ZGlzYWJsZWR9KSB7Y29udGFpbmVyfTpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgICAgfSxcbiAgICAgICAgJ3RleHRhcmVhe2lucHV0TmF0aXZlfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxLjU5Mzc1ZW0gMCAwLjQwNjI1ZW0nXG4gICAgICAgIH0sXG4gICAgICAgICd7aW5wdXROYXRpdmV9Om5vdCh0ZXh0YXJlYSknOiB7XG4gICAgICAgICAgcGFkZGluZzogJzEuNTkzNzVlbSAwIDAuNDA2MjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2NvbnRhaW5lcn0nOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDAuNzVlbScsXG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcme2ZvY3VzZWR9IHtjb250YWluZXJ9Jzoge1xuICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg6ICcycHgnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiB7cGxhY2Vob2xkZXJ9Jzoge1xuICAgICAgICAgIG1hcmdpbjogJzEuNTkzNzVlbSAwIDAuNDA2MjVlbSdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgICBtYXJnaW46ICcxZW0gMCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYge2Zsb2F0aW5nTGFiZWx9e2xhYmVsfSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0uNzVlbSknXG4gICAgICAgIH0sXG4gICAgICAgICcmIHtoaW50Q29udGFpbmVyfSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAwLjc1ZW0nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdG9vbGJhciA9IHtcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBkZW5zZToge1xuICAgICAgICBoZWlnaHQ6ICc1NnB4J1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzbGlkZXI6IFNsaWRlclZhcmlhYmxlcyA9IHtcbiAgICBkZWZhdWx0Q29uZmlnOiB7XG4gICAgICBhcHBlYXJhbmNlOiAnc3RhbmRhcmQnXG4gICAgfSxcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBzdGFuZGFyZDoge1xuICAgICAgICBhcHBlYXJhbmNlOiBfdGhlbWUgPT4gKHtcblxuICAgICAgICB9KSxcbiAgICAgICAgY29sb3I6IChfdGhlbWUsIGNvbG9yKSA9PiAoe1xuICAgICAgICAgICcmIHt0cmFja30sICYge3RodW1ifSwgJiB7dGh1bWJMYWJlbH0sICYge2JnfSwgJiB7dGlja30nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpub3Qoe2Rpc2FibGVkfSkge3RodW1iQ29udGVudEZvY3VzZWR9IHt0aHVtYn06OmJlZm9yZSwgJjpub3Qoe2Rpc2FibGVkfSkge3RodW1ifTpob3Zlcjo6YmVmb3JlJzoge1xuICAgICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgOHB4ICR7Y2hyb21hKGNvbG9yKS5hbHBoYSguMTMpLmNzcygpfWBcbiAgICAgICAgICB9LFxuICAgICAgICAgICcme3NsaWRpbmd9IHt0aHVtYkNvbnRlbnRGb2N1c2VkfSB7dGh1bWJ9OjpiZWZvcmUnOiB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxNnB4ICR7Y2hyb21hKGNvbG9yKS5hbHBoYSguMTMpLmNzcygpfWBcbiAgICAgICAgICB9LFxuICAgICAgICAgICd7dGlja0FjdGl2ZX0nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNocm9tYShjb2xvcikubHVtaW5hbmNlKDAuNikuY3NzKClcbiAgICAgICAgICB9LFxuICAgICAgICAgICd7Ymd9Jzoge1xuICAgICAgICAgICAgb3BhY2l0eTogLjNcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgJyYge3RodW1iQ29udGVudH06OmJlZm9yZSc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpub3Qoe2Rpc2FibGVkfSknOiBbWydob3Jpem9udGFsJywgMF0sIFsndmVydGljYWwnLCA5MF1dLnJlZHVjZSgocHJldiwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgICAgIHByZXZbYCZ7JHtvcmllbnRhdGlvblswXX19YF0gPSB7XG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAvLyBhbHdheXMgc2hvdyB2aXNpYmxlIHRodW1iLCB3aGVuIHt0aHVtYlZpc2libGV9IGlzIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgJyZ7dGh1bWJWaXNpYmxlfSB7dGh1bWJDb250ZW50fTo6YmVmb3JlJyxcbiAgICAgICAgICAgICAgICAgIC8vIG9uIGhvdmVyXG4gICAgICAgICAgICAgICAgICAnJjpub3Qoe3RodW1iTm90VmlzaWJsZX0pIHt0aHVtYkNvbnRlbnR9OmhvdmVyOjpiZWZvcmUnLFxuICAgICAgICAgICAgICAgICAgLy8gb24gZm9jdXNlZFxuICAgICAgICAgICAgICAgICAgJyY6bm90KHt0aHVtYk5vdFZpc2libGV9KSB7dGh1bWJDb250ZW50fXt0aHVtYkNvbnRlbnRGb2N1c2VkfTo6YmVmb3JlJ1xuICAgICAgICAgICAgICAgIF0uam9pbigpXG4gICAgICAgICAgICAgIF06IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KCR7b3JpZW50YXRpb25bMV19ZGVnLCAke2NvbG9yfSAwJSwgcmdiYSgwLCAwLCAwLCAwKSA1MCUsICR7Y29sb3J9IDEwMCUpO2BcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICB9LCB7IH0gYXMgU3R5bGVDb250YWluZXIpXG4gICAgICAgIH0pLFxuICAgICAgICBkaXNhYmxlZDogKHRoZW1lLCBjb2xvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbG9yRGlzYWJsZWQgPSBjaHJvbWEoY29sb3IpLmRhcmtlbigyKVxuICAgICAgICAgIC5kZXNhdHVyYXRlKDIuNSk7XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAnJiB7dHJhY2t9LCAmIHt0aHVtYn0sICYge3RodW1iTGFiZWx9LCAmIHtiZ30sICYge3RpY2t9Jzoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yRGlzYWJsZWQubHVtaW5hbmNlKC40KS5jc3MoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd7dGlja0FjdGl2ZX0nOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JEaXNhYmxlZC5sdW1pbmFuY2UoLjYpLmNzcygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyYnOiBbWydob3Jpem9udGFsJywgMF0sIFsndmVydGljYWwnLCA5MF1dLnJlZHVjZSgocHJldiwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgcHJldltgJnske29yaWVudGF0aW9uWzBdfX1gXSA9IHtcbiAgICAgICAgICAgICAgICAnJiB7dGh1bWJDb250ZW50fTo6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgke1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvblsxXVxuICAgICAgICAgICAgICAgICAgfWRlZywgJHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEaXNhYmxlZC5sdW1pbmFuY2UoLjQpLmNzcygpXG4gICAgICAgICAgICAgICAgICB9IDAlLCByZ2JhKDAsIDAsIDAsIDApIDUwJSwgJHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEaXNhYmxlZC5sdW1pbmFuY2UoLjQpLmNzcygpXG4gICAgICAgICAgICAgICAgICB9IDEwMCUpO2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgIH0sIHsgfSBhcyBTdHlsZUNvbnRhaW5lciksXG4gICAgICAgICAgICAne2JnfSc6IHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogLjNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJntob3Jpem9udGFsfSB7dGh1bWJDb250YWluZXJ9OjpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmRpc2FibGVkLmRlZmF1bHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJnt2ZXJ0aWNhbH0ge3RodW1iQ29udGFpbmVyfTo6YmVmb3JlJzoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5kaXNhYmxlZC5kZWZhdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cG9ncmFwaHkubHlUeXAgPSB7XG4gICAgICBkaXNwbGF5NDoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDk2KSxcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oLTEuNSlcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5Mzoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDYwKSxcbiAgICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiB0aGlzLnB4VG9SZW0oLTAuNSlcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5Mjoge1xuICAgICAgICBmb250U2l6ZTogdGhpcy5weFRvUmVtKDQ4KSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAwXG4gICAgICB9LFxuICAgICAgZGlzcGxheTE6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgzNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMjUpXG4gICAgICB9LFxuICAgICAgaGVhZGxpbmU6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgyNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMjApLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjE1KVxuICAgICAgfSxcbiAgICAgIHN1YmhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpLFxuICAgICAgICBsaW5lSGVpZ2h0OiAyNFxuICAgICAgfSxcbiAgICAgIHN1YmhlYWRpbmcyOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgwLjEpXG4gICAgICB9LFxuICAgICAgYm9keTI6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNiksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMTUpXG4gICAgICB9LFxuICAgICAgYm9keTE6IHtcbiAgICAgICAgZm9udFNpemU6IHRoaXMucHhUb1JlbSgxNCksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogdGhpcy5weFRvUmVtKDAuMjUpXG4gICAgICB9LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTQpLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICAgIH0sXG4gICAgICBjYXB0aW9uOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTIpLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAuNFxuICAgICAgfSxcbiAgICAgIG92ZXJsaW5lOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGlzLnB4VG9SZW0oMTApLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IHRoaXMucHhUb1JlbSgxLjUpLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==