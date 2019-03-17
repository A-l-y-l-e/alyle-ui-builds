/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Inject, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinElevation, mixinShadowColor, mixinStyleUpdater, toBoolean } from '@alyle/ui';
import { LyAccordion } from './accordion';
import { lyExpansionAnimations } from './expansion-animations';
import { LyExpansionPanelContent } from './expansion-panel-content';
import { Subscription, Subject } from 'rxjs';
import { startWith, filter, first, distinctUntilChanged } from 'rxjs/operators';
/**
 * \@docs-private
 */
export class LyExpansionPanelBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
if (false) {
    /** @type {?} */
    LyExpansionPanelBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyButtonMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinElevation(mixinShadowColor(LyExpansionPanelBase)))));
export class LyExpansionPanel extends LyButtonMixinBase {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _cd
     * @param {?} _theme
     * @param {?} _accordion
     */
    constructor(_el, _renderer, _cd, _theme, _accordion) {
        super(_theme);
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._accordion = _accordion;
        /**
         * \@docs-private
         */
        this.classes = this._accordion.classes;
        this._panelAnimationTiming = `${this._theme.variables.animations.durations.entering}ms ${this._theme.variables.animations.curves.standard}`;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = Subscription.EMPTY;
        this._hasToggle = !!this._accordion.hasToggle;
        /**
         * Event emitted every time the LyExpansionPanel is closed.
         */
        this.closed = new EventEmitter();
        /**
         * Event emitted every time the LyExpansionPanel is opened.
         */
        this.opened = new EventEmitter();
        /**
         * An event emitted after the body's collapse animation happens.
         */
        this.afterCollapse = new EventEmitter();
        /**
         * An event emitted after the body's expansion animation happens.
         */
        this.afterExpand = new EventEmitter();
        /**
         * Event emitted when the LyExpansionPanel is destroyed.
         */
        this.destroyed = new EventEmitter();
        /**
         * Stream of body animation done events.
         */
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
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set expanded(val) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasToggle(val) {
        this._hasToggle = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get hasToggle() {
        return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this._lazyContent) {
            this.opened.pipe(startWith((/** @type {?} */ (null))), filter(() => !!this.expanded && !this._lazyContentRef), first()).subscribe(() => this._lazyContentRef = this._lazyContent._template);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._openCloseAllSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    close() {
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    open() {
        this.expanded = true;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expanded = !this.expanded;
    }
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeToOpenCloseAllActions() {
        return this._accordion._openCloseAllActions.subscribe(expanded => {
            this.expanded = expanded;
        });
    }
}
LyExpansionPanel.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
LyExpansionPanel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyTheme2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanel.propDecorators = {
    _lazyContent: [{ type: ContentChild, args: [LyExpansionPanelContent,] }],
    closed: [{ type: Output }],
    opened: [{ type: Output }],
    afterCollapse: [{ type: Output }],
    afterExpand: [{ type: Output }],
    destroyed: [{ type: Output }],
    disabled: [{ type: Input }],
    expanded: [{ type: Input }],
    hasToggle: [{ type: Input }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyExpansionPanel.prototype.classes;
    /** @type {?} */
    LyExpansionPanel.prototype._panelAnimationTiming;
    /**
     * Subscription to openAll/closeAll events.
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._openCloseAllSubscription;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._expanded;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._hasToggle;
    /** @type {?} */
    LyExpansionPanel.prototype._lazyContentRef;
    /**
     * Content that will be rendered lazily.
     * @type {?}
     */
    LyExpansionPanel.prototype._lazyContent;
    /**
     * Event emitted every time the LyExpansionPanel is closed.
     * @type {?}
     */
    LyExpansionPanel.prototype.closed;
    /**
     * Event emitted every time the LyExpansionPanel is opened.
     * @type {?}
     */
    LyExpansionPanel.prototype.opened;
    /**
     * An event emitted after the body's collapse animation happens.
     * @type {?}
     */
    LyExpansionPanel.prototype.afterCollapse;
    /**
     * An event emitted after the body's expansion animation happens.
     * @type {?}
     */
    LyExpansionPanel.prototype.afterExpand;
    /**
     * Event emitted when the LyExpansionPanel is destroyed.
     * @type {?}
     */
    LyExpansionPanel.prototype.destroyed;
    /**
     * Stream of body animation done events.
     * @type {?}
     */
    LyExpansionPanel.prototype._bodyAnimationDone;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    LyExpansionPanel.prototype._accordion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBS1QsTUFBTSxFQUNOLFlBQVksRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsU0FBUyxFQUNSLE1BQU0sV0FBVyxDQUFDO0FBRXJCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPaEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDckIsQ0FBQztDQUNOOzs7SUFGRyxzQ0FBdUI7Ozs7OztBQUszQixNQUFNLE9BQU8saUJBQWlCLEdBQUcsaUJBQWlCLENBQ2hELE9BQU8sQ0FDTCxVQUFVLENBQ1IsY0FBYyxDQUNaLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFpQmxELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxpQkFBaUI7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WSxTQUFDLHVCQUF1QjtxQkFHcEMsTUFBTTtxQkFHTixNQUFNOzRCQUdOLE1BQU07MEJBR04sTUFBTTt3QkFHTixNQUFNO3VCQUtOLEtBQUs7dUJBaUJMLEtBQUs7d0JBeUJMLEtBQUs7Ozs7Ozs7SUFoRk4sbUNBQTJDOztJQUUzQyxpREFJRzs7Ozs7O0lBR0gscURBQXVEOzs7OztJQUV2RCxxQ0FBMkI7Ozs7O0lBQzNCLHFDQUEyQjs7Ozs7SUFDM0Isc0NBQWlEOztJQUVqRCwyQ0FBa0M7Ozs7O0lBR2xDLHdDQUFzRjs7Ozs7SUFHdEYsa0NBQWdFOzs7OztJQUdoRSxrQ0FBZ0U7Ozs7O0lBR2hFLHlDQUF1RTs7Ozs7SUFHdkUsdUNBQXFFOzs7OztJQUdyRSxxQ0FBbUU7Ozs7O0lBR25FLDhDQUFtRDs7Ozs7SUFxRGpELCtCQUF1Qjs7Ozs7SUFDdkIscUNBQTRCOzs7OztJQUM1QiwrQkFBOEI7Ozs7O0lBRTlCLHNDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlckNvbnRlbnRJbml0XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGx5RXhwYW5zaW9uQW5pbWF0aW9ucyB9IGZyb20gJy4vZXhwYW5zaW9uLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbENvbnRlbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1jb250ZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBmaWx0ZXIsIGZpcnN0LCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKiBMeUV4cGFuc2lvblBhbmVsJ3Mgc3RhdGVzLiAqL1xuZXhwb3J0IHR5cGUgTHlFeHBhbnNpb25QYW5lbFN0YXRlID0gJ2V4cGFuZGVkJyB8ICdjb2xsYXBzZWQnO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWxCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUJ1dHRvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxuICBtaXhpbkJnKFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUV4cGFuc2lvblBhbmVsQmFzZSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1leHBhbnNpb24tcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdseUV4cGFuc2lvblBhbmVsJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIGx5RXhwYW5zaW9uQW5pbWF0aW9ucy5jb250ZW50RXhwYW5zaW9uXG4gIF0sXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbCBleHRlbmRzIEx5QnV0dG9uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzO1xuXG4gIHJlYWRvbmx5IF9wYW5lbEFuaW1hdGlvblRpbWluZyA9IGAke1xuICAgIHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ1xuICB9bXMgJHtcbiAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmRcbiAgfWA7XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0byBvcGVuQWxsL2Nsb3NlQWxsIGV2ZW50cy4gKi9cbiAgcHJpdmF0ZSBfb3BlbkNsb3NlQWxsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9leHBhbmRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzVG9nZ2xlID0gISF0aGlzLl9hY2NvcmRpb24uaGFzVG9nZ2xlO1xuXG4gIF9sYXp5Q29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogQ29udGVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgbGF6aWx5LiAqL1xuICBAQ29udGVudENoaWxkKEx5RXhwYW5zaW9uUGFuZWxDb250ZW50KSByZWFkb25seSBfbGF6eUNvbnRlbnQ6IEx5RXhwYW5zaW9uUGFuZWxDb250ZW50O1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIGV2ZXJ5IHRpbWUgdGhlIEx5RXhwYW5zaW9uUGFuZWwgaXMgY2xvc2VkLiAqL1xuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgTHlFeHBhbnNpb25QYW5lbCBpcyBvcGVuZWQuICovXG4gIEBPdXRwdXQoKSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogQW4gZXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYm9keSdzIGNvbGxhcHNlIGFuaW1hdGlvbiBoYXBwZW5zLiAqL1xuICBAT3V0cHV0KCkgYWZ0ZXJDb2xsYXBzZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBBbiBldmVudCBlbWl0dGVkIGFmdGVyIHRoZSBib2R5J3MgZXhwYW5zaW9uIGFuaW1hdGlvbiBoYXBwZW5zLiAqL1xuICBAT3V0cHV0KCkgYWZ0ZXJFeHBhbmQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBMeUV4cGFuc2lvblBhbmVsIGlzIGRlc3Ryb3llZC4gKi9cbiAgQE91dHB1dCgpIGRlc3Ryb3llZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKiBTdHJlYW0gb2YgYm9keSBhbmltYXRpb24gZG9uZSBldmVudHMuICovXG4gIF9ib2R5QW5pbWF0aW9uRG9uZSA9IG5ldyBTdWJqZWN0PEFuaW1hdGlvbkV2ZW50PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZXhwYW5kZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmV4cGFuZGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG5cbiAgICAgIC8vIHVuc2VsZWN0IG90aGVyIHBhbmVsc1xuICAgICAgaWYgKG5ld1ZhbCAmJiAhdGhpcy5fYWNjb3JkaW9uLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuX2FjY29yZGlvbi5fb3BlbkNsb3NlQWxsQWN0aW9ucy5uZXh0KGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V4cGFuZGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5leHBhbmRlZCk7XG4gICAgICAgIHRoaXMub3BlbmVkLmVtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzLmV4cGFuZGVkKTtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCBleHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGFzVG9nZ2xlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc1RvZ2dsZSA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RvZ2dsZSA9PSBudWxsID8gdGhpcy5fYWNjb3JkaW9uLmhhc1RvZ2dsZSA6IHRoaXMuX2hhc1RvZ2dsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgcHJpdmF0ZSBfYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICBzdXBlcihfdGhlbWUpO1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWNjb3JkaW9uLmNsYXNzZXMucGFuZWwpO1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbiA9IHRoaXMuX3N1YnNjcmliZVRvT3BlbkNsb3NlQWxsQWN0aW9ucygpO1xuXG4gICAgdGhpcy5fYm9keUFuaW1hdGlvbkRvbmUucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHguZnJvbVN0YXRlID09PSB5LmZyb21TdGF0ZSAmJiB4LnRvU3RhdGUgPT09IHkudG9TdGF0ZTtcbiAgICB9KSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5mcm9tU3RhdGUgIT09ICd2b2lkJykge1xuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICAgIHRoaXMuYWZ0ZXJFeHBhbmQuZW1pdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgICAgICAgdGhpcy5hZnRlckNvbGxhcHNlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGxldCByZXF1aXJlVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5iZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmJnID0gJ3BhcGVyJztcbiAgICAgIHJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJ3RleHQnO1xuICAgICAgcmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZXZhdGlvbiA9PSBudWxsKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IDI7XG4gICAgICByZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZVVwZGF0ZSkge1xuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fbGF6eUNvbnRlbnQpIHtcbiAgICAgIHRoaXMub3BlbmVkLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aDx2b2lkPihudWxsISksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuZXhwYW5kZWQgJiYgIXRoaXMuX2xhenlDb250ZW50UmVmKSxcbiAgICAgICAgZmlyc3QoKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbGF6eUNvbnRlbnRSZWYgPSB0aGlzLl9sYXp5Q29udGVudC5fdGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29wZW5DbG9zZUFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgZXhwYW5kZWQgc3RhdGUgc3RyaW5nLiAqL1xuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBMeUV4cGFuc2lvblBhbmVsU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9PcGVuQ2xvc2VBbGxBY3Rpb25zKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY29yZGlvbi5fb3BlbkNsb3NlQWxsQWN0aW9ucy5zdWJzY3JpYmUoZXhwYW5kZWQgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==