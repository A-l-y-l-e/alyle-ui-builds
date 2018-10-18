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
          this.classes = this.theme.addStyleSheet(styles, 'lyGrid', STYLE_PRIORITY);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZ3JpZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQudHMiLCJuZzovL0BhbHlsZS91aS9ncmlkL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIGVhY2hNZWRpYSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgQ09MX1ZBTFVFUyA9IHsgfTtcblxuY29uc3QgQUxJR05fQUxJQVMgPSB7XG4gIHJvd1JldmVyc2U6ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2U6ICdjb2x1bW4tcmV2ZXJzZScsXG4gIHdyYXBSZXZlcnNlOiAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQ6ICdmbGV4LXN0YXJ0JyxcbiAgZW5kOiAnZmxleC1lbmQnLFxuICBiZXR3ZWVuOiAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZDogJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seTogJ3NwYWNlLWV2ZW5seScsXG59O1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxudHlwZSBKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnYmV0d2VlbicgfCAnYXJvdW5kJyB8ICdldmVubHknO1xudHlwZSBEaXJlY3Rpb24gPSAncm93JyB8ICdyb3dSZXZlcnNlJyB8ICdjb2x1bW4nIHwgJ2NvbHVtblJldmVyc2UnO1xuXG4vKipcbiAqIEdyaWQgY29udGFpbmVyXG4gKiBleGFtcGxlOlxuICogPGx5LWdyaWQgY29udGFpbmVyIFtzcGFjaW5nXT1cIicxNiA4QFhTbWFsbCdcIj5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqICAgPGx5LWdyaWQgaXRlbSBbY29sXT1cIic2IDEyQFhTbWFsbCdcIj5cbiAqICAgICA8ZGl2PjYgMTJAWFNtYWxsPC9kaXY+XG4gKiAgIDwvbHktZ3JpZD5cbiAqIDwvbHktZ3JpZD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZ3JpZFtjb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUdyaWQge1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlHcmlkJywgU1RZTEVfUFJJT1JJVFkpO1xuXG4gIHByaXZhdGUgX3NwYWNpbmc6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc3BhY2luZ0NsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbmVnYXRpdmVNYXJnaW5DbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2p1c3RpZnk6IEp1c3RpZnk7XG4gIHByaXZhdGUgX2p1c3RpZnlDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uO1xuICBwcml2YXRlIF9kaXJlY3Rpb25DbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgYGl0ZW1gIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzcGFjaW5nKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NwYWNpbmc7XG4gIH1cbiAgc2V0IHNwYWNpbmcodmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNwYWNpbmcpIHtcbiAgICAgIHRoaXMuX3NwYWNpbmcgPSB2YWw7XG4gICAgICB0aGlzLl9zcGFjaW5nQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtc3BhY2luZzoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgcGFkZGluZzoke3ZhbCAvIDJ9cHg7YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nU3R5bGVzOiB7XG4gICAgICAgICAgICBwYWRkaW5nPzogc3RyaW5nXG4gICAgICAgICAgfSA9IHt9O1xuICAgICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGxlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IGAkeygrdmFsdWUpIC8gMn1weGA7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIC8vIHNwYWNpbmdTdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3BhY2luZ1N0eWxlcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gc3BhY2luZ1N0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW5lZ2F0aXZlLW1hcmdpbjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBgbWFyZ2luOiR7dmFsIC8gLTJ9cHg7d2lkdGg6IGNhbGMoMTAwJSArICR7dmFsfXB4KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBuZWdhdGl2ZU1hcmdpblN0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luPzogc3RyaW5nXG4gICAgICAgICAgICB3aWR0aD86IHN0cmluZ1xuICAgICAgICAgIH07XG4gICAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgbGVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZU1hcmdpbnN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiBgJHsoLXZhbHVlKSAvIDJ9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dmFsdWV9cHgpYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgaWYgKCFuZWdhdGl2ZU1hcmdpblN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gbmVnYXRpdmVNYXJnaW5TdHlsZXNbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW21lZGlhXX1gXSA9IG5lZ2F0aXZlTWFyZ2luc3R5bGVzO1xuICAgICAgICAgICAgICBuZWdhdGl2ZU1hcmdpblN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZWdhdGl2ZU1hcmdpbnN0eWxlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5lZ2F0aXZlTWFyZ2luU3R5bGVzID0gbmVnYXRpdmVNYXJnaW5zdHlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG5lZ2F0aXZlTWFyZ2luU3R5bGVzIGFzIGFueTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9uZWdhdGl2ZU1hcmdpbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNwYWNpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BhY2luZ0NsYXNzO1xuICB9XG5cbiAgLyoqIERlZmluZXMgdGhlIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGp1c3RpZnkoKTogSnVzdGlmeSB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZnk7XG4gIH1cbiAgc2V0IGp1c3RpZnkodmFsOiBKdXN0aWZ5KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5qdXN0aWZ5KSB7XG4gICAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsO1xuICAgICAgdGhpcy5fanVzdGlmeUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWp1c3RpZnk6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBsZXQganVzdGlmeVN0eWxlczoge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nXG4gICAgICAgIH07XG4gICAgICAgIGVhY2hNZWRpYSh2YWwsICh2YWx1ZSwgbWVkaWEsIGlzTWVkaWEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdKdXN0aWZ5U3R5bGVzID0ge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghanVzdGlmeVN0eWxlcykge1xuICAgICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBqdXN0aWZ5U3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgICAganVzdGlmeVN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdKdXN0aWZ5U3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqdXN0aWZ5U3R5bGVzID0gbmV3SnVzdGlmeVN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganVzdGlmeVN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2p1c3RpZnlDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEZWZpbmVzIHRoZSBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG4gIHNldCBkaXJlY3Rpb24odmFsOiBEaXJlY3Rpb24pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsO1xuICAgICAgdGhpcy5fZGlyZWN0aW9uQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUdyaWQtZGlyZWN0aW9uOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IGRpcmVjdGlvblN0eWxlczoge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKHZhbCwgKHZhbHVlLCBtZWRpYSwgaXNNZWRpYSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvblN0eWxlcyA9IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHZhbHVlIGluIEFMSUdOX0FMSUFTXG4gICAgICAgICAgICA/IEFMSUdOX0FMSUFTW3ZhbHVlXVxuICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGlzTWVkaWEpIHtcbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uU3R5bGVzKSB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvblN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGlyZWN0aW9uU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXNbdGhlbWUuZ2V0QnJlYWtwb2ludChtZWRpYSldID0gbmV3RGlyZWN0aW9uU3R5bGVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25TdHlsZXMgPSBuZXdEaXJlY3Rpb25TdHlsZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblN0eWxlcyBhcyBhbnk7XG4gICAgICB9LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RpcmVjdGlvbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWdyaWRbaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5R3JpZEl0ZW0gaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9jb2w6IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sQ2xhc3M6IHN0cmluZztcblxuICBwcml2YXRlIF9vcmRlcjogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIF9vcmRlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyAqL1xuICBASW5wdXQoKVxuICBnZXQgY29sKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBzZXQgY29sKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5jb2wpIHtcbiAgICAgIHRoaXMuX2NvbCA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLWNvbDoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBnZXRDb2xTdHlsZSh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBjb2xTdHlsZXM6IHtcbiAgICAgICAgICAgIG1heFdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAgICAgICBmbGV4QmFzaXM/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgICAgICAgIGZsZXhHcm93PzogbnVtYmVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICBlYWNoTWVkaWEodmFsLCAodmFsdWUsIG1lZGlhLCBsZW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbFN0eWxlcyA9IGdldENvbFN0eWxlKCt2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgIGlmICghY29sU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgY29sU3R5bGVzID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gY29sU3R5bGVzW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1ttZWRpYV19YF0gPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICAgIGNvbFN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xTdHlsZXMgPSBuZXdDb2xTdHlsZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNvbFN0eWxlcyBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLyoqIERlZmluZXMgdGhlIG9yZGVyIHN0eWxlIHByb3BlcnR5LiAqL1xuICBASW5wdXQoKVxuICBnZXQgb3JkZXIoKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XG4gIH1cbiAgc2V0IG9yZGVyKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5vcmRlcikge1xuICAgICAgdGhpcy5fb3JkZXIgPSB2YWw7XG4gICAgICB0aGlzLl9vcmRlckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlHcmlkLW9yZGVyOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgbGV0IG9yZGVyU3R5bGVzOiB7XG4gICAgICAgICAgb3JkZXI/OiBzdHJpbmdcbiAgICAgICAgfTtcbiAgICAgICAgZWFjaE1lZGlhKGAke3ZhbH1gLCAodmFsdWUsIG1lZGlhLCBpc01lZGlhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXJTdHlsZXMgPSB7XG4gICAgICAgICAgICBvcmRlcjogdmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpc01lZGlhKSB7XG4gICAgICAgICAgICBpZiAoIW9yZGVyU3R5bGVzKSB7XG4gICAgICAgICAgICAgIG9yZGVyU3R5bGVzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvcmRlclN0eWxlc1tgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbbWVkaWFdfWBdID0gbmV3T3JkZXJTdHlsZXM7XG4gICAgICAgICAgICBvcmRlclN0eWxlc1t0aGVtZS5nZXRCcmVha3BvaW50KG1lZGlhKV0gPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JkZXJTdHlsZXMgPSBuZXdPcmRlclN0eWxlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JkZXJTdHlsZXMgYXMgYW55O1xuICAgICAgfSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9vcmRlckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBncmlkQ29udGFpbmVyOiBMeUdyaWQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoIWdyaWRDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZSBwYXJlbnQgZ3JpZGApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNwYWNpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNwYWNpbmcoKSB7XG4gICAgaWYgKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZ3JpZENvbnRhaW5lci5zcGFjaW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldENvbFN0eWxlKHZhbDogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgbWF4V2lkdGg6IHZhbCA/IGdldENvbFZhbCh2YWwpIDogJzEwMCUnLFxuICAgIGZsZXhCYXNpczogdmFsID8gZ2V0Q29sVmFsKHZhbCkgOiAwLFxuICAgIGZsZXhHcm93OiB2YWwgPyAwIDogMVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb2xWYWwodmFsOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsIGluIENPTF9WQUxVRVNcbiAgICAgICAgICAgICAgPyBDT0xfVkFMVUVTW3ZhbF1cbiAgICAgICAgICAgICAgOiBDT0xfVkFMVUVTW3ZhbF0gPSBgJHsrdmFsICogMTAwIC8gMTJ9JWA7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlHcmlkLCBMeUdyaWRJdGVtIH0gZnJvbSAnLi9ncmlkJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5R3JpZCwgTHlHcmlkSXRlbV0sXG4gIGRlY2xhcmF0aW9uczogW0x5R3JpZCwgTHlHcmlkSXRlbV1cbn0pXG5leHBvcnQgY2xhc3MgTHlHcmlkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbImVhY2hNZWRpYSIsIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtFQUdBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7O0VBRzFCLElBQU0sVUFBVSxHQUFHLEVBQUcsQ0FBQzs7RUFFdkIsSUFBTSxXQUFXLEdBQUc7TUFDbEIsVUFBVSxFQUFFLGFBQWE7TUFDekIsYUFBYSxFQUFFLGdCQUFnQjtNQUMvQixXQUFXLEVBQUUsY0FBYztNQUMzQixLQUFLLEVBQUUsWUFBWTtNQUNuQixHQUFH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