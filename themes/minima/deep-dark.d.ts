import { ThemeConfig } from '@alyle/ui';
import { MinimaDark } from './dark';
export declare class MinimaDeepDark extends MinimaDark implements ThemeConfig {
    name: string;
    background: {
        default: import("@alyle/ui/color/color").ColorClass;
        primary: {
            default: import("@alyle/ui/color/color").ColorClass;
            shadow: import("@alyle/ui/color/color").ColorClass;
        };
        secondary: import("@alyle/ui/color/color").ColorClass;
        tertiary: import("@alyle/ui/color/color").ColorClass;
    };
    paper: {
        default: import("@alyle/ui/color/color").ColorClass;
        shadow: import("@alyle/ui/color/color").ColorClass;
    };
}
