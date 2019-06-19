import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Inject, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinShadowColor, mixinStyleUpdater, toBoolean } from '@alyle/ui';
import { LyAccordion } from './accordion';
import { lyExpansionAnimations } from './expansion-animations';
import { LyExpansionPanelContent } from './expansion-panel-content';
import { Subscription, Subject } from 'rxjs';
import { startWith, filter, first, distinctUntilChanged } from 'rxjs/operators';
/** @docs-private */
export class LyExpansionPanelBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
export const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
let LyExpansionPanel = class LyExpansionPanel extends LyButtonMixinBase {
    constructor(_el, _renderer, _cd, _theme, _accordion) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._accordion = _accordion;
        /** @docs-private */
        this.classes = this._accordion.classes;
        this._panelAnimationTiming = `${this._theme.variables.animations.durations.entering}ms ${this._theme.variables.animations.curves.standard}`;
        /** Subscription to openAll/closeAll events. */
        this._openCloseAllSubscription = Subscription.EMPTY;
        this._hasToggle = !!this._accordion.hasToggle;
        /** Event emitted every time the LyExpansionPanel is closed. */
        this.closed = new EventEmitter();
        /** Event emitted every time the LyExpansionPanel is opened. */
        this.opened = new EventEmitter();
        /** An event emitted after the body's collapse animation happens. */
        this.afterCollapse = new EventEmitter();
        /** An event emitted after the body's expansion animation happens. */
        this.afterExpand = new EventEmitter();
        /** Event emitted when the LyExpansionPanel is destroyed. */
        this.destroyed = new EventEmitter();
        /** Stream of body animation done events. */
        this._bodyAnimationDone = new Subject();
        _renderer.addClass(_el.nativeElement, this._accordion.classes.panel);
        this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        });
    }
    set disabled(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.disabled) {
            this._disabled = newVal;
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this._accordion.classes.disabled);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.disabled);
            }
        }
    }
    get disabled() {
        return this._disabled;
    }
    set expanded(val) {
        const newVal = toBoolean(val);
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
    }
    get expanded() {
        return this._expanded;
    }
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    get hasToggle() {
        return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    ngOnInit() {
        let requireUpdate = false;
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
    }
    ngAfterContentInit() {
        if (this._lazyContent) {
            this.opened.pipe(startWith(null), filter(() => !!this.expanded && !this._lazyContentRef), first()).subscribe(() => this._lazyContentRef = this._lazyContent._template);
        }
    }
    ngOnDestroy() {
        this._openCloseAllSubscription.unsubscribe();
    }
    close() {
        this.expanded = false;
    }
    open() {
        this.expanded = true;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    _subscribeToOpenCloseAllActions() {
        return this._accordion._openCloseAllActions.subscribe(expanded => {
            this.expanded = expanded;
        });
    }
};
tslib_1.__decorate([
    ContentChild(LyExpansionPanelContent, { static: false }),
    tslib_1.__metadata("design:type", LyExpansionPanelContent)
], LyExpansionPanel.prototype, "_lazyContent", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "closed", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "opened", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "afterCollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "afterExpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LyExpansionPanel.prototype, "destroyed", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyExpansionPanel.prototype, "disabled", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyExpansionPanel.prototype, "expanded", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
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
    tslib_1.__param(4, Inject(LyAccordion)),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ChangeDetectorRef,
        LyTheme2,
        LyAccordion])
], LyExpansionPanel);
export { LyExpansionPanel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBS1QsTUFBTSxFQUNOLFlBQVksRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsU0FBUyxFQUNSLE1BQU0sV0FBVyxDQUFDO0FBRXJCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNaEYsb0JBQW9CO0FBQ3BCLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFDUyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQ3JCLENBQUM7Q0FDTjtBQUVELG9CQUFvQjtBQUNwQixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FDaEQsT0FBTyxDQUNMLFVBQVUsQ0FDUixjQUFjLENBQ1osZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBaUJuRCxJQUFhLGdCQUFnQixHQUE3QixNQUFh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RDtJQUFULE1BQU0sRUFBRTtzQ0FBWSxZQUFZO21EQUFrQztBQU1uRTtJQURDLEtBQUssRUFBRTs7O2dEQVlQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OztnREFvQlA7QUFNRDtJQURDLEtBQUssRUFBRTs7O2lEQUdQO0FBdEZVLGdCQUFnQjtJQWY1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDBoQkFBcUM7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixVQUFVLEVBQUU7WUFDVixxQkFBcUIsQ0FBQyxnQkFBZ0I7U0FDdkM7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osT0FBTztZQUNQLFdBQVc7WUFDWCxhQUFhO1NBQ2Q7S0FDRixDQUFDO0lBaUdHLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTs2Q0FKUCxVQUFVO1FBQ0osU0FBUztRQUNmLGlCQUFpQjtRQUN0QixRQUFRO1FBQ3lCLFdBQVc7R0FoRzNDLGdCQUFnQixDQWtMNUI7U0FsTFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyQ29udGVudEluaXRcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIHRvQm9vbGVhblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5QWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IHsgbHlFeHBhbnNpb25BbmltYXRpb25zIH0gZnJvbSAnLi9leHBhbnNpb24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBMeUV4cGFuc2lvblBhbmVsQ29udGVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIGZpbHRlciwgZmlyc3QsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuLyoqIEx5RXhwYW5zaW9uUGFuZWwncyBzdGF0ZXMuICovXG5leHBvcnQgdHlwZSBMeUV4cGFuc2lvblBhbmVsU3RhdGUgPSAnZXhwYW5kZWQnIHwgJ2NvbGxhcHNlZCc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5QnV0dG9uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG4gIG1peGluQmcoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICBtaXhpblNoYWRvd0NvbG9yKEx5RXhwYW5zaW9uUGFuZWxCYXNlKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWV4cGFuc2lvbi1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2x5RXhwYW5zaW9uUGFuZWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgbHlFeHBhbnNpb25BbmltYXRpb25zLmNvbnRlbnRFeHBhbnNpb25cbiAgXSxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvblBhbmVsIGV4dGVuZHMgTHlCdXR0b25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fYWNjb3JkaW9uLmNsYXNzZXM7XG5cbiAgcmVhZG9ubHkgX3BhbmVsQW5pbWF0aW9uVGltaW5nID0gYCR7XG4gICAgdGhpcy5fdGhlbWUudmFyaWFibGVzLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nXG4gIH1tcyAke1xuICAgIHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZFxuICB9YDtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIG9wZW5BbGwvY2xvc2VBbGwgZXZlbnRzLiAqL1xuICBwcml2YXRlIF9vcGVuQ2xvc2VBbGxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9oYXNUb2dnbGUgPSAhIXRoaXMuX2FjY29yZGlvbi5oYXNUb2dnbGU7XG5cbiAgX2xhenlDb250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKiBDb250ZW50IHRoYXQgd2lsbCBiZSByZW5kZXJlZCBsYXppbHkuICovXG4gIEBDb250ZW50Q2hpbGQoTHlFeHBhbnNpb25QYW5lbENvbnRlbnQsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSBfbGF6eUNvbnRlbnQ6IEx5RXhwYW5zaW9uUGFuZWxDb250ZW50O1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIGV2ZXJ5IHRpbWUgdGhlIEx5RXhwYW5zaW9uUGFuZWwgaXMgY2xvc2VkLiAqL1xuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgTHlFeHBhbnNpb25QYW5lbCBpcyBvcGVuZWQuICovXG4gIEBPdXRwdXQoKSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogQW4gZXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYm9keSdzIGNvbGxhcHNlIGFuaW1hdGlvbiBoYXBwZW5zLiAqL1xuICBAT3V0cHV0KCkgYWZ0ZXJDb2xsYXBzZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBBbiBldmVudCBlbWl0dGVkIGFmdGVyIHRoZSBib2R5J3MgZXhwYW5zaW9uIGFuaW1hdGlvbiBoYXBwZW5zLiAqL1xuICBAT3V0cHV0KCkgYWZ0ZXJFeHBhbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBMeUV4cGFuc2lvblBhbmVsIGlzIGRlc3Ryb3llZC4gKi9cbiAgQE91dHB1dCgpIGRlc3Ryb3llZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBTdHJlYW0gb2YgYm9keSBhbmltYXRpb24gZG9uZSBldmVudHMuICovXG4gIF9ib2R5QW5pbWF0aW9uRG9uZSA9IG5ldyBTdWJqZWN0PEFuaW1hdGlvbkV2ZW50PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZXhwYW5kZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmV4cGFuZGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG5cbiAgICAgIC8vIHVuc2VsZWN0IG90aGVyIHBhbmVsc1xuICAgICAgaWYgKG5ld1ZhbCAmJiAhdGhpcy5fYWNjb3JkaW9uLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuX2FjY29yZGlvbi5fb3BlbkNsb3NlQWxsQWN0aW9ucy5uZXh0KGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V4cGFuZGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5leHBhbmRlZCk7XG4gICAgICAgIHRoaXMub3BlbmVkLmVtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzLmV4cGFuZGVkKTtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCBleHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGFzVG9nZ2xlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc1RvZ2dsZSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RvZ2dsZSA9PSBudWxsID8gdGhpcy5fYWNjb3JkaW9uLmhhc1RvZ2dsZSA6IHRoaXMuX2hhc1RvZ2dsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgcHJpdmF0ZSBfYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWNjb3JkaW9uLmNsYXNzZXMucGFuZWwpO1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmliZVRvT3BlbkNsb3NlQWxsQWN0aW9ucygpO1xuXG4gICAgdGhpcy5fYm9keUFuaW1hdGlvbkRvbmUucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHguZnJvbVN0YXRlID09PSB5LmZyb21TdGF0ZSAmJiB4LnRvU3RhdGUgPT09IHkudG9TdGF0ZTtcbiAgICB9KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICAgIHRoaXMuYWZ0ZXJFeHBhbmQuZW1pdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgICAgICAgdGhpcy5hZnRlckNvbGxhcHNlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGxldCByZXF1aXJlVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5iZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmJnID0gJ3BhcGVyJztcbiAgICAgIHJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ3RleHQnO1xuICAgICAgcmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZXZhdGlvbiA9PSBudWxsKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fbGF6eUNvbnRlbnQpIHtcbiAgICAgIHRoaXMub3BlbmVkLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aDx2b2lkPihudWxsISksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuZXhwYW5kZWQgJiYgIXRoaXMuX2xhenlDb250ZW50UmVmKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbGF6eUNvbnRlbnRSZWYgPSB0aGlzLl9sYXp5Q29udGVudC5fdGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgc3RyaW5nLiAqL1xuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBMeUV4cGFuc2lvblBhbmVsU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9PcGVuQ2xvc2VBbGxBY3Rpb25zKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY29yZGlvbi5fb3BlbkNsb3NlQWxsQWN0aW9ucy5zdWJzY3JpYmUoZXhwYW5kZWQgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==