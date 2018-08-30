import { Directive, ElementRef, Input, Optional, Inject, NgModule } from '@angular/core';
import { LyTheme2, eachMedia } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '@alyle/ui/responsive';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
class LyGridCol {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyGridModule {
}
LyGridModule.decorators = [
    { type: NgModule, args: [{
                exports: [LyGrid, LyGridCol],
                declarations: [LyGrid, LyGridCol]
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

export { LyGrid, LyGridCol, LyGridModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC50cyIsIm5nOi8vQGFseWxlL3VpL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3B0aW9uYWwsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgZWFjaE1lZGlhIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICdAYWx5bGUvdWkvcmVzcG9uc2l2ZSc7XG5cbmNvbnN0IENPTF9WQUxVRVMgPSB7IH07XG5cbmNvbnN0IEFMSUdOX0FMSUFTID0ge1xuICByb3dSZXZlcnNlOiAncm93LXJldmVyc2UnLFxuICBjb2x1bW5SZXZlcnNlOiAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZTogJ3dyYXAtcmV2ZXJzZScsXG4gIHN0YXJ0OiAnZmxleC1zdGFydCcsXG4gIGVuZDogJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbjogJ3NwYWNlLWJldHdlZW4nLFxuICBhcm91bmQ6ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHk6ICdzcGFjZS1ldmVubHknLFxufTtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgfVxufSk7XG5cbnR5cGUgSnVzdGlmeSA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ2JldHdlZW4nIHwgJ2Fyb3VuZCcgfCAnZXZlbmx5JztcbnR5cGUgRGlyZWN0aW9uID0gJ3JvdycgfCAncm93LXJldmVyc2UnIHwgJ2NvbHVtbicgfCAnY29sdW1uLXJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlHcmlkJyk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBwYWRkaW5nOiR7dmFsIC8gMn1weDtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNwYWNpbmdTdHlsZXMucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHNwYWNpbmdTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBtYXJnaW46JHt2YWwgLyAtMn1weDt3aWR0aDogY2FsYygxMDAlICsgJHt2YWx9cHgpO2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzID0ge1xuICAgICAgICAgICAgICBtYXJnaW46IGAkeygtdmFsdWUpIC8gMn1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlcyA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBuZWdhdGl2ZU1hcmdpblN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fbmVnYXRpdmVNYXJnaW5DbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNwYWNpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ0NsYXNzO1xuICB9XG5cbiAgLyoqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZnkoKTogSnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cbiAgc2V0IGp1c3RpZnkodmFsOiBKdXN0aWZ5KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5qdXN0aWZ5KSB7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fanVzdGlmeUNsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuICBzZXQgZGlyZWN0aW9uKHZhbDogRGlyZWN0aW9uKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWRpcmVjdGlvbjoke3ZhbH1gLCAoKSA9PiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25TdHlsZXM6IHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb25TdHlsZXMgPSB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB2YWx1ZSBpbiBBTElHTl9BTElBU1xuICAgICAgICAgICAgPyBBTElHTl9BTElBU1t2YWx1ZV1cbiAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvblN0eWxlcykge1xuICAgICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RpcmVjdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZENvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbCgpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgc2V0IGNvbCh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sKSB7XG4gICAgICB0aGlzLl9jb2wgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1jb2w6JHt2YWx9YCwgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q29sU3R5bGUodmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29sU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXhXaWR0aD86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEJhc2lzPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4R3Jvdz86IG51bWJlclxuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdDb2xTdHlsZXMgPSBnZXRDb2xTdHlsZSgrdmFsdWUpO1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIWNvbFN0eWxlcykge1xuICAgICAgICAgICAgICAgIGNvbFN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbFN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sU3R5bGVzID0gbmV3Q29sU3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjb2xTdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZSBwYXJlbnQgZ3JpZGApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldENvbFN0eWxlKHZhbDogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgbWF4V2lkdGg6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogJzEwMCUnLFxuICAgIGZsZXhCYXNpczogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAwLFxuICAgIGZsZXhHcm93OiB2YWwgPyAwIDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xWYWwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsIGluIENPTF9WQUxVRVNcbiAgICAgICAgICAgICAgPyBDT0xfVkFMVUVTW3ZhbF1cbiAgICAgICAgICAgICAgOiBDT0xfVkFMVUVTW3ZhbF0gPSBgJHsrdmFsICogMTAwIC8gMTJ9JWA7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlHcmlkLCBMeUdyaWRDb2wgfSBmcm9tICcuL2dyaWQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlHcmlkLCBMeUdyaWRDb2xdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUdyaWQsIEx5R3JpZENvbF1cbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFJQSxNQUFNLFVBQVUsR0FBRyxFQUFHLENBQUM7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