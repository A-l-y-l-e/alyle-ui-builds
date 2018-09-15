import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LyTheme2 } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: {
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        cursor: 'move',
        position: 'absolute',
        top: 0,
        left: 0,
        '& > img': {
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        }
    },
    croppingContainer: {
        position: 'absolute',
        pointerEvents: 'none',
        boxShadow: '0 0 0 20000px rgba(0, 0, 0, 0.29)',
        '&::after': {
            content: `''`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: 'solid 2px rgb(255, 255, 255)'
        }
    },
    croppContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        '& *:not(input)': {
            pointerEvents: 'none'
        },
        '& > input': {
            position: 'absolute',
            background: 'transparent',
            opacity: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%'
        }
    }
});
/** @enum {number} */
const ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
ImageResolution[ImageResolution.Default] = 'Default';
ImageResolution[ImageResolution.OriginalImage] = 'OriginalImage';
/** @type {?} */
const CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImageResolution.Default
});
class LyResizingCroppingImages {
    /**
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} cd
     */
    constructor(_renderer, theme, elementRef, cd) {
        this._renderer = _renderer;
        this.theme = theme;
        this.elementRef = elementRef;
        this.cd = cd;
        this.classes = this.theme.addStyleSheet(styles, 'ly-image-cropper', STYLE_PRIORITY);
        this.img = new BehaviorSubject(null);
        this.config = CONFIG_DEFAULT;
        /**
         * On loaded new image
         */
        this.loaded = new EventEmitter();
        /**
         * On crop new image
         */
        this.cropped = new EventEmitter();
        /**
         * On error new image
         */
        this.error = new EventEmitter();
        this._dragData = new Subject();
        this.zoomScale = .1;
        this._renderer.addClass(elementRef.nativeElement, this.classes.root);
        this.dragData = this._dragData.asObservable();
        /** @type {?} */
        const img = this.img;
        img.subscribe((imgElement) => {
            if (imgElement) {
                this._img = imgElement;
                /** *
                 * set zoom scale
                  @type {?} */
                const minScale = {
                    width: this.config.width / this._img.width * 100,
                    height: this.config.height / this._img.height * 100
                };
                this.zoomScale = Math.max(minScale.width, minScale.height) / 100;
                this.fit();
                this.cd.markForCheck();
            }
        });
    }
    /**
     * @param {?} img
     * @return {?}
     */
    selectInputEvent(img) {
        /** @type {?} */
        const _img = /** @type {?} */ (img.target);
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        const fileReader = new FileReader();
        this.fileName = _img.value.replace(/.*(\/|\\)/, '');
        /** Set type */
        this.defaultType = null;
        if (!this.config.type) {
            this.defaultType = _img.files[0].type;
        }
        this.isLoaded = false;
        this.isCropped = false;
        this._dragData.next(null);
        fileReader.addEventListener('loadend', (loadEvent) => {
            /** @type {?} */
            const originalImageUrl = (/** @type {?} */ (loadEvent.target)).result;
            this.setImageUrl(originalImageUrl);
            this.cd.markForCheck();
        });
        fileReader.readAsDataURL(_img.files[0]);
    }
    /**
     * @param {?} num
     * @return {?}
     */
    fixedNum(num) {
        return parseFloat(num.toFixed(0));
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setScale(size) {
        // if (!(size > 0 && size <= 1)) { return; }
        this.scale = size;
        size = size * 100;
        /** @type {?} */
        const img = this.imgContainer.nativeElement.firstElementChild;
        /** @type {?} */
        const initialImg = this._img;
        /** @type {?} */
        const width = this.fixedNum(initialImg.width * size / 100);
        /** @type {?} */
        const height = this.fixedNum(initialImg.height * size / 100);
        this._dragData.next({
            width: `${width}px`,
            height: `${height}px`,
            transform: this.customCenter(width, height)
        });
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    customCenter(width, height) {
        /** @type {?} */
        const root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        const w = (root.offsetWidth - width) / 2;
        /** @type {?} */
        const h = (root.offsetHeight - height) / 2;
        return `translate3d(${w}px, ${h}px, 0)`;
    }
    /**
     * @return {?}
     */
    '1:1'() {
        this.setScale(1);
    }
    /**
     * Ajustar a la pantalla
     * @return {?}
     */
    fitToScreen() {
        /** @type {?} */
        const container = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        const min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        /** @type {?} */
        const size = {
            width: this._img.width,
            height: this._img.height
        };
        /** @type {?} */
        const minScale = {
            width: min.width / size.width * 100,
            height: min.height / size.height * 100
        };
        /** @type {?} */
        const result = Math.max(minScale.width, minScale.height) / 100;
        // if (result >= 1) {
        // this.setScale(1);
        // } else {
        this.setScale(result);
        // }
    }
    /**
     * @return {?}
     */
    fit() {
        /** @type {?} */
        const minScale = {
            width: this.config.width / this._img.width * 100,
            height: this.config.height / this._img.height * 100
        };
        this.setScale(Math.max(minScale.width, minScale.height) / 100);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _moveStart(event) {
        /** @type {?} */
        const rect = this.imgContainer.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        let target;
        if (event.type === 'touchstart') {
            target = {
                x: event.targetTouches[0].clientX,
                y: event.targetTouches[0].clientY
            };
        }
        else {
            target = {
                x: event.center.x,
                y: event.center.y
            };
        }
        this.offset = {
            x: event.center.x - rect.x,
            y: event.center.y - rect.y,
            left: (/** @type {?} */ (rect)).left - hostRect.x,
            top: (/** @type {?} */ (rect)).top - hostRect.y
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _move(event) {
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
        /** @type {?} */
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const rect = this.imgContainer.nativeElement.getBoundingClientRect();
        if (event.srcEvent.shiftKey) {
            if (Math.abs(event.deltaX) === Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY))) {
                y = this.offset.top;
            }
            else {
                x = this.offset.left;
            }
        }
        if (x === undefined) {
            x = event.center.x - hostRect.x - (this.offset.x);
        }
        if (y === undefined) {
            y = event.center.y - hostRect.y - (this.offset.y);
        }
        this._dragData.next({
            width: this.imgContainer.nativeElement.offsetWidth,
            height: this.imgContainer.nativeElement.offsetHeight,
            transform: `translate3d(${x}px, ${y}px, 0)`
        });
    }
    /**
     * @param {?} num
     * @return {?}
     */
    roundNumber(num) {
        return Math.round(num * 100000) / 100000;
    }
    /**
     * +
     * @return {?}
     */
    zoomIn() {
        /** @type {?} */
        const scale = this.roundNumber(this.scale + .05);
        if (scale > 0 && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.setScale(1);
        }
    }
    /**
     * -
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const scale = this.roundNumber(this.scale - .05);
        if (scale > this.zoomScale && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.fit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setImageUrl(this.src);
    }
    /**
     * @param {?=} img
     * @return {?}
     */
    center(img) {
        if (!img) {
            img = this.imgContainer.nativeElement.firstElementChild;
        }
        /** @type {?} */
        const root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        const w = (root.offsetWidth - img.width) / 2;
        /** @type {?} */
        const h = (root.offsetHeight - img.height) / 2;
        /** @type {?} */
        const result = {
            width: `${img.width}px`,
            height: `${img.height}px`,
            transform: this.customCenter(img.width, img.height)
        };
        this._dragData.next(result);
    }
    /**
     * @param {?} src
     * @return {?}
     */
    setImageUrl(src) {
        this.src = src;
        if (!src) {
            return;
        }
        /** @type {?} */
        const img = new Image;
        img.src = src;
        img.addEventListener('error', (err) => {
            this.error.emit(null);
        });
        img.addEventListener('load', () => {
            this.img.next(img);
            this.loaded.emit(null);
            this.isLoaded = true;
            this.cd.markForCheck();
        });
    }
    /**
     * @param {...?} values
     * @return {?}
     */
    max(...values) {
        return Math.max(...values);
    }
    /**
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    imageSmoothingQuality(img, config, quality) {
        /** *
         * Calculate total number of steps needed
          @type {?} */
        let numSteps = Math.ceil(Math.log(this.max(img.width, img.height) / this.max(config.height, config.width)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /** *
         * Array steps
          @type {?} */
        const steps = Array.from(Array(numSteps).keys());
        /** *
         * Context
          @type {?} */
        const octx = img.getContext('2d');
        /** @type {?} */
        const q = Math.pow(quality * 10, numSteps) / Math.pow(10, numSteps);
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /** *
             * Set size
              @type {?} */
            const w = img.width * quality;
            /** @type {?} */
            const h = img.height * quality;
            /** Only the new img is shown. */
            octx.globalCompositeOperation = 'copy';
            /** Steps */
            (/** @type {?} */ (steps)).forEach((a, b) => {
                octx.drawImage(img, 0, 0, w, h);
            });
        }
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        const oc = document.createElement('canvas');
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        const ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * (q), img.height * (q), 0, 0, oc.width, oc.height);
        return oc;
    }
    /**
     * Crop Image
     * Resizing & cropping image
     * @return {?}
     */
    crop() {
        return {
            base64Image: this.cropp(),
            type: this.defaultType || this.config.type
        };
    }
    /**
     * Deprecated, use crop() instead
     * @return {?}
     */
    cropp() {
        /** @type {?} */
        const myConfig = Object.assign({}, CONFIG_DEFAULT, this.config);
        /** @type {?} */
        const canvasElement = document.createElement('canvas');
        /** @type {?} */
        const rect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const img = /** @type {?} */ (this.imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
        /** @type {?} */
        const left = (rect.left - img.left);
        /** @type {?} */
        const top = (rect.top - img.top);
        /** @type {?} */
        const config = {
            width: myConfig.width,
            height: myConfig.height
        };
        /** @type {?} */
        const configCanvas = {
            width: this._img.width,
            height: this._img.height
        };
        canvasElement.width = config.width / this.scale;
        canvasElement.height = config.height / this.scale;
        /** @type {?} */
        const ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._img, -(left / this.scale), -(top / this.scale));
        /** @type {?} */
        let result = canvasElement;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, 0.5);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, 0.5);
        }
        /** @type {?} */
        let url;
        if (myConfig.type) {
            url = result.toDataURL(`image/${myConfig.type}`);
        }
        else {
            url = result.toDataURL(this.defaultType);
        }
        this.result = (url);
        this.cropped.emit({
            base64Image: url,
            type: this.defaultType || myConfig.type
        });
        this.isCropped = true;
        return url;
    }
}
LyResizingCroppingImages.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'ly-cropping',
                template: `<div [className]="classes.imgContainer" #_imgContainer
(panstart)="_moveStart($event)"
(pan)="_move($event)"
[ngStyle]="dragData | async">
  <img *ngIf="isLoaded"
  [src]="src">
</div>
<div #_croppingContainer *ngIf="isLoaded; else content" [className]="classes.croppingContainer" [ngStyle]="{
  width: config.width + 'px',
  height: config.height + 'px'
}"></div>
<ng-template #content>
  <div [className]="classes.croppContent">
    <input #_fileInput type="file" (change)="selectInputEvent($event)" accept="image/*">
    <ng-content></ng-content>
  </div>
</ng-template>`
            },] },
];
/** @nocollapse */
LyResizingCroppingImages.ctorParameters = () => [
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
LyResizingCroppingImages.propDecorators = {
    imgContainer: [{ type: ViewChild, args: ['_imgContainer',] }],
    croppingContainer: [{ type: ViewChild, args: ['_croppingContainer',] }],
    src: [{ type: Input }],
    format: [{ type: Input }],
    config: [{ type: Input }],
    loaded: [{ type: Output }],
    cropped: [{ type: Output }],
    error: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyResizingCroppingImageModule {
}
LyResizingCroppingImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                exports: [LyResizingCroppingImages],
                declarations: [LyResizingCroppingImages]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ImageResolution, LyResizingCroppingImages, LyResizingCroppingImageModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUT0RPOiBhZGQgcmVzaXppbmcgaW1hZ2VcclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgU3ViamVjdCAsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xyXG5cclxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfSxcclxuICBpbWdDb250YWluZXI6IHtcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgJyYgPiBpbWcnOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcm9wcGluZ0NvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4yOSknLFxyXG4gICAgJyY6OmFmdGVyJzoge1xyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JvcHBDb250ZW50OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xyXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiA+IGlucHV0Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCAqL1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xyXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xyXG4gIG91dHB1dD86IHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICB9IHwgSW1hZ2VSZXNvbHV0aW9uO1xyXG59XHJcbmV4cG9ydCBlbnVtIEltYWdlUmVzb2x1dGlvbiB7XHJcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cclxuICBEZWZhdWx0LFxyXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXHJcbiAgT3JpZ2luYWxJbWFnZVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcHBlZEltYWdlIHtcclxuICBiYXNlNjRJbWFnZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RhdGUge1xyXG4gIGlzTG9hZGVkOiBib29sZWFuO1xyXG4gIGlzQ3JvcDogYm9vbGVhbjtcclxufVxyXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWc+e1xyXG4gIHdpZHRoOiAyNTAsXHJcbiAgaGVpZ2h0OiAyMDAsXHJcbiAgb3V0cHV0OiBJbWFnZVJlc29sdXRpb24uRGVmYXVsdFxyXG59O1xyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2x5LWNyb3BwaW5nJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmltZ0NvbnRhaW5lclwiICNfaW1nQ29udGFpbmVyXG4ocGFuc3RhcnQpPVwiX21vdmVTdGFydCgkZXZlbnQpXCJcbihwYW4pPVwiX21vdmUoJGV2ZW50KVwiXG5bbmdTdHlsZV09XCJkcmFnRGF0YSB8IGFzeW5jXCI+XG4gIDxpbWcgKm5nSWY9XCJpc0xvYWRlZFwiXG4gIFtzcmNdPVwic3JjXCI+XG48L2Rpdj5cbjxkaXYgI19jcm9wcGluZ0NvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVkOyBlbHNlIGNvbnRlbnRcIiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY3JvcHBpbmdDb250YWluZXJcIiBbbmdTdHlsZV09XCJ7XG4gIHdpZHRoOiBjb25maWcud2lkdGggKyAncHgnLFxuICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQgKyAncHgnXG59XCI+PC9kaXY+XG48bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG4gIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNyb3BwQ29udGVudFwiPlxuICAgIDxpbnB1dCAjX2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwic2VsZWN0SW5wdXRFdmVudCgkZXZlbnQpXCIgYWNjZXB0PVwiaW1hZ2UvKlwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPmBcclxuIH0pXHJcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LWltYWdlLWNyb3BwZXInLCBTVFlMRV9QUklPUklUWSk7XHJcbiAgaW1nOiBCZWhhdmlvclN1YmplY3Q8SFRNTEltYWdlRWxlbWVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xyXG4gIHJlc3VsdDogc3RyaW5nO1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcclxuICBwcml2YXRlIHNjYWxlOiBudW1iZXI7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBpbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29uZmlnOiBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBDT05GSUdfREVGQVVMVDtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XHJcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDcm9wcGVkSW1hZ2U+KCk7XHJcbiAgLyoqIE9uIGVycm9yIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RyYWdEYXRhOiBTdWJqZWN0PHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ0RhdGE6IE9ic2VydmFibGU8e3dpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCB0cmFuc2Zvcm06IHN0cmluZ30+O1xyXG4gIHByaXZhdGUgem9vbVNjYWxlID0gLjE7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XHJcbiAgICB0aGlzLmRyYWdEYXRhID0gdGhpcy5fZHJhZ0RhdGEuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZztcclxuICAgIGltZy5zdWJzY3JpYmUoKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xyXG4gICAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xyXG4gICAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnpvb21TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuZml0KCk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcclxuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICB0aGlzLmZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XHJcblxyXG4gICAgLyoqIFNldCB0eXBlICovXHJcbiAgICB0aGlzLmRlZmF1bHRUeXBlID0gbnVsbDtcclxuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQobnVsbCk7XHJcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQ7XHJcbiAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcclxuICB9XHJcbiAgZml4ZWROdW0obnVtOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bS50b0ZpeGVkKDApKTtcclxuICB9XHJcbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAvLyBpZiAoIShzaXplID4gMCAmJiBzaXplIDw9IDEpKSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5zY2FsZSA9IHNpemU7XHJcbiAgICBzaXplID0gc2l6ZSAqIDEwMDtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nO1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmZpeGVkTnVtKGluaXRpYWxJbWcud2lkdGggKiBzaXplIC8gMTAwKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZml4ZWROdW0oaW5pdGlhbEltZy5oZWlnaHQgKiBzaXplIC8gMTAwKTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQoe1xyXG4gICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIod2lkdGgsIGhlaWdodClcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGN1c3RvbUNlbnRlcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdyA9IChyb290Lm9mZnNldFdpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgIGNvbnN0IGggPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcclxuICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHt3fXB4LCAke2h9cHgsIDApYDtcclxuICB9XHJcblxyXG4gICcxOjEnKCkge1xyXG4gICAgdGhpcy5zZXRTY2FsZSgxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxyXG4gICAqL1xyXG4gIGZpdFRvU2NyZWVuKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBtaW4gPSB7XHJcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcclxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gc2l6ZS5oZWlnaHQgKiAxMDBcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcclxuICAgIC8vIGlmIChyZXN1bHQgPj0gMSkge1xyXG4gICAgICAvLyB0aGlzLnNldFNjYWxlKDEpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZml0KCkge1xyXG4gICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRTY2FsZShNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMCk7XHJcbiAgfVxyXG5cclxuICBfbW92ZVN0YXJ0KGV2ZW50KSB7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgdGFyZ2V0O1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICB0YXJnZXQgPSB7XHJcbiAgICAgICAgeDogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgIHk6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LmNlbnRlci54LFxyXG4gICAgICAgIHk6IGV2ZW50LmNlbnRlci55XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLm9mZnNldCA9IHtcclxuICAgICAgeDogZXZlbnQuY2VudGVyLnggLSByZWN0LngsXHJcbiAgICAgIHk6IGV2ZW50LmNlbnRlci55IC0gcmVjdC55LFxyXG4gICAgICBsZWZ0OiAocmVjdCBhcyBDbGllbnRSZWN0KS5sZWZ0IC0gaG9zdFJlY3QueCxcclxuICAgICAgdG9wOiAocmVjdCBhcyBDbGllbnRSZWN0KS50b3AgLSBob3N0UmVjdC55XHJcbiAgICB9O1xyXG4gIH1cclxuICBfbW92ZShldmVudCkge1xyXG4gICAgbGV0IHgsIHk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XHJcbiAgICAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gKHRoaXMub2Zmc2V0LngpOyB9XHJcbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSBldmVudC5jZW50ZXIueSAtIGhvc3RSZWN0LnkgLSAodGhpcy5vZmZzZXQueSk7IH1cclxuXHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHtcclxuICAgICAgd2lkdGg6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIHJvdW5kTnVtYmVyKG51bTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xyXG4gIH1cclxuICAvKiorICovXHJcbiAgem9vbUluKCkge1xyXG4gICAgLy8gY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgKyB0aGlzLnpvb21TY2FsZSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSArIC4wNSk7XHJcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiotICovXHJcbiAgem9vbU91dCgpIHtcclxuICAgIC8vIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlIC0gdGhpcy56b29tU2NhbGUpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgLSAuMDUpO1xyXG4gICAgaWYgKHNjYWxlID4gdGhpcy56b29tU2NhbGUgJiYgc2NhbGUgPD0gMSkge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0SW1hZ2VVcmwodGhpcy5zcmMpO1xyXG4gIH1cclxuICBjZW50ZXIoaW1nPzogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKCFpbWcpIHtcclxuICAgICAgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHcgPSAocm9vdC5vZmZzZXRXaWR0aCAtIGltZy53aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IChyb290Lm9mZnNldEhlaWdodCAtIGltZy5oZWlnaHQpIC8gMjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgd2lkdGg6IGAke2ltZy53aWR0aH1weGAsXHJcbiAgICAgIGhlaWdodDogYCR7aW1nLmhlaWdodH1weGAsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQocmVzdWx0KTtcclxuICB9XHJcbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yLmVtaXQobnVsbCk7XHJcbiAgICB9KTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmltZy5uZXh0KGltZyk7XHJcbiAgICAgIHRoaXMubG9hZGVkLmVtaXQobnVsbCk7XHJcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcclxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cclxuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcclxuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcclxuXHJcbiAgICAvKipBcnJheSBzdGVwcyAqL1xyXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xyXG5cclxuICAgIC8qKiBDb250ZXh0ICovXHJcbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcclxuXHJcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXHJcbiAgICBpZiAobnVtU3RlcHMpIHtcclxuICAgICAgLyoqIFNldCBzaXplICovXHJcbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xyXG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XHJcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xyXG4gICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcclxuXHJcbiAgICAgIC8qKiBTdGVwcyAqL1xyXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoYSwgYikgPT4ge1xyXG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcclxuICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICB3LCBoXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGVwIGZpbmFsXHJcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXHJcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XHJcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xyXG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIGltZy53aWR0aCAqIChxKSwgaW1nLmhlaWdodCAqIChxKSxcclxuICAgICAgMCwgMCxcclxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHJldHVybiBvYztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyb3AgSW1hZ2VcclxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXHJcbiAgICovXHJcbiAgY3JvcCgpOiBDcm9wcGVkSW1hZ2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFzZTY0SW1hZ2U6IHRoaXMuY3JvcHAoKSxcclxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCB0aGlzLmNvbmZpZy50eXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZCwgdXNlIGNyb3AoKSBpbnN0ZWFkXHJcbiAgICovXHJcbiAgY3JvcHAoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG15Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgQ09ORklHX0RFRkFVTFQsIHRoaXMuY29uZmlnKTtcclxuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBsZWZ0ID0gKHJlY3QubGVmdCAtIGltZy5sZWZ0KTtcclxuICAgIGNvbnN0IHRvcCA9IChyZWN0LnRvcCAtIGltZy50b3ApO1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29uZmlnQ2FudmFzID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5zY2FsZTtcclxuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcclxuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxyXG4gICAgICAtKGxlZnQgLyB0aGlzLnNjYWxlKSwgLSh0b3AgLyB0aGlzLnNjYWxlKSxcclxuICAgICk7XHJcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcclxuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIDAuNSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHVybDtcclxuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XHJcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYGltYWdlLyR7bXlDb25maWcudHlwZX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5kZWZhdWx0VHlwZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xyXG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoe1xyXG4gICAgICBiYXNlNjRJbWFnZTogdXJsLFxyXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB9IGZyb20gJy4vcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQTtBQWVBLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUUxQixNQUFNLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsYUFBYSxFQUFFLE1BQU07U0FDdEI7S0FDRjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLFNBQVMsRUFBRSxtQ0FBbUM7UUFDOUMsVUFBVSxFQUFFO1lBQ1YsT0FBTyxFQUFFLElB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