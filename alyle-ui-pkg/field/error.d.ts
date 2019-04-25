import { Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare class LyError {
    private _theme;
    readonly classes: Record<"root" | "animations" | "container" | "fieldset" | "fieldsetSpan" | "labelSpan" | "prefix" | "infix" | "suffix" | "labelContainer" | "labelSpacingStart" | "labelCenter" | "labelSpacingEnd" | "label" | "isFloatingLabel" | "floatingLabel" | "placeholder" | "focused" | "inputNative" | "hintContainer" | "disabled" | "hint" | "error" | "errorState" | "hintAfter" | "hintBefore" | "selectArrow", string>;
    constructor(renderer: Renderer2, el: ElementRef, _theme: LyTheme2);
}
