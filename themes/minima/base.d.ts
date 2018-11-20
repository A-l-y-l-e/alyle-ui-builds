import { LyStyleUtils, Dir } from '@alyle/ui';
export declare class MinimaBase extends LyStyleUtils {
    typography: {
        fontFamily: string;
        htmlFontSize: number;
        fontSize: number;
        gutterTop: number;
        gutterBottom: number;
        lyTyp: {
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
        size: {
            small: {
                fontSize: string;
            };
            medium: {
                fontSize: string;
            };
            large: {
                fontSize: string;
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
}
