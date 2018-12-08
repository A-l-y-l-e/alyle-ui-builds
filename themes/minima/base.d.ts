import { LyStyleUtils, Dir } from '@alyle/ui';
export declare class MinimaBase extends LyStyleUtils {
    typography: {
        fontFamily: string;
        htmlFontSize: number;
        fontSize: number;
        gutterTop: number;
        gutterBottom: number;
        lyTyp: any;
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
    constructor();
}
