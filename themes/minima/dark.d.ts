import { ThemeConfig } from '@alyle/ui';
import { MinimaBase } from './base';
export declare class MinimaDark extends MinimaBase implements ThemeConfig {
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
    disabled: string;
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
    text: {
        default: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    /** Components variables */
    radio: {
        radioOuterCircle: string;
    };
    menu: {};
    drawer: {
        backdrop: string;
    };
    bar: string;
    divider: string;
    colorShadow: string;
    shadow: string;
    field: {
        appearance: {
            outlined: {
                container: {
                    padding: string;
                };
                fieldset: {
                    borderWidth: string;
                    borderRadius: string;
                    padding: string;
                };
                fieldsetHover: {
                    borderWidth: string;
                    borderColor: string;
                };
                fieldsetFocused: {
                    borderWidth: string;
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
                input: {
                    margin: string;
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
                container: {
                    borderRadius: string;
                    padding: string;
                    '&:after': {
                        borderBottomStyle: string;
                        borderBottomColor: string;
                        borderBottomWidth: string;
                    };
                    '&:hover:after': {
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
                input: {
                    margin: string;
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
}
