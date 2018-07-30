import { ElementRef, OnDestroy, OnChanges, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
export declare class LyFieldDirective implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    _ngControl: NgControl;
    private _parentForm;
    private _parentFormGroup;
    private cd;
    focusState: Subject<boolean>;
    focused: boolean;
    private _disabled;
    private _required;
    private _placeholder;
    type: string;
    focus(isFocused: boolean): void;
    private _blur;
    private _noop;
    disabled: any;
    required: any;
    constructor(elementRef: ElementRef, _ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, cd: ChangeDetectorRef);
    markForCheck(): void;
    _parent(): any;
    protected _updateErrorState(): void;
    ngOnChanges(changes: {
        [floatLabel: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
