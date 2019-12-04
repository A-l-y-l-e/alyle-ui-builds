import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Inject, Input, Renderer2, OnChanges, OnInit, OnDestroy, TemplateRef, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinShadowColor, mixinStyleUpdater, toBoolean } from '@alyle/ui';
import { LyAccordion } from './accordion';
import { lyExpansionAnimations } from './expansion-animations';
import { LyExpansionPanelContent } from './expansion-panel-content';
import { Subscription, Subject } from 'rxjs';
import { startWith, filter, first, distinctUntilChanged } from 'rxjs/operators';
/** @docs-private */
var LyExpansionPanelBase = /** @class */ (function () {
    function LyExpansionPanelBase(_theme) {
        this._theme = _theme;
    }
    return LyExpansionPanelBase;
}());
export { LyExpansionPanelBase };
/** @docs-private */
export var LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
var LyExpansionPanel = /** @class */ (function (_super) {
    tslib_1.__extends(LyExpansionPanel, _super);
    function LyExpansionPanel(_el, _renderer, _cd, _theme, _accordion) {
        var _this = _super.call(this, _theme) || this;
        _this._el = _el;
        _this._renderer = _renderer;
        _this._cd = _cd;
        _this._accordion = _accordion;
        /** @docs-private */
        _this.classes = _this._accordion.classes;
        _this._panelAnimationTiming = _this._theme.variables.animations.durations.entering + "ms " + _this._theme.variables.animations.curves.standard;
        /** Subscription to openAll/closeAll events. */
        _this._openCloseAllSubscription = Subscription.EMPTY;
        _this._hasToggle = !!_this._accordion.hasToggle;
        /** Event emitted every time the LyExpansionPanel is closed. */
        _this.closed = new EventEmitter();
        /** Event emitted every time the LyExpansionPanel is opened. */
        _this.opened = new EventEmitter();
        /** An event emitted after the body's collapse animation happens. */
        _this.afterCollapse = new EventEmitter();
        /** An event emitted after the body's expansion animation happens. */
        _this.afterExpand = new EventEmitter();
        /** Event emitted when the LyExpansionPanel is destroyed. */
        _this.destroyed = new EventEmitter();
        /** Stream of body animation done events. */
        _this._bodyAnimationDone = new Subject();
        _renderer.addClass(_el.nativeElement, _this._accordion.classes.panel);
        _this._openCloseAllSubscription = _this._subscribeToOpenCloseAllActions();
        _this._bodyAnimationDone.pipe(distinctUntilChanged(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(function (event) {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    _this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    _this.afterCollapse.emit();
                }
            }
        });
        return _this;
    }
    Object.defineProperty(LyExpansionPanel.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.disabled) {
                this._disabled = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this._accordion.classes.disabled);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.disabled);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyExpansionPanel.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal !== this.expanded && !this.disabled) {
                // unselect other panels
                if (newVal && !this._accordion.multiple) {
                    this._accordion._openCloseAllActions.next(false);
                }
                this._expanded = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this._accordion.classes.expanded);
                    this.opened.emit();
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.expanded);
                    this.closed.emit();
                }
                this._cd.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyExpansionPanel.prototype, "hasToggle", {
        get: function () {
            return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
        },
        set: function (val) {
            this._hasToggle = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    LyExpansionPanel.prototype.ngOnChanges = function () {
        this.updateStyle(this._el);
    };
    LyExpansionPanel.prototype.ngOnInit = function () {
        var requireUpdate = false;
        if (this.bg == null) {
            this.bg = 'paper';
            requireUpdate = true;
        }
        if (this.color == null) {
            this.color = 'text';
            requireUpdate = true;
        }
        if (this.elevation == null) {
            this.elevation = 2;
            requireUpdate = true;
        }
        if (requireUpdate) {
            this.ngOnChanges();
        }
    };
    LyExpansionPanel.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._lazyContent) {
            this.opened.pipe(startWith(null), filter(function () { return !!_this.expanded && !_this._lazyContentRef; }), first()).subscribe(function () { return _this._lazyContentRef = _this._lazyContent._template; });
        }
    };
    LyExpansionPanel.prototype.ngOnDestroy = function () {
        this._openCloseAllSubscription.unsubscribe();
    };
    LyExpansionPanel.prototype.close = function () {
        this.expanded = false;
    };
    LyExpansionPanel.prototype.open = function () {
        this.expanded = true;
    };
    LyExpansionPanel.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    /** Gets the expanded state string. */
    LyExpansionPanel.prototype._getExpandedState = function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    LyExpansionPanel.prototype._subscribeToOpenCloseAllActions = function () {
        var _this = this;
        return this._accordion._openCloseAllActions.subscribe(function (expanded) {
            _this.expanded = expanded;
        });
    };
    LyExpansionPanel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyTheme2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    tslib_1.__decorate([
        ContentChild(LyExpansionPanelContent, { static: false })
    ], LyExpansionPanel.prototype, "_lazyContent", void 0);
    tslib_1.__decorate([
        Output()
    ], LyExpansionPanel.prototype, "closed", void 0);
    tslib_1.__decorate([
        Output()
    ], LyExpansionPanel.prototype, "opened", void 0);
    tslib_1.__decorate([
        Output()
    ], LyExpansionPanel.prototype, "afterCollapse", void 0);
    tslib_1.__decorate([
        Output()
    ], LyExpansionPanel.prototype, "afterExpand", void 0);
    tslib_1.__decorate([
        Output()
    ], LyExpansionPanel.prototype, "destroyed", void 0);
    tslib_1.__decorate([
        Input()
    ], LyExpansionPanel.prototype, "disabled", null);
    tslib_1.__decorate([
        Input()
    ], LyExpansionPanel.prototype, "expanded", null);
    tslib_1.__decorate([
        Input()
    ], LyExpansionPanel.prototype, "hasToggle", null);
    LyExpansionPanel = tslib_1.__decorate([
        Component({
            selector: 'ly-expansion-panel',
            template: "<ng-content select=\"ly-expansion-panel-header\"></ng-content>\n<div [className]=\"classes.panelContent\"\n  [@contentExpansion]=\"{\n    value: _getExpandedState(),\n    params: {\n      panelAnimationTiming: _panelAnimationTiming\n    }\n  }\"\n  (@contentExpansion.done)=\"_bodyAnimationDone.next($event)\"\n>\n  <div [className]=\"classes.panelBody\">\n    <ng-content></ng-content>\n    <ng-template [ngTransclude]=\"_lazyContentRef\"></ng-template>\n  </div>\n  <ng-content select=\"ly-action-row\"></ng-content>\n</div>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            exportAs: 'lyExpansionPanel',
            animations: [
                lyExpansionAnimations.contentExpansion
            ],
            inputs: [
                'bg',
                'color',
                'elevation',
                'shadowColor'
            ]
        }),
        tslib_1.__param(4, Inject(LyAccordion))
    ], LyExpansionPanel);
    return LyExpansionPanel;
}(LyButtonMixinBase));
export { LyExpansionPanel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDUixNQUFNLFdBQVcsQ0FBQztBQUVyQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTWhGLG9CQUFvQjtBQUNwQjtJQUNFLDhCQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztJQUNQLDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUNoRCxPQUFPLENBQ0wsVUFBVSxDQUNSLGNBQWMsQ0FDWixnQkFBZ0IsQ0FBQyxvQkFB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LEtBQUssRUFBRSxDQUFDOzBEQUFnRDtJQUcvRjtRQUFULE1BQU0sRUFBRTtvREFBdUQ7SUFHdEQ7UUFBVCxNQUFNLEVBQUU7b0RBQXVEO0lBR3REO1FBQVQsTUFBTSxFQUFFOzJEQUE4RDtJQUc3RDtRQUFULE1BQU0sRUFBRTt5REFBNEQ7SUFHM0Q7UUFBVCxNQUFNLEVBQUU7dURBQTBEO0lBTW5FO1FBREMsS0FBSyxFQUFFO29EQVlQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7b0RBb0JQO0lBTUQ7UUFEQyxLQUFLLEVBQUU7cURBR1A7SUF0RlUsZ0JBQWdCO1FBZjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsMGhCQUFxQztZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFVBQVUsRUFBRTtnQkFDVixxQkFBcUIsQ0FBQyxnQkFBZ0I7YUFDdkM7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSTtnQkFDSixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1NBQ0YsQ0FBQztRQWlHRyxtQkFBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7T0FoR1gsZ0JBQWdCLENBa0w1QjtJQUFELHVCQUFDO0NBQUEsQUFsTEQsQ0FBc0MsaUJBQWlCLEdBa0x0RDtTQWxMWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50SW5pdFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgdG9Cb29sZWFuXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBseUV4cGFuc2lvbkFuaW1hdGlvbnMgfSBmcm9tICcuL2V4cGFuc2lvbi1hbmltYXRpb25zJztcbmltcG9ydCB7IEx5RXhwYW5zaW9uUGFuZWxDb250ZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtY29udGVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgZmlsdGVyLCBmaXJzdCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG4vKiogTHlFeHBhbnNpb25QYW5lbCdzIHN0YXRlcy4gKi9cbmV4cG9ydCB0eXBlIEx5RXhwYW5zaW9uUGFuZWxTdGF0ZSA9ICdleHBhbmRlZCcgfCAnY29sbGFwc2VkJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvblBhbmVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlCdXR0b25NaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbiAgbWl4aW5CZyhcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlFeHBhbnNpb25QYW5lbEJhc2UpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZXhwYW5zaW9uLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbHlFeHBhbnNpb25QYW5lbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBseUV4cGFuc2lvbkFuaW1hdGlvbnMuY29udGVudEV4cGFuc2lvblxuICBdLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWwgZXh0ZW5kcyBMeUJ1dHRvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9hY2NvcmRpb24uY2xhc3NlcztcblxuICByZWFkb25seSBfcGFuZWxBbmltYXRpb25UaW1pbmcgPSBgJHtcbiAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmdcbiAgfW1zICR7XG4gICAgdGhpcy5fdGhlbWUudmFyaWFibGVzLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkXG4gIH1gO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gb3BlbkFsbC9jbG9zZUFsbCBldmVudHMuICovXG4gIHByaXZhdGUgX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2hhc1RvZ2dsZSA9ICEhdGhpcy5fYWNjb3JkaW9uLmhhc1RvZ2dsZTtcblxuICBfbGF6eUNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIENvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIGxhemlseS4gKi9cbiAgQENvbnRlbnRDaGlsZChMeUV4cGFuc2lvblBhbmVsQ29udGVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IF9sYXp5Q29udGVudDogTHlFeHBhbnNpb25QYW5lbENvbnRlbnQ7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgTHlFeHBhbnNpb25QYW5lbCBpcyBjbG9zZWQuICovXG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCBldmVyeSB0aW1lIHRoZSBMeUV4cGFuc2lvblBhbmVsIGlzIG9wZW5lZC4gKi9cbiAgQE91dHB1dCgpIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBBbiBldmVudCBlbWl0dGVkIGFmdGVyIHRoZSBib2R5J3MgY29sbGFwc2UgYW5pbWF0aW9uIGhhcHBlbnMuICovXG4gIEBPdXRwdXQoKSBhZnRlckNvbGxhcHNlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEFuIGV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGJvZHkncyBleHBhbnNpb24gYW5pbWF0aW9uIGhhcHBlbnMuICovXG4gIEBPdXRwdXQoKSBhZnRlckV4cGFuZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIEx5RXhwYW5zaW9uUGFuZWwgaXMgZGVzdHJveWVkLiAqL1xuICBAT3V0cHV0KCkgZGVzdHJveWVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIFN0cmVhbSBvZiBib2R5IGFuaW1hdGlvbiBkb25lIGV2ZW50cy4gKi9cbiAgX2JvZHlBbmltYXRpb25Eb25lID0gbmV3IFN1YmplY3Q8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuXG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBleHBhbmRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZXhwYW5kZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcblxuICAgICAgLy8gdW5zZWxlY3Qgb3RoZXIgcGFuZWxzXG4gICAgICBpZiAobmV3VmFsICYmICF0aGlzLl9hY2NvcmRpb24ubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5fYWNjb3JkaW9uLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLm5leHQoZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXhwYW5kZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzLmV4cGFuZGVkKTtcbiAgICAgICAgdGhpcy5vcGVuZWQuZW1pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWNjb3JkaW9uLmNsYXNzZXMuZXhwYW5kZWQpO1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGV4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNUb2dnbGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzVG9nZ2xlID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzVG9nZ2xlID09IG51bGwgPyB0aGlzLl9hY2NvcmRpb24uaGFzVG9nZ2xlIDogdGhpcy5faGFzVG9nZ2xlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KEx5QWNjb3JkaW9uKSBwcml2YXRlIF9hY2NvcmRpb246IEx5QWNjb3JkaW9uXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSk7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5wYW5lbCk7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsU3Vic2NyaXB0aW9uID0gdGhpcy5fc3Vic2NyaWJlVG9PcGVuQ2xvc2VBbGxBY3Rpb25zKCk7XG5cbiAgICB0aGlzLl9ib2R5QW5pbWF0aW9uRG9uZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geC5mcm9tU3RhdGUgPT09IHkuZnJvbVN0YXRlICYmIHgudG9TdGF0ZSA9PT0geS50b1N0YXRlO1xuICAgIH0pKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnZXhwYW5kZWQnKSB7XG4gICAgICAgICAgdGhpcy5hZnRlckV4cGFuZC5lbWl0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICAgICAgICB0aGlzLmFmdGVyQ29sbGFwc2UuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgbGV0IHJlcXVpcmVVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmJnID09IG51bGwpIHtcbiAgICAgIHRoaXMuYmcgPSAncGFwZXInO1xuICAgICAgcmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMuY29sb3IgPSAndGV4dCc7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxldmF0aW9uID09IG51bGwpIHtcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gMjtcbiAgICAgIHJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXF1aXJlVXBkYXRlKSB7XG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9sYXp5Q29udGVudCkge1xuICAgICAgdGhpcy5vcGVuZWQucGlwZShcbiAgICAgICAgc3RhcnRXaXRoPHZvaWQ+KG51bGwhKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5leHBhbmRlZCAmJiAhdGhpcy5fbGF6eUNvbnRlbnRSZWYpLFxuICAgICAgICBmaXJzdCgpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9sYXp5Q29udGVudFJlZiA9IHRoaXMuX2xhenlDb250ZW50Ll90ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb3BlbkNsb3NlQWxsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBzdHJpbmcuICovXG4gIF9nZXRFeHBhbmRlZFN0YXRlKCk6IEx5RXhwYW5zaW9uUGFuZWxTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCc7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVUb09wZW5DbG9zZUFsbEFjdGlvbnMoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3JkaW9uLl9vcGVuQ2xvc2VBbGxBY3Rpb25zLnN1YnNjcmliZShleHBhbmRlZCA9PiB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XG4gICAgfSk7XG4gIH1cblxufVxuIl19