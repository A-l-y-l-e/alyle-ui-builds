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
var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());
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
        { type: ViewContainerRef, },
    ]; };
    LyTemplateMenu.propDecorators = {
        "_vcr": [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
    };
    return LyTemplateMenu;
}());
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
        var /** @type {?} */ vertical = '0%', /** @type {?} */
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
        var /** @type {?} */ menuStyle = this.sanitizer.bypassSecurityTrustStyle("translate3d(" + horizontal + ", " + vertical + ", 0) scale3d(1, 1, 1)");
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
        var /** @type {?} */ element = _element;
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
            var /** @type {?} */ top = 0;
            var /** @type {?} */ left = 0;
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
            var /** @type {?} */ menuPosition = this.rootMenu;
            var /** @type {?} */ positionFinal = menuPosition;
            if (this._anchorOrigin) ;
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
                    styles: [".ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:opacity 275ms ease-in 0s,-webkit-transform 175ms cubic-bezier(.23,1,.32,1) 0s;transition:transform 175ms cubic-bezier(.23,1,.32,1) 0s,opacity 275ms ease-in 0s;transition:transform 175ms cubic-bezier(.23,1,.32,1) 0s,opacity 275ms ease-in 0s,-webkit-transform 175ms cubic-bezier(.23,1,.32,1) 0s;will-change:opacity,transform;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:all 0s linear 0s}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:all 0s linear 0s;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}"],
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
        { type: ElementRef, },
        { type: ViewContainerRef, },
        { type: DomService, },
        { type: ChangeDetectorRef, },
        { type: DomSanitizer, },
    ]; };
    LyMenu.propDecorators = {
        "opened": [{ type: Input },],
        "_anchorOrigin": [{ type: Input, args: ['anchor-origin',] },],
        "_targetOrigin": [{ type: Input, args: ['target-origin',] },],
        "_menuElement": [{ type: ViewChild, args: ['_menu',] },],
        "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
        "open": [{ type: Output },],
        "close": [{ type: Output },],
    };
    return LyMenu;
}());
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
        var /** @type {?} */ element = this.elementRef.nativeElement;
        var /** @type {?} */ rect = element.getBoundingClientRect();
        var /** @type {?} */ result = {
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
        { type: ElementRef, },
    ]; };
    LyMenuTriggerFor.propDecorators = {
        "lyMenuTriggerFor": [{ type: Input, args: ['lyMenuTriggerFor',] },],
    };
    return LyMenuTriggerFor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyMenuModule = /** @class */ (function () {
    function LyMenuModule() {
    }
    LyMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyCommonModule, LxDomModule],
                    exports: [LyMenu, LyMenuTriggerFor],
                    declarations: [LyMenu, LyMenuTriggerFor, LyTemplateMenu],
                },] },
    ];
    return LyMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { Origin, LyTemplateMenu, LyMenu, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT25DaGFuZ2VzLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGdyb3VwXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRG9tU2VydmljZSwgTHhEb21Nb2R1bGUsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyB8ICdtaWRkbGUnO1xuZXhwb3J0IGNsYXNzIE9yaWdpbiB7XG4gIGhvcml6b250YWw6IHBvc2l0aW9uO1xuICB2ZXJ0aWNhbDogcG9zaXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRlbXBsYXRlLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGVtcGxhdGVNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgX3ZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICB0bXBsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc3N0Jyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIHN0eWxlczogW2AubHktbWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpmaXhlZDtwYWRkaW5nOjhweCAwO21heC1oZWlnaHQ6MjQ4cHg7b3ZlcmZsb3c6YXV0bzstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAwO29wYWNpdHk6MDttaW4td2lkdGg6ODRweDt3aWR0aDotd2Via2l0LWZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDAgMnB4IDZweCxyZ2JhKDAsMCwwLC4xNSkgMCAxcHggNHB4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246b3BhY2l0eSAyNzVtcyBlYXNlLWluIDBzLC13ZWJraXQtdHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyxvcGFjaXR5IDI3NW1zIGVhc2UtaW4gMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyxvcGFjaXR5IDI3NW1zIGVhc2UtaW4gMHMsLXdlYmtpdC10cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwczt3aWxsLWNoYW5nZTpvcGFjaXR5LHRyYW5zZm9ybTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lmx5LWxpc3QteHt6LWluZGV4OjA7bWF4LWhlaWdodDoxMDAlfS5seS1tZW51IC9kZWVwLyBseS1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5seS1tZW51Lmx5LWxpc3R7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zaXRpb246YWxsIDBzIGxpbmVhciAwc306aG9zdC5seS1saXN0IC5seS1tZW51e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNpdGlvbjphbGwgMHMgbGluZWFyIDBzO29wYWNpdHk6MX06aG9zdC5seS1saXN0IC5seS1iYWNrZ3JvdW5kLW1lbnV7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktbWVudS5seS1tZW51LW9wZW5lZHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5seS1iYWNrZ3JvdW5kLW1lbnV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO3otaW5kZXg6OTk5Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5seS1iYWNrZ3JvdW5kLW9ue3BvaW50ZXItZXZlbnRzOmFsbCFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6YXV0byFpbXBvcnRhbnR9OjpuZy1kZWVwIGJ1dHRvbltseS1tZW51LWl0ZW1de2Rpc3BsYXk6YmxvY2s7bWluLWhlaWdodDo0OHB4O2JvcmRlci1yYWRpdXM6MDt3aWR0aDoxMDAlfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbWVudScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIGFuaW1hdGUoJzE1MG1zIDUwbXMgbGluZWFyJywgc3R5bGUoe29wYWNpdHk6IDB9KSkpLFxuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctdGVtcGxhdGU+XG4gICAgPGRpdiAjX21lbnUgW0BtZW51XT1cIm1lbnVBbmltYXRpb25zU3RhdGVcIlxuICAgICAgY2xhc3M9XCJseS1tZW51XCJcbiAgICAgIGJnPVwibWVudTpiZ1wiXG4gICAgICBjb2xvcj1cImNvbG9yVGV4dFwiXG4gICAgICBbc3R5bGUudHJhbnNmb3JtLW9yaWdpbl09XCJ0YXJnZXRPcmlnaW5cIlxuICAgICAgW3N0eWxlLnRvcC5weF09XCJyb290U3R5bGUudG9wICsgcm9vdFN0eWxlUG9zaXRpb24udG9wXCJcbiAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInJvb3RTdHlsZS5sZWZ0ICsgcm9vdFN0eWxlUG9zaXRpb24ubGVmdFwiXG4gICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIl90YXJnZXRQb3NpdGlvbiB8IGFzeW5jXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibHktbWVudS1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICBjbGFzcz1cImx5LWJhY2tncm91bmQtbWVudSBseS1iYWNrZ3JvdW5kLW9uXCJcbiAgICAoY2xpY2spPVwiaGlkZGVNZW51KClcIj48L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZXhwb3J0QXM6ICdseU1lbnUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNJbmkgPSBmYWxzZTtcbiAgX2NvbG9yOiBzdHJpbmc7XG4gIHN0YXRlQmcgPSBmYWxzZTtcbiAgd2lkdGhUYXJnZXQgPSAwO1xuICBoZWlnaHRUYXJnZXQgPSAwO1xuXG4gIHJvb3RNZW51OiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gIH07XG4gIHh0ZW1wbGF0ZVJlZjogYW55O1xuICBtZW51QW5pbWF0aW9uc1N0YXRlO1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCdhbmNob3Itb3JpZ2luJykgX2FuY2hvck9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgQElucHV0KCd0YXJnZXQtb3JpZ2luJykgX3RhcmdldE9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgQFZpZXdDaGlsZCgnX21lbnUnKSBfbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfdGFyZ2V0UG9zaXRpb246IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBtZW51Q29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIG1lbnVDb250ZW50UmVmO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snX3RhcmdldE9yaWdpbiddKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXNbdGFyZ2V0LW9yaWdpbl0nLCBjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUYXJnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgdmVydGljYWwgPSAnMCUnLFxuICAgIGhvcml6b250YWwgPSAnMCUnO1xuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIGhvcml6b250YWwgPSAnLTUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctMTAwJSc7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHZlcnRpY2FsID0gJy0xMDAlJztcbiAgICB9XG4gICAgY29uc3QgbWVudVN0eWxlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB0cmFuc2xhdGUzZCgke2hvcml6b250YWx9LCAke3ZlcnRpY2FsfSwgMCkgc2NhbGUzZCgxLCAxLCAxKWApO1xuICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uLm5leHQobWVudVN0eWxlIGFzIHN0cmluZyk7XG4gIH1cbiAgLy8gZ2V0IHNpemVcbiAgdGFyZ2V0KF9lbGVtZW50OiBhbnkpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IF9lbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAnaGVpZ2h0JzogZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMCxcbiAgICAgICdsZWZ0JzogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgJ3RvcCc6IDAsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlUG9zaXRpb24oKSB7XG4gICAgbGV0IHRvcDogYW55ID0gMDtcbiAgICBsZXQgbGVmdDogYW55ID0gMDtcbiAgICAvLyBsZXQgdG9wVGFyZ2V0OiBhbnkgPSAwO1xuICAgIC8vIGxldCBsZWZ0VGFyZ2V0OiBhbnkgPSAwO1xuXG4gICAgLy8gZm9yIF9hbmNob3JPcmlnaW5cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgLy8gYW5jaG9yIG9yaWdpblxuICAgICAgdG9wID0gKHRoaXMucm9vdE1lbnUuaGVpZ2h0IC8gMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICBsZWZ0ID0gKHRoaXMucm9vdE1lbnUud2lkdGggLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBsZWZ0ID0gKHRoaXMucm9vdE1lbnUud2lkdGgpO1xuICAgIH1cblxuICAgIC8vIC8vIGZvciB0YXJnZXQgb3JpZ2luZ1xuICAgIC8vIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT0gJ2NlbnRlcicpIHtcbiAgICAvLyAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAvLyAgIHRvcFRhcmdldCA9IC0odGhpcy5oZWlnaHRUYXJnZXQgLyAyKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnYm90dG9tJykge1xuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PSAnbWlkZGxlJykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGggLyAyKTtcbiAgICAvLyAgIGxlZnRUYXJnZXQgPSAtKHRoaXMud2lkdGhUYXJnZXQgLyAyKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdyaWdodCcpIHtcbiAgICAvLyAgIC8vIGxlZnRUYXJnZXQgPSAodGhpcy50YXJnZXQodGhpcy5fbWVudUVsZW1lbnQpLndpZHRoKTtcbiAgICAvLyAgIGxlZnRUYXJnZXQgPSAtKHRoaXMud2lkdGhUYXJnZXQpO1xuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0b3AsXG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgLy8gdG9wVGFyZ2V0OiB0b3BUYXJnZXQsXG4gICAgICAvLyBsZWZ0VGFyZ2V0OiBsZWZ0VGFyZ2V0LFxuICAgIH07XG4gIH1cbiAgZ2V0IHJvb3RTdHlsZSgpOiBhbnkge1xuICAgIGNvbnN0IG1lbnVQb3NpdGlvbjogYW55ID0gdGhpcy5yb290TWVudTtcbiAgICBjb25zdCBwb3NpdGlvbkZpbmFsOiBhbnkgPSBtZW51UG9zaXRpb247XG5cbiAgICBpZiAodGhpcy5fYW5jaG9yT3JpZ2luKSB7XG5cblxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbkZpbmFsO1xuICB9XG4gIGdldCB0YXJnZXRPcmlnaW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7XG4gICAgICB0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScgPyAnY2VudGVyJyA6IHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsXG4gICAgfSAke3RoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbH0gMGA7XG4gIH1cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLm9wZW5lZCA9PT0gZmFsc2UgPyB0aGlzLnNob3dNZW51KCkgOiB0aGlzLmhpZGRlTWVudSgpO1xuICB9XG4gIHNob3dNZW51KCkge1xuICAgIHRoaXMubWVudUFuaW1hdGlvbnNTdGF0ZSA9ICdpbic7XG4gICAgdGhpcy5tZW51Q29udGVudFJlZiA9IHRoaXMuZG9tU2VydmljZS5hdHRhY2g8THlUZW1wbGF0ZU1lbnU+KHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIEx5VGVtcGxhdGVNZW51LCB0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAvLyB0aGlzLm1lbnVDb250ZW50RWxlbWVudCA9IHRoaXMuZG9tU2VydmljZS5nZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZih0aGlzLm1lbnVDb250ZW50UmVmKTtcbiAgICAvLyB0aGlzLmRvbVNlcnZpY2UuYWRkQ2hpbGQodGhpcy5tZW51Q29udGVudEVsZW1lbnQpO1xuICAgIHRoaXMudXBkYXRlVGFyZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUJnID0gdHJ1ZTtcbiAgICB0aGlzLm9wZW4uZW1pdChudWxsKTtcbiAgfVxuICBoaWRkZU1lbnUoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZUJnID0gZmFsc2U7XG4gICAgLy8gdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2VuZCc7XG4gICAgdGhpcy5fZGVzdHJveU1lbnUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lNZW51KCk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLm1lbnVDb250ZW50UmVmKSB7XG4gICAgICB0aGlzLmRvbVNlcnZpY2UuZGVzdHJveVJlZih0aGlzLm1lbnVDb250ZW50UmVmLCAwKTtcbiAgICAvLyB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGRvbVNlcnZpY2U6IERvbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHsgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZGVzdHJveU1lbnUoKTtcbiAgICB9XG4gIH1cblxufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciB7XG4gIEBJbnB1dCgnbHlNZW51VHJpZ2dlckZvcicpIGx5TWVudVRyaWdnZXJGb3I6IEx5TWVudTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHRhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgJ3dpZHRoJzogcmVjdC53aWR0aCxcbiAgICAgICdoZWlnaHQnOiByZWN0LmhlaWdodCxcbiAgICAgICdsZWZ0JzogcmVjdC5sZWZ0LFxuICAgICAgJ3RvcCc6IHJlY3QudG9wLFxuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljayhlOiBFdmVudCkge1xuICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci5yb290TWVudSA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3IudG9nZ2xlTWVudSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEx5TWVudVRyaWdnZXJGb3IsIEx5VGVtcGxhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5TWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnVdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFnREE7OztpQkFoREE7SUFtREMsQ0FBQTtBQUhEO0lBdUJFLHdC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