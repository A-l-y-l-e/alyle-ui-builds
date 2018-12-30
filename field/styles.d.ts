import { ThemeVariables } from '@alyle/ui';
export declare const STYLES: (theme: ThemeVariables) => {
    root: {
        display: string;
        position: string;
        marginTop: string;
        lineHeight: number;
        '& {hint}, & {error}': {
            display: string;
            fontSize: string;
            marginTop: string;
        };
    };
    animations: {
        '& {labelSpan}': {
            transition: string;
        };
        '& {label}': {
            transition: string;
        };
    };
    container: {
        height: string;
        display: string;
        alignItems: string;
        position: string;
        '&:after': {
            content: string;
            pointerEvents: string;
            borderColor: string;
            position: string;
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
    };
    fieldset: {
        margin: number;
        borderStyle: string;
        borderColor: string;
        borderWidth: number;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    fieldsetSpan: {
        padding: number;
        height: string;
    };
    labelSpan: {
        maxWidth: string;
        display: string;
    };
    prefix: {
        maxHeight: string;
        display: string;
        alignItems: string;
    };
    infix: {
        display: string;
        position: string;
        alignItems: string;
        width: string;
    };
    suffix: {
        maxHeight: string;
        display: string;
        alignItems: string;
    };
    labelContainer: {
        pointerEvents: string;
        display: string;
        width: string;
        borderColor: string;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    labelSpacingStart: {};
    labelCenter: {
        display: string;
        maxWidth: string;
    };
    labelSpacingEnd: {
        flex: number;
    };
    label: {
        margin: number;
        border: string;
        pointerEvents: string;
        whiteSpace: string;
        textOverflow: string;
        overflow: string;
        color: string;
        width: string;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    isFloatingLabel: {};
    floatingLabel: {
        '& {labelSpan}': {
            fontSize: string;
        };
    };
    placeholder: {
        pointerEvents: string;
        color: string;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    focused: {};
    inputNative: {
        resize: string;
        padding: number;
        outline: string;
        border: string;
        backgroundColor: string;
        color: string;
        font: string;
        width: string;
    };
    hintContainer: {
        minHeight: string;
        '>div': {
            display: string;
            flex: string;
            maxWidth: string;
            overflow: string;
            justifyContent: string;
        };
    };
    disabled: {
        '&, & {label}, & {container}:after': {
            color: string;
            cursor: string;
        };
    };
    hint: any;
    error: any;
    errorState: {
        '& {label}, & {hintContainer}': {
            color: string;
        };
        '& {fieldset}, & {container}:after': {
            borderColor: string;
        };
        '& {inputNative}': {
            caretColor: string;
        };
        '& {hintContainer} ly-hint:not({hintAfter})': {
            display: string;
        };
        '& {labelSpan}': {
            animation: string;
        };
    };
    hintAfter: {
        marginBefore: string;
    };
    hintBefore: {
        marginAfter: string;
    };
    $keyframes: {
        shake: {
            0: {
                marginBefore: number;
            };
            40: {
                marginBefore: string;
            };
            50: {
                marginBefore: string;
            };
            70: {
                marginBefore: string;
            };
            100: {
                marginBefore: number;
            };
        };
    };
};
