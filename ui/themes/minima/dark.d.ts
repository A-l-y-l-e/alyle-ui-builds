import { ThemeConfig, LyStyleUtils } from '@alyle/ui';
export declare class MinimaDark extends LyStyleUtils implements ThemeConfig {
    name: string;
    primary: {
        default: string;
        contrast: string;
    };
    accent: {
        default: string;
        contrast: string;
    };
    warn: {
        default: string;
        contrast: string;
    };
    typography: {
        fontFamily: string;
        htmlFontSize: number;
        fontSize: number;
        typographyVariants: {
            display4: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            display3: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            display2: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            display1: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            headline: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            title: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            subheading: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
                lineHeight: number;
            };
            subheading2: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            body2: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            body1: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            button: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
                textTransform: string;
            };
            caption: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
            };
            overline: {
                fontSize: number;
                fontWeight: number;
                letterSpacing: number;
                textTransform: string;
            };
        };
    };
    background: {
        default: string;
        primary: string;
        secondary: string;
        tertiary: string;
        base: string;
    };
    text: {
        default: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    /** Components variables */
    button: {
        disabled: string;
    };
    radio: {
        radioOuterCircle: string;
    };
    menu: {
        bg: string;
    };
    drawer: {
        backdrop: string;
    };
    bar: string;
    divider: string;
    colorShadow: string;
    input: {
        label: string;
        underline: string;
        withColor: string;
    };
    iconButton: {
        size: string;
    };
    icon: {
        fontSize: string;
    };
}
