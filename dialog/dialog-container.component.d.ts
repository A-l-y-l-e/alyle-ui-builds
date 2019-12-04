import { OnInit, ComponentFactory, TemplateRef, Injector, ApplicationRef, Renderer2, ElementRef, ChangeDetectorRef, DoCheck } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { LyOverlayRef, LyTheme2, LyClasses, StyleCollection, StyleTemplate, ThemeRef } from '@alyle/ui';
import { Subject } from 'rxjs';
import { LyDialogRef } from './dialog-ref';
import { Color } from '@alyle/ui/color';
export interface LyDialogTheme {
    /** Styles for Dialog Component. */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    /** Styles that apply when a color is set. */
    color?: (classes: LyClasses<typeof STYLES>, color: Color) => StyleTemplate;
}
export interface LyDialogVariables {
    dialog?: LyDialogTheme;
}
/** @docs-private */
declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyDialogVariables, ref: ThemeRef) => {
    root: () => (className: string) => string;
};
/** @docs-private */
export declare class LyDialogContainer implements OnInit, DoCheck {
    private _appRef;
    private _overlayRef;
    private _theme;
    private _el;
    private _cd;
    private _renderer;
    /** @docs-private */
    readonly classes: Pick<{
        root: string;
    }, "root">;
    private _embeddedViewRef;
    private _componentRef;
    /** @internal */
    readonly _afterOpened: Subject<void>;
    /** @internal */
    readonly _beforeClosed: Subject<any>;
    /** @internal */
    readonly _afterClosed: Subject<any>;
    /**
     * State of the dialog animation.
     * @internal
     */
    _state: 'void' | 'enter' | 'exit';
    /** @internal */
    private readonly viewContainerRef;
    /** @internal */
    private _componentFactoryOrTemplate;
    private _newInjector;
    constructor(_appRef: ApplicationRef, _overlayRef: LyOverlayRef, _theme: LyTheme2, _el: ElementRef<HTMLElement>, _cd: ChangeDetectorRef, _renderer: Renderer2);
    ngOnInit(): void;
    ngDoCheck(): void;
    /** @internal */
    _init(componentFactoryOrTemplate: ComponentFactory<any> | TemplateRef<any>, newInjector: Injector): void;
    /**
     * Start to close, starts the dialog exit animation.
     * @internal
     */
    _startClose(): void;
    _onAnimationStart(event: AnimationEvent): void;
    /** @internal */
    _onAnimationDone(event: AnimationEvent): void;
    private _destroy;
    /** @internal */
    _getHostElement(): HTMLElement;
}
export declare class LyDialogContext {
    private _injector;
    $implicit: any;
    dialogRef: LyDialogRef;
    readonly data: unknown;
    constructor(_injector: Injector);
}
export {};
