import { ElementRef, ChangeDetectorRef, EventEmitter, Renderer2, NgZone } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** Image Cropper Config */
export interface ImgCropperConfig {
    /** Cropper area width*/
    width: number;
    /** Cropper area height*/
    height: number;
    /** If this is not defined, the new image will be automatically defined */
    type?: string;
    /** Background color( default: null), if is null in png is transparent but not in jpg */
    fill?: string | null;
    /** Set anti-aliased( default: true) */
    antiAliased?: boolean;
    autoCrop?: boolean;
    output?: {
        width: number;
        height: number;
    } | ImgResolution;
}
/**
 * Deprecated, use instead ImgCropperConfig
 * @deprecated
 */
export declare type LyResizingCroppingImagesConfig = ImgCropperConfig;
/** Image output */
export declare enum ImgResolution {
    /** Resizing & cropping */
    Default = 0,
    /** Only cropping */
    OriginalImage = 1
}
export interface ImgCropperEvent {
    /** Cropped image in base64, !deprecated use instead `dataURL` */
    base64: string;
    /** Cropped image data URL */
    dataURL: string;
    name: string;
    /** Filetype */
    type: string;
    width: number;
    height: number;
    /** Original Image data URL */
    originalDataURL: string;
    scale: number;
    /** Current rotation in degrees */
    rotation: number;
    position: {
        x: number;
        y: number;
    };
}
export declare class LyResizingCroppingImages {
    private _renderer;
    private theme;
    private elementRef;
    private cd;
    private _ngZone;
    /**
     * styles
     * @ignore
     */
    readonly classes: Record<"root" | "imgContainer" | "croppingContainer" | "croppContent", string>;
    _originalImgBase64: string;
    private _fileName;
    /** Original image */
    private _img;
    private offset;
    private _scale;
    private _scal3Fix;
    private _minScale;
    private _config;
    private _imgRect;
    private _rotation;
    _imgContainer: ElementRef;
    _croppingContainer: ElementRef;
    _imgCanvas: ElementRef<HTMLCanvasElement>;
    readonly scaleChange: EventEmitter<number>;
    config: ImgCropperConfig;
    /** Set scale */
    scale: number;
    /** Get min scale */
    readonly minScale: number;
    /** When is loaded image */
    _isLoadedImg: boolean;
    /** When is loaded image & ready for crop */
    isLoaded: boolean;
    isCropped: boolean;
    /** On loaded new image */
    readonly loaded: EventEmitter<ImgCropperEvent>;
    /** On crop new image */
    readonly cropped: EventEmitter<ImgCropperEvent>;
    /** Emit an error when the loaded image is not valid */
    readonly error: EventEmitter<ImgCropperEvent>;
    private _defaultType;
    constructor(_renderer: Renderer2, theme: LyTheme2, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef, _ngZone: NgZone);
    private _imgLoaded;
    private _setStylesForContImg;
    resize$(): void;
    selectInputEvent(img: Event): void;
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    setScale(size: number, noAutoCrop?: boolean): void;
    private _getCenterPoints;
    /**
     * Ajustar a la pantalla
     */
    fitToScreen(): void;
    fit(): void;
    _moveStart(): void;
    _move(event: any): void;
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
    /** Set Img */
    setImageUrl(src: string): void;
    rotate(degrees: number): void;
    private imageSmoothingQuality;
    /**
     * Crop Image
     * Resizing & cropping image
     */
    crop(config?: ImgCropperConfig): ImgCropperEvent;
    /**
     * @ignore
     */
    _imgCrop(myConfig: ImgCropperConfig): {
        dataURL: any;
        base64: any;
        type: string;
        name: string;
        width: number;
        height: number;
        originalDataURL: string;
        scale: number;
        rotation: number;
        position: {
            x: number;
            y: number;
        };
    };
    private _rootRect;
    private _areaCropperRect;
}
