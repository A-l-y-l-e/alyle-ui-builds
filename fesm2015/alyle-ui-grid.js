import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -1;
/**
 * \@docs-private
 * @type {?}
 */
const COL_VALUES = {};
/** @type {?} */
const ALIGN_ALIAS = {
    rowReverse: 'row-reverse',
    columnReverse: 'column-reverse',
    wrapReverse: 'wrap-reverse',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
};
/** @type {?} */
const styles = ({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    }
});
/**
 * Grid container
 * example:
 * <ly-grid container [spacing]="'16 8\@XSmall'">
 *   <ly-grid item [col]="'6 12\@XSmall'">
 *     <div>6 12\@XSmall</div>
 *   </ly-grid>
 *   <ly-grid item [col]="'6 12\@XSmall'">
 *     <div>6 12\@XSmall</div>
 *   </ly-grid>
 * </ly-grid>
 */
class LyGrid {
    /**
     * @param {?} theme
     * @param {?} el
     */
    constructor(theme, el) {
        this.theme = theme;
        this.el = el;
        /**
         * Styles
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.el.nativeElement.classList.add(this.classes.root);
    }
    /**
     * Defines the space between the component with the `item` attribute.
     * @return {?}
     */
    get spacing() {
        return this._spacing;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set spacing(val) {
        if (val !== this.spacing) {
            this._spacing = val;
            this._spacingClass = this.theme.addStyle(`lyGrid-spacing:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return `padding:${val / 2}px;`;
                }
                else {
                    /** @type {?} */
                    const spacingStyles = {};
                    eachMedia(val, (value, media, len) => {
                        /** @type {?} */
                        const padding = `${(+value) / 2}px`;
                        if (len) {
                            spacingStyles[theme.getBreakpoint(media)] = {
                                padding
                            };
                        }
                        else {
                            spacingStyles.padding = padding;
                        }
                    });
                    return (/** @type {?} */ (spacingStyles));
                }
            }, undefined, undefined, STYLE_PRIORITY);
            this._negativeMarginClass = this.theme.addStyle(`lyGrid-negative-margin:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return `margin:${val / -2}px;width: calc(100% + ${val}px);`;
                }
                else {
                    /** @type {?} */
                    let negativeMarginStyles;
                    eachMedia(val, (value, media, len) => {
                        /** @type {?} */
                        const negativeMarginstyles = {
                            margin: `${(-value) / 2}px`,
                            width: `calc(100% + ${value}px)`
                        };
                        if (len) {
                            if (!negativeMarginStyles) {
                                negativeMarginStyles = {};
                            }
                            negativeMarginStyles[theme.getBreakpoint(media)] = negativeMarginstyles;
                        }
                        else {
                            negativeMarginStyles = negativeMarginstyles;
                        }
                    });
                    return (/** @type {?} */ (negativeMarginStyles));
                }
            }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get spacingClass() {
        return this._spacingClass;
    }
    /**
     * Defines the justify-content style property.
     * @return {?}
     */
    get justify() {
        return this._justify;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set justify(val) {
        if (val !== this.justify) {
            this._justify = val;
            this._justifyClass = this.theme.addStyle(`lyGrid-justify:${val}`, (theme) => {
                /** @type {?} */
                let justifyStyles;
                eachMedia(val, (value, media, isMedia) => {
                    /** @type {?} */
                    const newJustifyStyles = {
                        justifyContent: value in ALIGN_ALIAS
                            ? ALIGN_ALIAS[value]
                            : value
                    };
                    if (isMedia) {
                        if (!justifyStyles) {
                            justifyStyles = {};
                        }
                        justifyStyles[theme.getBreakpoint(media)] = newJustifyStyles;
                    }
                    else {
                        justifyStyles = newJustifyStyles;
                    }
                });
                return (/** @type {?} */ (justifyStyles));
            }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the justify-content style property.
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set direction(val) {
        if (val !== this.direction) {
            this._direction = val;
            this._directionClass = this.theme.addStyle(`lyGrid-direction:${val}`, (theme) => {
                /** @type {?} */
                let directionStyles;
                eachMedia(val, (value, media, isMedia) => {
                    /** @type {?} */
                    const newDirectionStyles = {
                        flexDirection: value in ALIGN_ALIAS
                            ? ALIGN_ALIAS[value]
                            : value
                    };
                    if (isMedia) {
                        if (!directionStyles) {
                            directionStyles = {};
                        }
                        directionStyles[theme.getBreakpoint(media)] = newDirectionStyles;
                    }
                    else {
                        directionStyles = newDirectionStyles;
                    }
                });
                return (/** @type {?} */ (directionStyles));
            }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
        }
    }
}
LyGrid.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[container]'
            },] }
];
/** @nocollapse */
LyGrid.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyGrid.propDecorators = {
    spacing: [{ type: Input }],
    justify: [{ type: Input }],
    direction: [{ type: Input }]
};
class LyGridItem {
    /**
     * @param {?} gridContainer
     * @param {?} el
     * @param {?} theme
     */
    constructor(gridContainer, el, theme) {
        this.gridContainer = gridContainer;
        this.el = el;
        this.theme = theme;
        if (!gridContainer) {
            throw new Error(`Require parent grid`);
        }
    }
    /**
     * Defines the number of grids
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set col(val) {
        if (val !== this.col) {
            this._col = val;
            this._colClass = this.theme.addStyle(`lyGrid-col:${val}`, (theme) => {
                if (typeof val === 'number') {
                    return getColStyle(val);
                }
                else {
                    /** @type {?} */
                    let colStyles;
                    eachMedia(val, (value, media, len) => {
                        /** @type {?} */
                        const newColStyles = getColStyle(+value);
                        if (len) {
                            if (!colStyles) {
                                colStyles = {};
                            }
                            colStyles[theme.getBreakpoint(media)] = newColStyles;
                        }
                        else {
                            colStyles = newColStyles;
                        }
                    });
                    return (/** @type {?} */ (colStyles));
                }
            }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
        }
    }
    /**
     * Defines the order style property.
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set order(val) {
        if (val !== this.order) {
            this._order = val;
            this._orderClass = this.theme.addStyle(`lyGrid-order:${val}`, (theme) => {
                /** @type {?} */
                let orderStyles;
                eachMedia(`${val}`, (value, media, isMedia) => {
                    /** @type {?} */
                    const newOrderStyles = {
                        order: value
                    };
                    if (isMedia) {
                        if (!orderStyles) {
                            orderStyles = {};
                        }
                        orderStyles[theme.getBreakpoint(media)] = newOrderStyles;
                    }
                    else {
                        orderStyles = newOrderStyles;
                    }
                });
                return (/** @type {?} */ (orderStyles));
            }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateSpacing();
    }
    /**
     * @return {?}
     */
    _updateSpacing() {
        if (this.gridContainer.spacingClass) {
            this.el.nativeElement.classList.add(this.gridContainer.spacingClass);
        }
    }
}
LyGridItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[item]'
            },] }
];
/** @nocollapse */
LyGridItem.ctorParameters = () => [
    { type: LyGrid },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyGridItem.propDecorators = {
    col: [{ type: Input }],
    order: [{ type: Input }]
};
/**
 * @param {?} val
 * @return {?}
 */
function getColStyle(val) {
    return {
        maxWidth: val ? getColVal(val) : '100%',
        flexBasis: val ? getColVal(val) : 0,
        flexGrow: val ? 0 : 1
    };
}
/**
 * @param {?} val
 * @return {?}
 */
function getColVal(val) {
    return val in COL_VALUES
        ? COL_VALUES[val]
        : COL_VALUES[val] = `${+val * 100 / 12}%`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyGridModule {
}
LyGridModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyGrid, LyGridItem],
                declarations: [LyGrid, LyGridItem]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyGrid, LyGridItem, LyGridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC50cyIsIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG5leHBvcnQgdHlwZSBKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdldmVubHknO1xuZXhwb3J0IHR5cGUgRGlyZWN0aW9uID0gJ3JvdycgfCAncm93UmV2ZXJzZScgfCAnY29sdW1uJyB8ICdjb2x1bW5SZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICogZXhhbXBsZTpcbiAqIDxseS1ncmlkIGNvbnRhaW5lciBbc3BhY2luZ109XCInMTYgOEBYU21hbGwnXCI+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiA8L2x5LWdyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BhY2luZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1uZWdhdGl2ZS1tYXJnaW46JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gYG1hcmdpbjoke3ZhbCAvIC0yfXB4O3dpZHRoOiBjYWxjKDEwMCUgKyAke3ZhbH1weCk7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbmVnYXRpdmVNYXJnaW5TdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbj86IHN0cmluZ1xuICAgICAgICAgICAgd2lkdGg/OiBzdHJpbmdcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVnYXRpdmVNYXJnaW5zdHlsZXMgPSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogYCR7KC12YWx1ZSkgLyAyfXB4YCxcbiAgICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAke3ZhbHVlfXB4KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghbmVnYXRpdmVNYXJnaW5TdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBnZXQgc3BhY2luZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nQ2xhc3M7XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmeSgpOiBKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuICBzZXQganVzdGlmeSh2YWw6IEp1c3RpZnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmp1c3RpZnkpIHtcbiAgICAgIHRoaXMuX2p1c3RpZnkgPSB2YWw7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganVzdGlmeVN0eWxlcyA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGp1c3RpZnlTdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9qdXN0aWZ5Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbDtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlyZWN0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cblxuXG4gIC8qKiBEZWZpbmVzIHRoZSBvcmRlciBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG9yZGVyKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xuICB9XG4gIHNldCBvcmRlcih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMub3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gdmFsO1xuICAgICAgdGhpcy5fb3JkZXJDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1vcmRlcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBvcmRlclN0eWxlczoge1xuICAgICAgICAgIG9yZGVyPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYShgJHt2YWx9YCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld09yZGVyU3R5bGVzID0ge1xuICAgICAgICAgICAgb3JkZXI6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFvcmRlclN0eWxlcykge1xuICAgICAgICAgICAgICBvcmRlclN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JkZXJTdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9yZGVyU3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fb3JkZXJDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgcGFyZW50IGdyaWRgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5R3JpZCwgTHlHcmlkSXRlbSB9IGZyb20gJy4vZ3JpZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtMeUdyaWQsIEx5R3JpZEl0ZW1dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUdyaWQsIEx5R3JpZEl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7TUFHTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7OztNQUduQixVQUFVLEdBQUcsRUFBRzs7TUFFaEIsV0FBVyxHQUFHO0lBQ2xCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsV0FBVyxFQUFFLGNBQWM7SUFDM0IsS0FBSyxFQUFFLFlBQVk7SUFDbkIsR0FBRyxFQUFFLFVBQVU7SUFDZixPQUFPLEVBQUUsZUFBZTtJQUN4QixNQUFNLEVBQUUsY0FBYztJQUN0QixNQUFNLEVBQUUsY0FBYztDQUN2Qjs7TUFFSyxNQUFNLElBQUk7SUFDZCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7Q0FDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FBb0JGLE1BQWEsTUFBTTs7Ozs7SUFpSmpCLFlBQ1UsS0FBZSxFQUNmLEVBQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2YsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7Ozs7UUE5SXhCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFnSnpELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4RDs7Ozs7SUFqSUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEdBQW9CO1FB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