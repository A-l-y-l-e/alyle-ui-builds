import { ThemeConfig, LyStyleUtils, TypographyConfig } from '@alyle/ui';
export declare class MinimaLight extends LyStyleUtils implements ThemeConfig {
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
    divider: string;
    colorShadow: string;
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
    input: {
        label: string;
        underline: string;
        /** default color */
        withColor: string;
    };
    iconButton: {
        size: string;
    };
    icon: {
        fontSize: string;
    };
}
