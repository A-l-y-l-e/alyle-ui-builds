import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, NgModule } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
ImageResolution[ImageResolution.Default] = "Default";
ImageResolution[ImageResolution.OriginalImage] = "OriginalImage";
const /** @type {?} */ CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImageResolution.Default
});
class LyResizingCroppingImages {
    /**
     * @param {?} elementRef
     * @param {?} cd
     */
    constructor(elementRef, cd) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.img = new BehaviorSubject(null);
        this._src = new BehaviorSubject(null);
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
        this.dragData = this._dragData.asObservable();
        const /** @type {?} */ img = this.img;
        img.subscribe((imgElement) => {
            if (imgElement) {
                this._img = imgElement;
                /**
                 * set zoom scale
                 */
                const /** @type {?} */ minScale = {
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
        const /** @type {?} */ _img = /** @type {?} */ (img.target);
        if (_img.files.length !== 1) {
            return;
        }
        const /** @type {?} */ fileReader = new FileReader();
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
            const /** @type {?} */ originalImageUrl = (/** @type {?} */ (loadEvent.target)).result;
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
        const /** @type {?} */ img = this.imgContainer.nativeElement.firstElementChild;
        const /** @type {?} */ initialImg = this._img;
        const /** @type {?} */ width = this.fixedNum(initialImg.width * size / 100);
        const /** @type {?} */ height = this.fixedNum(initialImg.height * size / 100);
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
        const /** @type {?} */ root = /** @type {?} */ (this.elementRef.nativeElement);
        const /** @type {?} */ w = (root.offsetWidth - width) / 2;
        const /** @type {?} */ h = (root.offsetHeight - height) / 2;
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
        const /** @type {?} */ container = /** @type {?} */ (this.elementRef.nativeElement);
        const /** @type {?} */ min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        const /** @type {?} */ size = {
            width: this._img.width,
            height: this._img.height
        };
        const /** @type {?} */ minScale = {
            width: min.width / size.width * 100,
            height: min.height / size.height * 100
        };
        const /** @type {?} */ result = Math.max(minScale.width, minScale.height) / 100;
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
        const /** @type {?} */ minScale = {
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
        this.eventDirection = null;
        const /** @type {?} */ rect = this.imgContainer.nativeElement.getBoundingClientRect();
        const /** @type {?} */ hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        let /** @type {?} */ target;
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
        if (event.additionalEvent) {
            this.eventDirection = event.additionalEvent;
        }
        let /** @type {?} */ x, /** @type {?} */ y;
        const /** @type {?} */ hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        const /** @type {?} */ rect = this.imgContainer.nativeElement.getBoundingClientRect();
        if (event.srcEvent.shiftKey) {
            // if (this.eventDirection === 'panleft' || this.eventDirection === 'panright') {
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
        // const scale = this.roundNumber(this.scale + this.zoomScale);
        const /** @type {?} */ scale = this.roundNumber(this.scale + .05);
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
        // const scale = this.roundNumber(this.scale - this.zoomScale);
        const /** @type {?} */ scale = this.roundNumber(this.scale - .05);
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
        const /** @type {?} */ root = /** @type {?} */ (this.elementRef.nativeElement);
        const /** @type {?} */ w = (root.offsetWidth - img.width) / 2;
        const /** @type {?} */ h = (root.offsetHeight - img.height) / 2;
        const /** @type {?} */ result = {
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
        const /** @type {?} */ img = new Image;
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
        /**
         * Calculate total number of steps needed
         */
        let /** @type {?} */ numSteps = Math.ceil(Math.log(this.max(img.width, img.height) / this.max(config.height, config.width)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /**
         * Array steps
         */
        const /** @type {?} */ steps = Array.from(Array(numSteps).keys());
        /**
         * Context
         */
        const /** @type {?} */ octx = img.getContext('2d');
        const /** @type {?} */ q = Math.pow(quality * 10, numSteps) / Math.pow(10, numSteps);
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /**
             * Set size
             */
            const /** @type {?} */ w = img.width * quality;
            const /** @type {?} */ h = img.height * quality;
            /** Only the new img is shown. */
            octx.globalCompositeOperation = 'copy';
            /** Steps */
            (/** @type {?} */ (steps)).forEach((a, b) => {
                octx.drawImage(img, 0, 0, w, h);
            });
        }
        /**
         * Step final
         * Resizing & cropping image
         */
        const /** @type {?} */ oc = document.createElement('canvas'), /** @type {?} */
        ctx = oc.getContext('2d');
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
        const /** @type {?} */ myConfig = Object.assign({}, CONFIG_DEFAULT, this.config);
        const /** @type {?} */ canvasElement = document.createElement('canvas');
        const /** @type {?} */ rect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
        const /** @type {?} */ img = /** @type {?} */ (this.imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
        const /** @type {?} */ left = (rect.left - img.left);
        const /** @type {?} */ top = (rect.top - img.top);
        const /** @type {?} */ config = {
            width: myConfig.width,
            height: myConfig.height
        };
        const /** @type {?} */ configCanvas = {
            width: this._img.width,
            height: this._img.height
        };
        canvasElement.width = config.width / this.scale;
        canvasElement.height = config.height / this.scale;
        const /** @type {?} */ ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._img, -(left / this.scale), -(top / this.scale));
        let /** @type {?} */ result = canvasElement;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, 0.5);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, 0.5);
        }
        let /** @type {?} */ url;
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
                styles: [`:host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;overflow:hidden;position:relative;justify-content:center;align-items:center}.ly-img-container{cursor:move;position:absolute;top:0;left:0}.ly-img-container img{width:100%;height:100%;pointer-events:none}.ly-cropping-container{position:absolute;pointer-events:none;box-shadow:0 0 0 20000px rgba(0,0,0,.29)}.ly-cropping-container::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border:2px solid #fff}.ly-cropp-content{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;right:0;bottom:0}.ly-cropp-content /deep/ :not(input){pointer-events:none}.ly-cropp-content input{position:absolute;background:0 0;opacity:0;top:0;left:0;right:0;bottom:0;width:100%;height:100%}`],
                template: `<div class="ly-img-container" #_imgContainer
(panstart)="_moveStart($event)"
(pan)="_move($event)"
[ngStyle]="dragData | async">
  <img *ngIf="isLoaded"
  [src]="src">
</div>
<div #_croppingContainer *ngIf="isLoaded; else content" class="ly-cropping-container" [ngStyle]="{
  width: config.width + 'px',
  height: config.height + 'px'
}"></div>
<ng-template #content>
  <div class="ly-cropp-content">
    <input #_fileInput type="file" (change)="selectInputEvent($event)" accept="image/*">
    <ng-content></ng-content>
  </div>
</ng-template>`,
            },] },
];
/** @nocollapse */
LyResizingCroppingImages.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];
LyResizingCroppingImages.propDecorators = {
    "imgContainer": [{ type: ViewChild, args: ['_imgContainer',] },],
    "croppingContainer": [{ type: ViewChild, args: ['_croppingContainer',] },],
    "src": [{ type: Input },],
    "format": [{ type: Input },],
    "config": [{ type: Input },],
    "loaded": [{ type: Output },],
    "cropped": [{ type: Output },],
    "error": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ImageResolution, LyResizingCroppingImages, LyResizingCroppingImageModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUT0RPOiBhZGQgcmVzaXppbmcgaW1hZ2VcclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBOZ01vZHVsZSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIEZvcm1zTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgU3Vic2NyaXB0aW9uICwgU3ViamVjdCAsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnIHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXHJcbiAgdHlwZT86IHN0cmluZztcclxuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnICovXHJcbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XHJcbiAgb3V0cHV0Pzoge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gIH0gfCBJbWFnZVJlc29sdXRpb247XHJcbn1cclxuZXhwb3J0IGVudW0gSW1hZ2VSZXNvbHV0aW9uIHtcclxuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xyXG4gIERlZmF1bHQsXHJcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cclxuICBPcmlnaW5hbEltYWdlXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDcm9wcGVkSW1hZ2Uge1xyXG4gIGJhc2U2NEltYWdlOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTdGF0ZSB7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgaXNDcm9wOiBib29sZWFuO1xyXG59XHJcbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZz57XHJcbiAgd2lkdGg6IDI1MCxcclxuICBoZWlnaHQ6IDIwMCxcclxuICBvdXRwdXQ6IEltYWdlUmVzb2x1dGlvbi5EZWZhdWx0XHJcbn07XHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnbHktY3JvcHBpbmcnLFxyXG4gIHN0eWxlczogW2A6aG9zdHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ZGlzcGxheTpmbGV4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubHktaW1nLWNvbnRhaW5lcntjdXJzb3I6bW92ZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Lmx5LWltZy1jb250YWluZXIgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktY3JvcHBpbmctY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAyMDAwMHB4IHJnYmEoMCwwLDAsLjI5KX0ubHktY3JvcHBpbmctY29udGFpbmVyOjphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JvcmRlcjoycHggc29saWQgI2ZmZn0ubHktY3JvcHAtY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9Lmx5LWNyb3BwLWNvbnRlbnQgL2RlZXAvIDpub3QoaW5wdXQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWNyb3BwLWNvbnRlbnQgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDowIDA7b3BhY2l0eTowO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibHktaW1nLWNvbnRhaW5lclwiICNfaW1nQ29udGFpbmVyXG4ocGFuc3RhcnQpPVwiX21vdmVTdGFydCgkZXZlbnQpXCJcbihwYW4pPVwiX21vdmUoJGV2ZW50KVwiXG5bbmdTdHlsZV09XCJkcmFnRGF0YSB8IGFzeW5jXCI+XG4gIDxpbWcgKm5nSWY9XCJpc0xvYWRlZFwiXG4gIFtzcmNdPVwic3JjXCI+XG48L2Rpdj5cbjxkaXYgI19jcm9wcGluZ0NvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVkOyBlbHNlIGNvbnRlbnRcIiBjbGFzcz1cImx5LWNyb3BwaW5nLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cIntcbiAgd2lkdGg6IGNvbmZpZy53aWR0aCArICdweCcsXG4gIGhlaWdodDogY29uZmlnLmhlaWdodCArICdweCdcbn1cIj48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjY29udGVudD5cbiAgPGRpdiBjbGFzcz1cImx5LWNyb3BwLWNvbnRlbnRcIj5cbiAgICA8aW5wdXQgI19maWxlSW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cInNlbGVjdElucHV0RXZlbnQoJGV2ZW50KVwiIGFjY2VwdD1cImltYWdlLypcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gfSlcclxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGltZzogQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIVE1MSW1hZ2VFbGVtZW50PihudWxsKTtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvZmZzZXQ6IHt4OiBudW1iZXIsIHk6IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn07XHJcbiAgcHJpdmF0ZSBldmVudERpcmVjdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2NhbGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zcmM6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG5cclxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIGNyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnID0gQ09ORklHX0RFRkFVTFQ7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xyXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXHJcbiAgQE91dHB1dCgpIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q3JvcHBlZEltYWdlPigpO1xyXG4gIC8qKiBPbiBlcnJvciBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFR5cGU6IHN0cmluZztcclxuICBwcml2YXRlIF9kcmFnRGF0YTogU3ViamVjdDx7d2lkdGg6IHN0cmluZywgaGVpZ2h0OiBzdHJpbmcsIHRyYW5zZm9ybTogc3RyaW5nfT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGRyYWdEYXRhOiBPYnNlcnZhYmxlPHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PjtcclxuICBwcml2YXRlIHpvb21TY2FsZSA9IC4xO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB0aGlzLmRyYWdEYXRhID0gdGhpcy5fZHJhZ0RhdGEuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZztcclxuICAgIGltZy5zdWJzY3JpYmUoKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xyXG4gICAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xyXG4gICAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnpvb21TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuZml0KCk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcclxuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICB0aGlzLmZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XHJcblxyXG4gICAgLyoqIFNldCB0eXBlICovXHJcbiAgICB0aGlzLmRlZmF1bHRUeXBlID0gbnVsbDtcclxuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQobnVsbCk7XHJcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQ7XHJcbiAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcclxuICB9XHJcbiAgZml4ZWROdW0obnVtOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bS50b0ZpeGVkKDApKTtcclxuICB9XHJcbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAvLyBpZiAoIShzaXplID4gMCAmJiBzaXplIDw9IDEpKSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5zY2FsZSA9IHNpemU7XHJcbiAgICBzaXplID0gc2l6ZSAqIDEwMDtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nO1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmZpeGVkTnVtKGluaXRpYWxJbWcud2lkdGggKiBzaXplIC8gMTAwKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZml4ZWROdW0oaW5pdGlhbEltZy5oZWlnaHQgKiBzaXplIC8gMTAwKTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQoe1xyXG4gICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIod2lkdGgsIGhlaWdodClcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGN1c3RvbUNlbnRlcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdyA9IChyb290Lm9mZnNldFdpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgIGNvbnN0IGggPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcclxuICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHt3fXB4LCAke2h9cHgsIDApYDtcclxuICB9XHJcblxyXG4gICcxOjEnKCkge1xyXG4gICAgdGhpcy5zZXRTY2FsZSgxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxyXG4gICAqL1xyXG4gIGZpdFRvU2NyZWVuKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBtaW4gPSB7XHJcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcclxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gc2l6ZS5oZWlnaHQgKiAxMDBcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcclxuICAgIC8vIGlmIChyZXN1bHQgPj0gMSkge1xyXG4gICAgICAvLyB0aGlzLnNldFNjYWxlKDEpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZml0KCkge1xyXG4gICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRTY2FsZShNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMCk7XHJcbiAgfVxyXG5cclxuICBfbW92ZVN0YXJ0KGV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50RGlyZWN0aW9uID0gbnVsbDtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCB0YXJnZXQ7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgeTogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXQgPSB7XHJcbiAgICAgICAgeDogZXZlbnQuY2VudGVyLngsXHJcbiAgICAgICAgeTogZXZlbnQuY2VudGVyLnlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2V0ID0ge1xyXG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIHJlY3QueCxcclxuICAgICAgeTogZXZlbnQuY2VudGVyLnkgLSByZWN0LnksXHJcbiAgICAgIGxlZnQ6IChyZWN0IGFzIENsaWVudFJlY3QpLmxlZnQgLSBob3N0UmVjdC54LFxyXG4gICAgICB0b3A6IChyZWN0IGFzIENsaWVudFJlY3QpLnRvcCAtIGhvc3RSZWN0LnlcclxuICAgIH07XHJcbiAgfVxyXG4gIF9tb3ZlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuYWRkaXRpb25hbEV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZXZlbnREaXJlY3Rpb24gPSBldmVudC5hZGRpdGlvbmFsRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgeCwgeTtcclxuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xyXG4gICAgICAvLyBpZiAodGhpcy5ldmVudERpcmVjdGlvbiA9PT0gJ3BhbmxlZnQnIHx8IHRoaXMuZXZlbnREaXJlY3Rpb24gPT09ICdwYW5yaWdodCcpIHtcclxuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XHJcbiAgICAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gKHRoaXMub2Zmc2V0LngpOyB9XHJcbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSBldmVudC5jZW50ZXIueSAtIGhvc3RSZWN0LnkgLSAodGhpcy5vZmZzZXQueSk7IH1cclxuXHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHtcclxuICAgICAgd2lkdGg6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIHJvdW5kTnVtYmVyKG51bTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xyXG4gIH1cclxuICAvKiorICovXHJcbiAgem9vbUluKCkge1xyXG4gICAgLy8gY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgKyB0aGlzLnpvb21TY2FsZSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSArIC4wNSk7XHJcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiotICovXHJcbiAgem9vbU91dCgpIHtcclxuICAgIC8vIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlIC0gdGhpcy56b29tU2NhbGUpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgLSAuMDUpO1xyXG4gICAgaWYgKHNjYWxlID4gdGhpcy56b29tU2NhbGUgJiYgc2NhbGUgPD0gMSkge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0SW1hZ2VVcmwodGhpcy5zcmMpO1xyXG4gIH1cclxuICBjZW50ZXIoaW1nPzogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKCFpbWcpIHtcclxuICAgICAgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHcgPSAocm9vdC5vZmZzZXRXaWR0aCAtIGltZy53aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IChyb290Lm9mZnNldEhlaWdodCAtIGltZy5oZWlnaHQpIC8gMjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgd2lkdGg6IGAke2ltZy53aWR0aH1weGAsXHJcbiAgICAgIGhlaWdodDogYCR7aW1nLmhlaWdodH1weGAsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQocmVzdWx0KTtcclxuICB9XHJcbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yLmVtaXQobnVsbCk7XHJcbiAgICB9KTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmltZy5uZXh0KGltZyk7XHJcbiAgICAgIHRoaXMubG9hZGVkLmVtaXQobnVsbCk7XHJcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcclxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cclxuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcclxuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcclxuXHJcbiAgICAvKipBcnJheSBzdGVwcyAqL1xyXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xyXG5cclxuICAgIC8qKiBDb250ZXh0ICovXHJcbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcclxuXHJcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXHJcbiAgICBpZiAobnVtU3RlcHMpIHtcclxuICAgICAgLyoqIFNldCBzaXplICovXHJcbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xyXG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XHJcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xyXG4gICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcclxuXHJcbiAgICAgIC8qKiBTdGVwcyAqL1xyXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoYSwgYikgPT4ge1xyXG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcclxuICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICB3LCBoXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGVwIGZpbmFsXHJcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXHJcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XHJcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xyXG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIGltZy53aWR0aCAqIChxKSwgaW1nLmhlaWdodCAqIChxKSxcclxuICAgICAgMCwgMCxcclxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHJldHVybiBvYztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyb3AgSW1hZ2VcclxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXHJcbiAgICovXHJcbiAgY3JvcCgpOiBDcm9wcGVkSW1hZ2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFzZTY0SW1hZ2U6IHRoaXMuY3JvcHAoKSxcclxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCB0aGlzLmNvbmZpZy50eXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZCwgdXNlIGNyb3AoKSBpbnN0ZWFkXHJcbiAgICovXHJcbiAgY3JvcHAoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG15Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgQ09ORklHX0RFRkFVTFQsIHRoaXMuY29uZmlnKTtcclxuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBsZWZ0ID0gKHJlY3QubGVmdCAtIGltZy5sZWZ0KTtcclxuICAgIGNvbnN0IHRvcCA9IChyZWN0LnRvcCAtIGltZy50b3ApO1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29uZmlnQ2FudmFzID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5zY2FsZTtcclxuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcclxuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxyXG4gICAgICAtKGxlZnQgLyB0aGlzLnNjYWxlKSwgLSh0b3AgLyB0aGlzLnNjYWxlKSxcclxuICAgICk7XHJcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcclxuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIDAuNSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHVybDtcclxuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XHJcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYGltYWdlLyR7bXlDb25maWcudHlwZX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5kZWZhdWx0VHlwZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xyXG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoe1xyXG4gICAgICBiYXNlNjRJbWFnZTogdXJsLFxyXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB9IGZyb20gJy4vcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXVxufSlcbmV4cG9ydCBjbGFz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