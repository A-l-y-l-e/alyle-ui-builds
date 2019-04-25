var DynamicInjector = /** @class */ (function () {
    function DynamicInjector(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    DynamicInjector.prototype.get = function (token, notFoundValue, _flags) {
        var value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicInjector;
}());
export { DynamicInjector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkeW5hbWljLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBRUUseUJBQW9CLFlBQXNCLEVBQVUsZUFBeUI7UUFBekQsaUJBQVksR0FBWixZQUFZLENBQVU7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBVTtJQUFJLENBQUM7SUFJbEYsNkJBQUcsR0FBSCxVQUFJLEtBQVUsRUFBRSxhQUFtQixFQUFFLE1BQVk7UUFDL0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTFELElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFmRCxJQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIFR5cGUsIEluamVjdGlvblRva2VuLCBJbmplY3RGbGFncyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHluYW1pY0luamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25ld0luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfcGFyZW50SW5qZWN0b3I6IEluamVjdG9yKSB7IH1cblxuICBnZXQ8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUO1xuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk7XG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55LCBfZmxhZ3M/OiBhbnkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX25ld0luamVjdG9yLmdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW5qZWN0b3IuZ2V0PGFueT4odG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICB9XG59XG4iXX0=