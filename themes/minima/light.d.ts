import { ThemeConfig } from '@alyle/ui';
import { MinimaBase } from './base';
export declare class MinimaLight extends MinimaBase implements ThemeConfig {
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
    action: {
        default: string;
        contrast: string;
    };
    background: {
        default: string;
        primary: {
            default: string;
            shadow: string;
        };
        secondary: string;
        tertiary: string;
        base: string;
    };
    paper: {
        default: string;
        shadow: string;
    };
    disabled: {
        default: string;
        contrast: string;
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
    shadow: string;
    radio: {
        outerCircle: string;
    };
    menu: {};
    drawer: {
        backdrop: string;
    };
    bar: string;
    field: {
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
    } & {
        borderColor: string;
        labelColor: string;
        appearance: {
            filled: {
                container: {
                    backgroundColor: string;
                };
            };
        };
    };
    badge: {};
    checkbox: {
        unchecked: {
            color: string;
        };
    };
    snackBar: {
        root: {
            background: string;
            color: string;
        };
    };
    tooltip: {
        root: {
            background: string;
            color: string;
        };
    };
    avatar: {};
}
