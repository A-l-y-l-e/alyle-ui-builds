import { TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
export interface KeyAttribute {
    [key: string]: any;
}
export declare class NgTranscludeDirective implements OnDestroy {
    private _viewRef;
    private _ngTransclude;
    ngTransclude: TemplateRef<any>;
    constructor(_viewRef: ViewContainerRef);
    ngOnDestroy(): void;
}
export declare class NgTranscludeModule {
}
