/**
 * TODO: add resizing image
 */
import { ElementRef, ChangeDetectorRef, AfterContentInit, EventEmitter, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LyTheme2 } from '@alyle/ui';
export interface LyResizingCroppingImagesConfig {
    width: number;
    height: number;
    /** If this is not defined, the new image will be automatically defined */
    type?: string;
    /** Background color( default: null), if is null in png is transparent but not in jpg */
    fill?: string | null;
    output?: {
        width: number;
        height: number;
    } | ImageResolution;
}
export declare enum ImageResolution {
    /** Resizing & cropping */
    Default = 0,
    /** Only cropping */
    OriginalImage = 1
}
export interface CroppedImage {
    base64Image: string;
    type: string;
}
export interface ImageState {
    isLoaded: boolean;
    isCrop: boolean;
}
export declare class LyResizingCroppingImages implements AfterContentInit {
    private _renderer;
    private theme;
    private elementRef;
    private cd;
    classes: Record<"root" | "imgContainer" | "croppingContainer" | "croppContent", string>;
    img: BehaviorSubject<HTMLImageElement>;
    result: string;
    fileName: string;
    private _img;
    private offset;
    private scale;
    imgContainer: ElementRef;
    croppingContainer: ElementRef;
    src: string;
    format: string;
    config: LyResizingCroppingImagesConfig;
    isLoaded: boolean;
    isCropped: boolean;
    /** On loaded new image */
    loaded: EventEmitter<null>;
    /** On crop new image */
    cropped: EventEmitter<CroppedImage>;
    /** On error new image */
    error: EventEmitter<null>;
    private defaultType;
    private _dragData;
    dragData: Observable<{
        width: string;
        height: string;
        transform: string;
    }>;
    private zoomScale;
    constructor(_renderer: Renderer2, theme: LyTheme2, elementRef: ElementRef, cd: ChangeDetectorRef);
    selectInputEvent(img: Event): void;
    fixedNum(num: number): number;
    setScale(size: number): void;
    private customCenter;
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
    /**- */
    zoomOut(): void;
    ngAfterContentInit(): void;
    center(img?: HTMLImageElement): void;
    setImageUrl(src: string): void;
    private max;
    private imageSmoothingQuality;
    /**
     * Crop Image
     * Resizing & cropping image
     */
    crop(): CroppedImage;
    /**
     * Deprecated, use crop() instead
     */
    cropp(): string;
}
