/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, Renderer, ElementRef, Input, ContentChildren, ContentChild, QueryList, ViewContainerRef, ViewChild, TemplateRef, forwardRef, Output, EventEmitter, Optional } from '@angular/core';
import { LyButton } from '@alyle/ui/button';
let /** @type {?} */ idTab = 0;
export class LyTabGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} viewContainerRef
     */
    constructor(elementRef, renderer, viewContainerRef) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
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
    }
    /**
     * @return {?}
     */
    get selectedIndex() { return this._selectedIndex; }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateTabsHeader();
        this.tabRows = this.tabs.length;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['selectedIndex']) {
            if (!changes['selectedIndex'].firstChange) {
                const /** @type {?} */ index = changes['selectedIndex'].currentValue;
                const /** @type {?} */ tabRef = this._tabsContent.nativeElement;
            }
        }
    }
    /**
     * @return {?}
     */
    setTab() {
    }
    /**
     * @return {?}
     */
    updateTab() {
        // this.updateTabsHeader();
    }
    /**
     * @return {?}
     */
    updateTabsHeader() {
        if (!this.tabs) {
            return;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.tabRows != this.tabs.length && this._isInitialized == true) {
            this.tabRows = this.tabs.length;
            // this.updateTabsHeader();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._isInitialized = true;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    updateTabIndicator(tab) {
        if (!tab) {
            return;
        }
        Promise.resolve(null).then(() => {
            this.tabWidth = tab.offsetWidth;
            this.tabLeft = tab.offsetLeft;
        });
    }
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    sMargin(tab, index) {
        if (index === 0) {
            this._margin = tab.offsetLeft * 2;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /**
             * TODO: fix--> recibir el enevto del boton, crear evento del boton y actualizar line
             */
        this.tabs.forEach((item, index) => {
            this.sMargin(item.elementRef.nativeElement, index);
            item._index = index;
            const /** @type {?} */ tabRef = item.elementRef.nativeElement;
            if (this._selectedIndex == index && !!tabRef) {
                if (!!item.lyButton) {
                    // Promise.resolve(null).then(() => {
                    //   item.lyButton.buttonPadding.subscribe((val) => {
                    //     this.updateTabIndicator(tabRef);
                    //   });
                    // });
                }
                else {
                    this.updateTabIndicator(tabRef);
                }
            }
        });
        this.tabs.changes.subscribe((tabs) => {
            idTab = 0;
            tabs.forEach((item, index) => {
                const /** @type {?} */ tabRef = item.elementRef.nativeElement;
                this.sMargin(tabRef, index);
                item._index = index;
                if (this._selectedIndex == index && !!tabRef) {
                    this.updateTabIndicator(tabRef);
                }
            });
        });
    }
}
LyTabGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ly-tab-group, ly-tabs',
                styles: [`:host{position:relative;display:block}.ly-tab-header{height:48px;width:100%;position:relative}.ly-tab-header::after{content:' ';position:absolute;bottom:0;left:0;right:0;height:1px;background-color:rgba(0,0,0,.06)}.ly-tab-header-content{display:inline-flex}.ly-tab-indicator{position:absolute;height:2px;width:0;background:currentColor;bottom:0;transition:all 450ms cubic-bezier(.23,1,.32,1) 0s!important}`],
                template: `<div class="ly-tab-header">
  <ly-header-pagination>
    <!-- <div class="ly-tab-header-content" [style.background]="styleBackground" #tabsContent> -->
    <div class="ly-tab-header-content" #tabsContent>
      <ng-content></ng-content>
    </div>
    <!-- <div
    class="ly-tab-indicator"
    [style.color]="styleColor"
    [style.width]="tabWidth+'px'"
    [style.left]="tabLeft+'px'"></div> -->
    <div
    class="ly-tab-indicator"
    [style.width]="tabWidth+'px'"
    [style.left]="tabLeft+'px'"></div>
  </ly-header-pagination>
</div>
<div *ngFor="let item of tabs; let i = index">
  <div [hidden]="!(i == _selectedIndex)">
    <ng-template [ngTransclude]="item.templateRef"></ng-template>
  </div>
</div>
<!-- <div [ngTransclude]="t.tabContent" *ngFor="let t of tabs">
  ehhh
</div> -->
`,
            },] },
];
/** @nocollapse */
LyTabGroupComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
    { type: ViewContainerRef, },
];
LyTabGroupComponent.propDecorators = {
    "tabs": [{ type: ContentChildren, args: [forwardRef(() => LyTab),] },],
    "lyButton": [{ type: ContentChild, args: [LyButton,] },],
    "_tabsContent": [{ type: ViewChild, args: ['tabsContent',] },],
    "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
    "selectedIndex": [{ type: Input },],
    "selectedIndexChange": [{ type: Output },],
};
function LyTabGroupComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTabGroupComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTabGroupComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTabGroupComponent.propDecorators;
    /** @type {?} */
    LyTabGroupComponent.prototype._bg;
    /** @type {?} */
    LyTabGroupComponent.prototype._color;
    /** @type {?} */
    LyTabGroupComponent.prototype._subscription;
    /** @type {?} */
    LyTabGroupComponent.prototype.timeout;
    /** @type {?} */
    LyTabGroupComponent.prototype.xtemplateRef;
    /** @type {?} */
    LyTabGroupComponent.prototype.tabRows;
    /** @type {?} */
    LyTabGroupComponent.prototype._selectedIndex;
    /** @type {?} */
    LyTabGroupComponent.prototype._margin;
    /** @type {?} */
    LyTabGroupComponent.prototype.tabWidth;
    /** @type {?} */
    LyTabGroupComponent.prototype.tabLeft;
    /** @type {?} */
    LyTabGroupComponent.prototype.tabs;
    /** @type {?} */
    LyTabGroupComponent.prototype.lyButton;
    /** @type {?} */
    LyTabGroupComponent.prototype._isInitialized;
    /** @type {?} */
    LyTabGroupComponent.prototype._tabsContent;
    /** @type {?} */
    LyTabGroupComponent.prototype.templateRef;
    /** @type {?} */
    LyTabGroupComponent.prototype.selectedIndexChange;
    /** @type {?} */
    LyTabGroupComponent.prototype.elementRef;
    /** @type {?} */
    LyTabGroupComponent.prototype.renderer;
    /** @type {?} */
    LyTabGroupComponent.prototype.viewContainerRef;
}
export class LyTabContent {
}
LyTabContent.decorators = [
    { type: Directive, args: [{
                selector: '[ly-tab-content]',
            },] },
];
function LyTabContent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTabContent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTabContent.ctorParameters;
}
export class LyTab {
    /**
     * @param {?} lyTabGroup
     * @param {?} elementRef
     */
    constructor(lyTabGroup, elementRef) {
        this.elementRef = elementRef;
        this._index = 0;
        this._indexGroup = 0;
        this.lyTabGroup = lyTabGroup;
        this._indexGroup = this.lyTabGroup._selectedIndex;
    }
    /**
     * @return {?}
     */
    get tabStyles() {
        return { color: 'currentColor' };
    }
    /**
     * @param {...?} arg
     * @return {?}
     */
    llOorr(...arg) {
        return arg[0] < arg[1] ? 'r' : 'l';
    }
    /**
     * @return {?}
     */
    solt() {
    }
    /**
     * @param {?} index
     * @return {?}
     */
    emitChange(index) {
        this.lyTabGroup.selectedIndexChange.emit(index);
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    widthExacta(elem) {
        return elem.offsetWidth;
        // if (typeof elem.getBoundingClientRect !== typeof undefined) {
        //   return elem.getBoundingClientRect().width;
        // } else {
        //   return elem.offsetWidth;
        // }
    }
    /**
     * @param {?} num
     * @return {?}
     */
    floor(num) {
        // return Math.round(num);
        return (num);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setIndex(index) {
        const /** @type {?} */ ev = /** @type {?} */ (this.elementRef.nativeElement);
        let /** @type {?} */ restWi = 0;
        const /** @type {?} */ tabLabel = /** @type {?} */ (this.elementRef.nativeElement);
        restWi = this.widthExacta(ev) - this.widthExacta(tabLabel);
        // ev = tabLabel as HTMLElement;
        const /** @type {?} */ w = this.floor(this.lyTabGroup._tabsContent.nativeElement.offsetWidth);
        const /** @type {?} */ llOorr = this.llOorr(this.lyTabGroup._selectedIndex, index);
        let /** @type {?} */ prevIndex = this.lyTabGroup._selectedIndex;
        let /** @type {?} */ eve;
        this.lyTabGroup._selectedIndex = index;
        // this.lyTabGroup.updateTabsHeader();
        let /** @type {?} */ dW;
        let /** @type {?} */ dL;
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
            let /** @type {?} */ sibsW = 0;
            const /** @type {?} */ sibsID = [];
            const /** @type {?} */ thisW = eve.previousSibling.offsetWidth;
            // clearTimeout(outEf);
            this.lyTabGroup.timeout = setTimeout(() => {
                this.lyTabGroup.tabWidth = dW;
                this.lyTabGroup.tabLeft = dL;
                this.lyTabGroup.timeout = null;
                this.lyTabGroup.selectedIndexChange.emit(index);
            }, 475);
            while (eve = eve.previousSibling) {
                if (eve.nodeName === 'LY-TAB') {
                    sibsID.push(eve);
                }
            }
            sibsID.reverse();
            for (let /** @type {?} */ i = 0; i < sibsID.length; i++) {
                if (prevIndex <= i) {
                    sibsW = sibsID[i].offsetWidth + sibsW + (this.lyTabGroup._margin || 0);
                }
            }
            this.lyTabGroup.tabWidth = sibsW + dW;
        }
        else if (llOorr === 'l') {
            let /** @type {?} */ sibsW = 0;
            const /** @type {?} */ sibsID = [];
            // let thisW = eve.previousSibling.offsetWidth;
            prevIndex = (this.lyTabGroup.tabRows - 1) - prevIndex;
            this.lyTabGroup.timeout = setTimeout(() => {
                this.lyTabGroup.tabLeft = dL;
                this.lyTabGroup.tabWidth = dW;
                this.lyTabGroup.timeout = null;
                this.lyTabGroup.selectedIndexChange.emit(index);
            }, 475);
            while (eve = eve.nextSibling) {
                if (eve.nodeName === 'LY-TAB') {
                    sibsID.push(eve);
                }
            }
            sibsID.reverse();
            for (let /** @type {?} */ i = 0; i < sibsID.length; i++) {
                if (i >= prevIndex) {
                    sibsW = sibsID[i].offsetWidth + sibsW + (this.lyTabGroup._margin || 0);
                }
            }
            this.lyTabGroup.tabWidth = sibsW + dW;
            this.lyTabGroup.tabLeft = dL;
            // this.lyTabGroup.tabWidth = dW;
            // this.lyTabGroup.tabLeft  = dL;
        }
    }
    /**
     * @return {?}
     */
    updateTabLine() {
        // this.lyTabGroup._selectedIndex = index;
        // this.lyTabGroup.tabWidth = ev.offsetWidth;
        // this.lyTabGroup.tabLeft = ev.offsetLeft;
    }
    /**
     * @return {?}
     */
    get indexGroup() {
        this._indexGroup = this.lyTabGroup._selectedIndex;
        return this._indexGroup;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.stateTab = !(this._index == this.indexGroup);
        if (this.stateTab) {
            // this.lyTabGroup.tabWidth = this.elementRef.nativeElement.offsetWidth;
            // this.lyTabGroup.tabLeft = this.elementRef.nativeElement.offsetLeft;
        }
    }
}
LyTab.decorators = [
    { type: Component, args: [{
                selector: 'ly-tab',
                styles: [`.ly-tab-label-item{position:relative;display:inline-block;min-width:0;height:100%;overflow:hidden;text-align:center;line-height:48px;cursor:pointer;box-sizing:border-box}:host{margin:0 8px}:host /deep/ [ly-tab-label]{display:block}.ly-tab-label-item /deep/{-webkit-tap-highlight-color:transparent}.ly-tab-label-item /deep/ [ly-button],.ly-tab-label-item /deep/ ly-button{height:100%;vertical-align:top;border-radius:0}.ly-tab-label-item /deep/ .ly-button-padding-left{padding-left:8px}.ly-tab-label-item /deep/ .ly-button-padding-right{padding-right:8px}.ly-tab-label-item /deep/ ly-tab-label:not([ly-button]){padding:0 8px;display:inline-flex;white-space:nowrap}`],
                template: `<!-- <button ly-button (mousedown)="solt()" (click)="setIndex(_index)" class="ly-tab-label-item">
  <ng-content select="ly-tab-label"></ng-content>
</button> -->
<div (mousedown)="solt()" (click)="setIndex(_index)" [ngStyle]="tabStyles" class="ly-tab-label-item" lyRipple>
  <ng-content select="ly-tab-label"></ng-content>
  <ng-content select="[ly-tab-label]"></ng-content>
</div>
<ng-template>
<div>
  <ng-content></ng-content>
</div>
</ng-template>
`,
            },] },
];
/** @nocollapse */
LyTab.ctorParameters = () => [
    { type: LyTabGroupComponent, decorators: [{ type: Optional },] },
    { type: ElementRef, },
];
LyTab.propDecorators = {
    "lyButton": [{ type: ContentChild, args: [LyButton,] },],
    "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
};
function LyTab_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTab.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTab.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTab.propDecorators;
    /** @type {?} */
    LyTab.prototype._index;
    /** @type {?} */
    LyTab.prototype._indexGroup;
    /** @type {?} */
    LyTab.prototype.stateTab;
    /** @type {?} */
    LyTab.prototype.timeout;
    /** @type {?} */
    LyTab.prototype.tabRef;
    /** @type {?} */
    LyTab.prototype.lyButton;
    /** @type {?} */
    LyTab.prototype.templateRef;
    /** @type {?} */
    LyTab.prototype.lyTabGroup;
    /** @type {?} */
    LyTab.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90YWJzLyIsInNvdXJjZXMiOlsidGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFJVixLQUFLLEVBQ0wsZUFBZSxFQUNmLFlBQVksRUFDWixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxXQUFXLEVBRVgsVUFBVSxFQUdWLE1BQU0sRUFDTixZQUFZLEVBQ1osUUFBUSxFQUlULE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU1QyxxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBaUNkLE1BQU07Ozs7OztJQXlDSixZQUNTLFlBQ0MsVUFDQTtRQUZELGVBQVUsR0FBVixVQUFVO1FBQ1QsYUFBUSxHQUFSLFFBQVE7UUFDUixxQkFBZ0IsR0FBaEIsZ0JBQWdCO21CQTFDWixrQkFBa0I7c0JBQ2YsU0FBUzt1QkFJaEIsQ0FBQzs4QkFDTSxDQUFDO3dCQUVQLENBQUM7dUJBQ0YsQ0FBQzs4QkFHTSxLQUFLO21DQXlCNkIsSUFBSSxZQUFZLEVBQU87S0FPekU7Ozs7O1FBM0JHLGFBQWEsQ0FBQyxLQUFhO1FBRTdCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFNOztZQUVMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCOzs7Ozs7Ozs7Ozs7SUFTSCxJQUFJLGFBQWEsS0FBYSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFB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QU8sRUFBRSxDQUFDO1lBQ2pCLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO29CQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDeEU7YUFFRjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUksRUFBRSxDQUFDOzs7U0FJL0I7S0FDRjs7OztJQUNNLGFBQWE7Ozs7Ozs7O0lBT3BCLElBQUksVUFBVTtRQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7O0lBUUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7O1NBR2xCO0tBQ0Y7OztZQWxLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxDQUFDLHlwQkFBeXBCLENBQUM7Z0JBQ25xQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVlYO2FBQ0E7Ozs7WUE3SlksbUJBQW1CLHVCQW1TM0IsUUFBUTtZQWhXWCxVQUFVOzs7eUJBaU9ULFlBQVksU0FBQyxRQUFROzRCQXdIckIsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBOZ01vZHVsZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQ29udGVudENoaWxkLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgT25DaGFuZ2VzLFxuICBIb3N0QmluZGluZyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9wdGlvbmFsLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGdldFBhcmVudHMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9idXR0b24nO1xuXG5sZXQgaWRUYWIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWItZ3JvdXAsIGx5LXRhYnMnLFxuICBzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30ubHktdGFiLWhlYWRlcntoZWlnaHQ6NDhweDt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5seS10YWItaGVhZGVyOjphZnRlcntjb250ZW50OicgJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6MXB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDYpfS5seS10YWItaGVhZGVyLWNvbnRlbnR7ZGlzcGxheTppbmxpbmUtZmxleH0ubHktdGFiLWluZGljYXRvcntwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3dpZHRoOjA7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7Ym90dG9tOjA7dHJhbnNpdGlvbjphbGwgNDUwbXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSAwcyFpbXBvcnRhbnR9YF0sXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImx5LXRhYi1oZWFkZXJcIj5cclxuICA8bHktaGVhZGVyLXBhZ2luYXRpb24+XHJcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJseS10YWItaGVhZGVyLWNvbnRlbnRcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJzdHlsZUJhY2tncm91bmRcIiAjdGFic0NvbnRlbnQ+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImx5LXRhYi1oZWFkZXItY29udGVudFwiICN0YWJzQ29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIDxkaXZcclxuICAgIGNsYXNzPVwibHktdGFiLWluZGljYXRvclwiXHJcbiAgICBbc3R5bGUuY29sb3JdPVwic3R5bGVDb2xvclwiXHJcbiAgICBbc3R5bGUud2lkdGhdPVwidGFiV2lkdGgrJ3B4J1wiXHJcbiAgICBbc3R5bGUubGVmdF09XCJ0YWJMZWZ0KydweCdcIj48L2Rpdj4gLS0+XHJcbiAgICA8ZGl2XHJcbiAgICBjbGFzcz1cImx5LXRhYi1pbmRpY2F0b3JcIlxyXG4gICAgW3N0eWxlLndpZHRoXT1cInRhYldpZHRoKydweCdcIlxyXG4gICAgW3N0eWxlLmxlZnRdPVwidGFiTGVmdCsncHgnXCI+PC9kaXY+XHJcbiAgPC9seS1oZWFkZXItcGFnaW5hdGlvbj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGFiczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gIDxkaXYgW2hpZGRlbl09XCIhKGkgPT0gX3NlbGVjdGVkSW5kZXgpXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVHJhbnNjbHVkZV09XCJpdGVtLnRlbXBsYXRlUmVmXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwhLS0gPGRpdiBbbmdUcmFuc2NsdWRlXT1cInQudGFiQ29udGVudFwiICpuZ0Zvcj1cImxldCB0IG9mIHRhYnNcIj5cclxuICBlaGhoXHJcbjwvZGl2PiAtLT5cclxuYCxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBwcml2YXRlIF9iZyA9ICdyZ2JhKDAsIDAsIDAsIDApJzsgLy8gcHJpdmF0ZVxuICBwcml2YXRlIF9jb2xvciA9ICdwcmltYXJ5JzsgLy8gcHJpdmF0ZVxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgdGltZW91dDogYW55O1xuICB4dGVtcGxhdGVSZWY6IGFueTtcbiAgdGFiUm93cyA9IDA7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX21hcmdpbjogbnVtYmVyO1xuICB0YWJXaWR0aCA9IDA7XG4gIHRhYkxlZnQgPSAwO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzOiBRdWVyeUxpc3Q8THlUYWI+O1xuICBAQ29udGVudENoaWxkKEx5QnV0dG9uKSBseUJ1dHRvbjogTHlCdXR0b247XG4gIF9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNDb250ZW50JykgX3RhYnNDb250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG5cbiAgICBpZiAodGhpcy50YWJzKSB7XG4gICAgICBpZiAodGhpcy50YWJzLnRvQXJyYXkoKVt2YWx1ZV0pIHtcbiAgICAgICAgdGhpcy50YWJzLnRvQXJyYXkoKVt2YWx1ZV0uc2V0SW5kZXgodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnVwZGF0ZVRhYnNIZWFkZXIoKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgICB9XG4gICAgLy8gaWYgKHZhbHVlKSB7XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLl9pc0luaXRpYWxpemVkID09IHRydWUpIHtcbiAgICAvLyAgIGlmICh0aGlzLnRhYlJvd3MgIT0gdGhpcy50YWJzLmxlbmd0aCkge1xuICAgIC8vICAgICB0aGlzLnRhYlJvd3MgPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDsgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gICAgdGhpcy51cGRhdGVUYWJzSGVhZGVyKCk7XG4gICAgdGhpcy50YWJSb3dzID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgfVxuICBuZ09uSW5pdCgpIHsgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ3NlbGVjdGVkSW5kZXgnXSkge1xuICAgICAgaWYgKCFjaGFuZ2VzWydzZWxlY3RlZEluZGV4J10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjaGFuZ2VzWydzZWxlY3RlZEluZGV4J10uY3VycmVudFZhbHVlO1xuICAgICAgICBjb25zdCB0YWJSZWYgPSB0aGlzLl90YWJzQ29udGVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRUYWIoKSB7XG5cbiAgfVxuICB1cGRhdGVUYWIoKSB7XG4gICAgLy8gdGhpcy51cGRhdGVUYWJzSGVhZGVyKCk7XG4gIH1cblxuXG4gIHVwZGF0ZVRhYnNIZWFkZXIoKSB7XG4gICAgaWYgKCF0aGlzLnRhYnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLnRhYlJvd3MgIT0gdGhpcy50YWJzLmxlbmd0aCAmJiB0aGlzLl9pc0luaXRpYWxpemVkID09IHRydWUpIHtcbiAgICAgIHRoaXMudGFiUm93cyA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgICAvLyB0aGlzLnVwZGF0ZVRhYnNIZWFkZXIoKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gIH1cbiAgdXBkYXRlVGFiSW5kaWNhdG9yKHRhYjogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoIXRhYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnRhYldpZHRoID0gdGFiLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy50YWJMZWZ0ID0gdGFiLm9mZnNldExlZnQ7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBzTWFyZ2luKHRhYjogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuX21hcmdpbiA9IHRhYi5vZmZzZXRMZWZ0ICogMjtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8qKlxuICAgICAqIFRPRE86IGZpeC0tPiByZWNpYmlyIGVsIGVuZXZ0byBkZWwgYm90b24sIGNyZWFyIGV2ZW50byBkZWwgYm90b24geSBhY3R1YWxpemFyIGxpbmVcbiAgICAgKi9cblxuICAgIHRoaXMudGFicy5mb3JFYWNoKChpdGVtOiBMeVRhYiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5zTWFyZ2luKGl0ZW0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpbmRleCk7XG4gICAgICBpdGVtLl9pbmRleCA9IGluZGV4O1xuICAgICAgY29uc3QgdGFiUmVmID0gaXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBpbmRleCAmJiAhIXRhYlJlZikge1xuICAgICAgICBpZiAoISFpdGVtLmx5QnV0dG9uKSB7XG4gICAgICAgICAgLy8gUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vICAgaXRlbS5seUJ1dHRvbi5idXR0b25QYWRkaW5nLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlVGFiSW5kaWNhdG9yKHRhYlJlZik7XG4gICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRhYkluZGljYXRvcih0YWJSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50YWJzLmNoYW5nZXMuc3Vic2NyaWJlKCh0YWJzOiBMeVRhYltdKSA9PiB7XG4gICAgICBpZFRhYiA9IDA7XG4gICAgICB0YWJzLmZvckVhY2goKGl0ZW06IEx5VGFiLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYlJlZiA9IGl0ZW0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnNNYXJnaW4odGFiUmVmLCBpbmRleCk7XG4gICAgICAgIGl0ZW0uX2luZGV4ID0gaW5kZXg7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ID09IGluZGV4ICYmICEhdGFiUmVmKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVUYWJJbmRpY2F0b3IodGFiUmVmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG59XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGFiLWNvbnRlbnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJDb250ZW50IHtcbiAgLy8gQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gY29uc3RydWN0b3IoKSB7fVxufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgc3R5bGVzOiBbYC5seS10YWItbGFiZWwtaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MDtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6NDhweDtjdXJzb3I6cG9pbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3R7bWFyZ2luOjAgOHB4fTpob3N0IC9kZWVwLyBbbHktdGFiLWxhYmVsXXtkaXNwbGF5OmJsb2NrfS5seS10YWItbGFiZWwtaXRlbSAvZGVlcC97LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fS5seS10YWItbGFiZWwtaXRlbSAvZGVlcC8gW2x5LWJ1dHRvbl0sLmx5LXRhYi1sYWJlbC1pdGVtIC9kZWVwLyBseS1idXR0b257aGVpZ2h0OjEwMCU7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlci1yYWRpdXM6MH0ubHktdGFiLWxhYmVsLWl0ZW0gL2RlZXAvIC5seS1idXR0b24tcGFkZGluZy1sZWZ0e3BhZGRpbmctbGVmdDo4cHh9Lmx5LXRhYi1sYWJlbC1pdGVtIC9kZWVwLyAubHktYnV0dG9uLXBhZGRpbmctcmlnaHR7cGFkZGluZy1yaWdodDo4cHh9Lmx5LXRhYi1sYWJlbC1pdGVtIC9kZWVwLyBseS10YWItbGFiZWw6bm90KFtseS1idXR0b25dKXtwYWRkaW5nOjAgOHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7d2hpdGUtc3BhY2U6bm93cmFwfWBdLFxuICB0ZW1wbGF0ZTogYDwhLS0gPGJ1dHRvbiBseS1idXR0b24gKG1vdXNlZG93bik9XCJzb2x0KClcIiAoY2xpY2spPVwic2V0SW5kZXgoX2luZGV4KVwiIGNsYXNzPVwibHktdGFiLWxhYmVsLWl0ZW1cIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS10YWItbGFiZWxcIj48L25nLWNvbnRlbnQ+XHJcbjwvYnV0dG9uPiAtLT5cclxuPGRpdiAobW91c2Vkb3duKT1cInNvbHQoKVwiIChjbGljayk9XCJzZXRJbmRleChfaW5kZXgpXCIgW25nU3R5bGVdPVwidGFiU3R5bGVzXCIgY2xhc3M9XCJseS10YWItbGFiZWwtaXRlbVwiIGx5UmlwcGxlPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXRhYi1sYWJlbFwiPjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbHktdGFiLWxhYmVsXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5gLFxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiB7XG4gIF9pbmRleCA9IDA7XG4gIF9pbmRleEdyb3VwID0gMDtcbiAgc3RhdGVUYWI6IGJvb2xlYW47XG4gIHByaXZhdGUgdGltZW91dDogYW55O1xuICBwdWJsaWMgdGFiUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKEx5QnV0dG9uKSBseUJ1dHRvbjogTHlCdXR0b247XG4gIGdldCB0YWJTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtjb2xvcjogJ2N1cnJlbnRDb2xvcid9O1xuICB9XG4gIGxsT29yciguLi5hcmc6IGFueVtdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYXJnWzBdIDwgYXJnWzFdID8gJ3InIDogJ2wnO1xuICB9XG4gIHNvbHQoKSB7XG4gIH1cbiAgZW1pdENoYW5nZShpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5seVRhYkdyb3VwLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gIH1cbiAgd2lkdGhFeGFjdGEoZWxlbTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIHJldHVybiBlbGVtLm9mZnNldFdpZHRoO1xuICAgIC8vIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAvLyAgIHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAvLyB9XG4gIH1cbiAgZmxvb3IobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIHJldHVybiBNYXRoLnJvdW5kKG51bSk7XG4gICAgcmV0dXJuIChudW0pO1xuICB9XG4gIHNldEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBldiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCByZXN0V2kgPSAwO1xuICAgIGNvbnN0IHRhYkxhYmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgcmVzdFdpID0gdGhpcy53aWR0aEV4YWN0YShldikgLSB0aGlzLndpZHRoRXhhY3RhKHRhYkxhYmVsKTtcbiAgICAvLyBldiA9IHRhYkxhYmVsIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHc6IG51bWJlciA9IHRoaXMuZmxvb3IodGhpcy5seVRhYkdyb3VwLl90YWJzQ29udGVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKTtcblxuICAgIGNvbnN0IGxsT29yciA9IHRoaXMubGxPb3JyKHRoaXMubHlUYWJHcm91cC5fc2VsZWN0ZWRJbmRleCwgaW5kZXgpO1xuICAgIGxldCBwcmV2SW5kZXg6IG51bWJlciA9IHRoaXMubHlUYWJHcm91cC5fc2VsZWN0ZWRJbmRleDtcbiAgICBsZXQgZXZlOiBhbnk7XG4gICAgdGhpcy5seVRhYkdyb3VwLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgLy8gdGhpcy5seVRhYkdyb3VwLnVwZGF0ZVRhYnNIZWFkZXIoKTtcbiAgICBsZXQgZFc6IG51bWJlcjtcbiAgICBsZXQgZEw6IG51bWJlcjtcbiAgICAvLyBsZXQgb3V0RWY6IGFueSA9IHNldFRpbWVvdXQoKCkgPT4ge30pO1xuICAgIC8vIGNsZWFyVGltZW91dChvdXRFZik7XG4gICAgaWYgKHRoaXMubHlUYWJHcm91cC50aW1lb3V0KSB7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGltZW91dC5jYWxsYmFjaygpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubHlUYWJHcm91cC50aW1lb3V0KTtcbiAgICAgIHRoaXMubHlUYWJHcm91cC50aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgLy8gaWYgKHRhYkxhYmVsLmNsYXNzTmFtZSAhPSAnbHktdGFiLWxhYmVsLWl0ZW0nKSB7XG4gICAgLy8gICBldmUgPSBnZXRQYXJlbnRzKHRhYkxhYmVsLCAnLmx5LXRhYi1sYWJlbC1pdGVtJyk7XG4gICAgLy8gICBkVyA9IGdldFBhcmVudHModGFiTGFiZWwsICcubHktdGFiLWxhYmVsLWl0ZW0nKS5vZmZzZXRXaWR0aDtcbiAgICAvLyAgIGRMID0gZ2V0UGFyZW50cyh0YWJMYWJlbCwgJy5seS10YWItbGFiZWwtaXRlbScpLm9mZnNldExlZnQ7XG4gICAgLy8gfSBlbHNlIHtcbiAgICBldmUgPSBldjtcbiAgICBkVyA9IHRoaXMuZmxvb3IodGFiTGFiZWwub2Zmc2V0V2lkdGgpO1xuICAgIGRMID0gdGhpcy5mbG9vcih0YWJMYWJlbC5vZmZzZXRMZWZ0KTtcbiAgICAvLyB9XG4gICAgaWYgKGxsT29yciA9PT0gJ3InKSB7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiV2lkdGggPSBkVztcbiAgICAgIC8vIHRoaXMubHlUYWJHcm91cC50YWJMZWZ0ICA9IGRMO1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gdyAtIGRMO1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgID0gZEw7XG4gICAgICBsZXQgc2lic1c6IGFueSA9IDA7XG4gICAgICBjb25zdCBzaWJzSUQ6IGFueSA9IFtdO1xuICAgICAgY29uc3QgdGhpc1cgPSBldmUucHJldmlvdXNTaWJsaW5nLm9mZnNldFdpZHRoO1xuICAgICAgLy8gY2xlYXJUaW1lb3V0KG91dEVmKTtcbiAgICAgIHRoaXMubHlUYWJHcm91cC50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IGRXO1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCAgPSBkTDtcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcbiAgICAgIH0sIDQ3NSk7XG4gICAgICB3aGlsZSAoZXZlID0gZXZlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBpZiAoZXZlLm5vZGVOYW1lID09PSAnTFktVEFCJykge1xuICAgICAgICAgIHNpYnNJRC5wdXNoKGV2ZSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgc2lic0lELnJldmVyc2UoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lic0lELmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPD0gaSkge1xuICAgICAgICAgIHNpYnNXID0gc2lic0lEW2ldLm9mZnNldFdpZHRoICsgc2lic1cgKyAodGhpcy5seVRhYkdyb3VwLl9tYXJnaW4gfHwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gc2lic1cgKyBkVztcblxuICAgIH0gZWxzZSBpZiAobGxPb3JyID09PSAnbCcpIHtcbiAgICAgIGxldCBzaWJzVzogYW55ID0gMDtcbiAgICAgIGNvbnN0IHNpYnNJRDogYW55ID0gW107XG4gICAgICAvLyBsZXQgdGhpc1cgPSBldmUucHJldmlvdXNTaWJsaW5nLm9mZnNldFdpZHRoO1xuICAgICAgcHJldkluZGV4ID0gKHRoaXMubHlUYWJHcm91cC50YWJSb3dzIC0gMSkgLSBwcmV2SW5kZXg7XG4gICAgICB0aGlzLmx5VGFiR3JvdXAudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCAgPSBkTDtcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gZFc7XG4gICAgICAgIHRoaXMubHlUYWJHcm91cC50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5seVRhYkdyb3VwLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XG4gICAgICB9LCA0NzUpO1xuICAgICAgd2hpbGUgKGV2ZSA9IGV2ZS5uZXh0U2libGluZykge1xuICAgICAgICBpZiAoZXZlLm5vZGVOYW1lID09PSAnTFktVEFCJykge1xuICAgICAgICAgIHNpYnNJRC5wdXNoKGV2ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNpYnNJRC5yZXZlcnNlKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpYnNJRC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA+PSBwcmV2SW5kZXgpIHtcbiAgICAgICAgICBzaWJzVyA9IHNpYnNJRFtpXS5vZmZzZXRXaWR0aCArIHNpYnNXICsgKHRoaXMubHlUYWJHcm91cC5fbWFyZ2luIHx8IDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHRoaXMubHlUYWJHcm91cC50YWJXaWR0aCA9IHNpYnNXICsgZFc7XG4gICAgICB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCAgPSBkTDtcblxuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gZFc7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCAgPSBkTDtcbiAgICB9XG4gIH1cbiAgcHVibGljIHVwZGF0ZVRhYkxpbmUoKSB7XG4gICAgLy8gdGhpcy5seVRhYkdyb3VwLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gZXYub2Zmc2V0V2lkdGg7XG4gICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYkxlZnQgPSBldi5vZmZzZXRMZWZ0O1xuICB9XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBseVRhYkdyb3VwOiBMeVRhYkdyb3VwQ29tcG9uZW50O1xuICBnZXQgaW5kZXhHcm91cCgpIHtcbiAgICB0aGlzLl9pbmRleEdyb3VwID0gdGhpcy5seVRhYkdyb3VwLl9zZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiB0aGlzLl9pbmRleEdyb3VwO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIGx5VGFiR3JvdXA6IEx5VGFiR3JvdXBDb21wb25lbnQsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMubHlUYWJHcm91cCA9IGx5VGFiR3JvdXA7XG4gICAgdGhpcy5faW5kZXhHcm91cCA9IHRoaXMubHlUYWJHcm91cC5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdGF0ZVRhYiA9ICEodGhpcy5faW5kZXggPT0gdGhpcy5pbmRleEdyb3VwKTtcbiAgICBpZiAodGhpcy5zdGF0ZVRhYikge1xuICAgICAgLy8gdGhpcy5seVRhYkdyb3VwLnRhYldpZHRoID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAvLyB0aGlzLmx5VGFiR3JvdXAudGFiTGVmdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgfVxuICB9XG59XG4iXX0=