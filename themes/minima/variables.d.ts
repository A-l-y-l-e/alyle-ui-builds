export declare const iconButton: {
    size: string;
};
export declare const icon: {
    fontSize: string;
};
export declare const field: {
    appearance: {
        outlined: {
            root: {
                '&:not({focused}):not({disabled}):hover {fieldset}': {
                    borderColor: string;
                };
                '&{focused} {fieldset}': {
                    borderWidth: string;
                    borderColor: string;
                };
                'textarea{inputNative}': {
                    margin: string;
                };
                '{inputNative}:not(textarea)': {
                    padding: string;
                };
            };
            container: {
                padding: string;
            };
            fieldset: {
                borderWidth: string;
                borderRadius: string;
                padding: string;
            };
            containerLabelFocused: {
                color: string;
                '&:after': {
                    borderWidth: string;
                    borderColor: string;
                };
            };
            prefix: {
                '&:after': {
                    padding: string;
                };
            };
            suffix: {
                '&:after': {
                    padding: string;
                };
            };
            label: {
                margin: string;
            };
            placeholder: {
                margin: string;
            };
            floatingLabel: {
                transform: string;
            };
            hint: {
                padding: string;
            };
        };
        filled: {
            root: {
                '&:not({focused}):not({disabled}) {container}:hover:after': {
                    borderBottomWidth: string;
                };
                'textarea{inputNative}': {
                    margin: string;
                };
                '{inputNative}:not(textarea)': {
                    padding: string;
                };
            };
            container: {
                borderRadius: string;
                padding: string;
                '&:after': {
                    borderBottomStyle: string;
                    borderBottomColor: string;
                    borderBottomWidth: string;
                };
            };
            containerFocused: {
                '&:after': {
                    borderBottomWidth: string;
                };
            };
            containerLabelFocused: {
                color: string;
                borderWidth: string;
                borderColor: string;
            };
            containerLabelHover: {
                color: string;
            };
            placeholder: {
                margin: string;
            };
            label: {
                margin: string;
            };
            floatingLabel: {
                transform: string;
            };
            hint: {
                padding: string;
            };
        };
    };
};
export declare const zIndex: {
    toolbar: number;
    drawer: number;
    overlay: number;
};
export declare const RippleVariables: {
    transition: {
        opacity: string;
        transform: string;
    };
    duration: number;
};
export declare const animations: {
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
