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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUcsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQjVELFVBQU87O0lBRVAsZ0JBQWE7OztnQ0FGYixPQUFPO2dDQUVQLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVmLElBQU0sY0FBYyxxQkFBbUM7SUFDckQsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztJQUNYLE1BQU0sRUFBRSxlQUFlLENBQUMsT0FBTztDQUNoQyxFQUFDOztJQXFEQSxrQ0FBb0IsVUFBc0IsRUFBVSxFQUFxQjtRQUF6RSxpQkFpQkM7UUFqQm1CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjttQkE1QmhDLElBQUksZUFBZSxDQUFtQixJQUFJLENBQUM7b0JBUTVDLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQztzQkFNdkIsY0FBYzs7OztzQkFJN0MsSUFBSSxZQUFZLEVBQVE7Ozs7dUJBRXZCLElBQUksWUFBWSxFQUFnQjs7OztxQkFFbEMsSUFBSSxZQUFZLEVBQVE7eUJBR3VDLElBQUksT0FBTyxFQUFFO3lCQUUxRSxFQUFFO1FBR3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFDOUMsSUFBTSxHQUFHLEdB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Yjs7OztnQkFoRUEsVUFBVTtnQkFJVixpQkFBaUI7OzsrQkF3RWhCLFNBQVMsU0FBQyxlQUFlO29DQUN6QixTQUFTLFNBQUMsb0JBQW9CO3NCQUM5QixLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFJTCxNQUFNOzBCQUVOLE1BQU07d0JBRU4sTUFBTTs7bUNBN0ZUOztTQXNFYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVE9ETzogYWRkIHJlc2l6aW5nIGltYWdlXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgU3ViamVjdCAsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnIHtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXHJcbiAgdHlwZT86IHN0cmluZztcclxuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnICovXHJcbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XHJcbiAgb3V0cHV0Pzoge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gIH0gfCBJbWFnZVJlc29sdXRpb247XHJcbn1cclxuZXhwb3J0IGVudW0gSW1hZ2VSZXNvbHV0aW9uIHtcclxuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xyXG4gIERlZmF1bHQsXHJcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cclxuICBPcmlnaW5hbEltYWdlXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDcm9wcGVkSW1hZ2Uge1xyXG4gIGJhc2U2NEltYWdlOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTdGF0ZSB7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgaXNDcm9wOiBib29sZWFuO1xyXG59XHJcbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZz57XHJcbiAgd2lkdGg6IDI1MCxcclxuICBoZWlnaHQ6IDIwMCxcclxuICBvdXRwdXQ6IEltYWdlUmVzb2x1dGlvbi5EZWZhdWx0XHJcbn07XHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnbHktY3JvcHBpbmcnLFxyXG4gIHN0eWxlczogW2A6aG9zdHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ZGlzcGxheTpmbGV4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubHktaW1nLWNvbnRhaW5lcntjdXJzb3I6bW92ZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9Lmx5LWltZy1jb250YWluZXIgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktY3JvcHBpbmctY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNoYWRvdzowIDAgMCAyMDAwMHB4IHJnYmEoMCwwLDAsLjI5KX0ubHktY3JvcHBpbmctY29udGFpbmVyOjphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JvcmRlcjoycHggc29saWQgI2ZmZn0ubHktY3JvcHAtY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9Lmx5LWNyb3BwLWNvbnRlbnQgL2RlZXAvIDpub3QoaW5wdXQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWNyb3BwLWNvbnRlbnQgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDowIDA7b3BhY2l0eTowO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibHktaW1nLWNvbnRhaW5lclwiICNfaW1nQ29udGFpbmVyXG4ocGFuc3RhcnQpPVwiX21vdmVTdGFydCgkZXZlbnQpXCJcbihwYW4pPVwiX21vdmUoJGV2ZW50KVwiXG5bbmdTdHlsZV09XCJkcmFnRGF0YSB8IGFzeW5jXCI+XG4gIDxpbWcgKm5nSWY9XCJpc0xvYWRlZFwiXG4gIFtzcmNdPVwic3JjXCI+XG48L2Rpdj5cbjxkaXYgI19jcm9wcGluZ0NvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVkOyBlbHNlIGNvbnRlbnRcIiBjbGFzcz1cImx5LWNyb3BwaW5nLWNvbnRhaW5lclwiIFtuZ1N0eWxlXT1cIntcbiAgd2lkdGg6IGNvbmZpZy53aWR0aCArICdweCcsXG4gIGhlaWdodDogY29uZmlnLmhlaWdodCArICdweCdcbn1cIj48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjY29udGVudD5cbiAgPGRpdiBjbGFzcz1cImx5LWNyb3BwLWNvbnRlbnRcIj5cbiAgICA8aW5wdXQgI19maWxlSW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cInNlbGVjdElucHV0RXZlbnQoJGV2ZW50KVwiIGFjY2VwdD1cImltYWdlLypcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gfSlcclxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGltZzogQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIVE1MSW1hZ2VFbGVtZW50PihudWxsKTtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvZmZzZXQ6IHt4OiBudW1iZXIsIHk6IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn07XHJcbiAgcHJpdmF0ZSBldmVudERpcmVjdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2NhbGU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zcmM6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG5cclxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIGNyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnID0gQ09ORklHX0RFRkFVTFQ7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xyXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXHJcbiAgQE91dHB1dCgpIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q3JvcHBlZEltYWdlPigpO1xyXG4gIC8qKiBPbiBlcnJvciBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFR5cGU6IHN0cmluZztcclxuICBwcml2YXRlIF9kcmFnRGF0YTogU3ViamVjdDx7d2lkdGg6IHN0cmluZywgaGVpZ2h0OiBzdHJpbmcsIHRyYW5zZm9ybTogc3RyaW5nfT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGRyYWdEYXRhOiBPYnNlcnZhYmxlPHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PjtcclxuICBwcml2YXRlIHpvb21TY2FsZSA9IC4xO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICB0aGlzLmRyYWdEYXRhID0gdGhpcy5fZHJhZ0RhdGEuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZztcclxuICAgIGltZy5zdWJzY3JpYmUoKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xyXG4gICAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xyXG4gICAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnpvb21TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuZml0KCk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcclxuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICB0aGlzLmZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XHJcblxyXG4gICAgLyoqIFNldCB0eXBlICovXHJcbiAgICB0aGlzLmRlZmF1bHRUeXBlID0gbnVsbDtcclxuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQobnVsbCk7XHJcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQ7XHJcbiAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcclxuICB9XHJcbiAgZml4ZWROdW0obnVtOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bS50b0ZpeGVkKDApKTtcclxuICB9XHJcbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICAvLyBpZiAoIShzaXplID4gMCAmJiBzaXplIDw9IDEpKSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5zY2FsZSA9IHNpemU7XHJcbiAgICBzaXplID0gc2l6ZSAqIDEwMDtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nO1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmZpeGVkTnVtKGluaXRpYWxJbWcud2lkdGggKiBzaXplIC8gMTAwKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZml4ZWROdW0oaW5pdGlhbEltZy5oZWlnaHQgKiBzaXplIC8gMTAwKTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQoe1xyXG4gICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIod2lkdGgsIGhlaWdodClcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGN1c3RvbUNlbnRlcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgdyA9IChyb290Lm9mZnNldFdpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgIGNvbnN0IGggPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcclxuICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHt3fXB4LCAke2h9cHgsIDApYDtcclxuICB9XHJcblxyXG4gICcxOjEnKCkge1xyXG4gICAgdGhpcy5zZXRTY2FsZSgxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxyXG4gICAqL1xyXG4gIGZpdFRvU2NyZWVuKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBtaW4gPSB7XHJcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcclxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gc2l6ZS5oZWlnaHQgKiAxMDBcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcclxuICAgIC8vIGlmIChyZXN1bHQgPj0gMSkge1xyXG4gICAgICAvLyB0aGlzLnNldFNjYWxlKDEpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZml0KCkge1xyXG4gICAgY29uc3QgbWluU2NhbGUgPSB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRTY2FsZShNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMCk7XHJcbiAgfVxyXG5cclxuICBfbW92ZVN0YXJ0KGV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50RGlyZWN0aW9uID0gbnVsbDtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCB0YXJnZXQ7XHJcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgeTogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXQgPSB7XHJcbiAgICAgICAgeDogZXZlbnQuY2VudGVyLngsXHJcbiAgICAgICAgeTogZXZlbnQuY2VudGVyLnlcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2V0ID0ge1xyXG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIHJlY3QueCxcclxuICAgICAgeTogZXZlbnQuY2VudGVyLnkgLSByZWN0LnksXHJcbiAgICAgIGxlZnQ6IChyZWN0IGFzIENsaWVudFJlY3QpLmxlZnQgLSBob3N0UmVjdC54LFxyXG4gICAgICB0b3A6IChyZWN0IGFzIENsaWVudFJlY3QpLnRvcCAtIGhvc3RSZWN0LnlcclxuICAgIH07XHJcbiAgfVxyXG4gIF9tb3ZlKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuYWRkaXRpb25hbEV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZXZlbnREaXJlY3Rpb24gPSBldmVudC5hZGRpdGlvbmFsRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgeCwgeTtcclxuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xyXG4gICAgICAvLyBpZiAodGhpcy5ldmVudERpcmVjdGlvbiA9PT0gJ3BhbmxlZnQnIHx8IHRoaXMuZXZlbnREaXJlY3Rpb24gPT09ICdwYW5yaWdodCcpIHtcclxuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XHJcbiAgICAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gKHRoaXMub2Zmc2V0LngpOyB9XHJcbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSBldmVudC5jZW50ZXIueSAtIGhvc3RSZWN0LnkgLSAodGhpcy5vZmZzZXQueSk7IH1cclxuXHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHtcclxuICAgICAgd2lkdGg6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIHJvdW5kTnVtYmVyKG51bTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xyXG4gIH1cclxuICAvKiorICovXHJcbiAgem9vbUluKCkge1xyXG4gICAgLy8gY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgKyB0aGlzLnpvb21TY2FsZSk7XHJcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSArIC4wNSk7XHJcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiotICovXHJcbiAgem9vbU91dCgpIHtcclxuICAgIC8vIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlIC0gdGhpcy56b29tU2NhbGUpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgLSAuMDUpO1xyXG4gICAgaWYgKHNjYWxlID4gdGhpcy56b29tU2NhbGUgJiYgc2NhbGUgPD0gMSkge1xyXG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZml0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0SW1hZ2VVcmwodGhpcy5zcmMpO1xyXG4gIH1cclxuICBjZW50ZXIoaW1nPzogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKCFpbWcpIHtcclxuICAgICAgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHcgPSAocm9vdC5vZmZzZXRXaWR0aCAtIGltZy53aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IChyb290Lm9mZnNldEhlaWdodCAtIGltZy5oZWlnaHQpIC8gMjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgd2lkdGg6IGAke2ltZy53aWR0aH1weGAsXHJcbiAgICAgIGhlaWdodDogYCR7aW1nLmhlaWdodH1weGAsXHJcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxyXG4gICAgfTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQocmVzdWx0KTtcclxuICB9XHJcbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yLmVtaXQobnVsbCk7XHJcbiAgICB9KTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmltZy5uZXh0KGltZyk7XHJcbiAgICAgIHRoaXMubG9hZGVkLmVtaXQobnVsbCk7XHJcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcclxuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cclxuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcclxuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcclxuXHJcbiAgICAvKipBcnJheSBzdGVwcyAqL1xyXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xyXG5cclxuICAgIC8qKiBDb250ZXh0ICovXHJcbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcclxuXHJcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXHJcbiAgICBpZiAobnVtU3RlcHMpIHtcclxuICAgICAgLyoqIFNldCBzaXplICovXHJcbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xyXG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XHJcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xyXG4gICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcclxuXHJcbiAgICAgIC8qKiBTdGVwcyAqL1xyXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoYSwgYikgPT4ge1xyXG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcclxuICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICB3LCBoXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGVwIGZpbmFsXHJcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXHJcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XHJcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xyXG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIGltZy53aWR0aCAqIChxKSwgaW1nLmhlaWdodCAqIChxKSxcclxuICAgICAgMCwgMCxcclxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHJldHVybiBvYztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyb3AgSW1hZ2VcclxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXHJcbiAgICovXHJcbiAgY3JvcCgpOiBDcm9wcGVkSW1hZ2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFzZTY0SW1hZ2U6IHRoaXMuY3JvcHAoKSxcclxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCB0aGlzLmNvbmZpZy50eXBlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVwcmVjYXRlZCwgdXNlIGNyb3AoKSBpbnN0ZWFkXHJcbiAgICovXHJcbiAgY3JvcHAoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG15Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgQ09ORklHX0RFRkFVTFQsIHRoaXMuY29uZmlnKTtcclxuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XHJcbiAgICBjb25zdCBsZWZ0ID0gKHJlY3QubGVmdCAtIGltZy5sZWZ0KTtcclxuICAgIGNvbnN0IHRvcCA9IChyZWN0LnRvcCAtIGltZy50b3ApO1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29uZmlnQ2FudmFzID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5zY2FsZTtcclxuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcclxuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxyXG4gICAgICAtKGxlZnQgLyB0aGlzLnNjYWxlKSwgLSh0b3AgLyB0aGlzLnNjYWxlKSxcclxuICAgICk7XHJcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcclxuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIDAuNSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHVybDtcclxuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XHJcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYGltYWdlLyR7bXlDb25maWcudHlwZX1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5kZWZhdWx0VHlwZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xyXG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoe1xyXG4gICAgICBiYXNlNjRJbWFnZTogdXJsLFxyXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbn1cclxuIl19