/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
/**
 * @deprecated in favor of `Positioning`
 * @param {?} placement
 * @param {?} xPosition
 * @param {?} yPosition
 * @param {?} origin
 * @param {?} overlayElement
 * @param {?} themeVariables
 * @param {?=} offset
 * @return {?}
 */
export function getPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset = 0) {
    return createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset);
}
/**
 * @param {?} placement
 * @param {?} xPosition
 * @param {?} yPosition
 * @param {?} origin
 * @param {?} overlayElement
 * @param {?} themeVariables
 * @param {?=} offset
 * @return {?}
 */
function createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset = 0) {
    /** @type {?} */
    const originRect = (/** @type {?} */ (origin.getBoundingClientRect()));
    /** @type {?} */
    const overlayElementRect = (/** @type {?} */ (overlayElement.getBoundingClientRect()));
    if (xPosition && yPosition) {
        throw new Error(`You can not use \`xPosition\` and \`yPosition\` together, use only one of them.`);
    }
    if ((xPosition || yPosition) && !placement) {
        throw new Error(`\`placement\` is required.`);
    }
    /** @type {?} */
    let x = 0;
    /** @type {?} */
    let y = 0;
    /** @type {?} */
    let ox = 'center';
    /** @type {?} */
    let oy = 'center';
    if (placement || xPosition || yPosition) {
        if (placement) {
            if (placement === YPosition.above) {
                x = (originRect.width - overlayElementRect.width) / 2;
                y = -overlayElementRect.height - offset;
                oy = 'bottom';
            }
            else if (placement === YPosition.below) {
                x = (originRect.width - overlayElementRect.width) / 2;
                y = originRect.height + offset;
                oy = 'top';
            }
            else {
                /** @type {?} */
                const dir = themeVariables.getDirection((/** @type {?} */ (placement)));
                if (dir === DirPosition.left) {
                    ox = '100%';
                    x = -overlayElementRect.width - offset;
                    y = (originRect.height - overlayElementRect.height) / 2;
                }
                else if (dir === DirPosition.right) {
                    ox = '0%';
                    x = originRect.width + offset;
                    y = (originRect.height - overlayElementRect.height) / 2;
                }
            }
        }
        if (xPosition) {
            /** @type {?} */
            const dir = themeVariables.getDirection((/** @type {?} */ (xPosition)));
            if (dir === DirPosition.right) {
                ox = '0%';
                x = 0;
            }
            else if (dir === DirPosition.left) {
                ox = '100%';
                x = originRect.width - overlayElementRect.width;
            }
        }
        else if (yPosition) {
            if (yPosition === YPosition.above) {
                y = 0;
                oy = '0%';
            }
            else if (yPosition === YPosition.below) {
                y = originRect.height - overlayElementRect.height;
                oy = '100%';
            }
        }
    }
    return {
        x: Math.round(x),
        y: Math.round(y),
        ox,
        oy
    };
}
export class Positioning {
    /**
     * @param {?} placement
     * @param {?} xPosition
     * @param {?} yPosition
     * @param {?} origin
     * @param {?} overlayElement
     * @param {?} themeVariables
     * @param {?=} offset
     */
    constructor(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset = 0) {
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this.themeVariables = themeVariables;
        this.offset = offset;
        this.offsetCheck = 16;
        this.originRect = (/** @type {?} */ (this.origin.getBoundingClientRect()));
        this.overlayElementRect = (/** @type {?} */ (this.overlayElement.getBoundingClientRect()));
        this.createPosition();
        for (let index = 0; index < 2; index++) {
            if (this.checkAll()) {
                this.createPosition();
            }
        }
        // Where there is not enough space
        if (this.checkAll()) {
            /** @type {?} */
            const _max_width = this.overlayElementRect.width + this.offsetCheck * 2 > window.innerWidth;
            /** @type {?} */
            const _max_height = this.overlayElementRect.height + this.offsetCheck * 2 > window.innerHeight;
            if (_max_width || _max_height) {
                if (_max_height) {
                    this.y = this.originRect.y - this.offsetCheck;
                    this.y *= -1;
                }
                if (_max_width) {
                    this.x = this.originRect.x - this.offsetCheck;
                    this.x *= -1;
                }
            }
            else if (this.checkBottom()) {
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
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    /**
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
        let x = 0;
        /** @type {?} */
        let y = 0;
        /** @type {?} */
        let ox = 'center';
        /** @type {?} */
        let oy = 'center';
        if (this.placement || this.xPosition || this.yPosition) {
            if (this.placement) {
                if (this.placement === YPosition.above) {
                    x = (this.originRect.width - this.overlayElementRect.width) / 2;
                    y = -this.overlayElementRect.height - this.offset;
                    oy = 'bottom';
                }
                else if (this.placement === YPosition.below) {
                    x = (this.originRect.width - this.overlayElementRect.width) / 2;
                    y = this.originRect.height + this.offset;
                    oy = 'top';
                }
                else {
                    /** @type {?} */
                    const dir = this.themeVariables.getDirection((/** @type {?} */ (this.placement)));
                    if (dir === DirPosition.left) {
                        ox = '100%';
                        x = -this.overlayElementRect.width - this.offset;
                        y = (this.originRect.height - this.overlayElementRect.height) / 2;
                    }
                    else if (dir === DirPosition.right) {
                        ox = '0%';
                        x = this.originRect.width + this.offset;
                        y = (this.originRect.height - this.overlayElementRect.height) / 2;
                    }
                }
            }
            if (this.xPosition) {
                /** @type {?} */
                const dir = this.themeVariables.getDirection((/** @type {?} */ (this.xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = 0;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this.originRect.width - this.overlayElementRect.width;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = 0;
                    oy = '0%';
                }
                else if (this.yPosition === YPosition.below) {
                    y = this.originRect.height - this.overlayElementRect.height;
                    oy = '100%';
                }
            }
        }
        this.x = x;
        this.y = y;
        this.ax = x + this.overlayElementRect.x;
        this.ay = y + this.overlayElementRect.y;
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
     * @param {?=} returnVal
     * @return {?}
     */
    checkLeft(returnVal) {
        /** @type {?} */
        const rest = this.ax - this.offsetCheck;
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
     * @param {?=} returnVal
     * @return {?}
     */
    checkRight(returnVal) {
        /** @type {?} */
        const rest = window.innerWidth - (this.ax + this.overlayElementRect.width + this.offsetCheck);
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
     * @param {?=} returnVal
     * @return {?}
     */
    checkTop(returnVal) {
        /** @type {?} */
        const rest = this.ay - this.offsetCheck;
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
     * @param {?=} returnVal
     * @return {?}
     */
    checkBottom(returnVal) {
        /** @type {?} */
        const rest = window.innerHeight - (this.ay + this.overlayElementRect.height + this.offsetCheck);
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
     * @return {?}
     */
    checkAll() {
        return this.checkLeft() ||
            this.checkRight() ||
            this.checkTop() ||
            this.checkBottom();
    }
}
if (false) {
    /** @type {?} */
    Positioning.prototype.offsetCheck;
    /** @type {?} */
    Positioning.prototype.originRect;
    /** @type {?} */
    Positioning.prototype.overlayElementRect;
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
    /** @type {?} */
    Positioning.prototype.placement;
    /** @type {?} */
    Positioning.prototype.xPosition;
    /** @type {?} */
    Positioning.prototype.yPosition;
    /** @type {?} */
    Positioning.prototype.origin;
    /** @type {?} */
    Positioning.prototype.overlayElement;
    /** @type {?} */
    Positioning.prototype.themeVariables;
    /** @type {?} */
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcG9zaXRpb24vcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzNDLE9BQVEsT0FBTztJQUNmLE9BQVEsT0FBTzs7Ozs7SUFJZixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNO0lBQ2IsT0FBUSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQU1qQixNQUFNLFVBQVUsV0FBVyxDQUN6QixTQUFvQixFQUNwQixTQUFvQixFQUNwQixTQUFvQixFQUNwQixNQUFlLEVBQ2YsY0FBdUIsRUFDdkIsY0FBOEIsRUFDOUIsTUFBTSxHQUFHLENBQUM7SUFFVixPQUFPLGNBQWMsQ0FDbkIsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGNBQWMsRUFDZCxjQUFjLEVBQ2QsTUFBTSxDQUNQLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7OztBQUVELFNBQVMsY0FBYyxDQUNyQixTQUFvQixFQUNwQixTQUFvQixFQUNwQixTQUFvQixFQUNwQixNQUFlLEVBQ2YsY0FBdUIsRUFDdkIsY0FBOEIsRUFDOUIsTUFBTSxHQUFHLENBQUM7O1VBR0osVUFBVSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFXOztVQUN0RCxrQkFBa0IsR0FBRyxtQkFBQSxjQUFjLENBQUMscUJBQXFCLEVBQUUsRUFBVztJQUM1RSxJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO0tBQ3BHO0lBQ0QsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMxQyxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7S0FD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LENBQUMsTUFBTSxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUN6QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERpclBvc2l0aW9uIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgZW51bSBZUG9zaXRpb24ge1xuICBhYm92ZSA9ICdhYm92ZScsXG4gIGJlbG93ID0gJ2JlbG93J1xufVxuXG5leHBvcnQgZW51bSBYUG9zaXRpb24ge1xuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInLFxuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0gWFBvc2l0aW9uIHwgWVBvc2l0aW9uO1xuXG4vKiogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYFBvc2l0aW9uaW5nYCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKFxuICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgeFBvc2l0aW9uOiBYUG9zaXRpb24sXG4gIHlQb3NpdGlvbjogWVBvc2l0aW9uLFxuICBvcmlnaW46IEVsZW1lbnQsXG4gIG92ZXJsYXlFbGVtZW50OiBFbGVtZW50LFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG9mZnNldCA9IDBcbikge1xuICByZXR1cm4gY3JlYXRlUG9zaXRpb24oXG4gICAgcGxhY2VtZW50LFxuICAgIHhQb3NpdGlvbixcbiAgICB5UG9zaXRpb24sXG4gICAgb3JpZ2luLFxuICAgIG92ZXJsYXlFbGVtZW50LFxuICAgIHRoZW1lVmFyaWFibGVzLFxuICAgIG9mZnNldFxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbihcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgb3JpZ2luOiBFbGVtZW50LFxuICBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBvZmZzZXQgPSAwXG4pIHtcblxuICBjb25zdCBvcmlnaW5SZWN0ID0gb3JpZ2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIGNvbnN0IG92ZXJsYXlFbGVtZW50UmVjdCA9IG92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIGlmICh4UG9zaXRpb24gJiYgeVBvc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICB9XG4gIGlmICgoeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikgJiYgIXBsYWNlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICB9XG4gIGxldCB4ID0gMCxcbiAgICAgIHkgPSAwLFxuICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgIG95ID0gJ2NlbnRlcic7XG4gIGlmIChwbGFjZW1lbnQgfHwgeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikge1xuICAgIGlmIChwbGFjZW1lbnQpIHtcbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICB4ID0gKG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSA9IC1vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC0gb2Zmc2V0O1xuICAgICAgICBveSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB4ID0gKG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSA9IG9yaWdpblJlY3QuaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICBveSA9ICd0b3AnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHBsYWNlbWVudCBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IC1vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLSBvZmZzZXQ7XG4gICAgICAgICAgeSA9IChvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggPSBvcmlnaW5SZWN0LndpZHRoICsgb2Zmc2V0O1xuICAgICAgICAgIHkgPSAob3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBkaXIgPSB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oeFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgIHggPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgIHggPSBvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uKSB7XG4gICAgICBpZiAoeVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeSA9IDA7XG4gICAgICAgIG95ID0gJzAlJztcbiAgICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeSA9IG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgb3kgPSAnMTAwJSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5yb3VuZCh4KSxcbiAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgIG94LFxuICAgIG95XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZyB7XG4gIHByaXZhdGUgb2Zmc2V0Q2hlY2sgPSAxNjtcbiAgcHJpdmF0ZSBvcmlnaW5SZWN0ID0gdGhpcy5vcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudFJlY3QgPSB0aGlzLm92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBheDogbnVtYmVyO1xuICBheTogbnVtYmVyO1xuICBveDogc3RyaW5nO1xuICBveTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICBwcml2YXRlIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICAgIHByaXZhdGUgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gICAgcHJpdmF0ZSBvcmlnaW46IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgICBwcml2YXRlIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIG9mZnNldCA9IDBcbiAgKSB7XG4gICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZXJlIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2VcbiAgICBpZiAodGhpcy5jaGVja0FsbCgpKSB7XG4gICAgICBjb25zdCBfbWF4X3dpZHRoID0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyB0aGlzLm9mZnNldENoZWNrICogMiA+IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3QgX21heF9oZWlnaHQgPSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldENoZWNrICogMiA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChfbWF4X3dpZHRoIHx8IF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgIGlmIChfbWF4X2hlaWdodCkge1xuICAgICAgICAgIHRoaXMueSA9IHRoaXMub3JpZ2luUmVjdC55IC0gdGhpcy5vZmZzZXRDaGVjaztcbiAgICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9tYXhfd2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnggPSB0aGlzLm9yaWdpblJlY3QueCAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tCb3R0b20oKSkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5jaGVja0JvdHRvbSh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tUb3AoKSkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5jaGVja1RvcCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja1JpZ2h0KCkpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuY2hlY2tSaWdodCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tMZWZ0KCkpIHtcbiAgICAgICAgdGhpcy54IC09IHRoaXMuY2hlY2tMZWZ0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByb3VuZCByZXN1bHRcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgIHRoaXMuYXggPSBNYXRoLnJvdW5kKHRoaXMuYXgpO1xuICAgIHRoaXMuYXkgPSBNYXRoLnJvdW5kKHRoaXMuYXkpO1xuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvc2l0aW9uKFxuICApIHtcbiAgICBpZiAodGhpcy54UG9zaXRpb24gJiYgdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbiBub3QgdXNlIFxcYHhQb3NpdGlvblxcYCBhbmQgXFxgeVBvc2l0aW9uXFxgIHRvZ2V0aGVyLCB1c2Ugb25seSBvbmUgb2YgdGhlbS5gKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLnhQb3NpdGlvbiB8fCB0aGlzLnlQb3NpdGlvbikgJiYgIXRoaXMucGxhY2VtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHBsYWNlbWVudFxcYCBpcyByZXF1aXJlZC5gKTtcbiAgICB9XG4gICAgbGV0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgICAgb3kgPSAnY2VudGVyJztcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgfHwgdGhpcy54UG9zaXRpb24gfHwgdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHggPSAodGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gLXRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAtIHRoaXMub2Zmc2V0O1xuICAgICAgICAgIG95ID0gJ2JvdHRvbSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHggPSAodGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gdGhpcy5vcmlnaW5SZWN0LmhlaWdodCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgIG95ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGlyID0gdGhpcy50aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy5wbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICAgIHggPSAtdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIHkgPSAodGhpcy5vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgICAgeCA9IHRoaXMub3JpZ2luUmVjdC53aWR0aCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgeSA9ICh0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih0aGlzLnhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gdGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICBveSA9ICcwJSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHkgPSB0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmF4ID0geCArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0Lng7XG4gICAgdGhpcy5heSA9IHkgKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC55O1xuICAgIHRoaXMub3ggPSBveDtcbiAgICB0aGlzLm95ID0gb3k7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgICAgb3gsXG4gICAgICBveVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGVmdChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXggLSB0aGlzLm9mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueFBvc2l0aW9uKSBhcyBYUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tSaWdodChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKHRoaXMuYXggKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCArIHRoaXMub2Zmc2V0Q2hlY2spO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueFBvc2l0aW9uKSBhcyBYUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tUb3AocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB0aGlzLmF5IC0gdGhpcy5vZmZzZXRDaGVjaztcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IGludmVydFBsYWNlbWVudCh0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrQm90dG9tKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKHRoaXMuYXkgKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IGludmVydFBsYWNlbWVudCh0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tMZWZ0KCkgfHxcbiAgICB0aGlzLmNoZWNrUmlnaHQoKSB8fFxuICAgIHRoaXMuY2hlY2tUb3AoKSB8fFxuICAgIHRoaXMuY2hlY2tCb3R0b20oKTtcbiAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0UGxhY2VtZW50KHBsYWNlbWVudDogUGxhY2VtZW50KTogUGxhY2VtZW50IHtcbiAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbi5iZWxvdztcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgIHJldHVybiBZUG9zaXRpb24uYWJvdmU7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmJlZm9yZTtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmFmdGVyO1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgcmV0dXJuIFhQb3NpdGlvbi5sZWZ0O1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmxlZnQpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLnJpZ2h0O1xuICB9XG59XG4iXX0=