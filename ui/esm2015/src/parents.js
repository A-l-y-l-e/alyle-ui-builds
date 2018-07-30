/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} parentSelector
 * @return {?}
 */
export function getParents(el, parentSelector) {
    // If no parentSelector defined will bubble up all the way to *document*
    if (parentSelector === undefined) {
        parentSelector = 'body';
    }
    const /** @type {?} */ parents = [];
    let /** @type {?} */ p = el.parentNode;
    let /** @type {?} */ pxz = null;
    while (!pxz) {
        const /** @type {?} */ o = p;
        parents.push(o);
        p = o.parentNode;
        pxz = p.querySelector(parentSelector);
    }
    // parents.push(_parentSelector); // Push that parentSelector you wanted to stop at
    // console.log(parents[parents.length - 1]);
    return parents[parents.length - 1];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9wYXJlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0scUJBQXFCLEVBQWUsRUFBRSxjQUFzQjs7SUFHaEUsSUFBSSxjQUFjLEtBQUssU0FBUyxFQUFFO1FBQzlCLGNBQWMsR0FBRyxNQUFNLENBQUM7S0FDM0I7SUFFRCx1QkFBTSxPQUFPLEdBQWUsRUFBRSxDQUFDO0lBQy9CLHFCQUFJLENBQUMsR0FBUSxFQUFFLENBQUMsVUFBVSxDQUFDO0lBQzNCLHFCQUFJLEdBQUcsR0FBZ0IsSUFBSSxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLEVBQUU7UUFDVCx1QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNqQixHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUN6Qzs7O0lBR0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRzKGVsOiBIVE1MRWxlbWVudCwgcGFyZW50U2VsZWN0b3I6IHN0cmluZykge1xyXG5cclxuICAvLyBJZiBubyBwYXJlbnRTZWxlY3RvciBkZWZpbmVkIHdpbGwgYnViYmxlIHVwIGFsbCB0aGUgd2F5IHRvICpkb2N1bWVudCpcclxuICBpZiAocGFyZW50U2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwYXJlbnRTZWxlY3RvciA9ICdib2R5JztcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmVudHM6IEFycmF5PGFueT4gPSBbXTtcclxuICBsZXQgcDogYW55ID0gZWwucGFyZW50Tm9kZTtcclxuICBsZXQgcHh6OiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbiAgd2hpbGUgKCFweHopIHtcclxuICAgICAgY29uc3QgbyA9IHA7XHJcbiAgICAgIHBhcmVudHMucHVzaChvKTtcclxuICAgICAgcCA9IG8ucGFyZW50Tm9kZTtcclxuICAgICAgcHh6ID0gcC5xdWVyeVNlbGVjdG9yKHBhcmVudFNlbGVjdG9yKTtcclxuICB9XHJcbiAgLy8gcGFyZW50cy5wdXNoKF9wYXJlbnRTZWxlY3Rvcik7IC8vIFB1c2ggdGhhdCBwYXJlbnRTZWxlY3RvciB5b3Ugd2FudGVkIHRvIHN0b3AgYXRcclxuICAvLyBjb25zb2xlLmxvZyhwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0pO1xyXG4gIHJldHVybiBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV07XHJcbn1cclxuIl19