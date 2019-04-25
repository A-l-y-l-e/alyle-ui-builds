export interface SelectionOpts<T = any> {
    multiple?: true;
    /**
     * Initially selected values
     * Note: if `multiple` === `true` then `selecteds` should be of type `T[]`
     * else it should be of type `T`
     */
    selecteds?: T | T[];
    getKey?: (o: T) => unknown;
}
export declare class LySelectionModel<T = any> {
    readonly _selectionMap: Map<unknown, T>;
    private _multiple?;
    private _getKeyFn;
    /** Cache for the array value of the selected items. */
    private _selected;
    /** Selected values. */
    readonly selected: T[];
    constructor(opts?: SelectionOpts<T>);
    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value: T): void;
    /**
     * Selects one or several values.
     */
    select(...values: T[]): void;
    /**
     * Deselects a value or an array of values.
     */
    deselect(...values: T[]): void;
    /**
     * Determines whether a value is selected.
     */
    isSelected(value: T): boolean;
    /**
     * Determines whether the model does not have a value.
     */
    isEmpty(): boolean;
    /**
     * Determines whether the model has a value.
     */
    hasValue(): boolean;
    /**
     * Gets whether multiple values can be selected.
     */
    isMultipleSelection(): true;
    /**
     * Clears all of the selected values.
     */
    clear(): void;
    /** Selects a value. */
    private _markSelected;
    /** Deselects a value. */
    private _unmarkSelected;
    /** Clears out the selected values. */
    private _unmarkAll;
    /** Clear the selected values so they can be re-cached. */
    private _clearSelectedValues;
}
