/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2 } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LyTheme2 } from '@alyle/ui';
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
const CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImageResolution.Default
});
export class LyResizingCroppingImages {
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
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
            const originalImageUrl = /** @type {?} */ ((/** @type {?} */ (loadEvent.target)).result);
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
                template: "<div [className]=\"classes.imgContainer\" #_imgContainer\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\"\n[ngStyle]=\"dragData | async\">\n  <img *ngIf=\"isLoaded\"\n  [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>"
            }] }
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
if (false) {
    /** @type {?} */
    LyResizingCroppingImages.prototype.classes;
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
    LyResizingCroppingImages.prototype.scale;
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
    LyResizingCroppingImages.prototype._renderer;
    /** @type {?} */
    LyResizingCroppingImages.prototype.theme;
    /** @type {?} */
    LyResizingCroppingImages.prototype.elementRef;
    /** @type {?} */
    LyResizingCroppingImages.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUcsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRXJDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUUxQixNQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0oscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLGlCQUFpQixFQUFFLE1BQU07UUFDekIsVUFBVSxFQUFFLE1BQU07UUFDbEIsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxhQUFhLEVBQUUsTUFBTTtTQUN0QjtLQUNGO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFB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LENBQUM7UUFDdEIsT0FBTyxHQUFHLENBQUM7S0FDWjs7O1lBNVZGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHVuQkFBOEM7YUFDOUM7Ozs7WUExR0EsU0FBUztZQUdGLFFBQVE7WUFYZixVQUFVO1lBSVYsaUJBQWlCOzs7MkJBeUhoQixTQUFTLFNBQUMsZUFBZTtnQ0FDekIsU0FBUyxTQUFDLG9CQUFvQjtrQkFDOUIsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBSUwsTUFBTTtzQkFFTixNQUFNO29CQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVE9ETzogYWRkIHJlc2l6aW5nIGltYWdlXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsIFN1YmplY3QgLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcclxuXHJcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoe1xyXG4gIHJvb3Q6IHtcclxuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxyXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxyXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgaW1nQ29udGFpbmVyOiB7XHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgICcmID4gaW1nJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JvcHBpbmdDb250YWluZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuMjkpJyxcclxuICAgICcmOjphZnRlcic6IHtcclxuICAgICAgY29udGVudDogYCcnYCxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcclxuICAgIH1cclxuICB9LFxyXG4gIGNyb3BwQ29udGVudDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgICcmICo6bm90KGlucHV0KSc6IHtcclxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXHJcbiAgICB9LFxyXG4gICAgJyYgPiBpbnB1dCc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cclxuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcclxuICBvdXRwdXQ/OiB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgfSB8IEltYWdlUmVzb2x1dGlvbjtcclxufVxyXG5leHBvcnQgZW51bSBJbWFnZVJlc29sdXRpb24ge1xyXG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXHJcbiAgRGVmYXVsdCxcclxuICAvKiogT25seSBjcm9wcGluZyAqL1xyXG4gIE9yaWdpbmFsSW1hZ2VcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENyb3BwZWRJbWFnZSB7XHJcbiAgYmFzZTY0SW1hZ2U6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVN0YXRlIHtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3A6IGJvb2xlYW47XHJcbn1cclxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8THlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnPntcclxuICB3aWR0aDogMjUwLFxyXG4gIGhlaWdodDogMjAwLFxyXG4gIG91dHB1dDogSW1hZ2VSZXNvbHV0aW9uLkRlZmF1bHRcclxufTtcclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdseS1jcm9wcGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xyXG4gfSlcclxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XHJcbiAgaW1nOiBCZWhhdmlvclN1YmplY3Q8SFRNTEltYWdlRWxlbWVudD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xyXG4gIHJlc3VsdDogc3RyaW5nO1xyXG4gIGZpbGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcclxuICBwcml2YXRlIHNjYWxlOiBudW1iZXI7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBpbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29uZmlnOiBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBDT05GSUdfREVGQVVMVDtcclxuICBpc0xvYWRlZDogYm9vbGVhbjtcclxuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XHJcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cclxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDcm9wcGVkSW1hZ2U+KCk7XHJcbiAgLyoqIE9uIGVycm9yIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2RyYWdEYXRhOiBTdWJqZWN0PHt3aWR0aDogc3RyaW5nLCBoZWlnaHQ6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmd9PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ0RhdGE6IE9ic2VydmFibGU8e3dpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCB0cmFuc2Zvcm06IHN0cmluZ30+O1xyXG4gIHByaXZhdGUgem9vbVNjYWxlID0gLjE7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XHJcbiAgICB0aGlzLmRyYWdEYXRhID0gdGhpcy5fZHJhZ0RhdGEuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZztcclxuICAgIGltZy5zdWJzY3JpYmUoKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGltZ0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xyXG4gICAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xyXG4gICAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnpvb21TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuZml0KCk7XHJcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcclxuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICB0aGlzLmZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XHJcblxyXG4gICAgLyoqIFNldCB0eXBlICovXHJcbiAgICB0aGlzLmRlZmF1bHRUeXBlID0gbnVsbDtcclxuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2RyYWdEYXRhLm5leHQobnVsbCk7XHJcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XHJcbiAgfVxyXG4gIGZpeGVkTnVtKG51bTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0udG9GaXhlZCgwKSk7XHJcbiAgfVxyXG4gIHNldFNjYWxlKHNpemU6IG51bWJlcikge1xyXG4gICAgLy8gaWYgKCEoc2l6ZSA+IDAgJiYgc2l6ZSA8PSAxKSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuc2NhbGUgPSBzaXplO1xyXG4gICAgc2l6ZSA9IHNpemUgKiAxMDA7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZztcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5maXhlZE51bShpbml0aWFsSW1nLndpZHRoICogc2l6ZSAvIDEwMCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmZpeGVkTnVtKGluaXRpYWxJbWcuaGVpZ2h0ICogc2l6ZSAvIDEwMCk7XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHtcclxuICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBjdXN0b21DZW50ZXIod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHcgPSAocm9vdC5vZmZzZXRXaWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICBjb25zdCBoID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7d31weCwgJHtofXB4LCAwKWA7XHJcbiAgfVxyXG5cclxuICAnMToxJygpIHtcclxuICAgIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcclxuICAgKi9cclxuICBmaXRUb1NjcmVlbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgbWluID0ge1xyXG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgd2lkdGg6IG1pbi53aWR0aCAvIHNpemUud2lkdGggKiAxMDAsXHJcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XHJcbiAgICAvLyBpZiAocmVzdWx0ID49IDEpIHtcclxuICAgICAgLy8gdGhpcy5zZXRTY2FsZSgxKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGZpdCgpIHtcclxuICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0U2NhbGUoTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDApO1xyXG4gIH1cclxuXHJcbiAgX21vdmVTdGFydChldmVudCkge1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICB5OiBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldCA9IHtcclxuICAgICAgICB4OiBldmVudC5jZW50ZXIueCxcclxuICAgICAgICB5OiBldmVudC5jZW50ZXIueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzZXQgPSB7XHJcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gcmVjdC54LFxyXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIHJlY3QueSxcclxuICAgICAgbGVmdDogKHJlY3QgYXMgQ2xpZW50UmVjdCkubGVmdCAtIGhvc3RSZWN0LngsXHJcbiAgICAgIHRvcDogKHJlY3QgYXMgQ2xpZW50UmVjdCkudG9wIC0gaG9zdFJlY3QueVxyXG4gICAgfTtcclxuICB9XHJcbiAgX21vdmUoZXZlbnQpIHtcclxuICAgIGxldCB4LCB5O1xyXG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xyXG4gICAgICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxyXG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gKHRoaXMub2Zmc2V0LnkpOyB9XHJcblxyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dCh7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSByb3VuZE51bWJlcihudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMTAwMDAwKSAvIDEwMDAwMDtcclxuICB9XHJcbiAgLyoqKyAqL1xyXG4gIHpvb21JbigpIHtcclxuICAgIC8vIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlICsgdGhpcy56b29tU2NhbGUpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgKyAuMDUpO1xyXG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqLSAqL1xyXG4gIHpvb21PdXQoKSB7XHJcbiAgICAvLyBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSAtIHRoaXMuem9vbVNjYWxlKTtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlIC0gLjA1KTtcclxuICAgIGlmIChzY2FsZSA+IHRoaXMuem9vbVNjYWxlICYmIHNjYWxlIDw9IDEpIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNldEltYWdlVXJsKHRoaXMuc3JjKTtcclxuICB9XHJcbiAgY2VudGVyKGltZz86IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmICghaW1nKSB7XHJcbiAgICAgIGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB3ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSBpbWcud2lkdGgpIC8gMjtcclxuICAgIGNvbnN0IGggPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBpbWcuaGVpZ2h0KSAvIDI7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgIHdpZHRoOiBgJHtpbWcud2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2ltZy5oZWlnaHR9cHhgLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKGltZy53aWR0aCwgaW1nLmhlaWdodClcclxuICAgIH07XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHJlc3VsdCk7XHJcbiAgfVxyXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNyYyA9IHNyYztcclxuICAgIGlmICghc3JjKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgdGhpcy5lcnJvci5lbWl0KG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5pbWcubmV4dChpbWcpO1xyXG4gICAgICB0aGlzLmxvYWRlZC5lbWl0KG51bGwpO1xyXG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIG1heCguLi52YWx1ZXM6IG51bWJlcltdKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXHJcbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKHRoaXMubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyB0aGlzLm1heChjb25maWcuaGVpZ2h0LCBjb25maWcud2lkdGgpKSAvIE1hdGgubG9nKDIpKSAtIDE7XHJcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XHJcblxyXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cclxuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcclxuXHJcbiAgICAvKiogQ29udGV4dCAqL1xyXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IHEgPSBNYXRoLnBvdyhxdWFsaXR5ICogMTAsIG51bVN0ZXBzKSAvIE1hdGgucG93KDEwLCBudW1TdGVwcyk7XHJcblxyXG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xyXG4gICAgaWYgKG51bVN0ZXBzKSB7XHJcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xyXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcclxuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xyXG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cclxuICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XHJcblxyXG4gICAgICAvKiogU3RlcHMgKi9cclxuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKGEsIGIpID0+IHtcclxuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXHJcbiAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgdywgaFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RlcCBmaW5hbFxyXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxyXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xyXG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcclxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxyXG4gICAgICAwLCAwLFxyXG4gICAgICBpbWcud2lkdGggKiAocSksIGltZy5oZWlnaHQgKiAocSksXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcclxuICAgICk7XHJcbiAgICByZXR1cm4gb2M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcm9wIEltYWdlXHJcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxyXG4gICAqL1xyXG4gIGNyb3AoKTogQ3JvcHBlZEltYWdlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2U2NEltYWdlOiB0aGlzLmNyb3BwKCksXHJcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgdGhpcy5jb25maWcudHlwZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxyXG4gICAqL1xyXG4gIGNyb3BwKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBteUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIENPTkZJR19ERUZBVUxULCB0aGlzLmNvbmZpZyk7XHJcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xyXG4gICAgY29uc3QgbGVmdCA9IChyZWN0LmxlZnQgLSBpbWcubGVmdCk7XHJcbiAgICBjb25zdCB0b3AgPSAocmVjdC50b3AgLSBpbWcudG9wKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbmZpZ0NhbnZhcyA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHRoaXMuc2NhbGU7XHJcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyB0aGlzLnNjYWxlO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZyxcclxuICAgICAgLShsZWZ0IC8gdGhpcy5zY2FsZSksIC0odG9wIC8gdGhpcy5zY2FsZSksXHJcbiAgICApO1xyXG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCAwLjUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgMC41KTtcclxuICAgIH1cclxuICAgIGxldCB1cmw7XHJcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xyXG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuZGVmYXVsdFR5cGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXN1bHQgPSAodXJsKTtcclxuICAgIHRoaXMuY3JvcHBlZC5lbWl0KHtcclxuICAgICAgYmFzZTY0SW1hZ2U6IHVybCxcclxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG59XHJcbiJdfQ==