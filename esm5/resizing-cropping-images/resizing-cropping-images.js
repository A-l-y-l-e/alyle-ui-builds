/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
/**
 * @record
 */
export function LyResizingCroppingImagesConfig() { }
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
/** @enum {number} */
var ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
export { ImageResolution };
ImageResolution[ImageResolution.Default] = 'Default';
ImageResolution[ImageResolution.OriginalImage] = 'OriginalImage';
/**
 * @record
 */
export function CroppedImage() { }
/** @type {?} */
CroppedImage.prototype.base64Image;
/** @type {?} */
CroppedImage.prototype.type;
/**
 * @record
 */
export function ImageState() { }
/** @type {?} */
ImageState.prototype.isLoaded;
/** @type {?} */
ImageState.prototype.isCrop;
/** @type {?} */
var CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImageResolution.Default
});
var LyResizingCroppingImages = /** @class */ (function () {
    function LyResizingCroppingImages(elementRef, cd) {
        var _this = this;
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
        var img = this.img;
        img.subscribe(function (imgElement) {
            if (imgElement) {
                _this._img = imgElement;
                /** *
                 * set zoom scale
                  @type {?} */
                var minScale = {
                    width: _this.config.width / _this._img.width * 100,
                    height: _this.config.height / _this._img.height * 100
                };
                _this.zoomScale = Math.max(minScale.width, minScale.height) / 100;
                _this.fit();
                _this.cd.markForCheck();
            }
        });
    }
    /**
     * @param {?} img
     * @return {?}
     */
    LyResizingCroppingImages.prototype.selectInputEvent = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        var _this = this;
        /** @type {?} */
        var _img = /** @type {?} */ (img.target);
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        var fileReader = new FileReader();
        this.fileName = _img.value.replace(/.*(\/|\\)/, '');
        /** Set type */
        this.defaultType = null;
        if (!this.config.type) {
            this.defaultType = _img.files[0].type;
        }
        this.isLoaded = false;
        this.isCropped = false;
        this._dragData.next(null);
        fileReader.addEventListener('loadend', function (loadEvent) {
            /** @type {?} */
            var originalImageUrl = (/** @type {?} */ (loadEvent.target)).result;
            _this.setImageUrl(originalImageUrl);
            _this.cd.markForCheck();
        });
        fileReader.readAsDataURL(_img.files[0]);
    };
    /**
     * @param {?} num
     * @return {?}
     */
    LyResizingCroppingImages.prototype.fixedNum = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return parseFloat(num.toFixed(0));
    };
    /**
     * @param {?} size
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setScale = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        // if (!(size > 0 && size <= 1)) { return; }
        this.scale = size;
        size = size * 100;
        /** @type {?} */
        var img = this.imgContainer.nativeElement.firstElementChild;
        /** @type {?} */
        var initialImg = this._img;
        /** @type {?} */
        var width = this.fixedNum(initialImg.width * size / 100);
        /** @type {?} */
        var height = this.fixedNum(initialImg.height * size / 100);
        this._dragData.next({
            width: width + "px",
            height: height + "px",
            transform: this.customCenter(width, height)
        });
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    LyResizingCroppingImages.prototype.customCenter = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        /** @type {?} */
        var root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        var w = (root.offsetWidth - width) / 2;
        /** @type {?} */
        var h = (root.offsetHeight - height) / 2;
        return "translate3d(" + w + "px, " + h + "px, 0)";
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype['1:1'] = /**
     * @return {?}
     */
    function () {
        this.setScale(1);
    };
    /**
     * Ajustar a la pantalla
     */
    /**
     * Ajustar a la pantalla
     * @return {?}
     */
    LyResizingCroppingImages.prototype.fitToScreen = /**
     * Ajustar a la pantalla
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        var min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        /** @type {?} */
        var size = {
            width: this._img.width,
            height: this._img.height
        };
        /** @type {?} */
        var minScale = {
            width: min.width / size.width * 100,
            height: min.height / size.height * 100
        };
        /** @type {?} */
        var result = Math.max(minScale.width, minScale.height) / 100;
        // if (result >= 1) {
        // this.setScale(1);
        // } else {
        this.setScale(result);
        // }
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype.fit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minScale = {
            width: this.config.width / this._img.width * 100,
            height: this.config.height / this._img.height * 100
        };
        this.setScale(Math.max(minScale.width, minScale.height) / 100);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyResizingCroppingImages.prototype._moveStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.eventDirection = null;
        /** @type {?} */
        var rect = this.imgContainer.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var target;
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyResizingCroppingImages.prototype._move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.additionalEvent) {
            this.eventDirection = event.additionalEvent;
        }
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var rect = this.imgContainer.nativeElement.getBoundingClientRect();
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
            transform: "translate3d(" + x + "px, " + y + "px, 0)"
        });
    };
    /**
     * @param {?} num
     * @return {?}
     */
    LyResizingCroppingImages.prototype.roundNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return Math.round(num * 100000) / 100000;
    };
    /**+ */
    /**
     * +
     * @return {?}
     */
    LyResizingCroppingImages.prototype.zoomIn = /**
     * +
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.roundNumber(this.scale + .05);
        if (scale > 0 && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.setScale(1);
        }
    };
    /**- */
    /**
     * -
     * @return {?}
     */
    LyResizingCroppingImages.prototype.zoomOut = /**
     * -
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.roundNumber(this.scale - .05);
        if (scale > this.zoomScale && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.fit();
        }
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setImageUrl(this.src);
    };
    /**
     * @param {?=} img
     * @return {?}
     */
    LyResizingCroppingImages.prototype.center = /**
     * @param {?=} img
     * @return {?}
     */
    function (img) {
        if (!img) {
            img = this.imgContainer.nativeElement.firstElementChild;
        }
        /** @type {?} */
        var root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        var w = (root.offsetWidth - img.width) / 2;
        /** @type {?} */
        var h = (root.offsetHeight - img.height) / 2;
        /** @type {?} */
        var result = {
            width: img.width + "px",
            height: img.height + "px",
            transform: this.customCenter(img.width, img.height)
        };
        this._dragData.next(result);
    };
    /**
     * @param {?} src
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setImageUrl = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        this.src = src;
        if (!src) {
            return;
        }
        /** @type {?} */
        var img = new Image;
        img.src = src;
        img.addEventListener('error', function (err) {
            _this.error.emit(null);
        });
        img.addEventListener('load', function () {
            _this.img.next(img);
            _this.loaded.emit(null);
            _this.isLoaded = true;
            _this.cd.markForCheck();
        });
    };
    /**
     * @param {...?} values
     * @return {?}
     */
    LyResizingCroppingImages.prototype.max = /**
     * @param {...?} values
     * @return {?}
     */
    function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.max.apply(Math, tslib_1.__spread(values));
    };
    /**
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    LyResizingCroppingImages.prototype.imageSmoothingQuality = /**
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    function (img, config, quality) {
        /** *
         * Calculate total number of steps needed
          @type {?} */
        var numSteps = Math.ceil(Math.log(this.max(img.width, img.height) / this.max(config.height, config.width)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /** *
         * Array steps
          @type {?} */
        var steps = Array.from(Array(numSteps).keys());
        /** *
         * Context
          @type {?} */
        var octx = img.getContext('2d');
        /** @type {?} */
        var q = Math.pow(quality * 10, numSteps) / Math.pow(10, numSteps);
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /** *
             * Set size
              @type {?} */
            var w_1 = img.width * quality;
            /** @type {?} */
            var h_1 = img.height * quality;
            /** Only the new img is shown. */
            octx.globalCompositeOperation = 'copy';
            /** Steps */
            (/** @type {?} */ (steps)).forEach(function (a, b) {
                octx.drawImage(img, 0, 0, w_1, h_1);
            });
        }
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        var oc = document.createElement('canvas');
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        var ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * (q), img.height * (q), 0, 0, oc.width, oc.height);
        return oc;
    };
    /**
     * Crop Image
     * Resizing & cropping image
     */
    /**
     * Crop Image
     * Resizing & cropping image
     * @return {?}
     */
    LyResizingCroppingImages.prototype.crop = /**
     * Crop Image
     * Resizing & cropping image
     * @return {?}
     */
    function () {
        return {
            base64Image: this.cropp(),
            type: this.defaultType || this.config.type
        };
    };
    /**
     * Deprecated, use crop() instead
     */
    /**
     * Deprecated, use crop() instead
     * @return {?}
     */
    LyResizingCroppingImages.prototype.cropp = /**
     * Deprecated, use crop() instead
     * @return {?}
     */
    function () {
        /** @type {?} */
        var myConfig = Object.assign({}, CONFIG_DEFAULT, this.config);
        /** @type {?} */
        var canvasElement = document.createElement('canvas');
        /** @type {?} */
        var rect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var img = /** @type {?} */ (this.imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
        /** @type {?} */
        var left = (rect.left - img.left);
        /** @type {?} */
        var top = (rect.top - img.top);
        /** @type {?} */
        var config = {
            width: myConfig.width,
            height: myConfig.height
        };
        /** @type {?} */
        var configCanvas = {
            width: this._img.width,
            height: this._img.height
        };
        canvasElement.width = config.width / this.scale;
        canvasElement.height = config.height / this.scale;
        /** @type {?} */
        var ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._img, -(left / this.scale), -(top / this.scale));
        /** @type {?} */
        var result = canvasElement;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, 0.5);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, 0.5);
        }
        /** @type {?} */
        var url;
        if (myConfig.type) {
            url = result.toDataURL("image/" + myConfig.type);
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
    };
    LyResizingCroppingImages.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'ly-cropping',
                    styles: [":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;overflow:hidden;position:relative;justify-content:center;align-items:center}.ly-img-container{cursor:move;position:absolute;top:0;left:0}.ly-img-container img{width:100%;height:100%;pointer-events:none}.ly-cropping-container{position:absolute;pointer-events:none;box-shadow:0 0 0 20000px rgba(0,0,0,.29)}.ly-cropping-container::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border:2px solid #fff}.ly-cropp-content{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;right:0;bottom:0}.ly-cropp-content /deep/ :not(input){pointer-events:none}.ly-cropp-content input{position:absolute;background:0 0;opacity:0;top:0;left:0;right:0;bottom:0;width:100%;height:100%}"],
                    template: "<div class=\"ly-img-container\" #_imgContainer\n(panstart)=\"_moveStart($event)\"\n(pan)=\"_move($event)\"\n[ngStyle]=\"dragData | async\">\n  <img *ngIf=\"isLoaded\"\n  [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" class=\"ly-cropping-container\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div class=\"ly-cropp-content\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                },] },
    ];
    /** @nocollapse */
    LyResizingCroppingImages.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return LyResizingCroppingImages;
}());
export { LyResizingCroppingImages };
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLEtBQUssRUFDTCxNQUFNLEVBS04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0IzRSxVQUFPOztJQUVQLGdCQUFhOzs7Z0NBRmIsT0FBTztnQ0FFUCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZixJQUFNLGNBQWMscUJBQW1DO0lBQ3JELEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEdBQUc7SUFDWCxNQUFNLEVBQUUsZUFBZSxDQUFDLE9BQU87Q0FDaEMsRUFBQzs7SUFxREEsa0NBQW9CLFVBQXNCLEVBQVUsRUFBcUI7UUFBekUsaUJBaUJDO1FBakJtQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7bUJBNUJoQyxJQUFJLGVBQWUsQ0FBbUIsSUFBSSxDQUFDO29CQVE1QyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7c0JBTXZCLGNBQWM7Ozs7c0JBSTdDLElBQUksWUFBWSxFQUFROzs7O3VCQUV2QixJQUFJLFlBQVksRUFBZ0I7Ozs7cUJBRWxDLElBQUksWUFBWSxFQUFRO3lCQUd1QyxJQUFJLE9BQU8sRUFBRTt5QkFFMUUsRUFBRTtRQUdwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBQzlDLElBQU0sR0FBRyxH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Q2I7Ozs7Z0JBNUVBLFVBQVU7Z0JBVVYsaUJBQWlCOzs7K0JBOEVoQixTQUFTLFNBQUMsZUFBZTtvQ0FDekIsU0FBUyxTQUFDLG9CQUFvQjtzQkFDOUIsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBSUwsTUFBTTswQkFFTixNQUFNO3dCQUVOLE1BQU07O21DQXpHVDs7U0FrRmEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRPRE86IGFkZCByZXNpemluZyBpbWFnZVxyXG4gKi9cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIE5nTW9kdWxlLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBEaXJlY3RpdmUsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgRm9ybXNNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCBTdWJzY3JpcHRpb24gLCBTdWJqZWN0ICwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cclxuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcclxuICBvdXRwdXQ/OiB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgfSB8IEltYWdlUmVzb2x1dGlvbjtcclxufVxyXG5leHBvcnQgZW51bSBJbWFnZVJlc29sdXRpb24ge1xyXG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXHJcbiAgRGVmYXVsdCxcclxuICAvKiogT25seSBjcm9wcGluZyAqL1xyXG4gIE9yaWdpbmFsSW1hZ2VcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENyb3BwZWRJbWFnZSB7XHJcbiAgYmFzZTY0SW1hZ2U6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVN0YXRlIHtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3A6IGJvb2xlYW47XHJcbn1cclxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8THlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnPntcclxuICB3aWR0aDogMjUwLFxyXG4gIGhlaWdodDogMjAwLFxyXG4gIG91dHB1dDogSW1hZ2VSZXNvbHV0aW9uLkRlZmF1bHRcclxufTtcclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdseS1jcm9wcGluZycsXHJcbiAgc3R5bGVzOiBbYDpob3N0ey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5seS1pbWctY29udGFpbmVye2N1cnNvcjptb3ZlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH0ubHktaW1nLWNvbnRhaW5lciBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lfS5seS1jcm9wcGluZy1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2hhZG93OjAgMCAwIDIwMDAwcHggcmdiYSgwLDAsMCwuMjkpfS5seS1jcm9wcGluZy1jb250YWluZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5seS1jcm9wcC1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0ubHktY3JvcHAtY29udGVudCAvZGVlcC8gOm5vdChpbnB1dCl7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktY3JvcHAtY29udGVudCBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOjAgMDtvcGFjaXR5OjA7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJseS1pbWctY29udGFpbmVyXCIgI19pbWdDb250YWluZXJcbihwYW5zdGFydCk9XCJfbW92ZVN0YXJ0KCRldmVudClcIlxuKHBhbik9XCJfbW92ZSgkZXZlbnQpXCJcbltuZ1N0eWxlXT1cImRyYWdEYXRhIHwgYXN5bmNcIj5cbiAgPGltZyAqbmdJZj1cImlzTG9hZGVkXCJcbiAgW3NyY109XCJzcmNcIj5cbjwvZGl2PlxuPGRpdiAjX2Nyb3BwaW5nQ29udGFpbmVyICpuZ0lmPVwiaXNMb2FkZWQ7IGVsc2UgY29udGVudFwiIGNsYXNzPVwibHktY3JvcHBpbmctY29udGFpbmVyXCIgW25nU3R5bGVdPVwie1xuICB3aWR0aDogY29uZmlnLndpZHRoICsgJ3B4JyxcbiAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0ICsgJ3B4J1xufVwiPjwvZGl2PlxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8ZGl2IGNsYXNzPVwibHktY3JvcHAtY29udGVudFwiPlxuICAgIDxpbnB1dCAjX2ZpbGVJbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwic2VsZWN0SW5wdXRFdmVudCgkZXZlbnQpXCIgYWNjZXB0PVwiaW1hZ2UvKlwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPmAsXHJcbiB9KVxyXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgaW1nOiBCZWhhdmlvclN1YmplY3Q8SFRNTEltYWdlRWxlbWVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xyXG4gIHJlc3VsdDogc3RyaW5nO1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcclxuICBwcml2YXRlIGV2ZW50RGlyZWN0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzY2FsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3NyYzogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBpbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29uZmlnOiBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBDT05GSUdfREVGQVVMVDtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XHJcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDcm9wcGVkSW1hZ2U+KCk7XHJcbiAgLyoqIE9uIGVycm9yIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RyYWdEYXRhOiBTdWJqZWN0PHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ0RhdGE6IE9ic2VydmFibGU8e3dpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCB0cmFuc2Zvcm06IHN0cmluZ30+O1xyXG4gIHByaXZhdGUgem9vbVNjYWxlID0gLjE7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgIHRoaXMuZHJhZ0RhdGEgPSB0aGlzLl9kcmFnRGF0YS5hc09ic2VydmFibGUoKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nO1xyXG4gICAgaW1nLnN1YnNjcmliZSgoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoaW1nRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XHJcbiAgICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXHJcbiAgICAgICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuem9vbVNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5maXQoKTtcclxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xyXG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHRoaXMuZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcclxuXHJcbiAgICAvKiogU2V0IHR5cGUgKi9cclxuICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBudWxsO1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dChudWxsKTtcclxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcclxuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdDtcclxuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXNbMF0pO1xyXG4gIH1cclxuICBmaXhlZE51bShudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtLnRvRml4ZWQoMCkpO1xyXG4gIH1cclxuICBzZXRTY2FsZShzaXplOiBudW1iZXIpIHtcclxuICAgIC8vIGlmICghKHNpemUgPiAwICYmIHNpemUgPD0gMSkpIHsgcmV0dXJuOyB9XHJcbiAgICB0aGlzLnNjYWxlID0gc2l6ZTtcclxuICAgIHNpemUgPSBzaXplICogMTAwO1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IGluaXRpYWxJbWcgPSB0aGlzLl9pbWc7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZml4ZWROdW0oaW5pdGlhbEltZy53aWR0aCAqIHNpemUgLyAxMDApO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5maXhlZE51bShpbml0aWFsSW1nLmhlaWdodCAqIHNpemUgLyAxMDApO1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dCh7XHJcbiAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcih3aWR0aCwgaGVpZ2h0KVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgY3VzdG9tQ2VudGVyKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB3ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IChyb290Lm9mZnNldEhlaWdodCAtIGhlaWdodCkgLyAyO1xyXG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke3d9cHgsICR7aH1weCwgMClgO1xyXG4gIH1cclxuXHJcbiAgJzE6MScoKSB7XHJcbiAgICB0aGlzLnNldFNjYWxlKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXHJcbiAgICovXHJcbiAgZml0VG9TY3JlZW4oKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IG1pbiA9IHtcclxuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyBzaXplLndpZHRoICogMTAwLFxyXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBzaXplLmhlaWdodCAqIDEwMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgLy8gaWYgKHJlc3VsdCA+PSAxKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBmaXQoKSB7XHJcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFNjYWxlKE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwKTtcclxuICB9XHJcblxyXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcclxuICAgIHRoaXMuZXZlbnREaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICB5OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC5jZW50ZXIueCxcclxuICAgICAgICB5OiBldmVudC5jZW50ZXIueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzZXQgPSB7XHJcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gcmVjdC54LFxyXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIHJlY3QueSxcclxuICAgICAgbGVmdDogKHJlY3QgYXMgQ2xpZW50UmVjdCkubGVmdCAtIGhvc3RSZWN0LngsXHJcbiAgICAgIHRvcDogKHJlY3QgYXMgQ2xpZW50UmVjdCkudG9wIC0gaG9zdFJlY3QueVxyXG4gICAgfTtcclxuICB9XHJcbiAgX21vdmUoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5hZGRpdGlvbmFsRXZlbnQpIHtcclxuICAgICAgdGhpcy5ldmVudERpcmVjdGlvbiA9IGV2ZW50LmFkZGl0aW9uYWxFdmVudDtcclxuICAgIH1cclxuICAgIGxldCB4LCB5O1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIC8vIGlmICh0aGlzLmV2ZW50RGlyZWN0aW9uID09PSAncGFubGVmdCcgfHwgdGhpcy5ldmVudERpcmVjdGlvbiA9PT0gJ3BhbnJpZ2h0Jykge1xyXG4gICAgICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcclxuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7IHggPSBldmVudC5jZW50ZXIueCAtIGhvc3RSZWN0LnggLSAodGhpcy5vZmZzZXQueCk7IH1cclxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxyXG5cclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQoe1xyXG4gICAgICB3aWR0aDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDApYFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDEwMDAwMCkgLyAxMDAwMDA7XHJcbiAgfVxyXG4gIC8qKisgKi9cclxuICB6b29tSW4oKSB7XHJcbiAgICAvLyBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSArIHRoaXMuem9vbVNjYWxlKTtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlICsgLjA1KTtcclxuICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgPD0gMSkge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKi0gKi9cclxuICB6b29tT3V0KCkge1xyXG4gICAgLy8gY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgLSB0aGlzLnpvb21TY2FsZSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSAtIC4wNSk7XHJcbiAgICBpZiAoc2NhbGUgPiB0aGlzLnpvb21TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maXQoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5zZXRJbWFnZVVybCh0aGlzLnNyYyk7XHJcbiAgfVxyXG4gIGNlbnRlcihpbWc/OiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoIWltZykge1xyXG4gICAgICBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdyA9IChyb290Lm9mZnNldFdpZHRoIC0gaW1nLndpZHRoKSAvIDI7XHJcbiAgICBjb25zdCBoID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaW1nLmhlaWdodCkgLyAyO1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICB3aWR0aDogYCR7aW1nLndpZHRofXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtpbWcuaGVpZ2h0fXB4YCxcclxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcihpbWcud2lkdGgsIGltZy5oZWlnaHQpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dChyZXN1bHQpO1xyXG4gIH1cclxuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZykge1xyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICBpZiAoIXNyYykgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChudWxsKTtcclxuICAgIH0pO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW1nLm5leHQoaW1nKTtcclxuICAgICAgdGhpcy5sb2FkZWQuZW1pdChudWxsKTtcclxuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBtYXgoLi4udmFsdWVzOiBudW1iZXJbXSkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xyXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyh0aGlzLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gdGhpcy5tYXgoY29uZmlnLmhlaWdodCwgY29uZmlnLndpZHRoKSkgLyBNYXRoLmxvZygyKSkgLSAxO1xyXG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xyXG5cclxuICAgIC8qKkFycmF5IHN0ZXBzICovXHJcbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XHJcblxyXG4gICAgLyoqIENvbnRleHQgKi9cclxuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBjb25zdCBxID0gTWF0aC5wb3cocXVhbGl0eSAqIDEwLCBudW1TdGVwcykgLyBNYXRoLnBvdygxMCwgbnVtU3RlcHMpO1xyXG5cclxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cclxuICAgIGlmIChudW1TdGVwcykge1xyXG4gICAgICAvKiogU2V0IHNpemUgKi9cclxuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XHJcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcclxuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXHJcbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xyXG5cclxuICAgICAgLyoqIFN0ZXBzICovXHJcbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XHJcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxyXG4gICAgICAgICAgMCwgMCxcclxuICAgICAgICAgIHcsIGhcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0ZXAgZmluYWxcclxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcclxuICAgICAqL1xyXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcclxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcclxuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XHJcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcclxuICAgICAgMCwgMCxcclxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxyXG4gICAgICAwLCAwLFxyXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG9jO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JvcCBJbWFnZVxyXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcclxuICAgKi9cclxuICBjcm9wKCk6IENyb3BwZWRJbWFnZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYXNlNjRJbWFnZTogdGhpcy5jcm9wcCgpLFxyXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlIHx8IHRoaXMuY29uZmlnLnR5cGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXByZWNhdGVkLCB1c2UgY3JvcCgpIGluc3RlYWRcclxuICAgKi9cclxuICBjcm9wcCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbXlDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBDT05GSUdfREVGQVVMVCwgdGhpcy5jb25maWcpO1xyXG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcclxuICAgIGNvbnN0IGxlZnQgPSAocmVjdC5sZWZ0IC0gaW1nLmxlZnQpO1xyXG4gICAgY29uc3QgdG9wID0gKHJlY3QudG9wIC0gaW1nLnRvcCk7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBjb25maWdDYW52YXMgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyB0aGlzLnNjYWxlO1xyXG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xyXG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWcsXHJcbiAgICAgIC0obGVmdCAvIHRoaXMuc2NhbGUpLCAtKHRvcCAvIHRoaXMuc2NhbGUpLFxyXG4gICAgKTtcclxuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgMC41KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIDAuNSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcclxuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLmRlZmF1bHRUeXBlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVzdWx0ID0gKHVybCk7XHJcbiAgICB0aGlzLmNyb3BwZWQuZW1pdCh7XHJcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXHJcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxufVxyXG4iXX0=