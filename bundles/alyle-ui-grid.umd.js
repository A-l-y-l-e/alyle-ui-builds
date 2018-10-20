(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
  typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@angular/core', '@alyle/ui'], factory) :
  (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.grid = {}),global.ng.core,global.alyle.ui));
}(this, (function (exports,core,ui) { 'use strict';

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
   */
  /** @type {?} */
  var STYLE_PRIORITY = -1;
  /** *
   * @ignore
    @type {?} */
  var COL_VALUES = {};
  /** @type {?} */
  var ALIGN_ALIAS = {
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
  var styles = ({
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
  var LyGrid = /** @class */ (function () {
      function LyGrid(theme, el) {
          this.theme = theme;
          this.el = el;
          /**
           * Styles
           * @ignore
           */
          this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
          this.el.nativeElement.classList.add(this.classes.root);
      }
      Object.defineProperty(LyGrid.prototype, "spacing", {
          /**
           * Defines the space between the component with the `item` attribute.
           */
          get: /**
           * Defines the space between the component with the `item` attribute.
           * @return {?}
           */ function () {
              return this._spacing;
          },
          set: /**
           * @param {?} val
           * @return {?}
           */ function (val) {
              if (val !== this.spacing) {
                  this._spacing = val;
                  this._spacingClass = this.theme.addStyle("lyGrid-spacing:" + val, function (theme) {
                      if (typeof val === 'number') {
                          return "padding:" + val / 2 + "px;";
                      }
                      else {
                          /** @type {?} */
                          var spacingStyles_1 = {};
                          ui.eachMedia(val, function (value, media, len) {
                              /** @type {?} */
                              var padding = (+value) / 2 + "px";
                              if (len) {
                                  // spacingStyles[`@media ${this.mediaQueries[media]}`] = {
                                  spacingStyles_1[theme.getBreakpoint(media)] = {
                                      padding: padding
                                  };
                              }
                              else {
                                  spacingStyles_1.padding = padding;
                              }
                          });
                          return /** @type {?} */ (spacingStyles_1);
                      }
                  }, undefined, undefined, STYLE_PRIORITY);
                  this._negativeMarginClass = this.theme.addStyle("lyGrid-negative-margin:" + val, function (theme) {
                      if (typeof val === 'number') {
                          return "margin:" + val / -2 + "px;width: calc(100% + " + val + "px);";
                      }
                      else {
                          /** @type {?} */
                          var negativeMarginStyles_1 = void 0;
                          ui.eachMedia(val, function (value, media, len) {
                              /** @type {?} */
                              var negativeMarginstyles = {
                                  margin: (-value) / 2 + "px",
                                  width: "calc(100% + " + value + "px)"
                              };
                              if (len) {
                                  if (!negativeMarginStyles_1) {
                                      negativeMarginStyles_1 = {};
                                  }
                                  // negativeMarginStyles[`@media ${this.mediaQueries[media]}`] = negativeMarginstyles;
                                  negativeMarginStyles_1[theme.getBreakpoint(media)] = negativeMarginstyles;
                              }
                              else {
                                  negativeMarginStyles_1 = negativeMarginstyles;
                              }
                          });
                          return /** @type {?} */ (negativeMarginStyles_1);
                      }
                  }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
              }
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(LyGrid.prototype, "spacingClass", {
          get: /**
           * @return {?}
           */ function () {
              return this._spacingClass;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(LyGrid.prototype, "justify", {
          /** Defines the justify-content style property. */
          get: /**
           * Defines the justify-content style property.
           * @return {?}
           */ function () {
              return this._justify;
          },
          set: /**
           * @param {?} val
           * @return {?}
           */ function (val) {
              if (val !== this.justify) {
                  this._justify = val;
                  this._justifyClass = this.theme.addStyle("lyGrid-justify:" + val, function (theme) {
                      /** @type {?} */
                      var justifyStyles;
                      ui.eachMedia(val, function (value, media, isMedia) {
                          /** @type {?} */
                          var newJustifyStyles = {
                              justifyContent: value in ALIGN_ALIAS
                                  ? ALIGN_ALIAS[value]
                                  : value
                          };
                          if (isMedia) {
                              if (!justifyStyles) {
                                  justifyStyles = {};
                              }
                              // justifyStyles[`@media ${this.mediaQueries[media]}`] = newJustifyStyles;
                              justifyStyles[theme.getBreakpoint(media)] = newJustifyStyles;
                          }
                          else {
                              justifyStyles = newJustifyStyles;
                          }
                      });
                      return /** @type {?} */ (justifyStyles);
                  }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
              }
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(LyGrid.prototype, "direction", {
          /** Defines the justify-content style property. */
          get: /**
           * Defines the justify-content style property.
           * @return {?}
           */ function () {
              return this._direction;
          },
          set: /**
           * @param {?} val
           * @return {?}
           */ function (val) {
              if (val !== this.direction) {
                  this._direction = val;
                  this._directionClass = this.theme.addStyle("lyGrid-direction:" + val, function (theme) {
                      /** @type {?} */
                      var directionStyles;
                      ui.eachMedia(val, function (value, media, isMedia) {
                          /** @type {?} */
                          var newDirectionStyles = {
                              flexDirection: value in ALIGN_ALIAS
                                  ? ALIGN_ALIAS[value]
                                  : value
                          };
                          if (isMedia) {
                              if (!directionStyles) {
                                  directionStyles = {};
                              }
                              // directionStyles[`@media ${this.mediaQueries[media]}`] = newDirectionStyles;
                              directionStyles[theme.getBreakpoint(media)] = newDirectionStyles;
                          }
                          else {
                              directionStyles = newDirectionStyles;
                          }
                      });
                      return /** @type {?} */ (directionStyles);
                  }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
              }
          },
          enumerable: true,
          configurable: true
      });
      LyGrid.decorators = [
          { type: core.Directive, args: [{
                      selector: 'ly-grid[container]'
                  },] }
      ];
      /** @nocollapse */
      LyGrid.ctorParameters = function () {
          return [
              { type: ui.LyTheme2 },
              { type: core.ElementRef }
          ];
      };
      LyGrid.propDecorators = {
          spacing: [{ type: core.Input }],
          justify: [{ type: core.Input }],
          direction: [{ type: core.Input }]
      };
      return LyGrid;
  }());
  var LyGridItem = /** @class */ (function () {
      function LyGridItem(gridContainer, el, theme) {
          this.gridContainer = gridContainer;
          this.el = el;
          this.theme = theme;
          if (!gridContainer) {
              throw new Error("Require parent grid");
          }
      }
      Object.defineProperty(LyGridItem.prototype, "col", {
          /** Defines the number of grids */
          get: /**
           * Defines the number of grids
           * @return {?}
           */ function () {
              return this._col;
          },
          set: /**
           * @param {?} val
           * @return {?}
           */ function (val) {
              if (val !== this.col) {
                  this._col = val;
                  this._colClass = this.theme.addStyle("lyGrid-col:" + val, function (theme) {
                      if (typeof val === 'number') {
                          return getColStyle(val);
                      }
                      else {
                          /** @type {?} */
                          var colStyles_1 = void 0;
                          ui.eachMedia(val, function (value, media, len) {
                              /** @type {?} */
                              var newColStyles = getColStyle(+value);
                              if (len) {
                                  if (!colStyles_1) {
                                      colStyles_1 = {};
                                  }
                                  // colStyles[`@media ${this.mediaQueries[media]}`] = newColStyles;
                                  colStyles_1[theme.getBreakpoint(media)] = newColStyles;
                              }
                              else {
                                  colStyles_1 = newColStyles;
                              }
                          });
                          return /** @type {?} */ (colStyles_1);
                      }
                  }, this.el.nativeElement, this._colClass, STYLE_PRIORITY);
              }
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(LyGridItem.prototype, "order", {
          /** Defines the order style property. */
          get: /**
           * Defines the order style property.
           * @return {?}
           */ function () {
              return this._order;
          },
          set: /**
           * @param {?} val
           * @return {?}
           */ function (val) {
              if (val !== this.order) {
                  this._order = val;
                  this._orderClass = this.theme.addStyle("lyGrid-order:" + val, function (theme) {
                      /** @type {?} */
                      var orderStyles;
                      ui.eachMedia("" + val, function (value, media, isMedia) {
                          /** @type {?} */
                          var newOrderStyles = {
                              order: value
                          };
                          if (isMedia) {
                              if (!orderStyles) {
                                  orderStyles = {};
                              }
                              // orderStyles[`@media ${this.mediaQueries[media]}`] = newOrderStyles;
                              orderStyles[theme.getBreakpoint(media)] = newOrderStyles;
                          }
                          else {
                              orderStyles = newOrderStyles;
                          }
                      });
                      return /** @type {?} */ (orderStyles);
                  }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
              }
          },
          enumerable: true,
          configurable: true
      });
      /**
       * @return {?}
       */
      LyGridItem.prototype.ngOnInit = /**
       * @return {?}
       */
          function () {
              this._updateSpacing();
          };
      /**
       * @return {?}
       */
      LyGridItem.prototype._updateSpacing = /**
       * @return {?}
       */
          function () {
              if (this.gridContainer.spacingClass) {
                  this.el.nativeElement.classList.add(this.gridContainer.spacingClass);
              }
          };
      LyGridItem.decorators = [
          { type: core.Directive, args: [{
                      selector: 'ly-grid[item]'
                  },] }
      ];
      /** @nocollapse */
      LyGridItem.ctorParameters = function () {
          return [
              { type: LyGrid },
              { type: core.ElementRef },
              { type: ui.LyTheme2 }
          ];
      };
      LyGridItem.propDecorators = {
          col: [{ type: core.Input }],
          order: [{ type: core.Input }]
      };
      return LyGridItem;
  }());
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
          : COL_VALUES[val] = +val * 100 / 12 + "%";
  }

  /**
   * @fileoverview added by tsickle
   * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
   */
  var LyGridModule = /** @class */ (function () {
      function LyGridModule() {
      }
      LyGridModule.decorators = [
          { type: core.NgModule, args: [{
                      exports: [LyGrid, LyGridItem],
                      declarations: [LyGrid, LyGridItem]
                  },] }
      ];
      return LyGridModule;
  }());

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

  exports.LyGrid = LyGrid;
  exports.LyGridItem = LyGridItem;
  exports.LyGridModule = LyGridModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgQ09MX1ZBTFVFUyA9IHsgfTtcblxuY29uc3QgQUxJR05fQUxJQVMgPSB7XG4gIHJvd1JldmVyc2U6ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2U6ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlOiAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQ6ICdmbGV4LXN0YXJ0JyxcbiAgZW5kOiAnZmxleC1lbmQnLFxuICBiZXR3ZWVuOiAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZDogJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seTogJ3NwYWNlLWV2ZW5seScsXG59O1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxudHlwZSBKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdldmVubHknO1xudHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgcHJpdmF0ZSBfc3BhY2luZzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9zcGFjaW5nQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9uZWdhdGl2ZU1hcmdpbkNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfanVzdGlmeTogSnVzdGlmeTtcbiAgcHJpdmF0ZSBfanVzdGlmeUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIHByaXZhdGUgX2RpcmVjdGlvbkNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHNwYWNlIGJldHdlZW4gdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBgaXRlbWAgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNwYWNpbmcoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZztcbiAgfVxuICBzZXQgc3BhY2luZyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc3BhY2luZykge1xuICAgICAgdGhpcy5fc3BhY2luZyA9IHZhbDtcbiAgICAgIHRoaXMuX3NwYWNpbmdDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1zcGFjaW5nOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBwYWRkaW5nOiR7dmFsIC8gMn1weDtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNwYWNpbmdTdHlsZXM6IHtcbiAgICAgICAgICAgIHBhZGRpbmc/OiBzdHJpbmdcbiAgICAgICAgICB9ID0ge307XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gYCR7KCt2YWx1ZSkgLyAyfXB4YDtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgLy8gc3BhY2luZ1N0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0ge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzcGFjaW5nU3R5bGVzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBzcGFjaW5nU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtbmVnYXRpdmUtbWFyZ2luOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGBtYXJnaW46JHt2YWwgLyAtMn1weDt3aWR0aDogY2FsYygxMDAlICsgJHt2YWx9cHgpO2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5lZ2F0aXZlTWFyZ2luU3R5bGVzOiB7XG4gICAgICAgICAgICBtYXJnaW4/OiBzdHJpbmdcbiAgICAgICAgICAgIHdpZHRoPzogc3RyaW5nXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlTWFyZ2luc3R5bGVzID0ge1xuICAgICAgICAgICAgICBtYXJnaW46IGAkeygtdmFsdWUpIC8gMn1weGAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHt2YWx1ZX1weClgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICBpZiAoIW5lZ2F0aXZlTWFyZ2luU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBuZWdhdGl2ZU1hcmdpblN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmVnYXRpdmVNYXJnaW5TdHlsZXMgPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbmVnYXRpdmVNYXJnaW5TdHlsZXMgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX25lZ2F0aXZlTWFyZ2luQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3BhY2luZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nQ2xhc3M7XG4gIH1cblxuICAvKiogRGVmaW5lcyB0aGUganVzdGlmeS1jb250ZW50IHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmeSgpOiBKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuICBzZXQganVzdGlmeSh2YWw6IEp1c3RpZnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmp1c3RpZnkpIHtcbiAgICAgIHRoaXMuX2p1c3RpZnkgPSB2YWw7XG4gICAgICB0aGlzLl9qdXN0aWZ5Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtanVzdGlmeToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGxldCBqdXN0aWZ5U3R5bGVzOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0p1c3RpZnlTdHlsZXMgPSB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFqdXN0aWZ5U3R5bGVzKSB7XG4gICAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGp1c3RpZnlTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0p1c3RpZnlTdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGp1c3RpZnlTdHlsZXMgPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBqdXN0aWZ5U3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fanVzdGlmeUNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cbiAgc2V0IGRpcmVjdGlvbih2YWw6IERpcmVjdGlvbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWw7XG4gICAgICB0aGlzLl9kaXJlY3Rpb25DbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5R3JpZC1kaXJlY3Rpb246JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgZGlyZWN0aW9uU3R5bGVzOiB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uU3R5bGVzID0ge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogdmFsdWUgaW4gQUxJR05fQUxJQVNcbiAgICAgICAgICAgID8gQUxJR05fQUxJQVNbdmFsdWVdXG4gICAgICAgICAgICA6IHZhbHVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoaXNNZWRpYSkge1xuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb25TdHlsZXMpIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaXJlY3Rpb25TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IG5ld0RpcmVjdGlvblN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU3R5bGVzIGFzIGFueTtcbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlyZWN0aW9uQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtpdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkSXRlbSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbDogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9jb2xDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29yZGVyOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX29yZGVyQ2xhc3M6IHN0cmluZztcblxuICAvKiogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb2woKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHNldCBjb2wodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbCkge1xuICAgICAgdGhpcy5fY29sID0gdmFsO1xuICAgICAgdGhpcy5fY29sQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtY29sOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuIGdldENvbFN0eWxlKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbFN0eWxlczoge1xuICAgICAgICAgICAgbWF4V2lkdGg/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhCYXNpcz86IHN0cmluZyB8IG51bWJlclxuICAgICAgICAgICAgZmxleEdyb3c/OiBudW1iZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29sU3R5bGVzID0gZ2V0Q29sU3R5bGUoK3ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2xTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBjb2xTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb2xTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgICAgY29sU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbFN0eWxlcyA9IG5ld0NvbFN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY29sU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG5cblxuICAvKiogRGVmaW5lcyB0aGUgb3JkZXIgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcmRlcigpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgfVxuICBzZXQgb3JkZXIodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLm9yZGVyKSB7XG4gICAgICB0aGlzLl9vcmRlciA9IHZhbDtcbiAgICAgIHRoaXMuX29yZGVyQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtb3JkZXI6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQgb3JkZXJTdHlsZXM6IHtcbiAgICAgICAgICBvcmRlcj86IHN0cmluZ1xuICAgICAgICB9O1xuICAgICAgICBlYWNoTWVkaWEoYCR7dmFsfWAsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdPcmRlclN0eWxlcyA9IHtcbiAgICAgICAgICAgIG9yZGVyOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghb3JkZXJTdHlsZXMpIHtcbiAgICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG9yZGVyU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICAgIG9yZGVyU3R5bGVzW3RoZW1lLmdldEJyZWFrcG9pbnQobWVkaWEpXSA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmRlclN0eWxlcyA9IG5ld09yZGVyU3R5bGVzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvcmRlclN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX29yZGVyQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdyaWRDb250YWluZXI6IEx5R3JpZCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmICghZ3JpZENvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlIHBhcmVudCBncmlkYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU3BhY2luZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3BhY2luZygpIHtcbiAgICBpZiAodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcykge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5ncmlkQ29udGFpbmVyLnNwYWNpbmdDbGFzcyk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZ2V0Q29sU3R5bGUodmFsOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYXhXaWR0aDogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAnMTAwJScsXG4gICAgZmxleEJhc2lzOiB2YWwgPyBnZXRDb2xWYWwodmFsKSA6IDAsXG4gICAgZmxleEdyb3c6IHZhbCA/IDAgOiAxXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENvbFZhbCh2YWw6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWwgaW4gQ09MX1ZBTFVFU1xuICAgICAgICAgICAgICA/IENPTF9WQUxVRVNbdmFsXVxuICAgICAgICAgICAgICA6IENPTF9WQUxVRVNbdmFsXSA9IGAkeyt2YWwgKiAxMDAgLyAxMn0lYDtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUdyaWQsIEx5R3JpZEl0ZW0gfSBmcm9tICcuL2dyaWQnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTHlHcmlkLCBMeUdyaWRJdGVtXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlHcmlkLCBMeUdyaWRJdGVtXVxufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiZWFjaE1lZGlhIiwiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0VBR0EsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7RUFHMUIsSUFBTSxVQUFVLEdBQUcsRUFBRyxDQUFDOztFQUV2QixJQUFNLFdBQVcsR0FBRztNQUNsQixVQUFVLEVBQUUsYUFBYTtNQUN6QixhQUFhLEVBQUUsZ0JBQWdCO01BQy9CLFdBQVcsRUFBRSxjQUFjO01BQzNCLEtBQUssRUFBRSxZQUFZO01BQ25CLEdBQUcsRUFBRSxVQUFVO01BQ2YsT0FBTyxFQUFFLGVBQWU7TUFDeEIsTUFBTSxFQUFFLGNBQWM7TUFDdEIsTUFBTSxFQUFFLGNBQWM7R0FDdkIsQ0FBQzs7RUFFRixJQUFNLE1BQU0sSUFBSTtNQUNkLElBQUksRUFBRTtVQUNKLEtBQUssRUFBRSxNQUFNO1VBQ2IsT0FBTyxFQUFFLE1BQU07VUFDZixRQUFRLEVBQUUsTUFBTTtVQUNoQixTQUFTLEVBQUUsWUFBWTtPQUN4QjtHQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7TUF3S0QsZ0JBQ1UsT0FDQTtVQURBLFVBQUssR0FBTCxLQUFLO1VBQ0wsT0FBRSxHQUFGLEVBQUU7Ozs7O1VBakpaLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1VBbUp6RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDeEQ7TUFwSUQsc0JBQ0ksMkJBQU87Ozs7Ozs7Y0FEWDtjQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztXQUN0Qjs7OztjQUNELFVBQVksR0FBb0I7Y0FDOUIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtrQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7a0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQWtCLEdBQUssRUFBRSxVQUFDLEtBQXFCO3NCQUN0RixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTswQkFDM0IsT0FBTyxhQUFXLEdBQUcsR0FBRyxDQUFDLFFBQUssQ0FBQzt1QkFDaEM7MkJBQU07OzBCQUNMLElBQU0sZUFBYSxHQUVmLEVBQUUsQ0FBQzswQkFDUEEsWUFBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRzs7OEJBQy9CLElBQU0sT0FBTyxHQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFJLENBQUM7OEJBQ3BDLElBQUksR0FBRyxFQUFFOztrQ0FFUCxlQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHO3NDQUMxQyxPQUFPLFNBQUE7bUNBQ1IsQ0FBQzsrQkFDSDttQ0FBTTtrQ0FDTCxlQUFhLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzsrQkFDakM7MkJBQ0YsQ0FBQyxDQUFDOzBCQUNILHlCQUFPLGVBQW9CLEVBQUM7dUJBQzdCO21CQUNGLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztrQkFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLDRCQUEwQixHQUFLLEVBQUUsVUFBQyxLQUFxQjtzQkFDckcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7MEJBQzNCLE9BQU8sWUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLDhCQUF5QixHQUFHLFNBQU0sQ0FBQzt1QkFDN0Q7MkJBQU07OzBCQUNMLElBQUksc0JBQW9CLFVBR3RCOzBCQUNGQSxZQUFTLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHOzs4QkFDL0IsSUFBTSxvQkFBb0IsR0FBRztrQ0FDM0IsTUFBTSxFQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFJO2tDQUMzQixLQUFLLEVBQUUsaUJBQWUsS0FBSyxRQUFLOytCQUNqQyxDQUFDOzhCQUNGLElBQUksR0FBRyxFQUFFO2tDQUNQLElBQUksQ0FBQyxzQkFBb0IsRUFBRTtzQ0FDekIsc0JBQW9CLEdBQUcsRUFBRSxDQUFDO21DQUMzQjs7a0NBRUQsc0JBQW9CLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLG9CQUFvQixDQUFDOytCQUN6RTttQ0FBTTtrQ0FDTCxzQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQzsrQkFDN0M7MkJBQ0YsQ0FBQyxDQUFDOzBCQUNILHlCQUFPLHNCQUEyQixFQUFDO3VCQUNwQzttQkFDRixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLENBQUMsQ0FBQztlQUN0RTtXQUNGOzs7U0FwREE7TUFzREQsc0JBQUksZ0NBQVk7OztjQUFoQjtjQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztXQUMzQjs7O1NBQUE7TUFHRCxzQkFDSSwyQkFBTzs7Ozs7Y0FEWDtjQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztXQUN0Qjs7OztjQUNELFVBQVksR0FBWTtjQUN0QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO2tCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztrQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQkFBa0IsR0FBSyxFQUFFLFVBQUMsS0FBcUI7O3NCQUN0RixJQUFJLGFBQWEsQ0FFZjtzQkFDRkEsWUFBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTzs7MEJBQ25DLElBQU0sZ0JBQWdCLEdBQUc7OEJBQ3ZCLGNBQWMsRUFBRSxLQUFLLElBQUksV0FBVztvQ0FDbEMsV0FBVyxDQUFDLEtBQUssQ0FBQztvQ0FDbEIsS0FBSzsyQkFDUixDQUFDOzBCQUNGLElBQUksT0FBTyxFQUFFOzhCQUNYLElBQUksQ0FBQyxhQUFhLEVBQUU7a0NBQ2xCLGFBQWEsR0FBRyxFQUFFLENBQUM7K0JBQ3BCOzs4QkFFRCxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDOzJCQUM5RDsrQkFBTTs4QkFDTCxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7MkJBQ2xDO3VCQUNGLENBQUMsQ0FBQztzQkFDSCx5QkFBTyxhQUFvQixFQUFDO21CQUM3QixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7ZUFDL0Q7V0FDRjs7O1NBM0JBO01BOEJELHNCQUNJLDZCQUFTOzs7OztjQURiO2NBRUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1dBQ3hCOzs7O2NBQ0QsVUFBYyxHQUFjO2NBQzFCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7a0JBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2tCQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFvQixHQUFLLEVBQUUsVUFBQyxLQUFxQjs7c0JBQzFGLElBQUksZUFBZSxDQUVqQjtzQkFDRkEsWUFBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTzs7MEJBQ25DLElBQU0sa0JBQWtCLEdBQUc7OEJBQ3pCLGFBQWEsRUFBRSxLQUFLLElBQUksV0FBVztvQ0FDakMsV0FBVyxDQUFDLEtBQUssQ0FBQztvQ0FDbEIsS0FBSzsyQkFDUixDQUFDOzBCQUNGLElBQUksT0FBTyxFQUFFOzhCQUNYLElBQUksQ0FBQyxlQUFlLEVBQUU7a0NBQ3BCLGVBQWUsR0FBRyxFQUFFLENBQUM7K0JBQ3RCOzs4QkFFRCxlQUFlLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDOzJCQUNsRTsrQkFBTTs4QkFDTCxlQUFlLEdBQUcsa0JBQWtCLENBQUM7MkJBQ3RDO3VCQUNGLENBQUMsQ0FBQztzQkFDSCx5QkFBTyxlQUFzQixFQUFDO21CQUMvQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7ZUFDakU7V0FDRjs7O1NBM0JBOztrQkExSEZDLGNBQVMsU0FBQztzQkFDVCxRQUFRLEVBQUUsb0JBQW9CO21CQUMvQjs7Ozs7c0JBNUNRQyxXQUFRO3NCQURHQyxlQUFVOzs7OzRCQW1FM0JDLFVBQUs7NEJBOERMQSxVQUFLOzhCQWlDTEEsVUFBSzs7bUJBbEtSOzs7TUF3UkUsb0JBQ1UsZUFDQSxJQUNBO1VBRkEsa0JBQWEsR0FBYixhQUFhO1VBQ2IsT0FBRSxHQUFGLEVBQUU7VUFDRixVQUFLLEdBQUwsS0FBSztVQUViLElBQUksQ0FBQyxhQUFhLEVBQUU7Y0FDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1dBQ3hDO09BQ0Y7TUEzRUQsc0JBQ0ksMkJBQUc7Ozs7O2NBRFA7Y0FFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7V0FDbEI7Ozs7Y0FDRCxVQUFRLEdBQW9CO2NBQzFCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUU7a0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2tCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFjLEdBQUssRUFBRSxVQUFDLEtBQXFCO3NCQUM5RSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTswQkFDM0IsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7dUJBQ3pCOzJCQUFNOzswQkFDTCxJQUFJLFdBQVMsVUFJWDswQkFDRkosWUFBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRzs7OEJBQy9CLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOzhCQUN6QyxJQUFJLEdBQUcsRUFBRTtrQ0FDUCxJQUFJLENBQUMsV0FBUyxFQUFFO3NDQUNkLFdBQVMsR0FBRyxFQUFFLENBQUM7bUNBQ2hCOztrQ0FFRCxXQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzsrQkFDdEQ7bUNBQU07a0NBQ0wsV0FBUyxHQUFHLFlBQVksQ0FBQzsrQkFDMUI7MkJBQ0YsQ0FBQyxDQUFDOzBCQUNILHlCQUFPLFdBQWdCLEVBQUM7dUJBQ3pCO21CQUNGLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztlQUMzRDtXQUNGOzs7U0E3QkE7TUFrQ0Qsc0JBQ0ksNkJBQUs7Ozs7O2NBRFQ7Y0FFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7V0FDcEI7Ozs7Y0FDRCxVQUFVLEdBQW9CO2NBQzVCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7a0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2tCQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFnQixHQUFLLEVBQUUsVUFBQyxLQUFxQjs7c0JBQ2xGLElBQUksV0FBVyxDQUViO3NCQUNGQSxZQUFTLENBQUMsS0FBRyxHQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU87OzBCQUN4QyxJQUFNLGNBQWMsR0FBRzs4QkFDckIsS0FBSyxFQUFFLEtBQUs7MkJBQ2IsQ0FBQzswQkFDRixJQUFJLE9BQU8sRUFBRTs4QkFDWCxJQUFJLENBQUMsV0FBVyxFQUFFO2tDQUNoQixXQUFXLEdBQUcsRUFBRSxDQUFDOytCQUNsQjs7OEJBRUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7MkJBQzFEOytCQUFNOzhCQUNMLFdBQVcsR0FBRyxjQUFjLENBQUM7MkJBQzlCO3VCQUNGLENBQUMsQ0FBQztzQkFDSCx5QkFBTyxXQUFrQixFQUFDO21CQUMzQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7ZUFDN0Q7V0FDRjs7O1NBekJBOzs7O01BcUNELDZCQUFROzs7VUFBUjtjQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztXQUN2Qjs7OztNQUVPLG1DQUFjOzs7O2NBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7a0JBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztlQUN0RTs7O2tCQS9GSkMsY0FBUyxTQUFDO3NCQUNULFFBQVEsRUFBRSxlQUFlO21CQUMxQjs7Ozs7c0JBNkUwQixNQUFNO3NCQXpSYkUsZUFBVTtzQkFDckJELFdBQVE7Ozs7d0JBb05kRSxVQUFLOzBCQXFDTEEsVUFBSzs7dUJBMVBSOzs7Ozs7RUE4U0EsU0FBUyxXQUFXLENBQUMsR0FBVztNQUM5QixPQUFPO1VBQ0wsUUFBUSxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTTtVQUN2QyxTQUFTLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1VBQ25DLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7T0FDdEIsQ0FBQztHQUNIOzs7OztFQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CO01BQ3JDLE9BQU8sR0FBRyxJQUFJLFVBQVU7WUFDVixVQUFVLENBQUMsR0FBRyxDQUFDO1lBQ2YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQUcsQ0FBQztHQUN2RDs7Ozs7O0FDMVREOzs7O2tCQUdDQyxhQUFRLFNBQUM7c0JBQ1IsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztzQkFDN0IsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQzttQkFDbkM7O3lCQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=