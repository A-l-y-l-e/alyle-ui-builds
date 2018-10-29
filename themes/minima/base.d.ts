import { LyStyleUtils, TypographyConfig, // Do not delete this, this is necessary to generate the types correctly
IRippleVariables } from '@alyle/ui';
export declare class MinimaBase extends LyStyleUtils {
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
    ripple: IRippleVariables;
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
    badge: {
        position: {};
    };
}
