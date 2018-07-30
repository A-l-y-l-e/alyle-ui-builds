import { TemplateRef, ViewContainerRef, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
export interface KeyAttribute {
    [key: string]: any;
}
export declare class NgTranscludeDirective implements AfterContentInit, OnDestroy {
    private _viewRef;
    viewRef: ViewContainerRef;
    private _ngTransclude;
    ngTransclude: TemplateRef<any>;
    ngTranscludeChange: EventEmitter<any>;
    constructor(_viewRef: ViewContainerRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
export declare class NgTranscludeModule {
}
