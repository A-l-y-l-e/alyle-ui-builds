import { ThemeVariables, LyHostClass, StyleRenderer } from '@alyle/ui';
export declare const STYLES: (theme: ThemeVariables) => {
    $name: string;
    $priority: number;
    $global: (className: string) => string;
    root: (className: string) => string;
};
export declare class LySkeleton {
    private styleRenderer;
    private hostClass;
    /** @docs-private */
    static readonly и = "LySkeleton";
    /** @docs-private */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        $global: string;
        root: string;
    }, "root">;
    skeleton: boolean;
    private _skeleton;
    constructor(styleRenderer: StyleRenderer, hostClass: LyHostClass);
}
