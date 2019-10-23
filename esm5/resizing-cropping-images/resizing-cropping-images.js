import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, HostListener, NgZone } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES } from '@alyle/ui';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
var STYLE_PRIORITY = -2;
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        '&': theme.imgCropper ? theme.imgCropper.root : null
    },
    imgContainer: {
        cursor: 'move',
        position: 'absolute',
        top: 0,
        left: 0,
        '& > canvas': {
            // width: '100%',
            // height: '100%',
            pointerEvents: 'none',
        }
    },
    area: tslib_1.__assign({ pointerEvents: 'none', boxShadow: '0 0 0 20000px rgba(0, 0, 0, 0.4)' }, LY_COMMON_STYLES.fill, { margin: 'auto', '&:before, &:after': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { content: "''" }), '&:before': {
            width: 0,
            height: 0,
            margin: 'auto',
            borderRadius: '50%',
            background: '#fff',
            border: 'solid 2px rgb(255, 255, 255)'
        }, '&:after': {
            border: 'solid 2px rgb(255, 255, 255)'
        } }),
    defaultContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&, & > input': LY_COMMON_STYLES.fill,
        '& *:not(input)': {
            pointerEvents: 'none'
        },
        '& > input': {
            background: 'transparent',
            opacity: 0,
            width: '100%',
            height: '100%'
        }
    }
}); };
var ɵ0 = STYLES;
/** Image output */
export var ImgResolution;
(function (ImgResolution) {
    /** Resizing & cropping */
    ImgResolution[ImgResolution["Default"] = 0] = "Default";
    /** Only cropping */
    ImgResolution[ImgResolution["OriginalImage"] = 1] = "OriginalImage";
})(ImgResolution || (ImgResolution = {}));
/** Image output */
export var ImgCropperError;
(function (ImgCropperError) {
    /** The loaded image exceeds the size limit set. */
    ImgCropperError[ImgCropperError["Size"] = 0] = "Size";
    /** The file loaded is not image. */
    ImgCropperError[ImgCropperError["Type"] = 1] = "Type";
    /** When the image has not been loaded. */
    ImgCropperError[ImgCropperError["Other"] = 2] = "Other";
})(ImgCropperError || (ImgCropperError = {}));
var CONFIG_DEFAULT = {
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
};
var LyResizingCroppingImages = /** @class */ (function () {
    function LyResizingCroppingImages(_renderer, theme, elementRef, cd, _ngZone) {
        this._renderer = _renderer;
        this.theme = theme;
        this.elementRef = elementRef;
        this.cd = cd;
        this._ngZone = _ngZone;
        /**
         * styles
         * @docs-private
         */
        this.classes = this.theme.addStyleSheet(STYLES);
        this._imgRect = {};
        this._listeners = new Set();
        this.scaleChange = new EventEmitter();
        /** On loaded new image */
        this.loaded = new EventEmitter();
        /** On crop new image */
        this.cropped = new EventEmitter();
        /** Emit an error when the loaded image is not valid */
        this.error = new EventEmitter();
        this._renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyResizingCroppingImages.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            this._config = mergeDeep({}, CONFIG_DEFAULT, val);
            var maxFileSize = this._config.maxFileSize;
            if (maxFileSize) {
                this.maxFileSize = maxFileSize;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyResizingCroppingImages.prototype, "scale", {
        /** Set scale */
        get: function () {
            return this._scale;
        },
        set: function (val) {
            this.setScale(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyResizingCroppingImages.prototype, "minScale", {
        /** Get min scale */
        get: function () {
            return this._minScale;
        },
        enumerable: true,
        configurable: true
    });
    LyResizingCroppingImages.prototype.ngOnDestroy = function () {
        this._listeners.forEach(function (listen) { return listen.unsubscribe(); });
        this._listeners.clear();
    };
    LyResizingCroppingImages.prototype._imgLoaded = function (imgElement) {
        if (imgElement) {
            this._img = imgElement;
            var canvas = this._imgCanvas.nativeElement;
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgElement, 0, 0);
            /** set min scale */
            this._updateMinScale(canvas);
        }
    };
    LyResizingCroppingImages.prototype._setStylesForContImg = function (values) {
        var newStyles = {};
        var rootRect = this._rootRect();
        if (values.x !== void 0 && values.y !== void 0) {
            var x = rootRect.width / 2 - (values.x);
            var y = rootRect.height / 2 - (values.y);
            this._imgRect.x = (values.x);
            this._imgRect.y = (values.y);
            this._imgRect.xc = (x);
            this._imgRect.yc = (y);
        }
        newStyles.transform = "translate3d(" + (this._imgRect.x) + "px," + (this._imgRect.y) + "px, 0)";
        newStyles.transform += "scale(" + this._scal3Fix + ")";
        newStyles.transformOrigin = this._imgRect.xc + "px " + this._imgRect.yc + "px 0";
        newStyles['-webkit-transform'] = newStyles.transform;
        newStyles['-webkit-transform-origin'] = newStyles.transformOrigin;
        for (var key in newStyles) {
            if (newStyles.hasOwnProperty(key)) {
                this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
            }
        }
    };
    LyResizingCroppingImages.prototype._resize$ = function () {
        if (this.isLoaded) {
            this.updatePosition();
        }
    };
    LyResizingCroppingImages.prototype.selectInputEvent = function (img) {
        var _this = this;
        var _img = img.target;
        if (_img.files && _img.files.length !== 1) {
            return;
        }
        var fileSize = _img.files[0].size;
        var fileName = _img.value.replace(/.*(\/|\\)/, '');
        if (this.maxFileSize && fileSize > this.maxFileSize) {
            var cropEvent = {
                name: fileName,
                type: _img.files[0].type,
                size: fileSize,
                error: ImgCropperError.Size
            };
            this.clean();
            this.error.emit(cropEvent);
            return;
        }
        var readFile = new Observable(function (obs) {
            var reader = new FileReader();
            reader.onerror = function (err) { return obs.error(err); };
            reader.onabort = function (err) { return obs.error(err); };
            reader.onload = function (ev) { return setTimeout(function () {
                obs.next(ev);
                obs.complete();
            }, 1); };
            return reader.readAsDataURL(_img.files[0]);
        })
            .subscribe({
            next: function (loadEvent) {
                var originalImageUrl = loadEvent.target.result;
                // Set type
                if (!_this.config.type) {
                    _this._defaultType = _img.files[0].type;
                }
                // set name
                _this._fileName = fileName;
                // set file size
                _this._sizeInBytes = _img.files[0].size;
                _this.setImageUrl(originalImageUrl);
                _this.cd.markForCheck();
                _this._listeners.delete(readFile);
            },
            error: function () {
                var cropEvent = {
                    name: fileName,
                    size: fileSize,
                    error: ImgCropperError.Other,
                    errorMsg: 'The File could not be loaded.'
                };
                _this.clean();
                _this.error.emit(cropEvent);
                _this._listeners.delete(readFile);
                _this.ngOnDestroy();
            }
        });
        this._listeners.add(readFile);
    };
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    LyResizingCroppingImages.prototype.setScale = function (size, noAutoCrop) {
        // fix min scale
        var newSize = size >= this.minScale && size <= 1 ? size : this.minScale;
        // check
        var changed = size != null && size !== this.scale && newSize !== this.scale;
        this._scale = size;
        if (!changed) {
            return;
        }
        this._scal3Fix = newSize;
        if (this.isLoaded) {
            if (changed) {
                var originPosition = tslib_1.__assign({}, this._imgRect);
                this.offset = {
                    x: originPosition.x,
                    y: originPosition.y,
                    left: originPosition.xc,
                    top: originPosition.yc
                };
                this._setStylesForContImg({});
                this._move({
                    srcEvent: {},
                    deltaX: 0,
                    deltaY: 0
                });
            }
            else {
                return;
            }
        }
        else if (this.minScale) {
            this._setStylesForContImg(tslib_1.__assign({}, this._getCenterPoints()));
        }
        else {
            return;
        }
        this.scaleChange.emit(size);
        if (!noAutoCrop) {
            this._cropIfAutoCrop();
        }
    };
    LyResizingCroppingImages.prototype._getCenterPoints = function () {
        var root = this.elementRef.nativeElement;
        var img = this._imgCanvas.nativeElement;
        var x = (root.offsetWidth - (img.width)) / 2;
        var y = (root.offsetHeight - (img.height)) / 2;
        return {
            x: x,
            y: y
        };
    };
    /**
     * Ajustar a la pantalla
     */
    LyResizingCroppingImages.prototype.fitToScreen = function () {
        var container = this.elementRef.nativeElement;
        var min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        var _a = this._img, width = _a.width, height = _a.height;
        var minScale = {
            width: min.width / width,
            height: min.height / height
        };
        var result = Math.max(minScale.width, minScale.height);
        this.setScale(result);
    };
    LyResizingCroppingImages.prototype.fit = function () {
        this.setScale(this.minScale);
    };
    LyResizingCroppingImages.prototype._moveStart = function () {
        this.offset = {
            x: this._imgRect.x,
            y: this._imgRect.y,
            left: this._imgRect.xc,
            top: this._imgRect.yc
        };
    };
    LyResizingCroppingImages.prototype._move = function (event) {
        var x, y;
        var canvas = this._imgCanvas.nativeElement;
        var scaleFix = this._scal3Fix;
        var config = this.config;
        var startP = this.offset;
        if (!scaleFix || !startP) {
            return;
        }
        var isMinScaleY = canvas.height * scaleFix < config.height && config.extraZoomOut;
        var isMinScaleX = canvas.width * scaleFix < config.width && config.extraZoomOut;
        var limitLeft = (config.width / 2 / scaleFix) >= startP.left - (event.deltaX / scaleFix);
        var limitRight = (config.width / 2 / scaleFix) + (canvas.width) - (startP.left - (event.deltaX / scaleFix)) <= config.width / scaleFix;
        var limitTop = ((config.height / 2 / scaleFix) >= (startP.top - (event.deltaY / scaleFix)));
        var limitBottom = (((config.height / 2 / scaleFix) + (canvas.height) - (startP.top - (event.deltaY / scaleFix))) <= (config.height / scaleFix));
        // Limit for left
        if ((limitLeft && !isMinScaleX) || (!limitLeft && isMinScaleX)) {
            x = startP.x + (startP.left) - (config.width / 2 / scaleFix);
        }
        // Limit for right
        if ((limitRight && !isMinScaleX) || (!limitRight && isMinScaleX)) {
            x = startP.x + (startP.left) + (config.width / 2 / scaleFix) - canvas.width;
        }
        // Limit for top
        if ((limitTop && !isMinScaleY) || (!limitTop && isMinScaleY)) {
            y = startP.y + (startP.top) - (config.height / 2 / scaleFix);
        }
        // Limit for bottom
        if ((limitBottom && !isMinScaleY) || (!limitBottom && isMinScaleY)) {
            y = startP.y + (startP.top) + (config.height / 2 / scaleFix) - canvas.height;
        }
        // When press shiftKey, deprecated
        // if (event.srcEvent && event.srcEvent.shiftKey) {
        //   if (Math.abs(event.deltaX) === Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY))) {
        //     y = this.offset.top;
        //   } else {
        //     x = this.offset.left;
        //   }
        // }
        if (x === void 0) {
            x = (event.deltaX / scaleFix) + (startP.x);
        }
        if (y === void 0) {
            y = (event.deltaY / scaleFix) + (startP.y);
        }
        this._setStylesForContImg({
            x: x, y: y
        });
    };
    LyResizingCroppingImages.prototype.updatePosition = function (x, y) {
        var hostRect = this._rootRect();
        var croppingContainerRect = this._areaCropperRect();
        if (x === undefined && y === undefined) {
            x = this._imgRect.xc;
            y = this._imgRect.yc;
        }
        x = (croppingContainerRect.x - hostRect.x) - (x - (this.config.width / 2));
        y = (croppingContainerRect.y - hostRect.y) - (y - (this.config.height / 2));
        this._setStylesForContImg({
            x: x, y: y
        });
    };
    LyResizingCroppingImages.prototype._slideEnd = function () {
        this._cropIfAutoCrop();
    };
    LyResizingCroppingImages.prototype._cropIfAutoCrop = function () {
        if (this.config.autoCrop) {
            this.crop();
        }
    };
    /**+ */
    LyResizingCroppingImages.prototype.zoomIn = function () {
        var scale = this._scal3Fix + .05;
        if (scale > 0 && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.setScale(1);
        }
    };
    /** Clean the img cropper */
    LyResizingCroppingImages.prototype.clean = function () {
        if (this.isLoaded) {
            this._imgRect = {};
            this.offset = undefined;
            this.scale = undefined;
            this._scal3Fix = undefined;
            this._rotation = 0;
            this._minScale = undefined;
            this._isLoadedImg = false;
            this.isLoaded = false;
            this.isCropped = false;
            this._originalImgBase64 = undefined;
            var canvas = this._imgCanvas.nativeElement;
            canvas.width = 0;
            canvas.height = 0;
            this.cd.markForCheck();
        }
    };
    /**- */
    LyResizingCroppingImages.prototype.zoomOut = function () {
        var scale = this._scal3Fix - .05;
        if (scale > this.minScale && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.fit();
        }
    };
    LyResizingCroppingImages.prototype.center = function () {
        var newStyles = tslib_1.__assign({}, this._getCenterPoints());
        this._setStylesForContImg(newStyles);
        this._cropIfAutoCrop();
    };
    /**
     * Load Image from URL
     * @param src URL
     * @param fn function that will be called before emit the event loaded
     */
    LyResizingCroppingImages.prototype.setImageUrl = function (src, fn) {
        var _this = this;
        this.clean();
        this._originalImgBase64 = src;
        var img = new Image();
        var fileSize = this._sizeInBytes;
        var fileName = this._fileName;
        var defaultType = this._defaultType;
        img.crossOrigin = 'anonymous';
        var cropEvent = {
            name: fileName,
            type: defaultType,
            originalDataURL: src
        };
        img.src = src;
        if (fileSize) {
            cropEvent.size = fileSize;
        }
        var loadListen = new Observable(function (obs) {
            img.onerror = function (err) { return obs.error(err); };
            img.onabort = function (err) { return obs.error(err); };
            img.onload = function () { return setTimeout(function () {
                obs.next(null);
                obs.complete();
            }, 0); };
        })
            .subscribe({
            next: function () {
                _this._imgLoaded(img);
                cropEvent.width = img.width;
                cropEvent.height = img.height;
                _this._isLoadedImg = true;
                _this.cd.markForCheck();
                _this._ngZone
                    .onStable
                    .pipe(take(1))
                    .subscribe(function () { return _this._ngZone.run(function () {
                    _this._updateMinScale(_this._imgCanvas.nativeElement);
                    _this.isLoaded = false;
                    if (fn) {
                        fn();
                    }
                    else {
                        _this.setScale(_this.minScale, true);
                    }
                    _this.loaded.emit(cropEvent);
                    _this.isLoaded = true;
                    _this._cropIfAutoCrop();
                    _this.cd.markForCheck();
                }); });
                _this._listeners.delete(loadListen);
                _this.ngOnDestroy();
            },
            error: function () {
                cropEvent.error = ImgCropperError.Type;
                _this.error.emit(cropEvent);
                _this._listeners.delete(loadListen);
                _this.ngOnDestroy();
            }
        });
        this._listeners.add(loadListen);
        // clear
        this._sizeInBytes = null;
        this._fileName = null;
        this._defaultType = undefined;
    };
    LyResizingCroppingImages.prototype.rotate = function (degrees) {
        var validDegrees = this._rotation = convertToValidDegrees(degrees);
        var degreesRad = validDegrees * Math.PI / 180;
        var canvas = this._imgCanvas.nativeElement;
        var canvasClon = createCanvasImg(canvas);
        var ctx = canvas.getContext('2d');
        // clear
        ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
        // rotate canvas image
        var transform = "rotate(" + validDegrees + "deg) scale(" + 1 / this._scal3Fix + ")";
        var transformOrigin = this._imgRect.xc + "px " + this._imgRect.yc + "px 0";
        canvas.style.transform = transform;
        canvas.style.webkitTransform = transform;
        canvas.style.transformOrigin = transformOrigin;
        canvas.style.webkitTransformOrigin = transformOrigin;
        var _a = canvas.getBoundingClientRect(), x = _a.x, y = _a.y;
        console.log(transform, transformOrigin, tslib_1.__assign({}, this._imgRect));
        // save rect
        var canvasRect = canvas.getBoundingClientRect();
        // remove rotate styles
        canvas.removeAttribute('style');
        // set w & h
        var w = canvasRect.width;
        var h = canvasRect.height;
        ctx.canvas.width = w;
        ctx.canvas.height = h;
        // clear
        ctx.clearRect(0, 0, w, h);
        // translate and rotate
        ctx.translate(w / 2, h / 2);
        ctx.rotate(degreesRad);
        ctx.drawImage(canvasClon, -canvasClon.width / 2, -canvasClon.height / 2);
        // Update min scale
        this._updateMinScale(canvas);
        // set the minimum scale, only if necessary
        if (this.scale < this.minScale) {
            this.setScale(0, true);
        } //                ↑ no AutoCrop
        var rootRect = this._rootRect();
        this._setStylesForContImg({
            x: (x - rootRect.x),
            y: (y - rootRect.y)
        });
        // keep image inside the frame
        var originPosition = tslib_1.__assign({}, this._imgRect);
        this.offset = {
            x: originPosition.x,
            y: originPosition.y,
            left: originPosition.xc,
            top: originPosition.yc
        };
        this._setStylesForContImg({});
        this._move({
            srcEvent: {},
            deltaX: 0,
            deltaY: 0
        });
        this._cropIfAutoCrop();
    };
    LyResizingCroppingImages.prototype._updateMinScale = function (canvas) {
        var config = this.config;
        this._minScale = (config.extraZoomOut ? Math.min : Math.max)(config.width / canvas.width, config.height / canvas.height);
    };
    LyResizingCroppingImages.prototype.imageSmoothingQuality = function (img, config, quality) {
        /** Calculate total number of steps needed */
        var numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.width, config.height)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /**Array steps */
        var steps = Array.from(Array(numSteps).keys());
        /** Context */
        var octx = img.getContext('2d');
        var q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
        var fileType = this._defaultType;
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /** Set size */
            var w_1 = img.width * quality;
            var h_1 = img.height * quality;
            /** Only the new img is shown. */
            if (fileType === 'image/png' || fileType === 'image/svg+xml') {
                octx.globalCompositeOperation = 'copy';
            }
            /** Steps */
            steps.forEach(function () {
                octx.drawImage(img, 0, 0, w_1, h_1);
            });
        }
        /**
         * Step final
         * Resizing & cropping image
         */
        var oc = document.createElement('canvas'), ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * q, img.height * q, 0, 0, oc.width, oc.height);
        return oc;
    };
    /**
     * Crop Image
     * Resizing & cropping image
     */
    LyResizingCroppingImages.prototype.crop = function (config) {
        var newConfig = config ? mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
        var cropEvent = this._imgCrop(newConfig);
        this.cd.markForCheck();
        return cropEvent;
    };
    /**
     * @docs-private
     */
    LyResizingCroppingImages.prototype._imgCrop = function (myConfig) {
        var canvasElement = document.createElement('canvas');
        var imgRect = this._imgRect;
        var scaleFix = this._scal3Fix;
        var left = imgRect.xc - (myConfig.width / 2 / scaleFix);
        var top = imgRect.yc - (myConfig.height / 2 / scaleFix);
        var config = {
            width: myConfig.width,
            height: myConfig.height
        };
        canvasElement.width = config.width / scaleFix;
        canvasElement.height = config.height / scaleFix;
        var ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._imgCanvas.nativeElement, -(left), -(top));
        var result = canvasElement;
        var antiAliasedQ = myConfig.antiAliased ? .5 : 1;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, antiAliasedQ);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, antiAliasedQ);
        }
        var url;
        if (myConfig.type) {
            url = result.toDataURL("" + myConfig.type);
        }
        else {
            url = result.toDataURL(this._defaultType);
        }
        var cropEvent = {
            dataURL: url,
            type: this._defaultType || myConfig.type,
            name: this._fileName,
            width: config.width,
            height: config.height,
            originalDataURL: this._originalImgBase64,
            scale: this._scal3Fix,
            rotation: this._rotation,
            position: {
                x: this._imgRect.xc,
                y: this._imgRect.yc
            }
        };
        this.isCropped = true;
        this.cropped.emit(cropEvent);
        return cropEvent;
    };
    LyResizingCroppingImages.prototype._rootRect = function () {
        return this.elementRef.nativeElement.getBoundingClientRect();
    };
    LyResizingCroppingImages.prototype._areaCropperRect = function () {
        return this._croppingContainer.nativeElement.getBoundingClientRect();
    };
    tslib_1.__decorate([
        ViewChild('_imgContainer', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyResizingCroppingImages.prototype, "_imgContainer", void 0);
    tslib_1.__decorate([
        ViewChild('_croppingContainer', { static: false }),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyResizingCroppingImages.prototype, "_croppingContainer", void 0);
    tslib_1.__decorate([
        ViewChild('_imgCanvas', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyResizingCroppingImages.prototype, "_imgCanvas", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LyResizingCroppingImages.prototype, "config", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], LyResizingCroppingImages.prototype, "scale", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LyResizingCroppingImages.prototype, "maxFileSize", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LyResizingCroppingImages.prototype, "scaleChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LyResizingCroppingImages.prototype, "loaded", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LyResizingCroppingImages.prototype, "cropped", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LyResizingCroppingImages.prototype, "error", void 0);
    tslib_1.__decorate([
        HostListener('window:resize'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LyResizingCroppingImages.prototype, "_resize$", null);
    LyResizingCroppingImages = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            selector: 'ly-img-cropper, ly-cropping',
            template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.area\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.defaultContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            LyTheme2,
            ElementRef,
            ChangeDetectorRef,
            NgZone])
    ], LyResizingCroppingImages);
    return LyResizingCroppingImages;
}());
export { LyResizingCroppingImages };
/**
 * convertToValidDegrees(45) === 90
 * convertToValidDegrees(40) === 0
 * convertToValidDegrees(100) === 90
 * @docs-private
 */
function convertToValidDegrees(num) {
    var val360 = limitNum(num, 360);
    var val90 = limitNum(val360.result, 90);
    var sign = Math.sign(num);
    if (val90.result >= (90 / 2)) {
        return 90 * (val90.parts + 1) * sign;
    }
    else {
        return 90 * val90.parts * sign;
    }
}
/**
 * demo:
 * limitNum(450, 360) === 90
 * @docs-private
 */
function limitNum(num, num2) {
    var numAbs = Math.abs(num);
    var parts = Math.floor(numAbs / num2);
    var result;
    if (parts) {
        result = numAbs - (num2 * parts);
    }
    else {
        result = num;
    }
    if (numAbs !== num) {
        result *= -1;
    }
    return {
        result: result,
        parts: parts
    };
}
/**
 * @docs-private
 */
function createCanvasImg(img) {
    // create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');
    // set dimensions
    newCanvas.width = img.width;
    newCanvas.height = img.height;
    // apply the old canvas to the new one
    context.drawImage(img, 0, 0);
    // return the new canvas
    return newCanvas;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3JEO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFB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Q2Q7SUFDRCxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2Q7SUFDRCxPQUFPO1FBQ0wsTUFBTSxRQUFBO1FBQ04sS0FBSyxPQUFBO0tBQ04sQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFDLEdBQXlDO0lBRWhFLHNCQUFzQjtJQUN0QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFFNUMsaUJBQWlCO0lBQ2pCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUM1QixTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFOUIsc0NBQXNDO0lBQ3RDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3Qix3QkFBd0I7SUFDeEIsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUywgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgJyYnOiB0aGVtZS5pbWdDcm9wcGVyID8gdGhlbWUuaW1nQ3JvcHBlci5yb290IDogbnVsbFxuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGNhbnZhcyc6IHtcbiAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAvLyBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGFyZWE6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgZGVmYXVsdENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICcmLCAmID4gaW5wdXQnOiBMWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH1cbn0pO1xuLyoqIEltYWdlIENyb3BwZXIgQ29uZmlnICovXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0ICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZC4gKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZy4gKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIGF1dG9Dcm9wPzogYm9vbGVhbjtcbiAgb3V0cHV0PzogSW1nT3V0cHV0IHwgSW1nUmVzb2x1dGlvbjtcbiAgLyoqXG4gICAqIFpvb20gb3V0IHVudGlsIHRoZSBlbnRpcmUgaW1hZ2UgZml0cyBpbnRvIHRoZSBjcm9wcGluZyBhcmVhLlxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZXh0cmFab29tT3V0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgYGVycm9yYCBpZiB0aGUgZmlsZSBzaXplIGluIGJ5dGVzIGZvciB0aGUgbGltaXQuXG4gICAqIE5vdGU6IEl0IG9ubHkgd29ya3Mgd2hlbiB0aGUgaW1hZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYDxpbnB1dD5gIGV2ZW50LlxuICAgKi9cbiAgbWF4RmlsZVNpemU/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ091dHB1dCB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG4vKiogSW1hZ2Ugb3V0cHV0ICovXG5leHBvcnQgZW51bSBJbWdSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuXG4vKiogSW1hZ2Ugb3V0cHV0ICovXG5leHBvcnQgZW51bSBJbWdDcm9wcGVyRXJyb3Ige1xuICAvKiogVGhlIGxvYWRlZCBpbWFnZSBleGNlZWRzIHRoZSBzaXplIGxpbWl0IHNldC4gKi9cbiAgU2l6ZSxcbiAgLyoqIFRoZSBmaWxlIGxvYWRlZCBpcyBub3QgaW1hZ2UuICovXG4gIFR5cGUsXG4gIC8qKiBXaGVuIHRoZSBpbWFnZSBoYXMgbm90IGJlZW4gbG9hZGVkLiAqL1xuICBPdGhlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGRhdGEgVVJMICovXG4gIGRhdGFVUkw/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG4gIC8qKiBGaWxldHlwZSAqL1xuICB0eXBlPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICAvKiogT3JpZ2luYWwgSW1hZ2UgZGF0YSBVUkwgKi9cbiAgb3JpZ2luYWxEYXRhVVJMPzogc3RyaW5nO1xuICBzY2FsZT86IG51bWJlcjtcbiAgLyoqIEN1cnJlbnQgcm90YXRpb24gaW4gZGVncmVlcyAqL1xuICByb3RhdGlvbj86IG51bWJlcjtcbiAgLyoqIFNpemUgb2YgdGhlIGltYWdlIGluIGJ5dGVzICovXG4gIHNpemU/OiBudW1iZXI7XG4gIHBvc2l0aW9uPzoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFcnJvckV2ZW50IGV4dGVuZHMgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIFR5cGUgb2YgZXJyb3IgKi9cbiAgZXJyb3I6IEltZ0Nyb3BwZXJFcnJvcjtcbiAgZXJyb3JNc2c/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuXG5pbnRlcmZhY2UgSW1nUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB4YzogbnVtYmVyO1xuICB5YzogbnVtYmVyO1xuICAvKiogdHJhbnNmb3JtIHdpdGggKi9cbiAgd3Q6IG51bWJlcjtcbiAgaHQ6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1pbWctY3JvcHBlciwgbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIF9vcmlnaW5hbEltZ0Jhc2U2ND86IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqIE9yaWdpbmFsIGltYWdlICovXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBvZmZzZXQ/OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgbGVmdDogbnVtYmVyXG4gICAgdG9wOiBudW1iZXJcbiAgfTtcbiAgcHJpdmF0ZSBfc2NhbGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX3NjYWwzRml4PzogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnO1xuICBwcml2YXRlIF9pbWdSZWN0OiBJbWdSZWN0ID0ge30gYXMgYW55O1xuICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBuZXcgU2V0PFN1YnNjcmlwdGlvbj4oKTtcbiAgcHJpdmF0ZSBfc2l6ZUluQnl0ZXM6IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZW4gaXMgbG9hZGVkIGltYWdlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX2lzTG9hZGVkSW1nOiBib29sZWFuO1xuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAmIHJlYWR5IGZvciBjcm9wICovXG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19pbWdDYW52YXMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfaW1nQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IHRoaXMuX2NvbmZpZy5tYXhGaWxlU2l6ZTtcbiAgICBpZiAobWF4RmlsZVNpemUpIHtcbiAgICAgIHRoaXMubWF4RmlsZVNpemUgPSBtYXhGaWxlU2l6ZTtcbiAgICB9XG4gIH1cbiAgLyoqIFNldCBzY2FsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgc2V0IHNjYWxlKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgYGVycm9yYCBpZiB0aGUgZmlsZSBzaXplIGZvciB0aGUgbGltaXQuXG4gICAqIE5vdGU6IEl0IG9ubHkgd29ya3Mgd2hlbiB0aGUgaW1hZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYDxpbnB1dD5gIGV2ZW50LlxuICAgKi9cbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcblxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2NhbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIEVtaXQgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFcnJvckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW4gPT4gbGlzdGVuLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuX2xpc3RlbmVycy5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gaW1nRWxlbWVudC53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdFbGVtZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nRWxlbWVudCwgMCwgMCk7XG5cbiAgICAgIC8qKiBzZXQgbWluIHNjYWxlICovXG4gICAgICB0aGlzLl91cGRhdGVNaW5TY2FsZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcodmFsdWVzOiB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgfSkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHsgfSBhcyBhbnk7XG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGlmICh2YWx1ZXMueCAhPT0gdm9pZCAwICYmIHZhbHVlcy55ICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHggPSByb290UmVjdC53aWR0aCAvIDIgLSAodmFsdWVzLngpO1xuICAgICAgY29uc3QgeSA9IHJvb3RSZWN0LmhlaWdodCAvIDIgLSAodmFsdWVzLnkpO1xuXG4gICAgICB0aGlzLl9pbWdSZWN0LnggPSAodmFsdWVzLngpO1xuICAgICAgdGhpcy5faW1nUmVjdC55ID0gKHZhbHVlcy55KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueGMgPSAoeCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnljID0gKHkpO1xuICAgIH1cbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7KHRoaXMuX2ltZ1JlY3QueCl9cHgsJHsodGhpcy5faW1nUmVjdC55KX1weCwgMClgO1xuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gKz0gYHNjYWxlKCR7dGhpcy5fc2NhbDNGaXh9KWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgO1xuICAgIG5ld1N0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IG5ld1N0eWxlcy50cmFuc2Zvcm07XG4gICAgbmV3U3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nXSA9IG5ld1N0eWxlcy50cmFuc2Zvcm1PcmlnaW47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBfcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMgJiYgX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVNpemUgPSBfaW1nLmZpbGVzIVswXS5zaXplO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cbiAgICBpZiAodGhpcy5tYXhGaWxlU2l6ZSAmJiBmaWxlU2l6ZSA+IHRoaXMubWF4RmlsZVNpemUpIHtcbiAgICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckVycm9yRXZlbnQgPSB7XG4gICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICB0eXBlOiBfaW1nLmZpbGVzIVswXS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlU2l6ZSxcbiAgICAgICAgZXJyb3I6IEltZ0Nyb3BwZXJFcnJvci5TaXplXG4gICAgICB9O1xuICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZEZpbGUgPSBuZXcgT2JzZXJ2YWJsZTxQcm9ncmVzc0V2ZW50PihvYnMgPT4ge1xuXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25lcnJvciA9IGVyciA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICAgIHJlYWRlci5vbmFib3J0ID0gZXJyID0+IG9icy5lcnJvcihlcnIpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldikgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9icy5uZXh0KGV2KTtcbiAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICB9LCAxKTtcblxuICAgICAgcmV0dXJuIHJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXMhWzBdKTtcbiAgICB9KVxuICAgIC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGxvYWRFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0IGFzIHN0cmluZztcbiAgICAgICAgLy8gU2V0IHR5cGVcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzIVswXS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBuYW1lXG4gICAgICAgIHRoaXMuX2ZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIC8vIHNldCBmaWxlIHNpemVcbiAgICAgICAgdGhpcy5fc2l6ZUluQnl0ZXMgPSBfaW1nLmZpbGVzIVswXS5zaXplO1xuXG4gICAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShyZWFkRmlsZSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXJyb3JFdmVudCA9IHtcbiAgICAgICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgICBzaXplOiBmaWxlU2l6ZSxcbiAgICAgICAgICBlcnJvcjogSW1nQ3JvcHBlckVycm9yLk90aGVyLFxuICAgICAgICAgIGVycm9yTXNnOiAnVGhlIEZpbGUgY291bGQgbm90IGJlIGxvYWRlZC4nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUocmVhZEZpbGUpO1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9saXN0ZW5lcnMuYWRkKHJlYWRGaWxlKTtcblxuICB9XG5cbiAgLyoqIFNldCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2UsIHRoZSB2YWx1ZXMgY2FuIGJlIDAgYmV0d2VlbiAxLCB3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplICovXG4gIHNldFNjYWxlKHNpemU/OiBudW1iZXIsIG5vQXV0b0Nyb3A/OiBib29sZWFuKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIGNvbnN0IG5ld1NpemUgPSBzaXplISA+PSB0aGlzLm1pblNjYWxlISAmJiBzaXplISA8PSAxID8gc2l6ZSA6IHRoaXMubWluU2NhbGU7XG5cbiAgICAvLyBjaGVja1xuICAgIGNvbnN0IGNoYW5nZWQgPSBzaXplICE9IG51bGwgJiYgc2l6ZSAhPT0gdGhpcy5zY2FsZSAmJiBuZXdTaXplICE9PSB0aGlzLnNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBpZiAoIWNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2NhbDNGaXggPSBuZXdTaXplO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgeDogb3JpZ2luUG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBvcmlnaW5Qb3NpdGlvbi55LFxuICAgICAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLnhjLFxuICAgICAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueWNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7fSk7XG4gICAgICAgIHRoaXMuX21vdmUoe1xuICAgICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgZGVsdGFZOiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5TY2FsZSkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NhbGVDaGFuZ2UuZW1pdChzaXplKTtcbiAgICBpZiAoIW5vQXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGgpKSAvIDI7XG4gICAgY29uc3QgeSA9IChyb290Lm9mZnNldEhlaWdodCAtIChpbWcuaGVpZ2h0KSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5faW1nUmVjdC54LFxuICAgICAgeTogdGhpcy5faW1nUmVjdC55LFxuICAgICAgbGVmdDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgIHRvcDogdGhpcy5faW1nUmVjdC55Y1xuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQ6IHsgc3JjRXZlbnQ/OiB7fTsgZGVsdGFYOiBhbnk7IGRlbHRhWTogYW55OyB9KSB7XG4gICAgbGV0IHg6IG51bWJlciB8IHVuZGVmaW5lZCwgeTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgY29uc3Qgc3RhcnRQID0gdGhpcy5vZmZzZXQ7XG4gICAgaWYgKCFzY2FsZUZpeCB8fCAhc3RhcnRQKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNNaW5TY2FsZVkgPSBjYW52YXMuaGVpZ2h0ICogc2NhbGVGaXggPCBjb25maWcuaGVpZ2h0ICYmIGNvbmZpZy5leHRyYVpvb21PdXQ7XG4gICAgY29uc3QgaXNNaW5TY2FsZVggPSBjYW52YXMud2lkdGggKiBzY2FsZUZpeCA8IGNvbmZpZy53aWR0aCAmJiBjb25maWcuZXh0cmFab29tT3V0O1xuXG4gICAgY29uc3QgbGltaXRMZWZ0ID0gKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgPj0gc3RhcnRQLmxlZnQgLSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IGxpbWl0UmlnaHQgPSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMud2lkdGgpIC0gKHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkgPD0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY29uc3QgbGltaXRUb3AgPSAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpO1xuICAgIGNvbnN0IGxpbWl0Qm90dG9tID0gKCgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLmhlaWdodCkgLSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSA8PSAoY29uZmlnLmhlaWdodCAvIHNjYWxlRml4KSk7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmICgobGltaXRMZWZ0ICYmICFpc01pblNjYWxlWCkgfHwgKCFsaW1pdExlZnQgJiYgaXNNaW5TY2FsZVgpKSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpIC0gKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgfVxuXG4gICAgLy8gTGltaXQgZm9yIHJpZ2h0XG4gICAgaWYgKChsaW1pdFJpZ2h0ICYmICFpc01pblNjYWxlWCkgfHwgKCFsaW1pdFJpZ2h0ICYmIGlzTWluU2NhbGVYKSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSArIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLndpZHRoO1xuICAgIH1cblxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGxpbWl0VG9wICYmICFpc01pblNjYWxlWSkgfHwgKCFsaW1pdFRvcCAmJiBpc01pblNjYWxlWSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKChsaW1pdEJvdHRvbSAmJiAhaXNNaW5TY2FsZVkpIHx8ICghbGltaXRCb3R0b20gJiYgaXNNaW5TY2FsZVkpKSB7XG4gICAgICB5ID0gc3RhcnRQLnkgKyAoc3RhcnRQLnRvcCkgKyAoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXksIGRlcHJlY2F0ZWRcbiAgICAvLyBpZiAoZXZlbnQuc3JjRXZlbnQgJiYgZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAvLyAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgIC8vICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSArIChzdGFydFAueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHN0YXJ0UC55KTsgfVxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkICYmIHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpIC0gKHghIC0gKHRoaXMuY29uZmlnLndpZHRoIC8gMikpO1xuICAgIHkgPSAoY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55KSAtICh5ISAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCEgKyAuMDU7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9pbWdSZWN0ID0geyB9IGFzIGFueTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICB0aGlzLl9zY2FsM0ZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gMDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCEgLSAuMDU7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSEgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuICB9XG4gIGNlbnRlcigpIHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuLyoqXG4gKiBMb2FkIEltYWdlIGZyb20gVVJMXG4gKiBAcGFyYW0gc3JjIFVSTFxuICogQHBhcmFtIGZuIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVtaXQgdGhlIGV2ZW50IGxvYWRlZFxuICovXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nLCBmbj86ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNsZWFuKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSBzcmM7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb25zdCBmaWxlU2l6ZSA9IHRoaXMuX3NpemVJbkJ5dGVzO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5fZmlsZU5hbWU7XG4gICAgY29uc3QgZGVmYXVsdFR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcblxuICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogZmlsZU5hbWUsXG4gICAgICB0eXBlOiBkZWZhdWx0VHlwZSxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjXG4gICAgfTtcblxuICAgIGltZy5zcmMgPSBzcmM7XG5cbiAgICBpZiAoZmlsZVNpemUpIHtcbiAgICAgIGNyb3BFdmVudC5zaXplID0gZmlsZVNpemU7XG4gICAgfVxuICAgIGNvbnN0IGxvYWRMaXN0ZW4gPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPihvYnMgPT4ge1xuXG4gICAgICBpbWcub25lcnJvciA9IGVyciA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICAgIGltZy5vbmFib3J0ID0gZXJyID0+IG9icy5lcnJvcihlcnIpO1xuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnMubmV4dChudWxsISk7XG4gICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW1nTG9hZGVkKGltZyk7XG4gICAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICB0aGlzLl9uZ1pvbmVcbiAgICAgICAgICAub25TdGFibGVcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNaW5TY2FsZSh0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUobG9hZExpc3Rlbik7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KS5lcnJvciA9IEltZ0Nyb3BwZXJFcnJvci5UeXBlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShsb2FkTGlzdGVuKTtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzLmFkZChsb2FkTGlzdGVuKTtcblxuICAgIC8vIGNsZWFyXG4gICAgdGhpcy5fc2l6ZUluQnl0ZXMgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJvdGF0ZShkZWdyZWVzOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWxpZERlZ3JlZXMgPSB0aGlzLl9yb3RhdGlvbiA9IGNvbnZlcnRUb1ZhbGlkRGVncmVlcyhkZWdyZWVzKTtcbiAgICBjb25zdCBkZWdyZWVzUmFkID0gdmFsaWREZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjYW52YXNDbG9uID0gY3JlYXRlQ2FudmFzSW1nKGNhbnZhcyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0Nsb24ud2lkdGgsIGNhbnZhc0Nsb24uaGVpZ2h0KTtcblxuICAgIC8vIHJvdGF0ZSBjYW52YXMgaW1hZ2VcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7dmFsaWREZWdyZWVzfWRlZykgc2NhbGUoJHsxIC8gdGhpcy5fc2NhbDNGaXghfSlgO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgO1xuICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgY2FudmFzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICBjYW52YXMuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gdHJhbnNmb3JtT3JpZ2luO1xuICAgIGNhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gPSB0cmFuc2Zvcm1PcmlnaW47XG5cbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgY29uc29sZS5sb2codHJhbnNmb3JtLCB0cmFuc2Zvcm1PcmlnaW4sIHsgLi4udGhpcy5faW1nUmVjdCB9KTtcblxuICAgIC8vIHNhdmUgcmVjdFxuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyByZW1vdmUgcm90YXRlIHN0eWxlc1xuICAgIGNhbnZhcy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcbiAgICBjb25zdCB3ID0gY2FudmFzUmVjdC53aWR0aDtcbiAgICBjb25zdCBoID0gY2FudmFzUmVjdC5oZWlnaHQ7XG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IHc7XG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgLy8gdHJhbnNsYXRlIGFuZCByb3RhdGVcbiAgICBjdHgudHJhbnNsYXRlKHcgLyAyLCBoIC8gMik7XG4gICAgY3R4LnJvdGF0ZShkZWdyZWVzUmFkKTtcbiAgICBjdHguZHJhd0ltYWdlKGNhbnZhc0Nsb24sIC1jYW52YXNDbG9uLndpZHRoIC8gMiwgLWNhbnZhc0Nsb24uaGVpZ2h0IC8gMik7XG5cbiAgICAvLyBVcGRhdGUgbWluIHNjYWxlXG4gICAgdGhpcy5fdXBkYXRlTWluU2NhbGUoY2FudmFzKTtcblxuICAgIC8vIHNldCB0aGUgbWluaW11bSBzY2FsZSwgb25seSBpZiBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5zY2FsZSEgPCB0aGlzLm1pblNjYWxlISkge1xuICAgICAgdGhpcy5zZXRTY2FsZSgwLCB0cnVlKTtcbiAgICB9IC8vICAgICAgICAgICAgICAgIOKGkSBubyBBdXRvQ3JvcFxuXG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeDogKHggLSByb290UmVjdC54KSxcbiAgICAgIHk6ICh5IC0gcm9vdFJlY3QueSlcbiAgICB9KTtcblxuICAgIC8vIGtlZXAgaW1hZ2UgaW5zaWRlIHRoZSBmcmFtZVxuICAgIGNvbnN0IG9yaWdpblBvc2l0aW9uID0gey4uLnRoaXMuX2ltZ1JlY3R9O1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogb3JpZ2luUG9zaXRpb24ueCxcbiAgICAgIHk6IG9yaWdpblBvc2l0aW9uLnksXG4gICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueWNcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgIHRoaXMuX21vdmUoe1xuICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgZGVsdGFYOiAwLFxuICAgICAgZGVsdGFZOiAwXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWluU2NhbGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIHRoaXMuX21pblNjYWxlID0gKGNvbmZpZy5leHRyYVpvb21PdXQgPyBNYXRoLm1pbiA6IE1hdGgubWF4KShcbiAgICAgIGNvbmZpZy53aWR0aCAvIGNhbnZhcy53aWR0aCxcbiAgICAgIGNvbmZpZy5oZWlnaHQgLyBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2coTWF0aC5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIE1hdGgubWF4KGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIGlmIChmaWxlVHlwZSA9PT0gJ2ltYWdlL3BuZycgfHwgZmlsZVR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICAgIH1cblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpITtcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgMCwgMCxcbiAgICAgIGltZy53aWR0aCAqIHEsIGltZy5oZWlnaHQgKiBxLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuX2ltZ0Nyb3AobmV3Q29uZmlnKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfaW1nQ3JvcChteUNvbmZpZzogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ1JlY3QhO1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXghO1xuICAgIGNvbnN0IGxlZnQgPSBpbWdSZWN0LnhjIC0gKG15Q29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCB0b3AgPSBpbWdSZWN0LnljIC0gKG15Q29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyBzY2FsZUZpeDtcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeDtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJykhO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAtKGxlZnQpLCAtKHRvcCksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuX2RlZmF1bHRUeXBlKTtcbiAgICB9XG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBkYXRhVVJMOiB1cmwsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCxcbiAgICAgIHNjYWxlOiB0aGlzLl9zY2FsM0ZpeCxcbiAgICAgIHJvdGF0aW9uOiB0aGlzLl9yb3RhdGlvbixcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xuICAgIHRoaXMuY3JvcHBlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3Jvb3RSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlYUNyb3BwZXJSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxufVxuXG4vKipcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0NSkgPT09IDkwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDApID09PSAwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoMTAwKSA9PT0gOTBcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29udmVydFRvVmFsaWREZWdyZWVzKG51bTogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbDM2MCA9IGxpbWl0TnVtKG51bSwgMzYwKTtcbiAgY29uc3QgdmFsOTAgPSBsaW1pdE51bSh2YWwzNjAucmVzdWx0LCA5MCk7XG4gIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24obnVtKTtcbiAgaWYgKHZhbDkwLnJlc3VsdCA+PSAoOTAgLyAyKSkge1xuICAgIHJldHVybiA5MCAqICh2YWw5MC5wYXJ0cyArIDEpICogc2lnbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gOTAgKiB2YWw5MC5wYXJ0cyAqIHNpZ247XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vOlxuICogbGltaXROdW0oNDUwLCAzNjApID09PSA5MFxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsaW1pdE51bShudW06IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gIGNvbnN0IG51bUFicyA9IE1hdGguYWJzKG51bSk7XG4gIGNvbnN0IHBhcnRzID0gTWF0aC5mbG9vcihudW1BYnMgLyBudW0yKTtcbiAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICBpZiAocGFydHMpIHtcbiAgICByZXN1bHQgPSBudW1BYnMgLSAobnVtMiAqIHBhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBudW07XG4gIH1cbiAgaWYgKG51bUFicyAhPT0gbnVtKSB7XG4gICAgcmVzdWx0ICo9IC0xO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdWx0LFxuICAgIHBhcnRzXG4gIH07XG59XG5cbi8qKlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYW52YXNJbWcoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQpIHtcblxuICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzXG4gIGNvbnN0IG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gIC8vIHNldCBkaW1lbnNpb25zXG4gIG5ld0NhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgbmV3Q2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cbiAgLy8gYXBwbHkgdGhlIG9sZCBjYW52YXMgdG8gdGhlIG5ldyBvbmVcbiAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAvLyByZXR1cm4gdGhlIG5ldyBjYW52YXNcbiAgcmV0dXJuIG5ld0NhbnZhcztcbn1cbiJdfQ==