/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
/**
 * @record
 */
export function LyResizingCroppingImagesConfig() { }
function LyResizingCroppingImagesConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    LyResizingCroppingImagesConfig.prototype.width;
    /** @type {?} */
    LyResizingCroppingImagesConfig.prototype.height;
    /**
     * If this is not defined, the new image will be automatically defined
     * @type {?|undefined}
     */
    LyResizingCroppingImagesConfig.prototype.type;
    /**
     * Background color( default: null), if is null in png is transparent but not in jpg
     * @type {?|undefined}
     */
    LyResizingCroppingImagesConfig.prototype.fill;
    /** @type {?|undefined} */
    LyResizingCroppingImagesConfig.prototype.output;
}
/** @enum {number} */
const ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
export { ImageResolution };
ImageResolution[ImageResolution.Default] = "Default";
ImageResolution[ImageResolution.OriginalImage] = "OriginalImage";
/**
 * @record
 */
export function CroppedImage() { }
function CroppedImage_tsickle_Closure_declarations() {
    /** @type {?} */
    CroppedImage.prototype.base64Image;
    /** @type {?} */
    CroppedImage.prototype.type;
}
/**
 * @record
 */
export function ImageState() { }
function ImageState_tsickle_Closure_declarations() {
    /** @type {?} */
    ImageState.prototype.isLoaded;
    /** @type {?} */
    ImageState.prototype.isCrop;
}
const /** @type {?} */ CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImageResolution.Default
});
export class LyResizingCroppingImages {
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
function LyResizingCroppingImages_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyResizingCroppingImages.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyResizingCroppingImages.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyResizingCroppingImages.propDecorators;
    /** @type {?} */
    LyResizingCroppingImages.prototype.img;
    /** @type {?} */
    LyResizingCroppingImages.prototype.result;
    /** @type {?} */
    LyResizingCroppingImages.prototype.fileName;
    /** @type {?} */
    LyResizingCroppingImages.prototype._img;
    /** @type {?} */
    LyResizingCroppingImages.prototype.offset;
    /** @type {?} */
    LyResizingCroppingImages.prototype.eventDirection;
    /** @type {?} */
    LyResizingCroppingImages.prototype.scale;
    /** @type {?} */
    LyResizingCroppingImages.prototype._src;
    /** @type {?} */
    LyResizingCroppingImages.prototype.imgContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype.croppingContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype.src;
    /** @type {?} */
    LyResizingCroppingImages.prototype.format;
    /** @type {?} */
    LyResizingCroppingImages.prototype.config;
    /** @type {?} */
    LyResizingCroppingImages.prototype.isLoaded;
    /** @type {?} */
    LyResizingCroppingImages.prototype.isCropped;
    /**
     * On loaded new image
     * @type {?}
     */
    LyResizingCroppingImages.prototype.loaded;
    /**
     * On crop new image
     * @type {?}
     */
    LyResizingCroppingImages.prototype.cropped;
    /**
     * On error new image
     * @type {?}
     */
    LyResizingCroppingImages.prototype.error;
    /** @type {?} */
    LyResizingCroppingImages.prototype.defaultType;
    /** @type {?} */
    LyResizingCroppingImages.prototype._dragData;
    /** @type {?} */
    LyResizingCroppingImages.prototype.dragData;
    /** @type {?} */
    LyResizingCroppingImages.prototype.zoomScale;
    /** @type {?} */
    LyResizingCroppingImages.prototype.elementRef;
    /** @type {?} */
    LyResizingCroppingImages.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBR1YsS0FBSyxFQUNMLE1BQU0sRUFLTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLGVBQWUsRUFBa0IsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCN0UsdUJBQU0sY0FBYyxxQkFBbUM7SUFDckQsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztJQUNYLE1BQU0sRUFBRSxlQUFlLENBQUMsT0FBTztDQUNoQyxDQUFBLENBQUM7QUF3QkYsTUFBTTs7Ozs7SUE2QkosWUFBb0IsVUFBc0IsRUFBVSxFQUFxQjtRQUFyRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7bUJBNUJoQyxJQUFJLGVBQWUsQ0FBbUIsSUFBSSxDQUFDO29CQVE1QyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7c0JBTXZCLGNBQWM7Ozs7c0JBSTdDLElBQUksWUFBWSxFQUFROzs7O3VCQUV2QixJQUFJLFlBQVksRUFBZ0I7Ozs7cUJBRWxDLElBQUksWUFBWSxFQUFRO3lCQUd1QyxJQUFJLE9BQU8sRUFBRTt5QkFFMUUsRUFBRTtRQUdwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDckIs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aW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIE5nTW9kdWxlLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBEaXJlY3RpdmUsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgRm9ybXNNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCBTdWJzY3JpcHRpb24gLCBTdWJqZWN0ICwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cclxuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcclxuICBvdXRwdXQ/OiB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgfSB8IEltYWdlUmVzb2x1dGlvbjtcclxufVxyXG5leHBvcnQgZW51bSBJbWFnZVJlc29sdXRpb24ge1xyXG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXHJcbiAgRGVmYXVsdCxcclxuICAvKiogT25seSBjcm9wcGluZyAqL1xyXG4gIE9yaWdpbmFsSW1hZ2VcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENyb3BwZWRJbWFnZSB7XHJcbiAgYmFzZTY0SW1hZ2U6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVN0YXRlIHtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3A6IGJvb2xlYW47XHJcbn1cclxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8THlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnPntcclxuICB3aWR0aDogMjUwLFxyXG4gIGhlaWdodDogMjAwLFxyXG4gIG91dHB1dDogSW1hZ2VSZXNvbHV0aW9uLkRlZmF1bHRcclxufTtcclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdseS1jcm9wcGluZycsXHJcbiAgc3R5bGVzOiBbYDpob3N0ey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5seS1pbWctY29udGFpbmVye2N1cnNvcjptb3ZlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH0ubHktaW1nLWNvbnRhaW5lciBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lfS5seS1jcm9wcGluZy1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2hhZG93OjAgMCAwIDIwMDAwcHggcmdiYSgwLDAsMCwuMjkpfS5seS1jcm9wcGluZy1jb250YWluZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5seS1jcm9wcC1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0ubHktY3JvcHAtY29udGVudCAvZGVlcC8gOm5vdChpbnB1dCl7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktY3JvcHAtY29udGVudCBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOjAgMDtvcGFjaXR5OjA7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJseS1pbWctY29udGFpbmVyXCIgI19pbWdDb250YWluZXJcbihwYW5zdGFydCk9XCJfbW92ZVN0YXJ0KCRldmVudClcIlxuKHBhbik9XCJfbW92ZSgkZXZlbnQpXCJcbltuZ1N0eWxlXT1cImRyYWdEYXRhIHwgYXN5bmNcIj5cbiAgPGltZyAqbmdJZj1cImlzTG9hZGVkXCJcbiAgW3NyY109XCJzcmNcIj5cbjwvZGl2PlxuPGRpdiAjX2Nyb3BwaW5nQ29udGFpbmVyICpuZ0lmPVwiaXNMb2FkZWQ7IGVsc2UgY29udGVudFwiIGNsYXNzPVwibHktY3JvcHBpbmctY29udGFpbmVyXCIgW25nU3R5bGVdPVwie1xuICB3aWR0aDogY29uZmlnLndpZHRoICsgJ3B4JyxcbiAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0ICsgJ3B4J1xufVwiPjwvZGl2PlxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8ZGl2IGNsYXNzPVwibHktY3JvcHAtY29udGVudFwiPlxuICAgIDxpbnB1dCAjX2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwic2VsZWN0SW5wdXRFdmVudCgkZXZlbnQpXCIgYWNjZXB0PVwiaW1hZ2UvKlwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPmAsXHJcbiB9KVxyXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW1nOiBCZWhhdmlvclN1YmplY3Q8SFRNTEltYWdlRWxlbWVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xyXG4gIHJlc3VsdDogc3RyaW5nO1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcclxuICBwcml2YXRlIGV2ZW50RGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzY2FsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3NyYzogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBpbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29uZmlnOiBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBDT05GSUdfREVGQVVMVDtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XHJcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDcm9wcGVkSW1hZ2U+KCk7XHJcbiAgLyoqIE9uIGVycm9yIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RyYWdEYXRhOiBTdWJqZWN0PHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ0RhdGE6IE9ic2VydmFibGU8e3dpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCB0cmFuc2Zvcm06IHN0cmluZ30+O1xyXG4gIHByaXZhdGUgem9vbVNjYWxlID0gLjE7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgIHRoaXMuZHJhZ0RhdGEgPSB0aGlzLl9kcmFnRGF0YS5hc09ic2VydmFibGUoKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nO1xyXG4gICAgaW1nLnN1YnNjcmliZSgoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoaW1nRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XHJcbiAgICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXHJcbiAgICAgICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuem9vbVNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5maXQoKTtcclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xyXG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHRoaXMuZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcclxuXHJcbiAgICAvKiogU2V0IHR5cGUgKi9cclxuICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBudWxsO1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dChudWxsKTtcclxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcclxuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdDtcclxuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXNbMF0pO1xyXG4gIH1cclxuICBmaXhlZE51bShudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtLnRvRml4ZWQoMCkpO1xyXG4gIH1cclxuICBzZXRTY2FsZShzaXplOiBudW1iZXIpIHtcclxuICAgIC8vIGlmICghKHNpemUgPiAwICYmIHNpemUgPD0gMSkpIHsgcmV0dXJuOyB9XHJcbiAgICB0aGlzLnNjYWxlID0gc2l6ZTtcclxuICAgIHNpemUgPSBzaXplICogMTAwO1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IGluaXRpYWxJbWcgPSB0aGlzLl9pbWc7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZml4ZWROdW0oaW5pdGlhbEltZy53aWR0aCAqIHNpemUgLyAxMDApO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5maXhlZE51bShpbml0aWFsSW1nLmhlaWdodCAqIHNpemUgLyAxMDApO1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dCh7XHJcbiAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcih3aWR0aCwgaGVpZ2h0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3VzdG9tQ2VudGVyKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB3ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IChyb290Lm9mZnNldEhlaWdodCAtIGhlaWdodCkgLyAyO1xyXG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke3d9cHgsICR7aH1weCwgMClgO1xyXG4gIH1cclxuXHJcbiAgJzE6MScoKSB7XHJcbiAgICB0aGlzLnNldFNjYWxlKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXHJcbiAgICovXHJcbiAgZml0VG9TY3JlZW4oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IG1pbiA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyBzaXplLndpZHRoICogMTAwLFxyXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBzaXplLmhlaWdodCAqIDEwMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgLy8gaWYgKHJlc3VsdCA+PSAxKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBmaXQoKSB7XHJcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFNjYWxlKE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwKTtcclxuICB9XHJcblxyXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcclxuICAgIHRoaXMuZXZlbnREaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICB5OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC5jZW50ZXIueCxcclxuICAgICAgICB5OiBldmVudC5jZW50ZXIueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzZXQgPSB7XHJcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gcmVjdC54LFxyXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIHJlY3QueSxcclxuICAgICAgbGVmdDogKHJlY3QgYXMgQ2xpZW50UmVjdCkubGVmdCAtIGhvc3RSZWN0LngsXHJcbiAgICAgIHRvcDogKHJlY3QgYXMgQ2xpZW50UmVjdCkudG9wIC0gaG9zdFJlY3QueVxyXG4gICAgfTtcclxuICB9XHJcbiAgX21vdmUoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5hZGRpdGlvbmFsRXZlbnQpIHtcclxuICAgICAgdGhpcy5ldmVudERpcmVjdGlvbiA9IGV2ZW50LmFkZGl0aW9uYWxFdmVudDtcclxuICAgIH1cclxuICAgIGxldCB4LCB5O1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIC8vIGlmICh0aGlzLmV2ZW50RGlyZWN0aW9uID09PSAncGFubGVmdCcgfHwgdGhpcy5ldmVudERpcmVjdGlvbiA9PT0gJ3BhbnJpZ2h0Jykge1xyXG4gICAgICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcclxuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7IHggPSBldmVudC5jZW50ZXIueCAtIGhvc3RSZWN0LnggLSAodGhpcy5vZmZzZXQueCk7IH1cclxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxyXG5cclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQoe1xyXG4gICAgICB3aWR0aDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDApYFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDEwMDAwMCkgLyAxMDAwMDA7XHJcbiAgfVxyXG4gIC8qKisgKi9cclxuICB6b29tSW4oKSB7XHJcbiAgICAvLyBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSArIHRoaXMuem9vbVNjYWxlKTtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlICsgLjA1KTtcclxuICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgPD0gMSkge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKi0gKi9cclxuICB6b29tT3V0KCkge1xyXG4gICAgLy8gY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgLSB0aGlzLnpvb21TY2FsZSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSAtIC4wNSk7XHJcbiAgICBpZiAoc2NhbGUgPiB0aGlzLnpvb21TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maXQoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5zZXRJbWFnZVVybCh0aGlzLnNyYyk7XHJcbiAgfVxyXG4gIGNlbnRlcihpbWc/OiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoIWltZykge1xyXG4gICAgICBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdyA9IChyb290Lm9mZnNldFdpZHRoIC0gaW1nLndpZHRoKSAvIDI7XHJcbiAgICBjb25zdCBoID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaW1nLmhlaWdodCkgLyAyO1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICB3aWR0aDogYCR7aW1nLndpZHRofXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtpbWcuaGVpZ2h0fXB4YCxcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcihpbWcud2lkdGgsIGltZy5oZWlnaHQpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dChyZXN1bHQpO1xyXG4gIH1cclxuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZykge1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICBpZiAoIXNyYykgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChudWxsKTtcclxuICAgIH0pO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1nLm5leHQoaW1nKTtcclxuICAgICAgdGhpcy5sb2FkZWQuZW1pdChudWxsKTtcclxuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBtYXgoLi4udmFsdWVzOiBudW1iZXJbXSkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xyXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyh0aGlzLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gdGhpcy5tYXgoY29uZmlnLmhlaWdodCwgY29uZmlnLndpZHRoKSkgLyBNYXRoLmxvZygyKSkgLSAxO1xyXG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xyXG5cclxuICAgIC8qKkFycmF5IHN0ZXBzICovXHJcbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XHJcblxyXG4gICAgLyoqIENvbnRleHQgKi9cclxuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBjb25zdCBxID0gTWF0aC5wb3cocXVhbGl0eSAqIDEwLCBudW1TdGVwcykgLyBNYXRoLnBvdygxMCwgbnVtU3RlcHMpO1xyXG5cclxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cclxuICAgIGlmIChudW1TdGVwcykge1xyXG4gICAgICAvKiogU2V0IHNpemUgKi9cclxuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XHJcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcclxuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXHJcbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xyXG5cclxuICAgICAgLyoqIFN0ZXBzICovXHJcbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XHJcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxyXG4gICAgICAgICAgMCwgMCxcclxuICAgICAgICAgIHcsIGhcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0ZXAgZmluYWxcclxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcclxuICAgICAqL1xyXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcclxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcclxuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XHJcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcclxuICAgICAgMCwgMCxcclxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxyXG4gICAgICAwLCAwLFxyXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG9jO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JvcCBJbWFnZVxyXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcclxuICAgKi9cclxuICBjcm9wKCk6IENyb3BwZWRJbWFnZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlNjRJbWFnZTogdGhpcy5jcm9wcCgpLFxyXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlIHx8IHRoaXMuY29uZmlnLnR5cGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXByZWNhdGVkLCB1c2UgY3JvcCgpIGluc3RlYWRcclxuICAgKi9cclxuICBjcm9wcCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbXlDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBDT05GSUdfREVGQVVMVCwgdGhpcy5jb25maWcpO1xyXG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcclxuICAgIGNvbnN0IGxlZnQgPSAocmVjdC5sZWZ0IC0gaW1nLmxlZnQpO1xyXG4gICAgY29uc3QgdG9wID0gKHJlY3QudG9wIC0gaW1nLnRvcCk7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBjb25maWdDYW52YXMgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyB0aGlzLnNjYWxlO1xyXG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xyXG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWcsXHJcbiAgICAgIC0obGVmdCAvIHRoaXMuc2NhbGUpLCAtKHRvcCAvIHRoaXMuc2NhbGUpLFxyXG4gICAgKTtcclxuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgMC41KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcclxuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLmRlZmF1bHRUeXBlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVzdWx0ID0gKHVybCk7XHJcbiAgICB0aGlzLmNyb3BwZWQuZW1pdCh7XHJcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXHJcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxufVxyXG4iXX0=