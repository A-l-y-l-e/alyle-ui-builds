import { ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
export declare class LyInputNative implements OnInit, OnDestroy {
    private _el;
    private _renderer;
    /** @ignore */
    ngControl: NgControl;
    /** @ignore */
    _hostElement: HTMLInputElement | HTMLTextAreaElement;
    protected _disabled: boolean;
    protected _required: boolean;
    protected _placeholder: string;
    readonly stateChanges: Subject<void>;
    focused: boolean;
    _onInput(): void;
    _onBlur(): void;
    _onFocus(): void;
    /** @ignore */
    value: any;
    /** Whether the input is disabled. */
    disabled: boolean;
    required: boolean;
    placeholder: string;
    constructor(_el: ElementRef<HTMLInputElement | HTMLTextAreaElement>, _renderer: Renderer2, 
    /** @ignore */
    ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Focuses the input. */
    focus(): void;
}
