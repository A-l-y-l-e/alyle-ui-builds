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
let classId = 0;
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
        this.firstElement = _document.body.firstChild;
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.Native,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            /** @type {?} */
            const nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (let index = 0; index < nodes.length; index++) {
                    /** @type {?} */
                    const element = nodes.item(index);
                    (/** @type {?} */ (_document.body)).removeChild(element);
                }
            }
        }
        // if (Platform.isBrowser) {
        //   const mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
        //   const primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
        //   const secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
        //   if (primaryStyleContainer) {
        //     (_document.body as HTMLBodyElement).removeChild(mediaStyleContainer);
        //     (_document.body as HTMLBodyElement).removeChild(primaryStyleContainer);
        //     (_document.body as HTMLBodyElement).removeChild(secondaryStyleContainer);
        //   }
        // }
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
            /** @type {?} */
            const id = `k${(classId++).toString(36)}`;
            /** @type {?} */
            const styleElement = this.renderer.createElement('style');
            /** @type {?} */
            const media = transformMediaQuery(_media, invertMediaQuery);
            /** @type {?} */
            const styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            /** @type {?} */
            const saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', `${_for}···${id}···${key}`);
            }
            /** @type {?} */
            const dataStyle = {
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
        /** @type {?} */
        const typf = typeof styles;
        if (typf === 'string') {
            return toMedia(`.${id}{${styles}}`, media);
        }
        else if (typf === 'function') {
            return toMedia(`.${id}{${((/** @type {?} */ (styles)))(themeConfig)}}`, media);
        }
        /** @type {?} */
        let content = '';
        for (const key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                /** @type {?} */
                const val = styles[key$];
                /** @type {?} */
                const text = typeof val === 'function' ? val(themeConfig) : val;
                content += `.${id}${key$}{${text}}`;
            }
        }
        return toMedia(content, media);
    }
    /**
     * @return {?}
     */
    setCoreStyle() {
        /** @type {?} */
        const classname = this.setUpStyle('rootbody', {
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
    { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] }] },
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(i1.LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
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
        /** @type {?} */
        let result = '';
        media.forEach(_ => result += `@media ${_}{${text}}`);
        return result;
    }
    return text;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQWUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFcEYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBS2hCLE1BQU07Ozs7OztJQVNKLFlBQ3VDLFdBQTBCLEVBQ3ZELGlCQUNrQixTQUFjO1FBRGhDLG9CQUFlLEdBQWYsZUFBZTtRQUNHLGNBQVMsR0FBVCxTQUFTLENBQUs7eUJBTnRCLElBQUksR0FBRyxFQUF1Qjt5QkFDOUIsSUFBSSxHQUFHLEVBQWtDOzZCQUNyQyxJQUFJLEdBQUcsRUFBcUI7UUFNbEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQ3hELEVBQUUsRUFBRSxJQUFJO1lBQ1IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLE1BQU07WUFDdkMsTUFBTSxFQUFFLEVBQUU7WUFD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TyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDckQsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIGlzRGV2TW9kZSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9DT05GSUcsIEx5VGhlbWVDb25maWcgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdHlsZUNvbnRlbnQsIERhdGFTdHlsZSwgU3R5bGUsIE11bHRpcGxlU3R5bGVzIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnksIHRyYW5zZm9ybU1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5sZXQgY2xhc3NJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIGZpcnN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBwcml2YXRlIF9zdHlsZUNvcmVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0NPTkZJRykgdGhlbWVDb25maWc6IEx5VGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRV9DT05GSUcgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5OYXRpdmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KTtcbiAgICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgLy8gICBjb25zdCBtZWRpYVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktbWVkaWEtc3R5bGUtY29udGFpbmVyJyk7XG4gICAgLy8gICBjb25zdCBwcmltYXJ5U3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1wcmltYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIC8vICAgY29uc3Qgc2Vjb25kYXJ5U3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgLy8gICBpZiAocHJpbWFyeVN0eWxlQ29udGFpbmVyKSB7XG4gICAgLy8gICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKG1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIC8vICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChwcmltYXJ5U3R5bGVDb250YWluZXIpO1xuICAgIC8vICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktbWVkaWEtc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LXByaW1hcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIsIF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMuc2V0Q29yZVN0eWxlKCk7XG4gICAgaWYgKHRoZW1lQ29uZmlnKSB7XG4gICAgICB0aGVtZUNvbmZpZy50aGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5hZGQobmV3IGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZUNvbmZpZ1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgc2V0VXBTdHlsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/EuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/EuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/EuHJlYXRlU3R5bGU8VD4odGhlbWVDb25maWc6IGFueSwga2V5LCBzdHlsZTogU3R5bGU8VD4sIG1hcFN0eWxlczogTWFwPHN0cmluZywgRGF0YVN0eWxlPiwgX2Zvcjogc3RyaW5nLCBfaW46IGFueSwgX21lZGlhPzogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeSkge1xuICAgIGlmIChtYXBTdHlsZXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBtYXBTdHlsZXMuZ2V0KGtleSkuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkID0gYGskeyhjbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgY29uc3QgbWVkaWEgPSB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KF9tZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gICAgICBjb25zdCBzdHlsZUNvbnRlbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5fY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnLCBzdHlsZSwgaWQsIG1lZGlhKSk7XG4gICAgICBjb25zdCBzYXZlSW4gPSBtZWRpYSA/IHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA6IF9pbjtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZUNvbnRlbnQpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzYXZlSW4sIHN0eWxlRWxlbWVudCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3R5bGVFbGVtZW50LCAnc3R5bGVfZGF0YScsIGAke19mb3J9wrfCt8K3JHtpZH3Ct8K3wrcke2tleX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFTdHlsZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBzdHlsZUVsZW1lbnQsXG4gICAgICAgIG1lZGlhXG4gICAgICB9O1xuICAgICAgbWFwU3R5bGVzLnNldChrZXksIGRhdGFTdHlsZSk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqICNzdHlsZSAqL1xuICBfY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnOiBULCBzdHlsZXM6IFN0eWxlPFQ+LCBpZDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgdHlwZiA9IHR5cGVvZiBzdHlsZXM7XG4gICAgaWYgKHR5cGYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7c3R5bGVzfX1gLCBtZWRpYSk7XG4gICAgfSBlbHNlIGlmICh0eXBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7KHN0eWxlcyBhcyBTdHlsZUNvbnRlbnQ8VD4pKHRoZW1lQ29uZmlnKX19YCwgbWVkaWEpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIGZvciAoY29uc3Qga2V5JCBpbiBzdHlsZXMgYXMgTXVsdGlwbGVTdHlsZXM8VD4pIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5JCkpIHtcbiAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleSRdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCh0aGVtZUNvbmZpZykgOiB2YWw7XG4gICAgICAgIGNvbnRlbnQgKz0gYC4ke2lkfSR7a2V5JH17JHt0ZXh0fX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9NZWRpYShjb250ZW50LCBtZWRpYSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvcmVTdHlsZSgpIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLnNldFVwU3R5bGUoJ3Jvb3Rib2R5Jywge1xuICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgYG1hcmdpbjowO2BcbiAgICAgICksXG4gICAgICAnLCAqLCAqOmFmdGVyLCAqOmJlZm9yZSc6ICgpID0+IChcbiAgICAgICAgYC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgYC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKVxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZG9jdW1lbnQuYm9keSwgY2xhc3NuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0ZXIgdG8gbWVkaWEgcXVlcnkgaWYgYG1lZGlhYCBpcyBwcmVzZW50XG4gKiBAcGFyYW0gdGV4dCBzdHlsZSBjb250ZW50XG4gKiBAcGFyYW0gbWVkaWEgbWVkaWEgcXVlcnlcbiAqL1xuZnVuY3Rpb24gdG9NZWRpYSh0ZXh0OiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgaWYgKHR5cGVvZiBtZWRpYSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske3RleHR9fWA7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZWRpYSkpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbWVkaWEuZm9yRWFjaChfID0+IHJlc3VsdCArPSBgQG1lZGlhICR7X317JHt0ZXh0fX1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB0ZXh0O1xufVxuIl19