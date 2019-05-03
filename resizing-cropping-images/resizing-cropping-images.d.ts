import { ElementRef, ChangeDetectorRef, EventEmitter, Renderer2, NgZone, OnDestroy } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** Image Cropper Config */
export interface ImgCropperConfig {
    /** Cropper area width */
    width: number;
    /** Cropper area height */
    height: number;
    /** If this is not defined, the new image will be automatically defined. */
    type?: string;
    /** Background color( default: null), if is null in png is transparent but not in jpg. */
    fill?: string | null;
    /** Set anti-aliased( default: true) */
    antiAliased?: boolean;
    autoCrop?: boolean;
    output?: ImgOutput | ImgResolution;
    /**
     * Zoom out until the entire image fits into the cropping area.
     * default: false
     */
    extraZoomOut?: boolean;
    /**
     * Emit event `error` if the file size in bytes for the limit.
     * Note: It only works when the image is received from the `<input>` event.
     */
    maxFileSize?: number | null;
}
export interface ImgOutput {
    width: number;
    height: number;
}
/** Image output */
export declare enum ImgResolution {
    /** Resizing & cropping */
    Default = 0,
    /** Only cropping */
    OriginalImage = 1
}
/** Image output */
export declare enum ImgCropperError {
    /** The loaded image exceeds the size limit set. */
    Size = 0,
    /** The file loaded is not image. */
    Type = 1
}
export interface ImgCropperEvent {
    /** Cropped image data URL */
    dataURL?: string;
    name: string | null;
    /** Filetype */
    type?: string;
    width?: number;
    height?: number;
    /** Original Image data URL */
    originalDataURL?: string;
    scale?: number;
    /** Current rotation in degrees */
    rotation?: number;
    /** Size of the image in bytes */
    size?: number;
    position?: {
        x: number;
        y: number;
    };
}
export interface ImgCropperErrorEvent extends ImgCropperEvent {
    /** Type of error */
    error: ImgCropperError;
}
export declare class LyResizingCroppingImages implements OnDestroy {
    private _renderer;
    private theme;
    private elementRef;
    private cd;
    private _ngZone;
    /**
     * styles
     * @docs-private
     */
    readonly classes: Record<"root" | "imgContainer" | "area" | "defaultContent", string>;
    _originalImgBase64?: string;
    private _fileName;
    /** Original image */
    private _img;
    private offset?;
    private _scale?;
    private _scal3Fix?;
    private _minScale?;
    private _config;
    private _imgRect;
    private _rotation;
    private _listeners;
    private _sizeInBytes;
    /**
     * When is loaded image
     * @internal
     */
    _isLoadedImg: boolean;
    /** When is loaded image & ready for crop */
    isLoaded: boolean;
    isCropped: boolean;
    _imgContainer: ElementRef;
    _croppingContainer: ElementRef;
    _imgCanvas: ElementRef<HTMLCanvasElement>;
    config: ImgCropperConfig;
    /** Set scale */
    scale: number | undefined;
    /**
     * Emit event `error` if the file size for the limit.
     * Note: It only works when the image is received from the `<input>` event.
     */
    maxFileSize: number;
    /** Get min scale */
    readonly minScale: number | undefined;
    readonly scaleChange: EventEmitter<number>;
    /** On loaded new image */
    readonly loaded: EventEmitter<ImgCropperEvent>;
    /** On crop new image */
    readonly cropped: EventEmitter<ImgCropperEvent>;
    /** Emit an error when the loaded image is not valid */
    readonly error: EventEmitter<ImgCropperErrorEvent>;
    private _defaultType?;
    constructor(_renderer: Renderer2, theme: LyTheme2, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef, _ngZone: NgZone);
    ngOnDestroy(): void;
    private _imgLoaded;
    private _setStylesForContImg;
    _resize$(): void;
    selectInputEvent(img: Event): void;
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    setScale(size?: number, noAutoCrop?: boolean): void;
    private _getCenterPoints;
    /**
     * Ajustar a la pantalla
     */
    fitToScreen(): void;
    fit(): void;
    _moveStart(): void;
    _move(event: {
        srcEvent?: {};
        deltaX: any;
        deltaY: any;
    }): void;
    updatePosition(x?: number, y?: number): void;
    _slideEnd(): void;
    private _cropIfAutoCrop;
    /**+ */
    zoomIn(): void;
    /** Clean the img cropper */
    clean(): void;
    /**- */
    zoomOut(): void;
    center(): void;
    /**
     * Load Image from URL
     * @param src URL
     * @param fn function that will be called before emit the event loaded
     */
    setImageUrl(src: string, fn?: () => void): void;
    rotate(degrees: number): void;
    private _updateMinScale;
    private imageSmoothingQuality;
    /**
     * Crop Image
     * Resizing & cropping image
     */
    crop(config?: ImgCropperConfig): ImgCropperEvent;
    /**
     * @docs-private
     */
    private _imgCrop;
    private _rootRect;
    private _areaCropperRect;
}
