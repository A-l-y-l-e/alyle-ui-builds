import { ThemeConfig, Dir } from '@alyle/ui';
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
    button: {
        disabled: string;
    };
    radio: {
        radioOuterCircle: string;
    };
    menu: {
        bg: string;
    };
    drawer: {
        backdrop: string;
    };
    bar: string;
    divider: string;
    colorShadow: string;
    shadow: string;
    input: {
        withColor: string;
        appearance: {
            standard: {
                container: {
                    padding: string;
                    '&:after': {
                        borderBottomStyle: string;
                        borderBottomWidth: string;
                    };
                    '&:hover:after': {
                        borderBottomColor: string;
                    };
                };
                containerFocused: {
                    '&:after': {
                        borderWidth: string;
                        borderColor: string;
                    };
                };
                containerLabelHover: {
                    color: string;
                };
                label: {
                    margin: string;
                };
                placeholder: {
                    margin: string;
                };
                input: {
                    margin: string;
                };
                floatingLabel: {
                    transform: string;
                };
            };
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
            };
        };
    } & {
        /** @deprecated */
        label: string;
        /** @deprecated */
        underline: string;
        borderColor: string;
        appearance: {
            filled: {
                container: {
                    backgroundColor: string;
                };
            };
        };
    };
    direction: Dir;
}
