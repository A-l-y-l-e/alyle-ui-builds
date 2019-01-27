/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DirPosition } from '../style-utils';
/** @enum {string} */
const YPosition = {
    above: 'above',
    below: 'below',
};
export { YPosition };
/** @enum {string} */
const XPosition = {
    before: 'before',
    after: 'after',
    left: 'left',
    right: 'right',
};
export { XPosition };
/** @type {?} */
const INITIAL_WH = 'initial';
export class Positioning {
    /**
     * @param {?} placement
     * @param {?} xPosition
     * @param {?} yPosition
     * @param {?} origin
     * @param {?} overlayElement
     * @param {?} _themeVariables
     * @param {?=} _offset
     * @param {?=} _flip
     */
    constructor(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, _offset = 0, _flip = true) {
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this._themeVariables = _themeVariables;
        this._offset = _offset;
        this._offsetCheck = 16;
        this._originRect = (/** @type {?} */ (this.origin.getBoundingClientRect()));
        this._overlayElementRect = (/** @type {?} */ (this.overlayElement.getBoundingClientRect()));
        this.width = INITIAL_WH;
        this.height = INITIAL_WH;
        /** @type {?} */
        const offsetCheckx2 = this._offsetCheck * 2;
        this.createPosition();
        if (_flip) {
            for (let index = 0; index < 2; index++) {
                if (this.checkAll()) {
                    this.createPosition();
                }
            }
        }
        // when there is not enough space
        if (this.checkAll()) {
            /** @type {?} */
            const _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
            /** @type {?} */
            const _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
            if (_max_width || _max_height) {
                if (_max_height) {
                    this.y = this._offsetCheck;
                    this.height = `${window.innerHeight - offsetCheckx2}px`;
                }
                if (_max_width) {
                    this.x = this._offsetCheck;
                    this.width = `${window.innerWidth - offsetCheckx2}px`;
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
            this.updateOrigin();
        }
        if (this._offset) {
            this.updateOrigin();
        }
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    /**
     * @return {?}
     */
    get offsetX() {
        return typeof this._offset === 'number'
            ? this._offset
            : this._offset.x || 0;
    }
    /**
     * @return {?}
     */
    get offsetY() {
        return typeof this._offset === 'number'
            ? this._offset
            : this._offset.y || 0;
    }
    /**
     * @private
     * @return {?}
     */
    createPosition() {
        if (this.xPosition && this.yPosition) {
            throw new Error(`You can not use \`xPosition\` and \`yPosition\` together, use only one of them.`);
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
            throw new Error(`\`placement\` is required.`);
        }
        /** @type {?} */
        let x = this._originRect.x;
        /** @type {?} */
        let y = this._originRect.y;
        /** @type {?} */
        let ox = 'center';
        /** @type {?} */
        let oy = 'center';
        if (this.placement) {
            if (this.placement === YPosition.above) {
                x += (this._originRect.width - this._overlayElementRect.width) / 2;
                y += -this._overlayElementRect.height;
                oy = 'bottom';
                // set offset
                y -= this.offsetY;
            }
            else if (this.placement === YPosition.below) {
                x += (this._originRect.width - this._overlayElementRect.width) / 2;
                y += this._originRect.height;
                oy = 'top';
                // set offset
                y += this.offsetY;
            }
            else {
                /** @type {?} */
                const dir = this._themeVariables.getDirection((/** @type {?} */ (this.placement)));
                if (dir === DirPosition.left) {
                    ox = '100%';
                    x += -this._overlayElementRect.width;
                    y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    // set offset
                    x -= this.offsetX;
                }
                else if (dir === DirPosition.right) {
                    ox = '0%';
                    x += this._originRect.width;
                    y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    // set offset
                    x += this.offsetX;
                }
            }
            if (this.xPosition) {
                /** @type {?} */
                const dir = this._themeVariables.getDirection((/** @type {?} */ (this.xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = this._originRect.x;
                    // set offset
                    x += this.offsetX;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this._originRect.x + this._originRect.width - this._overlayElementRect.width;
                    // set offset
                    x -= this.offsetX;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = this._originRect.y;
                    oy = '0%';
                    // set offset
                    y -= this.offsetY;
                }
                else if (this.yPosition === YPosition.below) {
                    y = this._originRect.y + this._originRect.height - this._overlayElementRect.height;
                    oy = '100%';
                    // set offset
                    y += this.offsetY;
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
            ox,
            oy
        };
    }
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    checkLeft(returnVal) {
        /** @type {?} */
        const rest = this.ax - this._offsetCheck;
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
    }
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    checkRight(returnVal) {
        /** @type {?} */
        const rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
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
    }
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    checkTop(returnVal) {
        /** @type {?} */
        const rest = this.ay - this._offsetCheck;
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
    }
    /**
     * @private
     * @param {?=} returnVal
     * @return {?}
     */
    checkBottom(returnVal) {
        /** @type {?} */
        const rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
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
    }
    /**
     * @private
     * @return {?}
     */
    checkAll() {
        return this.checkLeft() ||
            this.checkRight() ||
            this.checkTop() ||
            this.checkBottom();
    }
    /**
     * @private
     * @return {?}
     */
    updateOrigin() {
        // do not update if it is defined
        if (this._origin) {
            return;
        }
        this._origin = true;
        /** @type {?} */
        const oax = this._originRect.x + this._originRect.width / 2;
        /** @type {?} */
        const oay = this._originRect.y + this._originRect.height / 2;
        /** @type {?} */
        const vax = this.x + this._overlayElementRect.width / 2;
        /** @type {?} */
        const vay = this.y + this._overlayElementRect.height / 2;
        this.ox = `${oax - vax + this._overlayElementRect.width / 2}px`;
        this.oy = `${oay - vay + this._overlayElementRect.height / 2}px`;
    }
}
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
    Positioning.prototype._origin;
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
    Positioning.prototype._offset;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcG9zaXRpb24vcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzNDLE9BQVEsT0FBTztJQUNmLE9BQVEsT0FBTzs7Ozs7SUFJZixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNO0lBQ2IsT0FBUSxPQUFPOzs7O01BS1gsVUFBVSxHQUFHLFNBQVM7QUFFNUIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7Ozs7O0lBdUJ0QixZQUNVLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWUsRUFDZixjQUF1QixFQUN2QixlQUErQixFQUMvQixVQUdKLENBQUMsRUFDTCxLQUFLLEdBQUcsSUFBSTtRQVZKLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FHVjtRQWhDQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNULGdCQUFXLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFXLENBQUM7UUFDN0Qsd0JBQW1CLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFXLENBQUM7UUFPOUYsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQUMzQixXQUFNLEdBQVcsVUFBVSxDQUFDOztjQTBCcEIsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7O2tCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBVTs7a0JBQy9FLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBVztZQUN4RixJQUFJLFVBQVUsSUFBSSxXQUFXLEVBQUU7Z0JBQzdCLElBQUksV0FBVyxFQUFFO29CQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsYUFBYSxJQUFJLENBQUM7aUJBQ3pEO2dCQUNELElBQUksVUFBVSxFQUFFO29CQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsYUFBYSxJQUFJLENBQUM7aUJBQ3ZEO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBVSxDQUFDO2lCQUM1QztxQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLENBQUMsSUFBSSxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFVLENBQUM7aUJBQ3pDO2dCQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO29CQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLG1CQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQVUsQ0FBQztpQkFDM0M7cUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBVSxDQUFDO2lCQUMxQzthQUNGO1lBRUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUVELGVBQWU7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWhDLENBQUM7Ozs7SUExRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUTtZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFtRU8sY0FBYztRQUVwQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGlGQUFpRixDQUFDLENBQUM7U0FDcEc7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUMvQzs7WUFDRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUN0QixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUN0QixFQUFFLEdBQUcsUUFBUTs7WUFDYixFQUFFLEdBQUcsUUFBUTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25FLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RDLEVBQUUsR0FBRyxRQUFRLENBQUM7Z0JBRWQsYUFBYTtnQkFDYixDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDN0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUM3QixFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUVYLGFBQWE7Z0JBQ2IsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkI7aUJBQU07O3NCQUNDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFPLENBQUM7Z0JBQ3BFLElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLEVBQUUsR0FBRyxNQUFNLENBQUM7b0JBQ1osQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztvQkFDckMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFckUsYUFBYTtvQkFDYixDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtvQkFDcEMsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDVixDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQzVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRXJFLGFBQWE7b0JBQ2IsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ25CO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O3NCQUNaLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFPLENBQUM7Z0JBQ3BFLElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQzdCLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUV2QixhQUFhO29CQUNiLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLEdBQUcsS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO29CQUNuQyxFQUFFLEdBQUcsTUFBTSxDQUFDO29CQUNaLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO29CQUVqRixhQUFhO29CQUNiLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNuQjthQUNGO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7b0JBQ3RDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsRUFBRSxHQUFHLElBQUksQ0FBQztvQkFFVixhQUFhO29CQUNiLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNuQjtxQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDN0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7b0JBQ25GLEVBQUUsR0FBRyxNQUFNLENBQUM7b0JBRVosYUFBYTtvQkFDYixDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDbkI7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTztZQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRTtZQUNGLEVBQUU7U0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLFNBQW1COztjQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWTtRQUN4QyxJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFhLENBQUM7YUFDL0Q7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFDTyxVQUFVLENBQUMsU0FBbUI7O2NBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDL0YsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBYSxDQUFDO2FBQy9EO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBQ08sUUFBUSxDQUFDLFNBQW1COztjQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWTtRQUN4QyxJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBQSxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFhLENBQUM7YUFDL0Q7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFDTyxXQUFXLENBQUMsU0FBbUI7O2NBQy9CLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDakcsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBYSxDQUFDO2FBQy9EO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFlBQVk7UUFFbEIsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Y0FDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7Y0FDckQsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7O2NBQ3RELEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7Y0FDakQsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3hELElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztJQUNuRSxDQUFDO0NBRUY7Ozs7OztJQTNRQyxtQ0FBMEI7Ozs7O0lBQzFCLGtDQUE4RTs7Ozs7SUFDOUUsMENBQThGOztJQUM5Rix3QkFBVTs7SUFDVix3QkFBVTs7SUFDVix5QkFBVzs7SUFDWCx5QkFBVzs7SUFDWCx5QkFBVzs7SUFDWCx5QkFBVzs7SUFDWCw0QkFBMkI7O0lBQzNCLDZCQUE0Qjs7Ozs7SUFDNUIsOEJBQXlCOzs7OztJQVl2QixnQ0FBNEI7Ozs7O0lBQzVCLGdDQUE0Qjs7Ozs7SUFDNUIsZ0NBQTRCOzs7OztJQUM1Qiw2QkFBdUI7Ozs7O0lBQ3ZCLHFDQUErQjs7Ozs7SUFDL0Isc0NBQXVDOzs7OztJQUN2Qyw4QkFHSzs7Ozs7O0FBNE9ULE1BQU0sVUFBVSxlQUFlLENBQUMsU0FBb0I7SUFDbEQsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtRQUNqQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDeEMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUN6QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERpclBvc2l0aW9uIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgZW51bSBZUG9zaXRpb24ge1xuICBhYm92ZSA9ICdhYm92ZScsXG4gIGJlbG93ID0gJ2JlbG93J1xufVxuXG5leHBvcnQgZW51bSBYUG9zaXRpb24ge1xuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInLFxuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0gWFBvc2l0aW9uIHwgWVBvc2l0aW9uO1xuXG5jb25zdCBJTklUSUFMX1dIID0gJ2luaXRpYWwnO1xuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwcml2YXRlIF9vZmZzZXRDaGVjayA9IDE2O1xuICBwcml2YXRlIHJlYWRvbmx5IF9vcmlnaW5SZWN0ID0gdGhpcy5vcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3ZlcmxheUVsZW1lbnRSZWN0ID0gdGhpcy5vdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgYXg6IG51bWJlcjtcbiAgYXk6IG51bWJlcjtcbiAgb3g6IHN0cmluZztcbiAgb3k6IHN0cmluZztcbiAgd2lkdGg6IHN0cmluZyA9IElOSVRJQUxfV0g7XG4gIGhlaWdodDogc3RyaW5nID0gSU5JVElBTF9XSDtcbiAgcHJpdmF0ZSBfb3JpZ2luOiBib29sZWFuO1xuICBnZXQgb2Zmc2V0WCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fb2Zmc2V0ID09PSAnbnVtYmVyJ1xuICAgID8gdGhpcy5fb2Zmc2V0XG4gICAgOiB0aGlzLl9vZmZzZXQueCB8fCAwO1xuICB9XG4gIGdldCBvZmZzZXRZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9vZmZzZXQgPT09ICdudW1iZXInXG4gICAgPyB0aGlzLl9vZmZzZXRcbiAgICA6IHRoaXMuX29mZnNldC55IHx8IDA7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICBwcml2YXRlIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICAgIHByaXZhdGUgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gICAgcHJpdmF0ZSBvcmlnaW46IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgICBwcml2YXRlIF90aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBfb2Zmc2V0OiBudW1iZXIgfCB7XG4gICAgICB4PzogbnVtYmVyXG4gICAgICB5PzogbnVtYmVyXG4gICAgfSA9IDAsXG4gICAgX2ZsaXAgPSB0cnVlXG4gICkge1xuXG4gICAgY29uc3Qgb2Zmc2V0Q2hlY2t4MiA9IHRoaXMuX29mZnNldENoZWNrICogMjtcbiAgICB0aGlzLmNyZWF0ZVBvc2l0aW9uKCk7XG5cbiAgICBpZiAoX2ZsaXApIHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyOyBpbmRleCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2VcbiAgICBpZiAodGhpcy5jaGVja0FsbCgpKSB7XG4gICAgICBjb25zdCBfbWF4X3dpZHRoID0gdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoICsgb2Zmc2V0Q2hlY2t4MiA+IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3QgX21heF9oZWlnaHQgPSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0Q2hlY2t4MiA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChfbWF4X3dpZHRoIHx8IF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgIGlmIChfbWF4X2hlaWdodCkge1xuICAgICAgICAgIHRoaXMueSA9IHRoaXMuX29mZnNldENoZWNrO1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYCR7d2luZG93LmlubmVySGVpZ2h0IC0gb2Zmc2V0Q2hlY2t4Mn1weGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9tYXhfd2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnggPSB0aGlzLl9vZmZzZXRDaGVjaztcbiAgICAgICAgICB0aGlzLndpZHRoID0gYCR7d2luZG93LmlubmVyV2lkdGggLSBvZmZzZXRDaGVja3gyfXB4YDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCb3R0b20oKSkge1xuICAgICAgICAgIHRoaXMueSArPSB0aGlzLmNoZWNrQm90dG9tKHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrVG9wKCkpIHtcbiAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5jaGVja1RvcCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tSaWdodCgpKSB7XG4gICAgICAgICAgdGhpcy54ICs9IHRoaXMuY2hlY2tSaWdodCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja0xlZnQoKSkge1xuICAgICAgICAgIHRoaXMueCAtPSB0aGlzLmNoZWNrTGVmdCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVPcmlnaW4oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb2Zmc2V0KSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yaWdpbigpO1xuICAgIH1cblxuICAgIC8vIHJvdW5kIHJlc3VsdFxuICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgdGhpcy5heCA9IE1hdGgucm91bmQodGhpcy5heCk7XG4gICAgdGhpcy5heSA9IE1hdGgucm91bmQodGhpcy5heSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUG9zaXRpb24oXG4gICkge1xuICAgIGlmICh0aGlzLnhQb3NpdGlvbiAmJiB0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICAgIH1cbiAgICBpZiAoKHRoaXMueFBvc2l0aW9uIHx8IHRoaXMueVBvc2l0aW9uKSAmJiAhdGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICAgIH1cbiAgICBsZXQgeCA9IHRoaXMuX29yaWdpblJlY3QueCxcbiAgICAgICAgeSA9IHRoaXMuX29yaWdpblJlY3QueSxcbiAgICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgICAgb3kgPSAnY2VudGVyJztcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgIHggKz0gKHRoaXMuX29yaWdpblJlY3Qud2lkdGggLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSArPSAtdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgb3kgPSAnYm90dG9tJztcblxuICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgIHkgLT0gdGhpcy5vZmZzZXRZO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHggKz0gKHRoaXMuX29yaWdpblJlY3Qud2lkdGggLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSArPSB0aGlzLl9vcmlnaW5SZWN0LmhlaWdodDtcbiAgICAgICAgb3kgPSAndG9wJztcblxuICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgIHkgKz0gdGhpcy5vZmZzZXRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHRoaXMucGxhY2VtZW50IGFzIGFueSk7XG4gICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ICs9IC10aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG4gICAgICAgICAgeSArPSAodGhpcy5fb3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeCAtPSB0aGlzLm9mZnNldFg7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ICs9IHRoaXMuX29yaWdpblJlY3Qud2lkdGg7XG4gICAgICAgICAgeSArPSAodGhpcy5fb3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeCArPSB0aGlzLm9mZnNldFg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih0aGlzLnhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gdGhpcy5fb3JpZ2luUmVjdC54O1xuXG4gICAgICAgICAgLy8gc2V0IG9mZnNldFxuICAgICAgICAgIHggKz0gdGhpcy5vZmZzZXRYO1xuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggPSB0aGlzLl9vcmlnaW5SZWN0LnggKyB0aGlzLl9vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoO1xuXG4gICAgICAgICAgLy8gc2V0IG9mZnNldFxuICAgICAgICAgIHggLT0gdGhpcy5vZmZzZXRYO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgeSA9IHRoaXMuX29yaWdpblJlY3QueTtcbiAgICAgICAgICBveSA9ICcwJSc7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeSAtPSB0aGlzLm9mZnNldFk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHkgPSB0aGlzLl9vcmlnaW5SZWN0LnkgKyB0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgICAgb3kgPSAnMTAwJSc7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeSArPSB0aGlzLm9mZnNldFk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuYXggPSB4O1xuICAgIHRoaXMuYXkgPSB5O1xuICAgIHRoaXMub3ggPSBveDtcbiAgICB0aGlzLm95ID0gb3k7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgICAgb3gsXG4gICAgICBveVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGVmdChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXggLSB0aGlzLl9vZmZzZXRDaGVjaztcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5hYm92ZSAmJiB0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IGludmVydFBsYWNlbWVudCh0aGlzLnhQb3NpdGlvbikgYXMgWFBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrUmlnaHQocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAtICh0aGlzLmF4ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoICsgdGhpcy5fb2Zmc2V0Q2hlY2spO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueFBvc2l0aW9uKSBhcyBYUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tUb3AocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB0aGlzLmF5IC0gdGhpcy5fb2Zmc2V0Q2hlY2s7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy55UG9zaXRpb24pIGFzIFlQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja0JvdHRvbShyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtICh0aGlzLmF5ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCArIHRoaXMuX29mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IGludmVydFBsYWNlbWVudCh0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tMZWZ0KCkgfHxcbiAgICB0aGlzLmNoZWNrUmlnaHQoKSB8fFxuICAgIHRoaXMuY2hlY2tUb3AoKSB8fFxuICAgIHRoaXMuY2hlY2tCb3R0b20oKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlT3JpZ2luKCkge1xuXG4gICAgLy8gZG8gbm90IHVwZGF0ZSBpZiBpdCBpcyBkZWZpbmVkXG4gICAgaWYgKHRoaXMuX29yaWdpbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbiA9IHRydWU7XG4gICAgY29uc3Qgb2F4ID0gdGhpcy5fb3JpZ2luUmVjdC54ICsgdGhpcy5fb3JpZ2luUmVjdC53aWR0aCAvIDI7XG4gICAgY29uc3Qgb2F5ID0gdGhpcy5fb3JpZ2luUmVjdC55ICsgdGhpcy5fb3JpZ2luUmVjdC5oZWlnaHQgLyAyO1xuICAgIGNvbnN0IHZheCA9IHRoaXMueCArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCAvIDI7XG4gICAgY29uc3QgdmF5ID0gdGhpcy55ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAvIDI7XG4gICAgdGhpcy5veCA9IGAke29heCAtIHZheCArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCAvIDJ9cHhgO1xuICAgIHRoaXMub3kgPSBgJHtvYXkgLSB2YXkgKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC8gMn1weGA7XG4gIH1cblxufVxuZXhwb3J0IGZ1bmN0aW9uIGludmVydFBsYWNlbWVudChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IFBsYWNlbWVudCB7XG4gIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgIHJldHVybiBZUG9zaXRpb24uYmVsb3c7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uLmFib3ZlO1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmFmdGVyKSB7XG4gICAgcmV0dXJuIFhQb3NpdGlvbi5iZWZvcmU7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24uYmVmb3JlKSB7XG4gICAgcmV0dXJuIFhQb3NpdGlvbi5hZnRlcjtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5yaWdodCkge1xuICAgIHJldHVybiBYUG9zaXRpb24ubGVmdDtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5sZWZ0KSB7XG4gICAgcmV0dXJuIFhQb3NpdGlvbi5yaWdodDtcbiAgfVxuICByZXR1cm4gcGxhY2VtZW50O1xufVxuIl19