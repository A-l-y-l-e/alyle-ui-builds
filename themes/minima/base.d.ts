import { LyStyleUtils, Dir } from '@alyle/ui';
import { SliderVariables } from '@alyle/ui/slider';
export declare class MinimaBase extends LyStyleUtils {
    typography: {
        fontFamily: string;
        htmlFontSize: number;
        fontSize: number;
        gutterTop: number;
        gutterBottom: number;
        lyTyp: {};
    };
    iconButton: {
        size: string;
    };
    icon: {
        fontSize: string;
    };
    breakpoints: {
        XSmall: string;
        Small: string;
        Medium: string;
        Large: string;
        XLarge: string;
        Handset: string;
        Tablet: string;
        Web: string;
        HandsetPortrait: string;
        TabletPortrait: string;
        WebPortrait: string;
        HandsetLandscape: string;
        TabletLandscape: string;
        WebLandscape: string;
    };
    zIndex: {
        toolbar: number;
        drawer: number;
        overlay: number;
    };
    ripple: {
        transition: {
            opacity: string;
            transform: string;
        };
        duration: number;
    };
    animations: {
        curves: {
            standard: string;
            deceleration: string;
            acceleration: string;
            sharp: string;
        };
        durations: {
            complex: number;
            entering: number;
            exiting: number;
        };
    };
    direction: Dir;
    button: {
        defaultConfig: {
            size: "medium";
        };
        size: {
            small: {
                padding: string;
                fontSize: string;
                minHeight: string;
                minWidth: string;
            };
            medium: {
                padding: string;
                minHeight: string;
                minWidth: string;
            };
            large: {
                padding: string;
                fontSize: string;
                minHeight: string;
                minWidth: string;
            };
        };
        appearance: {
            icon: {
                minWidth: string;
                width: string;
                height: string;
                padding: number;
                borderRadius: string;
            };
            fab: {
                minWidth: string;
                width: string;
                height: string;
                padding: number;
                borderRadius: string;
            };
            miniFab: {
                minWidth: string;
                width: string;
                height: string;
                padding: number;
                borderRadius: string;
            };
        };
    };
    expansion: {
        root: {
            '& {panelHeader}': {
                height: string;
            };
            '& {expanded} {panelHeader}': {
                height: string;
            };
        };
        appearance: {
            popOut: {
                '& {panel}': {
                    transition: string;
                };
                '& {expanded}{panel}': {
                    margin: string;
                    '&:first-child': {
                        marginTop: number;
                    };
                    '&:last-child': {
                        marginBottom: number;
                    };
                };
            };
        };
    };
    field: {
        appearance: {
            outlined: {
                '&:not({focused}):not({disabled}):hover {fieldset}': {
                    borderColor: string;
                };
                '&{focused} {fieldset}': {
                    borderWidth: string;
                    borderColor: string;
                };
                '& textarea{inputNative}': {
                    margin: string;
                };
                '& {inputNative}:not(textarea)': {
                    padding: string;
                };
                '& {container}': {
                    padding: string;
                };
                '& {fieldset}': {
                    borderWidth: string;
                    borderRadius: string;
                    padding: string;
                };
                '& {prefix}': {
                    '&:after': {
                        padding: string;
                    };
                };
                '& suffix': {
                    '&:after': {
                        padding: string;
                    };
                };
                '& {label}': {
                    margin: string;
                };
                '& {placeholder}': {
                    margin: string;
                };
                '& {floatingLabel}{label}': {
                    transform: string;
                };
                '& {hintContainer}': {
                    padding: string;
                };
            };
            filled: {
                '&:not({focused}):not({disabled}) {container}:hover:after': {
                    borderBottomWidth: string;
                };
                'textarea{inputNative}': {
                    margin: string;
                };
                '{inputNative}:not(textarea)': {
                    padding: string;
                };
                '& {container}': {
                    borderRadius: string;
                    padding: string;
                    '&:after': {
                        borderBottomStyle: string;
                        borderBottomColor: string;
                        borderBottomWidth: string;
                    };
                };
                '&{focused} {container}': {
                    '&:after': {
                        borderBottomWidth: string;
                    };
                };
                '& {placeholder}': {
                    margin: string;
                };
                '& {label}': {
                    margin: string;
                };
                '& {floatingLabel}{label}': {
                    transform: string;
                };
                '& {hintContainer}': {
                    padding: string;
                };
            };
        };
    };
    toolbar: {
        appearance: {
            dense: {
                height: string;
            };
        };
    };
    slider: SliderVariables;
    constructor();
}
