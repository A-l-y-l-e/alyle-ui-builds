import { DirPosition } from '../style-utils';
export var YPosition;
(function (YPosition) {
    YPosition["above"] = "above";
    YPosition["below"] = "below";
})(YPosition || (YPosition = {}));
export var XPosition;
(function (XPosition) {
    XPosition["before"] = "before";
    XPosition["after"] = "after";
    XPosition["left"] = "left";
    XPosition["right"] = "right";
})(XPosition || (XPosition = {}));
var INITIAL_WH = 'initial';
var Positioning = /** @class */ (function () {
    function Positioning(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, _offset, _flip) {
        if (_offset === void 0) { _offset = 0; }
        if (_flip === void 0) { _flip = true; }
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this._themeVariables = _themeVariables;
        this._offset = _offset;
        this._offsetCheck = 16;
        this._originRect = this.origin.getBoundingClientRect();
        this._overlayElementRect = this.overlayElement.getBoundingClientRect();
        this.width = INITIAL_WH;
        this.height = INITIAL_WH;
        var offsetCheckx2 = this._offsetCheck * 2;
        this.createPosition();
        if (_flip) {
            for (var index = 0; index < 2; index++) {
                if (this.checkAll()) {
                    this.createPosition();
                }
            }
        }
        // when there is not enough space
        if (this.checkAll()) {
            var _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
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
                    this.y += this.checkBottom(true);
                }
                else if (this.checkTop()) {
                    this.y -= this.checkTop(true);
                }
                if (this.checkRight()) {
                    this.x += this.checkRight(true);
                }
                else if (this.checkLeft()) {
                    this.x -= this.checkLeft(true);
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
    Object.defineProperty(Positioning.prototype, "offsetX", {
        get: function () {
            return typeof this._offset === 'number'
                ? this._offset
                : this._offset.x || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Positioning.prototype, "offsetY", {
        get: function () {
            return typeof this._offset === 'number'
                ? this._offset
                : this._offset.y || 0;
        },
        enumerable: true,
        configurable: true
    });
    Positioning.prototype.createPosition = function () {
        if (this.xPosition && this.yPosition) {
            throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
            throw new Error("`placement` is required.");
        }
        var x = this._originRect.x, y = this._originRect.y, ox = 'center', oy = 'center';
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
                var dir = this._themeVariables.getDirection(this.placement);
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
                var dir = this._themeVariables.getDirection(this.xPosition);
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
            ox: ox,
            oy: oy
        };
    };
    Positioning.prototype.checkLeft = function (returnVal) {
        var rest = this.ax - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = invertPlacement(this.xPosition);
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkRight = function (returnVal) {
        var rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = invertPlacement(this.xPosition);
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkTop = function (returnVal) {
        var rest = this.ay - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = invertPlacement(this.yPosition);
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkBottom = function (returnVal) {
        var rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = invertPlacement(this.yPosition);
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkAll = function () {
        return this.checkLeft() ||
            this.checkRight() ||
            this.checkTop() ||
            this.checkBottom();
    };
    Positioning.prototype.updateOrigin = function () {
        // do not update if it is defined
        if (this._origin) {
            return;
        }
        this._origin = true;
        var oax = this._originRect.x + this._originRect.width / 2;
        var oay = this._originRect.y + this._originRect.height / 2;
        var vax = this.x + this._overlayElementRect.width / 2;
        var vay = this.y + this._overlayElementRect.height / 2;
        this.ox = oax - vax + this._overlayElementRect.width / 2 + "px";
        this.oy = oay - vay + this._overlayElementRect.height / 2 + "px";
    };
    return Positioning;
}());
export { Positioning };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcG9zaXRpb24vcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE1BQU0sQ0FBTixJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsNEJBQWUsQ0FBQTtJQUNmLDRCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiw0QkFBZSxDQUFBO0lBQ2YsMEJBQWEsQ0FBQTtJQUNiLDRCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBSUQsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBRTdCO0lBdUJFLHFCQUNVLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWUsRUFDZixjQUF1QixFQUN2QixlQUErQixFQUMvQixPQUdILEVBQ0wsS0FBWTtRQUpKLHdCQUFBLEVBQUEsV0FHSDtRQUNMLHNCQUFBLEVBQUEsWUFBWTtRQVZKLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FHVjtRQWhDQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNULGdCQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBYSxDQUFDO1FBQzdELHdCQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMs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TSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ3pDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDeEMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQ3ZCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRTtRQUN2QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGlyUG9zaXRpb24gfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbmV4cG9ydCBlbnVtIFlQb3NpdGlvbiB7XG4gIGFib3ZlID0gJ2Fib3ZlJyxcbiAgYmVsb3cgPSAnYmVsb3cnXG59XG5cbmV4cG9ydCBlbnVtIFhQb3NpdGlvbiB7XG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcicsXG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBYUG9zaXRpb24gfCBZUG9zaXRpb247XG5cbmNvbnN0IElOSVRJQUxfV0ggPSAnaW5pdGlhbCc7XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZyB7XG4gIHByaXZhdGUgX29mZnNldENoZWNrID0gMTY7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29yaWdpblJlY3QgPSB0aGlzLm9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBwcml2YXRlIHJlYWRvbmx5IF9vdmVybGF5RWxlbWVudFJlY3QgPSB0aGlzLm92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBheDogbnVtYmVyO1xuICBheTogbnVtYmVyO1xuICBveDogc3RyaW5nO1xuICBveTogc3RyaW5nO1xuICB3aWR0aDogc3RyaW5nID0gSU5JVElBTF9XSDtcbiAgaGVpZ2h0OiBzdHJpbmcgPSBJTklUSUFMX1dIO1xuICBwcml2YXRlIF9vcmlnaW46IGJvb2xlYW47XG4gIGdldCBvZmZzZXRYKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9vZmZzZXQgPT09ICdudW1iZXInXG4gICAgPyB0aGlzLl9vZmZzZXRcbiAgICA6IHRoaXMuX29mZnNldC54IHx8IDA7XG4gIH1cbiAgZ2V0IG9mZnNldFkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX29mZnNldCA9PT0gJ251bWJlcidcbiAgICA/IHRoaXMuX29mZnNldFxuICAgIDogdGhpcy5fb2Zmc2V0LnkgfHwgMDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgIHByaXZhdGUgeFBvc2l0aW9uOiBYUG9zaXRpb24sXG4gICAgcHJpdmF0ZSB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgICBwcml2YXRlIG9yaWdpbjogRWxlbWVudCxcbiAgICBwcml2YXRlIG92ZXJsYXlFbGVtZW50OiBFbGVtZW50LFxuICAgIHByaXZhdGUgX3RoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIF9vZmZzZXQ6IG51bWJlciB8IHtcbiAgICAgIHg/OiBudW1iZXJcbiAgICAgIHk/OiBudW1iZXJcbiAgICB9ID0gMCxcbiAgICBfZmxpcCA9IHRydWVcbiAgKSB7XG5cbiAgICBjb25zdCBvZmZzZXRDaGVja3gyID0gdGhpcy5fb2Zmc2V0Q2hlY2sgKiAyO1xuICAgIHRoaXMuY3JlYXRlUG9zaXRpb24oKTtcblxuICAgIGlmIChfZmxpcCkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBbGwoKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZVxuICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgIGNvbnN0IF9tYXhfd2lkdGggPSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyBvZmZzZXRDaGVja3gyID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBfbWF4X2hlaWdodCA9IHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRDaGVja3gyID4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKF9tYXhfd2lkdGggfHwgX21heF9oZWlnaHQpIHtcbiAgICAgICAgaWYgKF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy55ID0gdGhpcy5fb2Zmc2V0Q2hlY2s7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSBvZmZzZXRDaGVja3gyfXB4YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX21heF93aWR0aCkge1xuICAgICAgICAgIHRoaXMueCA9IHRoaXMuX29mZnNldENoZWNrO1xuICAgICAgICAgIHRoaXMud2lkdGggPSBgJHt3aW5kb3cuaW5uZXJXaWR0aCAtIG9mZnNldENoZWNreDJ9cHhgO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jaGVja0JvdHRvbSgpKSB7XG4gICAgICAgICAgdGhpcy55ICs9IHRoaXMuY2hlY2tCb3R0b20odHJ1ZSkgYXMgbnVtYmVyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tUb3AoKSkge1xuICAgICAgICAgIHRoaXMueSAtPSB0aGlzLmNoZWNrVG9wKHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaGVja1JpZ2h0KCkpIHtcbiAgICAgICAgICB0aGlzLnggKz0gdGhpcy5jaGVja1JpZ2h0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrTGVmdCgpKSB7XG4gICAgICAgICAgdGhpcy54IC09IHRoaXMuY2hlY2tMZWZ0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU9yaWdpbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vZmZzZXQpIHtcbiAgICAgIHRoaXMudXBkYXRlT3JpZ2luKCk7XG4gICAgfVxuXG4gICAgLy8gcm91bmQgcmVzdWx0XG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICB0aGlzLmF4ID0gTWF0aC5yb3VuZCh0aGlzLmF4KTtcbiAgICB0aGlzLmF5ID0gTWF0aC5yb3VuZCh0aGlzLmF5KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQb3NpdGlvbihcbiAgKSB7XG4gICAgaWYgKHRoaXMueFBvc2l0aW9uICYmIHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4gbm90IHVzZSBcXGB4UG9zaXRpb25cXGAgYW5kIFxcYHlQb3NpdGlvblxcYCB0b2dldGhlciwgdXNlIG9ubHkgb25lIG9mIHRoZW0uYCk7XG4gICAgfVxuICAgIGlmICgodGhpcy54UG9zaXRpb24gfHwgdGhpcy55UG9zaXRpb24pICYmICF0aGlzLnBsYWNlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGBwbGFjZW1lbnRcXGAgaXMgcmVxdWlyZWQuYCk7XG4gICAgfVxuICAgIGxldCB4ID0gdGhpcy5fb3JpZ2luUmVjdC54LFxuICAgICAgICB5ID0gdGhpcy5fb3JpZ2luUmVjdC55LFxuICAgICAgICBveCA9ICdjZW50ZXInLFxuICAgICAgICBveSA9ICdjZW50ZXInO1xuICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeCArPSAodGhpcy5fb3JpZ2luUmVjdC53aWR0aCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ICs9IC10aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICBveSA9ICdib3R0b20nO1xuXG4gICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgeSAtPSB0aGlzLm9mZnNldFk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeCArPSAodGhpcy5fb3JpZ2luUmVjdC53aWR0aCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ICs9IHRoaXMuX29yaWdpblJlY3QuaGVpZ2h0O1xuICAgICAgICBveSA9ICd0b3AnO1xuXG4gICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgeSArPSB0aGlzLm9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy5wbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggKz0gLXRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgICAgICB5ICs9ICh0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB4IC09IHRoaXMub2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggKz0gdGhpcy5fb3JpZ2luUmVjdC53aWR0aDtcbiAgICAgICAgICB5ICs9ICh0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB4ICs9IHRoaXMub2Zmc2V0WDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHRoaXMueFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggPSB0aGlzLl9vcmlnaW5SZWN0Lng7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeCArPSB0aGlzLm9mZnNldFg7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IHRoaXMuX29yaWdpblJlY3QueCArIHRoaXMuX29yaWdpblJlY3Qud2lkdGggLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeCAtPSB0aGlzLm9mZnNldFg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB5ID0gdGhpcy5fb3JpZ2luUmVjdC55O1xuICAgICAgICAgIG95ID0gJzAlJztcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB5IC09IHRoaXMub2Zmc2V0WTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeSA9IHRoaXMuX29yaWdpblJlY3QueSArIHRoaXMuX29yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgICBveSA9ICcxMDAlJztcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB5ICs9IHRoaXMub2Zmc2V0WTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5heCA9IHg7XG4gICAgdGhpcy5heSA9IHk7XG4gICAgdGhpcy5veCA9IG94O1xuICAgIHRoaXMub3kgPSBveTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5yb3VuZCh4KSxcbiAgICAgIHk6IE1hdGgucm91bmQoeSksXG4gICAgICBveCxcbiAgICAgIG95XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tMZWZ0KHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gdGhpcy5heCAtIHRoaXMuX29mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueFBvc2l0aW9uKSBhcyBYUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tSaWdodChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKHRoaXMuYXggKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyB0aGlzLl9vZmZzZXRDaGVjayk7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYWJvdmUgJiYgdGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1RvcChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXkgLSB0aGlzLl9vZmZzZXRDaGVjaztcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IGludmVydFBsYWNlbWVudCh0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrQm90dG9tKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKHRoaXMuYXkgKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0ICsgdGhpcy5fb2Zmc2V0Q2hlY2spO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueVBvc2l0aW9uKSBhcyBZUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0xlZnQoKSB8fFxuICAgIHRoaXMuY2hlY2tSaWdodCgpIHx8XG4gICAgdGhpcy5jaGVja1RvcCgpIHx8XG4gICAgdGhpcy5jaGVja0JvdHRvbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVPcmlnaW4oKSB7XG5cbiAgICAvLyBkbyBub3QgdXBkYXRlIGlmIGl0IGlzIGRlZmluZWRcbiAgICBpZiAodGhpcy5fb3JpZ2luKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb3JpZ2luID0gdHJ1ZTtcbiAgICBjb25zdCBvYXggPSB0aGlzLl9vcmlnaW5SZWN0LnggKyB0aGlzLl9vcmlnaW5SZWN0LndpZHRoIC8gMjtcbiAgICBjb25zdCBvYXkgPSB0aGlzLl9vcmlnaW5SZWN0LnkgKyB0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAvIDI7XG4gICAgY29uc3QgdmF4ID0gdGhpcy54ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC8gMjtcbiAgICBjb25zdCB2YXkgPSB0aGlzLnkgKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLm94ID0gYCR7b2F4IC0gdmF4ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC8gMn1weGA7XG4gICAgdGhpcy5veSA9IGAke29heSAtIHZheSArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgLyAyfXB4YDtcbiAgfVxuXG59XG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0UGxhY2VtZW50KHBsYWNlbWVudDogUGxhY2VtZW50KTogUGxhY2VtZW50IHtcbiAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbi5iZWxvdztcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgIHJldHVybiBZUG9zaXRpb24uYWJvdmU7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmJlZm9yZTtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmFmdGVyO1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgcmV0dXJuIFhQb3NpdGlvbi5sZWZ0O1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmxlZnQpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLnJpZ2h0O1xuICB9XG4gIHJldHVybiBwbGFjZW1lbnQ7XG59XG4iXX0=