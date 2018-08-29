/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject, RendererFactory2, isDevMode, ViewEncapsulation } from '@angular/core';
import { LY_THEME_CONFIG, LyThemeConfig } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { transformMediaQuery } from '../media/invert-media-query';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
/** @type {?} */
var classId = 0;
var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._styleCoreMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME_CONFIG undefined');
        }
        this.firstElement = _document.body.firstChild;
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            /** @type {?} */
            var nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (var index = 0; index < nodes.length; index++) {
                    /** @type {?} */
                    var element = nodes.item(index);
                    (/** @type {?} */ (_document.body)).removeChild(element);
                }
            }
        }
        // this.mediaStyleContainer = this.renderer.createElement('ly-media-style-container');
        // this.primaryStyleContainer = this.renderer.createElement('ly-primary-style-container');
        // this.secondaryStyleContainer = this.renderer.createElement('ly-secondary-style-container');
        // this.renderer.insertBefore(_document.body, this.mediaStyleContainer, _document.body.firstChild);
        // this.renderer.insertBefore(_document.body, this.primaryStyleContainer, this.mediaStyleContainer);
        // this.renderer.insertBefore(_document.body, this.secondaryStyleContainer, this.primaryStyleContainer);
        if (themeConfig) {
            themeConfig.themes.forEach(function (item) {
                _this.add(new item);
            });
        }
    }
    /**
     * add new theme
     * @param theme: ThemeConfig
     */
    /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    CoreTheme.prototype.add = /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CoreTheme.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._themeMap.get(name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CoreTheme.prototype.getStyleMap = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._styleMap.get(name);
    };
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    CoreTheme.prototype.setUpStyle = /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.primaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    CoreTheme.prototype.setUpStyleSecondary = /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.secondaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * @template T
     * @param {?} themeConfig
     * @param {?} key
     * @param {?} style
     * @param {?} mapStyles
     * @param {?} _for
     * @param {?} _in
     * @param {?=} _media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    CoreTheme.prototype._ĸreateStyle = /**
     * @template T
     * @param {?} themeConfig
     * @param {?} key
     * @param {?} style
     * @param {?} mapStyles
     * @param {?} _for
     * @param {?} _in
     * @param {?=} _media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (themeConfig, key, style, mapStyles, _for, _in, _media, invertMediaQuery) {
        if (mapStyles.has(key)) {
            return mapStyles.get(key).id;
        }
        else {
            /** @type {?} */
            var id = "k" + (classId++).toString(36);
            /** @type {?} */
            var styleElement = this.renderer.createElement('style');
            /** @type {?} */
            var media = transformMediaQuery(_media, invertMediaQuery);
            /** @type {?} */
            var styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            /** @type {?} */
            var saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', _for + "\u00B7\u00B7\u00B7" + id + "\u00B7\u00B7\u00B7" + key);
            }
            /** @type {?} */
            var dataStyle = {
                id: id,
                style: style,
                styleElement: styleElement,
                media: media
            };
            mapStyles.set(key, dataStyle);
            return id;
        }
    };
    /** #style */
    /**
     * #style
     * @template T
     * @param {?} themeConfig
     * @param {?} styles
     * @param {?} id
     * @param {?=} media
     * @return {?}
     */
    CoreTheme.prototype._createStyleContent = /**
     * #style
     * @template T
     * @param {?} themeConfig
     * @param {?} styles
     * @param {?} id
     * @param {?=} media
     * @return {?}
     */
    function (themeConfig, styles, id, media) {
        /** @type {?} */
        var typf = typeof styles;
        if (typf === 'string') {
            return toMedia("." + id + "{" + styles + "}", media);
        }
        else if (typf === 'function') {
            return toMedia("." + id + "{" + ((/** @type {?} */ (styles)))(themeConfig) + "}", media);
        }
        /** @type {?} */
        var content = '';
        for (var key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                /** @type {?} */
                var val = styles[key$];
                /** @type {?} */
                var text = typeof val === 'function' ? val(themeConfig) : val;
                content += "." + id + key$ + "{" + text + "}";
            }
        }
        return toMedia(content, media);
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    CoreTheme.prototype.updateClassName = /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    function (element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    };
    CoreTheme.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    CoreTheme.ctorParameters = function () { return [
        { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(i1.LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    return CoreTheme;
}());
export { CoreTheme };
if (false) {
    /** @type {?} */
    CoreTheme.prototype.renderer;
    /** @type {?} */
    CoreTheme.prototype.mediaStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.primaryStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.secondaryStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.firstElement;
    /** @type {?} */
    CoreTheme.prototype._themeMap;
    /** @type {?} */
    CoreTheme.prototype._styleMap;
    /** @type {?} */
    CoreTheme.prototype._styleCoreMap;
    /** @type {?} */
    CoreTheme.prototype.rendererFactory;
}
/**
 * Converter to media query if `media` is present
 * @param {?} text style content
 * @param {?=} media media query
 * @return {?}
 */
function toMedia(text, media) {
    if (typeof media === 'string') {
        return "@media " + media + "{" + text + "}";
    }
    else if (Array.isArray(media)) {
        /** @type {?} */
        var result_1 = '';
        media.forEach(function (_) { return result_1 += "@media " + _ + "{" + text + "}"; });
        return result_1;
    }
    return text;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQWUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFcEYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQWNkLG1CQUN1QyxXQUEwQixFQUN2RCxpQkFDVSxTQUFjO1FBSGxDLGlCQW1DQztRQWpDUyxvQkFBZSxHQUFmLGVBQWU7eUJBTEwsSUFBSSxHQUFHLEVBQXVCO3lCQUM5QixJQUFJLEdBQUcsRUFBa0M7NkJBQ3JDLElBQUksR0FBRyxFQUFxQjtRQU1sRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDeEQsRUFBRSxFQUFFLElBQUk7WUFDUixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxD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UUFDN0IsT0FBTyxZQUFVLEtBQUssU0FBSSxJQUFJLE1BQUcsQ0FBQztLQUNuQztTQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7UUFDL0IsSUFBSSxRQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFNLElBQUksWUFBVSxDQUFDLFNBQUksSUFBSSxNQUFHLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUNyRCxPQUFPLFFBQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgaXNEZXZNb2RlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX0NPTkZJRywgTHlUaGVtZUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0eWxlQ29udGVudCwgRGF0YVN0eWxlLCBTdHlsZSwgTXVsdGlwbGVTdHlsZXMgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgSW52ZXJ0TWVkaWFRdWVyeSwgdHJhbnNmb3JtTWVkaWFRdWVyeSB9IGZyb20gJy4uL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeSc7XG5cbmxldCBjbGFzc0lkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVDb25maWc+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIHByaXZhdGUgX3N0eWxlQ29yZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfQ09ORklHKSB0aGVtZUNvbmZpZzogTHlUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRV9DT05GSUcgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICAvLyB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAvLyB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgLy8gdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgLy8gdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIC8vIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgaWYgKHRoZW1lQ29uZmlnKSB7XG4gICAgICB0aGVtZUNvbmZpZy50aGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5hZGQobmV3IGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZUNvbmZpZ1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgc2V0VXBTdHlsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/EuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/EuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/EuHJlYXRlU3R5bGU8VD4odGhlbWVDb25maWc6IGFueSwga2V5LCBzdHlsZTogU3R5bGU8VD4sIG1hcFN0eWxlczogTWFwPHN0cmluZywgRGF0YVN0eWxlPiwgX2Zvcjogc3RyaW5nLCBfaW46IGFueSwgX21lZGlhPzogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeSkge1xuICAgIGlmIChtYXBTdHlsZXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBtYXBTdHlsZXMuZ2V0KGtleSkuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkID0gYGskeyhjbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgY29uc3QgbWVkaWEgPSB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KF9tZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gICAgICBjb25zdCBzdHlsZUNvbnRlbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5fY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnLCBzdHlsZSwgaWQsIG1lZGlhKSk7XG4gICAgICBjb25zdCBzYXZlSW4gPSBtZWRpYSA/IHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA6IF9pbjtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZUNvbnRlbnQpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzYXZlSW4sIHN0eWxlRWxlbWVudCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3R5bGVFbGVtZW50LCAnc3R5bGVfZGF0YScsIGAke19mb3J9wrfCt8K3JHtpZH3Ct8K3wrcke2tleX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFTdHlsZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBzdHlsZUVsZW1lbnQsXG4gICAgICAgIG1lZGlhXG4gICAgICB9O1xuICAgICAgbWFwU3R5bGVzLnNldChrZXksIGRhdGFTdHlsZSk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqICNzdHlsZSAqL1xuICBfY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnOiBULCBzdHlsZXM6IFN0eWxlPFQ+LCBpZDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgdHlwZiA9IHR5cGVvZiBzdHlsZXM7XG4gICAgaWYgKHR5cGYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7c3R5bGVzfX1gLCBtZWRpYSk7XG4gICAgfSBlbHNlIGlmICh0eXBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7KHN0eWxlcyBhcyBTdHlsZUNvbnRlbnQ8VD4pKHRoZW1lQ29uZmlnKX19YCwgbWVkaWEpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIGZvciAoY29uc3Qga2V5JCBpbiBzdHlsZXMgYXMgTXVsdGlwbGVTdHlsZXM8VD4pIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5JCkpIHtcbiAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleSRdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCh0aGVtZUNvbmZpZykgOiB2YWw7XG4gICAgICAgIGNvbnRlbnQgKz0gYC4ke2lkfSR7a2V5JH17JHt0ZXh0fX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9NZWRpYShjb250ZW50LCBtZWRpYSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ29udmVydGVyIHRvIG1lZGlhIHF1ZXJ5IGlmIGBtZWRpYWAgaXMgcHJlc2VudFxuICogQHBhcmFtIHRleHQgc3R5bGUgY29udGVudFxuICogQHBhcmFtIG1lZGlhIG1lZGlhIHF1ZXJ5XG4gKi9cbmZ1bmN0aW9uIHRvTWVkaWEodGV4dDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGlmICh0eXBlb2YgbWVkaWEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHt0ZXh0fX1gO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVkaWEpKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIG1lZGlhLmZvckVhY2goXyA9PiByZXN1bHQgKz0gYEBtZWRpYSAke199eyR7dGV4dH19YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cbiJdfQ==