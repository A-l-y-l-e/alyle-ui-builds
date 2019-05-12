import { ThemeVariables } from '@alyle/ui';
export declare const STYLES: (theme: ThemeVariables) => {
    root: {
        fontFamily: string;
        color: string;
        '-webkit-tap-highlight-color': string;
        backgroundColor: string;
        border: number;
        padding: string;
        '-moz-appearance': string;
        margin: number;
        borderRadius: string;
        outline: string;
        fontWeight: number;
        boxSizing: string;
        position: string;
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        display: string;
        cursor: string;
        '-webkit-user-select': string;
        '-moz-user-select': string;
        '-ms-user-select': string;
        userSelect: string;
        textDecorationLine: string;
        '-webkit-text-decoration-line': string;
        fontSize: string;
        '&::-moz-focus-inner': {
            border: number;
        };
        '&::after': {
            width: string;
            height: string;
            background: string;
            opacity: number;
            pointerEvents: string;
            position: string;
            top: number;
            bottom: number;
            left: number;
            right: number;
            content: string;
        };
        '&{onFocusByKeyboard}::after, &:hover::after': {
            background: string;
            opacity: number;
            borderRadius: string;
        };
        '&': import("@alyle/ui/alyle-ui").StyleContainer;
    };
    content: {
        padding: number;
        display: string;
        justifyContent: string;
        alignItems: string;
        alignContent: string;
        width: string;
        height: string;
        boxSizing: string;
    };
    onFocusByKeyboard: any;
    animations: {
        [x: string]: {
            transition: string;
        };
    };
};
