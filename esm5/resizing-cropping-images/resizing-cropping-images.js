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
        if (values.x !== void 0 && values.y !== void 0) {
            var rootRect = this._rootRect();
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
        x = (croppingContainerRect.left - hostRect.left) - (x - (this.config.width / 2));
        y = (croppingContainerRect.top - hostRect.top) - (y - (this.config.height / 2));
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
            img.onload = function () {
                obs.next(null);
                obs.complete();
            };
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
                    .subscribe(function () { return setTimeout(function () { return _this._ngZone.run(function () {
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
                }); }, 0); });
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
        var _a = canvas.getBoundingClientRect(), left = _a.left, top = _a.top;
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
            x: (left - rootRect.left),
            y: (top - rootRect.top)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3JEO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFB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Q0QsT0FBTztRQUNMLE1BQU0sUUFBQTtRQUNOLEtBQUssT0FBQTtLQUNOLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBQyxHQUF5QztJQUVoRSxzQkFBc0I7SUFDdEIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBRTVDLGlCQUFpQjtJQUNqQixTQUFTLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDNUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTlCLHNDQUFzQztJQUN0QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0Isd0JBQXdCO0lBQ3hCLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICcmJzogdGhlbWUuaW1nQ3JvcHBlciA/IHRoZW1lLmltZ0Nyb3BwZXIucm9vdCA6IG51bGxcbiAgfSxcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJyYgPiBjYW52YXMnOiB7XG4gICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfVxuICB9LFxuICBhcmVhOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9XG4gIH0sXG4gIGRlZmF1bHRDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcbi8qKiBJbWFnZSBDcm9wcGVyIENvbmZpZyAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKiogQ3JvcHBlciBhcmVhIGhlaWdodCAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcuICovXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xuICAvKiogU2V0IGFudGktYWxpYXNlZCggZGVmYXVsdDogdHJ1ZSkgKi9cbiAgYW50aUFsaWFzZWQ/OiBib29sZWFuO1xuICBhdXRvQ3JvcD86IGJvb2xlYW47XG4gIG91dHB1dD86IEltZ091dHB1dCB8IEltZ1Jlc29sdXRpb247XG4gIC8qKlxuICAgKiBab29tIG91dCB1bnRpbCB0aGUgZW50aXJlIGltYWdlIGZpdHMgaW50byB0aGUgY3JvcHBpbmcgYXJlYS5cbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGV4dHJhWm9vbU91dD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBFbWl0IGV2ZW50IGBlcnJvcmAgaWYgdGhlIGZpbGUgc2l6ZSBpbiBieXRlcyBmb3IgdGhlIGxpbWl0LlxuICAgKiBOb3RlOiBJdCBvbmx5IHdvcmtzIHdoZW4gdGhlIGltYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIGA8aW5wdXQ+YCBldmVudC5cbiAgICovXG4gIG1heEZpbGVTaXplPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdPdXRwdXQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nQ3JvcHBlckVycm9yIHtcbiAgLyoqIFRoZSBsb2FkZWQgaW1hZ2UgZXhjZWVkcyB0aGUgc2l6ZSBsaW1pdCBzZXQuICovXG4gIFNpemUsXG4gIC8qKiBUaGUgZmlsZSBsb2FkZWQgaXMgbm90IGltYWdlLiAqL1xuICBUeXBlLFxuICAvKiogV2hlbiB0aGUgaW1hZ2UgaGFzIG5vdCBiZWVuIGxvYWRlZC4gKi9cbiAgT3RoZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogQ3JvcHBlZCBpbWFnZSBkYXRhIFVSTCAqL1xuICBkYXRhVVJMPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmcgfCBudWxsO1xuICAvKiogRmlsZXR5cGUgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgLyoqIE9yaWdpbmFsIEltYWdlIGRhdGEgVVJMICovXG4gIG9yaWdpbmFsRGF0YVVSTD86IHN0cmluZztcbiAgc2NhbGU/OiBudW1iZXI7XG4gIC8qKiBDdXJyZW50IHJvdGF0aW9uIGluIGRlZ3JlZXMgKi9cbiAgcm90YXRpb24/OiBudW1iZXI7XG4gIC8qKiBTaXplIG9mIHRoZSBpbWFnZSBpbiBieXRlcyAqL1xuICBzaXplPzogbnVtYmVyO1xuICBwb3NpdGlvbj86IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXJyb3JFdmVudCBleHRlbmRzIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBUeXBlIG9mIGVycm9yICovXG4gIGVycm9yOiBJbWdDcm9wcGVyRXJyb3I7XG4gIGVycm9yTXNnPzogc3RyaW5nO1xufVxuXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcblxuaW50ZXJmYWNlIEltZ1JlY3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgeGM6IG51bWJlcjtcbiAgeWM6IG51bWJlcjtcbiAgLyoqIHRyYW5zZm9ybSB3aXRoICovXG4gIHd0OiBudW1iZXI7XG4gIGh0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktaW1nLWNyb3BwZXIsIGx5LWNyb3BwaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemluZy1jcm9wcGluZy1pbWFnZXMuaHRtbCdcbiB9KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiBPcmlnaW5hbCBpbWFnZSAqL1xuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0Pzoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGxlZnQ6IG51bWJlclxuICAgIHRvcDogbnVtYmVyXG4gIH07XG4gIHByaXZhdGUgX3NjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9zY2FsM0ZpeD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcbiAgcHJpdmF0ZSBfaW1nUmVjdDogSW1nUmVjdCA9IHt9IGFzIGFueTtcbiAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gbmV3IFNldDxTdWJzY3JpcHRpb24+KCk7XG4gIHByaXZhdGUgX3NpemVJbkJ5dGVzOiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVuIGlzIGxvYWRlZCBpbWFnZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9pc0xvYWRlZEltZzogYm9vbGVhbjtcblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgJiByZWFkeSBmb3IgY3JvcCAqL1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2Nyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfaW1nQ2FudmFzJywgeyBzdGF0aWM6IHRydWUgfSkgX2ltZ0NhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogSW1nQ3JvcHBlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSB0aGlzLl9jb25maWcubWF4RmlsZVNpemU7XG4gICAgaWYgKG1heEZpbGVTaXplKSB7XG4gICAgICB0aGlzLm1heEZpbGVTaXplID0gbWF4RmlsZVNpemU7XG4gICAgfVxuICB9XG4gIC8qKiBTZXQgc2NhbGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIHNldCBzY2FsZSh2YWw6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U2NhbGUodmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0IGV2ZW50IGBlcnJvcmAgaWYgdGhlIGZpbGUgc2l6ZSBmb3IgdGhlIGxpbWl0LlxuICAgKiBOb3RlOiBJdCBvbmx5IHdvcmtzIHdoZW4gdGhlIGltYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIGA8aW5wdXQ+YCBldmVudC5cbiAgICovXG4gIEBJbnB1dCgpIG1heEZpbGVTaXplOiBudW1iZXI7XG5cbiAgLyoqIEdldCBtaW4gc2NhbGUgKi9cbiAgZ2V0IG1pblNjYWxlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21pblNjYWxlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjYWxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBFbWl0IGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXJyb3JFdmVudD4oKTtcblxuICBwcml2YXRlIF9kZWZhdWx0VHlwZT86IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuID0+IGxpc3Rlbi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZ0VsZW1lbnQud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nRWxlbWVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0VsZW1lbnQsIDAsIDApO1xuXG4gICAgICAvKiogc2V0IG1pbiBzY2FsZSAqL1xuICAgICAgdGhpcy5fdXBkYXRlTWluU2NhbGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXNGb3JDb250SW1nKHZhbHVlczoge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gIH0pIHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7IH0gYXMgYW55O1xuICAgIGlmICh2YWx1ZXMueCAhPT0gdm9pZCAwICYmIHZhbHVlcy55ICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICAgIGNvbnN0IHggPSByb290UmVjdC53aWR0aCAvIDIgLSAodmFsdWVzLngpO1xuICAgICAgY29uc3QgeSA9IHJvb3RSZWN0LmhlaWdodCAvIDIgLSAodmFsdWVzLnkpO1xuXG4gICAgICB0aGlzLl9pbWdSZWN0LnggPSAodmFsdWVzLngpO1xuICAgICAgdGhpcy5faW1nUmVjdC55ID0gKHZhbHVlcy55KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueGMgPSAoeCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnljID0gKHkpO1xuXG4gICAgfVxuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsodGhpcy5faW1nUmVjdC54KX1weCwkeyh0aGlzLl9pbWdSZWN0LnkpfXB4LCAwKWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0aGlzLl9zY2FsM0ZpeH0pYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgbmV3U3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddID0gbmV3U3R5bGVzLnRyYW5zZm9ybTtcbiAgICBuZXdTdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbiddID0gbmV3U3R5bGVzLnRyYW5zZm9ybU9yaWdpbjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdHlsZXMpIHtcbiAgICAgIGlmIChuZXdTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudCwga2V5LCBuZXdTdHlsZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIF9yZXNpemUkKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoX2ltZy5maWxlcyAmJiBfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlU2l6ZSA9IF9pbWcuZmlsZXMhWzBdLnNpemU7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuICAgIGlmICh0aGlzLm1heEZpbGVTaXplICYmIGZpbGVTaXplID4gdGhpcy5tYXhGaWxlU2l6ZSkge1xuICAgICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXJyb3JFdmVudCA9IHtcbiAgICAgICAgbmFtZTogZmlsZU5hbWUsXG4gICAgICAgIHR5cGU6IF9pbWcuZmlsZXMhWzBdLnR5cGUsXG4gICAgICAgIHNpemU6IGZpbGVTaXplLFxuICAgICAgICBlcnJvcjogSW1nQ3JvcHBlckVycm9yLlNpemVcbiAgICAgIH07XG4gICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWFkRmlsZSA9IG5ldyBPYnNlcnZhYmxlPFByb2dyZXNzRXZlbnQ+KG9icyA9PiB7XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyID0+IG9icy5lcnJvcihlcnIpO1xuICAgICAgcmVhZGVyLm9uYWJvcnQgPSBlcnIgPT4gb2JzLmVycm9yKGVycik7XG4gICAgICByZWFkZXIub25sb2FkID0gKGV2KSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JzLm5leHQoZXYpO1xuICAgICAgICBvYnMuY29tcGxldGUoKTtcbiAgICAgIH0sIDEpO1xuXG4gICAgICByZXR1cm4gcmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlcyFbMF0pO1xuICAgIH0pXG4gICAgLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAobG9hZEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgICAvLyBTZXQgdHlwZVxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXMhWzBdLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IG5hbWVcbiAgICAgICAgdGhpcy5fZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICAgICAgLy8gc2V0IGZpbGUgc2l6ZVxuICAgICAgICB0aGlzLl9zaXplSW5CeXRlcyA9IF9pbWcuZmlsZXMhWzBdLnNpemU7XG5cbiAgICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcblxuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKHJlYWRGaWxlKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFcnJvckV2ZW50ID0ge1xuICAgICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgIHNpemU6IGZpbGVTaXplLFxuICAgICAgICAgIGVycm9yOiBJbWdDcm9wcGVyRXJyb3IuT3RoZXIsXG4gICAgICAgICAgZXJyb3JNc2c6ICdUaGUgRmlsZSBjb3VsZCBub3QgYmUgbG9hZGVkLidcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShyZWFkRmlsZSk7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2xpc3RlbmVycy5hZGQocmVhZEZpbGUpO1xuXG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZT86IG51bWJlciwgbm9BdXRvQ3JvcD86IGJvb2xlYW4pIHtcbiAgICAvLyBmaXggbWluIHNjYWxlXG4gICAgY29uc3QgbmV3U2l6ZSA9IHNpemUhID49IHRoaXMubWluU2NhbGUhICYmIHNpemUhIDw9IDEgPyBzaXplIDogdGhpcy5taW5TY2FsZTtcblxuICAgIC8vIGNoZWNrXG4gICAgY29uc3QgY2hhbmdlZCA9IHNpemUgIT0gbnVsbCAmJiBzaXplICE9PSB0aGlzLnNjYWxlICYmIG5ld1NpemUgIT09IHRoaXMuc2NhbGU7XG4gICAgdGhpcy5fc2NhbGUgPSBzaXplO1xuICAgIGlmICghY2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zY2FsM0ZpeCA9IG5ld1NpemU7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpblBvc2l0aW9uID0gey4uLnRoaXMuX2ltZ1JlY3R9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgICAgICB4OiBvcmlnaW5Qb3NpdGlvbi54LFxuICAgICAgICAgIHk6IG9yaWdpblBvc2l0aW9uLnksXG4gICAgICAgICAgbGVmdDogb3JpZ2luUG9zaXRpb24ueGMsXG4gICAgICAgICAgdG9wOiBvcmlnaW5Qb3NpdGlvbi55Y1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHt9KTtcbiAgICAgICAgdGhpcy5fbW92ZSh7XG4gICAgICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICBkZWx0YVk6IDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm1pblNjYWxlKSB7XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZUNoYW5nZS5lbWl0KHNpemUpO1xuICAgIGlmICghbm9BdXRvQ3JvcCkge1xuICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX2dldENlbnRlclBvaW50cygpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaW1nID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgeCA9IChyb290Lm9mZnNldFdpZHRoIC0gKGltZy53aWR0aCkpIC8gMjtcbiAgICBjb25zdCB5ID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gKGltZy5oZWlnaHQpKSAvIDI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcbiAgICovXG4gIGZpdFRvU2NyZWVuKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG1pbiA9IHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5faW1nO1xuICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgd2lkdGg6IG1pbi53aWR0aCAvIHdpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gaGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KTtcbiAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh0aGlzLm1pblNjYWxlKTtcbiAgfVxuXG4gIF9tb3ZlU3RhcnQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiB0aGlzLl9pbWdSZWN0LngsXG4gICAgICB5OiB0aGlzLl9pbWdSZWN0LnksXG4gICAgICBsZWZ0OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgdG9wOiB0aGlzLl9pbWdSZWN0LnljXG4gICAgfTtcbiAgfVxuICBfbW92ZShldmVudDogeyBzcmNFdmVudD86IHt9OyBkZWx0YVg6IGFueTsgZGVsdGFZOiBhbnk7IH0pIHtcbiAgICBsZXQgeDogbnVtYmVyIHwgdW5kZWZpbmVkLCB5OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc2NhbGVGaXggPSB0aGlzLl9zY2FsM0ZpeDtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBzdGFydFAgPSB0aGlzLm9mZnNldDtcbiAgICBpZiAoIXNjYWxlRml4IHx8ICFzdGFydFApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc01pblNjYWxlWSA9IGNhbnZhcy5oZWlnaHQgKiBzY2FsZUZpeCA8IGNvbmZpZy5oZWlnaHQgJiYgY29uZmlnLmV4dHJhWm9vbU91dDtcbiAgICBjb25zdCBpc01pblNjYWxlWCA9IGNhbnZhcy53aWR0aCAqIHNjYWxlRml4IDwgY29uZmlnLndpZHRoICYmIGNvbmZpZy5leHRyYVpvb21PdXQ7XG5cbiAgICBjb25zdCBsaW1pdExlZnQgPSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSA+PSBzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgbGltaXRSaWdodCA9IChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpICsgKGNhbnZhcy53aWR0aCkgLSAoc3RhcnRQLmxlZnQgLSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpKSA8PSBjb25maWcud2lkdGggLyBzY2FsZUZpeDtcbiAgICBjb25zdCBsaW1pdFRvcCA9ICgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgPj0gKHN0YXJ0UC50b3AgLSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpKSk7XG4gICAgY29uc3QgbGltaXRCb3R0b20gPSAoKChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMuaGVpZ2h0KSAtIChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIDw9IChjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXgpKTtcblxuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKChsaW1pdExlZnQgJiYgIWlzTWluU2NhbGVYKSB8fCAoIWxpbWl0TGVmdCAmJiBpc01pblNjYWxlWCkpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgLSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoKGxpbWl0UmlnaHQgJiYgIWlzTWluU2NhbGVYKSB8fCAoIWxpbWl0UmlnaHQgJiYgaXNNaW5TY2FsZVgpKSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpICsgKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gTGltaXQgZm9yIHRvcFxuICAgIGlmICgobGltaXRUb3AgJiYgIWlzTWluU2NhbGVZKSB8fCAoIWxpbWl0VG9wICYmIGlzTWluU2NhbGVZKSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApIC0gKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIExpbWl0IGZvciBib3R0b21cbiAgICBpZiAoKGxpbWl0Qm90dG9tICYmICFpc01pblNjYWxlWSkgfHwgKCFsaW1pdEJvdHRvbSAmJiBpc01pblNjYWxlWSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSArIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleSwgZGVwcmVjYXRlZFxuICAgIC8vIGlmIChldmVudC5zcmNFdmVudCAmJiBldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgIC8vICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgLy8gICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpICsgKHN0YXJ0UC54KTsgfVxuICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkgKyAoc3RhcnRQLnkpOyB9XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2FyZWFDcm9wcGVyUmVjdCgpO1xuICAgIGlmICh4ID09PSB1bmRlZmluZWQgJiYgeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB4ID0gdGhpcy5faW1nUmVjdC54YztcbiAgICAgIHkgPSB0aGlzLl9pbWdSZWN0LnljO1xuICAgIH1cbiAgICB4ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QubGVmdCkgLSAoeCEgLSAodGhpcy5jb25maWcud2lkdGggLyAyKSk7XG4gICAgeSA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QudG9wIC0gaG9zdFJlY3QudG9wKSAtICh5ISAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCEgKyAuMDU7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9pbWdSZWN0ID0geyB9IGFzIGFueTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICB0aGlzLl9zY2FsM0ZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gMDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCEgLSAuMDU7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSEgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuICB9XG4gIGNlbnRlcigpIHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuLyoqXG4gKiBMb2FkIEltYWdlIGZyb20gVVJMXG4gKiBAcGFyYW0gc3JjIFVSTFxuICogQHBhcmFtIGZuIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVtaXQgdGhlIGV2ZW50IGxvYWRlZFxuICovXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nLCBmbj86ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNsZWFuKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSBzcmM7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb25zdCBmaWxlU2l6ZSA9IHRoaXMuX3NpemVJbkJ5dGVzO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5fZmlsZU5hbWU7XG4gICAgY29uc3QgZGVmYXVsdFR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcblxuICAgIGltZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogZmlsZU5hbWUsXG4gICAgICB0eXBlOiBkZWZhdWx0VHlwZSxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjXG4gICAgfTtcblxuICAgIGltZy5zcmMgPSBzcmM7XG5cbiAgICBpZiAoZmlsZVNpemUpIHtcbiAgICAgIGNyb3BFdmVudC5zaXplID0gZmlsZVNpemU7XG4gICAgfVxuICAgIGNvbnN0IGxvYWRMaXN0ZW4gPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPihvYnMgPT4ge1xuXG4gICAgICBpbWcub25lcnJvciA9IGVyciA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICAgIGltZy5vbmFib3J0ID0gZXJyID0+IG9icy5lcnJvcihlcnIpO1xuICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgb2JzLm5leHQobnVsbCEpO1xuICAgICAgICBvYnMuY29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW1nTG9hZGVkKGltZyk7XG4gICAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICB0aGlzLl9uZ1pvbmVcbiAgICAgICAgICAub25TdGFibGVcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU1pblNjYWxlKHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSh0aGlzLm1pblNjYWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9KSwgMClcbiAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUobG9hZExpc3Rlbik7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KS5lcnJvciA9IEltZ0Nyb3BwZXJFcnJvci5UeXBlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShsb2FkTGlzdGVuKTtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzLmFkZChsb2FkTGlzdGVuKTtcblxuICAgIC8vIGNsZWFyXG4gICAgdGhpcy5fc2l6ZUluQnl0ZXMgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJvdGF0ZShkZWdyZWVzOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWxpZERlZ3JlZXMgPSB0aGlzLl9yb3RhdGlvbiA9IGNvbnZlcnRUb1ZhbGlkRGVncmVlcyhkZWdyZWVzKTtcbiAgICBjb25zdCBkZWdyZWVzUmFkID0gdmFsaWREZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjYW52YXNDbG9uID0gY3JlYXRlQ2FudmFzSW1nKGNhbnZhcyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0Nsb24ud2lkdGgsIGNhbnZhc0Nsb24uaGVpZ2h0KTtcblxuICAgIC8vIHJvdGF0ZSBjYW52YXMgaW1hZ2VcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7dmFsaWREZWdyZWVzfWRlZykgc2NhbGUoJHsxIC8gdGhpcy5fc2NhbDNGaXghfSlgO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgO1xuICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgY2FudmFzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICBjYW52YXMuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gdHJhbnNmb3JtT3JpZ2luO1xuICAgIGNhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gPSB0cmFuc2Zvcm1PcmlnaW47XG5cbiAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG5cbiAgICAvLyBzYXZlIHJlY3RcbiAgICBjb25zdCBjYW52YXNSZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gcmVtb3ZlIHJvdGF0ZSBzdHlsZXNcbiAgICBjYW52YXMucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgLy8gc2V0IHcgJiBoXG4gICAgY29uc3QgdyA9IGNhbnZhc1JlY3Qud2lkdGg7XG4gICAgY29uc3QgaCA9IGNhbnZhc1JlY3QuaGVpZ2h0O1xuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuXG4gICAgLy8gVXBkYXRlIG1pbiBzY2FsZVxuICAgIHRoaXMuX3VwZGF0ZU1pblNjYWxlKGNhbnZhcyk7XG5cbiAgICAvLyBzZXQgdGhlIG1pbmltdW0gc2NhbGUsIG9ubHkgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuc2NhbGUhIDwgdGhpcy5taW5TY2FsZSEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMCwgdHJ1ZSk7XG4gICAgfSAvLyAgICAgICAgICAgICAgICDihpEgbm8gQXV0b0Nyb3BcblxuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcblxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeDogKGxlZnQgLSByb290UmVjdC5sZWZ0KSxcbiAgICAgIHk6ICh0b3AgLSByb290UmVjdC50b3ApXG4gICAgfSk7XG5cbiAgICAvLyBrZWVwIGltYWdlIGluc2lkZSB0aGUgZnJhbWVcbiAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICB5OiBvcmlnaW5Qb3NpdGlvbi55LFxuICAgICAgbGVmdDogb3JpZ2luUG9zaXRpb24ueGMsXG4gICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHt9KTtcbiAgICB0aGlzLl9tb3ZlKHtcbiAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgIGRlbHRhWDogMCxcbiAgICAgIGRlbHRhWTogMFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1pblNjYWxlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICB0aGlzLl9taW5TY2FsZSA9IChjb25maWcuZXh0cmFab29tT3V0ID8gTWF0aC5taW4gOiBNYXRoLm1heCkoXG4gICAgICBjb25maWcud2lkdGggLyBjYW52YXMud2lkdGgsXG4gICAgICBjb25maWcuaGVpZ2h0IC8gY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICBjb25zdCBxID0gKChxdWFsaXR5ICogMTApICoqIG51bVN0ZXBzKSAvICgxMCAqKiBudW1TdGVwcyk7XG4gICAgY29uc3QgZmlsZVR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXG4gICAgaWYgKG51bVN0ZXBzKSB7XG4gICAgICAvKiogU2V0IHNpemUgKi9cbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXG4gICAgICBpZiAoZmlsZVR5cGUgPT09ICdpbWFnZS9wbmcnIHx8IGZpbGVUeXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcbiAgICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBTdGVwcyAqL1xuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKCkgPT4ge1xuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAgICAgMCwgMCxcbiAgICAgICAgICB3LCBoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGVwIGZpbmFsXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgICAqL1xuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcbiAgICAgIDAsIDAsXG4gICAgICBpbWcud2lkdGggKiBxLCBpbWcuaGVpZ2h0ICogcSxcbiAgICAgIDAsIDAsXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XG4gICAgKTtcbiAgICByZXR1cm4gb2M7XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBJbWFnZVxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAqL1xuICBjcm9wKGNvbmZpZz86IEltZ0Nyb3BwZXJDb25maWcpOiBJbWdDcm9wcGVyRXZlbnQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGNvbmZpZyA/IG1lcmdlRGVlcCh7fSwgdGhpcy5jb25maWcgfHwgQ09ORklHX0RFRkFVTFQsIGNvbmZpZykgOiB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjcm9wRXZlbnQgPSB0aGlzLl9pbWdDcm9wKG5ld0NvbmZpZyk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2ltZ0Nyb3AobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0ITtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4ITtcbiAgICBjb25zdCBsZWZ0ID0gaW1nUmVjdC54YyAtIChteUNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgdG9wID0gaW1nUmVjdC55YyAtIChteUNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXg7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpITtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50LFxuICAgICAgLShsZWZ0KSwgLSh0b3ApLFxuICAgICk7XG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgYW50aUFsaWFzZWRRID0gbXlDb25maWcuYW50aUFsaWFzZWQgPyAuNSA6IDE7XG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIGFudGlBbGlhc2VkUSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIGFudGlBbGlhc2VkUSk7XG4gICAgfVxuICAgIGxldCB1cmw7XG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYCR7bXlDb25maWcudHlwZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLl9kZWZhdWx0VHlwZSk7XG4gICAgfVxuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgZGF0YVVSTDogdXJsLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQsXG4gICAgICBzY2FsZTogdGhpcy5fc2NhbDNGaXgsXG4gICAgICByb3RhdGlvbjogdGhpcy5fcm90YXRpb24sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgICB5OiB0aGlzLl9pbWdSZWN0LnljXG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNyb3BwZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIF9yb290UmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgX2FyZWFDcm9wcGVyUmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbn1cblxuLyoqXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDUpID09PSA5MFxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQwKSA9PT0gMFxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDEwMCkgPT09IDkwXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyhudW06IG51bWJlcikge1xuICBjb25zdCB2YWwzNjAgPSBsaW1pdE51bShudW0sIDM2MCk7XG4gIGNvbnN0IHZhbDkwID0gbGltaXROdW0odmFsMzYwLnJlc3VsdCwgOTApO1xuICBjb25zdCBzaWduID0gTWF0aC5zaWduKG51bSk7XG4gIGlmICh2YWw5MC5yZXN1bHQgPj0gKDkwIC8gMikpIHtcbiAgICByZXR1cm4gOTAgKiAodmFsOTAucGFydHMgKyAxKSAqIHNpZ247XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDkwICogdmFsOTAucGFydHMgKiBzaWduO1xuICB9XG59XG5cbi8qKlxuICogZGVtbzpcbiAqIGxpbWl0TnVtKDQ1MCwgMzYwKSA9PT0gOTBcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbGltaXROdW0obnVtOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICBjb25zdCBudW1BYnMgPSBNYXRoLmFicyhudW0pO1xuICBjb25zdCBwYXJ0cyA9IE1hdGguZmxvb3IobnVtQWJzIC8gbnVtMik7XG4gIGxldCByZXN1bHQ6IG51bWJlcjtcbiAgaWYgKHBhcnRzKSB7XG4gICAgcmVzdWx0ID0gbnVtQWJzIC0gKG51bTIgKiBwYXJ0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gbnVtO1xuICB9XG4gIGlmIChudW1BYnMgIT09IG51bSkge1xuICAgIHJlc3VsdCAqPSAtMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3VsdCxcbiAgICBwYXJ0c1xuICB9O1xufVxuXG4vKipcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FudmFzSW1nKGltZzogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cbiAgLy8gY3JlYXRlIGEgbmV3IGNhbnZhc1xuICBjb25zdCBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAvLyBzZXQgZGltZW5zaW9uc1xuICBuZXdDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIG5ld0NhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuXG4gIC8vIGFwcGx5IHRoZSBvbGQgY2FudmFzIHRvIHRoZSBuZXcgb25lXG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzXG4gIHJldHVybiBuZXdDYW52YXM7XG59XG4iXX0=