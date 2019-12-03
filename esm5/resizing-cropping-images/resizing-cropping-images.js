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
        src = normalizeSVG(src);
        var img = createHtmlImg(src);
        var fileSize = this._sizeInBytes;
        var fileName = this._fileName;
        var defaultType = this._defaultType;
        var cropEvent = {
            name: fileName,
            type: defaultType,
            originalDataURL: src
        };
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
var DATA_IMAGE_SVG_PREFIX = 'data:image/svg+xml;base64,';
function normalizeSVG(dataURL) {
    if (window.atob && isSvgImage(dataURL)) {
        var len = dataURL.length / 5;
        var text = window.atob(dataURL.replace(DATA_IMAGE_SVG_PREFIX, ''));
        var span = document.createElement('span');
        span.innerHTML = text;
        var svg = span.querySelector('svg');
        span.setAttribute('style', 'display:none');
        document.body.appendChild(span);
        var width = parseFloat(getComputedStyle(svg).width) || 1;
        var height = parseFloat(getComputedStyle(svg).height) || 1;
        var max = Math.max(width, height);
        svg.setAttribute('width', len / (width / max) + "px");
        svg.setAttribute('height', len / (height / max) + "px");
        var result = DATA_IMAGE_SVG_PREFIX + window.btoa(span.innerHTML);
        document.body.removeChild(span);
        return result;
    }
    return dataURL;
}
function isSvgImage(dataUrl) {
    return dataUrl.startsWith(DATA_IMAGE_SVG_PREFIX);
}
function createHtmlImg(src) {
    var img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    return img;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBQ2xGLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0tBQ3JEO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFB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biAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgbWVyZ2VEZWVwLCBMWV9DT01NT05fU1RZTEVTLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnJic6IHRoZW1lLmltZ0Nyb3BwZXIgPyB0aGVtZS5pbWdDcm9wcGVyLnJvb3QgOiBudWxsXG4gIH0sXG4gIGltZ0NvbnRhaW5lcjoge1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICcmID4gY2FudmFzJzoge1xuICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH1cbiAgfSxcbiAgYXJlYToge1xuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfVxuICB9LFxuICBkZWZhdWx0Q29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyYsICYgPiBpbnB1dCc6IExZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAnJiAqOm5vdChpbnB1dCknOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcmID4gaW5wdXQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfVxufSk7XG4vKiogSW1hZ2UgQ3JvcHBlciBDb25maWcgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckNvbmZpZyB7XG4gIC8qKiBDcm9wcGVyIGFyZWEgd2lkdGggKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnLiAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgYXV0b0Nyb3A/OiBib29sZWFuO1xuICBvdXRwdXQ/OiBJbWdPdXRwdXQgfCBJbWdSZXNvbHV0aW9uO1xuICAvKipcbiAgICogWm9vbSBvdXQgdW50aWwgdGhlIGVudGlyZSBpbWFnZSBmaXRzIGludG8gdGhlIGNyb3BwaW5nIGFyZWEuXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBleHRyYVpvb21PdXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogRW1pdCBldmVudCBgZXJyb3JgIGlmIHRoZSBmaWxlIHNpemUgaW4gYnl0ZXMgZm9yIHRoZSBsaW1pdC5cbiAgICogTm90ZTogSXQgb25seSB3b3JrcyB3aGVuIHRoZSBpbWFnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBgPGlucHV0PmAgZXZlbnQuXG4gICAqL1xuICBtYXhGaWxlU2l6ZT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nT3V0cHV0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ0Nyb3BwZXJFcnJvciB7XG4gIC8qKiBUaGUgbG9hZGVkIGltYWdlIGV4Y2VlZHMgdGhlIHNpemUgbGltaXQgc2V0LiAqL1xuICBTaXplLFxuICAvKiogVGhlIGZpbGUgbG9hZGVkIGlzIG5vdCBpbWFnZS4gKi9cbiAgVHlwZSxcbiAgLyoqIFdoZW4gdGhlIGltYWdlIGhhcyBub3QgYmVlbiBsb2FkZWQuICovXG4gIE90aGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgZGF0YSBVUkwgKi9cbiAgZGF0YVVSTD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEZpbGV0eXBlICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiBPcmlnaW5hbCBJbWFnZSBkYXRhIFVSTCAqL1xuICBvcmlnaW5hbERhdGFVUkw/OiBzdHJpbmc7XG4gIHNjYWxlPzogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICAvKiogU2l6ZSBvZiB0aGUgaW1hZ2UgaW4gYnl0ZXMgKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgcG9zaXRpb24/OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckVycm9yRXZlbnQgZXh0ZW5kcyBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogVHlwZSBvZiBlcnJvciAqL1xuICBlcnJvcjogSW1nQ3JvcHBlckVycm9yO1xuICBlcnJvck1zZz86IHN0cmluZztcbn1cblxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8SW1nQ3JvcHBlckNvbmZpZz57XG4gIHdpZHRoOiAyNTAsXG4gIGhlaWdodDogMjAwLFxuICBvdXRwdXQ6IEltZ1Jlc29sdXRpb24uRGVmYXVsdCxcbiAgYW50aUFsaWFzZWQ6IHRydWVcbn07XG5cbmludGVyZmFjZSBJbWdSZWN0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHhjOiBudW1iZXI7XG4gIHljOiBudW1iZXI7XG4gIC8qKiB0cmFuc2Zvcm0gd2l0aCAqL1xuICB3dDogbnVtYmVyO1xuICBodDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgX29yaWdpbmFsSW1nQmFzZTY0Pzogc3RyaW5nO1xuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcblxuICAvKiogT3JpZ2luYWwgaW1hZ2UgKi9cbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIG9mZnNldD86IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBsZWZ0OiBudW1iZXJcbiAgICB0b3A6IG51bWJlclxuICB9O1xuICBwcml2YXRlIF9zY2FsZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2NhbDNGaXg/OiBudW1iZXI7XG4gIHByaXZhdGUgX21pblNjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG4gIHByaXZhdGUgX2ltZ1JlY3Q6IEltZ1JlY3QgPSB7fSBhcyBhbnk7XG4gIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXI7XG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IG5ldyBTZXQ8U3Vic2NyaXB0aW9uPigpO1xuICBwcml2YXRlIF9zaXplSW5CeXRlczogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogV2hlbiBpcyBsb2FkZWQgaW1hZ2VcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfaXNMb2FkZWRJbWc6IGJvb2xlYW47XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICYgcmVhZHkgZm9yIGNyb3AgKi9cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgX2ltZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2ltZ0NhbnZhcycsIHsgc3RhdGljOiB0cnVlIH0pIF9pbWdDYW52YXM6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+O1xuICBASW5wdXQoKVxuICBnZXQgY29uZmlnKCk6IEltZ0Nyb3BwZXJDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWw6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBtZXJnZURlZXAoe30sIENPTkZJR19ERUZBVUxULCB2YWwpO1xuICAgIGNvbnN0IG1heEZpbGVTaXplID0gdGhpcy5fY29uZmlnLm1heEZpbGVTaXplO1xuICAgIGlmIChtYXhGaWxlU2l6ZSkge1xuICAgICAgdGhpcy5tYXhGaWxlU2l6ZSA9IG1heEZpbGVTaXplO1xuICAgIH1cbiAgfVxuICAvKiogU2V0IHNjYWxlICovXG4gIEBJbnB1dCgpXG4gIGdldCBzY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuICBzZXQgc2NhbGUodmFsOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFNjYWxlKHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdCBldmVudCBgZXJyb3JgIGlmIHRoZSBmaWxlIHNpemUgZm9yIHRoZSBsaW1pdC5cbiAgICogTm90ZTogSXQgb25seSB3b3JrcyB3aGVuIHRoZSBpbWFnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBgPGlucHV0PmAgZXZlbnQuXG4gICAqL1xuICBASW5wdXQoKSBtYXhGaWxlU2l6ZTogbnVtYmVyO1xuXG4gIC8qKiBHZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9taW5TY2FsZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBzY2FsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogRW1pdCBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckVycm9yRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdFR5cGU/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGxpc3RlbiA9PiBsaXN0ZW4udW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjYW52YXMud2lkdGggPSBpbWdFbGVtZW50LndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltZ0VsZW1lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWdFbGVtZW50LCAwLCAwKTtcblxuICAgICAgLyoqIHNldCBtaW4gc2NhbGUgKi9cbiAgICAgIHRoaXMuX3VwZGF0ZU1pblNjYWxlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyh2YWx1ZXM6IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICB9KSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0geyB9IGFzIGFueTtcbiAgICBpZiAodmFsdWVzLnggIT09IHZvaWQgMCAmJiB2YWx1ZXMueSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgICBjb25zdCB4ID0gcm9vdFJlY3Qud2lkdGggLyAyIC0gKHZhbHVlcy54KTtcbiAgICAgIGNvbnN0IHkgPSByb290UmVjdC5oZWlnaHQgLyAyIC0gKHZhbHVlcy55KTtcblxuICAgICAgdGhpcy5faW1nUmVjdC54ID0gKHZhbHVlcy54KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueSA9ICh2YWx1ZXMueSk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnhjID0gKHgpO1xuICAgICAgdGhpcy5faW1nUmVjdC55YyA9ICh5KTtcblxuICAgIH1cbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7KHRoaXMuX2ltZ1JlY3QueCl9cHgsJHsodGhpcy5faW1nUmVjdC55KX1weCwgMClgO1xuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gKz0gYHNjYWxlKCR7dGhpcy5fc2NhbDNGaXh9KWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgO1xuICAgIG5ld1N0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IG5ld1N0eWxlcy50cmFuc2Zvcm07XG4gICAgbmV3U3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nXSA9IG5ld1N0eWxlcy50cmFuc2Zvcm1PcmlnaW47XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBfcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMgJiYgX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVNpemUgPSBfaW1nLmZpbGVzIVswXS5zaXplO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cbiAgICBpZiAodGhpcy5tYXhGaWxlU2l6ZSAmJiBmaWxlU2l6ZSA+IHRoaXMubWF4RmlsZVNpemUpIHtcbiAgICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckVycm9yRXZlbnQgPSB7XG4gICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICB0eXBlOiBfaW1nLmZpbGVzIVswXS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlU2l6ZSxcbiAgICAgICAgZXJyb3I6IEltZ0Nyb3BwZXJFcnJvci5TaXplXG4gICAgICB9O1xuICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZEZpbGUgPSBuZXcgT2JzZXJ2YWJsZTxQcm9ncmVzc0V2ZW50PihvYnMgPT4ge1xuXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25lcnJvciA9IGVyciA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICAgIHJlYWRlci5vbmFib3J0ID0gZXJyID0+IG9icy5lcnJvcihlcnIpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldikgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9icy5uZXh0KGV2KTtcbiAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICB9LCAxKTtcblxuICAgICAgcmV0dXJuIHJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXMhWzBdKTtcbiAgICB9KVxuICAgIC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGxvYWRFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0IGFzIHN0cmluZztcbiAgICAgICAgLy8gU2V0IHR5cGVcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzIVswXS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBuYW1lXG4gICAgICAgIHRoaXMuX2ZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIC8vIHNldCBmaWxlIHNpemVcbiAgICAgICAgdGhpcy5fc2l6ZUluQnl0ZXMgPSBfaW1nLmZpbGVzIVswXS5zaXplO1xuXG4gICAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XG5cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShyZWFkRmlsZSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXJyb3JFdmVudCA9IHtcbiAgICAgICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgICBzaXplOiBmaWxlU2l6ZSxcbiAgICAgICAgICBlcnJvcjogSW1nQ3JvcHBlckVycm9yLk90aGVyLFxuICAgICAgICAgIGVycm9yTXNnOiAnVGhlIEZpbGUgY291bGQgbm90IGJlIGxvYWRlZC4nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUocmVhZEZpbGUpO1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9saXN0ZW5lcnMuYWRkKHJlYWRGaWxlKTtcblxuICB9XG5cbiAgLyoqIFNldCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2UsIHRoZSB2YWx1ZXMgY2FuIGJlIDAgYmV0d2VlbiAxLCB3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplICovXG4gIHNldFNjYWxlKHNpemU/OiBudW1iZXIsIG5vQXV0b0Nyb3A/OiBib29sZWFuKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIGNvbnN0IG5ld1NpemUgPSBzaXplISA+PSB0aGlzLm1pblNjYWxlISAmJiBzaXplISA8PSAxID8gc2l6ZSA6IHRoaXMubWluU2NhbGU7XG5cbiAgICAvLyBjaGVja1xuICAgIGNvbnN0IGNoYW5nZWQgPSBzaXplICE9IG51bGwgJiYgc2l6ZSAhPT0gdGhpcy5zY2FsZSAmJiBuZXdTaXplICE9PSB0aGlzLnNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBpZiAoIWNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2NhbDNGaXggPSBuZXdTaXplO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgeDogb3JpZ2luUG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBvcmlnaW5Qb3NpdGlvbi55LFxuICAgICAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLnhjLFxuICAgICAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueWNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7fSk7XG4gICAgICAgIHRoaXMuX21vdmUoe1xuICAgICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgZGVsdGFZOiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5TY2FsZSkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NhbGVDaGFuZ2UuZW1pdChzaXplKTtcbiAgICBpZiAoIW5vQXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGgpKSAvIDI7XG4gICAgY29uc3QgeSA9IChyb290Lm9mZnNldEhlaWdodCAtIChpbWcuaGVpZ2h0KSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5faW1nUmVjdC54LFxuICAgICAgeTogdGhpcy5faW1nUmVjdC55LFxuICAgICAgbGVmdDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgIHRvcDogdGhpcy5faW1nUmVjdC55Y1xuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQ6IHsgc3JjRXZlbnQ/OiB7fTsgZGVsdGFYOiBhbnk7IGRlbHRhWTogYW55OyB9KSB7XG4gICAgbGV0IHg6IG51bWJlciB8IHVuZGVmaW5lZCwgeTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgY29uc3Qgc3RhcnRQID0gdGhpcy5vZmZzZXQ7XG4gICAgaWYgKCFzY2FsZUZpeCB8fCAhc3RhcnRQKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNNaW5TY2FsZVkgPSBjYW52YXMuaGVpZ2h0ICogc2NhbGVGaXggPCBjb25maWcuaGVpZ2h0ICYmIGNvbmZpZy5leHRyYVpvb21PdXQ7XG4gICAgY29uc3QgaXNNaW5TY2FsZVggPSBjYW52YXMud2lkdGggKiBzY2FsZUZpeCA8IGNvbmZpZy53aWR0aCAmJiBjb25maWcuZXh0cmFab29tT3V0O1xuXG4gICAgY29uc3QgbGltaXRMZWZ0ID0gKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgPj0gc3RhcnRQLmxlZnQgLSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IGxpbWl0UmlnaHQgPSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMud2lkdGgpIC0gKHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkgPD0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY29uc3QgbGltaXRUb3AgPSAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpO1xuICAgIGNvbnN0IGxpbWl0Qm90dG9tID0gKCgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLmhlaWdodCkgLSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSA8PSAoY29uZmlnLmhlaWdodCAvIHNjYWxlRml4KSk7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmICgobGltaXRMZWZ0ICYmICFpc01pblNjYWxlWCkgfHwgKCFsaW1pdExlZnQgJiYgaXNNaW5TY2FsZVgpKSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpIC0gKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgfVxuXG4gICAgLy8gTGltaXQgZm9yIHJpZ2h0XG4gICAgaWYgKChsaW1pdFJpZ2h0ICYmICFpc01pblNjYWxlWCkgfHwgKCFsaW1pdFJpZ2h0ICYmIGlzTWluU2NhbGVYKSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSArIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLndpZHRoO1xuICAgIH1cblxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGxpbWl0VG9wICYmICFpc01pblNjYWxlWSkgfHwgKCFsaW1pdFRvcCAmJiBpc01pblNjYWxlWSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKChsaW1pdEJvdHRvbSAmJiAhaXNNaW5TY2FsZVkpIHx8ICghbGltaXRCb3R0b20gJiYgaXNNaW5TY2FsZVkpKSB7XG4gICAgICB5ID0gc3RhcnRQLnkgKyAoc3RhcnRQLnRvcCkgKyAoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXksIGRlcHJlY2F0ZWRcbiAgICAvLyBpZiAoZXZlbnQuc3JjRXZlbnQgJiYgZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAvLyAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgIC8vICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSArIChzdGFydFAueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHN0YXJ0UC55KTsgfVxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkICYmIHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QubGVmdCAtIGhvc3RSZWN0LmxlZnQpIC0gKHghIC0gKHRoaXMuY29uZmlnLndpZHRoIC8gMikpO1xuICAgIHkgPSAoY3JvcHBpbmdDb250YWluZXJSZWN0LnRvcCAtIGhvc3RSZWN0LnRvcCkgLSAoeSEgLSAodGhpcy5jb25maWcuaGVpZ2h0IC8gMikpO1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgX3NsaWRlRW5kKCkge1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jcm9wSWZBdXRvQ3JvcCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuY3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXghICsgLjA1O1xuICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFuIHRoZSBpbWcgY3JvcHBlciAqL1xuICBjbGVhbigpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy5faW1nUmVjdCA9IHsgfSBhcyBhbnk7XG4gICAgICB0aGlzLm9mZnNldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQgYXMgYW55O1xuICAgICAgdGhpcy5fc2NhbDNGaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gZmFsc2U7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IDA7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXghIC0gLjA1O1xuICAgIGlmIChzY2FsZSA+IHRoaXMubWluU2NhbGUhICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbi8qKlxuICogTG9hZCBJbWFnZSBmcm9tIFVSTFxuICogQHBhcmFtIHNyYyBVUkxcbiAqIEBwYXJhbSBmbiBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlbWl0IHRoZSBldmVudCBsb2FkZWRcbiAqL1xuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZywgZm4/OiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jbGVhbigpO1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gc3JjO1xuICAgIHNyYyA9IG5vcm1hbGl6ZVNWRyhzcmMpO1xuXG4gICAgY29uc3QgaW1nID0gY3JlYXRlSHRtbEltZyhzcmMpO1xuICAgIGNvbnN0IGZpbGVTaXplID0gdGhpcy5fc2l6ZUluQnl0ZXM7XG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLl9maWxlTmFtZTtcbiAgICBjb25zdCBkZWZhdWx0VHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuXG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgIHR5cGU6IGRlZmF1bHRUeXBlLFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiBzcmNcbiAgICB9O1xuXG4gICAgaWYgKGZpbGVTaXplKSB7XG4gICAgICBjcm9wRXZlbnQuc2l6ZSA9IGZpbGVTaXplO1xuICAgIH1cbiAgICBjb25zdCBsb2FkTGlzdGVuID0gbmV3IE9ic2VydmFibGU8dm9pZD4ob2JzID0+IHtcblxuICAgICAgaW1nLm9uZXJyb3IgPSBlcnIgPT4gb2JzLmVycm9yKGVycik7XG4gICAgICBpbWcub25hYm9ydCA9IGVyciA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIG9icy5uZXh0KG51bGwhKTtcbiAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICB9O1xuICAgIH0pXG4gICAgLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ltZ0xvYWRlZChpbWcpO1xuICAgICAgICBjcm9wRXZlbnQud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgICAgdGhpcy5fbmdab25lXG4gICAgICAgICAgLm9uU3RhYmxlXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcblxuICAgICAgICAgICAgICB0aGlzLl91cGRhdGVNaW5TY2FsZSh0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSksIDApXG4gICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGxvYWRMaXN0ZW4pO1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgKGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCkuZXJyb3IgPSBJbWdDcm9wcGVyRXJyb3IuVHlwZTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUobG9hZExpc3Rlbik7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2xpc3RlbmVycy5hZGQobG9hZExpc3Rlbik7XG5cbiAgICAvLyBjbGVhclxuICAgIHRoaXMuX3NpemVJbkJ5dGVzID0gbnVsbDtcbiAgICB0aGlzLl9maWxlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5fZGVmYXVsdFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICByb3RhdGUoZGVncmVlczogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsaWREZWdyZWVzID0gdGhpcy5fcm90YXRpb24gPSBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoZGVncmVlcyk7XG4gICAgY29uc3QgZGVncmVlc1JhZCA9IHZhbGlkRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2FudmFzQ2xvbiA9IGNyZWF0ZUNhbnZhc0ltZyhjYW52YXMpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNDbG9uLndpZHRoLCBjYW52YXNDbG9uLmhlaWdodCk7XG5cbiAgICAvLyByb3RhdGUgY2FudmFzIGltYWdlXG4gICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgke3ZhbGlkRGVncmVlc31kZWcpIHNjYWxlKCR7MSAvIHRoaXMuX3NjYWwzRml4IX0pYDtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBgJHt0aGlzLl9pbWdSZWN0LnhjfXB4ICR7dGhpcy5faW1nUmVjdC55Y31weCAwYDtcbiAgICBjYW52YXMuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIGNhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IHRyYW5zZm9ybU9yaWdpbjtcbiAgICBjYW52YXMuc3R5bGUud2Via2l0VHJhbnNmb3JtT3JpZ2luID0gdHJhbnNmb3JtT3JpZ2luO1xuXG4gICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgY2FudmFzLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgIC8vIHNldCB3ICYgaFxuICAgIGNvbnN0IHcgPSBjYW52YXNSZWN0LndpZHRoO1xuICAgIGNvbnN0IGggPSBjYW52YXNSZWN0LmhlaWdodDtcbiAgICBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAvLyB0cmFuc2xhdGUgYW5kIHJvdGF0ZVxuICAgIGN0eC50cmFuc2xhdGUodyAvIDIsIGggLyAyKTtcbiAgICBjdHgucm90YXRlKGRlZ3JlZXNSYWQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzQ2xvbiwgLWNhbnZhc0Nsb24ud2lkdGggLyAyLCAtY2FudmFzQ2xvbi5oZWlnaHQgLyAyKTtcblxuICAgIC8vIFVwZGF0ZSBtaW4gc2NhbGVcbiAgICB0aGlzLl91cGRhdGVNaW5TY2FsZShjYW52YXMpO1xuXG4gICAgLy8gc2V0IHRoZSBtaW5pbXVtIHNjYWxlLCBvbmx5IGlmIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLnNjYWxlISA8IHRoaXMubWluU2NhbGUhKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDAsIHRydWUpO1xuICAgIH0gLy8gICAgICAgICAgICAgICAg4oaRIG5vIEF1dG9Dcm9wXG5cbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHg6IChsZWZ0IC0gcm9vdFJlY3QubGVmdCksXG4gICAgICB5OiAodG9wIC0gcm9vdFJlY3QudG9wKVxuICAgIH0pO1xuXG4gICAgLy8ga2VlcCBpbWFnZSBpbnNpZGUgdGhlIGZyYW1lXG4gICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBvcmlnaW5Qb3NpdGlvbi54LFxuICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLnhjLFxuICAgICAgdG9wOiBvcmlnaW5Qb3NpdGlvbi55Y1xuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7fSk7XG4gICAgdGhpcy5fbW92ZSh7XG4gICAgICBzcmNFdmVudDoge30sXG4gICAgICBkZWx0YVg6IDAsXG4gICAgICBkZWx0YVk6IDBcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNaW5TY2FsZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy5fbWluU2NhbGUgPSAoY29uZmlnLmV4dHJhWm9vbU91dCA/IE1hdGgubWluIDogTWF0aC5tYXgpKFxuICAgICAgY29uZmlnLndpZHRoIC8gY2FudmFzLndpZHRoLFxuICAgICAgY29uZmlnLmhlaWdodCAvIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyhNYXRoLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gTWF0aC5tYXgoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KSkgLyBNYXRoLmxvZygyKSkgLSAxO1xuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcblxuICAgIC8qKkFycmF5IHN0ZXBzICovXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xuXG4gICAgLyoqIENvbnRleHQgKi9cbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgY29uc3QgcSA9ICgocXVhbGl0eSAqIDEwKSAqKiBudW1TdGVwcykgLyAoMTAgKiogbnVtU3RlcHMpO1xuICAgIGNvbnN0IGZpbGVUeXBlID0gdGhpcy5fZGVmYXVsdFR5cGU7XG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xuICAgIGlmIChudW1TdGVwcykge1xuICAgICAgLyoqIFNldCBzaXplICovXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xuICAgICAgaWYgKGZpbGVUeXBlID09PSAnaW1hZ2UvcG5nJyB8fCBmaWxlVHlwZSA9PT0gJ2ltYWdlL3N2Zyt4bWwnKSB7XG4gICAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuICAgICAgfVxuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgdywgaFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RlcCBmaW5hbFxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICAgKi9cbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJykhO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogcSwgaW1nLmhlaWdodCAqIHEsXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5faW1nQ3JvcChuZXdDb25maWcpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9pbWdDcm9wKG15Q29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBpbWdSZWN0ID0gdGhpcy5faW1nUmVjdCE7XG4gICAgY29uc3Qgc2NhbGVGaXggPSB0aGlzLl9zY2FsM0ZpeCE7XG4gICAgY29uc3QgbGVmdCA9IGltZ1JlY3QueGMgLSAobXlDb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IHRvcCA9IGltZ1JlY3QueWMgLSAobXlDb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4O1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHNjYWxlRml4O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICB9XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudCxcbiAgICAgIC0obGVmdCksIC0odG9wKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGAke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIGRhdGFVUkw6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0LFxuICAgICAgc2NhbGU6IHRoaXMuX3NjYWwzRml4LFxuICAgICAgcm90YXRpb246IHRoaXMuX3JvdGF0aW9uLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgICAgeTogdGhpcy5faW1nUmVjdC55Y1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9hcmVhQ3JvcHBlclJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG59XG5cbi8qKlxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQ1KSA9PT0gOTBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0MCkgPT09IDBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcygxMDApID09PSA5MFxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMobnVtOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsMzYwID0gbGltaXROdW0obnVtLCAzNjApO1xuICBjb25zdCB2YWw5MCA9IGxpbWl0TnVtKHZhbDM2MC5yZXN1bHQsIDkwKTtcbiAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihudW0pO1xuICBpZiAodmFsOTAucmVzdWx0ID49ICg5MCAvIDIpKSB7XG4gICAgcmV0dXJuIDkwICogKHZhbDkwLnBhcnRzICsgMSkgKiBzaWduO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA5MCAqIHZhbDkwLnBhcnRzICogc2lnbjtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW86XG4gKiBsaW1pdE51bSg0NTAsIDM2MCkgPT09IDkwXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0TnVtKG51bTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgY29uc3QgbnVtQWJzID0gTWF0aC5hYnMobnVtKTtcbiAgY29uc3QgcGFydHMgPSBNYXRoLmZsb29yKG51bUFicyAvIG51bTIpO1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gIGlmIChwYXJ0cykge1xuICAgIHJlc3VsdCA9IG51bUFicyAtIChudW0yICogcGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IG51bTtcbiAgfVxuICBpZiAobnVtQWJzICE9PSBudW0pIHtcbiAgICByZXN1bHQgKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gICAgcGFydHNcbiAgfTtcbn1cblxuLyoqXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0ltZyhpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCkge1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXNcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgLy8gc2V0IGRpbWVuc2lvbnNcbiAgbmV3Q2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICBuZXdDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcblxuICAvLyBhcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxuICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gIC8vIHJldHVybiB0aGUgbmV3IGNhbnZhc1xuICByZXR1cm4gbmV3Q2FudmFzO1xufVxuXG5cbmNvbnN0IERBVEFfSU1BR0VfU1ZHX1BSRUZJWCA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCc7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNWRyhkYXRhVVJMOiBzdHJpbmcpIHtcbiAgaWYgKHdpbmRvdy5hdG9iICYmIGlzU3ZnSW1hZ2UoZGF0YVVSTCkpIHtcbiAgICBjb25zdCBsZW4gPSBkYXRhVVJMLmxlbmd0aCAvIDU7XG4gICAgY29uc3QgdGV4dCA9IHdpbmRvdy5hdG9iKGRhdGFVUkwucmVwbGFjZShEQVRBX0lNQUdFX1NWR19QUkVGSVgsICcnKSk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IHRleHQ7XG4gICAgY29uc3Qgc3ZnID0gc3Bhbi5xdWVyeVNlbGVjdG9yKCdzdmcnKSE7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgY29uc3Qgd2lkdGggPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoc3ZnKS53aWR0aCEpIHx8IDE7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHN2ZykuaGVpZ2h0ISkgfHwgMTtcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7bGVuIC8gKHdpZHRoIC8gbWF4KX1weGApO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2xlbiAvIChoZWlnaHQgLyBtYXgpfXB4YCk7XG4gICAgY29uc3QgcmVzdWx0ID0gREFUQV9JTUFHRV9TVkdfUFJFRklYICsgd2luZG93LmJ0b2Eoc3Bhbi5pbm5lckhUTUwpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3Bhbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gZGF0YVVSTDtcbn1cblxuZnVuY3Rpb24gaXNTdmdJbWFnZShkYXRhVXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGRhdGFVcmwuc3RhcnRzV2l0aChEQVRBX0lNQUdFX1NWR19QUkVGSVgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIdG1sSW1nKHNyYzogc3RyaW5nKSB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gc3JjO1xuICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgcmV0dXJuIGltZztcbn1cbiJdfQ==