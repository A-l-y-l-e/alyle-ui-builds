import { ElementRef } from '@angular/core';
import { LyTheme2, ThemeRef } from '../theme/theme2.service';
import { StyleTemplate } from '../parse';
import { LyHostClass } from './host-class';
import { LyStyles, LyClasses } from '../theme/style';
export declare class StyleRenderer {
    private _theme;
    private _hostClass;
    constructor(_el: ElementRef, _theme: LyTheme2, _hostClass: LyHostClass);
    /**
     * Build multiple styles and render them in the DOM
     */
    addSheet<T>(styles: T & LyStyles): LyClasses<T>;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate): string;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number): string;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate, oldClass: string): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate): string;
    add(style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number, oldClass: string | null): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, oldClass: string | null): string;
    add(id: string, style: (theme: any, ref: ThemeRef) => StyleTemplate, priority: number, oldClass: string | null): string;
}
