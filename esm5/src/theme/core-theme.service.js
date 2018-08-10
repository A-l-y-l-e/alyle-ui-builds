/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Optional, Inject, RendererFactory2, isDevMode, ViewEncapsulation } from '@angular/core';
import { LY_THEME_CONFIG, LyThemeConfig } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { transformMediaQuery } from '../media/invert-media-query';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
var /** @type {?} */ classId = 0;
var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._styleCoreMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME_CONFIG undefined');
        }
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.Native,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            var /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
            var /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
            var /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
            if (primaryStyleContainer) {
                (/** @type {?} */ (_document.body)).removeChild(mediaStyleContainer);
                (/** @type {?} */ (_document.body)).removeChild(primaryStyleContainer);
                (/** @type {?} */ (_document.body)).removeChild(secondaryStyleContainer);
            }
        }
        this.mediaStyleContainer = this.renderer.createElement('ly-media-style-container');
        this.primaryStyleContainer = this.renderer.createElement('ly-primary-style-container');
        this.secondaryStyleContainer = this.renderer.createElement('ly-secondary-style-container');
        this.renderer.insertBefore(_document.body, this.mediaStyleContainer, _document.body.firstChild);
        this.renderer.insertBefore(_document.body, this.primaryStyleContainer, this.mediaStyleContainer);
        this.renderer.insertBefore(_document.body, this.secondaryStyleContainer, this.primaryStyleContainer);
        this.setCoreStyle();
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
            var /** @type {?} */ id = "k" + (classId++).toString(36);
            var /** @type {?} */ styleElement = this.renderer.createElement('style');
            var /** @type {?} */ media = transformMediaQuery(_media, invertMediaQuery);
            var /** @type {?} */ styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            var /** @type {?} */ saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', _for + "\u00B7\u00B7\u00B7" + id + "\u00B7\u00B7\u00B7" + key);
            }
            var /** @type {?} */ dataStyle = {
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
        var /** @type {?} */ typf = typeof styles;
        if (typf === 'string') {
            return toMedia("." + id + "{" + styles + "}", media);
        }
        else if (typf === 'function') {
            return toMedia("." + id + "{" + ((/** @type {?} */ (styles)))(themeConfig) + "}", media);
        }
        var /** @type {?} */ content = '';
        for (var /** @type {?} */ key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                var /** @type {?} */ val = styles[key$];
                var /** @type {?} */ text = typeof val === 'function' ? val(themeConfig) : val;
                content += "." + id + key$ + "{" + text + "}";
            }
        }
        return toMedia(content, media);
    };
    /**
     * @return {?}
     */
    CoreTheme.prototype.setCoreStyle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ classname = this.setUpStyle('rootbody', {
            '': function () {
                return ("margin:0;");
            },
            ', *, *:after, *:before': function () {
                return ("-webkit-box-sizing: border-box;" +
                    "-moz-box-sizing: border-box;" +
                    "box-sizing: border-box;");
            }
        });
        this.renderer.addClass(this._document.body, classname);
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
        { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] },] },
        { type: RendererFactory2, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(i1.LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    return CoreTheme;
}());
export { CoreTheme };
function CoreTheme_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CoreTheme.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CoreTheme.ctorParameters;
    /** @type {?} */
    CoreTheme.prototype.renderer;
    /** @type {?} */
    CoreTheme.prototype.mediaStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.primaryStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.secondaryStyleContainer;
    /** @type {?} */
    CoreTheme.prototype._themeMap;
    /** @type {?} */
    CoreTheme.prototype._styleMap;
    /** @type {?} */
    CoreTheme.prototype._styleCoreMap;
    /** @type {?} */
    CoreTheme.prototype.rendererFactory;
    /** @type {?} */
    CoreTheme.prototype._document;
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
        var /** @type {?} */ result_1 = '';
        media.forEach(function (_) { return result_1 += "@media " + _ + "{" + text + "}"; });
        return result_1;
    }
    return text;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQTZCLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFcEYscUJBQUksT0FBTyxHQUFHLENBQUMsQ0FBQzs7SUFhZCxtQkFDdUMsYUFDN0IsaUJBQ2tCO1FBSDVCLGlCQW9DQztRQWxDUyxvQkFBZSxHQUFmLGVBQWU7UUFDRyxjQUFTLEdBQVQsU0FBUzt5QkFOakIsSUFBSSxHQUFHLEVBQXVCO3lCQUM5QixJQUFJLEdBQUcsRUFBa0M7NkJBQ3JDLElBQUksR0FBRyxFQUFxQjtRQU1sRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQ3hELEVBQUUsRUFBRSxJQUFJO1lBQ1IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLE1BQU07WUFDdkMsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUMsQ0FBQztRQUNILElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixxQkFB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QUF1SnRCLGlCQUFpQixJQUFZLEVBQUUsS0FBeUI7SUFDdEQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxZQUFVLEtBQUssU0FBSSxJQUFJLE1BQUcsQ0FBQztLQUNuQztTQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMvQixxQkFBSSxRQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFNLElBQUksWUFBVSxDQUFDLFNBQUksSUFBSSxNQUFHLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUNyRCxPQUFPLFFBQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgaXNEZXZNb2RlLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVEhFTUVfQ09ORklHLCBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3R5bGVDb250ZW50LCBTdHlsZURhdGEsIERhdGFTdHlsZSwgU3R5bGUsIE11bHRpcGxlU3R5bGVzIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnksIHRyYW5zZm9ybU1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5sZXQgY2xhc3NJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBwcml2YXRlIF9zdHlsZUNvcmVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0NPTkZJRykgdGhlbWVDb25maWc6IEx5VGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRV9DT05GSUcgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5hdGl2ZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG1lZGlhU3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHByaW1hcnlTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LXByaW1hcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LXNlY29uZGFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGlmIChwcmltYXJ5U3R5bGVDb250YWluZXIpIHtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQobWVkaWFTdHlsZUNvbnRhaW5lcik7XG4gICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKHByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKHNlY29uZGFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5zZXRDb3JlU3R5bGUoKTtcbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIHRoZW1lQ29uZmlnLnRoZW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZChuZXcgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lQ29uZmlnXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICBzZXRVcFN0eWxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8S4cmVhdGVTdHlsZSh1bmRlZmluZWQsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZUNvcmVNYXAsICdyb290JywgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8S4cmVhdGVTdHlsZSh1bmRlZmluZWQsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZUNvcmVNYXAsICdyb290JywgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG5cbiAgX8S4cmVhdGVTdHlsZTxUPih0aGVtZUNvbmZpZzogYW55LCBrZXksIHN0eWxlOiBTdHlsZTxUPiwgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+LCBfZm9yOiBzdHJpbmcsIF9pbjogYW55LCBfbWVkaWE/OiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKG1hcFN0eWxlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIG1hcFN0eWxlcy5nZXQoa2V5KS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWQgPSBgayR7KGNsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBjb25zdCBtZWRpYSA9IHRyYW5zZm9ybU1lZGlhUXVlcnkoX21lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgICAgIGNvbnN0IHN0eWxlQ29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWcsIHN0eWxlLCBpZCwgbWVkaWEpKTtcbiAgICAgIGNvbnN0IHNhdmVJbiA9IG1lZGlhID8gdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyIDogX2luO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlQ29udGVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNhdmVJbiwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdHlsZUVsZW1lbnQsICdzdHlsZV9kYXRhJywgYCR7X2Zvcn3Ct8K3wrcke2lkfcK3wrfCtyR7a2V5fWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YVN0eWxlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHN0eWxlRWxlbWVudCxcbiAgICAgICAgbWVkaWFcbiAgICAgIH07XG4gICAgICBtYXBTdHlsZXMuc2V0KGtleSwgZGF0YVN0eWxlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH1cblxuICAvKiogI3N0eWxlICovXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWc6IFQsIHN0eWxlczogU3R5bGU8VD4sIGlkOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCB0eXBmID0gdHlwZW9mIHN0eWxlcztcbiAgICBpZiAodHlwZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHtzdHlsZXN9fWAsIG1lZGlhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHsoc3R5bGVzIGFzIFN0eWxlQ29udGVudDxUPikodGhlbWVDb25maWcpfX1gLCBtZWRpYSk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkkIGluIHN0eWxlcyBhcyBNdWx0aXBsZVN0eWxlczxUPikge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkkKSkge1xuICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5JF07XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKHRoZW1lQ29uZmlnKSA6IHZhbDtcbiAgICAgICAgY29udGVudCArPSBgLiR7aWR9JHtrZXkkfXske3RleHR9fWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b01lZGlhKGNvbnRlbnQsIG1lZGlhKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29yZVN0eWxlKCkge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMuc2V0VXBTdHlsZSgncm9vdGJvZHknLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOjA7YFxuICAgICAgKSxcbiAgICAgICcsICosICo6YWZ0ZXIsICo6YmVmb3JlJzogKCkgPT4gKFxuICAgICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5ib2R5LCBjbGFzc25hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnRlciB0byBtZWRpYSBxdWVyeSBpZiBgbWVkaWFgIGlzIHByZXNlbnRcbiAqIEBwYXJhbSB0ZXh0IHN0eWxlIGNvbnRlbnRcbiAqIEBwYXJhbSBtZWRpYSBtZWRpYSBxdWVyeVxuICovXG5mdW5jdGlvbiB0b01lZGlhKHRleHQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAodHlwZW9mIG1lZGlhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7dGV4dH19YDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lZGlhKSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBtZWRpYS5mb3JFYWNoKF8gPT4gcmVzdWx0ICs9IGBAbWVkaWEgJHtffXske3RleHR9fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG4iXX0=