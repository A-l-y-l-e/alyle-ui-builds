/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Optional, Inject } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';
/** @type {?} */
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
/** @typedef {?} */
var Justify;
/** @typedef {?} */
var Direction;
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
export class LyGrid {
    /**
     * @param {?} mediaQueries
     * @param {?} theme
     * @param {?} el
     */
    constructor(mediaQueries, theme, el) {
        this.mediaQueries = mediaQueries;
        this.theme = theme;
        this.el = el;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, 'lyGrid');
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
            this._spacingClass = this.theme.addStyle(`lyGrid-spacing:${val}`, () => {
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
                            spacingStyles[`@media ${this.mediaQueries[media]}`] = {
                                padding
                            };
                        }
                        else {
                            spacingStyles.padding = padding;
                        }
                    });
                    return /** @type {?} */ (spacingStyles);
                }
            });
            this._negativeMarginClass = this.theme.addStyle(`lyGrid-negative-margin:${val}`, () => {
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
                            negativeMarginStyles[`@media ${this.mediaQueries[media]}`] = negativeMarginstyles;
                        }
                        else {
                            negativeMarginStyles = negativeMarginstyles;
                        }
                    });
                    return /** @type {?} */ (negativeMarginStyles);
                }
            }, this.el.nativeElement, this._negativeMarginClass);
        }
    }
    /**
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
            this._justifyClass = this.theme.addStyle(`lyGrid-justify:${val}`, () => {
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
                        justifyStyles[`@media ${this.mediaQueries[media]}`] = newJustifyStyles;
                    }
                    else {
                        justifyStyles = newJustifyStyles;
                    }
                });
                return /** @type {?} */ (justifyStyles);
            }, this.el.nativeElement, this._justifyClass);
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
            this._directionClass = this.theme.addStyle(`lyGrid-direction:${val}`, () => {
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
                        directionStyles[`@media ${this.mediaQueries[media]}`] = newDirectionStyles;
                    }
                    else {
                        directionStyles = newDirectionStyles;
                    }
                });
                return /** @type {?} */ (directionStyles);
            }, this.el.nativeElement, this._directionClass);
        }
    }
}
LyGrid.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[container]'
            },] },
];
/** @nocollapse */
LyGrid.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
    { type: LyTheme2 },
    { type: ElementRef }
];
LyGrid.propDecorators = {
    spacing: [{ type: Input }],
    justify: [{ type: Input }],
    direction: [{ type: Input }]
};
if (false) {
    /**
     * Styles
     * @ignore
     * @type {?}
     */
    LyGrid.prototype.classes;
    /** @type {?} */
    LyGrid.prototype._spacing;
    /** @type {?} */
    LyGrid.prototype._spacingClass;
    /** @type {?} */
    LyGrid.prototype._negativeMarginClass;
    /** @type {?} */
    LyGrid.prototype._justify;
    /** @type {?} */
    LyGrid.prototype._justifyClass;
    /** @type {?} */
    LyGrid.prototype._direction;
    /** @type {?} */
    LyGrid.prototype._directionClass;
    /** @type {?} */
    LyGrid.prototype.mediaQueries;
    /** @type {?} */
    LyGrid.prototype.theme;
    /** @type {?} */
    LyGrid.prototype.el;
}
export class LyGridCol {
    /**
     * @param {?} mediaQueries
     * @param {?} gridContainer
     * @param {?} el
     * @param {?} theme
     */
    constructor(mediaQueries, gridContainer, el, theme) {
        this.mediaQueries = mediaQueries;
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
            this._colClass = this.theme.addStyle(`lyGrid-col:${val}`, () => {
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
                            colStyles[`@media ${this.mediaQueries[media]}`] = newColStyles;
                        }
                        else {
                            colStyles = newColStyles;
                        }
                    });
                    return /** @type {?} */ (colStyles);
                }
            }, this.el.nativeElement, this._colClass);
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
LyGridCol.decorators = [
    { type: Directive, args: [{
                selector: 'ly-grid[item]'
            },] },
];
/** @nocollapse */
LyGridCol.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_MEDIA_QUERIES,] }] },
    { type: LyGrid },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyGridCol.propDecorators = {
    col: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyGridCol.prototype._col;
    /** @type {?} */
    LyGridCol.prototype._colClass;
    /** @type {?} */
    LyGridCol.prototype.mediaQueries;
    /** @type {?} */
    LyGridCol.prototype.gridContainer;
    /** @type {?} */
    LyGridCol.prototype.el;
    /** @type {?} */
    LyGridCol.prototype.theme;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXhELE1BQU0sVUFBVSxHQUFHLEVBQUcsQ0FBQzs7QUFFdkIsTUFBTSxXQUFXLEdBQUc7SUFDbEIsVUFBVSxFQUFFLGFBQWE7SUFDekIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixXQUFXLEVBQUUsY0FBYztJQUMzQixLQUFLLEVBQUUsWUFBWTtJQUNuQixHQUFHLEVBQUUsVUFBVTtJQUNmLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE1BQU0sRUFBRSxjQUFjO0NBQ3ZCLENBQUM7O0FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsWUFBWTtLQUN4QjtDQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkgsTUFBTTs7Ozs7O0lBOElKLFlBQ2dELFlBQWlCLEVBQ3ZELE9BQ0E7UUFGc0MsaUJBQVksR0FBWixZQUFZLENBQUs7UUFDdkQsVUFBSyxHQUFMLEtBQUs7UUFDTCxPQUFFLEdBQUYsRUFBRTs7Ozs7dUJBNUlGLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7UUE4SWxELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMs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Ozs7O1lBM0RKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7Ozs0Q0F3Q0ksUUFBUSxZQUFJLE1BQU0sU0FBQyxnQkFBZ0I7WUFDYixNQUFNO1lBOU9iLFVBQVU7WUFDckIsUUFBUTs7O2tCQTBNZCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEUixxQkFBcUIsR0FBVztJQUM5QixPQUFPO1FBQ0wsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3ZDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEIsQ0FBQztDQUNIOzs7OztBQUVELG1CQUFtQixHQUFvQjtJQUNyQyxPQUFPLEdBQUcsSUFBSSxVQUFVO1FBQ1osQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDakIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztDQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9wdGlvbmFsLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnQGFseWxlL3VpL3Jlc3BvbnNpdmUnO1xuXG5jb25zdCBDT0xfVkFMVUVTID0geyB9O1xuXG5jb25zdCBBTElHTl9BTElBUyA9IHtcbiAgcm93UmV2ZXJzZTogJ3Jvdy1yZXZlcnNlJyxcbiAgY29sdW1uUmV2ZXJzZTogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2U6ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydDogJ2ZsZXgtc3RhcnQnLFxuICBlbmQ6ICdmbGV4LWVuZCcsXG4gIGJldHdlZW46ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgZXZlbmx5OiAnc3BhY2UtZXZlbmx5Jyxcbn07XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn0pO1xuXG50eXBlIEp1c3RpZnkgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdiZXR3ZWVuJyB8ICdhcm91bmQnIHwgJ2V2ZW5seSc7XG50eXBlIERpcmVjdGlvbiA9ICdyb3cnIHwgJ3Jvdy1yZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtbi1yZXZlcnNlJztcblxuLyoqXG4gKiBHcmlkIGNvbnRhaW5lclxuICogZXhhbXBsZTpcbiAqIDxseS1ncmlkIGNvbnRhaW5lciBbc3BhY2luZ109XCInMTYgOEBYU21hbGwnXCI+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiAgIDxseS1ncmlkIGl0ZW0gW2NvbF09XCInNiAxMkBYU21hbGwnXCI+XG4gKiAgICAgPGRpdj42IDEyQFhTbWFsbDwvZGl2PlxuICogICA8L2x5LWdyaWQ+XG4gKiA8L2x5LWdyaWQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbY29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkIHtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5R3JpZCcpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BhY2luZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzcGFjaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdDbGFzcztcbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBqdXN0aWZ5KCk6IEp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG4gIHNldCBqdXN0aWZ5KHZhbDogSnVzdGlmeSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuanVzdGlmeSkge1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXJlY3Rpb25DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1ncmlkW2l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRDb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9jb2w6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb2xTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LFxuICAgIHByaXZhdGUgZ3JpZENvbnRhaW5lcjogTHlHcmlkLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKCFncmlkQ29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmUgcGFyZW50IGdyaWRgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVTcGFjaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTcGFjaW5nKCkge1xuICAgIGlmICh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdyaWRDb250YWluZXIuc3BhY2luZ0NsYXNzKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBnZXRDb2xTdHlsZSh2YWw6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1heFdpZHRoOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6ICcxMDAlJyxcbiAgICBmbGV4QmFzaXM6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogMCxcbiAgICBmbGV4R3JvdzogdmFsID8gMCA6IDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sVmFsKHZhbDogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbCBpbiBDT0xfVkFMVUVTXG4gICAgICAgICAgICAgID8gQ09MX1ZBTFVFU1t2YWxdXG4gICAgICAgICAgICAgIDogQ09MX1ZBTFVFU1t2YWxdID0gYCR7K3ZhbCAqIDEwMCAvIDEyfSVgO1xufVxuIl19