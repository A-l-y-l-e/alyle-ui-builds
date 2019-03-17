/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, state, style, transition, animate } from '@angular/animations';
/** @type {?} */
export const lyExpansionAnimations = {
    contentExpansion: trigger('contentExpansion', [
        state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed, void => collapsed', animate('{{panelAnimationTiming}}')),
    ])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZXhwYW5zaW9uLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLWFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE1BQU0sT0FBTyxxQkFBcUIsR0FBRztJQUNuQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7UUFDNUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDdEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQzlELFVBQVUsQ0FBQywyQ0FBMkMsRUFDcEQsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7S0FDdkMsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBseUV4cGFuc2lvbkFuaW1hdGlvbnMgPSB7XG4gIGNvbnRlbnRFeHBhbnNpb246IHRyaWdnZXIoJ2NvbnRlbnRFeHBhbnNpb24nLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCwgdm9pZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ30pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkLCB2b2lkID0+IGNvbGxhcHNlZCcsXG4gICAgICBhbmltYXRlKCd7e3BhbmVsQW5pbWF0aW9uVGltaW5nfX0nKSksXG4gIF0pXG59O1xuIl19