import { Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare type LyHintAlign = 'before' | 'after';
/** Hint text to be shown underneath the field. */
export declare class LyHint {
    private _renderer;
    private _el;
    private _theme;
    readonly classes: Record<"root" | "animations" | "container" | "fieldset" | "fieldsetSpan" | "labelSpan" | "prefix" | "infix" | "suffix" | "labelContainer" | "labelSpacingStart" | "labelCenter" | "labelSpacingEnd" | "label" | "isFloatingLabel" | "floatingLabel" | "placeholder" | "focused" | "inputNative" | "hintContainer" | "disabled" | "hint" | "error" | "errorState" | "hintAfter" | "hintBefore" | "selectArrow", string>;
    private _align;
    private _alignClass?;
    align: LyHintAlign;
    constructor(_renderer: Renderer2, _el: ElementRef, _theme: LyTheme2);
}
