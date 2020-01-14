import { ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeRef } from '../theme/theme2.service';
import { StyleTemplate } from '../parse';
import { LyStyles, LyClasses } from '../theme/style';
export declare class StyleRenderer {
    private _theme;
    private _renderer;
    private readonly _set;
    private _nEl;
    constructor(_theme: LyTheme2, _el: ElementRef, _renderer: Renderer2);
    /**
     * Build multiple styles and render them in the DOM.
     * @param styles Styles
     * @param applyRootClass If `applyToRoot` is `true` and the root property is defined,
     * it will automatically be added to the component.
     *
     * e.g.
     *
     * ```ts
     * const STYLES = () => ({
     *   root: lyl `{...}` // this class will be added to the root component
     * })
     * ```
     *
     */
    renderSheet<T>(styles: T & LyStyles, applyRootClass?: boolean): LyClasses<T>;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate): string;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number): string;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate, oldClass: string): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate): string;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number, oldClass: string | null): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, oldClass: string | null): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number, oldClass: string | null): string;
    render(style: (theme: any, ref: ThemeRef) => StyleTemplate): string;
    render(style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number): string;
    render(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate): string;
    render(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number): string;
    addClass(className: string): void;
    removeClass(className?: string | null): void;
    toggleClass(className: string, enabled: boolean): void;
    updateClass(newClassName: string, oldClassName: string | null | undefined): string;
}
/**
 * Parameter decorator to be used for create Dynamic style together with `@Input`
 * @param style style
 * @param priority priority of style, default: 0
 * @decorator
 */
export declare function Style<INPUT = any, C = any>(style: (val: NonNullable<INPUT>, comp: C) => ((theme: any, ref: ThemeRef) => StyleTemplate), priority?: number): (target: WithStyles, propertyKey: string, descriptor?: TypedPropertyDescriptor<INPUT>) => void;
export interface WithStyles {
    /** Style Priority, default: 0 */
    readonly $priority?: number;
    readonly sRenderer: StyleRenderer;
}
