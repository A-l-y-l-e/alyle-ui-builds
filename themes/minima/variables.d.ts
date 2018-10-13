import { TypographyConfig } from '@alyle/ui';
export declare const typography: {
    fontFamily: string;
    htmlFontSize: number;
    fontSize: number;
    gutterTop: number;
    gutterBottom: number;
    display4: TypographyConfig;
    display3: TypographyConfig;
    display2: TypographyConfig;
    display1: TypographyConfig;
    headline: TypographyConfig;
    title: TypographyConfig;
    subheading: TypographyConfig;
    subheading2: TypographyConfig;
    body2: TypographyConfig;
    body1: TypographyConfig;
    button: TypographyConfig;
    caption: TypographyConfig;
    overline: TypographyConfig;
};
export declare const iconButton: {
    size: string;
};
export declare const icon: {
    fontSize: string;
};
export declare const input: {
    /** @deprecated default color */
    withColor: string;
    appearance: {
        standard: {
            container: {
                padding: string;
                '&:after': {
                    borderBottomStyle: string;
                    borderBottomWidth: string;
                };
                '&:hover:after': {
                    borderBottomColor: string;
                };
            };
            containerFocused: {
                '&:after': {
                    borderWidth: string;
                    borderColor: string;
                };
            };
            containerLabelHover: {
                color: string;
            };
            label: {
                margin: string;
            };
            placeholder: {
                margin: string;
            };
            input: {
                margin: string;
            };
            floatingLabel: {
                transform: string;
            };
        };
        outlined: {
            container: {
                padding: string;
            };
            fieldset: {
                borderWidth: string;
                borderRadius: string;
                padding: string;
            };
            fieldsetHover: {
                borderWidth: string;
                borderColor: string;
            };
            fieldsetFocused: {
                borderWidth: string;
            };
            containerLabelFocused: {
                color: string;
                '&:after': {
                    borderWidth: string;
                    borderColor: string;
                };
            };
            prefix: {
                '&:after': {
                    padding: string;
                };
            };
            suffix: {
                '&:after': {
                    padding: string;
                };
            };
            input: {
                margin: string;
            };
            label: {
                margin: string;
            };
            placeholder: {
                margin: string;
            };
            floatingLabel: {
                transform: string;
            };
        };
        filled: {
            container: {
                borderRadius: string;
                padding: string;
                '&:after': {
                    borderBottomStyle: string;
                    borderBottomColor: string;
                    borderBottomWidth: string;
                };
                '&:hover:after': {
                    borderBottomWidth: string;
                };
            };
            containerFocused: {
                '&:after': {
                    borderBottomWidth: string;
                };
            };
            containerLabelFocused: {
                color: string;
                borderWidth: string;
                borderColor: string;
            };
            containerLabelHover: {
                color: string;
            };
            input: {
                margin: string;
            };
            placeholder: {
                margin: string;
            };
            label: {
                margin: string;
            };
            floatingLabel: {
                transform: string;
            };
        };
    };
};
export declare const zIndex: {
    toolbar: number;
    drawer: number;
    overlay: number;
};
export declare const animations: {
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
