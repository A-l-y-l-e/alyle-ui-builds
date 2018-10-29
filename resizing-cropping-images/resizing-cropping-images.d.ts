import { ElementRef, ChangeDetectorRef, EventEmitter, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export interface LyResizingCroppingImagesConfig {
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
    output?: {
        width: number;
        height: number;
    } | ImageResolution | ImgResolution;
}
export declare type ImgCropperConfig = LyResizingCroppingImagesConfig;
/** Image output */
export declare enum ImgResolution {
    /** Resizing & cropping */
    Default = 0,
    /** Only cropping */
    OriginalImage = 1
}
/** @ignore @deprecated, use `ImgResolution` instead */
export declare enum ImageResolution {
    /** Resizing & cropping */
    Default = 0,
    /** Only cropping */
    OriginalImage = 1
}
/** @deprecated, use `ImgCropperEvent` instead */
export declare type CroppedImage = ImgCropperEvent;
export interface ImgCropperEvent {
    /** @deprecated, use `base64` instead */
    base64Image: string;
    base64: string;
    name: string;
    type: string;
    width: number;
    height: number;
}
export interface ImageState {
    isLoaded: boolean;
    isCrop: boolean;
}
export declare class LyResizingCroppingImages {
    private _renderer;
    private theme;
    private elementRef;
    private cd;
    /**
     * styles
     * @ignore
     */
    classes: Record<"root" | "imgContainer" | "croppingContainer" | "croppContent", string>;
    /** @deprecated */
    result: string;
    private _fileName;
    private _img;
    private offset;
    private _scale;
    private _minScale;
    private _config;
    _imgContainer: ElementRef;
    _croppingContainer: ElementRef;
    /** @deprecated @ignore */
    src: string;
    config: ImgCropperConfig;
    /** Get current scale */
    readonly scale: number;
    /** Get min scale */
    readonly minScale: number;
    isLoaded: boolean;
    isCropped: boolean;
    /** On loaded new image */
    loaded: EventEmitter<ImgCropperEvent>;
    /** On crop new image */
    cropped: EventEmitter<ImgCropperEvent>;
    /** Emit an error when the loaded image is not valid */
    error: EventEmitter<ImgCropperEvent>;
    private _defaultType;
    constructor(_renderer: Renderer2, theme: LyTheme2, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef);
    private _imgLoaded;
    private _setStylesForContImg;
    selectInputEvent(img: Event): void;
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    setScale(size: number): void;
    private customCenter;
    /** @ignore @deprecated, instead use setScale(1) */
    '1:1'(): void;
    /**
     * Ajustar a la pantalla
     */
    fitToScreen(): void;
    fit(): void;
    _moveStart(event: any): void;
    _move(event: any): void;
    private roundNumber;
    /**+ */
    zoomIn(): void;
    /** Clean the img cropper */
    clean(): void;
    /**- */
    zoomOut(): void;
    center(): void;
    private _setImageUrl;
    private max;
    private imageSmoothingQuality;
    /**
     * Crop Image
     * Resizing & cropping image
     */
    crop(config?: ImgCropperConfig): ImgCropperEvent;
    /**
     * @ignore @deprecated, use crop() instead
     */
    cropp(myConfig: ImgCropperConfig): {
        base64Image: any;
        base64: any;
        type: string;
        name: string;
        width: number;
        height: number;
    };
}
