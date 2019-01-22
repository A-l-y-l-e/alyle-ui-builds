/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DirPosition } from '../style-utils';
/** @enum {string} */
var YPosition = {
    above: 'above',
    below: 'below',
};
export { YPosition };
/** @enum {string} */
var XPosition = {
    before: 'before',
    after: 'after',
    left: 'left',
    right: 'right',
};
export { XPosition };
/** @type {?} */
var INITIAL_WH = 'initial';
var Positioning = /** @class */ (function () {
    function Positioning(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, offset) {
        if (offset === void 0) { offset = 0; }
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this._themeVariables = _themeVariables;
        this.offset = offset;
        this._offsetCheck = 16;
        this._originRect = (/** @type {?} */ (this.origin.getBoundingClientRect()));
        this._overlayElementRect = (/** @type {?} */ (this.overlayElement.getBoundingClientRect()));
        this.width = INITIAL_WH;
        this.height = INITIAL_WH;
        /** @type {?} */
        var offsetCheckx2 = this._offsetCheck * 2;
        this.createPosition();
        for (var index = 0; index < 2; index++) {
            if (this.checkAll()) {
                this.createPosition();
            }
        }
        // when there is not enough space
        if (this.checkAll()) {
            /** @type {?} */
            var _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
            /** @type {?} */
            var _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
            if (_max_width || _max_height) {
                if (_max_height) {
                    this.y = this._offsetCheck;
                    this.height = window.innerHeight - offsetCheckx2 + "px";
                }
                if (_max_width) {
                    this.x = this._offsetCheck;
                    this.width = window.innerWidth - offsetCheckx2 + "px";
                }
            }
            else {
                if (this.checkBottom()) {
                    this.y += (/** @type {?} */ (this.checkBottom(true)));
                }
                else if (this.checkTop()) {
                    this.y -= (/** @type {?} */ (this.checkTop(true)));
                }
                if (this.checkRight()) {
                    this.x += (/** @type {?} */ (this.checkRight(true)));
                }
                else if (this.checkLeft()) {
                    this.x -= (/** @type {?} */ (this.checkLeft(true)));
                }
            }
            // update origin
            this.updateOrigin();
        }
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    /**
     * @private
     * @return {?}
     */
    Positioning.prototype.createPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.xPosition && this.yPosition) {
            throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
            throw new Error("`placement` is required.");
        }
        /** @type {?} */
        var x = this._originRect.x;
        /** @type {?} */
        var y = this._originRect.y;
        /** @type {?} */
        var ox = 'center';
        /** @type {?} */
        var oy = 'center';
        if (this.placement) {
            if (this.placement) {
                if (this.placement === YPosition.above) {
                    x += (this._originRect.width - this._overlayElementRect.width) / 2;
                    y += -this._overlayElementRect.height - this.offset;
                    oy = 'bottom';
                }
                else if (this.placement === YPosition.below) {
                    x += (this._originRect.width - this._overlayElementRect.width) / 2;
                    y += this._originRect.height + this.offset;
                    oy = 'top';
                }
                else {
                    /** @type {?} */
                    var dir = this._themeVariables.getDirection((/** @type {?} */ (this.placement)));
                    if (dir === DirPosition.left) {
                        ox = '100%';
                        x += -this._overlayElementRect.width - this.offset;
                        y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    }
                    else if (dir === DirPosition.right) {
                        ox = '0%';
                        x += this._originRect.width + this.offset;
                        y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    }
                }
            }
            if (this.xPosition) {
                /** @type {?} */
                var dir = this._themeVariables.getDirection((/** @type {?} */ (this.xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = this._originRect.x;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this._originRect.x + this._originRect.width - this._overlayElementRect.width;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = this._originRect.y;
                    oy = '0%';
                }
                else if (this.yPosition === YPosition.below) {
                    y = this._originRect.y + this._originRect.height - this._overlayElementRect.height;
                    oy = '100%';
                }
            }
        }
        this.x = x;
        this.y = y;
        this.ax = x;
        this.ay = y;
        this.ox = ox;
        this.oy = oy;
        return {
            x: Math.round(x),
            y: Math.round(y),
            ox: ox,
            oy: oy
        };
    };
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkLeft = /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = this.ax - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = (/** @type {?} */ (invertPlacement(this.xPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkRight = /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = (/** @type {?} */ (invertPlacement(this.xPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkTop = /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = this.ay - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = (/** @type {?} */ (invertPlacement(this.yPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    Positioning.prototype.checkBottom = /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    function (returnVal) {
        /** @type {?} */
        var rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = (/** @type {?} */ (invertPlacement(this.yPosition)));
            }
            return true;
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    Positioning.prototype.checkAll = /**
     * @private
     * @return {?}
     */
    function () {
        return this.checkLeft() ||
            this.checkRight() ||
            this.checkTop() ||
            this.checkBottom();
    };
    /**
     * @private
     * @return {?}
     */
    Positioning.prototype.updateOrigin = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oax = this._originRect.x + this._originRect.width / 2;
        /** @type {?} */
        var oay = this._originRect.y + this._originRect.height / 2;
        /** @type {?} */
        var vax = this.x + this._overlayElementRect.width / 2;
        /** @type {?} */
        var vay = this.y + this._overlayElementRect.height / 2;
        this.ox = oax - vax + this._overlayElementRect.width / 2 + "px";
        this.oy = oay - vay + this._overlayElementRect.height / 2 + "px";
    };
    return Positioning;
}());
export { Positioning };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype._offsetCheck;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype._originRect;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype._overlayElementRect;
    /** @type {?} */
    Positioning.prototype.x;
    /** @type {?} */
    Positioning.prototype.y;
    /** @type {?} */
    Positioning.prototype.ax;
    /** @type {?} */
    Positioning.prototype.ay;
    /** @type {?} */
    Positioning.prototype.ox;
    /** @type {?} */
    Positioning.prototype.oy;
    /** @type {?} */
    Positioning.prototype.width;
    /** @type {?} */
    Positioning.prototype.height;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype.xPosition;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype.yPosition;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype.origin;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype.overlayElement;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype._themeVariables;
    /**
     * @type {?}
     * @private
     */
    Positioning.prototype.offset;
}
/**
 * @param {?} placement
 * @return {?}
 */
export function invertPlacement(placement) {
    if (placement === YPosition.above) {
        return YPosition.below;
    }
    else if (placement === YPosition.below) {
        return YPosition.above;
    }
    else if (placement === XPosition.after) {
        return XPosition.before;
    }
    else if (placement === XPosition.before) {
        return XPosition.after;
    }
    else if (placement === XPosition.right) {
        return XPosition.left;
    }
    else if (placement === XPosition.left) {
        return XPosition.right;
    }
    return placement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcG9zaXRpb24vcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzNDLE9BQVEsT0FBTztJQUNmLE9BQVEsT0FBTzs7Ozs7SUFJZixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNO0lBQ2IsT0FBUSxPQUFPOzs7O0lBS1gsVUFBVSxHQUFHLFNBQVM7QUFFNUI7SUFZRSxxQkFDVSxTQUFvQixFQUNwQixTQUFvQixFQUNwQixTQUFvQixFQUNwQixNQUFlLEVBQ2YsY0FBdUIsRUFDdkIsZUFBK0IsRUFDL0IsTUFBVTtRQUFWLHVCQUFBLEVBQUEsVUFBVTtRQU5WLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsV0FBTSxHQUFOLE1BQU0sQ0FBSTtRQWxCWixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNULGdCQUFXLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFXLENBQUM7UUFDN0Qsd0JBQW1CLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFXLENBQUM7UUFPOUYsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQUMzQixXQUFNLEdBQVcsVUFBVSxDQUFDOztZQVVwQixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixLQUFLLElBQUksS0FBSyxHQUFHLENB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Ozs7QUF3TXRCLE1BQU0sVUFBVSxlQUFlLENBQUMsU0FBb0I7SUFDbEQsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtRQUNqQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDeEMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUN6QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERpclBvc2l0aW9uIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgZW51bSBZUG9zaXRpb24ge1xuICBhYm92ZSA9ICdhYm92ZScsXG4gIGJlbG93ID0gJ2JlbG93J1xufVxuXG5leHBvcnQgZW51bSBYUG9zaXRpb24ge1xuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInLFxuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0gWFBvc2l0aW9uIHwgWVBvc2l0aW9uO1xuXG5jb25zdCBJTklUSUFMX1dIID0gJ2luaXRpYWwnO1xuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwcml2YXRlIF9vZmZzZXRDaGVjayA9IDE2O1xuICBwcml2YXRlIHJlYWRvbmx5IF9vcmlnaW5SZWN0ID0gdGhpcy5vcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3ZlcmxheUVsZW1lbnRSZWN0ID0gdGhpcy5vdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgYXg6IG51bWJlcjtcbiAgYXk6IG51bWJlcjtcbiAgb3g6IHN0cmluZztcbiAgb3k6IHN0cmluZztcbiAgd2lkdGg6IHN0cmluZyA9IElOSVRJQUxfV0g7XG4gIGhlaWdodDogc3RyaW5nID0gSU5JVElBTF9XSDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICBwcml2YXRlIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICAgIHByaXZhdGUgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gICAgcHJpdmF0ZSBvcmlnaW46IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgICBwcml2YXRlIF90aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBvZmZzZXQgPSAwXG4gICkge1xuICAgIGNvbnN0IG9mZnNldENoZWNreDIgPSB0aGlzLl9vZmZzZXRDaGVjayAqIDI7XG4gICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZVxuICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgIGNvbnN0IF9tYXhfd2lkdGggPSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyBvZmZzZXRDaGVja3gyID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBfbWF4X2hlaWdodCA9IHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRDaGVja3gyID4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKF9tYXhfd2lkdGggfHwgX21heF9oZWlnaHQpIHtcbiAgICAgICAgaWYgKF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy55ID0gdGhpcy5fb2Zmc2V0Q2hlY2s7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSBvZmZzZXRDaGVja3gyfXB4YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX21heF93aWR0aCkge1xuICAgICAgICAgIHRoaXMueCA9IHRoaXMuX29mZnNldENoZWNrO1xuICAgICAgICAgIHRoaXMud2lkdGggPSBgJHt3aW5kb3cuaW5uZXJXaWR0aCAtIG9mZnNldENoZWNreDJ9cHhgO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jaGVja0JvdHRvbSgpKSB7XG4gICAgICAgICAgdGhpcy55ICs9IHRoaXMuY2hlY2tCb3R0b20odHJ1ZSkgYXMgbnVtYmVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tUb3AoKSkge1xuICAgICAgICAgIHRoaXMueSAtPSB0aGlzLmNoZWNrVG9wKHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVja1JpZ2h0KCkpIHtcbiAgICAgICAgICB0aGlzLnggKz0gdGhpcy5jaGVja1JpZ2h0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrTGVmdCgpKSB7XG4gICAgICAgICAgdGhpcy54IC09IHRoaXMuY2hlY2tMZWZ0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgb3JpZ2luXG4gICAgICB0aGlzLnVwZGF0ZU9yaWdpbigpO1xuICAgIH1cblxuICAgIC8vIHJvdW5kIHJlc3VsdFxuICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgdGhpcy5heCA9IE1hdGgucm91bmQodGhpcy5heCk7XG4gICAgdGhpcy5heSA9IE1hdGgucm91bmQodGhpcy5heSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUG9zaXRpb24oXG4gICkge1xuICAgIGlmICh0aGlzLnhQb3NpdGlvbiAmJiB0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICAgIH1cbiAgICBpZiAoKHRoaXMueFBvc2l0aW9uIHx8IHRoaXMueVBvc2l0aW9uKSAmJiAhdGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICAgIH1cbiAgICBsZXQgeCA9IHRoaXMuX29yaWdpblJlY3QueCxcbiAgICAgICAgeSA9IHRoaXMuX29yaWdpblJlY3QueSxcbiAgICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgICAgb3kgPSAnY2VudGVyJztcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHggKz0gKHRoaXMuX29yaWdpblJlY3Qud2lkdGggLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ICs9IC10aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgb3kgPSAnYm90dG9tJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeCArPSAodGhpcy5fb3JpZ2luUmVjdC53aWR0aCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICAgIHkgKz0gdGhpcy5fb3JpZ2luUmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldDtcbiAgICAgICAgICBveSA9ICd0b3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih0aGlzLnBsYWNlbWVudCBhcyBhbnkpO1xuICAgICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgICAgeCArPSAtdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICB5ICs9ICh0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICAgIHggKz0gdGhpcy5fb3JpZ2luUmVjdC53aWR0aCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgeSArPSAodGhpcy5fb3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy54UG9zaXRpb24gYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgICAgeCA9IHRoaXMuX29yaWdpblJlY3QueDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gdGhpcy5fb3JpZ2luUmVjdC54ICsgdGhpcy5fb3JpZ2luUmVjdC53aWR0aCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICBpZiAodGhpcy55UG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHkgPSB0aGlzLl9vcmlnaW5SZWN0Lnk7XG4gICAgICAgICAgb3kgPSAnMCUnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB5ID0gdGhpcy5fb3JpZ2luUmVjdC55ICsgdGhpcy5fb3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmF4ID0geDtcbiAgICB0aGlzLmF5ID0geTtcbiAgICB0aGlzLm94ID0gb3g7XG4gICAgdGhpcy5veSA9IG95O1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNYXRoLnJvdW5kKHgpLFxuICAgICAgeTogTWF0aC5yb3VuZCh5KSxcbiAgICAgIG94LFxuICAgICAgb3lcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0xlZnQocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB0aGlzLmF4IC0gdGhpcy5fb2Zmc2V0Q2hlY2s7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYWJvdmUgJiYgdGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0KHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVyV2lkdGggLSAodGhpcy5heCArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCArIHRoaXMuX29mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5hYm92ZSAmJiB0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IGludmVydFBsYWNlbWVudCh0aGlzLnhQb3NpdGlvbikgYXMgWFBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrVG9wKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gdGhpcy5heSAtIHRoaXMuX29mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueVBvc2l0aW9uKSBhcyBZUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tCb3R0b20ocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAodGhpcy5heSArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLl9vZmZzZXRDaGVjayk7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy55UG9zaXRpb24pIGFzIFlQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrTGVmdCgpIHx8XG4gICAgdGhpcy5jaGVja1JpZ2h0KCkgfHxcbiAgICB0aGlzLmNoZWNrVG9wKCkgfHxcbiAgICB0aGlzLmNoZWNrQm90dG9tKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU9yaWdpbigpIHtcbiAgICBjb25zdCBvYXggPSB0aGlzLl9vcmlnaW5SZWN0LnggKyB0aGlzLl9vcmlnaW5SZWN0LndpZHRoIC8gMjtcbiAgICBjb25zdCBvYXkgPSB0aGlzLl9vcmlnaW5SZWN0LnkgKyB0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAvIDI7XG4gICAgY29uc3QgdmF4ID0gdGhpcy54ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC8gMjtcbiAgICBjb25zdCB2YXkgPSB0aGlzLnkgKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLm94ID0gYCR7b2F4IC0gdmF4ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC8gMn1weGA7XG4gICAgdGhpcy5veSA9IGAke29heSAtIHZheSArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgLyAyfXB4YDtcbiAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0UGxhY2VtZW50KHBsYWNlbWVudDogUGxhY2VtZW50KTogUGxhY2VtZW50IHtcbiAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbi5iZWxvdztcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgIHJldHVybiBZUG9zaXRpb24uYWJvdmU7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmJlZm9yZTtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmFmdGVyO1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgcmV0dXJuIFhQb3NpdGlvbi5sZWZ0O1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmxlZnQpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLnJpZ2h0O1xuICB9XG4gIHJldHVybiBwbGFjZW1lbnQ7XG59XG4iXX0=