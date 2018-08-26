import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Input, Output, Directive, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, ChangeDetectorRef, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomService, Platform, LyCommonModule, LxDomModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Origin {
}
class LyTemplateMenu {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} template
     * @return {?}
     */
    tmpl(template) {
        this._vcr.createEmbeddedView(template);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log('desst');
    }
}
LyTemplateMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-template-menu',
                template: `
  <div #container></div>
  `,
                styles: [`
    :host {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `]
            },] },
];
/** @nocollapse */
LyTemplateMenu.ctorParameters = () => [
    { type: ViewContainerRef }
];
LyTemplateMenu.propDecorators = {
    _vcr: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }]
};
class LyMenu {
    /**
     * @param {?} elementRef
     * @param {?} _viewContainerRef
     * @param {?} domService
     * @param {?} cd
     * @param {?} sanitizer
     */
    constructor(elementRef, _viewContainerRef, domService, cd, sanitizer) {
        this.elementRef = elementRef;
        this._viewContainerRef = _viewContainerRef;
        this.domService = domService;
        this.cd = cd;
        this.sanitizer = sanitizer;
        this.isIni = false;
        this.stateBg = false;
        this.widthTarget = 0;
        this.heightTarget = 0;
        this.rootMenu = {
            top: 0,
            left: 0,
        };
        this.opened = false;
        this._anchorOrigin = { horizontal: 'left', vertical: 'top' };
        this._targetOrigin = { horizontal: 'left', vertical: 'top' };
        this._targetPosition = new BehaviorSubject(null);
        this.open = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['_targetOrigin']) {
            Promise.resolve(null).then(() => {
            });
        }
    }
    /**
     * @return {?}
     */
    updateTargetPosition() {
        /** @type {?} */
        let vertical = '0%';
        /** @type {?} */
        let horizontal = '0%';
        if (this._targetOrigin.horizontal === 'middle') {
            horizontal = '-50%';
        }
        else if (this._targetOrigin.horizontal === 'right') {
            horizontal = '-100%';
        }
        if (this._targetOrigin.vertical === 'center') {
            vertical = '-50%';
        }
        else if (this._targetOrigin.vertical === 'bottom') {
            vertical = '-100%';
        }
        /** @type {?} */
        const menuStyle = this.sanitizer.bypassSecurityTrustStyle(`translate3d(${horizontal}, ${vertical}, 0) scale3d(1, 1, 1)`);
        this._targetPosition.next(/** @type {?} */ (menuStyle));
    }
    /**
     * @param {?} _element
     * @return {?}
     */
    target(_element) {
        /** @type {?} */
        const element = _element;
        return {
            'width': element.offsetWidth || 0,
            'height': element.offsetHeight || 0,
            'left': element.offsetWidth || 0,
            'top': 0,
        };
    }
    /**
     * @return {?}
     */
    get rootStylePosition() {
        /** @type {?} */
        let top = 0;
        /** @type {?} */
        let left = 0;
        // let topTarget: any = 0;
        // let leftTarget: any = 0;
        // for _anchorOrigin
        if (this._anchorOrigin.vertical === 'center') {
            // anchor origin
            top = (this.rootMenu.height / 2);
        }
        else if (this._anchorOrigin.vertical === 'bottom') {
            top = (this.rootMenu.height);
        }
        if (this._anchorOrigin.horizontal === 'middle') {
            // anchor origin
            left = (this.rootMenu.width / 2);
        }
        else if (this._anchorOrigin.horizontal === 'right') {
            left = (this.rootMenu.width);
        }
        // // for target origing
        // if (this._targetOrigin.vertical == 'center') {
        //   // anchor origin
        //   topTarget = -(this.heightTarget / 2);
        // } else if (this._targetOrigin.vertical == 'bottom') {
        //   topTarget = -(this.heightTarget);
        // }
        // if (this._targetOrigin.horizontal == 'middle') {
        //   // leftTarget = (this.target(this._menuElement).width / 2);
        //   leftTarget = -(this.widthTarget / 2);
        // } else if (this._targetOrigin.horizontal == 'right') {
        //   // leftTarget = (this.target(this._menuElement).width);
        //   leftTarget = -(this.widthTarget);
        // }
        return {
            top: top,
            left: left,
        };
    }
    /**
     * @return {?}
     */
    get rootStyle() {
        /** @type {?} */
        const menuPosition = this.rootMenu;
        /** @type {?} */
        const positionFinal = menuPosition;
        if (this._anchorOrigin) ;
        return positionFinal;
    }
    /**
     * @return {?}
     */
    get targetOrigin() {
        return `${this._targetOrigin.horizontal === 'middle' ? 'center' : this._targetOrigin.horizontal} ${this._targetOrigin.vertical} 0`;
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        this.opened === false ? this.showMenu() : this.hiddeMenu();
    }
    /**
     * @return {?}
     */
    showMenu() {
        this.menuAnimationsState = 'in';
        this.menuContentRef = this.domService.attach(this._viewContainerRef, LyTemplateMenu, this.templateRef);
        // this.menuContentElement = this.domService.getDomElementFromComponentRef(this.menuContentRef);
        // this.domService.addChild(this.menuContentElement);
        this.updateTargetPosition();
        this.opened = true;
        this.stateBg = true;
        this.open.emit(null);
    }
    /**
     * @return {?}
     */
    hiddeMenu() {
        this.close.emit(null);
        this.opened = false;
        this.stateBg = false;
        // this.menuAnimationsState = 'end';
        this._destroyMenu();
    }
    /**
     * @return {?}
     */
    _destroyMenu() {
        // if (this.menuContentRef) {
        this.domService.destroyRef(this.menuContentRef, 0);
        // }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._destroyMenu();
        }
    }
}
LyMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-menu',
                styles: [`.ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:transform 175ms cubic-bezier(.23,1,.32,1),opacity 275ms ease-in,-webkit-transform 175ms cubic-bezier(.23,1,.32,1);will-change:opacity,transform;font-family:Roboto,"Helvetica Neue",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:linear}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:linear;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}`],
                animations: [
                    trigger('menu', [
                        transition(':leave', animate('150ms 50ms linear', style({ opacity: 0 }))),
                        state('in', style({
                            opacity: 1
                        })),
                        transition(':enter', animate('100ms linear'))
                    ])
                ],
                template: `
  <ng-template>
    <div #_menu [@menu]="menuAnimationsState"
      class="ly-menu"
      bg="menu:bg"
      color="colorText"
      [style.transform-origin]="targetOrigin"
      [style.top.px]="rootStyle.top + rootStylePosition.top"
      [style.left.px]="rootStyle.left + rootStylePosition.left"
      [style.transform]="_targetPosition | async">
      <div class="ly-menu-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div
    class="ly-background-menu ly-background-on"
    (click)="hiddeMenu()"></div>
  </ng-template>
  `,
                exportAs: 'lyMenu',
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
LyMenu.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: DomService },
    { type: ChangeDetectorRef },
    { type: DomSanitizer }
];
LyMenu.propDecorators = {
    opened: [{ type: Input }],
    _anchorOrigin: [{ type: Input, args: ['anchor-origin',] }],
    _targetOrigin: [{ type: Input, args: ['target-origin',] }],
    _menuElement: [{ type: ViewChild, args: ['_menu',] }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    open: [{ type: Output }],
    close: [{ type: Output }]
};
class LyMenuTriggerFor {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    targetPosition() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        /** @type {?} */
        const result = {
            'width': rect.width,
            'height': rect.height,
            'left': rect.left,
            'top': rect.top,
        };
        return result;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _handleClick(e) {
        this.lyMenuTriggerFor.rootMenu = this.targetPosition();
        this.lyMenuTriggerFor.toggleMenu();
    }
}
LyMenuTriggerFor.decorators = [
    { type: Directive, args: [{
                selector: '[lyMenuTriggerFor]',
                // tslint:disable-next-line:use-host-property-decorator
                host: {
                    '(click)': '_handleClick($event)'
                }
            },] },
];
/** @nocollapse */
LyMenuTriggerFor.ctorParameters = () => [
    { type: ElementRef }
];
LyMenuTriggerFor.propDecorators = {
    lyMenuTriggerFor: [{ type: Input, args: ['lyMenuTriggerFor',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyMenuModule {
}
LyMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule, LxDomModule],
                exports: [LyMenu, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuTriggerFor, LyTemplateMenu],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Origin, LyTemplateMenu, LyMenu, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIERpcmVjdGl2ZSxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRG9tU2VydmljZSwgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgdHlwZSBwb3NpdGlvbiA9ICdsZWZ0JyB8ICdyaWdodCcgfCAndG9wJyB8ICdib3R0b20nIHwgJ2NlbnRlcicgfCAnbWlkZGxlJztcbmV4cG9ydCBjbGFzcyBPcmlnaW4ge1xuICBob3Jpem9udGFsOiBwb3NpdGlvbjtcbiAgdmVydGljYWw6IHBvc2l0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZW1wbGF0ZS1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRlbXBsYXRlTWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIF92Y3I6IFZpZXdDb250YWluZXJSZWY7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgdG1wbCh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCdkZXNzdCcpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBzdHlsZXM6IFtgLmx5LW1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246Zml4ZWQ7cGFkZGluZzo4cHggMDttYXgtaGVpZ2h0OjI0OHB4O292ZXJmbG93OmF1dG87LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMDtvcGFjaXR5OjA7bWluLXdpZHRoOjg0cHg7d2lkdGg6LXdlYmtpdC1maXQtY29udGVudDt3aWR0aDotbW96LWZpdC1jb250ZW50O3dpZHRoOmZpdC1jb250ZW50Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTtib3gtc2hhZG93OnJnYmEoMCwwLDAsLjE1KSAwIDJweCA2cHgscmdiYSgwLDAsMCwuMTUpIDAgMXB4IDRweDtib3JkZXItcmFkaXVzOjJweDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpLG9wYWNpdHkgMjc1bXMgZWFzZS1pbiwtd2Via2l0LXRyYW5zZm9ybSAxNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtO2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubHktbGlzdC14e3otaW5kZXg6MDttYXgtaGVpZ2h0OjEwMCV9Lmx5LW1lbnUgL2RlZXAvIGx5LW1lbnV7cG9zaXRpb246YWJzb2x1dGV9Lmx5LW1lbnUubHktbGlzdHtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNpdGlvbjpsaW5lYXJ9Omhvc3QubHktbGlzdCAubHktbWVudXtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zaXRpb246bGluZWFyO29wYWNpdHk6MX06aG9zdC5seS1saXN0IC5seS1iYWNrZ3JvdW5kLW1lbnV7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktbWVudS5seS1tZW51LW9wZW5lZHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5seS1iYWNrZ3JvdW5kLW1lbnV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO3otaW5kZXg6OTk5Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5seS1iYWNrZ3JvdW5kLW9ue3BvaW50ZXItZXZlbnRzOmFsbCFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6YXV0byFpbXBvcnRhbnR9OjpuZy1kZWVwIGJ1dHRvbltseS1tZW51LWl0ZW1de2Rpc3BsYXk6YmxvY2s7bWluLWhlaWdodDo0OHB4O2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbWVudScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIGFuaW1hdGUoJzE1MG1zIDUwbXMgbGluZWFyJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpLFxuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctdGVtcGxhdGU+XG4gICAgPGRpdiAjX21lbnUgW0BtZW51XT1cIm1lbnVBbmltYXRpb25zU3RhdGVcIlxuICAgICAgY2xhc3M9XCJseS1tZW51XCJcbiAgICAgIGJnPVwibWVudTpiZ1wiXG4gICAgICBjb2xvcj1cImNvbG9yVGV4dFwiXG4gICAgICBbc3R5bGUudHJhbnNmb3JtLW9yaWdpbl09XCJ0YXJnZXRPcmlnaW5cIlxuICAgICAgW3N0eWxlLnRvcC5weF09XCJyb290U3R5bGUudG9wICsgcm9vdFN0eWxlUG9zaXRpb24udG9wXCJcbiAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInJvb3RTdHlsZS5sZWZ0ICsgcm9vdFN0eWxlUG9zaXRpb24ubGVmdFwiXG4gICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIl90YXJnZXRQb3NpdGlvbiB8IGFzeW5jXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibHktbWVudS1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICBjbGFzcz1cImx5LWJhY2tncm91bmQtbWVudSBseS1iYWNrZ3JvdW5kLW9uXCJcbiAgICAoY2xpY2spPVwiaGlkZGVNZW51KClcIj48L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZXhwb3J0QXM6ICdseU1lbnUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNJbmkgPSBmYWxzZTtcbiAgX2NvbG9yOiBzdHJpbmc7XG4gIHN0YXRlQmcgPSBmYWxzZTtcbiAgd2lkdGhUYXJnZXQgPSAwO1xuICBoZWlnaHRUYXJnZXQgPSAwO1xuXG4gIHJvb3RNZW51OiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gIH07XG4gIHh0ZW1wbGF0ZVJlZjogYW55O1xuICBtZW51QW5pbWF0aW9uc1N0YXRlO1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCdhbmNob3Itb3JpZ2luJykgX2FuY2hvck9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgQElucHV0KCd0YXJnZXQtb3JpZ2luJykgX3RhcmdldE9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgQFZpZXdDaGlsZCgnX21lbnUnKSBfbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfdGFyZ2V0UG9zaXRpb246IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBtZW51Q29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIG1lbnVDb250ZW50UmVmO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snX3RhcmdldE9yaWdpbiddKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXNbdGFyZ2V0LW9yaWdpbl0nLCBjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXJnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgdmVydGljYWwgPSAnMCUnLFxuICAgIGhvcml6b250YWwgPSAnMCUnO1xuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIGhvcml6b250YWwgPSAnLTUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctMTAwJSc7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHZlcnRpY2FsID0gJy0xMDAlJztcbiAgICB9XG4gICAgY29uc3QgbWVudVN0eWxlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB0cmFuc2xhdGUzZCgke2hvcml6b250YWx9LCAke3ZlcnRpY2FsfSwgMCkgc2NhbGUzZCgxLCAxLCAxKWApO1xuICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uLm5leHQobWVudVN0eWxlIGFzIHN0cmluZyk7XG4gIH1cbiAgLy8gZ2V0IHNpemVcbiAgdGFyZ2V0KF9lbGVtZW50OiBhbnkpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IF9lbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAnaGVpZ2h0JzogZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMCxcbiAgICAgICdsZWZ0JzogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgJ3RvcCc6IDAsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlUG9zaXRpb24oKSB7XG4gICAgbGV0IHRvcDogYW55ID0gMDtcbiAgICBsZXQgbGVmdDogYW55ID0gMDtcbiAgICAvLyBsZXQgdG9wVGFyZ2V0OiBhbnkgPSAwO1xuICAgIC8vIGxldCBsZWZ0VGFyZ2V0OiBhbnkgPSAwO1xuXG4gICAgLy8gZm9yIF9hbmNob3JPcmlnaW5cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgLy8gYW5jaG9yIG9yaWdpblxuICAgICAgdG9wID0gKHRoaXMucm9vdE1lbnUuaGVpZ2h0IC8gMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICBsZWZ0ID0gKHRoaXMucm9vdE1lbnUud2lkdGggLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBsZWZ0ID0gKHRoaXMucm9vdE1lbnUud2lkdGgpO1xuICAgIH1cblxuICAgIC8vIC8vIGZvciB0YXJnZXQgb3JpZ2luZ1xuICAgIC8vIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT0gJ2NlbnRlcicpIHtcbiAgICAvLyAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAvLyAgIHRvcFRhcmdldCA9IC0odGhpcy5oZWlnaHRUYXJnZXQgLyAyKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnYm90dG9tJykge1xuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PSAnbWlkZGxlJykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGggLyAyKTtcbiAgICAvLyAgIGxlZnRUYXJnZXQgPSAtKHRoaXMud2lkdGhUYXJnZXQgLyAyKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdyaWdodCcpIHtcbiAgICAvLyAgIC8vIGxlZnRUYXJnZXQgPSAodGhpcy50YXJnZXQodGhpcy5fbWVudUVsZW1lbnQpLndpZHRoKTtcbiAgICAvLyAgIGxlZnRUYXJnZXQgPSAtKHRoaXMud2lkdGhUYXJnZXQpO1xuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0b3AsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgLy8gdG9wVGFyZ2V0OiB0b3BUYXJnZXQsXG4gICAgICAvLyBsZWZ0VGFyZ2V0OiBsZWZ0VGFyZ2V0LFxuICAgIH07XG4gIH1cbiAgZ2V0IHJvb3RTdHlsZSgpOiBhbnkge1xuICAgIGNvbnN0IG1lbnVQb3NpdGlvbjogYW55ID0gdGhpcy5yb290TWVudTtcbiAgICBjb25zdCBwb3NpdGlvbkZpbmFsOiBhbnkgPSBtZW51UG9zaXRpb247XG5cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luKSB7XG5cblxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbkZpbmFsO1xuICB9XG4gIGdldCB0YXJnZXRPcmlnaW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7XG4gICAgICB0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScgPyAnY2VudGVyJyA6IHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsXG4gICAgfSAke3RoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbH0gMGA7XG4gIH1cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLm9wZW5lZCA9PT0gZmFsc2UgPyB0aGlzLnNob3dNZW51KCkgOiB0aGlzLmhpZGRlTWVudSgpO1xuICB9XG4gIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudUFuaW1hdGlvbnNTdGF0ZSA9ICdpbic7XG4gICAgdGhpcy5tZW51Q29udGVudFJlZiA9IHRoaXMuZG9tU2VydmljZS5hdHRhY2g8THlUZW1wbGF0ZU1lbnU+KHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIEx5VGVtcGxhdGVNZW51LCB0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAvLyB0aGlzLm1lbnVDb250ZW50RWxlbWVudCA9IHRoaXMuZG9tU2VydmljZS5nZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZih0aGlzLm1lbnVDb250ZW50UmVmKTtcbiAgICAvLyB0aGlzLmRvbVNlcnZpY2UuYWRkQ2hpbGQodGhpcy5tZW51Q29udGVudEVsZW1lbnQpO1xuICAgIHRoaXMudXBkYXRlVGFyZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUJnID0gdHJ1ZTtcbiAgICB0aGlzLm9wZW4uZW1pdChudWxsKTtcbiAgfVxuICBoaWRkZU1lbnUoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZUJnID0gZmFsc2U7XG4gICAgLy8gdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2VuZCc7XG4gICAgdGhpcy5fZGVzdHJveU1lbnUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lNZW51KCk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLm1lbnVDb250ZW50UmVmKSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2UuZGVzdHJveVJlZih0aGlzLm1lbnVDb250ZW50UmVmLCAwKTtcbiAgICAvLyB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGRvbVNlcnZpY2U6IERvbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZGVzdHJveU1lbnUoKTtcbiAgICB9XG4gIH1cblxufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciB7XG4gIEBJbnB1dCgnbHlNZW51VHJpZ2dlckZvcicpIGx5TWVudVRyaWdnZXJGb3I6IEx5TWVudTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHRhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3dpZHRoJzogcmVjdC53aWR0aCxcbiAgICAgICdoZWlnaHQnOiByZWN0LmhlaWdodCxcbiAgICAgICdsZWZ0JzogcmVjdC5sZWZ0LFxuICAgICAgJ3RvcCc6IHJlY3QudG9wLFxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljayhlOiBFdmVudCkge1xuICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci5yb290TWVudSA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3IudG9nZ2xlTWVudSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEx5TWVudVRyaWdnZXJGb3IsIEx5VGVtcGxhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnVdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0FnQ0M7Ozs7O0lBb0JDLFlBQW1CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0tBQUs7Ozs7SUFFM0QsUUFBUTtLQUNQOzs7OztJQUNELElBQUksQ0FBQyxRQUEwQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOztHQUVUO2dCQUNELE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7R0FTUixDQUFDO2FBQ0g7Ozs7WUF0Q0MsZ0JBQWdCOzs7bUJBd0NmLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7Ozs7Ozs7SUFnTWxELFlBQ1UsWUFDQSxtQkFDQSxZQUNBLElBQ0E7UUFKQSxlQUFVLEdBQVYsVUFBVTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsZUFBVSxHQUFWLFVBQVU7UUFDVixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO3FCQXJKWCxLQUFLO3VCQUVILEtBQUs7MkJBQ0QsQ0FBQzs0QkFDQSxDQUFDO3dCQUVBO1lBQ2QsR0FBRyxFQUFFLENB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