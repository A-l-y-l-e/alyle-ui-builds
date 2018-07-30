/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Input, Output, Directive, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomService, Platform } from '@alyle/ui';
export class Origin {
}
function Origin_tsickle_Closure_declarations() {
    /** @type {?} */
    Origin.prototype.horizontal;
    /** @type {?} */
    Origin.prototype.vertical;
}
export class LyTemplateMenu {
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
function LyTemplateMenu_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTemplateMenu.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTemplateMenu.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTemplateMenu.propDecorators;
    /** @type {?} */
    LyTemplateMenu.prototype._vcr;
    /** @type {?} */
    LyTemplateMenu.prototype._viewContainerRef;
}
export class LyMenu {
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
                if (true) {
                    // console.log('changes[target-origin]', changes['_targetOrigin']);
                }
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
        if (this._anchorOrigin) {
        }
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
function LyMenu_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyMenu.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyMenu.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyMenu.propDecorators;
    /** @type {?} */
    LyMenu.prototype.isIni;
    /** @type {?} */
    LyMenu.prototype._color;
    /** @type {?} */
    LyMenu.prototype.stateBg;
    /** @type {?} */
    LyMenu.prototype.widthTarget;
    /** @type {?} */
    LyMenu.prototype.heightTarget;
    /** @type {?} */
    LyMenu.prototype.rootMenu;
    /** @type {?} */
    LyMenu.prototype.xtemplateRef;
    /** @type {?} */
    LyMenu.prototype.menuAnimationsState;
    /** @type {?} */
    LyMenu.prototype.opened;
    /** @type {?} */
    LyMenu.prototype._anchorOrigin;
    /** @type {?} */
    LyMenu.prototype._targetOrigin;
    /** @type {?} */
    LyMenu.prototype._menuElement;
    /** @type {?} */
    LyMenu.prototype.templateRef;
    /** @type {?} */
    LyMenu.prototype._targetPosition;
    /** @type {?} */
    LyMenu.prototype.open;
    /** @type {?} */
    LyMenu.prototype.close;
    /** @type {?} */
    LyMenu.prototype.menuContentElement;
    /** @type {?} */
    LyMenu.prototype.menuContentRef;
    /** @type {?} */
    LyMenu.prototype.elementRef;
    /** @type {?} */
    LyMenu.prototype._viewContainerRef;
    /** @type {?} */
    LyMenu.prototype.domService;
    /** @type {?} */
    LyMenu.prototype.cd;
    /** @type {?} */
    LyMenu.prototype.sanitizer;
}
export class LyMenuTriggerFor {
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
function LyMenuTriggerFor_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyMenuTriggerFor.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyMenuTriggerFor.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyMenuTriggerFor.propDecorators;
    /** @type {?} */
    LyMenuTriggerFor.prototype.lyMenuTriggerFor;
    /** @type {?} */
    LyMenuTriggerFor.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFHVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFPVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQU1oQixZQUFZLEVBSVosaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFFWCxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxVQUFVLEVBQWUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUzlELE1BQU07Q0FHTDs7Ozs7OztBQWtCRCxNQUFNOzs7O0lBRUosWUFBbUIsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7OztJQUUzRCxRQUFRO0tBQ1A7Ozs7O0lBQ0QsSUFBSSxDQUFDLFFBQTBCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDeEM7Ozs7SUFDRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0Qjs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7OztHQVNSLENBQUM7YUFDSDs7OztZQW5EQyxnQkFBZ0I7OztxQkFxRGYsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFB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Rjs7OztZQTlSQyxVQUFVOzs7aUNBZ1NULEtBQUssU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIERpcmVjdGl2ZSxcbiAgU2ltcGxlQ2hhbmdlLFxuICBPbkNoYW5nZXMsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdExpc3RlbmVyLFxuICBBZnRlclZpZXdJbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbiAgZ3JvdXBcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEb21TZXJ2aWNlLCBMeERvbU1vZHVsZSwgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IHR5cGUgcG9zaXRpb24gPSAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcCcgfCAnYm90dG9tJyB8ICdjZW50ZXInIHwgJ21pZGRsZSc7XG5leHBvcnQgY2xhc3MgT3JpZ2luIHtcbiAgaG9yaXpvbnRhbDogcG9zaXRpb247XG4gIHZlcnRpY2FsOiBwb3NpdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGVtcGxhdGUtbWVudScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUZW1wbGF0ZU1lbnUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHRtcGwodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZygnZGVzc3QnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgc3R5bGVzOiBbYC5seS1tZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmZpeGVkO3BhZGRpbmc6OHB4IDA7bWF4LWhlaWdodDoyNDhweDtvdmVyZmxvdzphdXRvOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDA7b3BhY2l0eTowO21pbi13aWR0aDo4NHB4O3dpZHRoOi13ZWJraXQtZml0LWNvbnRlbnQ7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xNSkgMCAycHggNnB4LHJnYmEoMCwwLDAsLjE1KSAwIDFweCA0cHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjpvcGFjaXR5IDI3NW1zIGVhc2UtaW4gMHMsLXdlYmtpdC10cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDBzLG9wYWNpdHkgMjc1bXMgZWFzZS1pbiAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDBzLG9wYWNpdHkgMjc1bXMgZWFzZS1pbiAwcywtd2Via2l0LXRyYW5zZm9ybSAxNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDBzO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtO2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZn0ubHktbGlzdC14e3otaW5kZXg6MDttYXgtaGVpZ2h0OjEwMCV9Lmx5LW1lbnUgL2RlZXAvIGx5LW1lbnV7cG9zaXRpb246YWJzb2x1dGV9Lmx5LW1lbnUubHktbGlzdHtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNpdGlvbjphbGwgMHMgbGluZWFyIDBzfTpob3N0Lmx5LWxpc3QgLmx5LW1lbnV7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2l0aW9uOmFsbCAwcyBsaW5lYXIgMHM7b3BhY2l0eToxfTpob3N0Lmx5LWxpc3QgLmx5LWJhY2tncm91bmQtbWVudXtwb2ludGVyLWV2ZW50czpub25lfS5seS1tZW51Lmx5LW1lbnUtb3BlbmVkey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9Lmx5LWJhY2tncm91bmQtbWVudXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7ei1pbmRleDo5OTk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWJhY2tncm91bmQtb257cG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czphdXRvIWltcG9ydGFudH06Om5nLWRlZXAgYnV0dG9uW2x5LW1lbnUtaXRlbV17ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ4cHg7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51JywgW1xuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgYW5pbWF0ZSgnMTUwbXMgNTBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSksXG4gICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy10ZW1wbGF0ZT5cbiAgICA8ZGl2ICNfbWVudSBbQG1lbnVdPVwibWVudUFuaW1hdGlvbnNTdGF0ZVwiXG4gICAgICBjbGFzcz1cImx5LW1lbnVcIlxuICAgICAgYmc9XCJtZW51OmJnXCJcbiAgICAgIGNvbG9yPVwiY29sb3JUZXh0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRhcmdldE9yaWdpblwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cInJvb3RTdHlsZS50b3AgKyByb290U3R5bGVQb3NpdGlvbi50b3BcIlxuICAgICAgW3N0eWxlLmxlZnQucHhdPVwicm9vdFN0eWxlLmxlZnQgKyByb290U3R5bGVQb3NpdGlvbi5sZWZ0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3RhcmdldFBvc2l0aW9uIHwgYXN5bmNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJseS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIGNsYXNzPVwibHktYmFja2dyb3VuZC1tZW51IGx5LWJhY2tncm91bmQtb25cIlxuICAgIChjbGljayk9XCJoaWRkZU1lbnUoKVwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBleHBvcnRBczogJ2x5TWVudScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpc0luaSA9IGZhbHNlO1xuICBfY29sb3I6IHN0cmluZztcbiAgc3RhdGVCZyA9IGZhbHNlO1xuICB3aWR0aFRhcmdldCA9IDA7XG4gIGhlaWdodFRhcmdldCA9IDA7XG5cbiAgcm9vdE1lbnU6IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgfTtcbiAgeHRlbXBsYXRlUmVmOiBhbnk7XG4gIG1lbnVBbmltYXRpb25zU3RhdGU7XG4gIEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoJ2FuY2hvci1vcmlnaW4nKSBfYW5jaG9yT3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICBASW5wdXQoJ3RhcmdldC1vcmlnaW4nKSBfdGFyZ2V0T3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICBAVmlld0NoaWxkKCdfbWVudScpIF9tZW51RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIF90YXJnZXRQb3NpdGlvbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIG1lbnVDb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRSZWY7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlc1t0YXJnZXQtb3JpZ2luXScsIGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRhcmdldFBvc2l0aW9uKCkge1xuICAgIGxldCB2ZXJ0aWNhbCA9ICcwJScsXG4gICAgaG9yaXpvbnRhbCA9ICcwJSc7XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy0xMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHZlcnRpY2FsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdmVydGljYWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBjb25zdCBtZW51U3R5bGUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHRyYW5zbGF0ZTNkKCR7aG9yaXpvbnRhbH0sICR7dmVydGljYWx9LCAwKSBzY2FsZTNkKDEsIDEsIDEpYCk7XG4gICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24ubmV4dChtZW51U3R5bGUgYXMgc3RyaW5nKTtcbiAgfVxuICAvLyBnZXQgc2l6ZVxuICB0YXJnZXQoX2VsZW1lbnQ6IGFueSkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICdoZWlnaHQnOiBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwLFxuICAgICAgJ2xlZnQnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAndG9wJzogMCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGVQb3NpdGlvbigpIHtcbiAgICBsZXQgdG9wOiBhbnkgPSAwO1xuICAgIGxldCBsZWZ0OiBhbnkgPSAwO1xuICAgIC8vIGxldCB0b3BUYXJnZXQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IGxlZnRUYXJnZXQ6IGFueSA9IDA7XG5cbiAgICAvLyBmb3IgX2FuY2hvck9yaWdpblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQgLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCk7XG4gICAgfVxuXG4gICAgLy8gLy8gZm9yIHRhcmdldCBvcmlnaW5nXG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnY2VudGVyJykge1xuICAgIC8vICAgLy8gYW5jaG9yIG9yaWdpblxuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdib3R0b20nKSB7XG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdtaWRkbGUnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCAvIDIpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ3JpZ2h0Jykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGgpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCk7XG4gICAgLy8gfVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAvLyB0b3BUYXJnZXQ6IHRvcFRhcmdldCxcbiAgICAgIC8vIGxlZnRUYXJnZXQ6IGxlZnRUYXJnZXQsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlKCk6IGFueSB7XG4gICAgY29uc3QgbWVudVBvc2l0aW9uOiBhbnkgPSB0aGlzLnJvb3RNZW51O1xuICAgIGNvbnN0IHBvc2l0aW9uRmluYWw6IGFueSA9IG1lbnVQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4pIHtcblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uRmluYWw7XG4gIH1cbiAgZ2V0IHRhcmdldE9yaWdpbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtcbiAgICAgIHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJyA/ICdjZW50ZXInIDogdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWxcbiAgICB9ICR7dGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsfSAwYDtcbiAgfVxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMub3BlbmVkID09PSBmYWxzZSA/IHRoaXMuc2hvd01lbnUoKSA6IHRoaXMuaGlkZGVNZW51KCk7XG4gIH1cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2luJztcbiAgICB0aGlzLm1lbnVDb250ZW50UmVmID0gdGhpcy5kb21TZXJ2aWNlLmF0dGFjaDxMeVRlbXBsYXRlTWVudT4odGhpcy5fdmlld0NvbnRhaW5lclJlZiwgTHlUZW1wbGF0ZU1lbnUsIHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIC8vIHRoaXMubWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKHRoaXMubWVudUNvbnRlbnRSZWYpO1xuICAgIC8vIHRoaXMuZG9tU2VydmljZS5hZGRDaGlsZCh0aGlzLm1lbnVDb250ZW50RWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVUYXJnZXRQb3NpdGlvbigpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQmcgPSB0cnVlO1xuICAgIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICB9XG4gIGhpZGRlTWVudSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlQmcgPSBmYWxzZTtcbiAgICAvLyB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnZW5kJztcbiAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveU1lbnUoKTogdm9pZCB7XG4gICAgLy8gaWYgKHRoaXMubWVudUNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuZG9tU2VydmljZS5kZXN0cm95UmVmKHRoaXMubWVudUNvbnRlbnRSZWYsIDApO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZG9tU2VydmljZTogRG9tU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICAgIH1cbiAgfVxuXG59XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIHtcbiAgQElucHV0KCdseU1lbnVUcmlnZ2VyRm9yJykgbHlNZW51VHJpZ2dlckZvcjogTHlNZW51O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnd2lkdGgnOiByZWN0LndpZHRoLFxuICAgICAgJ2hlaWdodCc6IHJlY3QuaGVpZ2h0LFxuICAgICAgJ2xlZnQnOiByZWN0LmxlZnQsXG4gICAgICAndG9wJzogcmVjdC50b3AsXG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5seU1lbnVUcmlnZ2VyRm9yLnJvb3RNZW51ID0gdGhpcy50YXJnZXRQb3NpdGlvbigpO1xuICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci50b2dnbGVNZW51KCk7XG4gIH1cblxufVxuIl19