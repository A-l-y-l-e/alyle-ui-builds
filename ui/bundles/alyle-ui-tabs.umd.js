(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui/button'), require('@angular/common'), require('@alyle/ui/header-pagination'), require('@alyle/ui/ripple'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui/button', '@angular/common', '@alyle/ui/header-pagination', '@alyle/ui/ripple', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.tabs = {}),global.ng.core,global.alyle.ui.button,global.ng.common,global.alyle.ui['header-pagination'],global.alyle.ui.ripple,global.alyle.ui));
}(this, (function (exports,core,button,common,headerPagination,ripple,ui) { 'use strict';

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
            this.selectedIndexChange = new core.EventEmitter();
        }
        Object.defineProperty(LyTabGroupComponent.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */ function () { return this._selectedIndex; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'ly-tab-group, ly-tabs',
                        styles: [":host{position:relative;display:block}.ly-tab-header{height:48px;width:100%;position:relative}.ly-tab-header::after{content:' ';position:absolute;bottom:0;left:0;right:0;height:1px;background-color:rgba(0,0,0,.06)}.ly-tab-header-content{display:inline-flex}.ly-tab-indicator{position:absolute;height:2px;width:0;background:currentColor;bottom:0;transition:all 450ms cubic-bezier(.23,1,.32,1) 0s!important}"],
                        template: "<div class=\"ly-tab-header\">\n  <ly-header-pagination>\n    <!-- <div class=\"ly-tab-header-content\" [style.background]=\"styleBackground\" #tabsContent> -->\n    <div class=\"ly-tab-header-content\" #tabsContent>\n      <ng-content></ng-content>\n    </div>\n    <!-- <div\n    class=\"ly-tab-indicator\"\n    [style.color]=\"styleColor\"\n    [style.width]=\"tabWidth+'px'\"\n    [style.left]=\"tabLeft+'px'\"></div> -->\n    <div\n    class=\"ly-tab-indicator\"\n    [style.width]=\"tabWidth+'px'\"\n    [style.left]=\"tabLeft+'px'\"></div>\n  </ly-header-pagination>\n</div>\n<div *ngFor=\"let item of tabs; let i = index\">\n  <div [hidden]=\"!(i == _selectedIndex)\">\n    <ng-template [ngTransclude]=\"item.templateRef\"></ng-template>\n  </div>\n</div>\n<!-- <div [ngTransclude]=\"t.tabContent\" *ngFor=\"let t of tabs\">\n  ehhh\n</div> -->\n",
                    },] },
        ];
        /** @nocollapse */
        LyTabGroupComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer, },
                { type: core.ViewContainerRef, },
            ];
        };
        LyTabGroupComponent.propDecorators = {
            "tabs": [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyTab; }),] },],
            "lyButton": [{ type: core.ContentChild, args: [button.LyButton,] },],
            "_tabsContent": [{ type: core.ViewChild, args: ['tabsContent',] },],
            "templateRef": [{ type: core.ViewChild, args: [core.TemplateRef,] },],
            "selectedIndex": [{ type: core.Input },],
            "selectedIndexChange": [{ type: core.Output },],
        };
        return LyTabGroupComponent;
    }());
    var LyTabContent = /** @class */ (function () {
        function LyTabContent() {
        }
        LyTabContent.decorators = [
            { type: core.Directive, args: [{
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
             */ function () {
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ly-tab',
                        styles: [".ly-tab-label-item{position:relative;display:inline-block;min-width:0;height:100%;overflow:hidden;text-align:center;line-height:48px;cursor:pointer;box-sizing:border-box}:host{margin:0 8px}:host /deep/ [ly-tab-label]{display:block}.ly-tab-label-item /deep/{-webkit-tap-highlight-color:transparent}.ly-tab-label-item /deep/ [ly-button],.ly-tab-label-item /deep/ ly-button{height:100%;vertical-align:top;border-radius:0}.ly-tab-label-item /deep/ .ly-button-padding-left{padding-left:8px}.ly-tab-label-item /deep/ .ly-button-padding-right{padding-right:8px}.ly-tab-label-item /deep/ ly-tab-label:not([ly-button]){padding:0 8px;display:inline-flex;white-space:nowrap}"],
                        template: "<!-- <button ly-button (mousedown)=\"solt()\" (click)=\"setIndex(_index)\" class=\"ly-tab-label-item\">\n  <ng-content select=\"ly-tab-label\"></ng-content>\n</button> -->\n<div (mousedown)=\"solt()\" (click)=\"setIndex(_index)\" [ngStyle]=\"tabStyles\" class=\"ly-tab-label-item\" lyRipple>\n  <ng-content select=\"ly-tab-label\"></ng-content>\n  <ng-content select=\"[ly-tab-label]\"></ng-content>\n</div>\n<ng-template>\n<div>\n  <ng-content></ng-content>\n</div>\n</ng-template>\n",
                    },] },
        ];
        /** @nocollapse */
        LyTab.ctorParameters = function () {
            return [
                { type: LyTabGroupComponent, decorators: [{ type: core.Optional },] },
                { type: core.ElementRef, },
            ];
        };
        LyTab.propDecorators = {
            "lyButton": [{ type: core.ContentChild, args: [button.LyButton,] },],
            "templateRef": [{ type: core.ViewChild, args: [core.TemplateRef,] },],
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
            { type: core.Directive, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule, headerPagination.LyHeaderPaginationModule, ui.NgTranscludeModule],
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

    exports.LyTabsModule = LyTabsModule;
    exports.LyTabGroupComponent = LyTabGroupComponent;
    exports.LyTabContent = LyTabContent;
    exports.LyTab = LyTab;
    exports.LyTabLabelDirective = LyTabLabelDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYi1sYWJlbC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcixcbiAgRWxlbWVudFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBDb250ZW50Q2hpbGQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBPbkNoYW5nZXMsXG4gIEhvc3RCaW5kaW5nLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZ2V0UGFyZW50cyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnQGFseWxlL3VpL2J1dHRvbic7XG5cbmxldCBpZFRhYiA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYi1ncm91cCwgbHktdGFicycsXG4gIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrfS5seS10YWItaGVhZGVye2hlaWdodDo0OHB4O3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmV9Lmx5LXRhYi1oZWFkZXI6OmFmdGVye2NvbnRlbnQ6JyAnO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2hlaWdodDoxcHg7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNil9Lmx5LXRhYi1oZWFkZXItY29udGVudHtkaXNwbGF5OmlubGluZS1mbGV4fS5seS10YWItaW5kaWNhdG9ye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoycHg7d2lkdGg6MDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtib3R0b206MDt0cmFuc2l0aW9uOmFsbCA0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDBzIWltcG9ydGFudH1gXSxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibHktdGFiLWhlYWRlclwiPlxyXG4gIDxseS1oZWFkZXItcGFnaW5hdGlvbj5cclxuICAgIDwhLS0gPGRpdiBjbGFzcz1cImx5LXRhYi1oZWFkZXItY29udGVudFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInN0eWxlQmFja2dyb3VuZFwiICN0YWJzQ29udGVudD4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibHktdGFiLWhlYWRlci1jb250ZW50XCIgI3RhYnNDb250ZW50PlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPGRpdlxyXG4gICAgY2xhc3M9XCJseS10YWItaW5kaWNhdG9yXCJcclxuICAgIFtzdHlsZS5jb2xvcl09XCJzdHlsZUNvbG9yXCJcclxuICAgIFtzdHlsZS53aWR0aF09XCJ0YWJXaWR0aCsncHgnXCJcclxuICAgIFtzdHlsZS5sZWZ0XT1cInRhYkxlZnQrJ3B4J1wiPjwvZGl2PiAtLT5cclxuICAgIDxkaXZcclxuICAgIGNsYXNzPVwibHktdGFiLWluZGljYXRvclwiXHJcbiAgICBbc3R5bGUud2lkdGhdPVwidGFiV2lkdGgrJ3B4J1wiXHJcbiAgICBbc3R5bGUubGVmdF09XCJ0YWJMZWZ0KydweCdcIj48L2Rpdj5cclxuICA8L2x5LWhlYWRlci1wYWdpbmF0aW9uPlxyXG48L2Rpdj5cclxuPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0YWJzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgPGRpdiBbaGlkZGVuXT1cIiEoaSA9PSBfc2VsZWN0ZWRJbmRleClcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUcmFuc2NsdWRlXT1cIml0ZW0udGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPCEtLSA8ZGl2IFtuZ1RyYW5zY2x1ZGVdPVwidC50YWJDb250ZW50XCIgKm5nRm9yPVwibGV0IHQgb2YgdGFic1wiPlxyXG4gIGVoaGhcclxuPC9kaXY+IC0tPlxyXG5gLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIHByaXZhdGUgX2JnID0gJ3JnYmEoMCwgMCwgMCwgMCknOyAvLyBwcml2YXRlXG4gIHByaXZhdGUgX2NvbG9yID0gJ3ByaW1hcnknOyAvLyBwcml2YXRlXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICB0aW1lb3V0OiBhbnk7XG4gIHh0ZW1wbGF0ZVJlZjogYW55O1xuICB0YWJSb3dzID0gMDtcbiAgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBfbWFyZ2luOiBudW1iZXI7XG4gIHRhYldpZHRoID0gMDtcbiAgdGFiTGVmdCA9IDA7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnM6IFF1ZXJ5TGlzdDxMeVRhYj47XG4gIEBDb250ZW50Q2hpbGQoTHlCdXR0b24pIGx5QnV0dG9uOiBMeUJ1dHRvbjtcbiAgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgndGFic0NvbnRlbnQnKSBfdGFic0NvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcblxuICAgIGlmICh0aGlzLnRhYnMpIHtcbiAgICAgIGlmICh0aGlzLnRhYnMudG9BcnJheSgpW3ZhbHVlXSkge1xuICAgICAgICB0aGlzLnRhYnMudG9BcnJheSgpW3ZhbHVlXS5zZXRJbmRleCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMudXBkYXRlVGFic0hlYWRlcigpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgIH1cbiAgICAvLyBpZiAodmFsdWUpIHtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuX2lzSW5pdGlhbGl6ZWQgPT0gdHJ1ZSkge1xuICAgIC8vICAgaWYgKHRoaXMudGFiUm93cyAhPSB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgLy8gICAgIHRoaXMudGFiUm93cyA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4OyB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICApIHtcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICB0aGlzLnVwZGF0ZVRhYnNIZWFkZXIoKTtcbiAgICB0aGlzLnRhYlJvd3MgPSB0aGlzLnRhYnMubGVuZ3RoO1xuICB9XG4gIG5nT25Jbml0KCkgeyB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snc2VsZWN0ZWRJbmRleCddKSB7XG4gICAgICBpZiAoIWNoYW5nZXNbJ3NlbGVjdGVkSW5kZXgnXS5maXJzdENoYW5nZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGNoYW5nZXNbJ3NlbGVjdGVkSW5kZXgnXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIGNvbnN0IHRhYlJlZiA9IHRoaXMuX3RhYnNDb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldFRhYigpIHtcblxuICB9XG4gIHVwZGF0ZVRhYigpIHtcbiAgICAvLyB0aGlzLnVwZGF0ZVRhYnNIZWFkZXIoKTtcbiAgfVxuXG5cbiAgdXBkYXRlVGFic0hlYWRlcigpIHtcbiAgICBpZiAoIXRoaXMudGFicykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMudGFiUm93cyAhPSB0aGlzLnRhYnMubGVuZ3RoICYmIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy50YWJSb3dzID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICAgIC8vIHRoaXMudXBkYXRlVGFic0hlYWRlcigpO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgfVxuICB1cGRhdGVUYWJJbmRpY2F0b3IodGFiOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghdGFiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudGFiV2lkdGggPSB0YWIub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLnRhYkxlZnQgPSB0YWIub2Zmc2V0TGVmdDtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIHNNYXJnaW4odGFiOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5fbWFyZ2luID0gdGFiLm9mZnNldExlZnQgKiAyO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLyoqXG4gICAgICogVE9ETzogZml4LS0+IHJlY2liaXIgZWwgZW5ldnRvIGRlbCBib3RvbiwgY3JlYXIgZXZlbnRvIGRlbCBib3RvbiB5IGFjdHVhbGl6YXIgbGluZVxuICAgICAqL1xuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKGl0ZW06IEx5VGFiLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnNNYXJnaW4oaXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGluZGV4KTtcbiAgICAgIGl0ZW0uX2luZGV4ID0gaW5kZXg7XG4gICAgICBjb25zdCB0YWJSZWYgPSBpdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ID09IGluZGV4ICYmICEhdGFiUmVmKSB7XG4gICAgICAgIGlmICghIWl0ZW0ubHlCdXR0b24pIHtcbiAgICAgICAgICAvLyBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gICBpdGVtLmx5QnV0dG9uLmJ1dHRvblBhZGRpbmcuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVUYWJJbmRpY2F0b3IodGFiUmVmKTtcbiAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlVGFiSW5kaWNhdG9yKHRhYlJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoKHRhYnM6IEx5VGFiW10pID0+IHtcbiAgICAgIGlkVGFiID0gMDtcbiAgICAgIHRhYnMuZm9yRWFjaCgoaXRlbTogTHlUYWIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFiUmVmID0gaXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc01hcmdpbih0YWJSZWYsIGluZGV4KTtcbiAgICAgICAgaXRlbS5faW5kZXggPSBpbmRleDtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gaW5kZXggJiYgISF0YWJSZWYpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRhYkluZGljYXRvcih0YWJSZWYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICAvLyBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBjb25zdHJ1Y3RvcigpIHt9XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICBzdHlsZXM6IFtgLmx5LXRhYi1sYWJlbC1pdGVte3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDowO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDo0OHB4O2N1cnNvcjpwb2ludGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdHttYXJnaW46MCA4cHh9Omhvc3QgL2RlZXAvIFtseS10YWItbGFiZWxde2Rpc3BsYXk6YmxvY2t9Lmx5LXRhYi1sYWJlbC1pdGVtIC9kZWVwL3std2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9Lmx5LXRhYi1sYWJlbC1pdGVtIC9kZWVwLyBbbHktYnV0dG9uXSwubHktdGFiLWxhYmVsLWl0ZW0gL2RlZXAvIGx5LWJ1dHRvbntoZWlnaHQ6MTAwJTt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLXJhZGl1czowfS5seS10YWItbGFiZWwtaXRlbSAvZGVlcC8gLmx5LWJ1dHRvbi1wYWRkaW5nLWxlZnR7cGFkZGluZy1sZWZ0OjhweH0ubHktdGFiLWxhYmVsLWl0ZW0gL2RlZXAvIC5seS1idXR0b24tcGFkZGluZy1yaWdodHtwYWRkaW5nLXJpZ2h0OjhweH0ubHktdGFiLWxhYmVsLWl0ZW0gL2RlZXAvIGx5LXRhYi1sYWJlbDpub3QoW2x5LWJ1dHRvbl0pe3BhZGRpbmc6MCA4cHg7ZGlzcGxheTppbmxpbmUtZmxleDt3aGl0ZS1zcGFjZTpub3dyYXB9YF0sXG4gIHRlbXBsYXRlOiBgPCEtLSA8YnV0dG9uIGx5LWJ1dHRvbiAobW91c2Vkb3duKT1cInNvbHQoKVwiIChjbGljayk9XCJzZXRJbmRleChfaW5kZXgpXCIgY2xhc3M9XCJseS10YWItbGFiZWwtaXRlbVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXRhYi1sYWJlbFwiPjwvbmctY29udGVudD5cclxuPC9idXR0b24+IC0tPlxyXG48ZGl2IChtb3VzZWRvd24pPVwic29sdCgpXCIgKGNsaWNrKT1cInNldEluZGV4KF9pbmRleClcIiBbbmdTdHlsZV09XCJ0YWJTdHlsZXNcIiBjbGFzcz1cImx5LXRhYi1sYWJlbC1pdGVtXCIgbHlSaXBwbGU+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktdGFiLWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWxdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPG5nLXRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbmAsXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIHtcbiAgX2luZGV4ID0gMDtcbiAgX2luZGV4R3JvdXAgPSAwO1xuICBzdGF0ZVRhYjogYm9vbGVhbjtcbiAgcHJpdmF0ZSB0aW1lb3V0OiBhbnk7XG4gIHB1YmxpYyB0YWJSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTHlCdXR0b24pIGx5QnV0dG9uOiBMeUJ1dHRvbjtcbiAgZ2V0IHRhYlN0eWxlcygpIHtcbiAgICByZXR1cm4ge2NvbG9yOiAnY3VycmVudENvbG9yJ307XG4gIH1cbiAgbGxPb3JyKC4uLmFyZzogYW55W10pOiBzdHJpbmcge1xuICAgIHJldHVybiBhcmdbMF0gPCBhcmdbMV0gPyAncicgOiAnbCc7XG4gIH1cbiAgc29sdCgpIHtcbiAgfVxuICBlbWl0Q2hhbmdlKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmx5VGFiR3JvdXAuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcbiAgfVxuICB3aWR0aEV4YWN0YShlbGVtOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgLy8gaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgIC8vICAgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHJldHVybiBlbGVtLm9mZnNldFdpZHRoO1xuICAgIC8vIH1cbiAgfVxuICBmbG9vcihudW06IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gcmV0dXJuIE1hdGgucm91bmQobnVtKTtcbiAgICByZXR1cm4gKG51bSk7XG4gIH1cbiAgc2V0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGV2ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IHJlc3RXaSA9IDA7XG4gICAgY29uc3QgdGFiTGFiZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICByZXN0V2kgPSB0aGlzLndpZHRoRXhhY3RhKGV2KSAtIHRoaXMud2lkdGhFeGFjdGEodGFiTGFiZWwpO1xuICAgIC8vIGV2ID0gdGFiTGFiZWwgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgdzogbnVtYmVyID0gdGhpcy5mbG9vcih0aGlzLmx5VGFiR3JvdXAuX3RhYnNDb250ZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpO1xuXG4gICAgY29uc3QgbGxPb3JyID0gdGhpcy5sbE9vcnIodGhpcy5seVRhYkdyb3VwLl9zZWxlY3RlZEluZGV4LCBpbmRleCk7XG4gICAgbGV0IHByZXZJbmRleDogbnVtYmVyID0gdGhpcy5seVRhYkdyb3VwLl9zZWxlY3RlZEluZGV4O1xuICAgIGxldCBldmU6IGFueTtcbiAgICB0aGlzLmx5VGFiR3JvdXAuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAvLyB0aGlzLmx5VGFiR3JvdXAudXBkYXRlVGFic0hlYWRlcigpO1xuICAgIGxldCBkVzogbnVtYmVyO1xuICAgIGxldCBkTDogbnVtYmVyO1xuICAgIC8vIGxldCBvdXRFZjogYW55ID0gc2V0VGltZW91dCgoKSA9PiB7fSk7XG4gICAgLy8gY2xlYXJUaW1lb3V0KG91dEVmKTtcbiAgICBpZiAodGhpcy5seVRhYkdyb3VwLnRpbWVvdXQpIHtcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50aW1lb3V0LmNhbGxiYWNrKCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5seVRhYkdyb3VwLnRpbWVvdXQpO1xuICAgICAgdGhpcy5seVRhYkdyb3VwLnRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgICAvLyBpZiAodGFiTGFiZWwuY2xhc3NOYW1lICE9ICdseS10YWItbGFiZWwtaXRlbScpIHtcbiAgICAvLyAgIGV2ZSA9IGdldFBhcmVudHModGFiTGFiZWwsICcubHktdGFiLWxhYmVsLWl0ZW0nKTtcbiAgICAvLyAgIGRXID0gZ2V0UGFyZW50cyh0YWJMYWJlbCwgJy5seS10YWItbGFiZWwtaXRlbScpLm9mZnNldFdpZHRoO1xuICAgIC8vICAgZEwgPSBnZXRQYXJlbnRzKHRhYkxhYmVsLCAnLmx5LXRhYi1sYWJlbC1pdGVtJykub2Zmc2V0TGVmdDtcbiAgICAvLyB9IGVsc2Uge1xuICAgIGV2ZSA9IGV2O1xuICAgIGRXID0gdGhpcy5mbG9vcih0YWJMYWJlbC5vZmZzZXRXaWR0aCk7XG4gICAgZEwgPSB0aGlzLmZsb29yKHRhYkxhYmVsLm9mZnNldExlZnQpO1xuICAgIC8vIH1cbiAgICBpZiAobGxPb3JyID09PSAncicpIHtcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IGRXO1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgID0gZEw7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSB3IC0gZEw7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCAgPSBkTDtcbiAgICAgIGxldCBzaWJzVzogYW55ID0gMDtcbiAgICAgIGNvbnN0IHNpYnNJRDogYW55ID0gW107XG4gICAgICBjb25zdCB0aGlzVyA9IGV2ZS5wcmV2aW91c1NpYmxpbmcub2Zmc2V0V2lkdGg7XG4gICAgICAvLyBjbGVhclRpbWVvdXQob3V0RWYpO1xuICAgICAgdGhpcy5seVRhYkdyb3VwLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gZFc7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ICA9IGRMO1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAudGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgICAgfSwgNDc1KTtcbiAgICAgIHdoaWxlIChldmUgPSBldmUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGlmIChldmUubm9kZU5hbWUgPT09ICdMWS1UQUInKSB7XG4gICAgICAgICAgc2lic0lELnB1c2goZXZlKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBzaWJzSUQucmV2ZXJzZSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWJzSUQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByZXZJbmRleCA8PSBpKSB7XG4gICAgICAgICAgc2lic1cgPSBzaWJzSURbaV0ub2Zmc2V0V2lkdGggKyBzaWJzVyArICh0aGlzLmx5VGFiR3JvdXAuX21hcmdpbiB8fCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBzaWJzVyArIGRXO1xuXG4gICAgfSBlbHNlIGlmIChsbE9vcnIgPT09ICdsJykge1xuICAgICAgbGV0IHNpYnNXOiBhbnkgPSAwO1xuICAgICAgY29uc3Qgc2lic0lEOiBhbnkgPSBbXTtcbiAgICAgIC8vIGxldCB0aGlzVyA9IGV2ZS5wcmV2aW91c1NpYmxpbmcub2Zmc2V0V2lkdGg7XG4gICAgICBwcmV2SW5kZXggPSAodGhpcy5seVRhYkdyb3VwLnRhYlJvd3MgLSAxKSAtIHByZXZJbmRleDtcbiAgICAgIHRoaXMubHlUYWJHcm91cC50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ICA9IGRMO1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBkVztcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcbiAgICAgIH0sIDQ3NSk7XG4gICAgICB3aGlsZSAoZXZlID0gZXZlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGlmIChldmUubm9kZU5hbWUgPT09ICdMWS1UQUInKSB7XG4gICAgICAgICAgc2lic0lELnB1c2goZXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2lic0lELnJldmVyc2UoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lic0lELmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID49IHByZXZJbmRleCkge1xuICAgICAgICAgIHNpYnNXID0gc2lic0lEW2ldLm9mZnNldFdpZHRoICsgc2lic1cgKyAodGhpcy5seVRhYkdyb3VwLl9tYXJnaW4gfHwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gc2lic1cgKyBkVztcbiAgICAgIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ICA9IGRMO1xuXG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBkVztcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ICA9IGRMO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgdXBkYXRlVGFiTGluZSgpIHtcbiAgICAvLyB0aGlzLmx5VGFiR3JvdXAuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBldi5vZmZzZXRXaWR0aDtcbiAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCA9IGV2Lm9mZnNldExlZnQ7XG4gIH1cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIGx5VGFiR3JvdXA6IEx5VGFiR3JvdXBDb21wb25lbnQ7XG4gIGdldCBpbmRleEdyb3VwKCkge1xuICAgIHRoaXMuX2luZGV4R3JvdXAgPSB0aGlzLmx5VGFiR3JvdXAuX3NlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4R3JvdXA7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgbHlUYWJHcm91cDogTHlUYWJHcm91cENvbXBvbmVudCxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5seVRhYkdyb3VwID0gbHlUYWJHcm91cDtcbiAgICB0aGlzLl9pbmRleEdyb3VwID0gdGhpcy5seVRhYkdyb3VwLl9zZWxlY3RlZEluZGV4O1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0YXRlVGFiID0gISh0aGlzLl9pbmRleCA9PSB0aGlzLmluZGV4R3JvdXApO1xuICAgIGlmICh0aGlzLnN0YXRlVGFiKSB7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdseS10YWItbGFiZWwsIFtseS10YWItbGFiZWxdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbERpcmVjdGl2ZSB7IH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVRhYiwgTHlUYWJHcm91cENvbXBvbmVudCwgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWJzJztcbmltcG9ydCB7IEx5SGVhZGVyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9oZWFkZXItcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTmdUcmFuc2NsdWRlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5VGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1sYWJlbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlIZWFkZXJQYWdpbmF0aW9uTW9kdWxlLCBOZ1RyYW5zY2x1ZGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUYWIsIEx5VGFiR3JvdXBDb21wb25lbnQsIEx5VGFiTGFiZWxEaXJlY3RpdmUsIEx5VGFiQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5VGFiLCBMeVRhYkdyb3VwQ29tcG9uZW50LCBMeVRhYkxhYmVsRGlyZWN0aXZlLCBMeVRhYkNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIkNvbnRlbnRDaGlsZCIsIkx5QnV0dG9uIiwiVmlld0NoaWxkIiwiVGVtcGxhdGVSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIk9wdGlvbmFsIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeVJpcHBsZU1vZHVsZSIsIkx5SGVhZGVyUGFnaW5hdGlvbk1vZHVsZSIsIk5nVHJhbnNjbHVkZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBMEdFLDZCQUNTLFlBQ0MsVUFDQTtZQUZELGVBQVUsR0FBVixVQUFVO1lBQ1QsYUFBUSxHQUFSLFFBQVE7WUFDUixxQkFBZ0IsR0FBaEIsZ0JBQWdC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