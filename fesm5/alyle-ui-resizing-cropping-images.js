import { __spread } from 'tslib';
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LyTheme2, LyHammerGestureConfig } from '@alyle/ui';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
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
            content: "''",
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
var ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
ImageResolution[ImageResolution.Default] = 'Default';
ImageResolution[ImageResolution.OriginalImage] = 'OriginalImage';
/** @type {?} */
var CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImageResolution.Default
});
var LyResizingCroppingImages = /** @class */ (function () {
    function LyResizingCroppingImages(_renderer, theme, elementRef, cd) {
        var _this = this;
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
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var rect = this.imgContainer.nativeElement.getBoundingClientRect();
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
        return Math.max.apply(Math, __spread(values));
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
                    template: "<div [className]=\"classes.imgContainer\" #_imgContainer\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\"\n[ngStyle]=\"dragData | async\">\n  <img *ngIf=\"isLoaded\"\n  [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>"
                },] },
    ];
    /** @nocollapse */
    LyResizingCroppingImages.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: LyTheme2 },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyResizingCroppingImageModule = /** @class */ (function () {
    function LyResizingCroppingImageModule() {
    }
    LyResizingCroppingImageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [LyResizingCroppingImages],
                    providers: [
                        { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
                    ],
                    declarations: [LyResizingCroppingImages]
                },] },
    ];
    return LyResizingCroppingImageModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUT0RPOiBhZGQgcmVzaXppbmcgaW1hZ2VcclxuICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgU3ViamVjdCAsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xyXG5cclxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfSxcclxuICBpbWdDb250YWluZXI6IHtcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgJyYgPiBpbWcnOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcm9wcGluZ0NvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC4yOSknLFxyXG4gICAgJyY6OmFmdGVyJzoge1xyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JvcHBDb250ZW50OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xyXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnJiA+IGlucHV0Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICByaWdodDogMCxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCAqL1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xyXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xyXG4gIG91dHB1dD86IHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICB9IHwgSW1hZ2VSZXNvbHV0aW9uO1xyXG59XHJcbmV4cG9ydCBlbnVtIEltYWdlUmVzb2x1dGlvbiB7XHJcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cclxuICBEZWZhdWx0LFxyXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXHJcbiAgT3JpZ2luYWxJbWFnZVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcHBlZEltYWdlIHtcclxuICBiYXNlNjRJbWFnZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RhdGUge1xyXG4gIGlzTG9hZGVkOiBib29sZWFuO1xyXG4gIGlzQ3JvcDogYm9vbGVhbjtcclxufVxyXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWc+e1xyXG4gIHdpZHRoOiAyNTAsXHJcbiAgaGVpZ2h0OiAyMDAsXHJcbiAgb3V0cHV0OiBJbWFnZVJlc29sdXRpb24uRGVmYXVsdFxyXG59O1xyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2x5LWNyb3BwaW5nJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmltZ0NvbnRhaW5lclwiICNfaW1nQ29udGFpbmVyXG4oc2xpZGVzdGFydCk9XCJfbW92ZVN0YXJ0KCRldmVudClcIlxuKHNsaWRlKT1cIl9tb3ZlKCRldmVudClcIlxuW25nU3R5bGVdPVwiZHJhZ0RhdGEgfCBhc3luY1wiPlxuICA8aW1nICpuZ0lmPVwiaXNMb2FkZWRcIlxuICBbc3JjXT1cInNyY1wiPlxuPC9kaXY+XG48ZGl2ICNfY3JvcHBpbmdDb250YWluZXIgKm5nSWY9XCJpc0xvYWRlZDsgZWxzZSBjb250ZW50XCIgW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNyb3BwaW5nQ29udGFpbmVyXCIgW25nU3R5bGVdPVwie1xuICB3aWR0aDogY29uZmlnLndpZHRoICsgJ3B4JyxcbiAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0ICsgJ3B4J1xufVwiPjwvZGl2PlxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5jcm9wcENvbnRlbnRcIj5cbiAgICA8aW5wdXQgI19maWxlSW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cInNlbGVjdElucHV0RXZlbnQoJGV2ZW50KVwiIGFjY2VwdD1cImltYWdlLypcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5gXHJcbiB9KVxyXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseS1pbWFnZS1jcm9wcGVyJywgU1RZTEVfUFJJT1JJVFkpO1xyXG4gIGltZzogQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIVE1MSW1hZ2VFbGVtZW50PihudWxsKTtcclxuICByZXN1bHQ6IHN0cmluZztcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBvZmZzZXQ6IHt4OiBudW1iZXIsIHk6IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn07XHJcbiAgcHJpdmF0ZSBzY2FsZTogbnVtYmVyO1xyXG5cclxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIGNyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnID0gQ09ORklHX0RFRkFVTFQ7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xyXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXHJcbiAgQE91dHB1dCgpIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q3JvcHBlZEltYWdlPigpO1xyXG4gIC8qKiBPbiBlcnJvciBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFR5cGU6IHN0cmluZztcclxuICBwcml2YXRlIF9kcmFnRGF0YTogU3ViamVjdDx7d2lkdGg6IHN0cmluZywgaGVpZ2h0OiBzdHJpbmcsIHRyYW5zZm9ybTogc3RyaW5nfT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGRyYWdEYXRhOiBPYnNlcnZhYmxlPHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PjtcclxuICBwcml2YXRlIHpvb21TY2FsZSA9IC4xO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xyXG4gICAgdGhpcy5kcmFnRGF0YSA9IHRoaXMuX2RyYWdEYXRhLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWc7XHJcbiAgICBpbWcuc3Vic2NyaWJlKChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChpbWdFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcclxuICAgICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cclxuICAgICAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy56b29tU2NhbGUgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcclxuICAgICAgICB0aGlzLmZpdCgpO1xyXG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgdGhpcy5maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xyXG5cclxuICAgIC8qKiBTZXQgdHlwZSAqL1xyXG4gICAgdGhpcy5kZWZhdWx0VHlwZSA9IG51bGw7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXNbMF0udHlwZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KG51bGwpO1xyXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0O1xyXG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XHJcbiAgfVxyXG4gIGZpeGVkTnVtKG51bTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0udG9GaXhlZCgwKSk7XHJcbiAgfVxyXG4gIHNldFNjYWxlKHNpemU6IG51bWJlcikge1xyXG4gICAgLy8gaWYgKCEoc2l6ZSA+IDAgJiYgc2l6ZSA8PSAxKSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuc2NhbGUgPSBzaXplO1xyXG4gICAgc2l6ZSA9IHNpemUgKiAxMDA7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZztcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5maXhlZE51bShpbml0aWFsSW1nLndpZHRoICogc2l6ZSAvIDEwMCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmZpeGVkTnVtKGluaXRpYWxJbWcuaGVpZ2h0ICogc2l6ZSAvIDEwMCk7XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHtcclxuICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBjdXN0b21DZW50ZXIod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHcgPSAocm9vdC5vZmZzZXRXaWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICBjb25zdCBoID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7d31weCwgJHtofXB4LCAwKWA7XHJcbiAgfVxyXG5cclxuICAnMToxJygpIHtcclxuICAgIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcclxuICAgKi9cclxuICBmaXRUb1NjcmVlbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgbWluID0ge1xyXG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgd2lkdGg6IG1pbi53aWR0aCAvIHNpemUud2lkdGggKiAxMDAsXHJcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XHJcbiAgICAvLyBpZiAocmVzdWx0ID49IDEpIHtcclxuICAgICAgLy8gdGhpcy5zZXRTY2FsZSgxKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGZpdCgpIHtcclxuICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0U2NhbGUoTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDApO1xyXG4gIH1cclxuXHJcbiAgX21vdmVTdGFydChldmVudCkge1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICB5OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC5jZW50ZXIueCxcclxuICAgICAgICB5OiBldmVudC5jZW50ZXIueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzZXQgPSB7XHJcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gcmVjdC54LFxyXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIHJlY3QueSxcclxuICAgICAgbGVmdDogKHJlY3QgYXMgQ2xpZW50UmVjdCkubGVmdCAtIGhvc3RSZWN0LngsXHJcbiAgICAgIHRvcDogKHJlY3QgYXMgQ2xpZW50UmVjdCkudG9wIC0gaG9zdFJlY3QueVxyXG4gICAgfTtcclxuICB9XHJcbiAgX21vdmUoZXZlbnQpIHtcclxuICAgIGxldCB4LCB5O1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xyXG4gICAgICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxyXG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gKHRoaXMub2Zmc2V0LnkpOyB9XHJcblxyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dCh7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSByb3VuZE51bWJlcihudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMTAwMDAwKSAvIDEwMDAwMDtcclxuICB9XHJcbiAgLyoqKyAqL1xyXG4gIHpvb21JbigpIHtcclxuICAgIC8vIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlICsgdGhpcy56b29tU2NhbGUpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgKyAuMDUpO1xyXG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqLSAqL1xyXG4gIHpvb21PdXQoKSB7XHJcbiAgICAvLyBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSAtIHRoaXMuem9vbVNjYWxlKTtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlIC0gLjA1KTtcclxuICAgIGlmIChzY2FsZSA+IHRoaXMuem9vbVNjYWxlICYmIHNjYWxlIDw9IDEpIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNldEltYWdlVXJsKHRoaXMuc3JjKTtcclxuICB9XHJcbiAgY2VudGVyKGltZz86IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmICghaW1nKSB7XHJcbiAgICAgIGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB3ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSBpbWcud2lkdGgpIC8gMjtcclxuICAgIGNvbnN0IGggPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBpbWcuaGVpZ2h0KSAvIDI7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgIHdpZHRoOiBgJHtpbWcud2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2ltZy5oZWlnaHR9cHhgLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKGltZy53aWR0aCwgaW1nLmhlaWdodClcclxuICAgIH07XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHJlc3VsdCk7XHJcbiAgfVxyXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNyYyA9IHNyYztcclxuICAgIGlmICghc3JjKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgdGhpcy5lcnJvci5lbWl0KG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5pbWcubmV4dChpbWcpO1xyXG4gICAgICB0aGlzLmxvYWRlZC5lbWl0KG51bGwpO1xyXG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIG1heCguLi52YWx1ZXM6IG51bWJlcltdKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXHJcbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKHRoaXMubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyB0aGlzLm1heChjb25maWcuaGVpZ2h0LCBjb25maWcud2lkdGgpKSAvIE1hdGgubG9nKDIpKSAtIDE7XHJcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XHJcblxyXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cclxuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcclxuXHJcbiAgICAvKiogQ29udGV4dCAqL1xyXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IHEgPSBNYXRoLnBvdyhxdWFsaXR5ICogMTAsIG51bVN0ZXBzKSAvIE1hdGgucG93KDEwLCBudW1TdGVwcyk7XHJcblxyXG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xyXG4gICAgaWYgKG51bVN0ZXBzKSB7XHJcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xyXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcclxuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xyXG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cclxuICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XHJcblxyXG4gICAgICAvKiogU3RlcHMgKi9cclxuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKGEsIGIpID0+IHtcclxuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXHJcbiAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgdywgaFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RlcCBmaW5hbFxyXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxyXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xyXG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcclxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxyXG4gICAgICAwLCAwLFxyXG4gICAgICBpbWcud2lkdGggKiAocSksIGltZy5oZWlnaHQgKiAocSksXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcclxuICAgICk7XHJcbiAgICByZXR1cm4gb2M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcm9wIEltYWdlXHJcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxyXG4gICAqL1xyXG4gIGNyb3AoKTogQ3JvcHBlZEltYWdlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2U2NEltYWdlOiB0aGlzLmNyb3BwKCksXHJcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgdGhpcy5jb25maWcudHlwZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxyXG4gICAqL1xyXG4gIGNyb3BwKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBteUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIENPTkZJR19ERUZBVUxULCB0aGlzLmNvbmZpZyk7XHJcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xyXG4gICAgY29uc3QgbGVmdCA9IChyZWN0LmxlZnQgLSBpbWcubGVmdCk7XHJcbiAgICBjb25zdCB0b3AgPSAocmVjdC50b3AgLSBpbWcudG9wKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbmZpZ0NhbnZhcyA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHRoaXMuc2NhbGU7XHJcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyB0aGlzLnNjYWxlO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZyxcclxuICAgICAgLShsZWZ0IC8gdGhpcy5zY2FsZSksIC0odG9wIC8gdGhpcy5zY2FsZSksXHJcbiAgICApO1xyXG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCAwLjUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgMC41KTtcclxuICAgIH1cclxuICAgIGxldCB1cmw7XHJcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xyXG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuZGVmYXVsdFR5cGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXN1bHQgPSAodXJsKTtcclxuICAgIHRoaXMuY3JvcHBlZC5lbWl0KHtcclxuICAgICAgYmFzZTY0SW1hZ2U6IHVybCxcclxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEx5SGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB9IGZyb20gJy4vcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IEx5SGFtbWVyR2VzdHVyZUNvbmZpZyB9XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc11cbn0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFrQkEsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQU0sTUFBTSxJQUFJO0lBQ2QsSUFBSSxFQUFFO1FBQ0oscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsVUFBVSxFQUFFLE1BQU07UUFDbEIsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxNQUFNO1lBQ2Is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