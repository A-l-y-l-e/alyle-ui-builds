import { LyThemeConfig } from '@alyle/ui';
import { MinimaLight } from './light';
import { MinimaDark } from './dark';
export declare class MinimaTheme implements LyThemeConfig {
    themes: (typeof MinimaLight)[];
}
export declare class ThemeMinimaLight {
}
export declare class ThemeMinimaDark {
}
export declare class ThemeMinimaModule {
}
export interface IMinimaTheme extends MinimaLight, MinimaDark {
}
