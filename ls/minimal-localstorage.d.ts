import { Observable } from 'rxjs';
export declare class MinimalStorage {
    constructor(key$: string, val: any);
}
export declare class MinimalLS {
    private platformId;
    private itemsSubject;
    private _prefix;
    private storageEvent;
    private storage;
    private storageObservable;
    constructor(platformId: Object);
    /**
     * get boolean
     */
    hasItem(key$: string): boolean;
    /**
     * Set new item or replace item
     */
    setItem(key$: string, val: any, _storage?: boolean): void;
    /**
     * Get Observable from localStorage
     */
    getItem(key$: string, before?: any): Observable<any>;
    /**
     * Get value from localstorage
     */
    item(key$: string): any;
    private _addPrefix;
    private _removePrefix;
}
