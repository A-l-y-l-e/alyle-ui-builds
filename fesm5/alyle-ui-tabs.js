import { Component, Directive, Renderer, ElementRef, Input, ContentChildren, ContentChild, ViewContainerRef, ViewChild, TemplateRef, forwardRef, Output, EventEmitter, Optional, NgModule } from '@angular/core';
import { LyButton } from '@alyle/ui/button';
import { CommonModule } from '@angular/common';
import { LyHeaderPaginationModule } from '@alyle/ui/header-pagination';
import { LyRippleModule } from '@alyle/ui/ripple';
import { NgTranscludeModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyTabGroupComponent = /** @class */ (function () {
    function LyTabGroupComponent(elementRef, renderer, viewContainerRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this._bg = 'rgba(0, 0, 0, 0)';
        this._color = 'primary';
        this.tabRows = 0;
        this._selectedIndex = 0;
        this.tabWidth = 0;
        this.tabLeft = 0;
        this._isInitialized = false;
        this.selectedIndexChange = new EventEmitter();
    }
    Object.defineProperty(LyTabGroupComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () { return this._selectedIndex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.tabs) {
                if (this.tabs.toArray()[value]) {
                    this.tabs.toArray()[value].setIndex(value);
                }
            }
            else {
                // this.updateTabsHeader();
                this._selectedIndex = value;
            }
            // if (value) {
            // }
            // if (this._isInitialized == true) {
            //   if (this.tabRows != this.tabs.length) {
            //     this.tabRows = this.tabs.length;
            //   }
            // }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateTabsHeader();
        this.tabRows = this.tabs.length;
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    LyTabGroupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['selectedIndex']) {
            if (!changes['selectedIndex'].firstChange) {
                var /** @type {?} */ index = changes['selectedIndex'].currentValue;
                var /** @type {?} */ tabRef = this._tabsContent.nativeElement;
            }
        }
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.setTab = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.updateTab = /**
     * @return {?}
     */
    function () {
        // this.updateTabsHeader();
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.updateTabsHeader = /**
     * @return {?}
     */
    function () {
        if (!this.tabs) {
            return;
        }
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.tabRows != this.tabs.length && this._isInitialized == true) {
            this.tabRows = this.tabs.length;
            // this.updateTabsHeader();
        }
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    LyTabGroupComponent.prototype.updateTabIndicator = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        var _this = this;
        if (!tab) {
            return;
        }
        Promise.resolve(null).then(function () {
            _this.tabWidth = tab.offsetWidth;
            _this.tabLeft = tab.offsetLeft;
        });
    };
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    LyTabGroupComponent.prototype.sMargin = /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    function (tab, index) {
        if (index === 0) {
            this._margin = tab.offsetLeft * 2;
        }
    };
    /**
     * @return {?}
     */
    LyTabGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
             * TODO: fix--> recibir el enevto del boton, crear evento del boton y actualizar line
             */
        this.tabs.forEach(function (item, index) {
            _this.sMargin(item.elementRef.nativeElement, index);
            item._index = index;
            var /** @type {?} */ tabRef = item.elementRef.nativeElement;
            if (_this._selectedIndex == index && !!tabRef) {
                if (!!item.lyButton) ;
                else {
                    _this.updateTabIndicator(tabRef);
                }
            }
        });
        this.tabs.changes.subscribe(function (tabs) {
            tabs.forEach(function (item, index) {
                var /** @type {?} */ tabRef = item.elementRef.nativeElement;
                _this.sMargin(tabRef, index);
                item._index = index;
                if (_this._selectedIndex == index && !!tabRef) {
                    _this.updateTabIndicator(tabRef);
                }
            });
        });
    };
    LyTabGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ly-tab-group, ly-tabs',
                    styles: [":host{position:relative;display:block}.ly-tab-header{height:48px;width:100%;position:relative}.ly-tab-header::after{content:' ';position:absolute;bottom:0;left:0;right:0;height:1px;background-color:rgba(0,0,0,.06)}.ly-tab-header-content{display:inline-flex}.ly-tab-indicator{position:absolute;height:2px;width:0;background:currentColor;bottom:0;transition:all 450ms cubic-bezier(.23,1,.32,1) 0s!important}"],
                    template: "<div class=\"ly-tab-header\">\n  <ly-header-pagination>\n    <!-- <div class=\"ly-tab-header-content\" [style.background]=\"styleBackground\" #tabsContent> -->\n    <div class=\"ly-tab-header-content\" #tabsContent>\n      <ng-content></ng-content>\n    </div>\n    <!-- <div\n    class=\"ly-tab-indicator\"\n    [style.color]=\"styleColor\"\n    [style.width]=\"tabWidth+'px'\"\n    [style.left]=\"tabLeft+'px'\"></div> -->\n    <div\n    class=\"ly-tab-indicator\"\n    [style.width]=\"tabWidth+'px'\"\n    [style.left]=\"tabLeft+'px'\"></div>\n  </ly-header-pagination>\n</div>\n<div *ngFor=\"let item of tabs; let i = index\">\n  <div [hidden]=\"!(i == _selectedIndex)\">\n    <ng-template [ngTransclude]=\"item.templateRef\"></ng-template>\n  </div>\n</div>\n<!-- <div [ngTransclude]=\"t.tabContent\" *ngFor=\"let t of tabs\">\n  ehhh\n</div> -->\n",
                },] },
    ];
    /** @nocollapse */
    LyTabGroupComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: ViewContainerRef, },
    ]; };
    LyTabGroupComponent.propDecorators = {
        "tabs": [{ type: ContentChildren, args: [forwardRef(function () { return LyTab; }),] },],
        "lyButton": [{ type: ContentChild, args: [LyButton,] },],
        "_tabsContent": [{ type: ViewChild, args: ['tabsContent',] },],
        "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
        "selectedIndex": [{ type: Input },],
        "selectedIndexChange": [{ type: Output },],
    };
    return LyTabGroupComponent;
}());
var LyTabContent = /** @class */ (function () {
    function LyTabContent() {
    }
    LyTabContent.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-tab-content]',
                },] },
    ];
    return LyTabContent;
}());
var LyTab = /** @class */ (function () {
    function LyTab(lyTabGroup, elementRef) {
        this.elementRef = elementRef;
        this._index = 0;
        this._indexGroup = 0;
        this.lyTabGroup = lyTabGroup;
        this._indexGroup = this.lyTabGroup._selectedIndex;
    }
    Object.defineProperty(LyTab.prototype, "tabStyles", {
        get: /**
         * @return {?}
         */
        function () {
            return { color: 'currentColor' };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {...?} arg
     * @return {?}
     */
    LyTab.prototype.llOorr = /**
     * @param {...?} arg
     * @return {?}
     */
    function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        return arg[0] < arg[1] ? 'r' : 'l';
    };
    /**
     * @return {?}
     */
    LyTab.prototype.solt = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} index
     * @return {?}
     */
    LyTab.prototype.emitChange = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.lyTabGroup.selectedIndexChange.emit(index);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    LyTab.prototype.widthExacta = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        return elem.offsetWidth;
        // if (typeof elem.getBoundingClientRect !== typeof undefined) {
        //   return elem.getBoundingClientRect().width;
        // } else {
        //   return elem.offsetWidth;
        // }
    };
    /**
     * @param {?} num
     * @return {?}
     */
    LyTab.prototype.floor = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        // return Math.round(num);
        return (num);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    LyTab.prototype.setIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        var /** @type {?} */ ev = /** @type {?} */ (this.elementRef.nativeElement);
        var /** @type {?} */ restWi = 0;
        var /** @type {?} */ tabLabel = /** @type {?} */ (this.elementRef.nativeElement);
        restWi = this.widthExacta(ev) - this.widthExacta(tabLabel);
        // ev = tabLabel as HTMLElement;
        var /** @type {?} */ w = this.floor(this.lyTabGroup._tabsContent.nativeElement.offsetWidth);
        var /** @type {?} */ llOorr = this.llOorr(this.lyTabGroup._selectedIndex, index);
        var /** @type {?} */ prevIndex = this.lyTabGroup._selectedIndex;
        var /** @type {?} */ eve;
        this.lyTabGroup._selectedIndex = index;
        // this.lyTabGroup.updateTabsHeader();
        var /** @type {?} */ dW;
        var /** @type {?} */ dL;
        // let outEf: any = setTimeout(() => {});
        // clearTimeout(outEf);
        if (this.lyTabGroup.timeout) {
            // this.lyTabGroup.timeout.callback();
            clearTimeout(this.lyTabGroup.timeout);
            this.lyTabGroup.timeout = null;
        }
        // if (tabLabel.className != 'ly-tab-label-item') {
        //   eve = getParents(tabLabel, '.ly-tab-label-item');
        //   dW = getParents(tabLabel, '.ly-tab-label-item').offsetWidth;
        //   dL = getParents(tabLabel, '.ly-tab-label-item').offsetLeft;
        // } else {
        eve = ev;
        dW = this.floor(tabLabel.offsetWidth);
        dL = this.floor(tabLabel.offsetLeft);
        // }
        if (llOorr === 'r') {
            // this.lyTabGroup.tabWidth = dW;
            // this.lyTabGroup.tabLeft  = dL;
            // this.lyTabGroup.tabWidth = w - dL;
            // this.lyTabGroup.tabLeft  = dL;
            var /** @type {?} */ sibsW = 0;
            var /** @type {?} */ sibsID = [];
            var /** @type {?} */ thisW = eve.previousSibling.offsetWidth;
            // clearTimeout(outEf);
            this.lyTabGroup.timeout = setTimeout(function () {
                _this.lyTabGroup.tabWidth = dW;
                _this.lyTabGroup.tabLeft = dL;
                _this.lyTabGroup.timeout = null;
                _this.lyTabGroup.selectedIndexChange.emit(index);
            }, 475);
            while (eve = eve.previousSibling) {
                if (eve.nodeName === 'LY-TAB') {
                    sibsID.push(eve);
                }
            }
            sibsID.reverse();
            for (var /** @type {?} */ i = 0; i < sibsID.length; i++) {
                if (prevIndex <= i) {
                    sibsW = sibsID[i].offsetWidth + sibsW + (this.lyTabGroup._margin || 0);
                }
            }
            this.lyTabGroup.tabWidth = sibsW + dW;
        }
        else if (llOorr === 'l') {
            var /** @type {?} */ sibsW = 0;
            var /** @type {?} */ sibsID = [];
            // let thisW = eve.previousSibling.offsetWidth;
            prevIndex = (this.lyTabGroup.tabRows - 1) - prevIndex;
            this.lyTabGroup.timeout = setTimeout(function () {
                _this.lyTabGroup.tabLeft = dL;
                _this.lyTabGroup.tabWidth = dW;
                _this.lyTabGroup.timeout = null;
                _this.lyTabGroup.selectedIndexChange.emit(index);
            }, 475);
            while (eve = eve.nextSibling) {
                if (eve.nodeName === 'LY-TAB') {
                    sibsID.push(eve);
                }
            }
            sibsID.reverse();
            for (var /** @type {?} */ i = 0; i < sibsID.length; i++) {
                if (i >= prevIndex) {
                    sibsW = sibsID[i].offsetWidth + sibsW + (this.lyTabGroup._margin || 0);
                }
            }
            this.lyTabGroup.tabWidth = sibsW + dW;
            this.lyTabGroup.tabLeft = dL;
            // this.lyTabGroup.tabWidth = dW;
            // this.lyTabGroup.tabLeft  = dL;
        }
    };
    /**
     * @return {?}
     */
    LyTab.prototype.updateTabLine = /**
     * @return {?}
     */
    function () {
        // this.lyTabGroup._selectedIndex = index;
        // this.lyTabGroup.tabWidth = ev.offsetWidth;
        // this.lyTabGroup.tabLeft = ev.offsetLeft;
    };
    Object.defineProperty(LyTab.prototype, "indexGroup", {
        get: /**
         * @return {?}
         */
        function () {
            this._indexGroup = this.lyTabGroup._selectedIndex;
            return this._indexGroup;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTab.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.stateTab = !(this._index == this.indexGroup);
        if (this.stateTab) ;
    };
    LyTab.decorators = [
        { type: Component, args: [{
                    selector: 'ly-tab',
                    styles: [".ly-tab-label-item{position:relative;display:inline-block;min-width:0;height:100%;overflow:hidden;text-align:center;line-height:48px;cursor:pointer;box-sizing:border-box}:host{margin:0 8px}:host /deep/ [ly-tab-label]{display:block}.ly-tab-label-item /deep/{-webkit-tap-highlight-color:transparent}.ly-tab-label-item /deep/ [ly-button],.ly-tab-label-item /deep/ ly-button{height:100%;vertical-align:top;border-radius:0}.ly-tab-label-item /deep/ .ly-button-padding-left{padding-left:8px}.ly-tab-label-item /deep/ .ly-button-padding-right{padding-right:8px}.ly-tab-label-item /deep/ ly-tab-label:not([ly-button]){padding:0 8px;display:inline-flex;white-space:nowrap}"],
                    template: "<!-- <button ly-button (mousedown)=\"solt()\" (click)=\"setIndex(_index)\" class=\"ly-tab-label-item\">\n  <ng-content select=\"ly-tab-label\"></ng-content>\n</button> -->\n<div (mousedown)=\"solt()\" (click)=\"setIndex(_index)\" [ngStyle]=\"tabStyles\" class=\"ly-tab-label-item\" lyRipple>\n  <ng-content select=\"ly-tab-label\"></ng-content>\n  <ng-content select=\"[ly-tab-label]\"></ng-content>\n</div>\n<ng-template>\n<div>\n  <ng-content></ng-content>\n</div>\n</ng-template>\n",
                },] },
    ];
    /** @nocollapse */
    LyTab.ctorParameters = function () { return [
        { type: LyTabGroupComponent, decorators: [{ type: Optional },] },
        { type: ElementRef, },
    ]; };
    LyTab.propDecorators = {
        "lyButton": [{ type: ContentChild, args: [LyButton,] },],
        "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
    };
    return LyTab;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyTabLabelDirective = /** @class */ (function () {
    function LyTabLabelDirective() {
    }
    LyTabLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-tab-label, [ly-tab-label]'
                },] },
    ];
    return LyTabLabelDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyTabsModule = /** @class */ (function () {
    function LyTabsModule() {
    }
    LyTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, LyRippleModule, LyHeaderPaginationModule, NgTranscludeModule],
                    exports: [LyTab, LyTabGroupComponent, LyTabLabelDirective, LyTabContent],
                    declarations: [LyTab, LyTabGroupComponent, LyTabLabelDirective, LyTabContent]
                },] },
    ];
    return LyTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyTabsModule, LyTabGroupComponent, LyTabContent, LyTab, LyTabLabelDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWxhYmVsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFJlbmRlcmVyLFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIGZvcndhcmRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgSG9zdEJpbmRpbmcsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPcHRpb25hbCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBnZXRQYXJlbnRzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvYnV0dG9uJztcblxubGV0IGlkVGFiID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiLWdyb3VwLCBseS10YWJzJyxcbiAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9Lmx5LXRhYi1oZWFkZXJ7aGVpZ2h0OjQ4cHg7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZX0ubHktdGFiLWhlYWRlcjo6YWZ0ZXJ7Y29udGVudDonICc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubHktdGFiLWhlYWRlci1jb250ZW50e2Rpc3BsYXk6aW5saW5lLWZsZXh9Lmx5LXRhYi1pbmRpY2F0b3J7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDowO2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2JvdHRvbTowO3RyYW5zaXRpb246YWxsIDQ1MG1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMHMhaW1wb3J0YW50fWBdLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJseS10YWItaGVhZGVyXCI+XHJcbiAgPGx5LWhlYWRlci1wYWdpbmF0aW9uPlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwibHktdGFiLWhlYWRlci1jb250ZW50XCIgW3N0eWxlLmJhY2tncm91bmRdPVwic3R5bGVCYWNrZ3JvdW5kXCIgI3RhYnNDb250ZW50PiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJseS10YWItaGVhZGVyLWNvbnRlbnRcIiAjdGFic0NvbnRlbnQ+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSA8ZGl2XHJcbiAgICBjbGFzcz1cImx5LXRhYi1pbmRpY2F0b3JcIlxyXG4gICAgW3N0eWxlLmNvbG9yXT1cInN0eWxlQ29sb3JcIlxyXG4gICAgW3N0eWxlLndpZHRoXT1cInRhYldpZHRoKydweCdcIlxyXG4gICAgW3N0eWxlLmxlZnRdPVwidGFiTGVmdCsncHgnXCI+PC9kaXY+IC0tPlxyXG4gICAgPGRpdlxyXG4gICAgY2xhc3M9XCJseS10YWItaW5kaWNhdG9yXCJcclxuICAgIFtzdHlsZS53aWR0aF09XCJ0YWJXaWR0aCsncHgnXCJcclxuICAgIFtzdHlsZS5sZWZ0XT1cInRhYkxlZnQrJ3B4J1wiPjwvZGl2PlxyXG4gIDwvbHktaGVhZGVyLXBhZ2luYXRpb24+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIj5cclxuICA8ZGl2IFtoaWRkZW5dPVwiIShpID09IF9zZWxlY3RlZEluZGV4KVwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RyYW5zY2x1ZGVdPVwiaXRlbS50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48IS0tIDxkaXYgW25nVHJhbnNjbHVkZV09XCJ0LnRhYkNvbnRlbnRcIiAqbmdGb3I9XCJsZXQgdCBvZiB0YWJzXCI+XHJcbiAgZWhoaFxyXG48L2Rpdj4gLS0+XHJcbmAsXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgcHJpdmF0ZSBfYmcgPSAncmdiYSgwLCAwLCAwLCAwKSc7IC8vIHByaXZhdGVcbiAgcHJpdmF0ZSBfY29sb3IgPSAncHJpbWFyeSc7IC8vIHByaXZhdGVcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHRpbWVvdXQ6IGFueTtcbiAgeHRlbXBsYXRlUmVmOiBhbnk7XG4gIHRhYlJvd3MgPSAwO1xuICBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9tYXJnaW46IG51bWJlcjtcbiAgdGFiV2lkdGggPSAwO1xuICB0YWJMZWZ0ID0gMDtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5VGFiKSkgdGFiczogUXVlcnlMaXN0PEx5VGFiPjtcbiAgQENvbnRlbnRDaGlsZChMeUJ1dHRvbikgbHlCdXR0b246IEx5QnV0dG9uO1xuICBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd0YWJzQ29udGVudCcpIF90YWJzQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcikge1xuXG4gICAgaWYgKHRoaXMudGFicykge1xuICAgICAgaWYgKHRoaXMudGFicy50b0FycmF5KClbdmFsdWVdKSB7XG4gICAgICAgIHRoaXMudGFicy50b0FycmF5KClbdmFsdWVdLnNldEluZGV4KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy51cGRhdGVUYWJzSGVhZGVyKCk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdmFsdWU7XG4gICAgfVxuICAgIC8vIGlmICh2YWx1ZSkge1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5faXNJbml0aWFsaXplZCA9PSB0cnVlKSB7XG4gICAgLy8gICBpZiAodGhpcy50YWJSb3dzICE9IHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAvLyAgICAgdGhpcy50YWJSb3dzID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7IH1cblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICkge1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICAgIHRoaXMudXBkYXRlVGFic0hlYWRlcigpO1xuICAgIHRoaXMudGFiUm93cyA9IHRoaXMudGFicy5sZW5ndGg7XG4gIH1cbiAgbmdPbkluaXQoKSB7IH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzZWxlY3RlZEluZGV4J10pIHtcbiAgICAgIGlmICghY2hhbmdlc1snc2VsZWN0ZWRJbmRleCddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2hhbmdlc1snc2VsZWN0ZWRJbmRleCddLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgY29uc3QgdGFiUmVmID0gdGhpcy5fdGFic0NvbnRlbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0VGFiKCkge1xuXG4gIH1cbiAgdXBkYXRlVGFiKCkge1xuICAgIC8vIHRoaXMudXBkYXRlVGFic0hlYWRlcigpO1xuICB9XG5cblxuICB1cGRhdGVUYWJzSGVhZGVyKCkge1xuICAgIGlmICghdGhpcy50YWJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy50YWJSb3dzICE9IHRoaXMudGFicy5sZW5ndGggJiYgdGhpcy5faXNJbml0aWFsaXplZCA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnRhYlJvd3MgPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgICAgLy8gdGhpcy51cGRhdGVUYWJzSGVhZGVyKCk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcblxuICB9XG4gIHVwZGF0ZVRhYkluZGljYXRvcih0YWI6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKCF0YWIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy50YWJXaWR0aCA9IHRhYi5vZmZzZXRXaWR0aDtcbiAgICAgIHRoaXMudGFiTGVmdCA9IHRhYi5vZmZzZXRMZWZ0O1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgc01hcmdpbih0YWI6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLl9tYXJnaW4gPSB0YWIub2Zmc2V0TGVmdCAqIDI7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBmaXgtLT4gcmVjaWJpciBlbCBlbmV2dG8gZGVsIGJvdG9uLCBjcmVhciBldmVudG8gZGVsIGJvdG9uIHkgYWN0dWFsaXphciBsaW5lXG4gICAgICovXG5cbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgoaXRlbTogTHlUYWIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuc01hcmdpbihpdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgaW5kZXgpO1xuICAgICAgaXRlbS5faW5kZXggPSBpbmRleDtcbiAgICAgIGNvbnN0IHRhYlJlZiA9IGl0ZW0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gaW5kZXggJiYgISF0YWJSZWYpIHtcbiAgICAgICAgaWYgKCEhaXRlbS5seUJ1dHRvbikge1xuICAgICAgICAgIC8vIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyAgIGl0ZW0ubHlCdXR0b24uYnV0dG9uUGFkZGluZy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xuICAgICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZVRhYkluZGljYXRvcih0YWJSZWYpO1xuICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVUYWJJbmRpY2F0b3IodGFiUmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudGFicy5jaGFuZ2VzLnN1YnNjcmliZSgodGFiczogTHlUYWJbXSkgPT4ge1xuICAgICAgaWRUYWIgPSAwO1xuICAgICAgdGFicy5mb3JFYWNoKChpdGVtOiBMeVRhYiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB0YWJSZWYgPSBpdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zTWFyZ2luKHRhYlJlZiwgaW5kZXgpO1xuICAgICAgICBpdGVtLl9pbmRleCA9IGluZGV4O1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBpbmRleCAmJiAhIXRhYlJlZikge1xuICAgICAgICAgIHRoaXMudXBkYXRlVGFiSW5kaWNhdG9yKHRhYlJlZik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRhYi1jb250ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiQ29udGVudCB7XG4gIC8vIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIGNvbnN0cnVjdG9yKCkge31cbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHN0eWxlczogW2AubHktdGFiLWxhYmVsLWl0ZW17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjA7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjQ4cHg7Y3Vyc29yOnBvaW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0e21hcmdpbjowIDhweH06aG9zdCAvZGVlcC8gW2x5LXRhYi1sYWJlbF17ZGlzcGxheTpibG9ja30ubHktdGFiLWxhYmVsLWl0ZW0gL2RlZXAvey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudH0ubHktdGFiLWxhYmVsLWl0ZW0gL2RlZXAvIFtseS1idXR0b25dLC5seS10YWItbGFiZWwtaXRlbSAvZGVlcC8gbHktYnV0dG9ue2hlaWdodDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItcmFkaXVzOjB9Lmx5LXRhYi1sYWJlbC1pdGVtIC9kZWVwLyAubHktYnV0dG9uLXBhZGRpbmctbGVmdHtwYWRkaW5nLWxlZnQ6OHB4fS5seS10YWItbGFiZWwtaXRlbSAvZGVlcC8gLmx5LWJ1dHRvbi1wYWRkaW5nLXJpZ2h0e3BhZGRpbmctcmlnaHQ6OHB4fS5seS10YWItbGFiZWwtaXRlbSAvZGVlcC8gbHktdGFiLWxhYmVsOm5vdChbbHktYnV0dG9uXSl7cGFkZGluZzowIDhweDtkaXNwbGF5OmlubGluZS1mbGV4O3doaXRlLXNwYWNlOm5vd3JhcH1gXSxcbiAgdGVtcGxhdGU6IGA8IS0tIDxidXR0b24gbHktYnV0dG9uIChtb3VzZWRvd24pPVwic29sdCgpXCIgKGNsaWNrKT1cInNldEluZGV4KF9pbmRleClcIiBjbGFzcz1cImx5LXRhYi1sYWJlbC1pdGVtXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktdGFiLWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG48L2J1dHRvbj4gLS0+XHJcbjxkaXYgKG1vdXNlZG93bik9XCJzb2x0KClcIiAoY2xpY2spPVwic2V0SW5kZXgoX2luZGV4KVwiIFtuZ1N0eWxlXT1cInRhYlN0eWxlc1wiIGNsYXNzPVwibHktdGFiLWxhYmVsLWl0ZW1cIiBseVJpcHBsZT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS10YWItbGFiZWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2x5LXRhYi1sYWJlbF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIge1xuICBfaW5kZXggPSAwO1xuICBfaW5kZXhHcm91cCA9IDA7XG4gIHN0YXRlVGFiOiBib29sZWFuO1xuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcbiAgcHVibGljIHRhYlJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChMeUJ1dHRvbikgbHlCdXR0b246IEx5QnV0dG9uO1xuICBnZXQgdGFiU3R5bGVzKCkge1xuICAgIHJldHVybiB7Y29sb3I6ICdjdXJyZW50Q29sb3InfTtcbiAgfVxuICBsbE9vcnIoLi4uYXJnOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGFyZ1swXSA8IGFyZ1sxXSA/ICdyJyA6ICdsJztcbiAgfVxuICBzb2x0KCkge1xuICB9XG4gIGVtaXRDaGFuZ2UoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMubHlUYWJHcm91cC5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICB9XG4gIHdpZHRoRXhhY3RhKGVsZW06IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAvLyBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgLy8gICByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmV0dXJuIGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgLy8gfVxuICB9XG4gIGZsb29yKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChudW0pO1xuICAgIHJldHVybiAobnVtKTtcbiAgfVxuICBzZXRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgZXYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgcmVzdFdpID0gMDtcbiAgICBjb25zdCB0YWJMYWJlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHJlc3RXaSA9IHRoaXMud2lkdGhFeGFjdGEoZXYpIC0gdGhpcy53aWR0aEV4YWN0YSh0YWJMYWJlbCk7XG4gICAgLy8gZXYgPSB0YWJMYWJlbCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB3OiBudW1iZXIgPSB0aGlzLmZsb29yKHRoaXMubHlUYWJHcm91cC5fdGFic0NvbnRlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCk7XG5cbiAgICBjb25zdCBsbE9vcnIgPSB0aGlzLmxsT29ycih0aGlzLmx5VGFiR3JvdXAuX3NlbGVjdGVkSW5kZXgsIGluZGV4KTtcbiAgICBsZXQgcHJldkluZGV4OiBudW1iZXIgPSB0aGlzLmx5VGFiR3JvdXAuX3NlbGVjdGVkSW5kZXg7XG4gICAgbGV0IGV2ZTogYW55O1xuICAgIHRoaXMubHlUYWJHcm91cC5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIC8vIHRoaXMubHlUYWJHcm91cC51cGRhdGVUYWJzSGVhZGVyKCk7XG4gICAgbGV0IGRXOiBudW1iZXI7XG4gICAgbGV0IGRMOiBudW1iZXI7XG4gICAgLy8gbGV0IG91dEVmOiBhbnkgPSBzZXRUaW1lb3V0KCgpID0+IHt9KTtcbiAgICAvLyBjbGVhclRpbWVvdXQob3V0RWYpO1xuICAgIGlmICh0aGlzLmx5VGFiR3JvdXAudGltZW91dCkge1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRpbWVvdXQuY2FsbGJhY2soKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmx5VGFiR3JvdXAudGltZW91dCk7XG4gICAgICB0aGlzLmx5VGFiR3JvdXAudGltZW91dCA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmICh0YWJMYWJlbC5jbGFzc05hbWUgIT0gJ2x5LXRhYi1sYWJlbC1pdGVtJykge1xuICAgIC8vICAgZXZlID0gZ2V0UGFyZW50cyh0YWJMYWJlbCwgJy5seS10YWItbGFiZWwtaXRlbScpO1xuICAgIC8vICAgZFcgPSBnZXRQYXJlbnRzKHRhYkxhYmVsLCAnLmx5LXRhYi1sYWJlbC1pdGVtJykub2Zmc2V0V2lkdGg7XG4gICAgLy8gICBkTCA9IGdldFBhcmVudHModGFiTGFiZWwsICcubHktdGFiLWxhYmVsLWl0ZW0nKS5vZmZzZXRMZWZ0O1xuICAgIC8vIH0gZWxzZSB7XG4gICAgZXZlID0gZXY7XG4gICAgZFcgPSB0aGlzLmZsb29yKHRhYkxhYmVsLm9mZnNldFdpZHRoKTtcbiAgICBkTCA9IHRoaXMuZmxvb3IodGFiTGFiZWwub2Zmc2V0TGVmdCk7XG4gICAgLy8gfVxuICAgIGlmIChsbE9vcnIgPT09ICdyJykge1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gZFc7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCAgPSBkTDtcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IHcgLSBkTDtcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ICA9IGRMO1xuICAgICAgbGV0IHNpYnNXOiBhbnkgPSAwO1xuICAgICAgY29uc3Qgc2lic0lEOiBhbnkgPSBbXTtcbiAgICAgIGNvbnN0IHRoaXNXID0gZXZlLnByZXZpb3VzU2libGluZy5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIGNsZWFyVGltZW91dChvdXRFZik7XG4gICAgICB0aGlzLmx5VGFiR3JvdXAudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBkVztcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgID0gZEw7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICB9LCA0NzUpO1xuICAgICAgd2hpbGUgKGV2ZSA9IGV2ZS5wcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgaWYgKGV2ZS5ub2RlTmFtZSA9PT0gJ0xZLVRBQicpIHtcbiAgICAgICAgICBzaWJzSUQucHVzaChldmUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHNpYnNJRC5yZXZlcnNlKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpYnNJRC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJldkluZGV4IDw9IGkpIHtcbiAgICAgICAgICBzaWJzVyA9IHNpYnNJRFtpXS5vZmZzZXRXaWR0aCArIHNpYnNXICsgKHRoaXMubHlUYWJHcm91cC5fbWFyZ2luIHx8IDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IHNpYnNXICsgZFc7XG5cbiAgICB9IGVsc2UgaWYgKGxsT29yciA9PT0gJ2wnKSB7XG4gICAgICBsZXQgc2lic1c6IGFueSA9IDA7XG4gICAgICBjb25zdCBzaWJzSUQ6IGFueSA9IFtdO1xuICAgICAgLy8gbGV0IHRoaXNXID0gZXZlLnByZXZpb3VzU2libGluZy5vZmZzZXRXaWR0aDtcbiAgICAgIHByZXZJbmRleCA9ICh0aGlzLmx5VGFiR3JvdXAudGFiUm93cyAtIDEpIC0gcHJldkluZGV4O1xuICAgICAgdGhpcy5seVRhYkdyb3VwLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgID0gZEw7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IGRXO1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAudGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgfSwgNDc1KTtcbiAgICAgIHdoaWxlIChldmUgPSBldmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgaWYgKGV2ZS5ub2RlTmFtZSA9PT0gJ0xZLVRBQicpIHtcbiAgICAgICAgICBzaWJzSUQucHVzaChldmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaWJzSUQucmV2ZXJzZSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWJzSUQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPj0gcHJldkluZGV4KSB7XG4gICAgICAgICAgc2lic1cgPSBzaWJzSURbaV0ub2Zmc2V0V2lkdGggKyBzaWJzVyArICh0aGlzLmx5VGFiR3JvdXAuX21hcmdpbiB8fCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBzaWJzVyArIGRXO1xuICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgID0gZEw7XG5cbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IGRXO1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgID0gZEw7XG4gICAgfVxuICB9XG4gIHB1YmxpYyB1cGRhdGVUYWJMaW5lKCkge1xuICAgIC8vIHRoaXMubHlUYWJHcm91cC5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IGV2Lm9mZnNldFdpZHRoO1xuICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ID0gZXYub2Zmc2V0TGVmdDtcbiAgfVxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgbHlUYWJHcm91cDogTHlUYWJHcm91cENvbXBvbmVudDtcbiAgZ2V0IGluZGV4R3JvdXAoKSB7XG4gICAgdGhpcy5faW5kZXhHcm91cCA9IHRoaXMubHlUYWJHcm91cC5fc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gdGhpcy5faW5kZXhHcm91cDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBseVRhYkdyb3VwOiBMeVRhYkdyb3VwQ29tcG9uZW50LFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmx5VGFiR3JvdXAgPSBseVRhYkdyb3VwO1xuICAgIHRoaXMuX2luZGV4R3JvdXAgPSB0aGlzLmx5VGFiR3JvdXAuX3NlbGVjdGVkSW5kZXg7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc3RhdGVUYWIgPSAhKHRoaXMuX2luZGV4ID09IHRoaXMuaW5kZXhHcm91cCk7XG4gICAgaWYgKHRoaXMuc3RhdGVUYWIpIHtcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2x5LXRhYi1sYWJlbCwgW2x5LXRhYi1sYWJlbF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsRGlyZWN0aXZlIHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VGFiLCBMeVRhYkdyb3VwQ29tcG9uZW50LCBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IHsgTHlIZWFkZXJQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL2hlYWRlci1wYWdpbmF0aW9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlUYWJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUhlYWRlclBhZ2luYXRpb25Nb2R1bGUsIE5nVHJhbnNjbHVkZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVRhYiwgTHlUYWJHcm91cENvbXBvbmVudCwgTHlUYWJMYWJlbERpcmVjdGl2ZSwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWIsIEx5VGFiR3JvdXBDb21wb25lbnQsIEx5VGFiTGFiZWxEaXJlY3RpdmUsIEx5VGFiQ29udGVudF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUEwR0UsNkJBQ1MsWUFDQyxVQUNBO1FBRkQsZUFBVSxHQUFWLFVBQVU7UUFDVCxhQUFRLEdBQVIsUUFBUTtRQUNSLHFCQUFnQixHQUFoQixnQkFBZ0I7bUJBMUNaLGtCQUFrQjtzQkFDZixTQUFTO3VCQUloQixDQUFDOzhCQUNNLENBQUM7d0JBRVAsQ0FBQzt1QkFDRixDQUFDOzhCQUdNLEtBQUs7bUNBeUI2QixJQUFJLFlBQVksRUFBTztLQU96RTswQkEzQkcsOENBQWE7Ozs7UUFrQmpCLGNBQThCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFOzs7OztrQkFsQnpDLEtBQWE7WUFFN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDOUIs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