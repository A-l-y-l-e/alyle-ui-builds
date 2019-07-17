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
var INITIAL_V = 'initial';
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
        this.width = INITIAL_V;
        this.height = INITIAL_V;
        var offsetCheckx2 = this._offsetCheck * 2;
        this.createPosition();
        if (_flip) {
            for (var index = 0; index < 2; index++) {
                if (this.checkAll(false, true)) {
                    this.createPosition();
                }
            }
        }
        // when there is not enough space
        if (this.checkAll(true, false)) {
            var _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
            var _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
            if (_max_height) {
                this.y = this._offsetCheck;
                this.height = window.innerHeight - offsetCheckx2 + "px";
            }
            else if (this.checkBottom(false, false)) {
                this.y += this.checkBottom(true, false);
            }
            else if (this.checkTop(false, false)) {
                this.y -= this.checkTop(true, false);
            }
            if (_max_width) {
                this.x = this._offsetCheck;
                this.width = window.innerWidth - offsetCheckx2 + "px";
            }
            else if (this.checkRight(false, false)) {
                this.x += this.checkRight(true, false);
            }
            else if (this.checkLeft(false, false)) {
                this.x -= this.checkLeft(true, false);
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
    Positioning.prototype.checkLeft = function (returnVal, invertIfNeed) {
        var rest = this.ax - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.xPosition) {
                    this.xPosition = invertPlacement(this.xPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkRight = function (returnVal, invertIfNeed) {
        var rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.xPosition) {
                    this.xPosition = invertPlacement(this.xPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkTop = function (returnVal, invertIfNeed) {
        var rest = this.ay - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement === YPosition.above || this.placement === YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.yPosition) {
                    this.yPosition = invertPlacement(this.yPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkBottom = function (returnVal, invertIfNeed) {
        var rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement === YPosition.above || this.placement === YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.yPosition) {
                    this.yPosition = invertPlacement(this.yPosition);
                }
            }
            return true;
        }
        return false;
    };
    Positioning.prototype.checkAll = function (returnVal, invertIfNeed) {
        return this.checkLeft(returnVal, invertIfNeed) ||
            this.checkRight(returnVal, invertIfNeed) ||
            this.checkTop(returnVal, invertIfNeed) ||
            this.checkBottom(returnVal, invertIfNeed);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvcG9zaXRpb24vcG9zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE1BQU0sQ0FBTixJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsNEJBQWUsQ0FBQTtJQUNmLDRCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQiw4QkFBaUIsQ0FBQTtJQUNqQiw0QkFBZSxDQUFBO0lBQ2YsMEJBQWEsQ0FBQTtJQUNiLDRCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBSUQsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBRTVCO0lBdUJFLHFCQUNVLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWUsRUFDZixjQUF1QixFQUN2QixlQUErQixFQUMvQixPQUdILEVBQ0wsS0FBWTtRQUpKLHdCQUFBLEVBQUEsV0FHSDtRQUNMLHNCQUFBLEVBQUEsWUFBWTtRQVZKLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FHVjtRQWhDQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNULGdCQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBYSxDQUFDO1FBQzdELHdCQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMs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LEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFJLENBQUM7SUFDbkUsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQWhSRCxJQWdSQzs7QUFDRCxNQUFNLFVBQVUsZUFBZSxDQUFDLFNBQW9CO0lBQ2xELElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDakMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtRQUN4QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQztLQUN6QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7UUFDekMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtRQUN4QyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDdkI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1FBQ3ZDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4QjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBEaXJQb3NpdGlvbiB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuZXhwb3J0IGVudW0gWVBvc2l0aW9uIHtcbiAgYWJvdmUgPSAnYWJvdmUnLFxuICBiZWxvdyA9ICdiZWxvdydcbn1cblxuZXhwb3J0IGVudW0gWFBvc2l0aW9uIHtcbiAgYmVmb3JlID0gJ2JlZm9yZScsXG4gIGFmdGVyID0gJ2FmdGVyJyxcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9IFhQb3NpdGlvbiB8IFlQb3NpdGlvbjtcblxuY29uc3QgSU5JVElBTF9WID0gJ2luaXRpYWwnO1xuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwcml2YXRlIF9vZmZzZXRDaGVjayA9IDE2O1xuICBwcml2YXRlIHJlYWRvbmx5IF9vcmlnaW5SZWN0ID0gdGhpcy5vcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3ZlcmxheUVsZW1lbnRSZWN0ID0gdGhpcy5vdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgYXg6IG51bWJlcjtcbiAgYXk6IG51bWJlcjtcbiAgb3g6IHN0cmluZztcbiAgb3k6IHN0cmluZztcbiAgd2lkdGg6IHN0cmluZyA9IElOSVRJQUxfVjtcbiAgaGVpZ2h0OiBzdHJpbmcgPSBJTklUSUFMX1Y7XG4gIHByaXZhdGUgX29yaWdpbjogYm9vbGVhbjtcbiAgZ2V0IG9mZnNldFgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX29mZnNldCA9PT0gJ251bWJlcidcbiAgICA/IHRoaXMuX29mZnNldFxuICAgIDogdGhpcy5fb2Zmc2V0LnggfHwgMDtcbiAgfVxuICBnZXQgb2Zmc2V0WSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fb2Zmc2V0ID09PSAnbnVtYmVyJ1xuICAgID8gdGhpcy5fb2Zmc2V0XG4gICAgOiB0aGlzLl9vZmZzZXQueSB8fCAwO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gICAgcHJpdmF0ZSB4UG9zaXRpb246IFhQb3NpdGlvbixcbiAgICBwcml2YXRlIHlQb3NpdGlvbjogWVBvc2l0aW9uLFxuICAgIHByaXZhdGUgb3JpZ2luOiBFbGVtZW50LFxuICAgIHByaXZhdGUgb3ZlcmxheUVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICAgIHByaXZhdGUgX29mZnNldDogbnVtYmVyIHwge1xuICAgICAgeD86IG51bWJlclxuICAgICAgeT86IG51bWJlclxuICAgIH0gPSAwLFxuICAgIF9mbGlwID0gdHJ1ZVxuICApIHtcblxuICAgIGNvbnN0IG9mZnNldENoZWNreDIgPSB0aGlzLl9vZmZzZXRDaGVjayAqIDI7XG4gICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuXG4gICAgaWYgKF9mbGlwKSB7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjsgaW5kZXgrKykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0FsbChmYWxzZSwgdHJ1ZSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2VcbiAgICBpZiAodGhpcy5jaGVja0FsbCh0cnVlLCBmYWxzZSkpIHtcbiAgICAgIGNvbnN0IF9tYXhfd2lkdGggPSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyBvZmZzZXRDaGVja3gyID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBfbWF4X2hlaWdodCA9IHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRDaGVja3gyID4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuX29mZnNldENoZWNrO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIG9mZnNldENoZWNreDJ9cHhgO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrQm90dG9tKGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuY2hlY2tCb3R0b20odHJ1ZSwgZmFsc2UpIGFzIG51bWJlcjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja1RvcChmYWxzZSwgZmFsc2UpKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmNoZWNrVG9wKHRydWUsIGZhbHNlKSBhcyBudW1iZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChfbWF4X3dpZHRoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuX29mZnNldENoZWNrO1xuICAgICAgICB0aGlzLndpZHRoID0gYCR7d2luZG93LmlubmVyV2lkdGggLSBvZmZzZXRDaGVja3gyfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja1JpZ2h0KGZhbHNlLCBmYWxzZSkpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuY2hlY2tSaWdodCh0cnVlLCBmYWxzZSkgYXMgbnVtYmVyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrTGVmdChmYWxzZSwgZmFsc2UpKSB7XG4gICAgICAgIHRoaXMueCAtPSB0aGlzLmNoZWNrTGVmdCh0cnVlLCBmYWxzZSkgYXMgbnVtYmVyO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU9yaWdpbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vZmZzZXQpIHtcbiAgICAgIHRoaXMudXBkYXRlT3JpZ2luKCk7XG4gICAgfVxuXG4gICAgLy8gcm91bmQgcmVzdWx0XG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICB0aGlzLmF4ID0gTWF0aC5yb3VuZCh0aGlzLmF4KTtcbiAgICB0aGlzLmF5ID0gTWF0aC5yb3VuZCh0aGlzLmF5KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQb3NpdGlvbihcbiAgKSB7XG4gICAgaWYgKHRoaXMueFBvc2l0aW9uICYmIHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4gbm90IHVzZSBcXGB4UG9zaXRpb25cXGAgYW5kIFxcYHlQb3NpdGlvblxcYCB0b2dldGhlciwgdXNlIG9ubHkgb25lIG9mIHRoZW0uYCk7XG4gICAgfVxuICAgIGlmICgodGhpcy54UG9zaXRpb24gfHwgdGhpcy55UG9zaXRpb24pICYmICF0aGlzLnBsYWNlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGBwbGFjZW1lbnRcXGAgaXMgcmVxdWlyZWQuYCk7XG4gICAgfVxuICAgIGxldCB4ID0gdGhpcy5fb3JpZ2luUmVjdC54LFxuICAgICAgICB5ID0gdGhpcy5fb3JpZ2luUmVjdC55LFxuICAgICAgICBveCA9ICdjZW50ZXInLFxuICAgICAgICBveSA9ICdjZW50ZXInO1xuICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeCArPSAodGhpcy5fb3JpZ2luUmVjdC53aWR0aCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ICs9IC10aGlzLl9vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICBveSA9ICdib3R0b20nO1xuXG4gICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgeSAtPSB0aGlzLm9mZnNldFk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeCArPSAodGhpcy5fb3JpZ2luUmVjdC53aWR0aCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ICs9IHRoaXMuX29yaWdpblJlY3QuaGVpZ2h0O1xuICAgICAgICBveSA9ICd0b3AnO1xuXG4gICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgeSArPSB0aGlzLm9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy5wbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggKz0gLXRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgICAgICB5ICs9ICh0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB4IC09IHRoaXMub2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggKz0gdGhpcy5fb3JpZ2luUmVjdC53aWR0aDtcbiAgICAgICAgICB5ICs9ICh0aGlzLl9vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB4ICs9IHRoaXMub2Zmc2V0WDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHRoaXMueFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggPSB0aGlzLl9vcmlnaW5SZWN0Lng7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeCArPSB0aGlzLm9mZnNldFg7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IHRoaXMuX29yaWdpblJlY3QueCArIHRoaXMuX29yaWdpblJlY3Qud2lkdGggLSB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG5cbiAgICAgICAgICAvLyBzZXQgb2Zmc2V0XG4gICAgICAgICAgeCAtPSB0aGlzLm9mZnNldFg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB5ID0gdGhpcy5fb3JpZ2luUmVjdC55O1xuICAgICAgICAgIG95ID0gJzAlJztcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB5IC09IHRoaXMub2Zmc2V0WTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeSA9IHRoaXMuX29yaWdpblJlY3QueSArIHRoaXMuX29yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgICBveSA9ICcxMDAlJztcblxuICAgICAgICAgIC8vIHNldCBvZmZzZXRcbiAgICAgICAgICB5ICs9IHRoaXMub2Zmc2V0WTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5heCA9IHg7XG4gICAgdGhpcy5heSA9IHk7XG4gICAgdGhpcy5veCA9IG94O1xuICAgIHRoaXMub3kgPSBveTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5yb3VuZCh4KSxcbiAgICAgIHk6IE1hdGgucm91bmQoeSksXG4gICAgICBveCxcbiAgICAgIG95XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tMZWZ0KHJldHVyblZhbDogYm9vbGVhbiwgaW52ZXJ0SWZOZWVkOiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXggLSB0aGlzLl9vZmZzZXRDaGVjaztcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAoaW52ZXJ0SWZOZWVkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy54UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrUmlnaHQocmV0dXJuVmFsOiBib29sZWFuLCBpbnZlcnRJZk5lZWQ6IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVyV2lkdGggLSAodGhpcy5heCArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC53aWR0aCArIHRoaXMuX29mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAoaW52ZXJ0SWZOZWVkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy54UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrVG9wKHJldHVyblZhbDogYm9vbGVhbiwgaW52ZXJ0SWZOZWVkOiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXkgLSB0aGlzLl9vZmZzZXRDaGVjaztcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAoaW52ZXJ0SWZOZWVkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy55UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy55UG9zaXRpb24pIGFzIFlQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrQm90dG9tKHJldHVyblZhbDogYm9vbGVhbiwgaW52ZXJ0SWZOZWVkOiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtICh0aGlzLmF5ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCArIHRoaXMuX29mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAoaW52ZXJ0SWZOZWVkKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy55UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy55UG9zaXRpb24pIGFzIFlQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBbGwocmV0dXJuVmFsOiBib29sZWFuLCBpbnZlcnRJZk5lZWQ6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0xlZnQocmV0dXJuVmFsLCBpbnZlcnRJZk5lZWQpIHx8XG4gICAgdGhpcy5jaGVja1JpZ2h0KHJldHVyblZhbCwgaW52ZXJ0SWZOZWVkKSB8fFxuICAgIHRoaXMuY2hlY2tUb3AocmV0dXJuVmFsLCBpbnZlcnRJZk5lZWQpIHx8XG4gICAgdGhpcy5jaGVja0JvdHRvbShyZXR1cm5WYWwsIGludmVydElmTmVlZCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU9yaWdpbigpIHtcblxuICAgIC8vIGRvIG5vdCB1cGRhdGUgaWYgaXQgaXMgZGVmaW5lZFxuICAgIGlmICh0aGlzLl9vcmlnaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vcmlnaW4gPSB0cnVlO1xuICAgIGNvbnN0IG9heCA9IHRoaXMuX29yaWdpblJlY3QueCArIHRoaXMuX29yaWdpblJlY3Qud2lkdGggLyAyO1xuICAgIGNvbnN0IG9heSA9IHRoaXMuX29yaWdpblJlY3QueSArIHRoaXMuX29yaWdpblJlY3QuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCB2YXggPSB0aGlzLnggKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLyAyO1xuICAgIGNvbnN0IHZheSA9IHRoaXMueSArIHRoaXMuX292ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgLyAyO1xuICAgIHRoaXMub3ggPSBgJHtvYXggLSB2YXggKyB0aGlzLl9vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLyAyfXB4YDtcbiAgICB0aGlzLm95ID0gYCR7b2F5IC0gdmF5ICsgdGhpcy5fb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAvIDJ9cHhgO1xuICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnRQbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQbGFjZW1lbnQge1xuICBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uLmJlbG93O1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbi5hYm92ZTtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5hZnRlcikge1xuICAgIHJldHVybiBYUG9zaXRpb24uYmVmb3JlO1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmJlZm9yZSkge1xuICAgIHJldHVybiBYUG9zaXRpb24uYWZ0ZXI7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ucmlnaHQpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmxlZnQ7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ubGVmdCkge1xuICAgIHJldHVybiBYUG9zaXRpb24ucmlnaHQ7XG4gIH1cbiAgcmV0dXJuIHBsYWNlbWVudDtcbn1cbiJdfQ==