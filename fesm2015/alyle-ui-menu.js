import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Input, Output, Directive, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, ChangeDetectorRef, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomService, Platform, LyCommonModule, LxDomModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: ViewContainerRef, },
];
LyTemplateMenu.propDecorators = {
    "_vcr": [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
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
        let /** @type {?} */ vertical = '0%', /** @type {?} */
        horizontal = '0%';
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
        const /** @type {?} */ menuStyle = this.sanitizer.bypassSecurityTrustStyle(`translate3d(${horizontal}, ${vertical}, 0) scale3d(1, 1, 1)`);
        this._targetPosition.next(/** @type {?} */ (menuStyle));
    }
    /**
     * @param {?} _element
     * @return {?}
     */
    target(_element) {
        const /** @type {?} */ element = _element;
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
        let /** @type {?} */ top = 0;
        let /** @type {?} */ left = 0;
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
        const /** @type {?} */ menuPosition = this.rootMenu;
        const /** @type {?} */ positionFinal = menuPosition;
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
                styles: [`.ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:opacity 275ms ease-in 0s,-webkit-transform 175ms cubic-bezier(.23,1,.32,1) 0s;transition:transform 175ms cubic-bezier(.23,1,.32,1) 0s,opacity 275ms ease-in 0s;transition:transform 175ms cubic-bezier(.23,1,.32,1) 0s,opacity 275ms ease-in 0s,-webkit-transform 175ms cubic-bezier(.23,1,.32,1) 0s;will-change:opacity,transform;font-family:Roboto,"Helvetica Neue",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:all 0s linear 0s}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:all 0s linear 0s;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}`],
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
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: DomService, },
    { type: ChangeDetectorRef, },
    { type: DomSanitizer, },
];
LyMenu.propDecorators = {
    "opened": [{ type: Input },],
    "_anchorOrigin": [{ type: Input, args: ['anchor-origin',] },],
    "_targetOrigin": [{ type: Input, args: ['target-origin',] },],
    "_menuElement": [{ type: ViewChild, args: ['_menu',] },],
    "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
    "open": [{ type: Output },],
    "close": [{ type: Output },],
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
        const /** @type {?} */ element = this.elementRef.nativeElement;
        const /** @type {?} */ rect = element.getBoundingClientRect();
        const /** @type {?} */ result = {
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
    { type: ElementRef, },
];
LyMenuTriggerFor.propDecorators = {
    "lyMenuTriggerFor": [{ type: Input, args: ['lyMenuTriggerFor',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { Origin, LyTemplateMenu, LyMenu, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT25DaGFuZ2VzLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGdyb3VwXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRG9tU2VydmljZSwgTHhEb21Nb2R1bGUsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyB8ICdtaWRkbGUnO1xuZXhwb3J0IGNsYXNzIE9yaWdpbiB7XG4gIGhvcml6b250YWw6IHBvc2l0aW9uO1xuICB2ZXJ0aWNhbDogcG9zaXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRlbXBsYXRlLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGVtcGxhdGVNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgX3ZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICB0bXBsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc3N0Jyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIHN0eWxlczogW2AubHktbWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpmaXhlZDtwYWRkaW5nOjhweCAwO21heC1oZWlnaHQ6MjQ4cHg7b3ZlcmZsb3c6YXV0bzstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAwO29wYWNpdHk6MDttaW4td2lkdGg6ODRweDt3aWR0aDotd2Via2l0LWZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDAgMnB4IDZweCxyZ2JhKDAsMCwwLC4xNSkgMCAxcHggNHB4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246b3BhY2l0eSAyNzVtcyBlYXNlLWluIDBzLC13ZWJraXQtdHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyxvcGFjaXR5IDI3NW1zIGVhc2UtaW4gMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyxvcGFjaXR5IDI3NW1zIGVhc2UtaW4gMHMsLXdlYmtpdC10cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwczt3aWxsLWNoYW5nZTpvcGFjaXR5LHRyYW5zZm9ybTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lmx5LWxpc3QteHt6LWluZGV4OjA7bWF4LWhlaWdodDoxMDAlfS5seS1tZW51IC9kZWVwLyBseS1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5seS1tZW51Lmx5LWxpc3R7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zaXRpb246YWxsIDBzIGxpbmVhciAwc306aG9zdC5seS1saXN0IC5seS1tZW51e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNpdGlvbjphbGwgMHMgbGluZWFyIDBzO29wYWNpdHk6MX06aG9zdC5seS1saXN0IC5seS1iYWNrZ3JvdW5kLW1lbnV7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktbWVudS5seS1tZW51LW9wZW5lZHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5seS1iYWNrZ3JvdW5kLW1lbnV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO3otaW5kZXg6OTk5Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5seS1iYWNrZ3JvdW5kLW9ue3BvaW50ZXItZXZlbnRzOmFsbCFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6YXV0byFpbXBvcnRhbnR9OjpuZy1kZWVwIGJ1dHRvbltseS1tZW51LWl0ZW1de2Rpc3BsYXk6YmxvY2s7bWluLWhlaWdodDo0OHB4O2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbWVudScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIGFuaW1hdGUoJzE1MG1zIDUwbXMgbGluZWFyJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpLFxuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctdGVtcGxhdGU+XG4gICAgPGRpdiAjX21lbnUgW0BtZW51XT1cIm1lbnVBbmltYXRpb25zU3RhdGVcIlxuICAgICAgY2xhc3M9XCJseS1tZW51XCJcbiAgICAgIGJnPVwibWVudTpiZ1wiXG4gICAgICBjb2xvcj1cImNvbG9yVGV4dFwiXG4gICAgICBbc3R5bGUudHJhbnNmb3JtLW9yaWdpbl09XCJ0YXJnZXRPcmlnaW5cIlxuICAgICAgW3N0eWxlLnRvcC5weF09XCJyb290U3R5bGUudG9wICsgcm9vdFN0eWxlUG9zaXRpb24udG9wXCJcbiAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInJvb3RTdHlsZS5sZWZ0ICsgcm9vdFN0eWxlUG9zaXRpb24ubGVmdFwiXG4gICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIl90YXJnZXRQb3NpdGlvbiB8IGFzeW5jXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibHktbWVudS1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICBjbGFzcz1cImx5LWJhY2tncm91bmQtbWVudSBseS1iYWNrZ3JvdW5kLW9uXCJcbiAgICAoY2xpY2spPVwiaGlkZGVNZW51KClcIj48L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZXhwb3J0QXM6ICdseU1lbnUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNJbmkgPSBmYWxzZTtcbiAgX2NvbG9yOiBzdHJpbmc7XG4gIHN0YXRlQmcgPSBmYWxzZTtcbiAgd2lkdGhUYXJnZXQgPSAwO1xuICBoZWlnaHRUYXJnZXQgPSAwO1xuXG4gIHJvb3RNZW51OiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gIH07XG4gIHh0ZW1wbGF0ZVJlZjogYW55O1xuICBtZW51QW5pbWF0aW9uc1N0YXRlO1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCdhbmNob3Itb3JpZ2luJykgX2FuY2hvck9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgQElucHV0KCd0YXJnZXQtb3JpZ2luJykgX3RhcmdldE9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgQFZpZXdDaGlsZCgnX21lbnUnKSBfbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfdGFyZ2V0UG9zaXRpb246IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBtZW51Q29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIG1lbnVDb250ZW50UmVmO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snX3RhcmdldE9yaWdpbiddKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXNbdGFyZ2V0LW9yaWdpbl0nLCBjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXJnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgdmVydGljYWwgPSAnMCUnLFxuICAgIGhvcml6b250YWwgPSAnMCUnO1xuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIGhvcml6b250YWwgPSAnLTUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctMTAwJSc7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHZlcnRpY2FsID0gJy0xMDAlJztcbiAgICB9XG4gICAgY29uc3QgbWVudVN0eWxlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB0cmFuc2xhdGUzZCgke2hvcml6b250YWx9LCAke3ZlcnRpY2FsfSwgMCkgc2NhbGUzZCgxLCAxLCAxKWApO1xuICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uLm5leHQobWVudVN0eWxlIGFzIHN0cmluZyk7XG4gIH1cbiAgLy8gZ2V0IHNpemVcbiAgdGFyZ2V0KF9lbGVtZW50OiBhbnkpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IF9lbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAnaGVpZ2h0JzogZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMCxcbiAgICAgICdsZWZ0JzogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgJ3RvcCc6IDAsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlUG9zaXRpb24oKSB7XG4gICAgbGV0IHRvcDogYW55ID0gMDtcbiAgICBsZXQgbGVmdDogYW55ID0gMDtcbiAgICAvLyBsZXQgdG9wVGFyZ2V0OiBhbnkgPSAwO1xuICAgIC8vIGxldCBsZWZ0VGFyZ2V0OiBhbnkgPSAwO1xuXG4gICAgLy8gZm9yIF9hbmNob3JPcmlnaW5cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgLy8gYW5jaG9yIG9yaWdpblxuICAgICAgdG9wID0gKHRoaXMucm9vdE1lbnUuaGVpZ2h0IC8gMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICBsZWZ0ID0gKHRoaXMucm9vdE1lbnUud2lkdGggLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBsZWZ0ID0gKHRoaXMucm9vdE1lbnUud2lkdGgpO1xuICAgIH1cblxuICAgIC8vIC8vIGZvciB0YXJnZXQgb3JpZ2luZ1xuICAgIC8vIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT0gJ2NlbnRlcicpIHtcbiAgICAvLyAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAvLyAgIHRvcFRhcmdldCA9IC0odGhpcy5oZWlnaHRUYXJnZXQgLyAyKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnYm90dG9tJykge1xuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PSAnbWlkZGxlJykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGggLyAyKTtcbiAgICAvLyAgIGxlZnRUYXJnZXQgPSAtKHRoaXMud2lkdGhUYXJnZXQgLyAyKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdyaWdodCcpIHtcbiAgICAvLyAgIC8vIGxlZnRUYXJnZXQgPSAodGhpcy50YXJnZXQodGhpcy5fbWVudUVsZW1lbnQpLndpZHRoKTtcbiAgICAvLyAgIGxlZnRUYXJnZXQgPSAtKHRoaXMud2lkdGhUYXJnZXQpO1xuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0b3AsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgLy8gdG9wVGFyZ2V0OiB0b3BUYXJnZXQsXG4gICAgICAvLyBsZWZ0VGFyZ2V0OiBsZWZ0VGFyZ2V0LFxuICAgIH07XG4gIH1cbiAgZ2V0IHJvb3RTdHlsZSgpOiBhbnkge1xuICAgIGNvbnN0IG1lbnVQb3NpdGlvbjogYW55ID0gdGhpcy5yb290TWVudTtcbiAgICBjb25zdCBwb3NpdGlvbkZpbmFsOiBhbnkgPSBtZW51UG9zaXRpb247XG5cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luKSB7XG5cblxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbkZpbmFsO1xuICB9XG4gIGdldCB0YXJnZXRPcmlnaW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7XG4gICAgICB0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScgPyAnY2VudGVyJyA6IHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsXG4gICAgfSAke3RoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbH0gMGA7XG4gIH1cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLm9wZW5lZCA9PT0gZmFsc2UgPyB0aGlzLnNob3dNZW51KCkgOiB0aGlzLmhpZGRlTWVudSgpO1xuICB9XG4gIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudUFuaW1hdGlvbnNTdGF0ZSA9ICdpbic7XG4gICAgdGhpcy5tZW51Q29udGVudFJlZiA9IHRoaXMuZG9tU2VydmljZS5hdHRhY2g8THlUZW1wbGF0ZU1lbnU+KHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIEx5VGVtcGxhdGVNZW51LCB0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAvLyB0aGlzLm1lbnVDb250ZW50RWxlbWVudCA9IHRoaXMuZG9tU2VydmljZS5nZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZih0aGlzLm1lbnVDb250ZW50UmVmKTtcbiAgICAvLyB0aGlzLmRvbVNlcnZpY2UuYWRkQ2hpbGQodGhpcy5tZW51Q29udGVudEVsZW1lbnQpO1xuICAgIHRoaXMudXBkYXRlVGFyZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUJnID0gdHJ1ZTtcbiAgICB0aGlzLm9wZW4uZW1pdChudWxsKTtcbiAgfVxuICBoaWRkZU1lbnUoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZUJnID0gZmFsc2U7XG4gICAgLy8gdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2VuZCc7XG4gICAgdGhpcy5fZGVzdHJveU1lbnUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lNZW51KCk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLm1lbnVDb250ZW50UmVmKSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2UuZGVzdHJveVJlZih0aGlzLm1lbnVDb250ZW50UmVmLCAwKTtcbiAgICAvLyB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGRvbVNlcnZpY2U6IERvbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZGVzdHJveU1lbnUoKTtcbiAgICB9XG4gIH1cblxufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciB7XG4gIEBJbnB1dCgnbHlNZW51VHJpZ2dlckZvcicpIGx5TWVudVRyaWdnZXJGb3I6IEx5TWVudTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHRhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3dpZHRoJzogcmVjdC53aWR0aCxcbiAgICAgICdoZWlnaHQnOiByZWN0LmhlaWdodCxcbiAgICAgICdsZWZ0JzogcmVjdC5sZWZ0LFxuICAgICAgJ3RvcCc6IHJlY3QudG9wLFxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljayhlOiBFdmVudCkge1xuICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci5yb290TWVudSA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3IudG9nZ2xlTWVudSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEx5TWVudVRyaWdnZXJGb3IsIEx5VGVtcGxhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnVdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0FtREM7Ozs7O0lBb0JDLFlBQW1CLGlCQUFtQztRQUFuQyxzQkFB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