import { ThemeVariables } from '@alyle/ui';
export declare const STYLE_SELECT_ARROW: {
    '&:after': {
        position: string;
        content: string;
        width: number;
        height: number;
        borderLeft: string;
        borderRight: string;
        borderTop: string;
        top: string;
        after: number;
        marginTop: string;
        pointerEvents: string;
    };
};
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
        '&': import("@alyle/ui/alyle-ui").StyleContainer;
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
        '-webkit-tap-highlight-color': string;
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
        minWidth: number;
        width: string;
        flex: string;
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
        'select&': {
            '-moz-appearance': string;
            '-webkit-appearance': string;
            position: string;
            backgroundColor: string;
            display: string;
            boxSizing: string;
            paddingAfter: string;
            'option:not([disabled])': {
                color: string;
            };
            'optgroup:not([disabled])': {
                color: string;
            };
        };
        'select&::-ms-expand': {
            display: string;
        };
        'select&::-moz-focus-inner': {
            border: number;
        };
        'select&:not(:disabled)': {
            cursor: string;
        };
        'select&::-ms-value': {
            color: string;
            background: string;
        };
    };
    hintContainer: {
        minHeight: string;
        lineHeight: string;
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
        '& {label}, & {hintContainer}, &{selectArrow} {infix}:after': {
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
        '& {inputNative}::selection': {
            backgroundColor: string;
            color: string;
        };
        '& {inputNative}::-moz-selection': {
            backgroundColor: string;
            color: string;
        };
    };
    hintAfter: {
        marginBefore: string;
    };
    hintBefore: {
        marginAfter: string;
    };
    selectArrow: {
        '{infix}': {
            '&:after': {
                position: string;
                content: string;
                width: number;
                height: number;
                borderLeft: string;
                borderRight: string;
                borderTop: string;
                top: string;
                after: number;
                marginTop: string;
                pointerEvents: string;
            };
        };
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
