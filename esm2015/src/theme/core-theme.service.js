/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Optional, Inject, RendererFactory2, isDevMode } from '@angular/core';
import { LY_THEME_CONFIG, LyThemeConfig } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { transformMediaQuery } from '../media/invert-media-query';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
let /** @type {?} */ classId = 0;
export class CoreTheme {
    /**
     * @param {?} themeConfig
     * @param {?} rendererFactory
     * @param {?} _document
     */
    constructor(themeConfig, rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._styleCoreMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME_CONFIG undefined');
        }
        this.renderer = this.rendererFactory.createRenderer(null, null);
        if (Platform.isBrowser) {
            const /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
            const /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
            const /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
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
            themeConfig.themes.forEach(item => {
                this.add(new item);
            });
        }
    }
    /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    add(theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this._themeMap.get(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getStyleMap(name) {
        return this._styleMap.get(name);
    }
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    setUpStyle(key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.primaryStyleContainer, media, invertMediaQuery);
    }
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    setUpStyleSecondary(key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.secondaryStyleContainer, media, invertMediaQuery);
    }
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
    _ĸreateStyle(themeConfig, key, style, mapStyles, _for, _in, _media, invertMediaQuery) {
        if (mapStyles.has(key)) {
            return mapStyles.get(key).id;
        }
        else {
            const /** @type {?} */ id = `k${(classId++).toString(36)}`;
            const /** @type {?} */ styleElement = this.renderer.createElement('style');
            const /** @type {?} */ media = transformMediaQuery(_media, invertMediaQuery);
            const /** @type {?} */ styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            const /** @type {?} */ saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', `${_for}···${id}···${key}`);
            }
            const /** @type {?} */ dataStyle = {
                id,
                style,
                styleElement,
                media
            };
            mapStyles.set(key, dataStyle);
            return id;
        }
    }
    /**
     * #style
     * @template T
     * @param {?} themeConfig
     * @param {?} styles
     * @param {?} id
     * @param {?=} media
     * @return {?}
     */
    _createStyleContent(themeConfig, styles, id, media) {
        const /** @type {?} */ typf = typeof styles;
        if (typf === 'string') {
            return toMedia(`.${id}{${styles}}`, media);
        }
        else if (typf === 'function') {
            return toMedia(`.${id}{${((/** @type {?} */ (styles)))(themeConfig)}}`, media);
        }
        let /** @type {?} */ content = '';
        for (const /** @type {?} */ key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                const /** @type {?} */ val = styles[key$];
                const /** @type {?} */ text = typeof val === 'function' ? val(themeConfig) : val;
                content += `.${id}${key$}{${text}}`;
            }
        }
        return toMedia(content, media);
    }
    /**
     * @return {?}
     */
    setCoreStyle() {
        const /** @type {?} */ classname = this.setUpStyle('rootbody', {
            '': () => (`margin:0;`),
            ', *, *:after, *:before': () => (`-webkit-box-sizing: border-box;` +
                `-moz-box-sizing: border-box;` +
                `box-sizing: border-box;`)
        });
        this.renderer.addClass(this._document.body, classname);
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    updateClassName(element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    }
}
CoreTheme.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CoreTheme.ctorParameters = () => [
    { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] },] },
    { type: RendererFactory2, },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
/** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(i1.LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
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
        return `@media ${media}{${text}}`;
    }
    else if (Array.isArray(media)) {
        let /** @type {?} */ result = '';
        media.forEach(_ => result += `@media ${_}{${text}}`);
        return result;
    }
    return text;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQWlELGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFcEYscUJBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUtoQixNQUFNOzs7Ozs7SUFRSixZQUN1QyxhQUM3QixpQkFDa0I7UUFEbEIsb0JBQWUsR0FBZixlQUFlO1FBQ0csY0FBUyxHQUFULFNBQVM7eUJBTmpCLElBQUksR0FBRyxFQUF1Qjt5QkFDOUIsSUFBSSxHQUFHLEVBQWtDOzZCQUNyQyxJQUFJLEdBQUcsRUFBcUI7UUFNbEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsdUJBQU0sbUJBQW1CLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNyRix1QkFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFD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LEdBQUcsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRIRU1FX0NPTkZJRywgVGhlbWVDb25maWcsIFRIRU1FX0NPTkZJR19FWFRSQSwgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3R5bGVDb250ZW50LCBTdHlsZURhdGEsIERhdGFTdHlsZSwgU3R5bGUsIE11bHRpcGxlU3R5bGVzIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnksIHRyYW5zZm9ybU1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5sZXQgY2xhc3NJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBwcml2YXRlIF9zdHlsZUNvcmVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0NPTkZJRykgdGhlbWVDb25maWc6IEx5VGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRV9DT05GSUcgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBtZWRpYVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktbWVkaWEtc3R5bGUtY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBwcmltYXJ5U3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1wcmltYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3Qgc2Vjb25kYXJ5U3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgICBpZiAocHJpbWFyeVN0eWxlQ29udGFpbmVyKSB7XG4gICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKG1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChwcmltYXJ5U3R5bGVDb250YWluZXIpO1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktbWVkaWEtc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LXByaW1hcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIsIF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMuc2V0Q29yZVN0eWxlKCk7XG4gICAgaWYgKHRoZW1lQ29uZmlnKSB7XG4gICAgICB0aGVtZUNvbmZpZy50aGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5hZGQobmV3IGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZUNvbmZpZ1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgc2V0VXBTdHlsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/EuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/EuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/EuHJlYXRlU3R5bGU8VD4odGhlbWVDb25maWc6IGFueSwga2V5LCBzdHlsZTogU3R5bGU8VD4sIG1hcFN0eWxlczogTWFwPHN0cmluZywgRGF0YVN0eWxlPiwgX2Zvcjogc3RyaW5nLCBfaW46IGFueSwgX21lZGlhPzogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeSkge1xuICAgIGlmIChtYXBTdHlsZXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBtYXBTdHlsZXMuZ2V0KGtleSkuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkID0gYGskeyhjbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgY29uc3QgbWVkaWEgPSB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KF9tZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gICAgICBjb25zdCBzdHlsZUNvbnRlbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5fY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnLCBzdHlsZSwgaWQsIG1lZGlhKSk7XG4gICAgICBjb25zdCBzYXZlSW4gPSBtZWRpYSA/IHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA6IF9pbjtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZUNvbnRlbnQpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzYXZlSW4sIHN0eWxlRWxlbWVudCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3R5bGVFbGVtZW50LCAnc3R5bGVfZGF0YScsIGAke19mb3J9wrfCt8K3JHtpZH3Ct8K3wrcke2tleX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFTdHlsZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBzdHlsZUVsZW1lbnQsXG4gICAgICAgIG1lZGlhXG4gICAgICB9O1xuICAgICAgbWFwU3R5bGVzLnNldChrZXksIGRhdGFTdHlsZSk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqICNzdHlsZSAqL1xuICBfY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnOiBULCBzdHlsZXM6IFN0eWxlPFQ+LCBpZDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgdHlwZiA9IHR5cGVvZiBzdHlsZXM7XG4gICAgaWYgKHR5cGYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7c3R5bGVzfX1gLCBtZWRpYSk7XG4gICAgfSBlbHNlIGlmICh0eXBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7KHN0eWxlcyBhcyBTdHlsZUNvbnRlbnQ8VD4pKHRoZW1lQ29uZmlnKX19YCwgbWVkaWEpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIGZvciAoY29uc3Qga2V5JCBpbiBzdHlsZXMgYXMgTXVsdGlwbGVTdHlsZXM8VD4pIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5JCkpIHtcbiAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleSRdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCh0aGVtZUNvbmZpZykgOiB2YWw7XG4gICAgICAgIGNvbnRlbnQgKz0gYC4ke2lkfSR7a2V5JH17JHt0ZXh0fX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9NZWRpYShjb250ZW50LCBtZWRpYSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvcmVTdHlsZSgpIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLnNldFVwU3R5bGUoJ3Jvb3Rib2R5Jywge1xuICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgYG1hcmdpbjowO2BcbiAgICAgICksXG4gICAgICAnLCAqLCAqOmFmdGVyLCAqOmJlZm9yZSc6ICgpID0+IChcbiAgICAgICAgYC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgYC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKVxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZG9jdW1lbnQuYm9keSwgY2xhc3NuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0ZXIgdG8gbWVkaWEgcXVlcnkgaWYgYG1lZGlhYCBpcyBwcmVzZW50XG4gKiBAcGFyYW0gdGV4dCBzdHlsZSBjb250ZW50XG4gKiBAcGFyYW0gbWVkaWEgbWVkaWEgcXVlcnlcbiAqL1xuZnVuY3Rpb24gdG9NZWRpYSh0ZXh0OiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgaWYgKHR5cGVvZiBtZWRpYSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske3RleHR9fWA7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZWRpYSkpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbWVkaWEuZm9yRWFjaChfID0+IHJlc3VsdCArPSBgQG1lZGlhICR7X317JHt0ZXh0fX1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB0ZXh0O1xufVxuIl19