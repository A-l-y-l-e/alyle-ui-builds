import { ThemeVariables } from '@alyle/ui';
export declare const styles: (theme: ThemeVariables) => {
    root: {
        '&::after': {
            width: string;
            height: string;
            background: string;
            opacity: number;
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
        fontSize?: number;
        fontFamily: string;
        fontWeight: number;
        letterSpacing?: number;
        textTransform?: string;
        gutterTop?: number;
        gutterBottom?: number;
        color: string;
        '-webkit-tap-highlight-color': string;
        backgroundColor: string;
        border: number;
        padding: string;
        '-moz-appearance': string;
        margin: number;
        borderRadius: string;
        outline: string;
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
        '&::-moz-focus-inner, &::-moz-focus-inner': {
            border: number;
        };
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
    onFocusByKeyboard: {};
    animations: {
        '&,&::after': {
            transition: string;
        };
    };
};
