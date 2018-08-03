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
        gutterTop: number;
        gutterBottom: number;
        display4: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        display3: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        display2: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        display1: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        headline: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        title: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        subheading: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        subheading2: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        body2: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        body1: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        button: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        caption: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
        overline: import("../../../../../dist/@alyle/ui/src/style-utils").TypographyConfig;
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
