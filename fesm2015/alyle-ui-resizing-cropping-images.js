import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, NgModule } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.eventDirection = null;
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
        if (event.additionalEvent) {
            this.eventDirection = event.additionalEvent;
        }
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
        /** @type {?} */
        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const rect = this.imgContainer.nativeElement.getBoundingClientRect();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUT0RPOiBhZGQgcmVzaXppbmcgaW1hZ2VcclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCBTdWJqZWN0ICwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cclxuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcclxuICBvdXRwdXQ/OiB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgfSB8IEltYWdlUmVzb2x1dGlvbjtcclxufVxyXG5leHBvcnQgZW51bSBJbWFnZVJlc29sdXRpb24ge1xyXG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXHJcbiAgRGVmYXVsdCxcclxuICAvKiogT25seSBjcm9wcGluZyAqL1xyXG4gIE9yaWdpbmFsSW1hZ2VcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENyb3BwZWRJbWFnZSB7XHJcbiAgYmFzZTY0SW1hZ2U6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVN0YXRlIHtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3A6IGJvb2xlYW47XHJcbn1cclxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8THlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnPntcclxuICB3aWR0aDogMjUwLFxyXG4gIGhlaWdodDogMjAwLFxyXG4gIG91dHB1dDogSW1hZ2VSZXNvbHV0aW9uLkRlZmF1bHRcclxufTtcclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdseS1jcm9wcGluZycsXHJcbiAgc3R5bGVzOiBbYDpob3N0ey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5seS1pbWctY29udGFpbmVye2N1cnNvcjptb3ZlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH0ubHktaW1nLWNvbnRhaW5lciBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lfS5seS1jcm9wcGluZy1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2hhZG93OjAgMCAwIDIwMDAwcHggcmdiYSgwLDAsMCwuMjkpfS5seS1jcm9wcGluZy1jb250YWluZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5seS1jcm9wcC1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0ubHktY3JvcHAtY29udGVudCAvZGVlcC8gOm5vdChpbnB1dCl7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktY3JvcHAtY29udGVudCBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOjAgMDtvcGFjaXR5OjA7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJseS1pbWctY29udGFpbmVyXCIgI19pbWdDb250YWluZXJcbihwYW5zdGFydCk9XCJfbW92ZVN0YXJ0KCRldmVudClcIlxuKHBhbik9XCJfbW92ZSgkZXZlbnQpXCJcbltuZ1N0eWxlXT1cImRyYWdEYXRhIHwgYXN5bmNcIj5cbiAgPGltZyAqbmdJZj1cImlzTG9hZGVkXCJcbiAgW3NyY109XCJzcmNcIj5cbjwvZGl2PlxuPGRpdiAjX2Nyb3BwaW5nQ29udGFpbmVyICpuZ0lmPVwiaXNMb2FkZWQ7IGVsc2UgY29udGVudFwiIGNsYXNzPVwibHktY3JvcHBpbmctY29udGFpbmVyXCIgW25nU3R5bGVdPVwie1xuICB3aWR0aDogY29uZmlnLndpZHRoICsgJ3B4JyxcbiAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0ICsgJ3B4J1xufVwiPjwvZGl2PlxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8ZGl2IGNsYXNzPVwibHktY3JvcHAtY29udGVudFwiPlxuICAgIDxpbnB1dCAjX2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwic2VsZWN0SW5wdXRFdmVudCgkZXZlbnQpXCIgYWNjZXB0PVwiaW1hZ2UvKlwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPmAsXHJcbiB9KVxyXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW1nOiBCZWhhdmlvclN1YmplY3Q8SFRNTEltYWdlRWxlbWVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xyXG4gIHJlc3VsdDogc3RyaW5nO1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcclxuICBwcml2YXRlIGV2ZW50RGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzY2FsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3NyYzogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBpbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29uZmlnOiBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBDT05GSUdfREVGQVVMVDtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XHJcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDcm9wcGVkSW1hZ2U+KCk7XHJcbiAgLyoqIE9uIGVycm9yIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RyYWdEYXRhOiBTdWJqZWN0PHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ0RhdGE6IE9ic2VydmFibGU8e3dpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCB0cmFuc2Zvcm06IHN0cmluZ30+O1xyXG4gIHByaXZhdGUgem9vbVNjYWxlID0gLjE7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgIHRoaXMuZHJhZ0RhdGEgPSB0aGlzLl9kcmFnRGF0YS5hc09ic2VydmFibGUoKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nO1xyXG4gICAgaW1nLnN1YnNjcmliZSgoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoaW1nRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XHJcbiAgICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXHJcbiAgICAgICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuem9vbVNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5maXQoKTtcclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xyXG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHRoaXMuZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcclxuXHJcbiAgICAvKiogU2V0IHR5cGUgKi9cclxuICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBudWxsO1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dChudWxsKTtcclxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcclxuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdDtcclxuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXNbMF0pO1xyXG4gIH1cclxuICBmaXhlZE51bShudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtLnRvRml4ZWQoMCkpO1xyXG4gIH1cclxuICBzZXRTY2FsZShzaXplOiBudW1iZXIpIHtcclxuICAgIC8vIGlmICghKHNpemUgPiAwICYmIHNpemUgPD0gMSkpIHsgcmV0dXJuOyB9XHJcbiAgICB0aGlzLnNjYWxlID0gc2l6ZTtcclxuICAgIHNpemUgPSBzaXplICogMTAwO1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IGluaXRpYWxJbWcgPSB0aGlzLl9pbWc7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZml4ZWROdW0oaW5pdGlhbEltZy53aWR0aCAqIHNpemUgLyAxMDApO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5maXhlZE51bShpbml0aWFsSW1nLmhlaWdodCAqIHNpemUgLyAxMDApO1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dCh7XHJcbiAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcih3aWR0aCwgaGVpZ2h0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3VzdG9tQ2VudGVyKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB3ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IChyb290Lm9mZnNldEhlaWdodCAtIGhlaWdodCkgLyAyO1xyXG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke3d9cHgsICR7aH1weCwgMClgO1xyXG4gIH1cclxuXHJcbiAgJzE6MScoKSB7XHJcbiAgICB0aGlzLnNldFNjYWxlKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXHJcbiAgICovXHJcbiAgZml0VG9TY3JlZW4oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IG1pbiA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyBzaXplLndpZHRoICogMTAwLFxyXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBzaXplLmhlaWdodCAqIDEwMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgLy8gaWYgKHJlc3VsdCA+PSAxKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBmaXQoKSB7XHJcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFNjYWxlKE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwKTtcclxuICB9XHJcblxyXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcclxuICAgIHRoaXMuZXZlbnREaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICB5OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC5jZW50ZXIueCxcclxuICAgICAgICB5OiBldmVudC5jZW50ZXIueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzZXQgPSB7XHJcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gcmVjdC54LFxyXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIHJlY3QueSxcclxuICAgICAgbGVmdDogKHJlY3QgYXMgQ2xpZW50UmVjdCkubGVmdCAtIGhvc3RSZWN0LngsXHJcbiAgICAgIHRvcDogKHJlY3QgYXMgQ2xpZW50UmVjdCkudG9wIC0gaG9zdFJlY3QueVxyXG4gICAgfTtcclxuICB9XHJcbiAgX21vdmUoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5hZGRpdGlvbmFsRXZlbnQpIHtcclxuICAgICAgdGhpcy5ldmVudERpcmVjdGlvbiA9IGV2ZW50LmFkZGl0aW9uYWxFdmVudDtcclxuICAgIH1cclxuICAgIGxldCB4LCB5O1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIC8vIGlmICh0aGlzLmV2ZW50RGlyZWN0aW9uID09PSAncGFubGVmdCcgfHwgdGhpcy5ldmVudERpcmVjdGlvbiA9PT0gJ3BhbnJpZ2h0Jykge1xyXG4gICAgICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcclxuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7IHggPSBldmVudC5jZW50ZXIueCAtIGhvc3RSZWN0LnggLSAodGhpcy5vZmZzZXQueCk7IH1cclxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxyXG5cclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQoe1xyXG4gICAgICB3aWR0aDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDApYFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDEwMDAwMCkgLyAxMDAwMDA7XHJcbiAgfVxyXG4gIC8qKisgKi9cclxuICB6b29tSW4oKSB7XHJcbiAgICAvLyBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSArIHRoaXMuem9vbVNjYWxlKTtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlICsgLjA1KTtcclxuICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgPD0gMSkge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKi0gKi9cclxuICB6b29tT3V0KCkge1xyXG4gICAgLy8gY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgLSB0aGlzLnpvb21TY2FsZSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSAtIC4wNSk7XHJcbiAgICBpZiAoc2NhbGUgPiB0aGlzLnpvb21TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maXQoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5zZXRJbWFnZVVybCh0aGlzLnNyYyk7XHJcbiAgfVxyXG4gIGNlbnRlcihpbWc/OiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoIWltZykge1xyXG4gICAgICBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdyA9IChyb290Lm9mZnNldFdpZHRoIC0gaW1nLndpZHRoKSAvIDI7XHJcbiAgICBjb25zdCBoID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaW1nLmhlaWdodCkgLyAyO1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICB3aWR0aDogYCR7aW1nLndpZHRofXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtpbWcuaGVpZ2h0fXB4YCxcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcihpbWcud2lkdGgsIGltZy5oZWlnaHQpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dChyZXN1bHQpO1xyXG4gIH1cclxuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZykge1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICBpZiAoIXNyYykgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChudWxsKTtcclxuICAgIH0pO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1nLm5leHQoaW1nKTtcclxuICAgICAgdGhpcy5sb2FkZWQuZW1pdChudWxsKTtcclxuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBtYXgoLi4udmFsdWVzOiBudW1iZXJbXSkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xyXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyh0aGlzLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gdGhpcy5tYXgoY29uZmlnLmhlaWdodCwgY29uZmlnLndpZHRoKSkgLyBNYXRoLmxvZygyKSkgLSAxO1xyXG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xyXG5cclxuICAgIC8qKkFycmF5IHN0ZXBzICovXHJcbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XHJcblxyXG4gICAgLyoqIENvbnRleHQgKi9cclxuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBjb25zdCBxID0gTWF0aC5wb3cocXVhbGl0eSAqIDEwLCBudW1TdGVwcykgLyBNYXRoLnBvdygxMCwgbnVtU3RlcHMpO1xyXG5cclxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cclxuICAgIGlmIChudW1TdGVwcykge1xyXG4gICAgICAvKiogU2V0IHNpemUgKi9cclxuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XHJcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcclxuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXHJcbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xyXG5cclxuICAgICAgLyoqIFN0ZXBzICovXHJcbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XHJcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxyXG4gICAgICAgICAgMCwgMCxcclxuICAgICAgICAgIHcsIGhcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0ZXAgZmluYWxcclxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcclxuICAgICAqL1xyXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcclxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcclxuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XHJcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcclxuICAgICAgMCwgMCxcclxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxyXG4gICAgICAwLCAwLFxyXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG9jO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JvcCBJbWFnZVxyXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcclxuICAgKi9cclxuICBjcm9wKCk6IENyb3BwZWRJbWFnZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlNjRJbWFnZTogdGhpcy5jcm9wcCgpLFxyXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlIHx8IHRoaXMuY29uZmlnLnR5cGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXByZWNhdGVkLCB1c2UgY3JvcCgpIGluc3RlYWRcclxuICAgKi9cclxuICBjcm9wcCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbXlDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBDT05GSUdfREVGQVVMVCwgdGhpcy5jb25maWcpO1xyXG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcclxuICAgIGNvbnN0IGxlZnQgPSAocmVjdC5sZWZ0IC0gaW1nLmxlZnQpO1xyXG4gICAgY29uc3QgdG9wID0gKHJlY3QudG9wIC0gaW1nLnRvcCk7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBjb25maWdDYW52YXMgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyB0aGlzLnNjYWxlO1xyXG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xyXG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWcsXHJcbiAgICAgIC0obGVmdCAvIHRoaXMuc2NhbGUpLCAtKHRvcCAvIHRoaXMuc2NhbGUpLFxyXG4gICAgKTtcclxuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgMC41KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcclxuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLmRlZmF1bHRUeXBlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVzdWx0ID0gKHVybCk7XHJcbiAgICB0aGlzLmNyb3BwZWQuZW1pdCh7XHJcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXHJcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7OztJQTJCRSxVQUFPOztJQUVQLGdCQUFhOztnQ0FGYixPQUFPO2dDQUVQLGFBQWE7O0FBVWYsTUFBTSxjQUFjLHFCQUFtQztJQUNyRCxLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsTUFBTSxFQUFFLGVBQWUsQ0FBQyxPQUFPO0NBQ2hDLEVBQUM7QUF3QkY7Ozs7O0lBNkJFLFlBQW9CLFVBQXNCLEVBQVUsRUFBcUI7UUFBckQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO21CQTVCaEMsSUFBSSxlQUFlLENBQW1CLElBQUksQ0FBQztvQkFR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