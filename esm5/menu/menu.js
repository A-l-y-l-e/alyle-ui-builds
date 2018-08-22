/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Input, Output, Directive, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DomService, Platform } from '@alyle/ui';
/** @typedef {?} */
var position;
export { position };
var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());
export { Origin };
if (false) {
    /** @type {?} */
    Origin.prototype.horizontal;
    /** @type {?} */
    Origin.prototype.vertical;
}
var LyTemplateMenu = /** @class */ (function () {
    function LyTemplateMenu(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    LyTemplateMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} template
     * @return {?}
     */
    LyTemplateMenu.prototype.tmpl = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        this._vcr.createEmbeddedView(template);
    };
    /**
     * @return {?}
     */
    LyTemplateMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log('desst');
    };
    LyTemplateMenu.decorators = [
        { type: Component, args: [{
                    selector: 'ly-template-menu',
                    template: "\n  <div #container></div>\n  ",
                    styles: ["\n    :host {\n      position: absolute;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    LyTemplateMenu.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    LyTemplateMenu.propDecorators = {
        _vcr: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }]
    };
    return LyTemplateMenu;
}());
export { LyTemplateMenu };
if (false) {
    /** @type {?} */
    LyTemplateMenu.prototype._vcr;
    /** @type {?} */
    LyTemplateMenu.prototype._viewContainerRef;
}
var LyMenu = /** @class */ (function () {
    function LyMenu(elementRef, _viewContainerRef, domService, cd, sanitizer) {
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
    LyMenu.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['_targetOrigin']) {
            Promise.resolve(null).then(function () {
                if (true) {
                    // console.log('changes[target-origin]', changes['_targetOrigin']);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.updateTargetPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var vertical = '0%';
        /** @type {?} */
        var horizontal = '0%';
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
        var menuStyle = this.sanitizer.bypassSecurityTrustStyle("translate3d(" + horizontal + ", " + vertical + ", 0) scale3d(1, 1, 1)");
        this._targetPosition.next(/** @type {?} */ (menuStyle));
    };
    // get size
    /**
     * @param {?} _element
     * @return {?}
     */
    LyMenu.prototype.target = /**
     * @param {?} _element
     * @return {?}
     */
    function (_element) {
        /** @type {?} */
        var element = _element;
        return {
            'width': element.offsetWidth || 0,
            'height': element.offsetHeight || 0,
            'left': element.offsetWidth || 0,
            'top': 0,
        };
    };
    Object.defineProperty(LyMenu.prototype, "rootStylePosition", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var top = 0;
            /** @type {?} */
            var left = 0;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyMenu.prototype, "rootStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var menuPosition = this.rootMenu;
            /** @type {?} */
            var positionFinal = menuPosition;
            if (this._anchorOrigin) {
            }
            return positionFinal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyMenu.prototype, "targetOrigin", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._targetOrigin.horizontal === 'middle' ? 'center' : this._targetOrigin.horizontal) + " " + this._targetOrigin.vertical + " 0";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyMenu.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        this.opened === false ? this.showMenu() : this.hiddeMenu();
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.showMenu = /**
     * @return {?}
     */
    function () {
        this.menuAnimationsState = 'in';
        this.menuContentRef = this.domService.attach(this._viewContainerRef, LyTemplateMenu, this.templateRef);
        // this.menuContentElement = this.domService.getDomElementFromComponentRef(this.menuContentRef);
        // this.domService.addChild(this.menuContentElement);
        this.updateTargetPosition();
        this.opened = true;
        this.stateBg = true;
        this.open.emit(null);
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.hiddeMenu = /**
     * @return {?}
     */
    function () {
        this.close.emit(null);
        this.opened = false;
        this.stateBg = false;
        // this.menuAnimationsState = 'end';
        this._destroyMenu();
    };
    /**
     * @return {?}
     */
    LyMenu.prototype._destroyMenu = /**
     * @return {?}
     */
    function () {
        // if (this.menuContentRef) {
        this.domService.destroyRef(this.menuContentRef, 0);
        // }
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this._destroyMenu();
        }
    };
    LyMenu.decorators = [
        { type: Component, args: [{
                    selector: 'ly-menu',
                    styles: [".ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:transform 175ms cubic-bezier(.23,1,.32,1),opacity 275ms ease-in,-webkit-transform 175ms cubic-bezier(.23,1,.32,1);will-change:opacity,transform;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:linear}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:linear;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}"],
                    animations: [
                        trigger('menu', [
                            transition(':leave', animate('150ms 50ms linear', style({ opacity: 0 }))),
                            state('in', style({
                                opacity: 1
                            })),
                            transition(':enter', animate('100ms linear'))
                        ])
                    ],
                    template: "\n  <ng-template>\n    <div #_menu [@menu]=\"menuAnimationsState\"\n      class=\"ly-menu\"\n      bg=\"menu:bg\"\n      color=\"colorText\"\n      [style.transform-origin]=\"targetOrigin\"\n      [style.top.px]=\"rootStyle.top + rootStylePosition.top\"\n      [style.left.px]=\"rootStyle.left + rootStylePosition.left\"\n      [style.transform]=\"_targetPosition | async\">\n      <div class=\"ly-menu-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div\n    class=\"ly-background-menu ly-background-on\"\n    (click)=\"hiddeMenu()\"></div>\n  </ng-template>\n  ",
                    exportAs: 'lyMenu',
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    LyMenu.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: DomService },
        { type: ChangeDetectorRef },
        { type: DomSanitizer }
    ]; };
    LyMenu.propDecorators = {
        opened: [{ type: Input }],
        _anchorOrigin: [{ type: Input, args: ['anchor-origin',] }],
        _targetOrigin: [{ type: Input, args: ['target-origin',] }],
        _menuElement: [{ type: ViewChild, args: ['_menu',] }],
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
        open: [{ type: Output }],
        close: [{ type: Output }]
    };
    return LyMenu;
}());
export { LyMenu };
if (false) {
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
var LyMenuTriggerFor = /** @class */ (function () {
    function LyMenuTriggerFor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.targetPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        /** @type {?} */
        var result = {
            'width': rect.width,
            'height': rect.height,
            'left': rect.left,
            'top': rect.top,
        };
        return result;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LyMenuTriggerFor.prototype._handleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.lyMenuTriggerFor.rootMenu = this.targetPosition();
        this.lyMenuTriggerFor.toggleMenu();
    };
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
    LyMenuTriggerFor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    LyMenuTriggerFor.propDecorators = {
        lyMenuTriggerFor: [{ type: Input, args: ['lyMenuTriggerFor',] }]
    };
    return LyMenuTriggerFor;
}());
export { LyMenuTriggerFor };
if (false) {
    /** @type {?} */
    LyMenuTriggerFor.prototype.lyMenuTriggerFor;
    /** @type {?} */
    LyMenuTriggerFor.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFHVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFPVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQU1oQixZQUFZLEVBSVosaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFFWCxNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxVQUFVLEVBQWUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBUzlELElBQUE7OztpQkFoREE7SUFtREMsQ0FBQTtBQUhELGtCQUdDOzs7Ozs7OztJQW9CQyx3QkFBbUIsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7OztJQUUzRCxpQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFDRCw2QkFBSTs7OztJQUFKLFVBQUssUUFBMEI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN4Qzs7OztJQUNELG9DQUFXOzs7SUFBWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdDQUVUO29CQUNELE1BQU0sRUFBRSxDQUFDLDhJQVNSLENBQUM7aUJBQ0g7Ozs7Z0JBbkRDLGdCQUFnQjs7O3VCQXFEZixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzt5QkF0RXBEOztTQXFFYSxjQUFjOzs7Ozs7OztJQWlNekIsZ0JBQ1UsWUFDQSxtQkFDQSxZQUNBLElBQ0E7UUFKQSxlQUFVLEdBQVYsVUFBVTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsZUFBVSxHQUFWLFVBQVU7UUFDVixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO3FCQXJKWCxLQUFLO3VCQUVILEtBQUs7MkJBQ0QsQ0FBQzs0QkFDQSxDQUFDO3dCQUVBO1lBQ2QsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQztTQUNSO3NCQUdpQixLQUFLOzZCQUN5QixFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQzs2QkFDckMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7K0JBRzFDLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQztvQkFFeEMsSUFBSSxZQUFZLEVBQUU7cUJBQ2pCLElBQUksWUFBWSxFQUFFO0tBa0lsRDs7Ozs7SUE5SEwsNEJBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN6QixJQUFJLElBQUksRUFBRTs7aUJBRVQ7YUFDRixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRUQscUNBQW9COzs7SUFBcEI7O1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUNEOztRQURsQixJQUNBLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDOUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQ3BELFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM1QyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDbkQsUUFBUSxHQUFHLE9BQU8sQ0FBQztTQUNwQjs7UUFDRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLGlCQUFlLFVBQVUsVUFBSyxRQUFRLDBCQUF1QixDQUFDLENBQUM7UUFDekgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLG1CQUFDLFNBQW1CLEVBQUMsQ0FBQztLQUNoRDtJQUNELFdBQVc7Ozs7O0lBQ1gsdUJBQU07Ozs7SUFBTixVQUFPLFFBQWE7O1FBQ2xCLElBQU0sT0FBTyxHQUFnQixRQUFRLENBQUM7UUFDdEMsT0FBTztZQUNMLE9BQU8sRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUM7WUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQztZQUNuQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztLQUNIO0lBQ0Qsc0JBQUkscUNBQWlCOzs7O1FBQXJCOztZQUNFLElBQUksR0FBRyxHQUFRLENBQUMsQ0FBQzs7WUFDakIsSUFBSSxJQUFJLEdBQVEsQ0FBQyxDQUFDOzs7O1lBS2xCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFOztnQkFFNUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQ25ELEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7WUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTs7Z0JBRTlDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO2dCQUNwRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7Ozs7Ozs7Ozs7WUFnQkQsT0FBTztnQkFDTCxHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUdYLENBQUM7U0FDSDs7O09BQUE7SUFDRCxzQkFBSSw2QkFBUzs7OztRQUFiOztZQUNFLElBQU0sWUFBWSxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUM7O1lBQ3hDLElBQU0sYUFBYSxHQUFRLFlBQVksQ0FBQztZQUV4QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7YUFHdkI7WUFFRCxPQUFPLGFBQWEsQ0FBQztTQUN0Qjs7O09BQUE7SUFDRCxzQkFBSSxnQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLFVBQ25GLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxPQUFJLENBQUM7U0FDckM7OztPQUFBOzs7O0lBQ0QsMkJBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQzVEOzs7O0lBQ0QseUJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFpQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7O1FBR3ZILElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCOzs7O0lBQ0QsMEJBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O1FBRXJCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVPLDZCQUFZOzs7OztRQUVoQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFXdkQseUJBQVE7OztJQUFSO0tBRUM7Ozs7SUFFRCxnQ0FBZTs7O0lBQWY7S0FFQzs7OztJQUNELDRCQUFXOzs7SUFBWDtRQUNFLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7Z0JBck1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsTUFBTSxFQUFFLENBQUMsKzZDQUE2NkMsQ0FBQztvQkFDdjdDLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNkLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2dDQUNoQixPQUFPLEVBQUUsQ0FBQzs2QkFDWCxDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7eUJBQzlDLENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLG1sQkFrQlQ7b0JBQ0QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQWpIQyxVQUFVO2dCQWNWLGdCQUFnQjtnQkFzQlQsVUFBVTtnQkFaakIsaUJBQWlCO2dCQUdWLFlBQVk7Ozt5QkFvR2xCLEtBQUs7Z0NBQ0wsS0FBSyxTQUFDLGVBQWU7Z0NBQ3JCLEtBQUssU0FBQyxlQUFlOytCQUNyQixTQUFTLFNBQUMsT0FBTzs4QkFDakIsU0FBUyxTQUFDLFdBQVc7dUJBR3JCLE1BQU07d0JBQ04sTUFBTTs7aUJBMUlUOztTQXFIYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStLakIsMEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7S0FBSTs7OztJQUU5Qyx5Q0FBYzs7O0lBQWQ7O1FBQ0UsSUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDOztRQUMzRCxJQUFNLElBQUksR0FBZSxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFDekQsSUFBTSxNQUFNLEdBQUc7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDaEIsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLENBQVE7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3BDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7O29CQUU5QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7aUJBQ0Y7Ozs7Z0JBOVJDLFVBQVU7OzttQ0FnU1QsS0FBSyxTQUFDLGtCQUFrQjs7MkJBblMzQjs7U0FrU2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT25DaGFuZ2VzLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGdyb3VwXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRG9tU2VydmljZSwgTHhEb21Nb2R1bGUsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyB8ICdtaWRkbGUnO1xuZXhwb3J0IGNsYXNzIE9yaWdpbiB7XG4gIGhvcml6b250YWw6IHBvc2l0aW9uO1xuICB2ZXJ0aWNhbDogcG9zaXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRlbXBsYXRlLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGVtcGxhdGVNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgX3ZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICB0bXBsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc3N0Jyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIHN0eWxlczogW2AubHktbWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpmaXhlZDtwYWRkaW5nOjhweCAwO21heC1oZWlnaHQ6MjQ4cHg7b3ZlcmZsb3c6YXV0bzstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAwO29wYWNpdHk6MDttaW4td2lkdGg6ODRweDt3aWR0aDotd2Via2l0LWZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDAgMnB4IDZweCxyZ2JhKDAsMCwwLC4xNSkgMCAxcHggNHB4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSksb3BhY2l0eSAyNzVtcyBlYXNlLWluLC13ZWJraXQtdHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7d2lsbC1jaGFuZ2U6b3BhY2l0eSx0cmFuc2Zvcm07Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5seS1saXN0LXh7ei1pbmRleDowO21heC1oZWlnaHQ6MTAwJX0ubHktbWVudSAvZGVlcC8gbHktbWVudXtwb3NpdGlvbjphYnNvbHV0ZX0ubHktbWVudS5seS1saXN0e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2l0aW9uOmxpbmVhcn06aG9zdC5seS1saXN0IC5seS1tZW51e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNpdGlvbjpsaW5lYXI7b3BhY2l0eToxfTpob3N0Lmx5LWxpc3QgLmx5LWJhY2tncm91bmQtbWVudXtwb2ludGVyLWV2ZW50czpub25lfS5seS1tZW51Lmx5LW1lbnUtb3BlbmVkey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9Lmx5LWJhY2tncm91bmQtbWVudXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7ei1pbmRleDo5OTk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWJhY2tncm91bmQtb257cG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czphdXRvIWltcG9ydGFudH06Om5nLWRlZXAgYnV0dG9uW2x5LW1lbnUtaXRlbV17ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ4cHg7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51JywgW1xuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgYW5pbWF0ZSgnMTUwbXMgNTBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSksXG4gICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy10ZW1wbGF0ZT5cbiAgICA8ZGl2ICNfbWVudSBbQG1lbnVdPVwibWVudUFuaW1hdGlvbnNTdGF0ZVwiXG4gICAgICBjbGFzcz1cImx5LW1lbnVcIlxuICAgICAgYmc9XCJtZW51OmJnXCJcbiAgICAgIGNvbG9yPVwiY29sb3JUZXh0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRhcmdldE9yaWdpblwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cInJvb3RTdHlsZS50b3AgKyByb290U3R5bGVQb3NpdGlvbi50b3BcIlxuICAgICAgW3N0eWxlLmxlZnQucHhdPVwicm9vdFN0eWxlLmxlZnQgKyByb290U3R5bGVQb3NpdGlvbi5sZWZ0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3RhcmdldFBvc2l0aW9uIHwgYXN5bmNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJseS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIGNsYXNzPVwibHktYmFja2dyb3VuZC1tZW51IGx5LWJhY2tncm91bmQtb25cIlxuICAgIChjbGljayk9XCJoaWRkZU1lbnUoKVwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBleHBvcnRBczogJ2x5TWVudScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpc0luaSA9IGZhbHNlO1xuICBfY29sb3I6IHN0cmluZztcbiAgc3RhdGVCZyA9IGZhbHNlO1xuICB3aWR0aFRhcmdldCA9IDA7XG4gIGhlaWdodFRhcmdldCA9IDA7XG5cbiAgcm9vdE1lbnU6IGFueSA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgfTtcbiAgeHRlbXBsYXRlUmVmOiBhbnk7XG4gIG1lbnVBbmltYXRpb25zU3RhdGU7XG4gIEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xuICBASW5wdXQoJ2FuY2hvci1vcmlnaW4nKSBfYW5jaG9yT3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICBASW5wdXQoJ3RhcmdldC1vcmlnaW4nKSBfdGFyZ2V0T3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICBAVmlld0NoaWxkKCdfbWVudScpIF9tZW51RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIF90YXJnZXRQb3NpdGlvbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIG1lbnVDb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRSZWY7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlc1t0YXJnZXQtb3JpZ2luXScsIGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRhcmdldFBvc2l0aW9uKCkge1xuICAgIGxldCB2ZXJ0aWNhbCA9ICcwJScsXG4gICAgaG9yaXpvbnRhbCA9ICcwJSc7XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy0xMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHZlcnRpY2FsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdmVydGljYWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBjb25zdCBtZW51U3R5bGUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHRyYW5zbGF0ZTNkKCR7aG9yaXpvbnRhbH0sICR7dmVydGljYWx9LCAwKSBzY2FsZTNkKDEsIDEsIDEpYCk7XG4gICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24ubmV4dChtZW51U3R5bGUgYXMgc3RyaW5nKTtcbiAgfVxuICAvLyBnZXQgc2l6ZVxuICB0YXJnZXQoX2VsZW1lbnQ6IGFueSkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICdoZWlnaHQnOiBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwLFxuICAgICAgJ2xlZnQnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAndG9wJzogMCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGVQb3NpdGlvbigpIHtcbiAgICBsZXQgdG9wOiBhbnkgPSAwO1xuICAgIGxldCBsZWZ0OiBhbnkgPSAwO1xuICAgIC8vIGxldCB0b3BUYXJnZXQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IGxlZnRUYXJnZXQ6IGFueSA9IDA7XG5cbiAgICAvLyBmb3IgX2FuY2hvck9yaWdpblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQgLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCk7XG4gICAgfVxuXG4gICAgLy8gLy8gZm9yIHRhcmdldCBvcmlnaW5nXG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnY2VudGVyJykge1xuICAgIC8vICAgLy8gYW5jaG9yIG9yaWdpblxuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdib3R0b20nKSB7XG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdtaWRkbGUnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCAvIDIpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ3JpZ2h0Jykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGgpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCk7XG4gICAgLy8gfVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAvLyB0b3BUYXJnZXQ6IHRvcFRhcmdldCxcbiAgICAgIC8vIGxlZnRUYXJnZXQ6IGxlZnRUYXJnZXQsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlKCk6IGFueSB7XG4gICAgY29uc3QgbWVudVBvc2l0aW9uOiBhbnkgPSB0aGlzLnJvb3RNZW51O1xuICAgIGNvbnN0IHBvc2l0aW9uRmluYWw6IGFueSA9IG1lbnVQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4pIHtcblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uRmluYWw7XG4gIH1cbiAgZ2V0IHRhcmdldE9yaWdpbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtcbiAgICAgIHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJyA/ICdjZW50ZXInIDogdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWxcbiAgICB9ICR7dGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsfSAwYDtcbiAgfVxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMub3BlbmVkID09PSBmYWxzZSA/IHRoaXMuc2hvd01lbnUoKSA6IHRoaXMuaGlkZGVNZW51KCk7XG4gIH1cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2luJztcbiAgICB0aGlzLm1lbnVDb250ZW50UmVmID0gdGhpcy5kb21TZXJ2aWNlLmF0dGFjaDxMeVRlbXBsYXRlTWVudT4odGhpcy5fdmlld0NvbnRhaW5lclJlZiwgTHlUZW1wbGF0ZU1lbnUsIHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIC8vIHRoaXMubWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKHRoaXMubWVudUNvbnRlbnRSZWYpO1xuICAgIC8vIHRoaXMuZG9tU2VydmljZS5hZGRDaGlsZCh0aGlzLm1lbnVDb250ZW50RWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVUYXJnZXRQb3NpdGlvbigpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQmcgPSB0cnVlO1xuICAgIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICB9XG4gIGhpZGRlTWVudSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlQmcgPSBmYWxzZTtcbiAgICAvLyB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnZW5kJztcbiAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveU1lbnUoKTogdm9pZCB7XG4gICAgLy8gaWYgKHRoaXMubWVudUNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuZG9tU2VydmljZS5kZXN0cm95UmVmKHRoaXMubWVudUNvbnRlbnRSZWYsIDApO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZG9tU2VydmljZTogRG9tU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICAgIH1cbiAgfVxuXG59XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIHtcbiAgQElucHV0KCdseU1lbnVUcmlnZ2VyRm9yJykgbHlNZW51VHJpZ2dlckZvcjogTHlNZW51O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAnd2lkdGgnOiByZWN0LndpZHRoLFxuICAgICAgJ2hlaWdodCc6IHJlY3QuaGVpZ2h0LFxuICAgICAgJ2xlZnQnOiByZWN0LmxlZnQsXG4gICAgICAndG9wJzogcmVjdC50b3AsXG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5seU1lbnVUcmlnZ2VyRm9yLnJvb3RNZW51ID0gdGhpcy50YXJnZXRQb3NpdGlvbigpO1xuICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci50b2dnbGVNZW51KCk7XG4gIH1cblxufVxuIl19