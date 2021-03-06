import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
/** An interface which allows a control to work inside of a `LyField`. */
export declare abstract class LyFieldControlBase<T = any> {
    value: T | null;
    readonly stateChanges: Subject<void>;
    readonly errorState: boolean;
    readonly placeholder: string;
    readonly ngControl: NgControl | null;
    readonly focused: boolean;
    readonly empty: boolean;
    readonly disabled: boolean;
    readonly required: boolean;
    readonly floatingLabel: boolean;
    /** Handles a click on the control's container. */
    abstract onContainerClick?(event: MouseEvent): void;
}
